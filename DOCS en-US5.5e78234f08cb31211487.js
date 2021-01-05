(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/breadcrumb.md?vue&type=template&id=005dcf01

var breadcrumbvue_type_template_id_005dcf01_hoisted_1 = {
  class: "content element-doc"
};

var breadcrumbvue_type_template_id_005dcf01_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "breadcrumb"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#breadcrumb"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Breadcrumb")], -1);

var breadcrumbvue_type_template_id_005dcf01_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Displays the location of the current page, making it easier to browser back.", -1);

var breadcrumbvue_type_template_id_005dcf01_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Basic usage")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("In "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-breadcrumb"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", each "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-breadcrumb-item"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" is a tag that stands for every level starting from homepage. This component has a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "separator"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", and it determines the separator. Its default value is '/'.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-breadcrumb separator=\"/\">\n  <el-breadcrumb-item :to=\"{ path: '/' }\">homepage</el-breadcrumb-item>\n  <el-breadcrumb-item><a href=\"/\">promotion management</a></el-breadcrumb-item>\n  <el-breadcrumb-item>promotion list</el-breadcrumb-item>\n  <el-breadcrumb-item>promotion detail</el-breadcrumb-item>\n</el-breadcrumb>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "icon-separator"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#icon-separator"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Icon separator")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "separator-class"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "iconfont"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" as the separator，it will cover "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "separator")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-breadcrumb separator-class=\"el-icon-arrow-right\">\n  <el-breadcrumb-item :to=\"{ path: '/' }\">homepage</el-breadcrumb-item>\n  <el-breadcrumb-item>promotion management</el-breadcrumb-item>\n  <el-breadcrumb-item>promotion list</el-breadcrumb-item>\n  <el-breadcrumb-item>promotion detail</el-breadcrumb-item>\n</el-breadcrumb>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"breadcrumb-attributes\"><a class=\"header-anchor\" href=\"#breadcrumb-attributes\">¶</a> Breadcrumb Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>separator</td><td>separator character</td><td>string</td><td>—</td><td>/</td></tr><tr><td>separator-class</td><td>class name of icon separator</td><td>string</td><td>—</td><td>-</td></tr></tbody></table><h3 id=\"breadcrumb-item-attributes\"><a class=\"header-anchor\" href=\"#breadcrumb-item-attributes\">¶</a> Breadcrumb Item Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>to</td><td>target route of the link, same as <code>to</code> of <code>vue-router</code></td><td>string/object</td><td>—</td><td>—</td></tr><tr><td>replace</td><td>if <code>true</code>, the navigation will not leave a history record</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 4);

function breadcrumbvue_type_template_id_005dcf01_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", breadcrumbvue_type_template_id_005dcf01_hoisted_1, [breadcrumbvue_type_template_id_005dcf01_hoisted_2, breadcrumbvue_type_template_id_005dcf01_hoisted_3, breadcrumbvue_type_template_id_005dcf01_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_10]);
}
// CONCATENATED MODULE: ./website/docs/en-US/breadcrumb.md?vue&type=template&id=005dcf01

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/breadcrumb.md?vue&type=script&lang=ts


/* harmony default export */ var breadcrumbvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("homepage");

      var _hoisted_2 = /*#__PURE__*/_createVNode("a", {
        href: "/"
      }, "promotion management", -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("promotion list");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("promotion detail");

      function render(_ctx, _cache) {
        var _component_el_breadcrumb_item = _resolveComponent("el-breadcrumb-item");

        var _component_el_breadcrumb = _resolveComponent("el-breadcrumb");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_breadcrumb, {
          separator: "/"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_breadcrumb_item, {
              to: {
                path: '/'
              }
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_breadcrumb_item, null, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_breadcrumb_item, null, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_breadcrumb_item, null, {
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
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("homepage");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("promotion management");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("promotion list");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("promotion detail");

      function render(_ctx, _cache) {
        var _component_el_breadcrumb_item = _resolveComponent("el-breadcrumb-item");

        var _component_el_breadcrumb = _resolveComponent("el-breadcrumb");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_breadcrumb, {
          "separator-class": "el-icon-arrow-right"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_breadcrumb_item, {
              to: {
                path: '/'
              }
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_breadcrumb_item, null, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_breadcrumb_item, null, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_breadcrumb_item, null, {
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
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/breadcrumb.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/breadcrumb.md



breadcrumbvue_type_script_lang_ts.render = breadcrumbvue_type_template_id_005dcf01_render

/* harmony default export */ var breadcrumb = __webpack_exports__["default"] = (breadcrumbvue_type_script_lang_ts);

/***/ })

}]);