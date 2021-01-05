(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[241],{

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/breadcrumb.md?vue&type=template&id=145a6c23

var breadcrumbvue_type_template_id_145a6c23_hoisted_1 = {
  class: "content element-doc"
};

var breadcrumbvue_type_template_id_145a6c23_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "breadcrumb-mian-bao-xie"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#breadcrumb-mian-bao-xie"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Breadcrumb 面包屑")], -1);

var breadcrumbvue_type_template_id_145a6c23_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "显示当前页面的路径，快速返回之前的任意页面。", -1);

var breadcrumbvue_type_template_id_145a6c23_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "适用广泛的基础用法。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("在"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-breadcrumb"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("中使用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-breadcrumb-item"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("标签表示从首页开始的每一级。Element Plus 提供了一个"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "separator"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性，在"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-breadcrumb"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("标签中设置它来决定分隔符，它只能是字符串，默认为斜杠"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "/"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-breadcrumb separator=\"/\">\n  <el-breadcrumb-item :to=\"{ path: '/' }\">首页</el-breadcrumb-item>\n  <el-breadcrumb-item><a href=\"/\">活动管理</a></el-breadcrumb-item>\n  <el-breadcrumb-item>活动列表</el-breadcrumb-item>\n  <el-breadcrumb-item>活动详情</el-breadcrumb-item>\n</el-breadcrumb>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tu-biao-fen-ge-fu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tu-biao-fen-ge-fu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 图标分隔符")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("通过设置 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "separator-class"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 可使用相应的 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "iconfont"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 作为分隔符，注意这将使 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "separator"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 设置失效")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-breadcrumb separator-class=\"el-icon-arrow-right\">\n  <el-breadcrumb-item :to=\"{ path: '/' }\">首页</el-breadcrumb-item>\n  <el-breadcrumb-item>活动管理</el-breadcrumb-item>\n  <el-breadcrumb-item>活动列表</el-breadcrumb-item>\n  <el-breadcrumb-item>活动详情</el-breadcrumb-item>\n</el-breadcrumb>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"breadcrumb-attributes\"><a class=\"header-anchor\" href=\"#breadcrumb-attributes\">¶</a> Breadcrumb Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>separator</td><td>分隔符</td><td>string</td><td>—</td><td>斜杠&#39;/&#39;</td></tr><tr><td>separator-class</td><td>图标分隔符 class</td><td>string</td><td>—</td><td>-</td></tr></tbody></table><h3 id=\"breadcrumb-item-attributes\"><a class=\"header-anchor\" href=\"#breadcrumb-item-attributes\">¶</a> Breadcrumb Item Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>to</td><td>路由跳转对象，同 <code>vue-router</code> 的 <code>to</code></td><td>string/object</td><td>—</td><td>—</td></tr><tr><td>replace</td><td>在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 4);

function breadcrumbvue_type_template_id_145a6c23_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", breadcrumbvue_type_template_id_145a6c23_hoisted_1, [breadcrumbvue_type_template_id_145a6c23_hoisted_2, breadcrumbvue_type_template_id_145a6c23_hoisted_3, breadcrumbvue_type_template_id_145a6c23_hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_11]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/breadcrumb.md?vue&type=template&id=145a6c23

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/breadcrumb.md?vue&type=script&lang=ts


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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("首页");

      var _hoisted_2 = /*#__PURE__*/_createVNode("a", {
        href: "/"
      }, "活动管理", -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("活动列表");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("活动详情");

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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("首页");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("活动管理");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("活动列表");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("活动详情");

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
// CONCATENATED MODULE: ./website/docs/zh-CN/breadcrumb.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/breadcrumb.md



breadcrumbvue_type_script_lang_ts.render = breadcrumbvue_type_template_id_145a6c23_render

/* harmony default export */ var breadcrumb = __webpack_exports__["default"] = (breadcrumbvue_type_script_lang_ts);

/***/ })

}]);