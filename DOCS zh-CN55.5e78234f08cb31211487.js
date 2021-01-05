(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[247],{

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/tag.md?vue&type=template&id=6bb17afc

var tagvue_type_template_id_6bb17afc_hoisted_1 = {
  class: "content element-doc"
};

var tagvue_type_template_id_6bb17afc_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "tag-biao-qian"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tag-biao-qian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tag 标签")], -1);

var tagvue_type_template_id_6bb17afc_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "用于标记和选择。", -1);

var tagvue_type_template_id_6bb17afc_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var tagvue_type_template_id_6bb17afc_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("由"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性来选择tag的类型，也可以通过"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性来自定义背景色。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tag>标签一</el-tag>\n<el-tag type=\"success\">标签二</el-tag>\n<el-tag type=\"info\">标签三</el-tag>\n<el-tag type=\"warning\">标签四</el-tag>\n<el-tag type=\"danger\">标签五</el-tag>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ke-yi-chu-biao-qian"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ke-yi-chu-biao-qian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 可移除标签")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "closable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disable-transitions"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性，它接受一个"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，true 为关闭。")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tag\n  v-for=\"tag in tags\"\n  :key=\"tag.name\"\n  closable\n  :type=\"tag.type\">\n  {{tag.name}}\n</el-tag>\n\n<script>\n  export default {\n    data() {\n      return {\n        tags: [\n          { name: '标签一', type: '' },\n          { name: '标签二', type: 'success' },\n          { name: '标签三', type: 'info' },\n          { name: '标签四', type: 'warning' },\n          { name: '标签五', type: 'danger' }\n        ]\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "dong-tai-bian-ji-biao-qian"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dong-tai-bian-ji-biao-qian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 动态编辑标签")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("动态编辑标签可以通过点击标签关闭按钮后触发的 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "close"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 事件来实现")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tag\n  :key=\"tag\"\n  v-for=\"tag in dynamicTags\"\n  closable\n  :disable-transitions=\"false\"\n  @close=\"handleClose(tag)\">\n  {{tag}}\n</el-tag>\n<el-input\n  class=\"input-new-tag\"\n  v-if=\"inputVisible\"\n  v-model=\"inputValue\"\n  ref=\"saveTagInput\"\n  size=\"small\"\n  @keyup.enter.native=\"handleInputConfirm\"\n  @blur=\"handleInputConfirm\"\n>\n</el-input>\n<el-button v-else class=\"button-new-tag\" size=\"small\" @click=\"showInput\">+ New Tag</el-button>\n\n<style>\n  .el-tag + .el-tag {\n    margin-left: 10px;\n  }\n  .button-new-tag {\n    margin-left: 10px;\n    height: 32px;\n    line-height: 30px;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n  .input-new-tag {\n    width: 90px;\n    margin-left: 10px;\n    vertical-align: bottom;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        dynamicTags: ['标签一', '标签二', '标签三'],\n        inputVisible: false,\n        inputValue: ''\n      };\n    },\n    methods: {\n      handleClose(tag) {\n        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);\n      },\n\n      showInput() {\n        this.inputVisible = true;\n        this.$nextTick(_ => {\n          this.$refs.saveTagInput.$refs.input.focus();\n        });\n      },\n\n      handleInputConfirm() {\n        let inputValue = this.inputValue;\n        if (inputValue) {\n          this.dynamicTags.push(inputValue);\n        }\n        this.inputVisible = false;\n        this.inputValue = '';\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "bu-tong-chi-cun"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bu-tong-chi-cun"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 不同尺寸")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("额外的尺寸："), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "medium"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "mini"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，通过设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性来配置它们。")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tag closable>默认标签</el-tag>\n<el-tag size=\"medium\" closable>中等标签</el-tag>\n<el-tag size=\"small\" closable>小型标签</el-tag>\n<el-tag size=\"mini\" closable>超小标签</el-tag>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "bu-tong-zhu-ti"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bu-tong-zhu-ti"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 不同主题")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Tag 组件提供了三个不同的主题："), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "light"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "plain")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("通过设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "effect"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性来改变主题，默认为 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "light")])], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"tag-group\">\n  <span class=\"tag-group__title\">Dark</span>\n  <el-tag\n    v-for=\"item in items\"\n    :key=\"item.label\"\n    :type=\"item.type\"\n    effect=\"dark\">\n    {{ item.label }}\n  </el-tag>\n</div>\n<div class=\"tag-group\">\n  <span class=\"tag-group__title\">Plain</span>\n  <el-tag\n    v-for=\"item in items\"\n    :key=\"item.label\"\n    :type=\"item.type\"\n    effect=\"plain\">\n    {{ item.label }}\n  </el-tag>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        items: [\n          { type: '', label: '标签一' },\n          { type: 'success', label: '标签二' },\n          { type: 'info', label: '标签三' },\n          { type: 'danger', label: '标签四' },\n          { type: 'warning', label: '标签五' }\n        ]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td>string</td><td>success/info/warning/danger</td><td>—</td></tr><tr><td>closable</td><td>是否可关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disable-transitions</td><td>是否禁用渐变动画</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>hit</td><td>是否有边框描边</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>color</td><td>背景色</td><td>string</td><td>—</td><td>—</td></tr><tr><td>size</td><td>尺寸</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>effect</td><td>主题</td><td>string</td><td>dark / light / plain</td><td>light</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击 Tag 时触发的事件</td><td>—</td></tr><tr><td>close</td><td>关闭 Tag 时触发的事件</td><td>—</td></tr></tbody></table>", 4);

function tagvue_type_template_id_6bb17afc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", tagvue_type_template_id_6bb17afc_hoisted_1, [tagvue_type_template_id_6bb17afc_hoisted_2, tagvue_type_template_id_6bb17afc_hoisted_3, tagvue_type_template_id_6bb17afc_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tagvue_type_template_id_6bb17afc_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_21]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/tag.md?vue&type=template&id=6bb17afc

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/tag.md?vue&type=script&lang=ts


/* harmony default export */ var tagvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("标签一");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("标签二");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("标签三");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("标签四");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("标签五");

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
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];

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
              name: '标签一',
              type: ''
            }, {
              name: '标签二',
              type: 'success'
            }, {
              name: '标签三',
              type: 'info'
            }, {
              name: '标签四',
              type: 'warning'
            }, {
              name: '标签五',
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
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withKeys = vue_esm_browser["fb" /* withKeys */],
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
          size: "small",
          onKeyup: _withKeys(_ctx.handleInputConfirm, ["enter", "native"]),
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
            dynamicTags: ['标签一', '标签二', '标签三'],
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
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("默认标签");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("中等标签");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("小型标签");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("超小标签");

      function render(_ctx, _cache) {
        var _component_el_tag = _resolveComponent("el-tag");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tag, {
          closable: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_tag, {
          size: "medium",
          closable: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_el_tag, {
          size: "small",
          closable: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }), _createVNode(_component_el_tag, {
          size: "mini",
          closable: ""
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
          _withCtx = vue_esm_browser["db" /* withCtx */];
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
              label: '标签一'
            }, {
              type: 'success',
              label: '标签二'
            }, {
              type: 'info',
              label: '标签三'
            }, {
              type: 'danger',
              label: '标签四'
            }, {
              type: 'warning',
              label: '标签五'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/tag.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/tag.md



tagvue_type_script_lang_ts.render = tagvue_type_template_id_6bb17afc_render

/* harmony default export */ var tag = __webpack_exports__["default"] = (tagvue_type_script_lang_ts);

/***/ })

}]);