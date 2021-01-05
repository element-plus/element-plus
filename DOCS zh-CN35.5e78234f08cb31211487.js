(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[225],{

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/message-box.md?vue&type=template&id=14e339ae

var message_boxvue_type_template_id_14e339ae_hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"messagebox-dan-kuang\"><a class=\"header-anchor\" href=\"#messagebox-dan-kuang\">¶</a> MessageBox 弹框</h2><p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。</p><div class=\"tip\"><p>从场景上说，MessageBox 的作用是美化系统自带的 <code>alert</code>、<code>confirm</code> 和 <code>prompt</code>，因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用 Dialog。</p></div><h3 id=\"xiao-xi-ti-shi\"><a class=\"header-anchor\" href=\"#xiao-xi-ti-shi\">¶</a> 消息提示</h3><p>当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("调用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$alert"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("方法即可打开消息提示，它模拟了系统的 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "alert"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，无法通过按下 ESC 或点击框外关闭。此例中接收了两个参数，"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。值得一提的是，窗口被关闭后，它默认会返回一个"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("对象便于进行后续操作的处理。若不确定浏览器是否支持"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">点击打开 Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert('这是一段内容', '标题名称', {\n          confirmButtonText: '确定',\n          callback: action => {\n            this.$message({\n              type: 'info',\n              message: `action: ${ action }`\n            });\n          }\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "que-ren-xiao-xi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#que-ren-xiao-xi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 确认消息")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("调用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$confirm"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("方法即可打开消息提示，它模拟了系统的 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "confirm"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。Message Box 组件也拥有极高的定制性，我们可以传入"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("作为第三个参数，它是一个字面量对象。"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("字段表明消息类型，可以为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "success"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "error"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "warning"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，无效的设置将会被忽略。注意，第二个参数"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("必须定义为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("类型，如果是"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Object"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，会被理解为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。在这里我们用了 Promise 来处理后续响应。")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">点击打开 Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {\n          confirmButtonText: '确定',\n          cancelButtonText: '取消',\n          type: 'warning'\n        }).then(() => {\n          this.$message({\n            type: 'success',\n            message: '删除成功!'\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: '已取消删除'\n          });\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ti-jiao-nei-rong"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ti-jiao-nei-rong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 提交内容")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("调用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$prompt"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("方法即可打开消息提示，它模拟了系统的 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "prompt"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。可以用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inputPattern"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("字段自己规定匹配模式，或者用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inputValidator"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("规定校验函数，可以返回"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("或"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，返回"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("或字符串时均表示校验未通过，同时返回的字符串相当于定义了"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inputErrorMessage"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("字段。此外，可以用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inputPlaceholder"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("字段来定义输入框的占位符。")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">点击打开 Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$prompt('请输入邮箱', '提示', {\n          confirmButtonText: '确定',\n          cancelButtonText: '取消',\n          inputPattern: /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,\n          inputErrorMessage: '邮箱格式不正确'\n        }).then(({ value }) => {\n          this.$message({\n            type: 'success',\n            message: '你的邮箱是: ' + value\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: '取消输入'\n          });\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zi-ding-yi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 自定义")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可自定义配置不同内容。", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("以上三个方法都是对"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("方法的再包装。本例直接调用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("方法，使用了"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "showCancelButton"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("字段，用于显示取消按钮。另外可使用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "cancelButtonClass"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("为其添加自定义样式，使用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "cancelButtonText"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("来自定义按钮文本（Confirm 按钮也具有相同的字段，在文末的字段说明中有完整的字段列表）。此例还使用了"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "beforeClose"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性，它的值是一个方法，会在 MessageBox 的实例关闭前被调用，同时暂停实例的关闭。它有三个参数："), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "action"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("、实例本身和"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("方法。使用它能够在关闭前对实例进行一些操作，比如为确定按钮添加"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "loading"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("状态等；此时若需要关闭实例，可以调用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("方法（若在"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "beforeClose"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("中没有调用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，则实例不会关闭）。")])], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">点击打开 Message Box</el-button>\n</template>\n\n<script>\n  import { h } from 'vue';\n\n  export default {\n    methods: {\n      open() {\n        this.$msgbox({\n          title: '消息',\n          message: h('p', null, [\n            h('span', null, '内容可以是 '),\n            h('i', { style: 'color: teal' }, 'VNode')\n          ]),\n          showCancelButton: true,\n          confirmButtonText: '确定',\n          cancelButtonText: '取消',\n          beforeClose: (action, instance, done) => {\n            if (action === 'confirm') {\n              instance.confirmButtonLoading = true;\n              instance.confirmButtonText = '执行中...';\n              setTimeout(() => {\n                done();\n                setTimeout(() => {\n                  instance.confirmButtonLoading = false;\n                }, 300);\n              }, 3000);\n            } else {\n              done();\n            }\n          }\n        }).then(action => {\n          this.$message({\n            type: 'info',\n            message: 'action: ' + action\n          });\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"tip\"><p>弹出层的内容可以是 <code>VNode</code>，所以我们能把一些自定义组件传入其中。每次弹出层打开后，Vue 会对新老 <code>VNode</code> 节点进行比对，然后将根据比较结果进行最小单位地修改视图。这也许会造成弹出层内容区域的组件没有重新渲染，例如 <a href=\"https://github.com/ElemeFE/element/issues/8931\">#8931</a>。当这类问题出现时，解决方案是给 <code>VNode</code> 加上一个不相同的 key，参考<a href=\"https://jsfiddle.net/zhiyang/ezmhq2ef/\">这里</a>。</p></div><h3 id=\"shi-yong-html-pian-duan\"><a class=\"header-anchor\" href=\"#shi-yong-html-pian-duan\">¶</a> 使用 HTML 片段</h3><p><code>message</code> 属性支持传入 HTML 片段。</p>", 3);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("将"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性设置为 true，"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 就会被当作 HTML 片段处理。")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">点击打开 Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {\n          dangerouslyUseHTMLString: true\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"warning\"><p><code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 <a href=\"https://en.wikipedia.org/wiki/Cross-site_scripting\">XSS 攻击</a>。因此在 <code>dangerouslyUseHTMLString</code> 打开的情况下，请确保 <code>message</code> 的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给 <code>message</code> 属性。</p></div><h3 id=\"qu-fen-qu-xiao-yu-guan-bi\"><a class=\"header-anchor\" href=\"#qu-fen-qu-xiao-yu-guan-bi\">¶</a> 区分取消与关闭</h3><p>有些场景下，点击取消按钮与点击关闭按钮有着不同的含义。</p>", 3);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("默认情况下，当用户触发取消（点击取消按钮）和触发关闭（点击关闭按钮或遮罩层、按下 ESC 键）时，Promise 的 reject 回调和"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "callback"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("回调的参数均为 'cancel'。如果将"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "distinguishCancelAndClose"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性设置为 true，则上述两种行为的参数分别为 'cancel' 和 'close'。")])], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">点击打开 Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {\n          distinguishCancelAndClose: true,\n          confirmButtonText: '保存',\n          cancelButtonText: '放弃修改'\n        })\n          .then(() => {\n            this.$message({\n              type: 'info',\n              message: '保存修改'\n            });\n          })\n          .catch(action => {\n            this.$message({\n              type: 'info',\n              message: action === 'cancel'\n                ? '放弃保存并离开页面'\n                : '停留在当前页面'\n            })\n          });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ju-zhong-bu-ju"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ju-zhong-bu-ju"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 居中布局")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "内容支持居中布局", -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("将 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 设置为 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 即可开启居中布局")])], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">点击打开 Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {\n          confirmButtonText: '确定',\n          cancelButtonText: '取消',\n          type: 'warning',\n          center: true\n        }).then(() => {\n          this.$message({\n            type: 'success',\n            message: '删除成功!'\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: '已取消删除'\n          });\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"quan-ju-fang-fa\"><a class=\"header-anchor\" href=\"#quan-ju-fang-fa\">¶</a> 全局方法</h3><p>如果你完整引入了 Element，它会为 <code>app.config.globalProperties</code> 添加如下全局方法：$msgbox, $alert, $confirm 和 $prompt。因此在 Vue instance 中可以采用本页面中的方式调用 <code>MessageBox</code>。调用参数为：</p><ul><li><code>$msgbox(options)</code></li><li><code>$alert(message, title, options)</code> 或 <code>$alert(message, options)</code></li><li><code>$confirm(message, title, options)</code> 或 <code>$confirm(message, options)</code></li><li><code>$prompt(message, title, options)</code> 或 <code>$prompt(message, options)</code></li></ul><h3 id=\"dan-du-yin-yong\"><a class=\"header-anchor\" href=\"#dan-du-yin-yong\">¶</a> 单独引用</h3><p>如果单独引入 <code>MessageBox</code>：</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElMessageBox } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code></pre><p>那么对应于上述四个全局方法的调用方法依次为：ElMessageBox, ElMessageBox.alert, ElMessageBox.confirm 和 ElMessageBox.prompt，调用参数与全局方法相同。</p><h3 id=\"options\"><a class=\"header-anchor\" href=\"#options\">¶</a> Options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>MessageBox 标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>message</td><td>MessageBox 消息正文内容</td><td>string / VNode</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>是否将 message 属性作为 HTML 片段处理</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>消息类型，用于显示图标</td><td>string</td><td>success / info / warning / error</td><td>—</td></tr><tr><td>iconClass</td><td>自定义图标的类名，会覆盖 <code>type</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>MessageBox 的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>callback</td><td>若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调</td><td>function(action, instance)，action 的值为&#39;confirm&#39;, &#39;cancel&#39;或&#39;close&#39;, instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法</td><td>—</td><td>—</td></tr><tr><td>showClose</td><td>MessageBox 是否显示右上角关闭按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>beforeClose</td><td>MessageBox 关闭前的回调，会暂停实例的关闭</td><td>function(action, instance, done)，action 的值为&#39;confirm&#39;, &#39;cancel&#39;或&#39;close&#39;；instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法；done 用于关闭 MessageBox 实例</td><td>—</td><td>—</td></tr><tr><td>distinguishCancelAndClose</td><td>是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 ESC 键）进行区分</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lockScroll</td><td>是否在 MessageBox 出现时将 body 滚动锁定</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showCancelButton</td><td>是否显示取消按钮</td><td>boolean</td><td>—</td><td>false（以 confirm 和 prompt 方式调用时为 true）</td></tr><tr><td>showConfirmButton</td><td>是否显示确定按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>cancelButtonText</td><td>取消按钮的文本内容</td><td>string</td><td>—</td><td>取消</td></tr><tr><td>confirmButtonText</td><td>确定按钮的文本内容</td><td>string</td><td>—</td><td>确定</td></tr><tr><td>cancelButtonClass</td><td>取消按钮的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>confirmButtonClass</td><td>确定按钮的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closeOnClickModal</td><td>是否可通过点击遮罩关闭 MessageBox</td><td>boolean</td><td>—</td><td>true（以 alert 方式调用时为 false）</td></tr><tr><td>closeOnPressEscape</td><td>是否可通过按下 ESC 键关闭 MessageBox</td><td>boolean</td><td>—</td><td>true（以 alert 方式调用时为 false）</td></tr><tr><td>closeOnHashChange</td><td>是否在 hashchange 时关闭 MessageBox</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showInput</td><td>是否显示输入框</td><td>boolean</td><td>—</td><td>false（以 prompt 方式调用时为 true）</td></tr><tr><td>inputPlaceholder</td><td>输入框的占位符</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputType</td><td>输入框的类型</td><td>string</td><td>—</td><td>text</td></tr><tr><td>inputValue</td><td>输入框的初始文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputPattern</td><td>输入框的校验表达式</td><td>regexp</td><td>—</td><td>—</td></tr><tr><td>inputValidator</td><td>输入框的校验函数。可以返回布尔值或字符串，若返回一个字符串, 则返回结果会被赋值给 inputErrorMessage</td><td>function</td><td>—</td><td>—</td></tr><tr><td>inputErrorMessage</td><td>校验未通过时的提示文本</td><td>string</td><td>—</td><td>输入的数据不合法!</td></tr><tr><td>center</td><td>是否居中布局</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>roundButton</td><td>是否使用圆角按钮</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 9);

function message_boxvue_type_template_id_14e339ae_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", message_boxvue_type_template_id_14e339ae_hoisted_1, [_hoisted_2, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, _hoisted_10, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    _: 1
  }), _hoisted_31, _hoisted_32, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_34];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_33];
    }),
    _: 1
  }), _hoisted_35]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/message-box.md?vue&type=template&id=14e339ae

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/message-box.md?vue&type=script&lang=ts


/* harmony default export */ var message_boxvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("点击打开 Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this = this;

            this.$alert('这是一段内容', '标题名称', {
              confirmButtonText: '确定',
              callback: function callback(action) {
                _this.$message({
                  type: 'info',
                  message: "action: " + action
                });
              }
            });
          }
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("点击打开 Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this2 = this;

            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(function () {
              _this2.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch(function () {
              _this2.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          }
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("点击打开 Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this3 = this;

            this.$prompt('请输入邮箱', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
              inputErrorMessage: '邮箱格式不正确'
            }).then(function (_ref) {
              var value = _ref.value;

              _this3.$message({
                type: 'success',
                message: '你的邮箱是: ' + value
              });
            }).catch(function () {
              _this3.$message({
                type: 'info',
                message: '取消输入'
              });
            });
          }
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("点击打开 Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var h = vue_esm_browser["s" /* h */];
      var democomponentExport = {
        methods: {
          open: function open() {
            var _this4 = this;

            this.$msgbox({
              title: '消息',
              message: h('p', null, [h('span', null, '内容可以是 '), h('i', {
                style: 'color: teal'
              }, 'VNode')]),
              showCancelButton: true,
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              beforeClose: function beforeClose(action, instance, done) {
                if (action === 'confirm') {
                  instance.confirmButtonLoading = true;
                  instance.confirmButtonText = '执行中...';
                  setTimeout(function () {
                    done();
                    setTimeout(function () {
                      instance.confirmButtonLoading = false;
                    }, 300);
                  }, 3000);
                } else {
                  done();
                }
              }
            }).then(function (action) {
              _this4.$message({
                type: 'info',
                message: 'action: ' + action
              });
            });
          }
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("点击打开 Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
              dangerouslyUseHTMLString: true
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("点击打开 Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this5 = this;

            this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {
              distinguishCancelAndClose: true,
              confirmButtonText: '保存',
              cancelButtonText: '放弃修改'
            }).then(function () {
              _this5.$message({
                type: 'info',
                message: '保存修改'
              });
            }).catch(function (action) {
              _this5.$message({
                type: 'info',
                message: action === 'cancel' ? '放弃保存并离开页面' : '停留在当前页面'
              });
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("点击打开 Message Box");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this6 = this;

            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
              center: true
            }).then(function () {
              _this6.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch(function () {
              _this6.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/message-box.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/message-box.md



message_boxvue_type_script_lang_ts.render = message_boxvue_type_template_id_14e339ae_render

/* harmony default export */ var message_box = __webpack_exports__["default"] = (message_boxvue_type_script_lang_ts);

/***/ })

}]);