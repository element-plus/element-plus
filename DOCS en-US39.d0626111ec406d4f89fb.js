(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/message.md?vue&type=template&id=27e970e8

var messagevue_type_template_id_27e970e8_hoisted_1 = {
  class: "content element-doc"
};

var messagevue_type_template_id_27e970e8_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "message"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#message"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Message")], -1);

var messagevue_type_template_id_27e970e8_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification.", -1);

var messagevue_type_template_id_27e970e8_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Basic usage")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Displays at the top, and disappears after 3 seconds.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("The setup of Message is very similar to notification, so parts of the options won't be explained in detail here. You can check the options table below combined with notification doc to understand it. Element Plus has registered a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$message"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" method for invoking. Message can take a string or a VNode as parameter, and it will be shown as the main body.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"open\">Show message</el-button>\n  <el-button :plain=\"true\" @click=\"openVn\">VNode</el-button>\n</template>\n\n<script>\n  import { h } from 'vue';\n\n  export default {\n    methods: {\n      open() {\n        this.$message('This is a message.');\n      },\n\n      openVn() {\n        this.$message({\n          message: h('p', null, [\n            h('span', null, 'Message can be '),\n            h('i', { style: 'color: teal' }, 'VNode')\n          ])\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, h } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessage('this is a message.');\n      };\n\n      const openVn = () => {\n        ElMessage({\n          message: h('p', null, [\n            h('span', null, 'Message can be '),\n            h('i', { style: 'color: teal' }, 'VNode'),\n          ]),\n        });\n      };\n\n      return {\n        open,\n        openVn,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "types"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#types"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Types")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Used to show the feedback of Success, Warning, Message and Error activities.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("When you need more customizations, Message component can also take an object as parameter. For example, setting value of "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" can define different types, and its default is "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". In such cases the main body is passed in as the value of "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Also, we have registered methods for different types, so you can directly call it without passing a type like "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "open4"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"open2\">success</el-button>\n  <el-button :plain=\"true\" @click=\"open3\">warning</el-button>\n  <el-button :plain=\"true\" @click=\"open1\">message</el-button>\n  <el-button :plain=\"true\" @click=\"open4\">error</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$message('This is a message.');\n      },\n      open2() {\n        this.$message({\n          message: 'Congrats, this is a success message.',\n          type: 'success'\n        });\n      },\n\n      open3() {\n        this.$message({\n          message: 'Warning, this is a warning message.',\n          type: 'warning'\n        });\n      },\n\n      open4() {\n        this.$message.error('Oops, this is a error message.');\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open1 = () => {\n        ElMessage('this is a message.');\n      };\n      const open2 = () => {\n        ElMessage({\n          message: 'Congrats, this is a success message.',\n          type: 'success',\n        });\n      };\n      const open3 = () => {\n        ElMessage({\n          message: 'Warning, this is a warning message.',\n          type: 'warning',\n        });\n      };\n      const open4 = () => {\n        ElMessage.error('Oops, this is a error message.');\n      };\n      return {\n        open1,\n        open2,\n        open3,\n        open4,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "closable"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#closable"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Closable")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "A close button can be added.", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("A default Message cannot be closed manually. If you need a closable message, you can set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "showClose"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" field. Besides, same as notification, message has a controllable "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "duration"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Default duration is 3000 ms, and it won't disappear when set to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"open1\">message</el-button>\n  <el-button :plain=\"true\" @click=\"open2\">success</el-button>\n  <el-button :plain=\"true\" @click=\"open3\">warning</el-button>\n  <el-button :plain=\"true\" @click=\"open4\">error</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$message({\n          showClose: true,\n          message: 'This is a message.'\n        });\n      },\n\n      open2() {\n        this.$message({\n          showClose: true,\n          message: 'Congrats, this is a success message.',\n          type: 'success'\n        });\n      },\n\n      open3() {\n        this.$message({\n          showClose: true,\n          message: 'Warning, this is a warning message.',\n          type: 'warning'\n        });\n      },\n\n      open4() {\n        this.$message({\n          showClose: true,\n          message: 'Oops, this is a error message.',\n          type: 'error'\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open1 = () => {\n        ElMessage({\n          showClose: true,\n          message: 'This is a message.',\n        });\n      };\n      const open2 = () => {\n        ElMessage({\n          showClose: true,\n          message: 'Congrats, this is a success message.',\n          type: 'success',\n        });\n      };\n      const open3 = () => {\n        ElMessage({\n          showClose: true,\n          message: 'Warning, this is a warning message.',\n          type: 'warning',\n        });\n      };\n      const open4 = () => {\n        ElMessage({\n          showClose: true,\n          message: 'Oops, this is a error message.',\n          type: 'error',\n        });\n      };\n      return {\n        open1,\n        open2,\n        open3,\n        open4,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "centered-text"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#centered-text"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Centered text")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute to center the text.")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"openCenter\">Centered text</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      openCenter() {\n        this.$message({\n          message: 'Centered text',\n          center: true\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const openCenter = () => {\n        ElMessage({\n          showClose: true,\n          message: 'Centered text',\n        });\n      };\n      return {\n        openCenter,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "use-html-string"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#use-html-string"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Use HTML string")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" supports HTML string.")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to true and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" will be treated as an HTML string.")])], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"openHTML\">Use HTML String</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      openHTML() {\n        this.$message({\n          dangerouslyUseHTMLString: true,\n          message: '<strong>This is <i>HTML</i> string</strong>'\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const openCenter = () => {\n        ElMessage({\n          dangerouslyUseHTMLString: true,\n          message: '<strong>This is <i>HTML</i> string</strong>',\n        });\n      };\n      return {\n        openCenter,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"warning\"><p>Although <code>message</code> property supports HTML strings, dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to <a href=\"https://en.wikipedia.org/wiki/Cross-site_scripting\">XSS attacks</a>. So when <code>dangerouslyUseHTMLString</code> is on, please make sure the content of <code>message</code> is trusted, and <strong>never</strong> assign <code>message</code> to user-provided content.</p></div><h3 id=\"global-method\"><a class=\"header-anchor\" href=\"#global-method\">¶</a> Global method</h3><p>Element Plus has added a global method <code>$message</code> for <code>app.config.globalProperties</code>. So in a vue instance you can call <code>Message</code> like what we did in this page.</p><h3 id=\"local-import\"><a class=\"header-anchor\" href=\"#local-import\">¶</a> Local import</h3><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElMessage } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code></pre><p>In this case you should call <code>ElMessage(options)</code>. We have also registered methods for different types, e.g. <code>ElMessage.success(options)</code>. You can call <code>ElMessage.closeAll()</code> to manually close all the instances.</p><h3 id=\"options\"><a class=\"header-anchor\" href=\"#options\">¶</a> Options</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>message</td><td>message text</td><td>string / VNode</td><td>—</td><td>—</td></tr><tr><td>type</td><td>message type</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>iconClass</td><td>custom icon&#39;s class, overrides <code>type</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>whether <code>message</code> is treated as HTML string</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>customClass</td><td>custom class name for Message</td><td>string</td><td>—</td><td>—</td></tr><tr><td>duration</td><td>display duration, millisecond. If set to 0, it will not turn off automatically</td><td>number</td><td>—</td><td>3000</td></tr><tr><td>showClose</td><td>whether to show a close button</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>center</td><td>whether to center the text</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>onClose</td><td>callback function when closed with the message instance as the parameter</td><td>function</td><td>—</td><td>—</td></tr><tr><td>offset</td><td>set the distance to the top of viewport</td><td>number</td><td>—</td><td>20</td></tr></tbody></table><h3 id=\"methods\"><a class=\"header-anchor\" href=\"#methods\">¶</a> Methods</h3><p><code>Message</code> and <code>this.$message</code> returns the current Message instance. To manually close the instance, you can call <code>close</code> on it.</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td>close</td><td>close the Message</td></tr></tbody></table>", 11);

function messagevue_type_template_id_27e970e8_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", messagevue_type_template_id_27e970e8_hoisted_1, [messagevue_type_template_id_27e970e8_hoisted_2, messagevue_type_template_id_27e970e8_hoisted_3, messagevue_type_template_id_27e970e8_hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, _hoisted_17, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_19, _hoisted_20, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/message.md?vue&type=template&id=27e970e8

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/message.md?vue&type=script&lang=ts


/* harmony default export */ var messagevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Show message");

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

      var h = vue_esm_browser["s" /* h */];
      var democomponentExport = {
        methods: {
          open: function open() {
            this.$message('This is a message.');
          },
          openVn: function openVn() {
            this.$message({
              message: h('p', null, [h('span', null, 'Message can be '), h('i', {
                style: 'color: teal'
              }, 'VNode')])
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
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("success");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("warning");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("message");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("error");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open2
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open3
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open1
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

      var democomponentExport = {
        methods: {
          open1: function open1() {
            this.$message('This is a message.');
          },
          open2: function open2() {
            this.$message({
              message: 'Congrats, this is a success message.',
              type: 'success'
            });
          },
          open3: function open3() {
            this.$message({
              message: 'Warning, this is a warning message.',
              type: 'warning'
            });
          },
          open4: function open4() {
            this.$message.error('Oops, this is a error message.');
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
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("message");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("success");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("warning");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("error");

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

      var democomponentExport = {
        methods: {
          open1: function open1() {
            this.$message({
              showClose: true,
              message: 'This is a message.'
            });
          },
          open2: function open2() {
            this.$message({
              showClose: true,
              message: 'Congrats, this is a success message.',
              type: 'success'
            });
          },
          open3: function open3() {
            this.$message({
              showClose: true,
              message: 'Warning, this is a warning message.',
              type: 'warning'
            });
          },
          open4: function open4() {
            this.$message({
              showClose: true,
              message: 'Oops, this is a error message.',
              type: 'error'
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
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Centered text");

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

      var democomponentExport = {
        methods: {
          openCenter: function openCenter() {
            this.$message({
              message: 'Centered text',
              center: true
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
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Use HTML String");

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

      var democomponentExport = {
        methods: {
          openHTML: function openHTML() {
            this.$message({
              dangerouslyUseHTMLString: true,
              message: '<strong>This is <i>HTML</i> string</strong>'
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
// CONCATENATED MODULE: ./website/docs/en-US/message.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/message.md



messagevue_type_script_lang_ts.render = messagevue_type_template_id_27e970e8_render

/* harmony default export */ var message = __webpack_exports__["default"] = (messagevue_type_script_lang_ts);

/***/ })

}]);