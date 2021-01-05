(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[251],{

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/tooltip.md?vue&type=template&id=09c69db6

var tooltipvue_type_template_id_09c69db6_hoisted_1 = {
  class: "content element-doc"
};

var tooltipvue_type_template_id_09c69db6_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "tooltip-wen-zi-ti-shi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tooltip-wen-zi-ti-shi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tooltip 文字提示")], -1);

var tooltipvue_type_template_id_09c69db6_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "常用于展示鼠标 hover 时的提示信息。", -1);

var tooltipvue_type_template_id_09c69db6_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var tooltipvue_type_template_id_09c69db6_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。", -1);

var tooltipvue_type_template_id_09c69db6_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("使用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性来决定"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("时的提示信息。由"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "placement"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性决定展示效果："), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "placement"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性值为："), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "方向-对齐位置"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("；四个方向："), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "right"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "bottom"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("；三种对齐位置："), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "start"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "end"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，默认为空。如"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "placement=\"left-end\""), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。")])], -1);

var tooltipvue_type_template_id_09c69db6_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"box\">\n  <div class=\"top\">\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Top Left 提示文字\" placement=\"top-start\">\n      <el-button>上左</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Top Center 提示文字\" placement=\"top\">\n      <el-button>上边</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Top Right 提示文字\" placement=\"top-end\">\n      <el-button>上右</el-button>\n    </el-tooltip>\n  </div>\n  <div class=\"left\">\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Left Top 提示文字\" placement=\"left-start\">\n      <el-button>左上</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Left Center 提示文字\" placement=\"left\">\n      <el-button>左边</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Left Bottom 提示文字\" placement=\"left-end\">\n      <el-button>左下</el-button>\n    </el-tooltip>\n  </div>\n\n  <div class=\"right\">\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Right Top 提示文字\" placement=\"right-start\">\n      <el-button>右上</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Right Center 提示文字\" placement=\"right\">\n      <el-button>右边</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Right Bottom 提示文字\" placement=\"right-end\">\n      <el-button>右下</el-button>\n    </el-tooltip>\n  </div>\n  <div class=\"bottom\">\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Bottom Left 提示文字\" placement=\"bottom-start\">\n      <el-button>下左</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Bottom Center 提示文字\" placement=\"bottom\">\n      <el-button>下边</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Bottom Right 提示文字\" placement=\"bottom-end\">\n      <el-button>下右</el-button>\n    </el-tooltip>\n  </div>\n</div>\n\n<style>\n  .box {\n    width: 400px;\n\n    .top {\n      text-align: center;\n    }\n\n    .left {\n      float: left;\n      width: 60px;\n    }\n\n    .right {\n      float: right;\n      width: 60px;\n    }\n\n    .bottom {\n      clear: both;\n      text-align: center;\n    }\n\n    .item {\n      margin: 4px;\n    }\n\n    .left .el-tooltip__popper,\n    .right .el-tooltip__popper {\n      padding: 8px 10px;\n    }\n  }\n</style>\n")], -1);

var tooltipvue_type_template_id_09c69db6_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zhu-ti"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zhu-ti"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 主题")], -1);

var tooltipvue_type_template_id_09c69db6_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Tooltip 组件提供了两个不同的主题："), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "light"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。")], -1);

var tooltipvue_type_template_id_09c69db6_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("通过设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "effect"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性来改变主题，默认为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。")])], -1);

var tooltipvue_type_template_id_09c69db6_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tooltip content=\"Top center\" placement=\"top\">\n  <el-button>Dark</el-button>\n</el-tooltip>\n<el-tooltip content=\"Bottom center\" placement=\"bottom\" effect=\"light\">\n  <el-button>Light</el-button>\n</el-tooltip>\n")], -1);

var tooltipvue_type_template_id_09c69db6_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "geng-duo-content"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#geng-duo-content"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 更多 Content")], -1);

var tooltipvue_type_template_id_09c69db6_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "展示多行文本或者是设置文本内容的格式", -1);

var tooltipvue_type_template_id_09c69db6_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("用具名 slot 分发"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，替代"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "tooltip"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("中的"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性。")])], -1);

var tooltipvue_type_template_id_09c69db6_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tooltip placement=\"top\">\n  <template #content>\n    多行信息<br/>第二行信息\n  </template>\n  <el-button>Top center</el-button>\n</el-tooltip>\n")], -1);

var tooltipvue_type_template_id_09c69db6_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"gao-ji-kuo-zhan\"><a class=\"header-anchor\" href=\"#gao-ji-kuo-zhan\">¶</a> 高级扩展</h3><p>除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：</p><p><code>transition</code> 属性可以定制显隐的动画效果，默认为<code>fade-in-linear</code>。 如果需要关闭 <code>tooltip</code> 功能，<code>disabled</code> 属性可以满足这个需求，它接受一个<code>Boolean</code>，设置为<code>true</code>即可。</p><p>事实上，这是基于 <a href=\"https://github.com/element-component/vue-popper\">Vue-popper</a> 的扩展，你可以自定义任意 Vue-popper 中允许定义的字段。 当然 Tooltip 组件实际上十分强大，文末的API文档会做一一说明。</p>", 4);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-tooltip :disabled=\"disabled\" content=\"点击关闭 tooltip 功能\" placement=\"bottom\" effect=\"light\">\n    <el-button @click=\"disabled = !disabled\">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</el-button>\n  </el-tooltip>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        disabled: false\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"tip\"><p>tooltip 内不支持 <code>router-link</code> 组件，请使用 <code>vm.$router.push</code> 代替。</p><p>tooltip 内不支持 disabled form 元素，参考<a href=\"https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter\">MDN</a>，请在 disabled form 元素外层添加一层包裹元素。</p></div><h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>append-to-body</td><td>决定 popper 是否传送到 document.body 下</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>effect</td><td>默认提供的主题</td><td>String</td><td>dark/light</td><td>dark</td></tr><tr><td>content</td><td>显示的内容，也可以通过 <code>slot#content</code> 传入 DOM</td><td>String</td><td>—</td><td>—</td></tr><tr><td>placement</td><td>Tooltip 的出现位置</td><td>String</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>value / v-model</td><td>状态是否可见</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>Tooltip 是否可用</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>offset</td><td>出现位置的偏移量</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>transition</td><td>定义渐变动画</td><td>String</td><td>—</td><td>el-fade-in-linear</td></tr><tr><td>visible-arrow</td><td>是否显示 Tooltip 箭头，更多参数可见<a href=\"https://github.com/element-component/vue-popper\">Vue-popper</a></td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>popper-options</td><td><a href=\"https://popper.js.org/documentation.html\">popper.js</a> 的参数</td><td>Object</td><td>参考 <a href=\"https://popper.js.org/documentation.html\">popper.js</a> 文档</td><td>{ boundariesElement: &#39;body&#39;, gpuAcceleration: false }</td></tr><tr><td>open-delay</td><td>延迟出现，单位毫秒</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>manual</td><td>手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>popper-class</td><td>为 Tooltip 的 popper 添加类名</td><td>String</td><td>—</td><td>—</td></tr><tr><td>enterable</td><td>鼠标是否可进入到 tooltip 中</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>hide-after</td><td>Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏</td><td>number</td><td>—</td><td>0</td></tr><tr><td>tabindex</td><td>Tooltip 组件的 <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\">tabindex</a></td><td>number</td><td>—</td><td>0</td></tr></tbody></table>", 3);

function tooltipvue_type_template_id_09c69db6_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", tooltipvue_type_template_id_09c69db6_hoisted_1, [tooltipvue_type_template_id_09c69db6_hoisted_2, tooltipvue_type_template_id_09c69db6_hoisted_3, tooltipvue_type_template_id_09c69db6_hoisted_4, tooltipvue_type_template_id_09c69db6_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_09c69db6_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_09c69db6_hoisted_6];
    }),
    _: 1
  }), tooltipvue_type_template_id_09c69db6_hoisted_8, tooltipvue_type_template_id_09c69db6_hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_09c69db6_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_09c69db6_hoisted_10];
    }),
    _: 1
  }), tooltipvue_type_template_id_09c69db6_hoisted_12, tooltipvue_type_template_id_09c69db6_hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_09c69db6_hoisted_15];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_09c69db6_hoisted_14];
    }),
    _: 1
  }), tooltipvue_type_template_id_09c69db6_hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_21]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/tooltip.md?vue&type=template&id=09c69db6

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/tooltip.md?vue&type=script&lang=ts


/* harmony default export */ var tooltipvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "box"
      };
      var _hoisted_2 = {
        class: "top"
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("上左");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("上边");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("上右");

      var _hoisted_6 = {
        class: "left"
      };

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("左上");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("左边");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("左下");

      var _hoisted_10 = {
        class: "right"
      };

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("右上");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("右边");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("右下");

      var _hoisted_14 = {
        class: "bottom"
      };

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("下左");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("下边");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("下右");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Top Left 提示文字",
          placement: "top-start"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Top Center 提示文字",
          placement: "top"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Top Right 提示文字",
          placement: "top-end"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_6, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Left Top 提示文字",
          placement: "left-start"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Left Center 提示文字",
          placement: "left"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Left Bottom 提示文字",
          placement: "left-end"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_9];
              }),
              _: 1
            })];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_10, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Right Top 提示文字",
          placement: "right-start"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Right Center 提示文字",
          placement: "right"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_12];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Right Bottom 提示文字",
          placement: "right-end"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            })];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_14, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Bottom Left 提示文字",
          placement: "bottom-start"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_15];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Bottom Center 提示文字",
          placement: "bottom"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_16];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Bottom Right 提示文字",
          placement: "bottom-end"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_17];
              }),
              _: 1
            })];
          }),
          _: 1
        })])])]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Dark");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Light");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tooltip, {
          content: "Top center",
          placement: "top"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          content: "Bottom center",
          placement: "bottom",
          effect: "light"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_2];
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
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 多行信息");

      var _hoisted_2 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("第二行信息 ");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Top center");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tooltip, {
          placement: "top"
        }, {
          content: _withCtx(function () {
            return [_hoisted_1, _hoisted_2, _hoisted_3];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_4];
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
    }(),
    "element-demo3": function () {
      var _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tooltip, {
          disabled: _ctx.disabled,
          content: "点击关闭 tooltip 功能",
          placement: "bottom",
          effect: "light"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              onClick: _cache[1] || (_cache[1] = function ($event) {
                return _ctx.disabled = !_ctx.disabled;
              })
            }, {
              default: _withCtx(function () {
                return [_createTextVNode("点击" + _toDisplayString(_ctx.disabled ? '开启' : '关闭') + " tooltip 功能", 1)];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["disabled"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            disabled: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/tooltip.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/tooltip.md



tooltipvue_type_script_lang_ts.render = tooltipvue_type_template_id_09c69db6_render

/* harmony default export */ var tooltip = __webpack_exports__["default"] = (tooltipvue_type_script_lang_ts);

/***/ })

}]);