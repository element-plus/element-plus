(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/transfer.md?vue&type=template&id=71de1548

const transfervue_type_template_id_71de1548_hoisted_1 = {
  class: "content element-doc"
};

const transfervue_type_template_id_71de1548_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Transfer ");

const transfervue_type_template_id_71de1548_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Customizable ");

const transfervue_type_template_id_71de1548_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "You can customize list titles, button texts, render function for data items, checking status texts in list footer and list footer contents.", -1);

const transfervue_type_template_id_71de1548_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "titles"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "button-texts"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "format"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to respectively customize list titles, button texts, render function for data items, checking status texts in list header. Plus, you can also use scoped slot to customize data items. For list footer contents, two named slots are provided: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "left-footer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "right-footer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Plus, if you want some items initially checked, you can use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "left-default-checked"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "right-default-checked"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Finally, this example demonstrate the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" event. Note that this demo can't run in jsfiddle because it doesn't support JSX syntax. In a real project, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" will work if relevant dependencies are correctly configured.")])], -1);

const transfervue_type_template_id_71de1548_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <p style=\"text-align: center; margin: 0 0 20px\">\n    Customize data items using render-content\n  </p>\n  <div style=\"text-align: center\">\n    <el-transfer\n      v-model=\"leftValue\"\n      style=\"text-align: left; display: inline-block\"\n      filterable\n      :left-default-checked=\"[2, 3]\"\n      :right-default-checked=\"[1]\"\n      :render-content=\"renderFunc\"\n      :titles=\"['Source', 'Target']\"\n      :button-texts=\"['To left', 'To right']\"\n      :format=\"{\n        noChecked: '${total}',\n        hasChecked: '${checked}/${total}'\n      }\"\n      :data=\"data\"\n      @change=\"handleChange\"\n    >\n      <template #left-footer>\n        <el-button class=\"transfer-footer\" size=\"small\">Operation</el-button>\n      </template>\n      <template #right-footer>\n        <el-button class=\"transfer-footer\" size=\"small\">Operation</el-button>\n      </template>\n    </el-transfer>\n    <p style=\"text-align: center; margin: 50px 0 20px\">\n      Customize data items using scoped slot\n    </p>\n    <div style=\"text-align: center\">\n      <el-transfer\n        v-model=\"rightValue\"\n        style=\"text-align: left; display: inline-block\"\n        filterable\n        :left-default-checked=\"[2, 3]\"\n        :right-default-checked=\"[1]\"\n        :titles=\"['Source', 'Target']\"\n        :button-texts=\"['To left', 'To right']\"\n        :format=\"{\n          noChecked: '${total}',\n          hasChecked: '${checked}/${total}'\n        }\"\n        :data=\"data\"\n        @change=\"handleChange\"\n      >\n        <template #default=\"{ option }\">\n          <span>{{ option.key }} - {{ option.label }}</span>\n        </template>\n        <template #left-footer>\n          <el-button class=\"transfer-footer\" size=\"small\">Operation</el-button>\n        </template>\n        <template #right-footer>\n          <el-button class=\"transfer-footer\" size=\"small\">Operation</el-button>\n        </template>\n      </el-transfer>\n    </div>\n  </div>\n</template>\n\n<style>\n  .transfer-footer {\n    margin-left: 20px;\n    padding: 6px 5px;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      const generateData = (_) => {\n        const data = []\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            key: i,\n            label: `Option ${i}`,\n            disabled: i % 4 === 0,\n          })\n        }\n        return data\n      }\n      return {\n        data: generateData(),\n        rightValue: [1],\n        leftValue: [1],\n        renderFunc(h, option) {\n          return h('span', null, option.key, ' - ', option.label)\n        },\n      }\n    },\n\n    methods: {\n      handleChange(value, direction, movedKeys) {\n        console.log(value, direction, movedKeys)\n      },\n    },\n  }\n</script>\n")], -1);

const transfervue_type_template_id_71de1548_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Prop aliases ");

const transfervue_type_template_id_71de1548_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("By default, Transfer looks for "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" in a data item. If your data items have different key names, you can use the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "props"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute to define aliases.")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("The data items in this example do not have "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("s or "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("s, instead they have "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("s and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "desc"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("s. So you need to set aliases for "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-transfer\n    v-model=\"value\"\n    :props=\"{\n      key: 'value',\n      label: 'desc'\n    }\"\n    :data=\"data\"\n  >\n  </el-transfer>\n</template>\n\n<script>\n  export default {\n    data() {\n      const generateData = (_) => {\n        const data = []\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            value: i,\n            desc: `Option ${i}`,\n            disabled: i % 4 === 0,\n          })\n        }\n        return data\n      }\n      return {\n        data: generateData(),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>binding value</td><td>array</td><td>—</td><td>—</td></tr><tr><td>data</td><td>data source</td><td>array[{ key, label, disabled }]</td><td>—</td><td>[ ]</td></tr><tr><td>filterable</td><td>whether Transfer is filterable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filter-placeholder</td><td>placeholder for the filter input</td><td>string</td><td>—</td><td>Enter keyword</td></tr><tr><td>filter-method</td><td>custom filter method</td><td>function</td><td>—</td><td>—</td></tr><tr><td>target-order</td><td>order strategy for elements in the target list. If set to <code>original</code>, the elements will keep the same order as the data source. If set to <code>push</code>, the newly added elements will be pushed to the bottom. If set to <code>unshift</code>, the newly added elements will be inserted on the top</td><td>string</td><td>original / push / unshift</td><td>original</td></tr><tr><td>titles</td><td>custom list titles</td><td>array</td><td>—</td><td>[&#39;List 1&#39;, &#39;List 2&#39;]</td></tr><tr><td>button-texts</td><td>custom button texts</td><td>array</td><td>—</td><td>[ ]</td></tr><tr><td>render-content</td><td>custom render function for data items</td><td>function(h, option)</td><td>—</td><td>—</td></tr><tr><td>format</td><td>texts for checking status in list header</td><td>object{noChecked, hasChecked}</td><td>—</td><td>{ noChecked: &#39;${checked}/${total}&#39;, hasChecked: &#39;${checked}/${total}&#39; }</td></tr><tr><td>props</td><td>prop aliases for data source</td><td>object{key, label, disabled}</td><td>—</td><td>—</td></tr><tr><td>left-default-checked</td><td>key array of initially checked data items of the left list</td><td>array</td><td>—</td><td>[ ]</td></tr><tr><td>right-default-checked</td><td>key array of initially checked data items of the right list</td><td>array</td><td>—</td><td>[ ]</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slots ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "left-footer"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "content of left list footer")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "right-footer"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "content of right list footer")])])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Scoped Slot ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Custom content for data items. The scope parameter is { option }")])])], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Methods ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Method"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "clearQuery"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "clear the filter keyword of a certain panel"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "'left' / 'right'")])])], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Events ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when data items change in the right list</td><td>key array of current data items in the right list, transfer direction (left or right), moved item keys</td></tr><tr><td>left-check-change</td><td>triggers when end user changes the checked state of any data item in the left list</td><td>key array of currently checked items, key array of items whose checked state have changed</td></tr><tr><td>right-check-change</td><td>triggers when end user changes the checked state of any data item in the right list</td><td>key array of currently checked items, key array of items whose checked state have changed</td></tr></tbody></table>", 1);

function transfervue_type_template_id_71de1548_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", transfervue_type_template_id_71de1548_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "transfer",
    content: "Transfer",
    href: "#transfer",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [transfervue_type_template_id_71de1548_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#transfer"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "customizable",
    content: "Customizable",
    href: "#customizable",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [transfervue_type_template_id_71de1548_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#customizable"
    })]),
    _: 1
  }), transfervue_type_template_id_71de1548_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [transfervue_type_template_id_71de1548_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [transfervue_type_template_id_71de1548_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "prop-aliases",
    content: "Prop aliases",
    href: "#prop-aliases",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [transfervue_type_template_id_71de1548_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#prop-aliases"
    })]),
    _: 1
  }), transfervue_type_template_id_71de1548_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slots",
    content: "Slots",
    href: "#slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slots"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "scoped-slot",
    content: "Scoped Slot",
    href: "#scoped-slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#scoped-slot"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "methods",
    content: "Methods",
    href: "#methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methods"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "events",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/transfer.md?vue&type=template&id=71de1548

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/transfer.md?vue&type=script&lang=ts

/* harmony default export */ var transfervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        toDisplayString: _toDisplayString,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("p", {
        style: {
          "text-align": "center",
          "margin": "0 0 20px"
        }
      }, " Customize data items using render-content ", -1);

      const _hoisted_2 = {
        style: {
          "text-align": "center"
        }
      };

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Operation");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Operation");

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("p", {
        style: {
          "text-align": "center",
          "margin": "50px 0 20px"
        }
      }, " Customize data items using scoped slot ", -1);

      const _hoisted_6 = {
        style: {
          "text-align": "center"
        }
      };

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("Operation");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("Operation");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createElementBlock("div", null, [_hoisted_1, _createElementVNode("div", _hoisted_2, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.leftValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.leftValue = $event),
          style: {
            "text-align": "left",
            "display": "inline-block"
          },
          filterable: "",
          "left-default-checked": [2, 3],
          "right-default-checked": [1],
          "render-content": _ctx.renderFunc,
          titles: ['Source', 'Target'],
          "button-texts": ['To left', 'To right'],
          format: {
            noChecked: '${total}',
            hasChecked: '${checked}/${total}'
          },
          data: _ctx.data,
          onChange: _ctx.handleChange
        }, {
          "left-footer": _withCtx(() => [_createVNode(_component_el_button, {
            class: "transfer-footer",
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          })]),
          "right-footer": _withCtx(() => [_createVNode(_component_el_button, {
            class: "transfer-footer",
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue", "render-content", "data", "onChange"]), _hoisted_5, _createElementVNode("div", _hoisted_6, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.rightValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.rightValue = $event),
          style: {
            "text-align": "left",
            "display": "inline-block"
          },
          filterable: "",
          "left-default-checked": [2, 3],
          "right-default-checked": [1],
          titles: ['Source', 'Target'],
          "button-texts": ['To left', 'To right'],
          format: {
            noChecked: '${total}',
            hasChecked: '${checked}/${total}'
          },
          data: _ctx.data,
          onChange: _ctx.handleChange
        }, {
          default: _withCtx(({
            option
          }) => [_createElementVNode("span", null, _toDisplayString(option.key) + " - " + _toDisplayString(option.label), 1)]),
          "left-footer": _withCtx(() => [_createVNode(_component_el_button, {
            class: "transfer-footer",
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_7]),
            _: 1
          })]),
          "right-footer": _withCtx(() => [_createVNode(_component_el_button, {
            class: "transfer-footer",
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_8]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue", "data", "onChange"])])])]);
      }

      const democomponentExport = {
        data() {
          const generateData = _ => {
            const data = [];

            for (let i = 1; i <= 15; i++) {
              data.push({
                key: i,
                label: `Option ${i}`,
                disabled: i % 4 === 0
              });
            }

            return data;
          };

          return {
            data: generateData(),
            rightValue: [1],
            leftValue: [1],

            renderFunc(h, option) {
              return h('span', null, option.key, ' - ', option.label);
            }

          };
        },

        methods: {
          handleChange(value, direction, movedKeys) {
            console.log(value, direction, movedKeys);
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_transfer = _resolveComponent("el-transfer");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_transfer, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          props: {
            key: 'value',
            label: 'desc'
          },
          data: _ctx.data
        }, null, 8, ["modelValue", "data"])]);
      }

      const democomponentExport = {
        data() {
          const generateData = _ => {
            const data = [];

            for (let i = 1; i <= 15; i++) {
              data.push({
                value: i,
                desc: `Option ${i}`,
                disabled: i % 4 === 0
              });
            }

            return data;
          };

          return {
            data: generateData(),
            value: []
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/transfer.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/transfer.md



transfervue_type_script_lang_ts.render = transfervue_type_template_id_71de1548_render

/* harmony default export */ var transfer = __webpack_exports__["default"] = (transfervue_type_script_lang_ts);

/***/ })

}]);