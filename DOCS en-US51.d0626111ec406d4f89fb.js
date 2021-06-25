(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/scrollbar.md?vue&type=template&id=6d6334eb

var scrollbarvue_type_template_id_6d6334eb_hoisted_1 = {
  class: "content element-doc"
};

var scrollbarvue_type_template_id_6d6334eb_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "scrollbar"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#scrollbar"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Scrollbar")], -1);

var scrollbarvue_type_template_id_6d6334eb_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Used to replace the browser's native scrollbar.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Basic usage")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "height"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" property to set the height of the scrollbar, or if not set, it adapts according to the parent container height.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-scrollbar height=\"400px\">\n  <p class=\"item\" v-for=\"item in 20\">{{ item }}</p>\n</el-scrollbar>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "horizontal-scroll"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#horizontal-scroll"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Horizontal scroll")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "When the element width is greater than the scrollbar width, the horizontal scrollbar is displayed.")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-scrollbar>\n  <div class=\"flex-content\">\n    <p class=\"item\" v-for=\"item in 50\">{{ item }}</p>\n  </div>\n</el-scrollbar>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "max-height"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#max-height"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Max height")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "The scrollbar is displayed only when the element height exceeds the max height.")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button @click=\"add\">Add Item</el-button>\n  <el-button @click=\"delete\">Delete Item</el-button>\n  <el-scrollbar max-height=\"400px\">\n    <p class=\"item\" v-for=\"item in count\">{{ item }}</p>\n  </el-scrollbar>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        count: 3\n      }\n    },\n    methods: {\n      add() {\n        this.count++\n      },\n      delete() {\n        if (this.count > 0) {\n          this.count--\n        }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"scrollbar-attributes\"><a class=\"header-anchor\" href=\"#scrollbar-attributes\">¶</a> Scrollbar Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>height</td><td>height of scrollbar</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>max-height</td><td>max height of scrollbar</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>native</td><td>whether to use the native scrollbar style</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>wrap-style</td><td>style of warp container</td><td>string</td><td>—</td><td>—</td></tr><tr><td>wrap-class</td><td>class of warp container</td><td>string</td><td>—</td><td>—</td></tr><tr><td>view-style</td><td>style of view</td><td>string</td><td>—</td><td>—</td></tr><tr><td>view-class</td><td>class of view</td><td>string</td><td>—</td><td>—</td></tr><tr><td>noresize</td><td>do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>tag</td><td>element tag of the view</td><td>string</td><td>—</td><td>div</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>scroll</td><td>triggers when scrolling</td><td>distance of scrolling { scrollLeft, scrollTop }</td></tr></tbody></table>", 4);

function scrollbarvue_type_template_id_6d6334eb_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", scrollbarvue_type_template_id_6d6334eb_hoisted_1, [scrollbarvue_type_template_id_6d6334eb_hoisted_2, scrollbarvue_type_template_id_6d6334eb_hoisted_3, _hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/scrollbar.md?vue&type=template&id=6d6334eb

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/scrollbar.md?vue&type=script&lang=ts


/* harmony default export */ var scrollbarvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */];
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
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */];
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
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */];

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
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/scrollbar.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/scrollbar.md



scrollbarvue_type_script_lang_ts.render = scrollbarvue_type_template_id_6d6334eb_render

/* harmony default export */ var scrollbar = __webpack_exports__["default"] = (scrollbarvue_type_script_lang_ts);

/***/ })

}]);