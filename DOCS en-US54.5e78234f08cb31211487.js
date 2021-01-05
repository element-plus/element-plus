(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/tabs.md?vue&type=template&id=7fdfe1cb

var tabsvue_type_template_id_7fdfe1cb_hoisted_1 = {
  class: "content element-doc"
};

var tabsvue_type_template_id_7fdfe1cb_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "tabs"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tabs"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tabs")], -1);

var tabsvue_type_template_id_7fdfe1cb_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Divide data collections which are related yet belong to different types.", -1);

var tabsvue_type_template_id_7fdfe1cb_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Basic usage")], -1);

var tabsvue_type_template_id_7fdfe1cb_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Basic and concise tabs.", -1);

var tabsvue_type_template_id_7fdfe1cb_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Tabs provide a selective card functionality. By default the first tab is selected as active, and you can activate any tab by setting the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute.")])], -1);

var tabsvue_type_template_id_7fdfe1cb_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-tabs v-model=\"activeName\" @tab-click=\"handleClick\">\n    <el-tab-pane label=\"User\" name=\"first\">User</el-tab-pane>\n    <el-tab-pane label=\"Config\" name=\"second\">Config</el-tab-pane>\n    <el-tab-pane label=\"Role\" name=\"third\">Role</el-tab-pane>\n    <el-tab-pane label=\"Task\" name=\"fourth\">Task</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: 'first'\n      };\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event);\n      }\n    }\n  };\n</script>\n")], -1);

var tabsvue_type_template_id_7fdfe1cb_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "card-style"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#card-style"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Card Style")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Tabs styled as cards.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "card"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" can get a card-styled tab.")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-tabs type=\"card\" @tab-click=\"handleClick\">\n    <el-tab-pane label=\"User\">User</el-tab-pane>\n    <el-tab-pane label=\"Config\">Config</el-tab-pane>\n    <el-tab-pane label=\"Role\">Role</el-tab-pane>\n    <el-tab-pane label=\"Task\">Task</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: 'first'\n      };\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "border-card"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#border-card"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Border card")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Border card tabs.", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "border-card"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tabs type=\"border-card\">\n  <el-tab-pane label=\"User\">User</el-tab-pane>\n  <el-tab-pane label=\"Config\">Config</el-tab-pane>\n  <el-tab-pane label=\"Role\">Role</el-tab-pane>\n  <el-tab-pane label=\"Task\">Task</el-tab-pane>\n</el-tabs>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tab-position"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tab-position"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tab position")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("You can use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "tab-position"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute to set the tab's position.")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("You can choose from four directions: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "tabPosition=\"left|right|top|bottom\"")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-radio-group v-model=\"tabPosition\" style=\"margin-bottom: 30px;\">\n    <el-radio-button label=\"top\">top</el-radio-button>\n    <el-radio-button label=\"right\">right</el-radio-button>\n    <el-radio-button label=\"bottom\">bottom</el-radio-button>\n    <el-radio-button label=\"left\">left</el-radio-button>\n  </el-radio-group>\n\n  <el-tabs :tab-position=\"tabPosition\" style=\"height: 200px;\">\n    <el-tab-pane label=\"User\">User</el-tab-pane>\n    <el-tab-pane label=\"Config\">Config</el-tab-pane>\n    <el-tab-pane label=\"Role\">Role</el-tab-pane>\n    <el-tab-pane label=\"Task\">Task</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tabPosition: 'left'\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "custom-tab"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#custom-tab"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Custom Tab")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "You can use named slot to customize the tab label content.", -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tabs type=\"border-card\">\n  <el-tab-pane>\n    <template #label>\n      <span><i class=\"el-icon-date\"></i> Route</span>\n    </template>\n    Route\n  </el-tab-pane>\n  <el-tab-pane label=\"Config\">Config</el-tab-pane>\n  <el-tab-pane label=\"Role\">Role</el-tab-pane>\n  <el-tab-pane label=\"Task\">Task</el-tab-pane>\n</el-tabs>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "add-close-tab"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#add-close-tab"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Add & close tab")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Only card type Tabs support addable & closeable.", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tabs v-model=\"editableTabsValue\" type=\"card\" editable @edit=\"handleTabsEdit\">\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [{\n          title: 'Tab 1',\n          name: '1',\n          content: 'Tab 1 content'\n        }, {\n          title: 'Tab 2',\n          name: '2',\n          content: 'Tab 2 content'\n        }],\n        tabIndex: 2\n      }\n    },\n    methods: {\n      handleTabsEdit(targetName, action) {\n        if (action === 'add') {\n          let newTabName = ++this.tabIndex + '';\n          this.editableTabs.push({\n            title: 'New Tab',\n            name: newTabName,\n            content: 'New Tab content'\n          });\n          this.editableTabsValue = newTabName;\n        }\n        if (action === 'remove') {\n          let tabs = this.editableTabs;\n          let activeName = this.editableTabsValue;\n          if (activeName === targetName) {\n            tabs.forEach((tab, index) => {\n              if (tab.name === targetName) {\n                let nextTab = tabs[index + 1] || tabs[index - 1];\n                if (nextTab) {\n                  activeName = nextTab.name;\n                }\n              }\n            });\n          }\n          \n          this.editableTabsValue = activeName;\n          this.editableTabs = tabs.filter(tab => tab.name !== targetName);\n        }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "customized-trigger-button-of-new-tab"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#customized-trigger-button-of-new-tab"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Customized trigger button of new tab")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div style=\"margin-bottom: 20px;\">\n  <el-button\n    size=\"small\"\n    @click=\"addTab(editableTabsValue)\"\n  >\n    add tab\n  </el-button>\n</div>\n<el-tabs v-model=\"editableTabsValue\" type=\"card\" closable @tab-remove=\"removeTab\">\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [{\n          title: 'Tab 1',\n          name: '1',\n          content: 'Tab 1 content'\n        }, {\n          title: 'Tab 2',\n          name: '2',\n          content: 'Tab 2 content'\n        }],\n        tabIndex: 2\n      }\n    },\n    methods: {\n      addTab(targetName) {\n        let newTabName = ++this.tabIndex + '';\n        this.editableTabs.push({\n          title: 'New Tab',\n          name: newTabName,\n          content: 'New Tab content'\n        });\n        this.editableTabsValue = newTabName;\n      },\n      removeTab(targetName) {\n        let tabs = this.editableTabs;\n        let activeName = this.editableTabsValue;\n        if (activeName === targetName) {\n          tabs.forEach((tab, index) => {\n            if (tab.name === targetName) {\n              let nextTab = tabs[index + 1] || tabs[index - 1];\n              if (nextTab) {\n                activeName = nextTab.name;\n              }\n            }\n          });\n        }\n        \n        this.editableTabsValue = activeName;\n        this.editableTabs = tabs.filter(tab => tab.name !== targetName);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"tabs-attributes\"><a class=\"header-anchor\" href=\"#tabs-attributes\">¶</a> Tabs Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>value / v-model</td><td>binding value, name of the selected tab</td><td>string</td><td>—</td><td>name of first tab</td></tr><tr><td>type</td><td>type of Tab</td><td>string</td><td>card/border-card</td><td>—</td></tr><tr><td>closable</td><td>whether Tab is closable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>addable</td><td>whether Tab is addable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>whether Tab is addable and closable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>tab-position</td><td>position of tabs</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>whether width of tab automatically fits its container</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>hook function before switching tab. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, switching will be prevented</td><td>Function(activeName, oldActiveName)</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"tabs-events\"><a class=\"header-anchor\" href=\"#tabs-events\">¶</a> Tabs Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>tab-click</td><td>triggers when a tab is clicked</td><td>clicked tab</td></tr><tr><td>tab-remove</td><td>triggers when tab-remove button is clicked</td><td>name of the removed tab</td></tr><tr><td>tab-add</td><td>triggers when tab-add button is clicked</td><td>—</td></tr><tr><td>edit</td><td>triggers when tab-add button or tab-remove is clicked</td><td>(targetName, action)</td></tr></tbody></table><h3 id=\"tab-pane-attributes\"><a class=\"header-anchor\" href=\"#tab-pane-attributes\">¶</a> Tab-pane Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>title of the tab</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether Tab is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>identifier corresponding to the name of Tabs, representing the alias of the tab-pane</td><td>string</td><td>—</td><td>ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is &#39;1&#39;</td></tr><tr><td>closable</td><td>whether Tab is closable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lazy</td><td>whether Tab is lazily rendered</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 6);

function tabsvue_type_template_id_7fdfe1cb_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", tabsvue_type_template_id_7fdfe1cb_hoisted_1, [tabsvue_type_template_id_7fdfe1cb_hoisted_2, tabsvue_type_template_id_7fdfe1cb_hoisted_3, tabsvue_type_template_id_7fdfe1cb_hoisted_4, tabsvue_type_template_id_7fdfe1cb_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tabsvue_type_template_id_7fdfe1cb_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tabsvue_type_template_id_7fdfe1cb_hoisted_6];
    }),
    _: 1
  }), tabsvue_type_template_id_7fdfe1cb_hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
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
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_20, _hoisted_21, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), _hoisted_23, _hoisted_24, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    _: 1
  }), _hoisted_28]);
}
// CONCATENATED MODULE: ./website/docs/en-US/tabs.md?vue&type=template&id=7fdfe1cb

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/tabs.md?vue&type=script&lang=ts


/* harmony default export */ var tabsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("User");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Role");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          modelValue: _ctx.activeName,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.activeName = $event;
          }),
          onTabClick: _ctx.handleClick
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_tab_pane, {
              label: "User",
              name: "first"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Config",
              name: "second"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Role",
              name: "third"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Task",
              name: "fourth"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue", "onTabClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeName: 'first'
          };
        },
        methods: {
          handleClick: function handleClick(tab, event) {
            console.log(tab, event);
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("User");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Role");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "card",
          onTabClick: _ctx.handleClick
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_tab_pane, {
              label: "User"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Config"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Role"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Task"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["onTabClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeName: 'first'
          };
        },
        methods: {
          handleClick: function handleClick(tab, event) {
            console.log(tab, event);
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("User");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Role");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "border-card"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_tab_pane, {
              label: "User"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Config"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Role"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Task"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("top");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("right");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("bottom");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("left");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("User");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Config");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Role");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        var _component_el_radio_button = _resolveComponent("el-radio-button");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.tabPosition,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.tabPosition = $event;
          }),
          style: {
            "margin-bottom": "30px"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio_button, {
              label: "top"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_radio_button, {
              label: "right"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_radio_button, {
              label: "bottom"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_radio_button, {
              label: "left"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_tabs, {
          "tab-position": _ctx.tabPosition,
          style: {
            "height": "200px"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_tab_pane, {
              label: "User"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Config"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Role"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Task"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["tab-position"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tabPosition: 'left'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", null, [/*#__PURE__*/_createVNode("i", {
        class: "el-icon-date"
      }), /*#__PURE__*/_createTextVNode(" Route")], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" Route ");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Config");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Role");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "border-card"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_tab_pane, null, {
              label: _withCtx(function () {
                return [_hoisted_1];
              }),
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Config"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Role"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Task"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          modelValue: _ctx.editableTabsValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.editableTabsValue = $event;
          }),
          type: "card",
          editable: "",
          onEdit: _ctx.handleTabsEdit
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.editableTabs, function (item, index) {
              return _openBlock(), _createBlock(_component_el_tab_pane, {
                key: item.name,
                label: item.title,
                name: item.name
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(item.content), 1)];
                }),
                _: 2
              }, 1032, ["label", "name"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue", "onEdit"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            editableTabsValue: '2',
            editableTabs: [{
              title: 'Tab 1',
              name: '1',
              content: 'Tab 1 content'
            }, {
              title: 'Tab 2',
              name: '2',
              content: 'Tab 2 content'
            }],
            tabIndex: 2
          };
        },
        methods: {
          handleTabsEdit: function handleTabsEdit(targetName, action) {
            if (action === 'add') {
              var newTabName = ++this.tabIndex + '';
              this.editableTabs.push({
                title: 'New Tab',
                name: newTabName,
                content: 'New Tab content'
              });
              this.editableTabsValue = newTabName;
            }

            if (action === 'remove') {
              var tabs = this.editableTabs;
              var activeName = this.editableTabsValue;

              if (activeName === targetName) {
                tabs.forEach(function (tab, index) {
                  if (tab.name === targetName) {
                    var nextTab = tabs[index + 1] || tabs[index - 1];

                    if (nextTab) {
                      activeName = nextTab.name;
                    }
                  }
                });
              }

              this.editableTabsValue = activeName;
              this.editableTabs = tabs.filter(function (tab) {
                return tab.name !== targetName;
              });
            }
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
          _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */];
      var _hoisted_1 = {
        style: {
          "margin-bottom": "20px"
        }
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" add tab ");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_button, {
          size: "small",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.addTab(_ctx.editableTabsValue);
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        })]), _createVNode(_component_el_tabs, {
          modelValue: _ctx.editableTabsValue,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.editableTabsValue = $event;
          }),
          type: "card",
          closable: "",
          onTabRemove: _ctx.removeTab
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.editableTabs, function (item, index) {
              return _openBlock(), _createBlock(_component_el_tab_pane, {
                key: item.name,
                label: item.title,
                name: item.name
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(item.content), 1)];
                }),
                _: 2
              }, 1032, ["label", "name"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue", "onTabRemove"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            editableTabsValue: '2',
            editableTabs: [{
              title: 'Tab 1',
              name: '1',
              content: 'Tab 1 content'
            }, {
              title: 'Tab 2',
              name: '2',
              content: 'Tab 2 content'
            }],
            tabIndex: 2
          };
        },
        methods: {
          addTab: function addTab(targetName) {
            var newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
              title: 'New Tab',
              name: newTabName,
              content: 'New Tab content'
            });
            this.editableTabsValue = newTabName;
          },
          removeTab: function removeTab(targetName) {
            var tabs = this.editableTabs;
            var activeName = this.editableTabsValue;

            if (activeName === targetName) {
              tabs.forEach(function (tab, index) {
                if (tab.name === targetName) {
                  var nextTab = tabs[index + 1] || tabs[index - 1];

                  if (nextTab) {
                    activeName = nextTab.name;
                  }
                }
              });
            }

            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(function (tab) {
              return tab.name !== targetName;
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
// CONCATENATED MODULE: ./website/docs/en-US/tabs.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/tabs.md



tabsvue_type_script_lang_ts.render = tabsvue_type_template_id_7fdfe1cb_render

/* harmony default export */ var tabs = __webpack_exports__["default"] = (tabsvue_type_script_lang_ts);

/***/ })

}]);