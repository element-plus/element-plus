(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/tooltip.md?vue&type=template&id=295450f1

var tooltipvue_type_template_id_295450f1_hoisted_1 = {
  class: "content element-doc"
};

var tooltipvue_type_template_id_295450f1_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "tooltip"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tooltip"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tooltip")], -1);

var tooltipvue_type_template_id_295450f1_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Display prompt information for mouse hover.", -1);

var tooltipvue_type_template_id_295450f1_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Basic usage")], -1);

var tooltipvue_type_template_id_295450f1_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Tooltip has 9 placements.", -1);

var tooltipvue_type_template_id_295450f1_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Use attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to set the display content when hover. The attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "placement"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" determines the position of the tooltip. Its value is "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "[orientation]-[alignment]"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" with four orientations "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "right"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "bottom"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and three alignments "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "start"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "end"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "null"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", and the default alignment is null. Take "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "placement=\"left-end\""), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" for example, Tooltip will display on the left of the element which you are hovering and the bottom of the tooltip aligns with the bottom of the element.")])], -1);

var tooltipvue_type_template_id_295450f1_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"box\">\n  <div class=\"top\">\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Top Left prompts info\" placement=\"top-start\">\n      <el-button>top-start</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Top Center prompts info\" placement=\"top\">\n      <el-button>top</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Top Right prompts info\" placement=\"top-end\">\n      <el-button>top-end</el-button>\n    </el-tooltip>\n  </div>\n  <div class=\"left\">\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Left Top prompts info\" placement=\"left-start\">\n      <el-button>left-start</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Left Center prompts info\" placement=\"left\">\n      <el-button>left</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Left Bottom prompts info\" placement=\"left-end\">\n      <el-button>left-end</el-button>\n    </el-tooltip>\n  </div>\n\n  <div class=\"right\">\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Right Top prompts info\" placement=\"right-start\">\n      <el-button>right-start</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Right Center prompts info\" placement=\"right\">\n      <el-button>right</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Right Bottom prompts info\" placement=\"right-end\">\n      <el-button>right-end</el-button>\n    </el-tooltip>\n  </div>\n  <div class=\"bottom\">\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Bottom Left prompts info\" placement=\"bottom-start\">\n      <el-button>bottom-start</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Bottom Center prompts info\" placement=\"bottom\">\n      <el-button>bottom</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Bottom Right prompts info\" placement=\"bottom-end\">\n      <el-button>bottom-end</el-button>\n    </el-tooltip>\n  </div>\n</div>\n\n<style>\n  .box {\n    width: 400px;\n\n    .top {\n      text-align: center;\n    }\n\n    .left {\n      float: left;\n      width: 110px;\n    }\n\n    .right {\n      float: right;\n      width: 110px;\n    }\n\n    .bottom {\n      clear: both;\n      text-align: center;\n    }\n\n    .item {\n      margin: 4px;\n    }\n\n    .left .el-tooltip__popper,\n    .right .el-tooltip__popper {\n      padding: 8px 10px;\n    }\n\n    .el-button {\n      width: 110px;\n    }\n  }\n</style>\n")], -1);

var tooltipvue_type_template_id_295450f1_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "theme"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#theme"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Theme")], -1);

var tooltipvue_type_template_id_295450f1_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Tooltip has two themes: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "light"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。")], -1);

var tooltipvue_type_template_id_295450f1_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "effect"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to modify theme, and the default value is "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var tooltipvue_type_template_id_295450f1_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tooltip content=\"Top center\" placement=\"top\">\n  <el-button>Dark</el-button>\n</el-tooltip>\n<el-tooltip content=\"Bottom center\" placement=\"bottom\" effect=\"light\">\n  <el-button>Light</el-button>\n</el-tooltip>\n")], -1);

var tooltipvue_type_template_id_295450f1_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "more-content"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#more-content"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" More Content")], -1);

var tooltipvue_type_template_id_295450f1_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Display multiple lines of text and set their format.", -1);

var tooltipvue_type_template_id_295450f1_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Override attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" of "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-tooltip"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" by adding a slot named "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var tooltipvue_type_template_id_295450f1_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tooltip placement=\"top\">\n  <template #content>\n    multiple lines<br/>second line\n  </template>\n  <el-button>Top center</el-button>\n</el-tooltip>\n")], -1);

var tooltipvue_type_template_id_295450f1_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"advanced-usage\"><a class=\"header-anchor\" href=\"#advanced-usage\">¶</a> Advanced usage</h3><p>In addition to basic usages, there are some attributes that allow you to customize your own:</p><p><code>transition</code> attribute allows you to customize the animation in which the tooltip shows or hides, and the default value is el-fade-in-linear.</p><p><code>disabled</code> attribute allows you to disable <code>tooltip</code>. You just need set it to <code>true</code>.</p><p>In fact, Tooltip is an extension based on <a href=\"https://github.com/element-component/vue-popper\">Vue-popper</a>, you can use any attribute that are allowed in Vue-popper.</p>", 5);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-tooltip :disabled=\"disabled\" content=\"click to close tooltip function\" placement=\"bottom\" effect=\"light\">\n    <el-button @click=\"disabled = !disabled\">click to {{disabled ? 'active' : 'close'}} tooltip function</el-button>\n  </el-tooltip>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        disabled: false\n      };\n    }\n  };\n</script>\n\n<style>\n  .slide-fade-enter-active {\n    transition: all .3s ease;\n  }\n  .slide-fade-leave-active {\n    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);\n  }\n  .slide-fade-enter, .expand-fade-leave-active {\n    margin-left: 20px;\n    opacity: 0;\n  }\n</style>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"tip\"><p>The <code>router-link</code> component is not supported in tooltip, please use <code>vm.$router.push</code>.</p><p>Disabled form elements are not supported for Tooltip, more information can be found at <a href=\"https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter\">MDN</a>. You need to wrap the disabled form element with a container element for Tooltip to work.</p></div><h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>append-to-body</td><td>whether to append Dialog itself to body. A nested Dialog should have this attribute set to <code>true</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>effect</td><td>Tooltip theme</td><td>string</td><td>dark/light</td><td>dark</td></tr><tr><td>content</td><td>display content, can be overridden by <code>slot#content</code></td><td>String</td><td>—</td><td>—</td></tr><tr><td>placement</td><td>position of Tooltip</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>value / v-model</td><td>visibility of Tooltip</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>whether Tooltip is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>offset</td><td>offset of the Tooltip</td><td>number</td><td>—</td><td>0</td></tr><tr><td>transition</td><td>animation name</td><td>string</td><td>—</td><td>el-fade-in-linear</td></tr><tr><td>visible-arrow</td><td>whether an arrow is displayed. For more information, check <a href=\"https://github.com/element-component/vue-popper\">Vue-popper</a> page</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>popper-options</td><td><a href=\"https://popper.js.org/documentation.html\">popper.js</a> parameters</td><td>Object</td><td>refer to <a href=\"https://popper.js.org/documentation.html\">popper.js</a> doc</td><td><code>{ boundariesElement: &#39;body&#39;, gpuAcceleration: false }</code></td></tr><tr><td>open-delay</td><td>delay of appearance, in millisecond</td><td>number</td><td>—</td><td>0</td></tr><tr><td>manual</td><td>whether to control Tooltip manually. <code>mouseenter</code> and <code>mouseleave</code> won&#39;t have effects if set to <code>true</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-class</td><td>custom class name for Tooltip&#39;s popper</td><td>string</td><td>—</td><td>—</td></tr><tr><td>enterable</td><td>whether the mouse can enter the tooltip</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>hide-after</td><td>timeout in milliseconds to hide tooltip</td><td>number</td><td>—</td><td>0</td></tr><tr><td>tabindex</td><td><a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\">tabindex</a> of Tooltip</td><td>number</td><td>—</td><td>0</td></tr></tbody></table>", 3);

function tooltipvue_type_template_id_295450f1_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", tooltipvue_type_template_id_295450f1_hoisted_1, [tooltipvue_type_template_id_295450f1_hoisted_2, tooltipvue_type_template_id_295450f1_hoisted_3, tooltipvue_type_template_id_295450f1_hoisted_4, tooltipvue_type_template_id_295450f1_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_295450f1_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_295450f1_hoisted_6];
    }),
    _: 1
  }), tooltipvue_type_template_id_295450f1_hoisted_8, tooltipvue_type_template_id_295450f1_hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_295450f1_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_295450f1_hoisted_10];
    }),
    _: 1
  }), tooltipvue_type_template_id_295450f1_hoisted_12, tooltipvue_type_template_id_295450f1_hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_295450f1_hoisted_15];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_295450f1_hoisted_14];
    }),
    _: 1
  }), tooltipvue_type_template_id_295450f1_hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_22]);
}
// CONCATENATED MODULE: ./website/docs/en-US/tooltip.md?vue&type=template&id=295450f1

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/tooltip.md?vue&type=script&lang=ts


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

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("top-start");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("top");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("top-end");

      var _hoisted_6 = {
        class: "left"
      };

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("left-start");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("left");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("left-end");

      var _hoisted_10 = {
        class: "right"
      };

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("right-start");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("right");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("right-end");

      var _hoisted_14 = {
        class: "bottom"
      };

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("bottom-start");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("bottom");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("bottom-end");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Top Left prompts info",
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
          content: "Top Center prompts info",
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
          content: "Top Right prompts info",
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
          content: "Left Top prompts info",
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
          content: "Left Center prompts info",
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
          content: "Left Bottom prompts info",
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
          content: "Right Top prompts info",
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
          content: "Right Center prompts info",
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
          content: "Right Bottom prompts info",
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
          content: "Bottom Left prompts info",
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
          content: "Bottom Center prompts info",
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
          content: "Bottom Right prompts info",
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" multiple lines");

      var _hoisted_2 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("second line ");

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
          content: "click to close tooltip function",
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
                return [_createTextVNode("click to " + _toDisplayString(_ctx.disabled ? 'active' : 'close') + " tooltip function", 1)];
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
// CONCATENATED MODULE: ./website/docs/en-US/tooltip.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/tooltip.md



tooltipvue_type_script_lang_ts.render = tooltipvue_type_template_id_295450f1_render

/* harmony default export */ var tooltip = __webpack_exports__["default"] = (tooltipvue_type_script_lang_ts);

/***/ })

}]);