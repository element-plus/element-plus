(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/tag.md?vue&type=template&id=22be305d

var tagvue_type_template_id_22be305d_hoisted_1 = {
  class: "content element-doc"
};

var tagvue_type_template_id_22be305d_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "tag"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tag"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tag")], -1);

var tagvue_type_template_id_22be305d_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Used for marking and selection.", -1);

var tagvue_type_template_id_22be305d_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Basic usage")], -1);

var tagvue_type_template_id_22be305d_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute to define Tag's type. In addition, the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute can be used to set the background color of the Tag.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tag>Tag 1</el-tag>\n<el-tag type=\"success\">Tag 2</el-tag>\n<el-tag type=\"info\">Tag 3</el-tag>\n<el-tag type=\"warning\">Tag 4</el-tag>\n<el-tag type=\"danger\">Tag 5</el-tag>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "removable-tag"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#removable-tag"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Removable Tag")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "closable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute can be used to define a removable tag. It accepts a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". By default the removal of Tag has a fading animation. If you don't want to use it, you can set the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disable-transitions"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute, which accepts a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "close"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" event triggers when Tag is removed.")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tag\n  v-for=\"tag in tags\"\n  :key=\"tag.name\"\n  closable\n  :type=\"tag.type\">\n  {{tag.name}}\n</el-tag>\n\n<script>\n  export default {\n    data() {\n      return {\n        tags: [\n          { name: 'Tag 1', type: '' },\n          { name: 'Tag 2', type: 'success' },\n          { name: 'Tag 3', type: 'info' },\n          { name: 'Tag 4', type: 'warning' },\n          { name: 'Tag 5', type: 'danger' }\n        ]\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "edit-dynamically"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#edit-dynamically"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Edit Dynamically")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("You can use the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "close"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" event to add and remove tag dynamically.")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tag\n  :key=\"tag\"\n  v-for=\"tag in dynamicTags\"\n  closable\n  :disable-transitions=\"false\"\n  @close=\"handleClose(tag)\">\n  {{tag}}\n</el-tag>\n<el-input\n  class=\"input-new-tag\"\n  v-if=\"inputVisible\"\n  v-model=\"inputValue\"\n  ref=\"saveTagInput\"\n  size=\"mini\"\n  @keyup.enter=\"handleInputConfirm\"\n  @blur=\"handleInputConfirm\"\n>\n</el-input>\n<el-button v-else class=\"button-new-tag\" size=\"small\" @click=\"showInput\">+ New Tag</el-button>\n\n<style>\n  .el-tag + .el-tag {\n    margin-left: 10px;\n  }\n  .button-new-tag {\n    margin-left: 10px;\n    height: 32px;\n    line-height: 30px;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n  .input-new-tag {\n    width: 90px;\n    margin-left: 10px;\n    vertical-align: bottom;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],\n        inputVisible: false,\n        inputValue: ''\n      };\n    },\n    methods: {\n      handleClose(tag) {\n        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);\n      },\n\n      showInput() {\n        this.inputVisible = true;\n        this.$nextTick(_ => {\n          this.$refs.saveTagInput.$refs.input.focus();\n        });\n      },\n\n      handleInputConfirm() {\n        let inputValue = this.inputValue;\n        if (inputValue) {\n          this.dynamicTags.push(inputValue);\n        }\n        this.inputVisible = false;\n        this.inputValue = '';\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "sizes"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#sizes"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Sizes")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Besides default size, Tag component provides three additional sizes for you to choose among different scenarios.", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Use attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to set additional sizes with "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "medium"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" or "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "mini"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tag>Default</el-tag>\n<el-tag size=\"medium\">Medium</el-tag>\n<el-tag size=\"small\">Small</el-tag>\n<el-tag size=\"mini\">Mini</el-tag>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "theme"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#theme"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Theme")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Tag provide three different themes: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "light"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "plain")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Using "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "effect"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to change, default is "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "light")])], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"tag-group\">\n  <span class=\"tag-group__title\">Dark</span>\n  <el-tag\n    v-for=\"item in items\"\n    :key=\"item.label\"\n    :type=\"item.type\"\n    effect=\"dark\">\n    {{ item.label }}\n  </el-tag>\n</div>\n<div class=\"tag-group\">\n  <span class=\"tag-group__title\">Plain</span>\n  <el-tag\n    v-for=\"item in items\"\n    :key=\"item.label\"\n    :type=\"item.type\"\n    effect=\"plain\">\n    {{ item.label }}\n  </el-tag>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        items: [\n          { type: '', label: 'Tag 1' },\n          { type: 'success', label: 'Tag 2' },\n          { type: 'info', label: 'Tag 3' },\n          { type: 'danger', label: 'Tag 4' },\n          { type: 'warning', label: 'Tag 5' }\n        ]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "checkable-tag"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#checkable-tag"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Checkable tag")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Sometimes because of the business needs, we might need checkbox like tag, but "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("strong", null, "button like checkbox"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" cannot meet our needs, here comes "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "check-tag")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "basic check-tag usage, the API is rather simple.")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "\n<div>\n  <el-check-tag checked style=\"margin-right: 8px;\">Checked</el-check-tag>\n  <el-check-tag @change=\"onChange\" :checked=\"checked\">Toggle me</el-check-tag>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        checked: false,\n      }\n    },\n    methods: {\n      onChange(checked) {\n        this.checked = checked;\n      }\n    }\n  }\n</script>\n\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>component type</td><td>string</td><td>success/info/warning/danger</td><td>—</td></tr><tr><td>closable</td><td>whether Tag can be removed</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disable-transitions</td><td>whether to disable animations</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>hit</td><td>whether Tag has a highlighted border</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>color</td><td>background color of the Tag</td><td>string</td><td>—</td><td>—</td></tr><tr><td>size</td><td>tag size</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>effect</td><td>component theme</td><td>string</td><td>dark / light / plain</td><td>light</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>click</td><td>triggers when Tag is clicked</td><td>—</td></tr><tr><td>close</td><td>triggers when Tag is removed</td><td>—</td></tr></tbody></table><h3 id=\"checktag-attributes\"><a class=\"header-anchor\" href=\"#checktag-attributes\">¶</a> CheckTag Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>checked</td><td>is checked</td><td>boolean</td><td>true/false</td><td>—</td></tr></tbody></table><h3 id=\"checktag-events\"><a class=\"header-anchor\" href=\"#checktag-events\">¶</a> CheckTag Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when Check Tag is clicked</td><td>checked</td></tr></tbody></table>", 8);

function tagvue_type_template_id_22be305d_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", tagvue_type_template_id_22be305d_hoisted_1, [tagvue_type_template_id_22be305d_hoisted_2, tagvue_type_template_id_22be305d_hoisted_3, tagvue_type_template_id_22be305d_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [tagvue_type_template_id_22be305d_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
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
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_21, _hoisted_22, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/tag.md?vue&type=template&id=22be305d

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/tag.md?vue&type=script&lang=ts


/* harmony default export */ var tagvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Tag 1");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Tag 2");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Tag 3");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Tag 4");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Tag 5");

      function render(_ctx, _cache) {
        var _component_el_tag = _resolveComponent("el-tag");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tag, null, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_tag, {
          type: "success"
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_el_tag, {
          type: "info"
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }), _createVNode(_component_el_tag, {
          type: "warning"
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }), _createVNode(_component_el_tag, {
          type: "danger"
        }, {
          default: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_tag = _resolveComponent("el-tag");

        return _openBlock(), _createBlock("div", null, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.tags, function (tag) {
          return _openBlock(), _createBlock(_component_el_tag, {
            key: tag.name,
            closable: "",
            type: tag.type
          }, {
            default: _withCtx(function () {
              return [_createTextVNode(_toDisplayString(tag.name), 1)];
            }),
            _: 2
          }, 1032, ["type"]);
        }), 128))]);
      }

      var democomponentExport = {
        data: function data() {
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
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _withKeys = vue_esm_browser["gb" /* withKeys */],
          _createCommentVNode = vue_esm_browser["k" /* createCommentVNode */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("+ New Tag");

      function render(_ctx, _cache) {
        var _component_el_tag = _resolveComponent("el-tag");

        var _component_el_input = _resolveComponent("el-input");

        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.dynamicTags, function (tag) {
          return _openBlock(), _createBlock(_component_el_tag, {
            key: tag,
            closable: "",
            "disable-transitions": false,
            onClose: function onClose($event) {
              return _ctx.handleClose(tag);
            }
          }, {
            default: _withCtx(function () {
              return [_createTextVNode(_toDisplayString(tag), 1)];
            }),
            _: 2
          }, 1032, ["onClose"]);
        }), 128)), _ctx.inputVisible ? (_openBlock(), _createBlock(_component_el_input, {
          key: 0,
          class: "input-new-tag",
          modelValue: _ctx.inputValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.inputValue = $event;
          }),
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
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]))]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
            inputVisible: false,
            inputValue: ''
          };
        },
        methods: {
          handleClose: function handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
          },
          showInput: function showInput() {
            var _this = this;

            this.inputVisible = true;
            this.$nextTick(function (_) {
              _this.$refs.saveTagInput.$refs.input.focus();
            });
          },
          handleInputConfirm: function handleInputConfirm() {
            var inputValue = this.inputValue;

            if (inputValue) {
              this.dynamicTags.push(inputValue);
            }

            this.inputVisible = false;
            this.inputValue = '';
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Default");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Medium");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Small");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Mini");

      function render(_ctx, _cache) {
        var _component_el_tag = _resolveComponent("el-tag");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tag, null, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_tag, {
          size: "medium"
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_el_tag, {
          size: "small"
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }), _createVNode(_component_el_tag, {
          size: "mini"
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */];
      var _hoisted_1 = {
        class: "tag-group"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "tag-group__title"
      }, "Dark", -1);

      var _hoisted_3 = {
        class: "tag-group"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "tag-group__title"
      }, "Plain", -1);

      function render(_ctx, _cache) {
        var _component_el_tag = _resolveComponent("el-tag");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.items, function (item) {
          return _openBlock(), _createBlock(_component_el_tag, {
            key: item.label,
            type: item.type,
            effect: "dark"
          }, {
            default: _withCtx(function () {
              return [_createTextVNode(_toDisplayString(item.label), 1)];
            }),
            _: 2
          }, 1032, ["type"]);
        }), 128))]), _createVNode("div", _hoisted_3, [_hoisted_4, (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.items, function (item) {
          return _openBlock(), _createBlock(_component_el_tag, {
            key: item.label,
            type: item.type,
            effect: "plain"
          }, {
            default: _withCtx(function () {
              return [_createTextVNode(_toDisplayString(item.label), 1)];
            }),
            _: 2
          }, 1032, ["type"]);
        }), 128))])]);
      }

      var democomponentExport = {
        data: function data() {
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Checked");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Toggle me");

      function render(_ctx, _cache) {
        var _component_el_check_tag = _resolveComponent("el-check-tag");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode(_component_el_check_tag, {
          checked: "",
          style: {
            "margin-right": "8px"
          }
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_check_tag, {
          onChange: _ctx.onChange,
          checked: _ctx.checked
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onChange", "checked"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            checked: false
          };
        },
        methods: {
          onChange: function onChange(checked) {
            this.checked = checked;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/tag.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/tag.md



tagvue_type_script_lang_ts.render = tagvue_type_template_id_22be305d_render

/* harmony default export */ var tag = __webpack_exports__["default"] = (tagvue_type_script_lang_ts);

/***/ })

}]);