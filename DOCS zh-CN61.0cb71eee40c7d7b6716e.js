(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[347],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/tabs.md?vue&type=template&id=1046f70d

const tabsvue_type_template_id_1046f70d_hoisted_1 = {
  class: "content element-doc"
};

const tabsvue_type_template_id_1046f70d_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tabs 标签页 ");

const tabsvue_type_template_id_1046f70d_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "分隔内容上有关联但属于不同类别的数据集合。", -1);

const tabsvue_type_template_id_1046f70d_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const tabsvue_type_template_id_1046f70d_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "基础的、简洁的标签页。", -1);

const tabsvue_type_template_id_1046f70d_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性来指定当前选中的标签页。")])], -1);

const tabsvue_type_template_id_1046f70d_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-tabs v-model=\"activeName\" @tab-click=\"handleClick\">\n    <el-tab-pane label=\"用户管理\" name=\"first\">用户管理</el-tab-pane>\n    <el-tab-pane label=\"配置管理\" name=\"second\">配置管理</el-tab-pane>\n    <el-tab-pane label=\"角色管理\" name=\"third\">角色管理</el-tab-pane>\n    <el-tab-pane label=\"定时任务补偿\" name=\"fourth\">定时任务补偿</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: 'second',\n      }\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event)\n      },\n    },\n  }\n</script>\n")], -1);

const tabsvue_type_template_id_1046f70d_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("选项卡样式 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "选项卡样式的标签页。", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("只需要设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "card"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 就可以使选项卡改变为标签风格。")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-tabs v-model=\"activeName\" type=\"card\" @tab-click=\"handleClick\">\n    <el-tab-pane label=\"用户管理\" name=\"first\">用户管理</el-tab-pane>\n    <el-tab-pane label=\"配置管理\" name=\"second\">配置管理</el-tab-pane>\n    <el-tab-pane label=\"角色管理\" name=\"third\">角色管理</el-tab-pane>\n    <el-tab-pane label=\"定时任务补偿\" name=\"fourth\">定时任务补偿</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: 'first',\n      }\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("卡片化 ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "卡片化的标签页。", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("将"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "border-card"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tabs type=\"border-card\">\n  <el-tab-pane label=\"用户管理\">用户管理</el-tab-pane>\n  <el-tab-pane label=\"配置管理\">配置管理</el-tab-pane>\n  <el-tab-pane label=\"角色管理\">角色管理</el-tab-pane>\n  <el-tab-pane label=\"定时任务补偿\">定时任务补偿</el-tab-pane>\n</el-tabs>\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("位置 ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可以通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "tab-position"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 设置标签的位置")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("标签一共有四个方向的设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "tabPosition=\"left|right|top|bottom\"")])], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-radio-group v-model=\"tabPosition\" style=\"margin-bottom: 30px;\">\n    <el-radio-button label=\"top\">top</el-radio-button>\n    <el-radio-button label=\"right\">right</el-radio-button>\n    <el-radio-button label=\"bottom\">bottom</el-radio-button>\n    <el-radio-button label=\"left\">left</el-radio-button>\n  </el-radio-group>\n\n  <el-tabs :tab-position=\"tabPosition\" style=\"height: 200px;\">\n    <el-tab-pane label=\"用户管理\">用户管理</el-tab-pane>\n    <el-tab-pane label=\"配置管理\">配置管理</el-tab-pane>\n    <el-tab-pane label=\"角色管理\">角色管理</el-tab-pane>\n    <el-tab-pane label=\"定时任务补偿\">定时任务补偿</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tabPosition: 'left',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义标签页 ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可以通过具名 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 来实现自定义标签页的内容")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tabs type=\"border-card\">\n  <el-tab-pane>\n    <template #label>\n      <span><i class=\"el-icon-date\"></i> 我的行程</span>\n    </template>\n    我的行程\n  </el-tab-pane>\n  <el-tab-pane label=\"消息中心\">消息中心</el-tab-pane>\n  <el-tab-pane label=\"角色管理\">角色管理</el-tab-pane>\n  <el-tab-pane label=\"定时任务补偿\">定时任务补偿</el-tab-pane>\n</el-tabs>\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("动态增减标签页 ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "增减标签页按钮只能在选项卡样式的标签页下使用", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tabs\n  v-model=\"editableTabsValue\"\n  type=\"card\"\n  editable\n  @edit=\"handleTabsEdit\"\n>\n  <el-tab-pane\n    :key=\"item.name\"\n    v-for=\"(item, index) in editableTabs\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [\n          {\n            title: 'Tab 1',\n            name: '1',\n            content: 'Tab 1 content',\n          },\n          {\n            title: 'Tab 2',\n            name: '2',\n            content: 'Tab 2 content',\n          },\n        ],\n        tabIndex: 2,\n      }\n    },\n    methods: {\n      handleTabsEdit(targetName, action) {\n        if (action === 'add') {\n          let newTabName = ++this.tabIndex + ''\n          this.editableTabs.push({\n            title: 'New Tab',\n            name: newTabName,\n            content: 'New Tab content',\n          })\n          this.editableTabsValue = newTabName\n        }\n        if (action === 'remove') {\n          let tabs = this.editableTabs\n          let activeName = this.editableTabsValue\n          if (activeName === targetName) {\n            tabs.forEach((tab, index) => {\n              if (tab.name === targetName) {\n                let nextTab = tabs[index + 1] || tabs[index - 1]\n                if (nextTab) {\n                  activeName = nextTab.name\n                }\n              }\n            })\n          }\n\n          this.editableTabsValue = activeName\n          this.editableTabs = tabs.filter((tab) => tab.name !== targetName)\n        }\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义增加标签页触发器 ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div style=\"margin-bottom: 20px;\">\n  <el-button size=\"small\" @click=\"addTab(editableTabsValue)\">\n    add tab\n  </el-button>\n</div>\n<el-tabs\n  v-model=\"editableTabsValue\"\n  type=\"card\"\n  closable\n  @tab-remove=\"removeTab\"\n>\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [\n          {\n            title: 'Tab 1',\n            name: '1',\n            content: 'Tab 1 content',\n          },\n          {\n            title: 'Tab 2',\n            name: '2',\n            content: 'Tab 2 content',\n          },\n        ],\n        tabIndex: 2,\n      }\n    },\n    methods: {\n      addTab(targetName) {\n        let newTabName = ++this.tabIndex + ''\n        this.editableTabs.push({\n          title: 'New Tab',\n          name: newTabName,\n          content: 'New Tab content',\n        })\n        this.editableTabsValue = newTabName\n      },\n      removeTab(targetName) {\n        let tabs = this.editableTabs\n        let activeName = this.editableTabsValue\n        if (activeName === targetName) {\n          tabs.forEach((tab, index) => {\n            if (tab.name === targetName) {\n              let nextTab = tabs[index + 1] || tabs[index - 1]\n              if (nextTab) {\n                activeName = nextTab.name\n              }\n            }\n          })\n        }\n\n        this.editableTabsValue = activeName\n        this.editableTabs = tabs.filter((tab) => tab.name !== targetName)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tabs Attributes ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值，选中选项卡的 name</td><td>string</td><td>—</td><td>第一个选项卡的 name</td></tr><tr><td>type</td><td>风格类型</td><td>string</td><td>card/border-card</td><td>—</td></tr><tr><td>closable</td><td>标签是否可关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>addable</td><td>标签是否可增加</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>标签是否同时可增加和关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>tab-position</td><td>选项卡所在位置</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>标签的宽度是否自撑开</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。</td><td>Function(activeName, oldActiveName)</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tabs Events ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>tab-click</td><td>tab 被选中时触发</td><td>被选中的标签 tab 实例</td></tr><tr><td>tab-remove</td><td>点击 tab 移除按钮后触发</td><td>被删除的标签的 name</td></tr><tr><td>tab-add</td><td>点击 tabs 的新增按钮后触发</td><td>—</td></tr><tr><td>edit</td><td>点击 tabs 的新增按钮或 tab 被关闭后触发</td><td>(targetName, action)</td></tr></tbody></table>", 1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tab-pane Attributes ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>选项卡标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>与选项卡绑定值 value 对应的标识符，表示选项卡别名</td><td>string</td><td>—</td><td>该选项卡在选项卡列表中的顺序值，如第一个选项卡则为&#39;1&#39;</td></tr><tr><td>closable</td><td>标签是否可关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lazy</td><td>标签是否延迟渲染</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tab-pane Slots ");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Tab-pane 的内容")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Tab-pane 的标题内容")])])], -1);

function tabsvue_type_template_id_1046f70d_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", tabsvue_type_template_id_1046f70d_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tabs-biao-qian-ye",
    content: "Tabs 标签页",
    href: "#tabs-biao-qian-ye",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tabsvue_type_template_id_1046f70d_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tabs-biao-qian-ye"
    })]),
    _: 1
  }), tabsvue_type_template_id_1046f70d_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tabsvue_type_template_id_1046f70d_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), tabsvue_type_template_id_1046f70d_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [tabsvue_type_template_id_1046f70d_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tabsvue_type_template_id_1046f70d_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "xuan-xiang-qia-yang-shi",
    content: "选项卡样式",
    href: "#xuan-xiang-qia-yang-shi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tabsvue_type_template_id_1046f70d_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xuan-xiang-qia-yang-shi"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "qia-pian-hua",
    content: "卡片化",
    href: "#qia-pian-hua",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#qia-pian-hua"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "wei-zhi",
    content: "位置",
    href: "#wei-zhi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#wei-zhi"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zi-ding-yi-biao-qian-ye",
    content: "自定义标签页",
    href: "#zi-ding-yi-biao-qian-ye",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zi-ding-yi-biao-qian-ye"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dong-tai-zeng-jian-biao-qian-ye",
    content: "动态增减标签页",
    href: "#dong-tai-zeng-jian-biao-qian-ye",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dong-tai-zeng-jian-biao-qian-ye"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zi-ding-yi-zeng-jia-biao-qian-ye-chu-fa-qi",
    content: "自定义增加标签页触发器",
    href: "#zi-ding-yi-zeng-jia-biao-qian-ye-chu-fa-qi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zi-ding-yi-zeng-jia-biao-qian-ye-chu-fa-qi"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tabs-attributes",
    content: "Tabs Attributes",
    href: "#tabs-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tabs-attributes"
    })]),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tabs-events",
    content: "Tabs Events",
    href: "#tabs-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tabs-events"
    })]),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tab-pane-attributes",
    content: "Tab-pane Attributes",
    href: "#tab-pane-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tab-pane-attributes"
    })]),
    _: 1
  }), _hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tab-pane-slots",
    content: "Tab-pane Slots",
    href: "#tab-pane-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tab-pane-slots"
    })]),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/tabs.md?vue&type=template&id=1046f70d

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/tabs.md?vue&type=script&lang=ts

/* harmony default export */ var tabsvue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("用户管理");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("配置管理");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("角色管理");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("定时任务补偿");

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          modelValue: _ctx.activeName,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.activeName = $event),
          onTabClick: _ctx.handleClick
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, {
            label: "用户管理",
            name: "first"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "配置管理",
            name: "second"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "角色管理",
            name: "third"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "定时任务补偿",
            name: "fourth"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue", "onTabClick"])]);
      }

      const democomponentExport = {
        data() {
          return {
            activeName: 'second'
          };
        },

        methods: {
          handleClick(tab, event) {
            console.log(tab, event);
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("用户管理");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("配置管理");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("角色管理");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("定时任务补偿");

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          modelValue: _ctx.activeName,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.activeName = $event),
          type: "card",
          onTabClick: _ctx.handleClick
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, {
            label: "用户管理",
            name: "first"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "配置管理",
            name: "second"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "角色管理",
            name: "third"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "定时任务补偿",
            name: "fourth"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue", "onTabClick"])]);
      }

      const democomponentExport = {
        data() {
          return {
            activeName: 'first'
          };
        },

        methods: {
          handleClick(tab, event) {
            console.log(tab, event);
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("用户管理");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("配置管理");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("角色管理");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("定时任务补偿");

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "border-card"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, {
            label: "用户管理"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "配置管理"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "角色管理"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "定时任务补偿"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        })]);
      }

      const democomponentExport = {};
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("top");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("right");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("bottom");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("left");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("用户管理");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("配置管理");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("角色管理");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("定时任务补偿");

      function render(_ctx, _cache) {
        const _component_el_radio_button = _resolveComponent("el-radio-button");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.tabPosition,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.tabPosition = $event),
          style: {
            "margin-bottom": "30px"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_radio_button, {
            label: "top"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_radio_button, {
            label: "right"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_radio_button, {
            label: "bottom"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_radio_button, {
            label: "left"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_tabs, {
          "tab-position": _ctx.tabPosition,
          style: {
            "height": "200px"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, {
            label: "用户管理"
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "配置管理"
          }, {
            default: _withCtx(() => [_hoisted_6]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "角色管理"
          }, {
            default: _withCtx(() => [_hoisted_7]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "定时任务补偿"
          }, {
            default: _withCtx(() => [_hoisted_8]),
            _: 1
          })]),
          _: 1
        }, 8, ["tab-position"])]);
      }

      const democomponentExport = {
        data() {
          return {
            tabPosition: 'left'
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("span", null, [/*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-date"
      }), /*#__PURE__*/_createTextVNode(" 我的行程")], -1);

      const _hoisted_2 = /*#__PURE__*/_createTextVNode(" 我的行程 ");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("消息中心");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("角色管理");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("定时任务补偿");

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "border-card"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, null, {
            label: _withCtx(() => [_hoisted_1]),
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "消息中心"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "角色管理"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "定时任务补偿"
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          })]),
          _: 1
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createBlock: _createBlock,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          modelValue: _ctx.editableTabsValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.editableTabsValue = $event),
          type: "card",
          editable: "",
          onEdit: _ctx.handleTabsEdit
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.editableTabs, (item, index) => {
            return _openBlock(), _createBlock(_component_el_tab_pane, {
              key: item.name,
              label: item.title,
              name: item.name
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(item.content), 1)]),
              _: 2
            }, 1032, ["label", "name"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue", "onEdit"])]);
      }

      const democomponentExport = {
        data() {
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
          handleTabsEdit(targetName, action) {
            if (action === 'add') {
              let newTabName = ++this.tabIndex + '';
              this.editableTabs.push({
                title: 'New Tab',
                name: newTabName,
                content: 'New Tab content'
              });
              this.editableTabsValue = newTabName;
            }

            if (action === 'remove') {
              let tabs = this.editableTabs;
              let activeName = this.editableTabsValue;

              if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                  if (tab.name === targetName) {
                    let nextTab = tabs[index + 1] || tabs[index - 1];

                    if (nextTab) {
                      activeName = nextTab.name;
                    }
                  }
                });
              }

              this.editableTabsValue = activeName;
              this.editableTabs = tabs.filter(tab => tab.name !== targetName);
            }
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
        createElementVNode: _createElementVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createBlock: _createBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        style: {
          "margin-bottom": "20px"
        }
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode(" add tab ");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_button, {
          size: "small",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.addTab(_ctx.editableTabsValue))
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        })]), _createVNode(_component_el_tabs, {
          modelValue: _ctx.editableTabsValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.editableTabsValue = $event),
          type: "card",
          closable: "",
          onTabRemove: _ctx.removeTab
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.editableTabs, (item, index) => {
            return _openBlock(), _createBlock(_component_el_tab_pane, {
              key: item.name,
              label: item.title,
              name: item.name
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(item.content), 1)]),
              _: 2
            }, 1032, ["label", "name"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue", "onTabRemove"])]);
      }

      const democomponentExport = {
        data() {
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
          addTab(targetName) {
            let newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
              title: 'New Tab',
              name: newTabName,
              content: 'New Tab content'
            });
            this.editableTabsValue = newTabName;
          },

          removeTab(targetName) {
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;

            if (activeName === targetName) {
              tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                  let nextTab = tabs[index + 1] || tabs[index - 1];

                  if (nextTab) {
                    activeName = nextTab.name;
                  }
                }
              });
            }

            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== targetName);
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
// CONCATENATED MODULE: ./website/docs/zh-CN/tabs.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/tabs.md



tabsvue_type_script_lang_ts.render = tabsvue_type_template_id_1046f70d_render

/* harmony default export */ var tabs = __webpack_exports__["default"] = (tabsvue_type_script_lang_ts);

/***/ })

}]);