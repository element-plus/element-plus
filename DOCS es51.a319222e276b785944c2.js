(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/scrollbar.md?vue&type=template&id=0287f2f0

var scrollbarvue_type_template_id_0287f2f0_hoisted_1 = {
  class: "content element-doc"
};

var scrollbarvue_type_template_id_0287f2f0_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h2", {
  id: "scrollbar"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#scrollbar"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Scrollbar")], -1);

var scrollbarvue_type_template_id_0287f2f0_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Used to replace the browser's native scrollbar.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Basic usage")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Use "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "height"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" property to set the height of the scrollbar, or if not set, it adapts according to the parent container height.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "\n<el-scrollbar height=\"400px\">\n  <p class=\"item\" v-for=\"item in 20\">{{ item }}</p>\n</el-scrollbar>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "horizontal-scroll"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#horizontal-scroll"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Horizontal scroll")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "When the element width is greater than the scrollbar width, the horizontal scrollbar is displayed.")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "\n<el-scrollbar>\n  <div class=\"flex-content\">\n    <p class=\"item\" v-for=\"item in 50\">{{ item }}</p>\n  </div>\n</el-scrollbar>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "max-height"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#max-height"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Max height")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "The scrollbar is displayed only when the element height exceeds the max height.")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <el-button @click=\"add\">Add Item</el-button>\n  <el-button @click=\"delete\">Delete Item</el-button>\n  <el-scrollbar max-height=\"400px\">\n    <p class=\"item\" v-for=\"item in count\">{{ item }}</p>\n  </el-scrollbar>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        count: 3\n      }\n    },\n    methods: {\n      add() {\n        this.count++\n      },\n      delete() {\n        if (this.count > 0) {\n          this.count--\n        }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "manual-scroll"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#manual-scroll"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Manual scroll")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Use "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "setScrollTop"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "setScrollLeft"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" methods can control scrollbar manually.")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <el-scrollbar ref=\"scrollbar\" height=\"400px\" always>\n    <div ref=\"inner\">\n      <p class=\"item\" v-for=\"item in 20\">{{ item }}</p>\n    </div>\n  </el-scrollbar>\n\n  <el-slider v-model=\"value\" @input=\"inputSlider\" :max=\"max\" :format-tooltip=\"formatTooltip\"></el-slider>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        max: 0,\n        value: 0\n      }\n    },\n    mounted() {\n      this.max = this.$refs.inner.clientHeight - 380\n    },\n    methods: {\n      inputSlider(value) {\n        this.$refs.scrollbar.setScrollTop(value)\n      },\n      formatTooltip(value) {\n        return `${value} px`\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"scrollbar-attributes\"><a class=\"header-anchor\" href=\"#scrollbar-attributes\">¶</a> Scrollbar Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>height</td><td>height of scrollbar</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>max-height</td><td>max height of scrollbar</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>native</td><td>whether to use the native scrollbar style</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>wrap-style</td><td>style of warp container</td><td>string</td><td>—</td><td>—</td></tr><tr><td>wrap-class</td><td>class of warp container</td><td>string</td><td>—</td><td>—</td></tr><tr><td>view-style</td><td>style of view</td><td>string</td><td>—</td><td>—</td></tr><tr><td>view-class</td><td>class of view</td><td>string</td><td>—</td><td>—</td></tr><tr><td>noresize</td><td>do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>tag</td><td>element tag of the view</td><td>string</td><td>—</td><td>div</td></tr><tr><td>always</td><td>always show scrollbar</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"scrollbar-events\"><a class=\"header-anchor\" href=\"#scrollbar-events\">¶</a> Scrollbar Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>scroll</td><td>triggers when scrolling</td><td>distance of scrolling { scrollLeft, scrollTop }</td></tr></tbody></table><h3 id=\"scrollbar-methods\"><a class=\"header-anchor\" href=\"#scrollbar-methods\">¶</a> Scrollbar Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>setScrollTop</td><td>Set distance to scroll top</td><td>(scrollTop: number)</td></tr><tr><td>setScrollLeft</td><td>Set distance to scroll left</td><td>(scrollLeft: number)</td></tr></tbody></table>", 6);

function scrollbarvue_type_template_id_0287f2f0_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", scrollbarvue_type_template_id_0287f2f0_hoisted_1, [scrollbarvue_type_template_id_0287f2f0_hoisted_2, scrollbarvue_type_template_id_0287f2f0_hoisted_3, _hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/scrollbar.md?vue&type=template&id=0287f2f0

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/scrollbar.md?vue&type=script&lang=ts


/* harmony default export */ var scrollbarvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */];
      var _hoisted_1 = {
        class: "item"
      };

      function render(_ctx, _cache) {
        var _component_el_scrollbar = _resolveComponent("el-scrollbar");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_scrollbar, {
          height: "400px"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(20, function (item) {
              return _createVNode("p", _hoisted_1, _toDisplayString(item), 1);
            }), 64))];
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
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */];
      var _hoisted_1 = {
        class: "flex-content"
      };
      var _hoisted_2 = {
        class: "item"
      };

      function render(_ctx, _cache) {
        var _component_el_scrollbar = _resolveComponent("el-scrollbar");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_scrollbar, null, {
          default: _withCtx(function () {
            return [_createVNode("div", _hoisted_1, [(_openBlock(), _createBlock(_Fragment, null, _renderList(50, function (item) {
              return _createVNode("p", _hoisted_2, _toDisplayString(item), 1);
            }), 64))])];
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
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Add Item");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Delete Item");

      var _hoisted_3 = {
        class: "item"
      };

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_scrollbar = _resolveComponent("el-scrollbar");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          onClick: _ctx.add
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          onClick: _ctx.delete
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_scrollbar, {
          "max-height": "400px"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.count, function (item) {
              return _openBlock(), _createBlock("p", _hoisted_3, _toDisplayString(item), 1);
            }), 256))];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            count: 3
          };
        },
        methods: {
          add: function add() {
            this.count++;
          },
          delete: function _delete() {
            if (this.count > 0) {
              this.count--;
            }
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */];
      var _hoisted_1 = {
        ref: "inner"
      };
      var _hoisted_2 = {
        class: "item"
      };

      function render(_ctx, _cache) {
        var _component_el_scrollbar = _resolveComponent("el-scrollbar");

        var _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_scrollbar, {
          ref: "scrollbar",
          height: "400px",
          always: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode("div", _hoisted_1, [(_openBlock(), _createBlock(_Fragment, null, _renderList(20, function (item) {
              return _createVNode("p", _hoisted_2, _toDisplayString(item), 1);
            }), 64))], 512)];
          }),
          _: 1
        }, 512), _createVNode(_component_el_slider, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          onInput: _ctx.inputSlider,
          max: _ctx.max,
          "format-tooltip": _ctx.formatTooltip
        }, null, 8, ["modelValue", "onInput", "max", "format-tooltip"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            max: 0,
            value: 0
          };
        },
        mounted: function mounted() {
          this.max = this.$refs.inner.clientHeight - 380;
        },
        methods: {
          inputSlider: function inputSlider(value) {
            this.$refs.scrollbar.setScrollTop(value);
          },
          formatTooltip: function formatTooltip(value) {
            return value + " px";
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/scrollbar.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/scrollbar.md



scrollbarvue_type_script_lang_ts.render = scrollbarvue_type_template_id_0287f2f0_render

/* harmony default export */ var scrollbar = __webpack_exports__["default"] = (scrollbarvue_type_script_lang_ts);

/***/ })

}]);