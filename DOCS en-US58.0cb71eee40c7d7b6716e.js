(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/steps.md?vue&type=template&id=98131e76

const stepsvue_type_template_id_98131e76_hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Steps ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Guide the user to complete tasks in accordance with the process. Its steps can be set according to the actual application scenario and the number of the steps can't be less than 2.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic usage ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Simple step bar.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Set "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "active"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute with "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" type, which indicates the index of steps and starts from 0. You can set "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "space"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute when the width of the step needs to be fixed which accepts "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" type. The unit of the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "space"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute is "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "px"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". If not set, it is responsive. Setting the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "finish-status"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute can change the state of the steps that have been completed.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-steps :active=\"active\" finish-status=\"success\">\n  <el-step title=\"Step 1\"></el-step>\n  <el-step title=\"Step 2\"></el-step>\n  <el-step title=\"Step 3\"></el-step>\n</el-steps>\n\n<el-button style=\"margin-top: 12px;\" @click=\"next\">Next step</el-button>\n\n<script>\n  export default {\n    data() {\n      return {\n        active: 0,\n      }\n    },\n\n    methods: {\n      next() {\n        if (this.active++ > 2) this.active = 0\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Step bar that contains status ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Shows the status of the step for each step.", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute to set the name of the step, or override the attribute by using a named "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". We have listed all the slot names for you at the end of this page.")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-steps :space=\"200\" :active=\"1\" finish-status=\"success\">\n  <el-step title=\"Done\"></el-step>\n  <el-step title=\"Processing\"></el-step>\n  <el-step title=\"Step 3\"></el-step>\n</el-steps>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Center ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Title and desription can be centered.", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-steps :active=\"2\" align-center>\n  <el-step title=\"Step 1\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 2\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 3\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 4\" description=\"Some description\"></el-step>\n</el-steps>\n")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Step bar with description ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "There is description for each step.", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-steps :active=\"1\">\n  <el-step title=\"Step 1\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 2\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 3\" description=\"Some description\"></el-step>\n</el-steps>\n")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Step bar with icon ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "A variety of custom icons can be used in the step bar.", -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("The icon is set by the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "icon"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" property. The types of icons can be found in the document for the Icon component. In addition, you can customize the icon through a named "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-steps :active=\"1\">\n  <el-step title=\"Step 1\" icon=\"el-icon-edit\"></el-step>\n  <el-step title=\"Step 2\" icon=\"el-icon-upload\"></el-step>\n  <el-step title=\"Step 3\" icon=\"el-icon-picture\"></el-step>\n</el-steps>\n")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Vertical step bar ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Vertical step bars.", -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("You only need to set the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute to"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, " vertical"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" in the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-steps"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" element.")])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div style=\"height: 300px;\">\n  <el-steps direction=\"vertical\" :active=\"1\">\n    <el-step title=\"Step 1\"></el-step>\n    <el-step title=\"Step 2\"></el-step>\n    <el-step title=\"Step 3\"></el-step>\n  </el-steps>\n</div>\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Simple step bar ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Simple step bars, where "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "align-center"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "description"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "space"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" will be ignored.")], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-steps :space=\"200\" :active=\"1\" simple>\n  <el-step title=\"Step 1\" icon=\"el-icon-edit\"></el-step>\n  <el-step title=\"Step 2\" icon=\"el-icon-upload\"></el-step>\n  <el-step title=\"Step 3\" icon=\"el-icon-picture\"></el-step>\n</el-steps>\n\n<el-steps :active=\"1\" finish-status=\"success\" simple style=\"margin-top: 20px\">\n  <el-step title=\"Step 1\"></el-step>\n  <el-step title=\"Step 2\"></el-step>\n  <el-step title=\"Step 3\"></el-step>\n</el-steps>\n")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Steps Attributes ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>space</td><td>the spacing of each step, will be responsive if omitted. Supports percentage.</td><td>number / string</td><td>—</td><td>—</td></tr><tr><td>direction</td><td>display direction</td><td>string</td><td>vertical/horizontal</td><td>horizontal</td></tr><tr><td>active</td><td>current activation step</td><td>number</td><td>—</td><td>0</td></tr><tr><td>process-status</td><td>status of current step</td><td>string</td><td>wait / process / finish / error / success</td><td>process</td></tr><tr><td>finish-status</td><td>status of end step</td><td>string</td><td>wait / process / finish / error / success</td><td>finish</td></tr><tr><td>align-center</td><td>center title and description</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>simple</td><td>whether to apply simple theme</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Step Attributes ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>step title</td><td>string</td><td>—</td><td>—</td></tr><tr><td>description</td><td>step description</td><td>string</td><td>—</td><td>—</td></tr><tr><td>icon</td><td>step icon&#39;s class name. Icons can be passed via named slot as well</td><td>string</td><td>—</td><td>—</td></tr><tr><td>status</td><td>current status. It will be automatically set by Steps if not configured.</td><td>string</td><td>wait / process / finish / error / success</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Step Slots ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>icon</td><td>custom icon</td></tr><tr><td>title</td><td>step title</td></tr><tr><td>description</td><td>step description</td></tr></tbody></table>", 1);

function stepsvue_type_template_id_98131e76_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_element_demo5 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo5");

  const _component_element_demo6 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo6");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", stepsvue_type_template_id_98131e76_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "steps",
    content: "Steps",
    href: "#steps",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#steps"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "step-bar-that-contains-status",
    content: "Step bar that contains status",
    href: "#step-bar-that-contains-status",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#step-bar-that-contains-status"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "center",
    content: "Center",
    href: "#center",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#center"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "step-bar-with-description",
    content: "Step bar with description",
    href: "#step-bar-with-description",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#step-bar-with-description"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "step-bar-with-icon",
    content: "Step bar with icon",
    href: "#step-bar-with-icon",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#step-bar-with-icon"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "vertical-step-bar",
    content: "Vertical step bar",
    href: "#vertical-step-bar",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vertical-step-bar"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "simple-step-bar",
    content: "Simple step bar",
    href: "#simple-step-bar",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#simple-step-bar"
    })]),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "steps-attributes",
    content: "Steps Attributes",
    href: "#steps-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#steps-attributes"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "step-attributes",
    content: "Step Attributes",
    href: "#step-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#step-attributes"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "step-slots",
    content: "Step Slots",
    href: "#step-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#step-slots"
    })]),
    _: 1
  }), _hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/steps.md?vue&type=template&id=98131e76

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/steps.md?vue&type=script&lang=ts

/* harmony default export */ var stepsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Next step");

      function render(_ctx, _cache) {
        const _component_el_step = _resolveComponent("el-step");

        const _component_el_steps = _resolveComponent("el-steps");

        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_steps, {
          active: _ctx.active,
          "finish-status": "success"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_step, {
            title: "Step 1"
          }), _createVNode(_component_el_step, {
            title: "Step 2"
          }), _createVNode(_component_el_step, {
            title: "Step 3"
          })]),
          _: 1
        }, 8, ["active"]), _createVNode(_component_el_button, {
          style: {
            "margin-top": "12px"
          },
          onClick: _ctx.next
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        data() {
          return {
            active: 0
          };
        },

        methods: {
          next() {
            if (this.active++ > 2) this.active = 0;
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
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_step = _resolveComponent("el-step");

        const _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_steps, {
          space: 200,
          active: 1,
          "finish-status": "success"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_step, {
            title: "Done"
          }), _createVNode(_component_el_step, {
            title: "Processing"
          }), _createVNode(_component_el_step, {
            title: "Step 3"
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_step = _resolveComponent("el-step");

        const _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_steps, {
          active: 2,
          "align-center": ""
        }, {
          default: _withCtx(() => [_createVNode(_component_el_step, {
            title: "Step 1",
            description: "Some description"
          }), _createVNode(_component_el_step, {
            title: "Step 2",
            description: "Some description"
          }), _createVNode(_component_el_step, {
            title: "Step 3",
            description: "Some description"
          }), _createVNode(_component_el_step, {
            title: "Step 4",
            description: "Some description"
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_step = _resolveComponent("el-step");

        const _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_steps, {
          active: 1
        }, {
          default: _withCtx(() => [_createVNode(_component_el_step, {
            title: "Step 1",
            description: "Some description"
          }), _createVNode(_component_el_step, {
            title: "Step 2",
            description: "Some description"
          }), _createVNode(_component_el_step, {
            title: "Step 3",
            description: "Some description"
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
    "element-demo4": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_step = _resolveComponent("el-step");

        const _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_steps, {
          active: 1
        }, {
          default: _withCtx(() => [_createVNode(_component_el_step, {
            title: "Step 1",
            icon: "el-icon-edit"
          }), _createVNode(_component_el_step, {
            title: "Step 2",
            icon: "el-icon-upload"
          }), _createVNode(_component_el_step, {
            title: "Step 3",
            icon: "el-icon-picture"
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
    "element-demo5": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        style: {
          "height": "300px"
        }
      };

      function render(_ctx, _cache) {
        const _component_el_step = _resolveComponent("el-step");

        const _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_steps, {
          direction: "vertical",
          active: 1
        }, {
          default: _withCtx(() => [_createVNode(_component_el_step, {
            title: "Step 1"
          }), _createVNode(_component_el_step, {
            title: "Step 2"
          }), _createVNode(_component_el_step, {
            title: "Step 3"
          })]),
          _: 1
        })])]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo6": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_step = _resolveComponent("el-step");

        const _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_steps, {
          space: 200,
          active: 1,
          simple: ""
        }, {
          default: _withCtx(() => [_createVNode(_component_el_step, {
            title: "Step 1",
            icon: "el-icon-edit"
          }), _createVNode(_component_el_step, {
            title: "Step 2",
            icon: "el-icon-upload"
          }), _createVNode(_component_el_step, {
            title: "Step 3",
            icon: "el-icon-picture"
          })]),
          _: 1
        }), _createVNode(_component_el_steps, {
          active: 1,
          "finish-status": "success",
          simple: "",
          style: {
            "margin-top": "20px"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_step, {
            title: "Step 1"
          }), _createVNode(_component_el_step, {
            title: "Step 2"
          }), _createVNode(_component_el_step, {
            title: "Step 3"
          })]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/steps.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/steps.md



stepsvue_type_script_lang_ts.render = stepsvue_type_template_id_98131e76_render

/* harmony default export */ var steps = __webpack_exports__["default"] = (stepsvue_type_script_lang_ts);

/***/ })

}]);