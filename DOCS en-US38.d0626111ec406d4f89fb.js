(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/message-box.md?vue&type=template&id=3f52ca58

var message_boxvue_type_template_id_3f52ca58_hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"messagebox\"><a class=\"header-anchor\" href=\"#messagebox\">¶</a> MessageBox</h2><p>A set of modal boxes simulating system message box, mainly for alerting information, confirm operations and prompting messages.</p><div class=\"tip\"><p>By design MessageBox provides simulations of system&#39;s <code>alert</code>, <code>confirm</code> and <code>prompt</code>，so it&#39;s content should be simple. For more complicated contents, please use Dialog.</p></div><h3 id=\"alert\"><a class=\"header-anchor\" href=\"#alert\">¶</a> Alert</h3><p>Alert interrupts user operation until the user confirms.</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Open an alert by calling the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$alert"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" method. It simulates the system's "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "alert"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", and cannot be closed by pressing ESC or clicking outside the box. In this example, two parameters "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" are received. It is worth mentioning that when the box is closed, it returns a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" object for further processing. If you are not sure if your target browsers support "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", you should import a third party polyfill or use callbacks instead like this example.")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open the Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert('This is a message', 'Title', {\n          confirmButtonText: 'OK',\n          callback: action => {\n            this.$message({\n              type: 'info',\n              message: `action: ${ action }`\n            });\n          }\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.alert('This is a message', 'Title', {\n          confirmButtonText: 'OK',\n          callback: (action) => {\n            this.$message({\n              type: 'info',\n              message: `action: ${action}`,\n            });\n          },\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "confirm"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#confirm"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Confirm")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Confirm is used to ask users' confirmation.", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Call "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$confirm"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" method to open a confirm, and it simulates the system's "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "confirm"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". We can also highly customize Message Box by passing a third attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" which is a literal object. The attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" indicates the message type, and it's value can be "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "success"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "error"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "warning"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Note that the second attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" must be a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "string"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", and if it is an "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "object"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", it will be handled as the attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Here we use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to handle further processing.")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open the Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          type: 'warning'\n        }).then(() => {\n          this.$message({\n            type: 'success',\n            message: 'Delete completed'\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: 'Delete canceled'\n          });\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent } from 'vue';\nimport { ElMessageBox } from 'element-plus';\nimport { ElMessage } from 'element-plus';\n\nexport default defineComponent({\n  setup() {\n    \n\n    const open = () => {\n      ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {\n        confirmButtonText: 'OK',\n        cancelButtonText: 'Cancel',\n        type: 'warning',\n      }).then(() => {\n        ElMessage({\n          type: 'success',\n          message: 'Delete completed',\n        });\n      }).catch(() => {\n        ElMessage({\n          type: 'info',\n          message: 'Delete canceled',\n        });\n      });\n    };\n\n    return {\n      open,\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "prompt"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#prompt"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Prompt")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Prompt is used when user input is required.", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Call "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$prompt"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" method to open a prompt, and it simulates the system's "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "prompt"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". You can use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inputPattern"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" parameter to specify your own RegExp pattern. Use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inputValidator"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to specify validation method, and it should return "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" or "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Returning "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" or "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" means the validation has failed, and the string returned will be used as the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inputErrorMessage"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". In addition, you can customize the placeholder of the input box with "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inputPlaceholder"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" parameter.")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$prompt('Please input your e-mail', 'Tip', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          inputPattern: /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,\n          inputErrorMessage: 'Invalid Email'\n        }).then(({ value }) => {\n          this.$message({\n            type: 'success',\n            message: 'Your email is:' + value\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: 'Input canceled'\n          });\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.prompt('Please input your e-mail', 'Tip', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          inputPattern: /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,\n          inputErrorMessage: 'Invalid Email',\n        })\n          .then(({ value }) => {\n            ElMessage({\n              type: 'success',\n              message: `Your email is:${value}`,\n            });\n          })\n          .catch(() => {\n            ElMessage({\n              type: 'info',\n              message: 'Input canceled',\n            });\n          });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "customization"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#customization"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Customization")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Can be customized to show various content.", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("The three methods mentioned above are repackagings of the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" method. This example calls "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" method directly using the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "showCancelButton"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute, which is used to indicate if a cancel button is displayed. Besides we can use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "cancelButtonClass"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to add a custom style and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "cancelButtonText"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to customize the button text (the confirm button also has these fields, and a complete list of fields can be found at the end of this documentation). This example also uses the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "beforeClose"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute. It is a method and will be triggered when the MessageBox instance will be closed, and its execution will stop the instance from closing. It has three parameters: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "action"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "instance"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Using it enables you to manipulate the instance before it closes, e.g. activating "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "loading"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" for confirm button; you can invoke the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" method to close the MessageBox instance (if "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" is not called inside "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "beforeClose"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", the instance will not be closed).")])], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  import { h } from 'vue';\n\n  export default {\n    methods: {\n      open() {\n        this.$msgbox({\n          title: 'Message',\n          message: h('p', null, [\n            h('span', null, 'Message can be '),\n            h('i', { style: 'color: teal' }, 'VNode')\n          ]),\n          showCancelButton: true,\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          beforeClose: (action, instance, done) => {\n            if (action === 'confirm') {\n              instance.confirmButtonLoading = true;\n              instance.confirmButtonText = 'Loading...';\n              setTimeout(() => {\n                done();\n                setTimeout(() => {\n                  instance.confirmButtonLoading = false;\n                }, 300);\n              }, 3000);\n            } else {\n              done();\n            }\n          }\n        }).then(action => {\n          this.$message({\n            type: 'info',\n            message: 'action: ' + action\n          });\n        });\n      },\n    }\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, h } from 'vue';\nimport { ElMessage } from 'element-plus';\nexport default defineComponent({\n  setup() {\n    \n\n    const open = () => {\n      ElMessageBox({\n        title: 'Message',\n        message: h('p', null, [\n          h('span', null, 'Message can be '),\n          h('i', { style: 'color: teal' }, 'VNode'),\n        ]),\n        showCancelButton: true,\n        confirmButtonText: 'OK',\n        cancelButtonText: 'Cancel',\n        beforeClose: (action, instance, done) => {\n          if (action === 'confirm') {\n            instance.confirmButtonLoading = true;\n            instance.confirmButtonText = 'Loading...';\n            setTimeout(() => {\n              done();\n              setTimeout(() => {\n                instance.confirmButtonLoading = false;\n              }, 300);\n            }, 3000);\n          } else {\n            done();\n          }\n        },\n      }).then((action) => {\n        ElMessage({\n          type: 'info',\n          message: `action: ${action}`,\n        });\n      });\n    };\n\n    return {\n      open,\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"tip\"><p>The content of MessageBox can be <code>VNode</code>, allowing us to pass custom components. When opening the MessageBox, Vue compares new <code>VNode</code> with old <code>VNode</code>, then figures out how to efficiently update the UI, so the components may not be completely re-rendered (<a href=\"https://github.com/ElemeFE/element/issues/8931\">#8931</a>). In this case, you can add a unique key to <code>VNode</code> each time MessageBox opens: <a href=\"https://jsfiddle.net/zhiyang/ezmhq2ef\">example</a>.</p></div><h3 id=\"use-html-string\"><a class=\"header-anchor\" href=\"#use-html-string\">¶</a> Use HTML String</h3><p><code>message</code> supports HTML string.</p>", 3);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to true and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" will be treated as an HTML string.")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert('<strong>This is <i>HTML</i> string</strong>', 'HTML String', {\n          dangerouslyUseHTMLString: true\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.alert('<strong>proxy is <i>HTML</i> string</strong>', 'HTML String', {\n          dangerouslyUseHTMLString: true,\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"warning\"><p>Although <code>message</code> property supports HTML strings, dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to <a href=\"https://en.wikipedia.org/wiki/Cross-site_scripting\">XSS attacks</a>. So when <code>dangerouslyUseHTMLString</code> is on, please make sure the content of <code>message</code> is trusted, and <strong>never</strong> assign <code>message</code> to user-provided content.</p></div><h3 id=\"distinguishing-cancel-and-close\"><a class=\"header-anchor\" href=\"#distinguishing-cancel-and-close\">¶</a> Distinguishing cancel and close</h3><p>In some cases, clicking the cancel button and close button may have different meanings.</p>", 3);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("By default, the parameters of Promise's reject callback and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "callback"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" are 'cancel' when the user cancels (clicking the cancel button) and closes (clicking the close button or mask layer, pressing the ESC key) the MessageBox. If "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "distinguishCancelAndClose"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" is set to true, the parameters of the above two operations are 'cancel' and 'close' respectively.")])], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('You have unsaved changes, save and proceed?', 'Confirm', {\n          distinguishCancelAndClose: true,\n          confirmButtonText: 'Save',\n          cancelButtonText: 'Discard Changes'\n        })\n          .then(() => {\n            this.$message({\n              type: 'info',\n              message: 'Changes saved. Proceeding to a new route.'\n            });\n          })\n          .catch(action => {\n            this.$message({\n              type: 'info',\n              message: action === 'cancel'\n                ? 'Changes discarded. Proceeding to a new route.'\n                : 'Stay in the current route'\n            })\n          });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.confirm('You have unsaved changes, save and proceed?', 'Confirm', {\n          distinguishCancelAndClose: true,\n          confirmButtonText: 'Save',\n          cancelButtonText: 'Discard Changes',\n        })\n          .then(() => {\n            ElMessage({\n              type: 'info',\n              message: 'Changes saved. Proceeding to a new route.',\n            });\n          })\n          .catch((action) => {\n            ElMessage({\n              type: 'info',\n              message: action === 'cancel'\n                ? 'Changes discarded. Proceeding to a new route.'\n                : 'Stay in the current route',\n            });\n          });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "centered-content"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#centered-content"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Centered content")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Content of MessageBox can be centered.", -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Setting "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" will center the content")])], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          type: 'warning',\n          center: true\n        }).then(() => {\n          this.$message({\n            type: 'success',\n            message: 'Delete completed'\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: 'Delete canceled'\n          });\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          type: 'warning',\n          center: true,\n        }).then(() => {\n          ElMessage({\n            type: 'success',\n            message: 'Delete completed',\n          });\n        }).catch(() => {\n          ElMessage({\n            type: 'info',\n            message: 'Delete canceled',\n          });\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"global-method\"><a class=\"header-anchor\" href=\"#global-method\">¶</a> Global method</h3><p>If Element Plus is fully imported, it will add the following global methods for <code>app.config.globalProperties</code>: <code>$msgbox</code>, <code>$alert</code>, <code>$confirm</code> and <code>$prompt</code>. So in a Vue instance you can call <code>MessageBox</code> like what we did in this page. The parameters are:</p><ul><li><code>$msgbox(options)</code></li><li><code>$alert(message, title, options)</code> or <code>$alert(message, options)</code></li><li><code>$confirm(message, title, options)</code> or <code>$confirm(message, options)</code></li><li><code>$prompt(message, title, options)</code> or <code>$prompt(message, options)</code></li></ul><h3 id=\"local-import\"><a class=\"header-anchor\" href=\"#local-import\">¶</a> Local import</h3><p>If you prefer importing <code>MessageBox</code> on demand:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElMessageBox } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code></pre><p>The corresponding methods are: <code>ElMessageBox</code>, <code>ElMessageBox.alert</code>, <code>ElMessageBox.confirm</code> and <code>ElMessageBox.prompt</code>. The parameters are the same as above.</p><h3 id=\"options\"><a class=\"header-anchor\" href=\"#options\">¶</a> Options</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>title of the MessageBox</td><td>string</td><td>—</td><td>—</td></tr><tr><td>message</td><td>content of the MessageBox</td><td>string</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>whether <code>message</code> is treated as HTML string</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>message type, used for icon display</td><td>string</td><td>success / info / warning / error</td><td>—</td></tr><tr><td>iconClass</td><td>custom icon&#39;s class, overrides <code>type</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>custom class name for MessageBox</td><td>string</td><td>—</td><td>—</td></tr><tr><td>callback</td><td>MessageBox closing callback if you don&#39;t prefer Promise</td><td>function(action), where action can be &#39;confirm&#39;, &#39;cancel&#39; or &#39;close&#39;, and <code>instance</code> is the MessageBox instance. You can access to that instance&#39;s attributes and methods</td><td>—</td><td>—</td></tr><tr><td>showClose</td><td>whether to show close icon of MessageBox</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>beforeClose</td><td>callback before MessageBox closes, and it will prevent MessageBox from closing</td><td>function(action, instance, done), where <code>action</code> can be &#39;confirm&#39;, &#39;cancel&#39; or &#39;close&#39;; <code>instance</code> is the MessageBox instance, and you can access to that instance&#39;s attributes and methods; <code>done</code> is for closing the instance</td><td>—</td><td>—</td></tr><tr><td>distinguishCancelAndClose</td><td>whether to distinguish canceling and closing the MessageBox</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lockScroll</td><td>whether to lock body scroll when MessageBox prompts</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showCancelButton</td><td>whether to show a cancel button</td><td>boolean</td><td>—</td><td>false (true when called with confirm and prompt)</td></tr><tr><td>showConfirmButton</td><td>whether to show a confirm button</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>cancelButtonText</td><td>text content of cancel button</td><td>string</td><td>—</td><td>Cancel</td></tr><tr><td>confirmButtonText</td><td>text content of confirm button</td><td>string</td><td>—</td><td>OK</td></tr><tr><td>cancelButtonClass</td><td>custom class name of cancel button</td><td>string</td><td>—</td><td>—</td></tr><tr><td>confirmButtonClass</td><td>custom class name of confirm button</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closeOnClickModal</td><td>whether MessageBox can be closed by clicking the mask</td><td>boolean</td><td>—</td><td>true (false when called with alert)</td></tr><tr><td>closeOnPressEscape</td><td>whether MessageBox can be closed by pressing the ESC</td><td>boolean</td><td>—</td><td>true (false when called with alert)</td></tr><tr><td>closeOnHashChange</td><td>whether to close MessageBox when hash changes</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showInput</td><td>whether to show an input</td><td>boolean</td><td>—</td><td>false (true when called with prompt)</td></tr><tr><td>inputPlaceholder</td><td>placeholder of input</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputType</td><td>type of input</td><td>string</td><td>—</td><td>text</td></tr><tr><td>inputValue</td><td>initial value of input</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputPattern</td><td>regexp for the input</td><td>regexp</td><td>—</td><td>—</td></tr><tr><td>inputValidator</td><td>validation function for the input. Should returns a boolean or string. If a string is returned, it will be assigned to inputErrorMessage</td><td>function</td><td>—</td><td>—</td></tr><tr><td>inputErrorMessage</td><td>error message when validation fails</td><td>string</td><td>—</td><td>Illegal input</td></tr><tr><td>center</td><td>whether to align the content in center</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>roundButton</td><td>whether to use round button</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>buttonSize</td><td>custom size of confirm and cancel buttons</td><td>string</td><td>mini / small / medium / large</td><td>small</td></tr></tbody></table>", 9);

function message_boxvue_type_template_id_3f52ca58_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", message_boxvue_type_template_id_3f52ca58_hoisted_1, [_hoisted_2, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, _hoisted_10, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    _: 1
  }), _hoisted_31, _hoisted_32, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_34];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_33];
    }),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/message-box.md?vue&type=template&id=3f52ca58

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/message-box.md?vue&type=script&lang=ts


/* harmony default export */ var message_boxvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open the Message Box");

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

            this.$alert('This is a message', 'Title', {
              confirmButtonText: 'OK',
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
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open the Message Box");

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

            this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              type: 'warning'
            }).then(function () {
              _this2.$message({
                type: 'success',
                message: 'Delete completed'
              });
            }).catch(function () {
              _this2.$message({
                type: 'info',
                message: 'Delete canceled'
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
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

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

            this.$prompt('Please input your e-mail', 'Tip', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
              inputErrorMessage: 'Invalid Email'
            }).then(function (_ref) {
              var value = _ref.value;

              _this3.$message({
                type: 'success',
                message: 'Your email is:' + value
              });
            }).catch(function () {
              _this3.$message({
                type: 'info',
                message: 'Input canceled'
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
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

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
              title: 'Message',
              message: h('p', null, [h('span', null, 'Message can be '), h('i', {
                style: 'color: teal'
              }, 'VNode')]),
              showCancelButton: true,
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              beforeClose: function beforeClose(action, instance, done) {
                if (action === 'confirm') {
                  instance.confirmButtonLoading = true;
                  instance.confirmButtonText = 'Loading...';
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
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

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
            this.$alert('<strong>This is <i>HTML</i> string</strong>', 'HTML String', {
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
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

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

            this.$confirm('You have unsaved changes, save and proceed?', 'Confirm', {
              distinguishCancelAndClose: true,
              confirmButtonText: 'Save',
              cancelButtonText: 'Discard Changes'
            }).then(function () {
              _this5.$message({
                type: 'info',
                message: 'Changes saved. Proceeding to a new route.'
              });
            }).catch(function (action) {
              _this5.$message({
                type: 'info',
                message: action === 'cancel' ? 'Changes discarded. Proceeding to a new route.' : 'Stay in the current route'
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
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

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

            this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              type: 'warning',
              center: true
            }).then(function () {
              _this6.$message({
                type: 'success',
                message: 'Delete completed'
              });
            }).catch(function () {
              _this6.$message({
                type: 'info',
                message: 'Delete canceled'
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
// CONCATENATED MODULE: ./website/docs/en-US/message-box.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/message-box.md



message_boxvue_type_script_lang_ts.render = message_boxvue_type_template_id_3f52ca58_render

/* harmony default export */ var message_box = __webpack_exports__["default"] = (message_boxvue_type_script_lang_ts);

/***/ })

}]);