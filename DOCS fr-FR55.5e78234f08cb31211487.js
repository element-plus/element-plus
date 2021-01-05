(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[182],{

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/tag.md?vue&type=template&id=1d5db2ef

var tagvue_type_template_id_1d5db2ef_hoisted_1 = {
  class: "content element-doc"
};

var tagvue_type_template_id_1d5db2ef_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "tagu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tagu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" タグ")], -1);

var tagvue_type_template_id_1d5db2ef_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "マーキングや選択に使用します。", -1);

var tagvue_type_template_id_1d5db2ef_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-ben-dena-shii-fang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-dena-shii-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基本的な使い方")], -1);

var tagvue_type_template_id_1d5db2ef_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("タグの型を定義するには "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性を用いる。さらに、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性を用いてタグの背景色を設定することもできる。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tag>Tag 1</el-tag>\n<el-tag type=\"success\">Tag 2</el-tag>\n<el-tag type=\"info\">Tag 3</el-tag>\n<el-tag type=\"warning\">Tag 4</el-tag>\n<el-tag type=\"danger\">Tag 5</el-tag>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "quri-waisi-ke-nengnatagu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#quri-waisi-ke-nengnatagu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 取り外し可能なタグ")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "closable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性は取り外し可能なタグを定義するために用いることができる。これは "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を受け付けます。デフォルトでは、タグの削除にはフェージングアニメーションが付きます。アニメーションを使いたくない場合は、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disable-transitions"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性に "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を指定して "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" に設定すればよい。"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "close"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" イベントはタグが削除されたときに発生する。")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tag\n  v-for=\"tag in tags\"\n  :key=\"tag.name\"\n  closable\n  :type=\"tag.type\">\n  {{tag.name}}\n</el-tag>\n\n<script>\n  export default {\n    data() {\n      return {\n        tags: [\n          { name: 'Tag 1', type: '' },\n          { name: 'Tag 2', type: 'success' },\n          { name: 'Tag 3', type: 'info' },\n          { name: 'Tag 4', type: 'warning' },\n          { name: 'Tag 5', type: 'danger' }\n        ]\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "dong-deni-bian-ji"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dong-deni-bian-ji"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 動的に編集")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("タグを動的に追加したり削除したりするには、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "close"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("イベントを利用することができる。")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tag\n  :key=\"tag\"\n  v-for=\"tag in dynamicTags\"\n  closable\n  :disable-transitions=\"false\"\n  @close=\"handleClose(tag)\">\n  {{tag}}\n</el-tag>\n<el-input\n  class=\"input-new-tag\"\n  v-if=\"inputVisible\"\n  v-model=\"inputValue\"\n  ref=\"saveTagInput\"\n  size=\"mini\"\n  @keyup.enter.native=\"handleInputConfirm\"\n  @blur=\"handleInputConfirm\"\n>\n</el-input>\n<el-button v-else class=\"button-new-tag\" size=\"small\" @click=\"showInput\">+ New Tag</el-button>\n\n<style>\n  .el-tag + .el-tag {\n    margin-left: 10px;\n  }\n  .button-new-tag {\n    margin-left: 10px;\n    height: 32px;\n    line-height: 30px;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n  .input-new-tag {\n    width: 90px;\n    margin-left: 10px;\n    vertical-align: bottom;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],\n        inputVisible: false,\n        inputValue: ''\n      };\n    },\n    methods: {\n      handleClose(tag) {\n        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);\n      },\n\n      showInput() {\n        this.inputVisible = true;\n        this.$nextTick(_ => {\n          this.$refs.saveTagInput.$refs.input.focus();\n        });\n      },\n\n      handleInputConfirm() {\n        let inputValue = this.inputValue;\n        if (inputValue) {\n          this.dynamicTags.push(inputValue);\n        }\n        this.inputVisible = false;\n        this.inputValue = '';\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "saizu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#saizu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" サイズ")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "デフォルトのサイズの他に、Tagコンポーネントには3つの追加サイズが用意されており、異なるシナリオの中から選択することができます。", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("追加のサイズを "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "medium"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "mini"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" で設定するには、属性 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を使用します。")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tag>Default</el-tag>\n<el-tag size=\"medium\">Medium</el-tag>\n<el-tag size=\"small\">Small</el-tag>\n<el-tag size=\"mini\">Mini</el-tag>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tema"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tema"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" テーマ")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("タグは3つの異なるテーマを提供します: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "light"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "plain"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("です。")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "effect"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を使って変更する場合、デフォルトは "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "light"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" です。")])], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"tag-group\">\n  <span class=\"tag-group__title\">Dark</span>\n  <el-tag\n    v-for=\"item in items\"\n    :key=\"item.label\"\n    :type=\"item.type\"\n    effect=\"dark\">\n    {{ item.label }}\n  </el-tag>\n</div>\n<div class=\"tag-group\">\n  <span class=\"tag-group__title\">Plain</span>\n  <el-tag\n    v-for=\"item in items\"\n    :key=\"item.label\"\n    :type=\"item.type\"\n    effect=\"plain\">\n    {{ item.label }}\n  </el-tag>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        items: [\n          { type: '', label: 'Tag 1' },\n          { type: 'success', label: 'Tag 2' },\n          { type: 'info', label: 'Tag 3' },\n          { type: 'danger', label: 'Tag 4' },\n          { type: 'warning', label: 'Tag 5' }\n        ]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>コンポーネントタイプ</td><td>string</td><td>success/info/warning/danger</td><td>—</td></tr><tr><td>closable</td><td>タグを削除できるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disable-transitions</td><td>アニメーションを無効にするかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>hit</td><td>タグにハイライトされた境界線があるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>color</td><td>タグの背景色</td><td>string</td><td>—</td><td>—</td></tr><tr><td>size</td><td>タグサイズ</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>effect</td><td>コンポーネントテーマ</td><td>string</td><td>dark / light / plain</td><td>light</td></tr></tbody></table><h3 id=\"ibento\"><a class=\"header-anchor\" href=\"#ibento\">¶</a> イベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>click</td><td>タグがクリックされたときにトリガーされます。</td><td>—</td></tr><tr><td>close</td><td>タグが削除されたときにトリガーされます。</td><td>—</td></tr></tbody></table>", 4);

function tagvue_type_template_id_1d5db2ef_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", tagvue_type_template_id_1d5db2ef_hoisted_1, [tagvue_type_template_id_1d5db2ef_hoisted_2, tagvue_type_template_id_1d5db2ef_hoisted_3, tagvue_type_template_id_1d5db2ef_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tagvue_type_template_id_1d5db2ef_hoisted_5];
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
// CONCATENATED MODULE: ./website/docs/jp/tag.md?vue&type=template&id=1d5db2ef

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/tag.md?vue&type=script&lang=ts


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
          size: "mini",
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
          _withCtx = vue_esm_browser["db" /* withCtx */],
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
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/tag.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/tag.md



tagvue_type_script_lang_ts.render = tagvue_type_template_id_1d5db2ef_render

/* harmony default export */ var tag = __webpack_exports__["default"] = (tagvue_type_script_lang_ts);

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/tag.md?vue&type=template&id=4092822a

var tagvue_type_template_id_4092822a_hoisted_1 = {
  class: "content element-doc"
};

var tagvue_type_template_id_4092822a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "tag"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tag"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tag")], -1);

var tagvue_type_template_id_4092822a_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Les tags sont utiles sont marquer certaines données afin d'ajouter des informations et de les retrouver plus facilement.", -1);

var tagvue_type_template_id_4092822a_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Usage")], -1);

var tagvue_type_template_id_4092822a_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilisez l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour définir le type de tag. De plus, l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" détermine la couleur de fond.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tag>Tag 1</el-tag>\n<el-tag type=\"success\">Tag 2</el-tag>\n<el-tag type=\"info\">Tag 3</el-tag>\n<el-tag type=\"warning\">Tag 4</el-tag>\n<el-tag type=\"danger\">Tag 5</el-tag>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "supprimer-des-tags"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#supprimer-des-tags"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Supprimer des tags")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("L'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "closable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" détermine si un tag est supprimable grâce à un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Par défaut la suppression bénéficie d'un animation de fading. Utilisez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disable-transitions"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" si vous ne souhaitez pas d'animations en utilisant un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" à "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". L'évènement "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "close"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" se déclenche quand un tag est supprimé.")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tag\n  v-for=\"tag in tags\"\n  :key=\"tag.name\"\n  closable\n  :type=\"tag.type\">\n  {{tag.name}}\n</el-tag>\n\n<script>\n  export default {\n    data() {\n      return {\n        tags: [\n          { name: 'Tag 1', type: '' },\n          { name: 'Tag 2', type: 'success' },\n          { name: 'Tag 3', type: 'info' },\n          { name: 'Tag 4', type: 'warning' },\n          { name: 'Tag 5', type: 'danger' }\n        ]\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "edition-dynamique"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#edition-dynamique"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Édition dynamique")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Vous pouvez utiliser l'évènement "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "close"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour ajouter et supprimer des tags dynamiquement.")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tag\n  :key=\"tag\"\n  v-for=\"tag in dynamicTags\"\n  closable\n  :disable-transitions=\"false\"\n  @close=\"handleClose(tag)\">\n  {{tag}}\n</el-tag>\n<el-input\n  class=\"input-new-tag\"\n  v-if=\"inputVisible\"\n  v-model=\"inputValue\"\n  ref=\"saveTagInput\"\n  size=\"mini\"\n  @keyup.enter.native=\"handleInputConfirm\"\n  @blur=\"handleInputConfirm\"\n>\n</el-input>\n<el-button v-else class=\"button-new-tag\" size=\"small\" @click=\"showInput\">+ Nouveau Tag</el-button>\n\n<style>\n  .el-tag + .el-tag {\n    margin-left: 10px;\n  }\n  .button-new-tag {\n    margin-left: 10px;\n    height: 32px;\n    line-height: 30px;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n  .input-new-tag {\n    width: 90px;\n    margin-left: 10px;\n    vertical-align: bottom;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],\n        inputVisible: false,\n        inputValue: ''\n      };\n    },\n    methods: {\n      handleClose(tag) {\n        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);\n      },\n\n      showInput() {\n        this.inputVisible = true;\n        this.$nextTick(_ => {\n          this.$refs.saveTagInput.$refs.input.focus();\n        });\n      },\n\n      handleInputConfirm() {\n        let inputValue = this.inputValue;\n        if (inputValue) {\n          this.dynamicTags.push(inputValue);\n        }\n        this.inputVisible = false;\n        this.inputValue = '';\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tailles"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tailles"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tailles")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "En plus de la taille par défaut, Tag fournit d'autres tailles pour vos composants.", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilisez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour choisir une autre taille parmi "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "medium"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ou "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "mini"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tag>Défaut</el-tag>\n<el-tag size=\"medium\">Medium</el-tag>\n<el-tag size=\"small\">Small</el-tag>\n<el-tag size=\"mini\">Mini</el-tag>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "theme"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#theme"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Theme")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Les balises utilisent trois thèmes différents: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "light"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "plain")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilisez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "effect"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour changer. La valeur par défaut est "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "light")])], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"tag-group\">\n  <span class=\"tag-group__title\">Dark</span>\n  <el-tag\n    v-for=\"item in items\"\n    :key=\"item.label\"\n    :type=\"item.type\"\n    effect=\"dark\">\n    {{ item.label }}\n  </el-tag>\n</div>\n<div class=\"tag-group\">\n  <span class=\"tag-group__title\">Plain</span>\n  <el-tag\n    v-for=\"item in items\"\n    :key=\"item.label\"\n    :type=\"item.type\"\n    effect=\"plain\">\n    {{ item.label }}\n  </el-tag>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        items: [\n          { type: '', label: 'Tag 1' },\n          { type: 'success', label: 'Tag 2' },\n          { type: 'info', label: 'Tag 3' },\n          { type: 'danger', label: 'Tag 4' },\n          { type: 'warning', label: 'Tag 5' }\n        ]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributs\"><a class=\"header-anchor\" href=\"#attributs\">¶</a> Attributs</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>type</td><td>Type du tag.</td><td>string</td><td>success/info/warning/danger</td><td>—</td></tr><tr><td>closable</td><td>Si le tag peut être supprimé.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disable-transitions</td><td>Si les animations sont désactivées.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>hit</td><td>Si le tag à une bordure mise en valeur.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>color</td><td>Couleur de fond du tag.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>size</td><td>Taille du tag.</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>effect</td><td>component theme</td><td>string</td><td>dark / light / plain</td><td>light</td></tr></tbody></table><h3 id=\"evenements\"><a class=\"header-anchor\" href=\"#evenements\">¶</a> Évènements</h3><table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>click</td><td>Se déclenche quand le tag est cliqué.</td><td>—</td></tr><tr><td>close</td><td>Se déclenche quand le tag est supprimé.</td><td>—</td></tr></tbody></table>", 4);

function tagvue_type_template_id_4092822a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", tagvue_type_template_id_4092822a_hoisted_1, [tagvue_type_template_id_4092822a_hoisted_2, tagvue_type_template_id_4092822a_hoisted_3, tagvue_type_template_id_4092822a_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tagvue_type_template_id_4092822a_hoisted_5];
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
// CONCATENATED MODULE: ./website/docs/fr-FR/tag.md?vue&type=template&id=4092822a

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/tag.md?vue&type=script&lang=ts


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
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withKeys = vue_esm_browser["fb" /* withKeys */],
          _createCommentVNode = vue_esm_browser["k" /* createCommentVNode */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("+ Nouveau Tag");

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
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Défaut");

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
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/tag.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/tag.md



tagvue_type_script_lang_ts.render = tagvue_type_template_id_4092822a_render

/* harmony default export */ var tag = __webpack_exports__["default"] = (tagvue_type_script_lang_ts);

/***/ })

}]);