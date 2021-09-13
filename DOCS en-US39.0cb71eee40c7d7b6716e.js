(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/message-box.md?vue&type=template&id=16b39a9b

const message_boxvue_type_template_id_16b39a9b_hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("MessageBox ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "A set of modal boxes simulating system message box, mainly for alerting information, confirm operations and prompting messages.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("By design MessageBox provides simulations of system's "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "alert"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "confirm"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "prompt"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，so it's content should be simple. For more complicated contents, please use Dialog.")])], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Alert ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Alert interrupts user operation until the user confirms.", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Open an alert by calling the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$alert"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" method. It simulates the system's "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "alert"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", and cannot be closed by pressing ESC or clicking outside the box. In this example, two parameters "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" are received. It is worth mentioning that when the box is closed, it returns a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" object for further processing. If you are not sure if your target browsers support "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", you should import a third party polyfill or use callbacks instead like this example.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open the Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert('This is a message', 'Title', {\n          confirmButtonText: 'OK',\n          callback: (action) => {\n            this.$message({\n              type: 'info',\n              message: `action: ${action}`,\n            })\n          },\n        })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.alert('This is a message', 'Title', {\n          confirmButtonText: 'OK',\n          callback: (action) => {\n            this.$message({\n              type: 'info',\n              message: `action: ${action}`,\n            });\n          },\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Confirm ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Confirm is used to ask users' confirmation.", -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Call "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$confirm"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" method to open a confirm, and it simulates the system's "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "confirm"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". We can also highly customize Message Box by passing a third attribute "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" which is a literal object. The attribute "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" indicates the message type, and it's value can be "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "success"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "error"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "warning"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Note that the second attribute "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" must be a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", and if it is an "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "object"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", it will be handled as the attribute "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Here we use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to handle further processing.")])], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open the Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm(\n          'This will permanently delete the file. Continue?',\n          'Warning',\n          {\n            confirmButtonText: 'OK',\n            cancelButtonText: 'Cancel',\n            type: 'warning',\n          }\n        )\n          .then(() => {\n            this.$message({\n              type: 'success',\n              message: 'Delete completed',\n            })\n          })\n          .catch(() => {\n            this.$message({\n              type: 'info',\n              message: 'Delete canceled',\n            })\n          })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent } from 'vue';\nimport { ElMessageBox } from 'element-plus';\nimport { ElMessage } from 'element-plus';\n\nexport default defineComponent({\n  setup() {\n    \n\n    const open = () => {\n      ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {\n        confirmButtonText: 'OK',\n        cancelButtonText: 'Cancel',\n        type: 'warning',\n      }).then(() => {\n        ElMessage({\n          type: 'success',\n          message: 'Delete completed',\n        });\n      }).catch(() => {\n        ElMessage({\n          type: 'info',\n          message: 'Delete canceled',\n        });\n      });\n    };\n\n    return {\n      open,\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Prompt ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Prompt is used when user input is required.", -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Call "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$prompt"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" method to open a prompt, and it simulates the system's "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "prompt"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". You can use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "inputPattern"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" parameter to specify your own RegExp pattern. Use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "inputValidator"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to specify validation method, and it should return "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" or "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Returning "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" or "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" means the validation has failed, and the string returned will be used as the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "inputErrorMessage"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". In addition, you can customize the placeholder of the input box with "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "inputPlaceholder"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" parameter.")])], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$prompt('Please input your e-mail', 'Tip', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          inputPattern:\n            /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,\n          inputErrorMessage: 'Invalid Email',\n        })\n          .then(({ value }) => {\n            this.$message({\n              type: 'success',\n              message: 'Your email is:' + value,\n            })\n          })\n          .catch(() => {\n            this.$message({\n              type: 'info',\n              message: 'Input canceled',\n            })\n          })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.prompt('Please input your e-mail', 'Tip', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          inputPattern: /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,\n          inputErrorMessage: 'Invalid Email',\n        })\n          .then(({ value }) => {\n            ElMessage({\n              type: 'success',\n              message: `Your email is:${value}`,\n            });\n          })\n          .catch(() => {\n            ElMessage({\n              type: 'info',\n              message: 'Input canceled',\n            });\n          });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Customization ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Can be customized to show various content.", -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("The three methods mentioned above are repackagings of the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" method. This example calls "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" method directly using the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "showCancelButton"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute, which is used to indicate if a cancel button is displayed. Besides we can use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "cancelButtonClass"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to add a custom style and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "cancelButtonText"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to customize the button text (the confirm button also has these fields, and a complete list of fields can be found at the end of this documentation). This example also uses the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "beforeClose"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute. It is a method and will be triggered when the MessageBox instance will be closed, and its execution will stop the instance from closing. It has three parameters: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "action"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "instance"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Using it enables you to manipulate the instance before it closes, e.g. activating "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "loading"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" for confirm button; you can invoke the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" method to close the MessageBox instance (if "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is not called inside "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "beforeClose"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", the instance will not be closed).")])], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  import { h } from 'vue'\n\n  export default {\n    methods: {\n      open() {\n        this.$msgbox({\n          title: 'Message',\n          message: h('p', null, [\n            h('span', null, 'Message can be '),\n            h('i', { style: 'color: teal' }, 'VNode'),\n          ]),\n          showCancelButton: true,\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          beforeClose: (action, instance, done) => {\n            if (action === 'confirm') {\n              instance.confirmButtonLoading = true\n              instance.confirmButtonText = 'Loading...'\n              setTimeout(() => {\n                done()\n                setTimeout(() => {\n                  instance.confirmButtonLoading = false\n                }, 300)\n              }, 3000)\n            } else {\n              done()\n            }\n          },\n        }).then((action) => {\n          this.$message({\n            type: 'info',\n            message: 'action: ' + action,\n          })\n        })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, h } from 'vue';\nimport { ElMessage } from 'element-plus';\nexport default defineComponent({\n  setup() {\n    \n\n    const open = () => {\n      ElMessageBox({\n        title: 'Message',\n        message: h('p', null, [\n          h('span', null, 'Message can be '),\n          h('i', { style: 'color: teal' }, 'VNode'),\n        ]),\n        showCancelButton: true,\n        confirmButtonText: 'OK',\n        cancelButtonText: 'Cancel',\n        beforeClose: (action, instance, done) => {\n          if (action === 'confirm') {\n            instance.confirmButtonLoading = true;\n            instance.confirmButtonText = 'Loading...';\n            setTimeout(() => {\n              done();\n              setTimeout(() => {\n                instance.confirmButtonLoading = false;\n              }, 300);\n            }, 3000);\n          } else {\n            done();\n          }\n        },\n      }).then((action) => {\n        ElMessage({\n          type: 'info',\n          message: `action: ${action}`,\n        });\n      });\n    };\n\n    return {\n      open,\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_21 = {
  class: "tip"
};

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("The content of MessageBox can be ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "VNode", -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", allowing us to pass custom components. When opening the MessageBox, Vue compares new ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "VNode", -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" with old ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "VNode", -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", then figures out how to efficiently update the UI, so the components may not be completely re-rendered (");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("#8931");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("). In this case, you can add a unique key to ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "VNode", -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" each time MessageBox opens: ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("example");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use HTML String ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" supports HTML string.")], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Set "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to true and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" will be treated as an HTML string.")])], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert(\n          '<strong>This is <i>HTML</i> string</strong>',\n          'HTML String',\n          {\n            dangerouslyUseHTMLString: true,\n          }\n        )\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.alert('<strong>proxy is <i>HTML</i> string</strong>', 'HTML String', {\n          dangerouslyUseHTMLString: true,\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_39 = {
  class: "warning"
};

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Although ");

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message", -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" property supports HTML strings, dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to ");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("XSS attacks");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". So when ");

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dangerouslyUseHTMLString", -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is on, please make sure the content of ");

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message", -1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is trusted, and ");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "never", -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" assign ");

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message", -1);

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to user-provided content.");

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Distinguishing cancel and close ");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "In some cases, clicking the cancel button and close button may have different meanings.", -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("By default, the parameters of Promise's reject callback and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "callback"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" are 'cancel' when the user cancels (clicking the cancel button) and closes (clicking the close button or mask layer, pressing the ESC key) the MessageBox. If "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "distinguishCancelAndClose"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is set to true, the parameters of the above two operations are 'cancel' and 'close' respectively.")])], -1);

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm(\n          'You have unsaved changes, save and proceed?',\n          'Confirm',\n          {\n            distinguishCancelAndClose: true,\n            confirmButtonText: 'Save',\n            cancelButtonText: 'Discard Changes',\n          }\n        )\n          .then(() => {\n            this.$message({\n              type: 'info',\n              message: 'Changes saved. Proceeding to a new route.',\n            })\n          })\n          .catch((action) => {\n            this.$message({\n              type: 'info',\n              message:\n                action === 'cancel'\n                  ? 'Changes discarded. Proceeding to a new route.'\n                  : 'Stay in the current route',\n            })\n          })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.confirm('You have unsaved changes, save and proceed?', 'Confirm', {\n          distinguishCancelAndClose: true,\n          confirmButtonText: 'Save',\n          cancelButtonText: 'Discard Changes',\n        })\n          .then(() => {\n            ElMessage({\n              type: 'info',\n              message: 'Changes saved. Proceeding to a new route.',\n            });\n          })\n          .catch((action) => {\n            ElMessage({\n              type: 'info',\n              message: action === 'cancel'\n                ? 'Changes discarded. Proceeding to a new route.'\n                : 'Stay in the current route',\n            });\n          });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Centered content ");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Content of MessageBox can be centered.", -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Setting "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" will center the content")])], -1);

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm(\n          'This will permanently delete the file. Continue?',\n          'Warning',\n          {\n            confirmButtonText: 'OK',\n            cancelButtonText: 'Cancel',\n            type: 'warning',\n            center: true,\n          }\n        )\n          .then(() => {\n            this.$message({\n              type: 'success',\n              message: 'Delete completed',\n            })\n          })\n          .catch(() => {\n            this.$message({\n              type: 'info',\n              message: 'Delete canceled',\n            })\n          })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          type: 'warning',\n          center: true,\n        }).then(() => {\n          ElMessage({\n            type: 'success',\n            message: 'Delete completed',\n          });\n        }).catch(() => {\n          ElMessage({\n            type: 'info',\n            message: 'Delete canceled',\n          });\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Global method ");

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>If Element Plus is fully imported, it will add the following global methods for <code>app.config.globalProperties</code>: <code>$msgbox</code>, <code>$alert</code>, <code>$confirm</code> and <code>$prompt</code>. So in a Vue instance you can call <code>MessageBox</code> like what we did in this page. The parameters are:</p><ul><li><code>$msgbox(options)</code></li><li><code>$alert(message, title, options)</code> or <code>$alert(message, options)</code></li><li><code>$confirm(message, title, options)</code> or <code>$confirm(message, options)</code></li><li><code>$prompt(message, title, options)</code> or <code>$prompt(message, options)</code></li></ul>", 2);

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Local import ");

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>If you prefer importing <code>MessageBox</code> on demand:</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElMessageBox } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n</code><span class=\"lang-mark\">js</span></pre><p>The corresponding methods are: <code>ElMessageBox</code>, <code>ElMessageBox.alert</code>, <code>ElMessageBox.confirm</code> and <code>ElMessageBox.prompt</code>. The parameters are the same as above.</p>", 3);

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Options ");

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>title of the MessageBox</td><td>string</td><td>—</td><td>—</td></tr><tr><td>message</td><td>content of the MessageBox</td><td>string</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>whether <code>message</code> is treated as HTML string</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>message type, used for icon display</td><td>string</td><td>success / info / warning / error</td><td>—</td></tr><tr><td>iconClass</td><td>custom icon&#39;s class, overrides <code>type</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>custom class name for MessageBox</td><td>string</td><td>—</td><td>—</td></tr><tr><td>callback</td><td>MessageBox closing callback if you don&#39;t prefer Promise</td><td>function(action), where action can be &#39;confirm&#39;, &#39;cancel&#39; or &#39;close&#39;, and <code>instance</code> is the MessageBox instance. You can access to that instance&#39;s attributes and methods</td><td>—</td><td>—</td></tr><tr><td>showClose</td><td>whether to show close icon of MessageBox</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>beforeClose</td><td>callback before MessageBox closes, and it will prevent MessageBox from closing</td><td>function(action, instance, done), where <code>action</code> can be &#39;confirm&#39;, &#39;cancel&#39; or &#39;close&#39;; <code>instance</code> is the MessageBox instance, and you can access to that instance&#39;s attributes and methods; <code>done</code> is for closing the instance</td><td>—</td><td>—</td></tr><tr><td>distinguishCancelAndClose</td><td>whether to distinguish canceling and closing the MessageBox</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lockScroll</td><td>whether to lock body scroll when MessageBox prompts</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showCancelButton</td><td>whether to show a cancel button</td><td>boolean</td><td>—</td><td>false (true when called with confirm and prompt)</td></tr><tr><td>showConfirmButton</td><td>whether to show a confirm button</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>cancelButtonText</td><td>text content of cancel button</td><td>string</td><td>—</td><td>Cancel</td></tr><tr><td>confirmButtonText</td><td>text content of confirm button</td><td>string</td><td>—</td><td>OK</td></tr><tr><td>cancelButtonClass</td><td>custom class name of cancel button</td><td>string</td><td>—</td><td>—</td></tr><tr><td>confirmButtonClass</td><td>custom class name of confirm button</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closeOnClickModal</td><td>whether MessageBox can be closed by clicking the mask</td><td>boolean</td><td>—</td><td>true (false when called with alert)</td></tr><tr><td>closeOnPressEscape</td><td>whether MessageBox can be closed by pressing the ESC</td><td>boolean</td><td>—</td><td>true (false when called with alert)</td></tr><tr><td>closeOnHashChange</td><td>whether to close MessageBox when hash changes</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showInput</td><td>whether to show an input</td><td>boolean</td><td>—</td><td>false (true when called with prompt)</td></tr><tr><td>inputPlaceholder</td><td>placeholder of input</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputType</td><td>type of input</td><td>string</td><td>—</td><td>text</td></tr><tr><td>inputValue</td><td>initial value of input</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputPattern</td><td>regexp for the input</td><td>regexp</td><td>—</td><td>—</td></tr><tr><td>inputValidator</td><td>validation function for the input. Should returns a boolean or string. If a string is returned, it will be assigned to inputErrorMessage</td><td>function</td><td>—</td><td>—</td></tr><tr><td>inputErrorMessage</td><td>error message when validation fails</td><td>string</td><td>—</td><td>Illegal input</td></tr><tr><td>center</td><td>whether to align the content in center</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>roundButton</td><td>whether to use round button</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>buttonSize</td><td>custom size of confirm and cancel buttons</td><td>string</td><td>mini / small / medium / large</td><td>small</td></tr></tbody></table>", 1);

function message_boxvue_type_template_id_16b39a9b_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", message_boxvue_type_template_id_16b39a9b_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "messagebox",
    content: "MessageBox",
    href: "#messagebox",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#messagebox"
    })]),
    _: 1
  }), _hoisted_3, _hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "alert",
    content: "Alert",
    href: "#alert",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#alert"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "confirm",
    content: "Confirm",
    href: "#confirm",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#confirm"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "prompt",
    content: "Prompt",
    href: "#prompt",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#prompt"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "customization",
    content: "Customization",
    href: "#customization",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#customization"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_21, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_22, _hoisted_23, _hoisted_24, _hoisted_25, _hoisted_26, _hoisted_27, _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/ElemeFE/element/issues/8931"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29]),
    _: 1
  }), _hoisted_30, _hoisted_31, _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://jsfiddle.net/zhiyang/ezmhq2ef"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33]),
    _: 1
  }), _hoisted_34])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "use-html-string",
    content: "Use HTML String",
    href: "#use-html-string",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#use-html-string"
    })]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_39, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_40, _hoisted_41, _hoisted_42, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://en.wikipedia.org/wiki/Cross-site_scripting"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_43]),
    _: 1
  }), _hoisted_44, _hoisted_45, _hoisted_46, _hoisted_47, _hoisted_48, _hoisted_49, _hoisted_50, _hoisted_51, _hoisted_52])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "distinguishing-cancel-and-close",
    content: "Distinguishing cancel and close",
    href: "#distinguishing-cancel-and-close",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#distinguishing-cancel-and-close"
    })]),
    _: 1
  }), _hoisted_54, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_56]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_55]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "centered-content",
    content: "Centered content",
    href: "#centered-content",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_57, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#centered-content"
    })]),
    _: 1
  }), _hoisted_58, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_60]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_59]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "global-method",
    content: "Global method",
    href: "#global-method",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_61, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#global-method"
    })]),
    _: 1
  }), _hoisted_62, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "local-import",
    content: "Local import",
    href: "#local-import",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_64, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#local-import"
    })]),
    _: 1
  }), _hoisted_65, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "options",
    content: "Options",
    href: "#options",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_68, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#options"
    })]),
    _: 1
  }), _hoisted_69, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/message-box.md?vue&type=template&id=16b39a9b

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/message-box.md?vue&type=script&lang=ts

/* harmony default export */ var message_boxvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open the Message Box");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open() {
            this.$alert('This is a message', 'Title', {
              confirmButtonText: 'OK',
              callback: action => {
                this.$message({
                  type: 'info',
                  message: `action: ${action}`
                });
              }
            });
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
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open the Message Box");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open() {
            this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: 'Delete completed'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: 'Delete canceled'
              });
            });
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
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open() {
            this.$prompt('Please input your e-mail', 'Tip', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
              inputErrorMessage: 'Invalid Email'
            }).then(({
              value
            }) => {
              this.$message({
                type: 'success',
                message: 'Your email is:' + value
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: 'Input canceled'
              });
            });
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const {
        h
      } = vue_esm_browser_prod;
      const democomponentExport = {
        methods: {
          open() {
            this.$msgbox({
              title: 'Message',
              message: h('p', null, [h('span', null, 'Message can be '), h('i', {
                style: 'color: teal'
              }, 'VNode')]),
              showCancelButton: true,
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              beforeClose: (action, instance, done) => {
                if (action === 'confirm') {
                  instance.confirmButtonLoading = true;
                  instance.confirmButtonText = 'Loading...';
                  setTimeout(() => {
                    done();
                    setTimeout(() => {
                      instance.confirmButtonLoading = false;
                    }, 300);
                  }, 3000);
                } else {
                  done();
                }
              }
            }).then(action => {
              this.$message({
                type: 'info',
                message: 'action: ' + action
              });
            });
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open() {
            this.$alert('<strong>This is <i>HTML</i> string</strong>', 'HTML String', {
              dangerouslyUseHTMLString: true
            });
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open() {
            this.$confirm('You have unsaved changes, save and proceed?', 'Confirm', {
              distinguishCancelAndClose: true,
              confirmButtonText: 'Save',
              cancelButtonText: 'Discard Changes'
            }).then(() => {
              this.$message({
                type: 'info',
                message: 'Changes saved. Proceeding to a new route.'
              });
            }).catch(action => {
              this.$message({
                type: 'info',
                message: action === 'cancel' ? 'Changes discarded. Proceeding to a new route.' : 'Stay in the current route'
              });
            });
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo6": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open() {
            this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              type: 'warning',
              center: true
            }).then(() => {
              this.$message({
                type: 'success',
                message: 'Delete completed'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: 'Delete canceled'
              });
            });
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/message-box.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/message-box.md



message_boxvue_type_script_lang_ts.render = message_boxvue_type_template_id_16b39a9b_render

/* harmony default export */ var message_box = __webpack_exports__["default"] = (message_boxvue_type_script_lang_ts);

/***/ })

}]);