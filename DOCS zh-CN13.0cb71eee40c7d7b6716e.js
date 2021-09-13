(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[294],{

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/collapse.md?vue&type=template&id=9024e2d4

const collapsevue_type_template_id_9024e2d4_hoisted_1 = {
  class: "content element-doc"
};

const collapsevue_type_template_id_9024e2d4_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Collapse 折叠面板 ");

const collapsevue_type_template_id_9024e2d4_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "通过折叠面板收纳内容区域", -1);

const collapsevue_type_template_id_9024e2d4_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const collapsevue_type_template_id_9024e2d4_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可同时展开多个面板，面板之间不影响", -1);

const collapsevue_type_template_id_9024e2d4_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-collapse v-model=\"activeNames\" @change=\"handleChange\">\n  <el-collapse-item title=\"一致性 Consistency\" name=\"1\">\n    <div>\n      与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；\n    </div>\n    <div>\n      在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"反馈 Feedback\" name=\"2\">\n    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"效率 Efficiency\" name=\"3\">\n    <div>简化流程：设计简洁直观的操作流程；</div>\n    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>\n    <div>\n      帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"可控 Controllability\" name=\"4\">\n    <div>\n      用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；\n    </div>\n    <div>\n      结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。\n    </div>\n  </el-collapse-item>\n</el-collapse>\n<script>\n  export default {\n    data() {\n      return {\n        activeNames: ['1'],\n      }\n    },\n    methods: {\n      handleChange(val) {\n        console.log(val)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const activeNames = ref(['1']);\n      const handleChange = (val) => {\n        console.log(val);\n      };\n      return {\n        activeNames,\n        handleChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const collapsevue_type_template_id_9024e2d4_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("手风琴效果 ");

const collapsevue_type_template_id_9024e2d4_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "每次只能展开一个面板", -1);

const collapsevue_type_template_id_9024e2d4_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "accordion"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性来设置是否以手风琴模式显示。")])], -1);

const collapsevue_type_template_id_9024e2d4_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-collapse v-model=\"activeName\" accordion>\n  <el-collapse-item title=\"一致性 Consistency\" name=\"1\">\n    <div>\n      与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；\n    </div>\n    <div>\n      在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"反馈 Feedback\" name=\"2\">\n    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"效率 Efficiency\" name=\"3\">\n    <div>简化流程：设计简洁直观的操作流程；</div>\n    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>\n    <div>\n      帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"可控 Controllability\" name=\"4\">\n    <div>\n      用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；\n    </div>\n    <div>\n      结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。\n    </div>\n  </el-collapse-item>\n</el-collapse>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: '1',\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const activeName = ref('1');\n\n      return {\n        activeName,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const collapsevue_type_template_id_9024e2d4_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义面板标题 ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("除了可以通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性以外，还可以通过具名 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 来实现自定义面板的标题内容，以实现增加图标等效果。")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-collapse accordion>\n  <el-collapse-item>\n    <template #title>\n      一致性 Consistency<i class=\"header-icon el-icon-info\"></i>\n    </template>\n    <div>\n      与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；\n    </div>\n    <div>\n      在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"反馈 Feedback\">\n    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"效率 Efficiency\">\n    <div>简化流程：设计简洁直观的操作流程；</div>\n    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>\n    <div>\n      帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"可控 Controllability\">\n    <div>\n      用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；\n    </div>\n    <div>\n      结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。\n    </div>\n  </el-collapse-item>\n</el-collapse>\n")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Collapse Attributes ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>当前激活的面板(如果是手风琴模式，绑定值类型需要为<code>string</code>，否则为<code>array</code>)</td><td>string / array</td><td>—</td><td>—</td></tr><tr><td>accordion</td><td>是否手风琴模式</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Collapse Events ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当前激活面板改变时触发(如果是手风琴模式，参数 <code>activeNames</code> 类型为<code>string</code>，否则为<code>array</code>)</td><td>(activeNames: array / string)</td></tr></tbody></table>", 1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Collapse Item Attributes ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>唯一标志符</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>title</td><td>面板标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Collapse Item Slot ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "参数"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Collapse Item 的正文内容")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Collapse Item 的标题区内容")])])], -1);

function collapsevue_type_template_id_9024e2d4_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", collapsevue_type_template_id_9024e2d4_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "collapse-zhe-die-mian-ban",
    content: "Collapse 折叠面板",
    href: "#collapse-zhe-die-mian-ban",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_9024e2d4_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#collapse-zhe-die-mian-ban"
    })]),
    _: 1
  }), collapsevue_type_template_id_9024e2d4_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_9024e2d4_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), collapsevue_type_template_id_9024e2d4_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_9024e2d4_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shou-feng-qin-xiao-guo",
    content: "手风琴效果",
    href: "#shou-feng-qin-xiao-guo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_9024e2d4_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shou-feng-qin-xiao-guo"
    })]),
    _: 1
  }), collapsevue_type_template_id_9024e2d4_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_9024e2d4_hoisted_10]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_9024e2d4_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zi-ding-yi-mian-ban-biao-ti",
    content: "自定义面板标题",
    href: "#zi-ding-yi-mian-ban-biao-ti",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_9024e2d4_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zi-ding-yi-mian-ban-biao-ti"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "collapse-attributes",
    content: "Collapse Attributes",
    href: "#collapse-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#collapse-attributes"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "collapse-events",
    content: "Collapse Events",
    href: "#collapse-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#collapse-events"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "collapse-item-attributes",
    content: "Collapse Item Attributes",
    href: "#collapse-item-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#collapse-item-attributes"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "collapse-item-slot",
    content: "Collapse Item Slot",
    href: "#collapse-item-slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#collapse-item-slot"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/collapse.md?vue&type=template&id=9024e2d4

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/collapse.md?vue&type=script&lang=ts

/* harmony default export */ var collapsevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", null, " 与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念； ", -1);

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", null, " 在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。 ", -1);

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", null, "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；", -1);

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("div", null, "页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。", -1);

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("div", null, "简化流程：设计简洁直观的操作流程；", -1);

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("div", null, "清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；", -1);

      const _hoisted_7 = /*#__PURE__*/_createElementVNode("div", null, " 帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。 ", -1);

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("div", null, " 用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策； ", -1);

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("div", null, " 结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。 ", -1);

      function render(_ctx, _cache) {
        const _component_el_collapse_item = _resolveComponent("el-collapse-item");

        const _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_collapse, {
          modelValue: _ctx.activeNames,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.activeNames = $event),
          onChange: _ctx.handleChange
        }, {
          default: _withCtx(() => [_createVNode(_component_el_collapse_item, {
            title: "一致性 Consistency",
            name: "1"
          }, {
            default: _withCtx(() => [_hoisted_1, _hoisted_2]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "反馈 Feedback",
            name: "2"
          }, {
            default: _withCtx(() => [_hoisted_3, _hoisted_4]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "效率 Efficiency",
            name: "3"
          }, {
            default: _withCtx(() => [_hoisted_5, _hoisted_6, _hoisted_7]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "可控 Controllability",
            name: "4"
          }, {
            default: _withCtx(() => [_hoisted_8, _hoisted_9]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue", "onChange"])]);
      }

      const democomponentExport = {
        data() {
          return {
            activeNames: ['1']
          };
        },

        methods: {
          handleChange(val) {
            console.log(val);
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
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", null, " 与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念； ", -1);

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", null, " 在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。 ", -1);

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", null, "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；", -1);

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("div", null, "页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。", -1);

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("div", null, "简化流程：设计简洁直观的操作流程；", -1);

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("div", null, "清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；", -1);

      const _hoisted_7 = /*#__PURE__*/_createElementVNode("div", null, " 帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。 ", -1);

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("div", null, " 用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策； ", -1);

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("div", null, " 结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。 ", -1);

      function render(_ctx, _cache) {
        const _component_el_collapse_item = _resolveComponent("el-collapse-item");

        const _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_collapse, {
          modelValue: _ctx.activeName,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.activeName = $event),
          accordion: ""
        }, {
          default: _withCtx(() => [_createVNode(_component_el_collapse_item, {
            title: "一致性 Consistency",
            name: "1"
          }, {
            default: _withCtx(() => [_hoisted_1, _hoisted_2]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "反馈 Feedback",
            name: "2"
          }, {
            default: _withCtx(() => [_hoisted_3, _hoisted_4]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "效率 Efficiency",
            name: "3"
          }, {
            default: _withCtx(() => [_hoisted_5, _hoisted_6, _hoisted_7]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "可控 Controllability",
            name: "4"
          }, {
            default: _withCtx(() => [_hoisted_8, _hoisted_9]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            activeName: '1'
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
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" 一致性 Consistency");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("i", {
        class: "header-icon el-icon-info"
      }, null, -1);

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", null, " 与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念； ", -1);

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("div", null, " 在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。 ", -1);

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("div", null, "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；", -1);

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("div", null, "页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。", -1);

      const _hoisted_7 = /*#__PURE__*/_createElementVNode("div", null, "简化流程：设计简洁直观的操作流程；", -1);

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("div", null, "清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；", -1);

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("div", null, " 帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。 ", -1);

      const _hoisted_10 = /*#__PURE__*/_createElementVNode("div", null, " 用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策； ", -1);

      const _hoisted_11 = /*#__PURE__*/_createElementVNode("div", null, " 结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。 ", -1);

      function render(_ctx, _cache) {
        const _component_el_collapse_item = _resolveComponent("el-collapse-item");

        const _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_collapse, {
          accordion: ""
        }, {
          default: _withCtx(() => [_createVNode(_component_el_collapse_item, null, {
            title: _withCtx(() => [_hoisted_1, _hoisted_2]),
            default: _withCtx(() => [_hoisted_3, _hoisted_4]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "反馈 Feedback"
          }, {
            default: _withCtx(() => [_hoisted_5, _hoisted_6]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "效率 Efficiency"
          }, {
            default: _withCtx(() => [_hoisted_7, _hoisted_8, _hoisted_9]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "可控 Controllability"
          }, {
            default: _withCtx(() => [_hoisted_10, _hoisted_11]),
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
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/collapse.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/collapse.md



collapsevue_type_script_lang_ts.render = collapsevue_type_template_id_9024e2d4_render

/* harmony default export */ var collapse = __webpack_exports__["default"] = (collapsevue_type_script_lang_ts);

/***/ })

}]);