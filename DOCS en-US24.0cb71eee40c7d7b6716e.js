(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/drawer.md?vue&type=template&id=aa7d5de6

const drawervue_type_template_id_aa7d5de6_hoisted_1 = {
  class: "content element-doc"
};

const drawervue_type_template_id_aa7d5de6_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Drawer ");

const drawervue_type_template_id_aa7d5de6_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>Sometimes, <code>Dialog</code> does not always satisfy our requirements, let&#39;s say you have a massive form, or you need space to display something like <code>terms &amp; conditions</code>, <code>Drawer</code> has almost identical API with <code>Dialog</code>, but it introduces different user experience.</p><div class=\"tip\"><p>Since v-model is natively supported for all components, <code>visible.sync</code> has been deprecated, use <code>v-model=&quot;visibilityBinding&quot;</code> to control the visibility of the current drawer.</p></div>", 2);

const drawervue_type_template_id_aa7d5de6_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic Usage ");

const drawervue_type_template_id_aa7d5de6_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Callout a temporary drawer, from multiple direction", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("You must set "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "model-value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" for "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" like "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" does to control the visibility of "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" itself, it's "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" type. "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" has to parts: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" & "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is a named slot, you can also set the title through attribute named "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", default to an empty string, the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" part is the main area of "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", which contains user defined content. When opening, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" expand itself from the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "right corner to left"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" which size is "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "30%"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" of the browser window by default. You can change that default behavior by setting "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute. This show case also demonstrated how to use the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" API, check the Attribute section for more detail")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-radio-group v-model=\"direction\">\n  <el-radio label=\"ltr\">left to right</el-radio>\n  <el-radio label=\"rtl\">right to left</el-radio>\n  <el-radio label=\"ttb\">top to bottom</el-radio>\n  <el-radio label=\"btt\">bottom to top</el-radio>\n</el-radio-group>\n\n<el-button @click=\"drawer = true\" type=\"primary\" style=\"margin-left: 16px;\">\n  open\n</el-button>\n\n<el-drawer\n  title=\"I am the title\"\n  v-model=\"drawer\"\n  :direction=\"direction\"\n  :before-close=\"handleClose\"\n>\n  <span>Hi, there!</span>\n</el-drawer>\n\n<script>\n  export default {\n    data() {\n      return {\n        drawer: false,\n        direction: 'rtl',\n      }\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm('Are you sure you want to close this?')\n          .then((_) => {\n            done()\n          })\n          .catch((_) => {})\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n\n      const drawer = ref(false);\n      const direction = ref('rtl');\n      const handleClose = (done) => {\n        ElMessageBox\n          .confirm('Are you sure you want to close this?')\n          .then((_) => {\n            done();\n          })\n          .catch((_) => {});\n      };\n      return {\n        drawer,\n        direction,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("No Title ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "When you no longer need a title, you can remove title from drawer.", -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Set the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "withHeader"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", you can remove the title from drawer, thus your drawer can have more space on screen. If you want to be accessible, make sure to set the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute.")])], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-button @click=\"drawer = true\" type=\"primary\" style=\"margin-left: 16px;\">\n  open\n</el-button>\n\n<el-drawer title=\"I am the title\" v-model=\"drawer\" :with-header=\"false\">\n  <span>Hi there!</span>\n</el-drawer>\n\n<script>\n  export default {\n    data() {\n      return {\n        drawer: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        drawer: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Customization Content ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Like "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" can do many diverse interaction as you wanted.")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"table = true\"\n  >Open Drawer with nested table</el-button\n>\n<el-button type=\"text\" @click=\"dialog = true\"\n  >Open Drawer with nested form</el-button\n>\n<el-drawer\n  title=\"I have a nested table inside!\"\n  v-model=\"table\"\n  direction=\"rtl\"\n  size=\"50%\"\n>\n  <el-table :data=\"gridData\">\n    <el-table-column property=\"date\" label=\"Date\" width=\"150\"></el-table-column>\n    <el-table-column property=\"name\" label=\"Name\" width=\"200\"></el-table-column>\n    <el-table-column property=\"address\" label=\"Address\"></el-table-column>\n  </el-table>\n</el-drawer>\n\n<el-drawer\n  title=\"I have a nested form inside!\"\n  :before-close=\"handleClose\"\n  v-model=\"dialog\"\n  direction=\"ltr\"\n  custom-class=\"demo-drawer\"\n  ref=\"drawer\"\n>\n  <div class=\"demo-drawer__content\">\n    <el-form :model=\"form\">\n      <el-form-item label=\"Name\" :label-width=\"formLabelWidth\">\n        <el-input v-model=\"form.name\" autocomplete=\"off\"></el-input>\n      </el-form-item>\n      <el-form-item label=\"Area\" :label-width=\"formLabelWidth\">\n        <el-select\n          v-model=\"form.region\"\n          placeholder=\"Please select activity area\"\n        >\n          <el-option label=\"Area1\" value=\"shanghai\"></el-option>\n          <el-option label=\"Area2\" value=\"beijing\"></el-option>\n        </el-select>\n      </el-form-item>\n    </el-form>\n    <div class=\"demo-drawer__footer\">\n      <el-button @click=\"cancelForm\">Cancel</el-button>\n      <el-button\n        type=\"primary\"\n        @click=\"$refs.drawer.closeDrawer()\"\n        :loading=\"loading\"\n        >{{ loading ? 'Submitting ...' : 'Submit' }}</el-button\n      >\n    </div>\n  </div>\n</el-drawer>\n\n<script>\n  export default {\n    data() {\n      return {\n        table: false,\n        dialog: false,\n        loading: false,\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n          {\n            date: '2016-05-03',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n        ],\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n        formLabelWidth: '80px',\n        timer: null,\n      }\n    },\n    methods: {\n      handleClose(done) {\n        if (this.loading) {\n          return\n        }\n        this.$confirm('Do you want to submit?')\n          .then((_) => {\n            this.loading = true\n            this.timer = setTimeout(() => {\n              done()\n              // animation takes time\n              setTimeout(() => {\n                this.loading = false\n              }, 400)\n            }, 2000)\n          })\n          .catch((_) => {})\n      },\n      cancelForm() {\n        this.loading = false\n        this.dialog = false\n        clearTimeout(this.timer)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport {defineComponent, reactive, toRefs } from 'vue';\nimport { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n\n      const state = reactive({\n        table: false,\n        dialog: false,\n        loading: false,\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n          {\n            date: '2016-05-03',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n        ],\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n        formLabelWidth: '80px',\n        timer: null,\n      });\n\n      const handleClose = (done) => {\n        if (state.loading) {\n          return;\n        }\n        ElMessageBox\n          .confirm('Do you want to submit?')\n          .then((_) => {\n            state.loading = true;\n            state.timer = setTimeout(() => {\n              done();\n              // 动画关闭需要一定的时间\n              setTimeout(() => {\n                state.loading = false;\n              }, 400);\n            }, 2000);\n          })\n          .catch((_) => {});\n      };\n\n      const cancelForm = () => {\n        state.loading = false;\n        state.dialog = false;\n        clearTimeout(state.timer);\n      };\n\n      return {\n        ...toRefs(state),\n        handleClose,\n        cancelForm,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Nested Drawer ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("You can also have multiple layer of "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" just like "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("If you need multiple Drawer in different layer, you must set the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "true")])], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-button @click=\"drawer = true\" type=\"primary\" style=\"margin-left: 16px;\">\n  open\n</el-button>\n\n<el-drawer title=\"I'm outer Drawer\" v-model=\"drawer\" size=\"50%\">\n  <div>\n    <el-button @click=\"innerDrawer = true\">Click me!</el-button>\n    <el-drawer\n      title=\"I'm inner Drawer\"\n      :append-to-body=\"true\"\n      :before-close=\"handleClose\"\n      v-model=\"innerDrawer\"\n    >\n      <p>_(:зゝ∠)_</p>\n    </el-drawer>\n  </div>\n</el-drawer>\n\n<script>\n  export default {\n    data() {\n      return {\n        drawer: false,\n        innerDrawer: false,\n      }\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm('You still have unsaved data, proceed?')\n          .then((_) => {\n            done()\n          })\n          .catch((_) => {})\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n\n      const drawer = ref(false);\n      const innerDrawer = ref(false);\n      const handleClose = (done) => {\n        ElMessageBox\n          .confirm('You still have unsaved data, proceed?')\n          .then((_) => {\n            done();\n          })\n          .catch((_) => {});\n      };\n      return {\n        drawer,\n        innerDrawer,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("The content inside Drawer should be lazy rendered, which means that the content inside Drawer will not impact the initial render performance, therefore any DOM operation should be performed through "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ref"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" or after "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "open"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" event emitted.")])], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Drawer provides an API called "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "destroyOnClose"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", which is a flag variable that indicates should destroy the children content inside Drawer after Drawer was closed. You can use this API when you need your "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "mounted"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" life cycle to be called every time the Drawer opens.")])], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Drawer Attributes ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Acceptable Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>Should Drawer be displayed</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>append-to-body</td><td>Controls should Drawer be inserted to DocumentBody Element, nested Drawer must assign this param to <strong>true</strong></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lock-scroll</td><td>whether scroll of body is disabled while Drawer is displayed</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>before-close</td><td>If set, closing procedure will be halted</td><td>function(done) (done is function type that accepts a boolean as parameter, calling done with true or without parameter will abort the close procedure)</td><td>—</td><td>—</td></tr><tr><td>close-on-click-modal</td><td>whether the Drawer can be closed by clicking the mask</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>close-on-press-escape</td><td>Indicates whether Drawer can be closed by pressing ESC</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>open-delay</td><td>Time(milliseconds) before open</td><td>number</td><td>—</td><td>0</td></tr><tr><td>close-delay</td><td>Time(milliseconds) before close</td><td>number</td><td>—</td><td>0</td></tr><tr><td>custom-class</td><td>Extra class names for Drawer</td><td>string</td><td>—</td><td>—</td></tr><tr><td>destroy-on-close</td><td>Indicates whether children should be destroyed after Drawer closed</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>modal</td><td>Should show shadowing layer</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>direction</td><td>Drawer&#39;s opening direction</td><td>Direction</td><td>rtl / ltr / ttb / btt</td><td>rtl</td></tr><tr><td>show-close</td><td>Should show close button at the top right of Drawer</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>Drawer&#39;s size, if Drawer is horizontal mode, it effects the width property, otherwise it effects the height property, when size is <code>number</code> type, it describes the size by unit of pixels; when size is <code>string</code> type, it should be used with <code>x%</code> notation, other wise it will be interpreted to pixel unit</td><td>number / string</td><td>-</td><td>&#39;30%&#39;</td></tr><tr><td>title</td><td>Drawer&#39;s title, can also be set by named slot, detailed descriptions can be found in the slot form</td><td>string</td><td>—</td><td>—</td></tr><tr><td>withHeader</td><td>Flag that controls the header section&#39;s existance, default to true, when withHeader set to false, both <code>title attribute</code> and <code>title slot</code> won&#39;t work</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>modal-class</td><td>Extra class names for shadowing layer</td><td>string</td><td>-</td><td>-</td></tr><tr><td>z-index</td><td>set z-index</td><td>number</td><td>-</td><td>-</td></tr></tbody></table>", 1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Drawer Slots ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Drawer's Content")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Drawer Title Section")])])], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Drawer Methods ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "handleClose"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("In order to close Drawer, this method will call "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])])])], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Drawer Events ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameter</th></tr></thead><tbody><tr><td>open</td><td>Triggered before Drawer opening animation begins</td><td>—</td></tr><tr><td>opened</td><td>Triggered after Drawer opening animation ended</td><td>—</td></tr><tr><td>close</td><td>Triggered before Drawer closing animation begins</td><td>—</td></tr><tr><td>closed</td><td>Triggered after Drawer closing animation ended</td><td>—</td></tr></tbody></table>", 1);

function drawervue_type_template_id_aa7d5de6_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", drawervue_type_template_id_aa7d5de6_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "drawer",
    content: "Drawer",
    href: "#drawer",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [drawervue_type_template_id_aa7d5de6_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#drawer"
    })]),
    _: 1
  }), drawervue_type_template_id_aa7d5de6_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic Usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [drawervue_type_template_id_aa7d5de6_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), drawervue_type_template_id_aa7d5de6_hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "no-title",
    content: "No Title",
    href: "#no-title",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#no-title"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "customization-content",
    content: "Customization Content",
    href: "#customization-content",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#customization-content"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "nested-drawer",
    content: "Nested Drawer",
    href: "#nested-drawer",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#nested-drawer"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), _hoisted_20, _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "drawer-attributes",
    content: "Drawer Attributes",
    href: "#drawer-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#drawer-attributes"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "drawer-slots",
    content: "Drawer Slots",
    href: "#drawer-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#drawer-slots"
    })]),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "drawer-methods",
    content: "Drawer Methods",
    href: "#drawer-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#drawer-methods"
    })]),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "drawer-events",
    content: "Drawer Events",
    href: "#drawer-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#drawer-events"
    })]),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/drawer.md?vue&type=template&id=aa7d5de6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/drawer.md?vue&type=script&lang=ts

/* harmony default export */ var drawervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("left to right");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("right to left");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("top to bottom");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("bottom to top");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode(" open ");

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", null, "Hi, there!", -1);

      function render(_ctx, _cache) {
        const _component_el_radio = _resolveComponent("el-radio");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_drawer = _resolveComponent("el-drawer");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.direction,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.direction = $event)
        }, {
          default: _withCtx(() => [_createVNode(_component_el_radio, {
            label: "ltr"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_radio, {
            label: "rtl"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_radio, {
            label: "ttb"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_radio, {
            label: "btt"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_button, {
          onClick: _cache[1] || (_cache[1] = $event => _ctx.drawer = true),
          type: "primary",
          style: {
            "margin-left": "16px"
          }
        }, {
          default: _withCtx(() => [_hoisted_5]),
          _: 1
        }), _createVNode(_component_el_drawer, {
          title: "I am the title",
          modelValue: _ctx.drawer,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.drawer = $event),
          direction: _ctx.direction,
          "before-close": _ctx.handleClose
        }, {
          default: _withCtx(() => [_hoisted_6]),
          _: 1
        }, 8, ["modelValue", "direction", "before-close"])]);
      }

      const democomponentExport = {
        data() {
          return {
            drawer: false,
            direction: 'rtl'
          };
        },

        methods: {
          handleClose(done) {
            this.$confirm('Are you sure you want to close this?').then(_ => {
              done();
            }).catch(_ => {});
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
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" open ");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", null, "Hi there!", -1);

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_drawer = _resolveComponent("el-drawer");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          onClick: _cache[0] || (_cache[0] = $event => _ctx.drawer = true),
          type: "primary",
          style: {
            "margin-left": "16px"
          }
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_drawer, {
          title: "I am the title",
          modelValue: _ctx.drawer,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.drawer = $event),
          "with-header": false
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            drawer: false
          };
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
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Open Drawer with nested table");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Open Drawer with nested form");

      const _hoisted_3 = {
        class: "demo-drawer__content"
      };
      const _hoisted_4 = {
        class: "demo-drawer__footer"
      };

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Cancel");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        const _component_el_drawer = _resolveComponent("el-drawer");

        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.table = true)
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = $event => _ctx.dialog = true)
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }), _createVNode(_component_el_drawer, {
          title: "I have a nested table inside!",
          modelValue: _ctx.table,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.table = $event),
          direction: "rtl",
          size: "50%"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table, {
            data: _ctx.gridData
          }, {
            default: _withCtx(() => [_createVNode(_component_el_table_column, {
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
            })]),
            _: 1
          }, 8, ["data"])]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_drawer, {
          title: "I have a nested form inside!",
          "before-close": _ctx.handleClose,
          modelValue: _ctx.dialog,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.dialog = $event),
          direction: "ltr",
          "custom-class": "demo-drawer",
          ref: "drawer"
        }, {
          default: _withCtx(() => [_createElementVNode("div", _hoisted_3, [_createVNode(_component_el_form, {
            model: _ctx.form
          }, {
            default: _withCtx(() => [_createVNode(_component_el_form_item, {
              label: "Name",
              "label-width": _ctx.formLabelWidth
            }, {
              default: _withCtx(() => [_createVNode(_component_el_input, {
                modelValue: _ctx.form.name,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.form.name = $event),
                autocomplete: "off"
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label-width"]), _createVNode(_component_el_form_item, {
              label: "Area",
              "label-width": _ctx.formLabelWidth
            }, {
              default: _withCtx(() => [_createVNode(_component_el_select, {
                modelValue: _ctx.form.region,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.form.region = $event),
                placeholder: "Please select activity area"
              }, {
                default: _withCtx(() => [_createVNode(_component_el_option, {
                  label: "Area1",
                  value: "shanghai"
                }), _createVNode(_component_el_option, {
                  label: "Area2",
                  value: "beijing"
                })]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label-width"])]),
            _: 1
          }, 8, ["model"]), _createElementVNode("div", _hoisted_4, [_createVNode(_component_el_button, {
            onClick: _ctx.cancelForm
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          }, 8, ["onClick"]), _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[5] || (_cache[5] = $event => _ctx.$refs.drawer.closeDrawer()),
            loading: _ctx.loading
          }, {
            default: _withCtx(() => [_createTextVNode(_toDisplayString(_ctx.loading ? 'Submitting ...' : 'Submit'), 1)]),
            _: 1
          }, 8, ["loading"])])])]),
          _: 1
        }, 8, ["before-close", "modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            table: false,
            dialog: false,
            loading: false,
            gridData: [{
              date: '2016-05-02',
              name: 'Peter Parker',
              address: 'Queens, New York City'
            }, {
              date: '2016-05-04',
              name: 'Peter Parker',
              address: 'Queens, New York City'
            }, {
              date: '2016-05-01',
              name: 'Peter Parker',
              address: 'Queens, New York City'
            }, {
              date: '2016-05-03',
              name: 'Peter Parker',
              address: 'Queens, New York City'
            }],
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
            formLabelWidth: '80px',
            timer: null
          };
        },

        methods: {
          handleClose(done) {
            if (this.loading) {
              return;
            }

            this.$confirm('Do you want to submit?').then(_ => {
              this.loading = true;
              this.timer = setTimeout(() => {
                done(); // animation takes time

                setTimeout(() => {
                  this.loading = false;
                }, 400);
              }, 2000);
            }).catch(_ => {});
          },

          cancelForm() {
            this.loading = false;
            this.dialog = false;
            clearTimeout(this.timer);
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
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" open ");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Click me!");

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("p", null, "_(:зゝ∠)_", -1);

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_drawer = _resolveComponent("el-drawer");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          onClick: _cache[0] || (_cache[0] = $event => _ctx.drawer = true),
          type: "primary",
          style: {
            "margin-left": "16px"
          }
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_drawer, {
          title: "I'm outer Drawer",
          modelValue: _ctx.drawer,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.drawer = $event),
          size: "50%"
        }, {
          default: _withCtx(() => [_createElementVNode("div", null, [_createVNode(_component_el_button, {
            onClick: _cache[1] || (_cache[1] = $event => _ctx.innerDrawer = true)
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_drawer, {
            title: "I'm inner Drawer",
            "append-to-body": true,
            "before-close": _ctx.handleClose,
            modelValue: _ctx.innerDrawer,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.innerDrawer = $event)
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }, 8, ["before-close", "modelValue"])])]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            drawer: false,
            innerDrawer: false
          };
        },

        methods: {
          handleClose(done) {
            this.$confirm('You still have unsaved data, proceed?').then(_ => {
              done();
            }).catch(_ => {});
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
// CONCATENATED MODULE: ./website/docs/en-US/drawer.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/drawer.md



drawervue_type_script_lang_ts.render = drawervue_type_template_id_aa7d5de6_render

/* harmony default export */ var drawer = __webpack_exports__["default"] = (drawervue_type_script_lang_ts);

/***/ })

}]);