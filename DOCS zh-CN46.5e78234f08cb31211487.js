(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[237],{

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/rate.md?vue&type=template&id=626cbaf2

var ratevue_type_template_id_626cbaf2_hoisted_1 = {
  class: "content element-doc"
};

var ratevue_type_template_id_626cbaf2_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "rate-ping-fen"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#rate-ping-fen"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Rate 评分")], -1);

var ratevue_type_template_id_626cbaf2_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "评分组件", -1);

var ratevue_type_template_id_626cbaf2_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "colors"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性设置，而它们对应的两个阈值则通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "low-threshold"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "high-threshold"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 设定。你也可以通过传入颜色对象来自定义分段，键名为分段的界限值，键值为对应的颜色。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">默认不区分颜色</span>\n  <el-rate v-model=\"value1\"></el-rate>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">区分颜色</span>\n  <el-rate\n    v-model=\"value2\"\n    :colors=\"colors\">\n  </el-rate>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: null,\n        value2: null,\n        colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "yun-xu-ban-xuan"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yun-xu-ban-xuan"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 允许半选")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "allow-half"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 允许出现半星")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "\n<div class=\"block\">\n  <el-rate  v-model=\"value\"  allow-half />\n</div>\n\n\n<script>\nimport { defineComponent, ref } from 'vue'\n  export default {\n    setup() {\n      return {\n        value: ref(null)\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "fu-zhu-wen-zi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fu-zhu-wen-zi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 辅助文字")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "用辅助文字直接地表达对应分数", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("为组件设置 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-text"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性会在右侧显示辅助文字。通过设置 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "texts"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 可以为每一个分值指定对应的辅助文字。"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "texts"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 为一个数组，长度应等于最大值 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。")])], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-rate\n  v-model=\"value\"\n  show-text>\n</el-rate>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: null\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "qi-ta-icon"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#qi-ta-icon"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 其它 icon")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "当有多层评价时，可以用不同类型的 icon 区分评分层级", -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "icon-classes"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性可以自定义不同分段的图标。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名。本例还使用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "void-icon-class"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("指定了未选中时的图标类名。")])], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-rate\n  v-model=\"value\"\n  :icon-classes=\"iconClasses\"\n  void-icon-class=\"icon-rate-face-off\"\n  :colors=\"['#99A9BF', '#F7BA2A', '#FF9900']\">\n</el-rate>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: null,\n        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zhi-du"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zhi-du"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 只读")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "只读的评分用来展示分数，允许出现半星", -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("为组件设置 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性表示组件为只读，支持小数分值。此时若设置 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-score"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，则会在右侧显示目前的分值。可以提供 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "score-template"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 作为显示模板，模板为一个包含了 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "{value}"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 的字符串，"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "{value}"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 会被解析为分值。")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-rate\n  v-model=\"value\"\n  disabled\n  show-score\n  text-color=\"#ff9900\"\n  score-template=\"{value}\">\n</el-rate>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 3.7\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value / v-model</td><td>绑定值</td><td>number</td><td>—</td><td>0</td></tr><tr><td>max</td><td>最大分值</td><td>number</td><td>—</td><td>5</td></tr><tr><td>disabled</td><td>是否为只读</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-half</td><td>是否允许半选</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>low-threshold</td><td>低分和中等分数的界限值，值本身被划分在低分中</td><td>number</td><td>—</td><td>2</td></tr><tr><td>high-threshold</td><td>高分和中等分数的界限值，值本身被划分在高分中</td><td>number</td><td>—</td><td>4</td></tr><tr><td>colors</td><td>icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色</td><td>array/object</td><td>—</td><td>[&#39;#F7BA2A&#39;, &#39;#F7BA2A&#39;, &#39;#F7BA2A&#39;]</td></tr><tr><td>void-color</td><td>未选中 icon 的颜色</td><td>string</td><td>—</td><td>#C6D1DE</td></tr><tr><td>disabled-void-color</td><td>只读时未选中 icon 的颜色</td><td>string</td><td>—</td><td>#EFF2F7</td></tr><tr><td>icon-classes</td><td>icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名</td><td>array/object</td><td>—</td><td>[&#39;el-icon-star-on&#39;, &#39;el-icon-star-on&#39;,&#39;el-icon-star-on&#39;]</td></tr><tr><td>void-icon-class</td><td>未选中 icon 的类名</td><td>string</td><td>—</td><td>el-icon-star-off</td></tr><tr><td>disabled-void-icon-class</td><td>只读时未选中 icon 的类名</td><td>string</td><td>—</td><td>el-icon-star-on</td></tr><tr><td>show-text</td><td>是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-score</td><td>是否显示当前分数，show-score 和 show-text 不能同时为真</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>text-color</td><td>辅助文字的颜色</td><td>string</td><td>—</td><td>#1F2D3D</td></tr><tr><td>texts</td><td>辅助文字数组</td><td>array</td><td>—</td><td>[&#39;极差&#39;, &#39;失望&#39;, &#39;一般&#39;, &#39;满意&#39;, &#39;惊喜&#39;]</td></tr><tr><td>score-template</td><td>分数显示模板</td><td>string</td><td>—</td><td>{value}</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>分值改变时触发</td><td>改变后的分值</td></tr></tbody></table>", 4);

function ratevue_type_template_id_626cbaf2_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", ratevue_type_template_id_626cbaf2_hoisted_1, [ratevue_type_template_id_626cbaf2_hoisted_2, ratevue_type_template_id_626cbaf2_hoisted_3, ratevue_type_template_id_626cbaf2_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_5];
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
      return [_hoisted_13];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_18, _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_22]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/rate.md?vue&type=template&id=626cbaf2

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/rate.md?vue&type=script&lang=ts


/* harmony default export */ var ratevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "默认不区分颜色", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "区分颜色", -1);

      function render(_ctx, _cache) {
        var _component_el_rate = _resolveComponent("el-rate");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_rate, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          })
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_rate, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          colors: _ctx.colors
        }, null, 8, ["modelValue", "colors"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: null,
            value2: null,
            colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }

          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_el_rate = _resolveComponent("el-rate");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_rate, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          "allow-half": ""
        }, null, 8, ["modelValue"])])]);
      }

      var defineComponent = vue_esm_browser["q" /* defineComponent */],
          ref = vue_esm_browser["L" /* ref */];
      var democomponentExport = {
        setup: function setup() {
          return {
            value: ref(null)
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_rate = _resolveComponent("el-rate");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_rate, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          "show-text": ""
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: null
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_rate = _resolveComponent("el-rate");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_rate, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          "icon-classes": _ctx.iconClasses,
          "void-icon-class": "icon-rate-face-off",
          colors: ['#99A9BF', '#F7BA2A', '#FF9900']
        }, null, 8, ["modelValue", "icon-classes"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: null,
            iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }

          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_rate = _resolveComponent("el-rate");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_rate, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          disabled: "",
          "show-score": "",
          "text-color": "#ff9900",
          "score-template": "{value}"
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: 3.7
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/rate.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/rate.md



ratevue_type_script_lang_ts.render = ratevue_type_template_id_626cbaf2_render

/* harmony default export */ var rate = __webpack_exports__["default"] = (ratevue_type_script_lang_ts);

/***/ })

}]);