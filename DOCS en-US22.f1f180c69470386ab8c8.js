(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/dialog.md?vue&type=template&id=9c6edae6

var dialogvue_type_template_id_9c6edae6_hoisted_1 = {
  class: "content element-doc"
};

var dialogvue_type_template_id_9c6edae6_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Dialog ");

var dialogvue_type_template_id_9c6edae6_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Informs users while preserving the current page state.", -1);

var dialogvue_type_template_id_9c6edae6_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Basic usage ");

var dialogvue_type_template_id_9c6edae6_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Dialog pops up a dialog box, and it's quite customizable.", -1);

var dialogvue_type_template_id_9c6edae6_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Set "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "model-value / v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" attribute with a "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", and Dialog shows when it is "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". The Dialog has two parts: "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", and the latter requires a "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" named "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". The optional "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" attribute (empty by default) is for defining a title. Finally, this example demonstrates how "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" is used.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"dialogVisible = true\">click to open the Dialog</el-button>\n\n<el-dialog\n  title=\"Tips\"\n  v-model=\"dialogVisible\"\n  width=\"30%\"\n  :before-close=\"handleClose\">\n  <span>This is a message</span>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"dialogVisible = false\">Cancel</el-button>\n      <el-button type=\"primary\" @click=\"dialogVisible = false\">Confirm</el-button>\n    </span>\n  </template>\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        dialogVisible: false\n      };\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm('Are you sure to close this dialog?')\n          .then(_ => {\n            done();\n            this.dialogVisible = false\n          })\n          .catch(_ => {});\n      }\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      const dialogVisible = ref(false);\n      \n      const handleClose = (done) => {\n        ElMessageBox\n          .confirm('Are you sure to close this dialog?')\n          .then((_) => {\n            done();\n          })\n          .catch((_) => {});\n      };\n      return {\n        dialogVisible,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" only works when user clicks the close icon or the backdrop. If you have buttons that close the Dialog in the "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" named slot, you can add what you would do with "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" in the buttons' click event handler.")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Customizations ");

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "The content of Dialog can be anything, even a table or a form. This example shows how to use Element Plus Table and Form with Dialog。", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"dialogTableVisible = true\">open a Table nested Dialog</el-button>\n\n<el-dialog title=\"Shipping address\" v-model=\"dialogTableVisible\">\n  <el-table :data=\"gridData\">\n    <el-table-column property=\"date\" label=\"Date\" width=\"150\"></el-table-column>\n    <el-table-column property=\"name\" label=\"Name\" width=\"200\"></el-table-column>\n    <el-table-column property=\"address\" label=\"Address\"></el-table-column>\n  </el-table>\n</el-dialog>\n\n<!-- Form -->\n<el-button type=\"text\" @click=\"dialogFormVisible = true\">open a Form nested Dialog</el-button>\n\n<el-dialog title=\"Shipping address\" v-model=\"dialogFormVisible\">\n  <el-form :model=\"form\">\n    <el-form-item label=\"Promotion name\" :label-width=\"formLabelWidth\">\n      <el-input v-model=\"form.name\" autocomplete=\"off\"></el-input>\n    </el-form-item>\n    <el-form-item label=\"Zones\" :label-width=\"formLabelWidth\">\n      <el-select v-model=\"form.region\" placeholder=\"Please select a zone\">\n        <el-option label=\"Zone No.1\" value=\"shanghai\"></el-option>\n        <el-option label=\"Zone No.2\" value=\"beijing\"></el-option>\n      </el-select>\n    </el-form-item>\n  </el-form>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"dialogFormVisible = false\">Cancel</el-button>\n      <el-button type=\"primary\" @click=\"dialogFormVisible = false\">Confirm</el-button>\n    </span>\n  </template>\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        gridData: [{\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-03',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }],\n        dialogTableVisible: false,\n        dialogFormVisible: false,\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: ''\n        },\n        formLabelWidth: '120px'\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-04',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-01',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-03',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n        ],\n        dialogTableVisible: false,\n        dialogFormVisible: false,\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n        formLabelWidth: '120px',\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Nested Dialog ");

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("If a Dialog is nested in another Dialog, "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" is required.")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Normally we do not recommend using nested Dialog. If you need multiple Dialogs rendered on the page, you can simply flat them so that they're siblings to each other. If you must nest a Dialog inside another Dialog, set "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" of the nested Dialog to true, and it will append to body instead of its parent node, so both Dialogs can be correctly rendered.")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"outerVisible = true\">open the outer Dialog</el-button>\n\n  <el-dialog title=\"Outer Dialog\" v-model=\"outerVisible\">\n    <template #default>\n      <el-dialog\n          width=\"30%\"\n          title=\"Inner Dialog\"\n          v-model=\"innerVisible\"\n          append-to-body>\n      </el-dialog>\n    </template>\n    <template #footer>\n      <div class=\"dialog-footer\">\n        <el-button @click=\"outerVisible = false\">Cancel</el-button>\n        <el-button type=\"primary\" @click=\"innerVisible = true\">open the inner Dialog</el-button>\n      </div>\n    </template>\n  </el-dialog>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        outerVisible: false,\n        innerVisible: false\n      };\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        outerVisible: ref(false),\n        innerVisible: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Centered content ");

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Dialog's content can be centered.", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Setting "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" to "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" will center dialog's header and footer horizontally. "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" only affects Dialog's header and footer. The body of Dialog can be anything, so sometimes it may not look good when centered. You need to write some CSS if you wish to center the body as well.")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"centerDialogVisible = true\">Click to open the Dialog</el-button>\n\n  <el-dialog\n    title=\"Warning\"\n    v-model=\"centerDialogVisible\"\n    width=\"30%\"\n    center>\n    <span>It should be noted that the content will not be aligned in center by default</span>\n    <template #footer>\n      <span class=\"dialog-footer\">\n        <el-button @click=\"centerDialogVisible = false\">Cancel</el-button>\n        <el-button type=\"primary\" @click=\"centerDialogVisible = false\">Confirm</el-button>\n      </span>\n    </template>\n  </el-dialog>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        centerDialogVisible: false\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        centerDialogVisible: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("The content of Dialog is lazily rendered, which means the default slot is not rendered onto the DOM until it is firstly opened. Therefore, if you need to perform a DOM manipulation or access a component using "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "ref"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", do it in the "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "open"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" event callback.")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Destroy on Close ");

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("When this is feature is enabled, the content under default slot will be destroyed with a "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "v-if"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" directive. Enable this when you have perf concerns.")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Note that by enabling this feature, the content will not be rendered before "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "transition.beforeEnter"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" dispatched, there will only be "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "overlay"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "header(if any)"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "footer(if any)"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"centerDialogVisible = true\">Click to open Dialog</el-button>\n\n<el-dialog\n  title=\"Notice\"\n  v-model=\"centerDialogVisible\"\n  width=\"30%\"\n  destroy-on-close\n  center>\n  <span>Notice: before dialog gets opened for the first time this node and the one bellow will not be rendered</span>\n  <div>\n    <strong>Extra content (Not rendered)</strong>\n  </div>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"centerDialogVisible = false\">Cancel</el-button>\n      <el-button type=\"primary\" @click=\"centerDialogVisible = false\">Confirm</el-button>\n    </span>\n  </template>\n\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        centerDialogVisible: false\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        centerDialogVisible: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("When using "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "modal"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" = false, please make sure that "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" was set to "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", because "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" was positioned by "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "position: relative"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", when "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "modal"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" gets removed, "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" will position itself based on the current position in the DOM, instead of "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Document.Body"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", thus the style will be messed up.")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Attributes ");

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>visibility of Dialog</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>title</td><td>title of Dialog. Can also be passed with a named slot (see the following table)</td><td>string</td><td>—</td><td>—</td></tr><tr><td>width</td><td>width of Dialog</td><td>string / number</td><td>—</td><td>50%</td></tr><tr><td>fullscreen</td><td>whether the Dialog takes up full screen</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>top</td><td>value for <code>margin-top</code> of Dialog CSS</td><td>string</td><td>—</td><td>15vh</td></tr><tr><td>modal</td><td>whether a mask is displayed</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>append-to-body</td><td>whether to append Dialog itself to body. A nested Dialog should have this attribute set to <code>true</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lock-scroll</td><td>whether scroll of body is disabled while Dialog is displayed</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>custom-class</td><td>custom class names for Dialog</td><td>string</td><td>—</td><td>—</td></tr><tr><td>open-delay</td><td>Time(milliseconds) before open</td><td>number</td><td>—</td><td>0</td></tr><tr><td>close-delay</td><td>Time(milliseconds) before close</td><td>number</td><td>—</td><td>0</td></tr><tr><td>close-on-click-modal</td><td>whether the Dialog can be closed by clicking the mask</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>close-on-press-escape</td><td>whether the Dialog can be closed by pressing ESC</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-close</td><td>whether to show a close button</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>before-close</td><td>callback before Dialog closes, and it will prevent Dialog from closing</td><td>function(done)，done is used to close the Dialog</td><td>—</td><td>—</td></tr><tr><td>center</td><td>whether to align the header and footer in center</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>destroy-on-close</td><td>Destroy elements in Dialog when closed</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Slots ");

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>content of Dialog</td></tr><tr><td>title</td><td>content of the Dialog title</td></tr><tr><td>footer</td><td>content of the Dialog footer</td></tr></tbody></table>", 1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Events ");

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>open</td><td>triggers when the Dialog opens</td><td>—</td></tr><tr><td>opened</td><td>triggers when the Dialog opening animation ends</td><td>—</td></tr><tr><td>close</td><td>triggers when the Dialog closes</td><td>—</td></tr><tr><td>closed</td><td>triggers when the Dialog closing animation ends</td><td>—</td></tr></tbody></table>", 1);

function dialogvue_type_template_id_9c6edae6_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", dialogvue_type_template_id_9c6edae6_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "dialog",
    content: "Dialog",
    href: "#dialog",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dialogvue_type_template_id_9c6edae6_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#dialog"
      })];
    }),
    _: 1
  }), dialogvue_type_template_id_9c6edae6_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dialogvue_type_template_id_9c6edae6_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#basic-usage"
      })];
    }),
    _: 1
  }), dialogvue_type_template_id_9c6edae6_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dialogvue_type_template_id_9c6edae6_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "customizations",
    content: "Customizations",
    href: "#customizations",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#customizations"
      })];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "nested-dialog",
    content: "Nested Dialog",
    href: "#nested-dialog",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#nested-dialog"
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
    id: "centered-content",
    content: "Centered content",
    href: "#centered-content",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#centered-content"
      })];
    }),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "destroy-on-close",
    content: "Destroy on Close",
    href: "#destroy-on-close",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_21, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#destroy-on-close"
      })];
    }),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_23, _hoisted_25];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_26, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#attributes"
      })];
    }),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "slots",
    content: "Slots",
    href: "#slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_28, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#slots"
      })];
    }),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "events",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_30, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#events"
      })];
    }),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/dialog.md?vue&type=template&id=9c6edae6

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/dialog.md?vue&type=script&lang=ts


/* harmony default export */ var dialogvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("click to open the Dialog");

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "This is a message", -1);

      var _hoisted_3 = {
        class: "dialog-footer"
      };

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Cancel");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Confirm");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.dialogVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Tips",
          modelValue: _ctx.dialogVisible,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.dialogVisible = $event;
          }),
          width: "30%",
          "before-close": _ctx.handleClose
        }, {
          footer: _withCtx(function () {
            return [_createVNode("span", _hoisted_3, [_createVNode(_component_el_button, {
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.dialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.dialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue", "before-close"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            dialogVisible: false
          };
        },
        methods: {
          handleClose: function handleClose(done) {
            var _this = this;

            this.$confirm('Are you sure to close this dialog?').then(function (_) {
              done();
              _this.dialogVisible = false;
            }).catch(function (_) {});
          }
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("open a Table nested Dialog");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("open a Form nested Dialog");

      var _hoisted_3 = {
        class: "dialog-footer"
      };

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Cancel");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Confirm");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        var _component_el_dialog = _resolveComponent("el-dialog");

        var _component_el_input = _resolveComponent("el-input");

        var _component_el_form_item = _resolveComponent("el-form-item");

        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        var _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.dialogTableVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Shipping address",
          modelValue: _ctx.dialogTableVisible,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.dialogTableVisible = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table, {
              data: _ctx.gridData
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_table_column, {
                  property: "date",
                  label: "Date",
                  width: "150"
                }), _createVNode(_component_el_table_column, {
                  property: "name",
                  label: "Name",
                  width: "200"
                }), _createVNode(_component_el_table_column, {
                  property: "address",
                  label: "Address"
                })];
              }),
              _: 1
            }, 8, ["data"])];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[3] || (_cache[3] = function ($event) {
            return _ctx.dialogFormVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Shipping address",
          modelValue: _ctx.dialogFormVisible,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
            return _ctx.dialogFormVisible = $event;
          })
        }, {
          footer: _withCtx(function () {
            return [_createVNode("span", _hoisted_3, [_createVNode(_component_el_button, {
              onClick: _cache[6] || (_cache[6] = function ($event) {
                return _ctx.dialogFormVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[7] || (_cache[7] = function ($event) {
                return _ctx.dialogFormVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_form, {
              model: _ctx.form
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_form_item, {
                  label: "Promotion name",
                  "label-width": _ctx.formLabelWidth
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_input, {
                      modelValue: _ctx.form.name,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                        return _ctx.form.name = $event;
                      }),
                      autocomplete: "off"
                    }, null, 8, ["modelValue"])];
                  }),
                  _: 1
                }, 8, ["label-width"]), _createVNode(_component_el_form_item, {
                  label: "Zones",
                  "label-width": _ctx.formLabelWidth
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_select, {
                      modelValue: _ctx.form.region,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                        return _ctx.form.region = $event;
                      }),
                      placeholder: "Please select a zone"
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_option, {
                          label: "Zone No.1",
                          value: "shanghai"
                        }), _createVNode(_component_el_option, {
                          label: "Zone No.2",
                          value: "beijing"
                        })];
                      }),
                      _: 1
                    }, 8, ["modelValue"])];
                  }),
                  _: 1
                }, 8, ["label-width"])];
              }),
              _: 1
            }, 8, ["model"])];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            gridData: [{
              date: '2016-05-02',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-04',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-01',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-03',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }],
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            formLabelWidth: '120px'
          };
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("open the outer Dialog");

      var _hoisted_2 = {
        class: "dialog-footer"
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Cancel");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("open the inner Dialog");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.outerVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Outer Dialog",
          modelValue: _ctx.outerVisible,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
            return _ctx.outerVisible = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_dialog, {
              width: "30%",
              title: "Inner Dialog",
              modelValue: _ctx.innerVisible,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                return _ctx.innerVisible = $event;
              }),
              "append-to-body": ""
            }, null, 8, ["modelValue"])];
          }),
          footer: _withCtx(function () {
            return [_createVNode("div", _hoisted_2, [_createVNode(_component_el_button, {
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.outerVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[4] || (_cache[4] = function ($event) {
                return _ctx.innerVisible = true;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })])];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            outerVisible: false,
            innerVisible: false
          };
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open the Dialog");

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "It should be noted that the content will not be aligned in center by default", -1);

      var _hoisted_3 = {
        class: "dialog-footer"
      };

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Cancel");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Confirm");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.centerDialogVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Warning",
          modelValue: _ctx.centerDialogVisible,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.centerDialogVisible = $event;
          }),
          width: "30%",
          center: ""
        }, {
          footer: _withCtx(function () {
            return [_createVNode("span", _hoisted_3, [_createVNode(_component_el_button, {
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.centerDialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.centerDialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            centerDialogVisible: false
          };
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Dialog");

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "Notice: before dialog gets opened for the first time this node and the one bellow will not be rendered", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", null, [/*#__PURE__*/_createVNode("strong", null, "Extra content (Not rendered)")], -1);

      var _hoisted_4 = {
        class: "dialog-footer"
      };

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Cancel");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Confirm");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.centerDialogVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Notice",
          modelValue: _ctx.centerDialogVisible,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.centerDialogVisible = $event;
          }),
          width: "30%",
          "destroy-on-close": "",
          center: ""
        }, {
          footer: _withCtx(function () {
            return [_createVNode("span", _hoisted_4, [_createVNode(_component_el_button, {
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.centerDialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.centerDialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [_hoisted_2, _hoisted_3];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            centerDialogVisible: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/dialog.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/dialog.md



dialogvue_type_script_lang_ts.render = dialogvue_type_template_id_9c6edae6_render

/* harmony default export */ var dialog = __webpack_exports__["default"] = (dialogvue_type_script_lang_ts);

/***/ })

}]);