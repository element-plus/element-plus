(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/tag.md?vue&type=template&id=62a8a505

const tagvue_type_template_id_62a8a505_hoisted_1 = {
  class: "content element-doc"
};

const tagvue_type_template_id_62a8a505_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tag ");

const tagvue_type_template_id_62a8a505_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Used for marking and selection.", -1);

const tagvue_type_template_id_62a8a505_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic usage ");

const tagvue_type_template_id_62a8a505_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute to define Tag's type. In addition, the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "color"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute can be used to set the background color of the Tag.")])], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-tag>Tag 1</el-tag>\n  <el-tag type=\"success\">Tag 2</el-tag>\n  <el-tag type=\"info\">Tag 3</el-tag>\n  <el-tag type=\"warning\">Tag 4</el-tag>\n  <el-tag type=\"danger\">Tag 5</el-tag>\n</template>\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Removable Tag ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "closable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute can be used to define a removable tag. It accepts a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". By default the removal of Tag has a fading animation. If you don't want to use it, you can set the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disable-transitions"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute, which accepts a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "close"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" event triggers when Tag is removed.")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-tag v-for=\"tag in tags\" :key=\"tag.name\" closable :type=\"tag.type\">\n    {{tag.name}}\n  </el-tag>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tags: [\n          { name: 'Tag 1', type: '' },\n          { name: 'Tag 2', type: 'success' },\n          { name: 'Tag 3', type: 'info' },\n          { name: 'Tag 4', type: 'warning' },\n          { name: 'Tag 5', type: 'danger' },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Edit Dynamically ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("You can use the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "close"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" event to add and remove tag dynamically.")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-tag\n    :key=\"tag\"\n    v-for=\"tag in dynamicTags\"\n    closable\n    :disable-transitions=\"false\"\n    @close=\"handleClose(tag)\"\n  >\n    {{tag}}\n  </el-tag>\n  <el-input\n    class=\"input-new-tag\"\n    v-if=\"inputVisible\"\n    v-model=\"inputValue\"\n    ref=\"saveTagInput\"\n    size=\"mini\"\n    @keyup.enter=\"handleInputConfirm\"\n    @blur=\"handleInputConfirm\"\n  >\n  </el-input>\n  <el-button v-else class=\"button-new-tag\" size=\"small\" @click=\"showInput\"\n    >+ New Tag</el-button\n  >\n</template>\n\n<style>\n  .el-tag + .el-tag {\n    margin-left: 10px;\n  }\n  .button-new-tag {\n    margin-left: 10px;\n    height: 32px;\n    line-height: 30px;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n  .input-new-tag {\n    width: 90px;\n    margin-left: 10px;\n    vertical-align: bottom;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],\n        inputVisible: false,\n        inputValue: '',\n      }\n    },\n    methods: {\n      handleClose(tag) {\n        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)\n      },\n\n      showInput() {\n        this.inputVisible = true\n        this.$nextTick((_) => {\n          this.$refs.saveTagInput.$refs.input.focus()\n        })\n      },\n\n      handleInputConfirm() {\n        let inputValue = this.inputValue\n        if (inputValue) {\n          this.dynamicTags.push(inputValue)\n        }\n        this.inputVisible = false\n        this.inputValue = ''\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Sizes ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Besides default size, Tag component provides three additional sizes for you to choose among different scenarios.", -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use attribute "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to set additional sizes with "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "medium"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" or "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "mini"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-tag>Default</el-tag>\n  <el-tag size=\"medium\">Medium</el-tag>\n  <el-tag size=\"small\">Small</el-tag>\n  <el-tag size=\"mini\">Mini</el-tag>\n</template>\n")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Theme ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tag provide three different themes: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "light"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "plain")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Using "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "effect"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to change, default is "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "light")])], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"tag-group\">\n    <span class=\"tag-group__title\">Dark</span>\n    <el-tag\n      v-for=\"item in items\"\n      :key=\"item.label\"\n      :type=\"item.type\"\n      effect=\"dark\"\n    >\n      {{ item.label }}\n    </el-tag>\n  </div>\n  <div class=\"tag-group\">\n    <span class=\"tag-group__title\">Plain</span>\n    <el-tag\n      v-for=\"item in items\"\n      :key=\"item.label\"\n      :type=\"item.type\"\n      effect=\"plain\"\n    >\n      {{ item.label }}\n    </el-tag>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        items: [\n          { type: '', label: 'Tag 1' },\n          { type: 'success', label: 'Tag 2' },\n          { type: 'info', label: 'Tag 3' },\n          { type: 'danger', label: 'Tag 4' },\n          { type: 'warning', label: 'Tag 5' },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkable tag ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Sometimes because of the business needs, we might need checkbox like tag, but "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "button like checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" cannot meet our needs, here comes "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "check-tag")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "basic check-tag usage, the API is rather simple.")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-space>\n    <el-check-tag checked>Checked</el-check-tag>\n    <el-check-tag @change=\"onChange\" :checked=\"checked\">Toggle me</el-check-tag>\n    <el-check-tag v-model:checked=\"checked\">via v-model</el-check-tag>\n  </el-space>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        checked: false,\n      }\n    },\n    methods: {\n      onChange(checked) {\n        this.checked = checked\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>component type</td><td>string</td><td>success/info/warning/danger</td><td>—</td></tr><tr><td>closable</td><td>whether Tag can be removed</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disable-transitions</td><td>whether to disable animations</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>hit</td><td>whether Tag has a highlighted border</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>color</td><td>background color of the Tag</td><td>string</td><td>—</td><td>—</td></tr><tr><td>size</td><td>tag size</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>effect</td><td>component theme</td><td>string</td><td>dark / light / plain</td><td>light</td></tr></tbody></table>", 1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Events ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>click</td><td>triggers when Tag is clicked</td><td>—</td></tr><tr><td>close</td><td>triggers when Tag is removed</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("CheckTag Attributes ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>v-model:checked / checked</td><td>is checked</td><td>boolean</td><td>true/false</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("CheckTag Events ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when Check Tag is clicked</td><td>checked</td></tr><tr><td>update:checked</td><td>triggers when Check Tag is clicked</td><td>checked</td></tr></tbody></table>", 1);

function tagvue_type_template_id_62a8a505_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_element_demo5 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo5");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", tagvue_type_template_id_62a8a505_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tag",
    content: "Tag",
    href: "#tag",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tagvue_type_template_id_62a8a505_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tag"
    })]),
    _: 1
  }), tagvue_type_template_id_62a8a505_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tagvue_type_template_id_62a8a505_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tagvue_type_template_id_62a8a505_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "removable-tag",
    content: "Removable Tag",
    href: "#removable-tag",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#removable-tag"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "edit-dynamically",
    content: "Edit Dynamically",
    href: "#edit-dynamically",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#edit-dynamically"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "sizes",
    content: "Sizes",
    href: "#sizes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sizes"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "theme",
    content: "Theme",
    href: "#theme",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#theme"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkable-tag",
    content: "Checkable tag",
    href: "#checkable-tag",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkable-tag"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
    })]),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "events",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checktag-attributes",
    content: "CheckTag Attributes",
    href: "#checktag-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checktag-attributes"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checktag-events",
    content: "CheckTag Events",
    href: "#checktag-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checktag-events"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/tag.md?vue&type=template&id=62a8a505

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/tag.md?vue&type=script&lang=ts

/* harmony default export */ var tagvue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Tag 1");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Tag 2");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Tag 3");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Tag 4");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Tag 5");

      function render(_ctx, _cache) {
        const _component_el_tag = _resolveComponent("el-tag");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tag, null, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_tag, {
          type: "success"
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }), _createVNode(_component_el_tag, {
          type: "info"
        }, {
          default: _withCtx(() => [_hoisted_3]),
          _: 1
        }), _createVNode(_component_el_tag, {
          type: "warning"
        }, {
          default: _withCtx(() => [_hoisted_4]),
          _: 1
        }), _createVNode(_component_el_tag, {
          type: "danger"
        }, {
          default: _withCtx(() => [_hoisted_5]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createBlock: _createBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_tag = _resolveComponent("el-tag");

        return _openBlock(), _createElementBlock("div", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.tags, tag => {
          return _openBlock(), _createBlock(_component_el_tag, {
            key: tag.name,
            closable: "",
            type: tag.type
          }, {
            default: _withCtx(() => [_createTextVNode(_toDisplayString(tag.name), 1)]),
            _: 2
          }, 1032, ["type"]);
        }), 128))]);
      }

      const democomponentExport = {
        data() {
          return {
            tags: [{
              name: 'Tag 1',
              type: ''
            }, {
              name: 'Tag 2',
              type: 'success'
            }, {
              name: 'Tag 3',
              type: 'info'
            }, {
              name: 'Tag 4',
              type: 'warning'
            }, {
              name: 'Tag 5',
              type: 'danger'
            }]
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createBlock: _createBlock,
        withKeys: _withKeys,
        createCommentVNode: _createCommentVNode
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("+ New Tag");

      function render(_ctx, _cache) {
        const _component_el_tag = _resolveComponent("el-tag");

        const _component_el_input = _resolveComponent("el-input");

        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.dynamicTags, tag => {
          return _openBlock(), _createBlock(_component_el_tag, {
            key: tag,
            closable: "",
            "disable-transitions": false,
            onClose: $event => _ctx.handleClose(tag)
          }, {
            default: _withCtx(() => [_createTextVNode(_toDisplayString(tag), 1)]),
            _: 2
          }, 1032, ["onClose"]);
        }), 128)), _ctx.inputVisible ? (_openBlock(), _createBlock(_component_el_input, {
          key: 0,
          class: "input-new-tag",
          modelValue: _ctx.inputValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.inputValue = $event),
          ref: "saveTagInput",
          size: "mini",
          onKeyup: _withKeys(_ctx.handleInputConfirm, ["enter"]),
          onBlur: _ctx.handleInputConfirm
        }, null, 8, ["modelValue", "onKeyup", "onBlur"])) : (_openBlock(), _createBlock(_component_el_button, {
          key: 1,
          class: "button-new-tag",
          size: "small",
          onClick: _ctx.showInput
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"]))]);
      }

      const democomponentExport = {
        data() {
          return {
            dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
            inputVisible: false,
            inputValue: ''
          };
        },

        methods: {
          handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
          },

          showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
              this.$refs.saveTagInput.$refs.input.focus();
            });
          },

          handleInputConfirm() {
            let inputValue = this.inputValue;

            if (inputValue) {
              this.dynamicTags.push(inputValue);
            }

            this.inputVisible = false;
            this.inputValue = '';
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Default");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Medium");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Small");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Mini");

      function render(_ctx, _cache) {
        const _component_el_tag = _resolveComponent("el-tag");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tag, null, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_tag, {
          size: "medium"
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }), _createVNode(_component_el_tag, {
          size: "small"
        }, {
          default: _withCtx(() => [_hoisted_3]),
          _: 1
        }), _createVNode(_component_el_tag, {
          size: "mini"
        }, {
          default: _withCtx(() => [_hoisted_4]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        createElementVNode: _createElementVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createBlock: _createBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "tag-group"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", {
        class: "tag-group__title"
      }, "Dark", -1);

      const _hoisted_3 = {
        class: "tag-group"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "tag-group__title"
      }, "Plain", -1);

      function render(_ctx, _cache) {
        const _component_el_tag = _resolveComponent("el-tag");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.items, item => {
          return _openBlock(), _createBlock(_component_el_tag, {
            key: item.label,
            type: item.type,
            effect: "dark"
          }, {
            default: _withCtx(() => [_createTextVNode(_toDisplayString(item.label), 1)]),
            _: 2
          }, 1032, ["type"]);
        }), 128))]), _createElementVNode("div", _hoisted_3, [_hoisted_4, (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.items, item => {
          return _openBlock(), _createBlock(_component_el_tag, {
            key: item.label,
            type: item.type,
            effect: "plain"
          }, {
            default: _withCtx(() => [_createTextVNode(_toDisplayString(item.label), 1)]),
            _: 2
          }, 1032, ["type"]);
        }), 128))])]);
      }

      const democomponentExport = {
        data() {
          return {
            items: [{
              type: '',
              label: 'Tag 1'
            }, {
              type: 'success',
              label: 'Tag 2'
            }, {
              type: 'info',
              label: 'Tag 3'
            }, {
              type: 'danger',
              label: 'Tag 4'
            }, {
              type: 'warning',
              label: 'Tag 5'
            }]
          };
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Checked");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Toggle me");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("via v-model");

      function render(_ctx, _cache) {
        const _component_el_check_tag = _resolveComponent("el-check-tag");

        const _component_el_space = _resolveComponent("el-space");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_space, null, {
          default: _withCtx(() => [_createVNode(_component_el_check_tag, {
            checked: ""
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_check_tag, {
            onChange: _ctx.onChange,
            checked: _ctx.checked
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }, 8, ["onChange", "checked"]), _createVNode(_component_el_check_tag, {
            checked: _ctx.checked,
            "onUpdate:checked": _cache[0] || (_cache[0] = $event => _ctx.checked = $event)
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }, 8, ["checked"])]),
          _: 1
        })]);
      }

      const democomponentExport = {
        data() {
          return {
            checked: false
          };
        },

        methods: {
          onChange(checked) {
            this.checked = checked;
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
// CONCATENATED MODULE: ./website/docs/en-US/tag.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/tag.md



tagvue_type_script_lang_ts.render = tagvue_type_template_id_62a8a505_render

/* harmony default export */ var tag = __webpack_exports__["default"] = (tagvue_type_script_lang_ts);

/***/ })

}]);