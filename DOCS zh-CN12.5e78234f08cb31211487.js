(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[200],{

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/collapse.md?vue&type=template&id=e0d70c9c

var collapsevue_type_template_id_e0d70c9c_hoisted_1 = {
  class: "content element-doc"
};

var collapsevue_type_template_id_e0d70c9c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "collapse-zhe-die-mian-ban"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#collapse-zhe-die-mian-ban"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Collapse 折叠面板")], -1);

var collapsevue_type_template_id_e0d70c9c_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "通过折叠面板收纳内容区域", -1);

var collapsevue_type_template_id_e0d70c9c_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var collapsevue_type_template_id_e0d70c9c_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可同时展开多个面板，面板之间不影响", -1);

var collapsevue_type_template_id_e0d70c9c_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-collapse v-model=\"activeNames\" @change=\"handleChange\">\n  <el-collapse-item title=\"一致性 Consistency\" name=\"1\">\n    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>\n    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"反馈 Feedback\" name=\"2\">\n    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"效率 Efficiency\" name=\"3\">\n    <div>简化流程：设计简洁直观的操作流程；</div>\n    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>\n    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"可控 Controllability\" name=\"4\">\n    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>\n    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>\n  </el-collapse-item>\n</el-collapse>\n<script>\n  export default {\n    data() {\n      return {\n        activeNames: ['1']\n      };\n    },\n    methods: {\n      handleChange(val) {\n        console.log(val);\n      }\n    }\n  }\n</script>\n")], -1);

var collapsevue_type_template_id_e0d70c9c_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "shou-feng-qin-xiao-guo"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shou-feng-qin-xiao-guo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 手风琴效果")], -1);

var collapsevue_type_template_id_e0d70c9c_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "每次只能展开一个面板", -1);

var collapsevue_type_template_id_e0d70c9c_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "accordion"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性来设置是否以手风琴模式显示。")])], -1);

var collapsevue_type_template_id_e0d70c9c_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-collapse v-model=\"activeName\" accordion>\n  <el-collapse-item title=\"一致性 Consistency\" name=\"1\">\n    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>\n    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"反馈 Feedback\" name=\"2\">\n    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"效率 Efficiency\" name=\"3\">\n    <div>简化流程：设计简洁直观的操作流程；</div>\n    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>\n    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"可控 Controllability\" name=\"4\">\n    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>\n    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>\n  </el-collapse-item>\n</el-collapse>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: '1'\n      };\n    }\n  }\n</script>\n")], -1);

var collapsevue_type_template_id_e0d70c9c_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zi-ding-yi-mian-ban-biao-ti"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-mian-ban-biao-ti"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 自定义面板标题")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("除了可以通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性以外，还可以通过具名 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 来实现自定义面板的标题内容，以实现增加图标等效果。")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-collapse accordion>\n  <el-collapse-item>\n    <template #title>\n      一致性 Consistency<i class=\"header-icon el-icon-info\"></i>\n    </template>\n    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>\n    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"反馈 Feedback\">\n    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"效率 Efficiency\">\n    <div>简化流程：设计简洁直观的操作流程；</div>\n    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>\n    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"可控 Controllability\">\n    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>\n    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>\n  </el-collapse-item>\n</el-collapse>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"collapse-attributes\"><a class=\"header-anchor\" href=\"#collapse-attributes\">¶</a> Collapse Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value / v-model</td><td>当前激活的面板(如果是手风琴模式，绑定值类型需要为<code>string</code>，否则为<code>array</code>)</td><td>string / array</td><td>—</td><td>—</td></tr><tr><td>accordion</td><td>是否手风琴模式</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"collapse-events\"><a class=\"header-anchor\" href=\"#collapse-events\">¶</a> Collapse Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当前激活面板改变时触发(如果是手风琴模式，参数 <code>activeNames</code> 类型为<code>string</code>，否则为<code>array</code>)</td><td>(activeNames: array / string)</td></tr></tbody></table><h3 id=\"collapse-item-attributes\"><a class=\"header-anchor\" href=\"#collapse-item-attributes\">¶</a> Collapse Item Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>唯一标志符</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>title</td><td>面板标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>—</td></tr></tbody></table>", 6);

function collapsevue_type_template_id_e0d70c9c_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", collapsevue_type_template_id_e0d70c9c_hoisted_1, [collapsevue_type_template_id_e0d70c9c_hoisted_2, collapsevue_type_template_id_e0d70c9c_hoisted_3, collapsevue_type_template_id_e0d70c9c_hoisted_4, collapsevue_type_template_id_e0d70c9c_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [collapsevue_type_template_id_e0d70c9c_hoisted_6];
    }),
    _: 1
  }), collapsevue_type_template_id_e0d70c9c_hoisted_7, collapsevue_type_template_id_e0d70c9c_hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [collapsevue_type_template_id_e0d70c9c_hoisted_10];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [collapsevue_type_template_id_e0d70c9c_hoisted_9];
    }),
    _: 1
  }), collapsevue_type_template_id_e0d70c9c_hoisted_11, _hoisted_12, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_14]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/collapse.md?vue&type=template&id=e0d70c9c

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/collapse.md?vue&type=script&lang=ts


/* harmony default export */ var collapsevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", null, "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", null, "在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", null, "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", null, "页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", null, "简化流程：设计简洁直观的操作流程；", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", null, "清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", null, "帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", null, "用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", null, "结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。", -1);

      function render(_ctx, _cache) {
        var _component_el_collapse_item = _resolveComponent("el-collapse-item");

        var _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_collapse, {
          modelValue: _ctx.activeNames,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.activeNames = $event;
          }),
          onChange: _ctx.handleChange
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_collapse_item, {
              title: "一致性 Consistency",
              name: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "反馈 Feedback",
              name: "2"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3, _hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "效率 Efficiency",
              name: "3"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5, _hoisted_6, _hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "可控 Controllability",
              name: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8, _hoisted_9];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue", "onChange"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeNames: ['1']
          };
        },
        methods: {
          handleChange: function handleChange(val) {
            console.log(val);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", null, "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", null, "在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", null, "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", null, "页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", null, "简化流程：设计简洁直观的操作流程；", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", null, "清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", null, "帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", null, "用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", null, "结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。", -1);

      function render(_ctx, _cache) {
        var _component_el_collapse_item = _resolveComponent("el-collapse-item");

        var _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_collapse, {
          modelValue: _ctx.activeName,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.activeName = $event;
          }),
          accordion: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_collapse_item, {
              title: "一致性 Consistency",
              name: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "反馈 Feedback",
              name: "2"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3, _hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "效率 Efficiency",
              name: "3"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5, _hoisted_6, _hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "可控 Controllability",
              name: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8, _hoisted_9];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeName: '1'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 一致性 Consistency");

      var _hoisted_2 = /*#__PURE__*/_createVNode("i", {
        class: "header-icon el-icon-info"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", null, "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", null, "在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", null, "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", null, "页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", null, "简化流程：设计简洁直观的操作流程；", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", null, "清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", null, "帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。", -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("div", null, "用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；", -1);

      var _hoisted_11 = /*#__PURE__*/_createVNode("div", null, "结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。", -1);

      function render(_ctx, _cache) {
        var _component_el_collapse_item = _resolveComponent("el-collapse-item");

        var _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_collapse, {
          accordion: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_collapse_item, null, {
              title: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              default: _withCtx(function () {
                return [_hoisted_3, _hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "反馈 Feedback"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5, _hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "效率 Efficiency"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7, _hoisted_8, _hoisted_9];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "可控 Controllability"
            }, {
              default: _withCtx(function () {
                return [_hoisted_10, _hoisted_11];
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
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/collapse.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/collapse.md



collapsevue_type_script_lang_ts.render = collapsevue_type_template_id_e0d70c9c_render

/* harmony default export */ var collapse = __webpack_exports__["default"] = (collapsevue_type_script_lang_ts);

/***/ })

}]);