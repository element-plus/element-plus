(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/steps.md?vue&type=template&id=076566a7

var stepsvue_type_template_id_076566a7_hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "steps"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#steps"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Steps")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Guide the user to complete tasks in accordance with the process. Its steps can be set according to the actual application scenario and the number of the steps can't be less than 2.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Basic usage")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Simple step bar.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "active"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute with "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" type, which indicates the index of steps and starts from 0. You can set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "space"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute when the width of the step needs to be fixed which accepts "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" type. The unit of the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "space"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute is "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "px"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". If not set, it is responsive. Setting the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "finish-status"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute can change the state of the steps that have been completed.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-steps :active=\"active\" finish-status=\"success\">\n  <el-step title=\"Step 1\"></el-step>\n  <el-step title=\"Step 2\"></el-step>\n  <el-step title=\"Step 3\"></el-step>\n</el-steps>\n\n<el-button style=\"margin-top: 12px;\" @click=\"next\">Next step</el-button>\n\n<script>\n  export default {\n    data() {\n      return {\n        active: 0\n      };\n    },\n\n    methods: {\n      next() {\n        if (this.active++ > 2) this.active = 0;\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "step-bar-that-contains-status"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#step-bar-that-contains-status"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Step bar that contains status")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Shows the status of the step for each step.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute to set the name of the step, or override the attribute by using a named "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". We have listed all the slot names for you at the end of this page.")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-steps :space=\"200\" :active=\"1\" finish-status=\"success\">\n  <el-step title=\"Done\"></el-step>\n  <el-step title=\"Processing\"></el-step>\n  <el-step title=\"Step 3\"></el-step>\n</el-steps>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "center"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#center"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Center")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Title and desription can be centered.", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-steps :active=\"2\" align-center>\n  <el-step title=\"Step 1\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 2\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 3\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 4\" description=\"Some description\"></el-step>\n</el-steps>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "step-bar-with-description"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#step-bar-with-description"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Step bar with description")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "There is description for each step.", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-steps :active=\"1\">\n  <el-step title=\"Step 1\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 2\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 3\" description=\"Some description\"></el-step>\n</el-steps>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "step-bar-with-icon"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#step-bar-with-icon"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Step bar with icon")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "A variety of custom icons can be used in the step bar.", -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("The icon is set by the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "icon"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" property. The types of icons can be found in the document for the Icon component. In addition, you can customize the icon through a named "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-steps :active=\"1\">\n  <el-step title=\"Step 1\" icon=\"el-icon-edit\"></el-step>\n  <el-step title=\"Step 2\" icon=\"el-icon-upload\"></el-step>\n  <el-step title=\"Step 3\" icon=\"el-icon-picture\"></el-step>\n</el-steps>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "vertical-step-bar"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vertical-step-bar"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Vertical step bar")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Vertical step bars.", -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("You only need to set the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute to"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, " vertical"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" in the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-steps"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" element.")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div style=\"height: 300px;\">\n  <el-steps direction=\"vertical\" :active=\"1\">\n    <el-step title=\"Step 1\"></el-step>\n    <el-step title=\"Step 2\"></el-step>\n    <el-step title=\"Step 3\"></el-step>\n  </el-steps>\n</div>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "simple-step-bar"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#simple-step-bar"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Simple step bar")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Simple step bars, where "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "align-center"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "description"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "space"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" will be ignored.")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "\n<el-steps :space=\"200\" :active=\"1\" simple>\n  <el-step title=\"Step 1\" icon=\"el-icon-edit\"></el-step>\n  <el-step title=\"Step 2\" icon=\"el-icon-upload\"></el-step>\n  <el-step title=\"Step 3\" icon=\"el-icon-picture\"></el-step>\n</el-steps>\n\n<el-steps :active=\"1\" finish-status=\"success\" simple style=\"margin-top: 20px\">\n  <el-step title=\"Step 1\" ></el-step>\n  <el-step title=\"Step 2\" ></el-step>\n  <el-step title=\"Step 3\" ></el-step>\n</el-steps>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"steps-attributes\"><a class=\"header-anchor\" href=\"#steps-attributes\">¶</a> Steps Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>space</td><td>the spacing of each step, will be responsive if omitted. Supports percentage.</td><td>number / string</td><td>—</td><td>—</td></tr><tr><td>direction</td><td>display direction</td><td>string</td><td>vertical/horizontal</td><td>horizontal</td></tr><tr><td>active</td><td>current activation step</td><td>number</td><td>—</td><td>0</td></tr><tr><td>process-status</td><td>status of current step</td><td>string</td><td>wait / process / finish / error / success</td><td>process</td></tr><tr><td>finish-status</td><td>status of end step</td><td>string</td><td>wait / process / finish / error / success</td><td>finish</td></tr><tr><td>align-center</td><td>center title and description</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>simple</td><td>whether to apply simple theme</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h3 id=\"step-attributes\"><a class=\"header-anchor\" href=\"#step-attributes\">¶</a> Step Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>step title</td><td>string</td><td>—</td><td>—</td></tr><tr><td>description</td><td>step description</td><td>string</td><td>—</td><td>—</td></tr><tr><td>icon</td><td>step icon</td><td>step icon&#39;s class name. Icons can be passed via named slot as well</td><td>string</td><td>—</td></tr><tr><td>status</td><td>current status. It will be automatically set by Steps if not configured.</td><td>wait / process / finish / error / success</td><td>-</td><td></td></tr></tbody></table><h3 id=\"step-slot\"><a class=\"header-anchor\" href=\"#step-slot\">¶</a> Step Slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>icon</td><td>custom icon</td></tr><tr><td>title</td><td>step title</td></tr><tr><td>description</td><td>step description</td></tr></tbody></table>", 6);

function stepsvue_type_template_id_076566a7_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", stepsvue_type_template_id_076566a7_hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_17];
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
  }), _hoisted_22, _hoisted_23, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_26, _hoisted_27, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), _hoisted_29]);
}
// CONCATENATED MODULE: ./website/docs/en-US/steps.md?vue&type=template&id=076566a7

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/steps.md?vue&type=script&lang=ts


/* harmony default export */ var stepsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Next step");

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_steps, {
          active: _ctx.active,
          "finish-status": "success"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "Step 1"
            }), _createVNode(_component_el_step, {
              title: "Step 2"
            }), _createVNode(_component_el_step, {
              title: "Step 3"
            })];
          }),
          _: 1
        }, 8, ["active"]), _createVNode(_component_el_button, {
          style: {
            "margin-top": "12px"
          },
          onClick: _ctx.next
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            active: 0
          };
        },
        methods: {
          next: function next() {
            if (this.active++ > 2) this.active = 0;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_steps, {
          space: 200,
          active: 1,
          "finish-status": "success"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "Done"
            }), _createVNode(_component_el_step, {
              title: "Processing"
            }), _createVNode(_component_el_step, {
              title: "Step 3"
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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_steps, {
          active: 2,
          "align-center": ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_steps, {
          active: 1
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "Step 1",
              description: "Some description"
            }), _createVNode(_component_el_step, {
              title: "Step 2",
              description: "Some description"
            }), _createVNode(_component_el_step, {
              title: "Step 3",
              description: "Some description"
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
    "element-demo4": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_steps, {
          active: 1
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "Step 1",
              icon: "el-icon-edit"
            }), _createVNode(_component_el_step, {
              title: "Step 2",
              icon: "el-icon-upload"
            }), _createVNode(_component_el_step, {
              title: "Step 3",
              icon: "el-icon-picture"
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
    "element-demo5": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "height": "300px"
        }
      };

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_steps, {
          direction: "vertical",
          active: 1
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "Step 1"
            }), _createVNode(_component_el_step, {
              title: "Step 2"
            }), _createVNode(_component_el_step, {
              title: "Step 3"
            })];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_step = _resolveComponent("el-step");

        var _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_steps, {
          space: 200,
          active: 1,
          simple: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "Step 1",
              icon: "el-icon-edit"
            }), _createVNode(_component_el_step, {
              title: "Step 2",
              icon: "el-icon-upload"
            }), _createVNode(_component_el_step, {
              title: "Step 3",
              icon: "el-icon-picture"
            })];
          }),
          _: 1
        }), _createVNode(_component_el_steps, {
          active: 1,
          "finish-status": "success",
          simple: "",
          style: {
            "margin-top": "20px"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_step, {
              title: "Step 1"
            }), _createVNode(_component_el_step, {
              title: "Step 2"
            }), _createVNode(_component_el_step, {
              title: "Step 3"
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
// CONCATENATED MODULE: ./website/docs/en-US/steps.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/steps.md



stepsvue_type_script_lang_ts.render = stepsvue_type_template_id_076566a7_render

/* harmony default export */ var steps = __webpack_exports__["default"] = (stepsvue_type_script_lang_ts);

/***/ })

}]);