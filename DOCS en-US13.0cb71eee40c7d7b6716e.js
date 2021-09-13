(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/collapse.md?vue&type=template&id=926c9cbc

const collapsevue_type_template_id_926c9cbc_hoisted_1 = {
  class: "content element-doc"
};

const collapsevue_type_template_id_926c9cbc_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Collapse ");

const collapsevue_type_template_id_926c9cbc_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Use Collapse to store contents.", -1);

const collapsevue_type_template_id_926c9cbc_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic usage ");

const collapsevue_type_template_id_926c9cbc_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "You can expand multiple panels", -1);

const collapsevue_type_template_id_926c9cbc_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-collapse v-model=\"activeNames\" @change=\"handleChange\">\n  <el-collapse-item title=\"Consistency\" name=\"1\">\n    <div>\n      Consistent with real life: in line with the process and logic of real\n      life, and comply with languages and habits that the users are used to;\n    </div>\n    <div>\n      Consistent within interface: all elements should be consistent, such as:\n      design style, icons and texts, position of elements, etc.\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Feedback\" name=\"2\">\n    <div>\n      Operation feedback: enable the users to clearly perceive their operations\n      by style updates and interactive effects;\n    </div>\n    <div>\n      Visual feedback: reflect current state by updating or rearranging elements\n      of the page.\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Efficiency\" name=\"3\">\n    <div>\n      Simplify the process: keep operating process simple and intuitive;\n    </div>\n    <div>\n      Definite and clear: enunciate your intentions clearly so that the users\n      can quickly understand and make decisions;\n    </div>\n    <div>\n      Easy to identify: the interface should be straightforward, which helps the\n      users to identify and frees them from memorizing and recalling.\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Controllability\" name=\"4\">\n    <div>\n      Decision making: giving advices about operations is acceptable, but do not\n      make decisions for the users;\n    </div>\n    <div>\n      Controlled consequences: users should be granted the freedom to operate,\n      including canceling, aborting or terminating current operation.\n    </div>\n  </el-collapse-item>\n</el-collapse>\n<script>\n  export default {\n    data() {\n      return {\n        activeNames: ['1'],\n      }\n    },\n    methods: {\n      handleChange(val) {\n        console.log(val)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const activeNames = ref(['1']);\n      const handleChange = (val) => {\n        console.log(val);\n      };\n      return {\n        activeNames,\n        handleChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const collapsevue_type_template_id_926c9cbc_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Accordion ");

const collapsevue_type_template_id_926c9cbc_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "In accordion mode, only one panel can be expanded at once", -1);

const collapsevue_type_template_id_926c9cbc_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Activate accordion mode using the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "accordion"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute.")])], -1);

const collapsevue_type_template_id_926c9cbc_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-collapse v-model=\"activeName\" accordion>\n  <el-collapse-item title=\"Consistency\" name=\"1\">\n    <div>\n      Consistent with real life: in line with the process and logic of real\n      life, and comply with languages and habits that the users are used to;\n    </div>\n    <div>\n      Consistent within interface: all elements should be consistent, such as:\n      design style, icons and texts, position of elements, etc.\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Feedback\" name=\"2\">\n    <div>\n      Operation feedback: enable the users to clearly perceive their operations\n      by style updates and interactive effects;\n    </div>\n    <div>\n      Visual feedback: reflect current state by updating or rearranging elements\n      of the page.\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Efficiency\" name=\"3\">\n    <div>\n      Simplify the process: keep operating process simple and intuitive;\n    </div>\n    <div>\n      Definite and clear: enunciate your intentions clearly so that the users\n      can quickly understand and make decisions;\n    </div>\n    <div>\n      Easy to identify: the interface should be straightforward, which helps the\n      users to identify and frees them from memorizing and recalling.\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Controllability\" name=\"4\">\n    <div>\n      Decision making: giving advices about operations is acceptable, but do not\n      make decisions for the users;\n    </div>\n    <div>\n      Controlled consequences: users should be granted the freedom to operate,\n      including canceling, aborting or terminating current operation.\n    </div>\n  </el-collapse-item>\n</el-collapse>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: '1',\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const activeName = ref('1');\n\n      return {\n        activeName,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const collapsevue_type_template_id_926c9cbc_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Custom title ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Besides using the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute, you can customize panel title with named slots, which makes adding custom content, e.g. icons, possible.")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-collapse accordion>\n  <el-collapse-item name=\"1\">\n    <template #title>\n      Consistency<i class=\"header-icon el-icon-info\"></i>\n    </template>\n    <div>\n      Consistent with real life: in line with the process and logic of real\n      life, and comply with languages and habits that the users are used to;\n    </div>\n    <div>\n      Consistent within interface: all elements should be consistent, such as:\n      design style, icons and texts, position of elements, etc.\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Feedback\" name=\"2\">\n    <div>\n      Operation feedback: enable the users to clearly perceive their operations\n      by style updates and interactive effects;\n    </div>\n    <div>\n      Visual feedback: reflect current state by updating or rearranging elements\n      of the page.\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Efficiency\" name=\"3\">\n    <div>\n      Simplify the process: keep operating process simple and intuitive;\n    </div>\n    <div>\n      Definite and clear: enunciate your intentions clearly so that the users\n      can quickly understand and make decisions;\n    </div>\n    <div>\n      Easy to identify: the interface should be straightforward, which helps the\n      users to identify and frees them from memorizing and recalling.\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Controllability\" name=\"4\">\n    <div>\n      Decision making: giving advices about operations is acceptable, but do not\n      make decisions for the users;\n    </div>\n    <div>\n      Controlled consequences: users should be granted the freedom to operate,\n      including canceling, aborting or terminating current operation.\n    </div>\n  </el-collapse-item>\n</el-collapse>\n")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Collapse Attributes ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>currently active panel</td><td>string (accordion mode) / array (non-accordion mode)</td><td>—</td><td>—</td></tr><tr><td>accordion</td><td>whether to activate accordion mode</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Collapse Events ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Event Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "triggers when active panels change"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "(activeNames: array (non-accordion mode) / string (accordion mode))")])])], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Collapse Item Attributes ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>unique identification of the panel</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>title</td><td>title of the panel</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>disable the collapse item</td><td>boolean</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Collapse Item Slot ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "content of Collapse Item")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "content of Collapse Item title")])])], -1);

function collapsevue_type_template_id_926c9cbc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", collapsevue_type_template_id_926c9cbc_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "collapse",
    content: "Collapse",
    href: "#collapse",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_926c9cbc_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#collapse"
    })]),
    _: 1
  }), collapsevue_type_template_id_926c9cbc_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_926c9cbc_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), collapsevue_type_template_id_926c9cbc_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_926c9cbc_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "accordion",
    content: "Accordion",
    href: "#accordion",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_926c9cbc_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#accordion"
    })]),
    _: 1
  }), collapsevue_type_template_id_926c9cbc_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_926c9cbc_hoisted_10]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_926c9cbc_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "custom-title",
    content: "Custom title",
    href: "#custom-title",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_926c9cbc_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#custom-title"
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
// CONCATENATED MODULE: ./website/docs/en-US/collapse.md?vue&type=template&id=926c9cbc

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/collapse.md?vue&type=script&lang=ts

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

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", null, " Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ", -1);

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", null, " Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. ", -1);

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", null, " Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects; ", -1);

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("div", null, " Visual feedback: reflect current state by updating or rearranging elements of the page. ", -1);

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("div", null, " Simplify the process: keep operating process simple and intuitive; ", -1);

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("div", null, " Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions; ", -1);

      const _hoisted_7 = /*#__PURE__*/_createElementVNode("div", null, " Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling. ", -1);

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("div", null, " Decision making: giving advices about operations is acceptable, but do not make decisions for the users; ", -1);

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("div", null, " Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation. ", -1);

      function render(_ctx, _cache) {
        const _component_el_collapse_item = _resolveComponent("el-collapse-item");

        const _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_collapse, {
          modelValue: _ctx.activeNames,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.activeNames = $event),
          onChange: _ctx.handleChange
        }, {
          default: _withCtx(() => [_createVNode(_component_el_collapse_item, {
            title: "Consistency",
            name: "1"
          }, {
            default: _withCtx(() => [_hoisted_1, _hoisted_2]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "Feedback",
            name: "2"
          }, {
            default: _withCtx(() => [_hoisted_3, _hoisted_4]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "Efficiency",
            name: "3"
          }, {
            default: _withCtx(() => [_hoisted_5, _hoisted_6, _hoisted_7]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "Controllability",
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

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", null, " Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ", -1);

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", null, " Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. ", -1);

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", null, " Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects; ", -1);

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("div", null, " Visual feedback: reflect current state by updating or rearranging elements of the page. ", -1);

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("div", null, " Simplify the process: keep operating process simple and intuitive; ", -1);

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("div", null, " Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions; ", -1);

      const _hoisted_7 = /*#__PURE__*/_createElementVNode("div", null, " Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling. ", -1);

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("div", null, " Decision making: giving advices about operations is acceptable, but do not make decisions for the users; ", -1);

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("div", null, " Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation. ", -1);

      function render(_ctx, _cache) {
        const _component_el_collapse_item = _resolveComponent("el-collapse-item");

        const _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_collapse, {
          modelValue: _ctx.activeName,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.activeName = $event),
          accordion: ""
        }, {
          default: _withCtx(() => [_createVNode(_component_el_collapse_item, {
            title: "Consistency",
            name: "1"
          }, {
            default: _withCtx(() => [_hoisted_1, _hoisted_2]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "Feedback",
            name: "2"
          }, {
            default: _withCtx(() => [_hoisted_3, _hoisted_4]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "Efficiency",
            name: "3"
          }, {
            default: _withCtx(() => [_hoisted_5, _hoisted_6, _hoisted_7]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "Controllability",
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" Consistency");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("i", {
        class: "header-icon el-icon-info"
      }, null, -1);

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", null, " Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ", -1);

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("div", null, " Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. ", -1);

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("div", null, " Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects; ", -1);

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("div", null, " Visual feedback: reflect current state by updating or rearranging elements of the page. ", -1);

      const _hoisted_7 = /*#__PURE__*/_createElementVNode("div", null, " Simplify the process: keep operating process simple and intuitive; ", -1);

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("div", null, " Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions; ", -1);

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("div", null, " Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling. ", -1);

      const _hoisted_10 = /*#__PURE__*/_createElementVNode("div", null, " Decision making: giving advices about operations is acceptable, but do not make decisions for the users; ", -1);

      const _hoisted_11 = /*#__PURE__*/_createElementVNode("div", null, " Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation. ", -1);

      function render(_ctx, _cache) {
        const _component_el_collapse_item = _resolveComponent("el-collapse-item");

        const _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_collapse, {
          accordion: ""
        }, {
          default: _withCtx(() => [_createVNode(_component_el_collapse_item, {
            name: "1"
          }, {
            title: _withCtx(() => [_hoisted_1, _hoisted_2]),
            default: _withCtx(() => [_hoisted_3, _hoisted_4]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "Feedback",
            name: "2"
          }, {
            default: _withCtx(() => [_hoisted_5, _hoisted_6]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "Efficiency",
            name: "3"
          }, {
            default: _withCtx(() => [_hoisted_7, _hoisted_8, _hoisted_9]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "Controllability",
            name: "4"
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
// CONCATENATED MODULE: ./website/docs/en-US/collapse.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/collapse.md



collapsevue_type_script_lang_ts.render = collapsevue_type_template_id_926c9cbc_render

/* harmony default export */ var collapse = __webpack_exports__["default"] = (collapsevue_type_script_lang_ts);

/***/ })

}]);