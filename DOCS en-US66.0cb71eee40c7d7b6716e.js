(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/tooltip.md?vue&type=template&id=eb2ff8e6

const tooltipvue_type_template_id_eb2ff8e6_hoisted_1 = {
  class: "content element-doc"
};

const tooltipvue_type_template_id_eb2ff8e6_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tooltip ");

const tooltipvue_type_template_id_eb2ff8e6_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Display prompt information for mouse hover.", -1);

const tooltipvue_type_template_id_eb2ff8e6_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic usage ");

const tooltipvue_type_template_id_eb2ff8e6_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Tooltip has 9 placements.", -1);

const tooltipvue_type_template_id_eb2ff8e6_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use attribute "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to set the display content when hover. The attribute "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "placement"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" determines the position of the tooltip. Its value is "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "[orientation]-[alignment]"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" with four orientations "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "right"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "bottom"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and three alignments "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "start"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "end"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "null"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", and the default alignment is null. Take "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "placement=\"left-end\""), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" for example, Tooltip will display on the left of the element which you are hovering and the bottom of the tooltip aligns with the bottom of the element.")])], -1);

const tooltipvue_type_template_id_eb2ff8e6_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"box\">\n  <div class=\"top\">\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Top Left prompts info\"\n      placement=\"top-start\"\n    >\n      <el-button>top-start</el-button>\n    </el-tooltip>\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Top Center prompts info\"\n      placement=\"top\"\n    >\n      <el-button>top</el-button>\n    </el-tooltip>\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Top Right prompts info\"\n      placement=\"top-end\"\n    >\n      <el-button>top-end</el-button>\n    </el-tooltip>\n  </div>\n  <div class=\"left\">\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Left Top prompts info\"\n      placement=\"left-start\"\n    >\n      <el-button>left-start</el-button>\n    </el-tooltip>\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Left Center prompts info\"\n      placement=\"left\"\n    >\n      <el-button>left</el-button>\n    </el-tooltip>\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Left Bottom prompts info\"\n      placement=\"left-end\"\n    >\n      <el-button>left-end</el-button>\n    </el-tooltip>\n  </div>\n\n  <div class=\"right\">\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Right Top prompts info\"\n      placement=\"right-start\"\n    >\n      <el-button>right-start</el-button>\n    </el-tooltip>\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Right Center prompts info\"\n      placement=\"right\"\n    >\n      <el-button>right</el-button>\n    </el-tooltip>\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Right Bottom prompts info\"\n      placement=\"right-end\"\n    >\n      <el-button>right-end</el-button>\n    </el-tooltip>\n  </div>\n  <div class=\"bottom\">\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Bottom Left prompts info\"\n      placement=\"bottom-start\"\n    >\n      <el-button>bottom-start</el-button>\n    </el-tooltip>\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Bottom Center prompts info\"\n      placement=\"bottom\"\n    >\n      <el-button>bottom</el-button>\n    </el-tooltip>\n    <el-tooltip\n      class=\"item\"\n      effect=\"dark\"\n      content=\"Bottom Right prompts info\"\n      placement=\"bottom-end\"\n    >\n      <el-button>bottom-end</el-button>\n    </el-tooltip>\n  </div>\n</div>\n\n<style>\n  .box {\n    width: 400px;\n\n    .top {\n      text-align: center;\n    }\n\n    .left {\n      float: left;\n      width: 110px;\n    }\n\n    .right {\n      float: right;\n      width: 110px;\n    }\n\n    .bottom {\n      clear: both;\n      text-align: center;\n    }\n\n    .item {\n      margin: 4px;\n    }\n\n    .left .el-tooltip__popper,\n    .right .el-tooltip__popper {\n      padding: 8px 10px;\n    }\n\n    .el-button {\n      width: 110px;\n    }\n  }\n</style>\n")], -1);

const tooltipvue_type_template_id_eb2ff8e6_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Theme ");

const tooltipvue_type_template_id_eb2ff8e6_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tooltip has two themes: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "light"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。")], -1);

const tooltipvue_type_template_id_eb2ff8e6_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Set "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "effect"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to modify theme, and the default value is "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const tooltipvue_type_template_id_eb2ff8e6_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tooltip content=\"Top center\" placement=\"top\">\n  <el-button>Dark</el-button>\n</el-tooltip>\n<el-tooltip content=\"Bottom center\" placement=\"bottom\" effect=\"light\">\n  <el-button>Light</el-button>\n</el-tooltip>\n")], -1);

const tooltipvue_type_template_id_eb2ff8e6_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("More Content ");

const tooltipvue_type_template_id_eb2ff8e6_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Display multiple lines of text and set their format.", -1);

const tooltipvue_type_template_id_eb2ff8e6_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Override attribute "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" of "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" by adding a slot named "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const tooltipvue_type_template_id_eb2ff8e6_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tooltip placement=\"top\">\n  <template #content> multiple lines<br />second line </template>\n  <el-button>Top center</el-button>\n</el-tooltip>\n")], -1);

const tooltipvue_type_template_id_eb2ff8e6_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Advanced usage ");

const tooltipvue_type_template_id_eb2ff8e6_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "In addition to basic usages, there are some attributes that allow you to customize your own:", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "transition"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute allows you to customize the animation in which the tooltip shows or hides, and the default value is el-fade-in-linear.")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute allows you to disable "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". You just need set it to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("In fact, Tooltip is an extension based on ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Vue-popper");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", you can use any attribute that are allowed in Vue-popper.");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-tooltip\n    :disabled=\"disabled\"\n    content=\"click to close tooltip function\"\n    placement=\"bottom\"\n    effect=\"light\"\n  >\n    <el-button @click=\"disabled = !disabled\"\n      >click to {{disabled ? 'active' : 'close'}} tooltip function</el-button\n    >\n  </el-tooltip>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        disabled: false,\n      }\n    },\n  }\n</script>\n\n<style>\n  .slide-fade-enter-active {\n    transition: all 0.3s ease;\n  }\n  .slide-fade-leave-active {\n    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);\n  }\n  .slide-fade-enter,\n  .expand-fade-leave-active {\n    margin-left: 20px;\n    opacity: 0;\n  }\n</style>\n")], -1);

const _hoisted_24 = {
  class: "tip"
};

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("The "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "router-link"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" component is not supported in tooltip, please use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "vm.$router.push"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Disabled form elements are not supported for Tooltip, more information can be found at ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("MDN");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". You need to wrap the disabled form element with a container element for Tooltip to work.");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Attribute"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Accepted Values"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Default")])], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("whether to append Dialog itself to body. A nested Dialog should have this attribute set to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true")], -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "effect"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Tooltip theme"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "dark/light"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "dark")], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("display content, can be overridden by "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot#content")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "placement"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "position of Tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "bottom")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "model-value / v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "visibility of Tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether Tooltip is disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "offset of the Tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0")], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "transition"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "animation name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "el-fade-in-linear")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "visible-arrow", -1);

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("whether an arrow is displayed. For more information, check ");

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Vue-popper");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" page");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean", -1);

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true", -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "popper-options", -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("popper.js");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" parameters");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Object", -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("refer to ");

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("popper.js");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" doc");

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "{ boundariesElement: 'body', gpuAcceleration: false }")], -1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "show-after"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "delay of appearance, in millisecond"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0")], -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hide-after"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "delay of disappear, in millisecond"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0")], -1);

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "auto-close"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "timeout in milliseconds to hide tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0")], -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "manual"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("whether to control Tooltip manually. "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "mouseenter"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "mouseleave"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" won't have effects if set to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "popper-class"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "custom class name for Tooltip's popper"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "enterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether the mouse can enter the tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true")], -1);

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "tabindex", -1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("tabindex");

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" of Tooltip");

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number", -1);

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0", -1);

function tooltipvue_type_template_id_eb2ff8e6_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", tooltipvue_type_template_id_eb2ff8e6_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tooltip",
    content: "Tooltip",
    href: "#tooltip",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_eb2ff8e6_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tooltip"
    })]),
    _: 1
  }), tooltipvue_type_template_id_eb2ff8e6_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_eb2ff8e6_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), tooltipvue_type_template_id_eb2ff8e6_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_eb2ff8e6_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_eb2ff8e6_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "theme",
    content: "Theme",
    href: "#theme",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_eb2ff8e6_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#theme"
    })]),
    _: 1
  }), tooltipvue_type_template_id_eb2ff8e6_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_eb2ff8e6_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_eb2ff8e6_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "more-content",
    content: "More Content",
    href: "#more-content",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_eb2ff8e6_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#more-content"
    })]),
    _: 1
  }), tooltipvue_type_template_id_eb2ff8e6_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_eb2ff8e6_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_eb2ff8e6_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "advanced-usage",
    content: "Advanced usage",
    href: "#advanced-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tooltipvue_type_template_id_eb2ff8e6_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#advanced-usage"
    })]),
    _: 1
  }), tooltipvue_type_template_id_eb2ff8e6_hoisted_17, _hoisted_18, _hoisted_19, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-component/vue-popper"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), _hoisted_22]), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_24, [_hoisted_25, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27]),
    _: 1
  }), _hoisted_28])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("table", null, [_hoisted_30, Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [_hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_39, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-component/vue-popper"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41]),
    _: 1
  }), _hoisted_42]), _hoisted_43, _hoisted_44, _hoisted_45]), Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_46, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://popper.js.org/documentation.html"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_47]),
    _: 1
  }), _hoisted_48]), _hoisted_49, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_50, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://popper.js.org/documentation.html"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_51]),
    _: 1
  }), _hoisted_52]), _hoisted_53]), _hoisted_54, _hoisted_55, _hoisted_56, _hoisted_57, _hoisted_58, _hoisted_59, Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_60, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_61]),
    _: 1
  }), _hoisted_62]), _hoisted_63, _hoisted_64, _hoisted_65])])]), Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/tooltip.md?vue&type=template&id=eb2ff8e6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/tooltip.md?vue&type=script&lang=ts

/* harmony default export */ var tooltipvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "box"
      };
      const _hoisted_2 = {
        class: "top"
      };

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("top-start");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("top");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("top-end");

      const _hoisted_6 = {
        class: "left"
      };

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("left-start");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("left");

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("left-end");

      const _hoisted_10 = {
        class: "right"
      };

      const _hoisted_11 = /*#__PURE__*/_createTextVNode("right-start");

      const _hoisted_12 = /*#__PURE__*/_createTextVNode("right");

      const _hoisted_13 = /*#__PURE__*/_createTextVNode("right-end");

      const _hoisted_14 = {
        class: "bottom"
      };

      const _hoisted_15 = /*#__PURE__*/_createTextVNode("bottom-start");

      const _hoisted_16 = /*#__PURE__*/_createTextVNode("bottom");

      const _hoisted_17 = /*#__PURE__*/_createTextVNode("bottom-end");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createElementVNode("div", _hoisted_2, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Top Left prompts info",
          placement: "top-start"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Top Center prompts info",
          placement: "top"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Top Right prompts info",
          placement: "top-end"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          })]),
          _: 1
        })]), _createElementVNode("div", _hoisted_6, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Left Top prompts info",
          placement: "left-start"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_7]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Left Center prompts info",
          placement: "left"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_8]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Left Bottom prompts info",
          placement: "left-end"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_9]),
            _: 1
          })]),
          _: 1
        })]), _createElementVNode("div", _hoisted_10, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Right Top prompts info",
          placement: "right-start"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_11]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Right Center prompts info",
          placement: "right"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_12]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Right Bottom prompts info",
          placement: "right-end"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_13]),
            _: 1
          })]),
          _: 1
        })]), _createElementVNode("div", _hoisted_14, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Bottom Left prompts info",
          placement: "bottom-start"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_15]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Bottom Center prompts info",
          placement: "bottom"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_16]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Bottom Right prompts info",
          placement: "bottom-end"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_17]),
            _: 1
          })]),
          _: 1
        })])])]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Dark");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Light");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tooltip, {
          content: "Top center",
          placement: "top"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          content: "Bottom center",
          placement: "bottom",
          effect: "light"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_2]),
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" multiple lines");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("br", null, null, -1);

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("second line ");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Top center");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tooltip, {
          placement: "top"
        }, {
          content: _withCtx(() => [_hoisted_1, _hoisted_2, _hoisted_3]),
          default: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_4]),
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
    }(),
    "element-demo3": function () {
      const {
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tooltip, {
          disabled: _ctx.disabled,
          content: "click to close tooltip function",
          placement: "bottom",
          effect: "light"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            onClick: _cache[0] || (_cache[0] = $event => _ctx.disabled = !_ctx.disabled)
          }, {
            default: _withCtx(() => [_createTextVNode("click to " + _toDisplayString(_ctx.disabled ? 'active' : 'close') + " tooltip function", 1)]),
            _: 1
          })]),
          _: 1
        }, 8, ["disabled"])]);
      }

      const democomponentExport = {
        data() {
          return {
            disabled: false
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
// CONCATENATED MODULE: ./website/docs/en-US/tooltip.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/tooltip.md



tooltipvue_type_script_lang_ts.render = tooltipvue_type_template_id_eb2ff8e6_render

/* harmony default export */ var tooltip = __webpack_exports__["default"] = (tooltipvue_type_script_lang_ts);

/***/ })

}]);