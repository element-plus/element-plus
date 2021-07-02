(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[285],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/affix.md?vue&type=template&id=d796cd68

var affixvue_type_template_id_d796cd68_hoisted_1 = {
  class: "content element-doc"
};

var affixvue_type_template_id_d796cd68_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "affix-gu-ding"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#affix-gu-ding"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Affix 固钉")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "将页面元素固定在特定可视区域。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "ji-ben-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 基本用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "固钉默认固定在页面顶部。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性来改变吸顶距离，默认值为 0。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<el-affix :offset=\"120\">\n  <el-button type=\"primary\">距离顶部 120px</el-button>\n</el-affix>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "zhi-ding-rong-qi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zhi-ding-rong-qi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 指定容器")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "target"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性，让固钉始终保持在容器内，超过范围则隐藏。")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "请注意容器避免出现滚动条。")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"affix-container\">\n  <el-affix target=\".affix-container\" :offset=\"80\">\n    <el-button type=\"primary\">指定容器</el-button>\n  </el-affix>\n</div>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "gu-ding-wei-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#gu-ding-wei-zhi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 固定位置")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Affix 组件提供了两个固定位置："), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "bottom"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("。")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("通过设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "position"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性来改变固定位置，默认值为 "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 。")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<el-affix position=\"bottom\" :offset=\"20\">\n  <el-button type=\"primary\">距离底部 20px</el-button>\n</el-affix>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>offset</td><td>偏移距离</td><td>number</td><td>—</td><td>0</td></tr><tr><td>position</td><td>固钉位置</td><td>string</td><td>top / bottom</td><td>top</td></tr><tr><td>target</td><td>指定容器（CSS 选择器）</td><td>string</td><td>—</td><td>—</td></tr><tr><td>z-index</td><td>固钉层级</td><td>number</td><td>—</td><td>100</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>固钉状态改变时触发的事件</td><td>(value: boolean)</td></tr><tr><td>scroll</td><td>滚动时触发的事件</td><td>滚动距离和固钉状态</td></tr></tbody></table>", 4);

function affixvue_type_template_id_d796cd68_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo2");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", affixvue_type_template_id_d796cd68_hoisted_1, [affixvue_type_template_id_d796cd68_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/affix.md?vue&type=template&id=d796cd68

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/affix.md?vue&type=script&lang=ts


/* harmony default export */ var affixvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("距离顶部 120px");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_affix = _resolveComponent("el-affix");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_affix, {
          offset: 120
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              type: "primary"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
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
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];
      var _hoisted_1 = {
        class: "affix-container"
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("指定容器");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_affix = _resolveComponent("el-affix");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_affix, {
          target: ".affix-container",
          offset: 80
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              type: "primary"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
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
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("距离底部 20px");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_affix = _resolveComponent("el-affix");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_affix, {
          position: "bottom",
          offset: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              type: "primary"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
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
// CONCATENATED MODULE: ./website/docs/zh-CN/affix.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/affix.md



affixvue_type_script_lang_ts.render = affixvue_type_template_id_d796cd68_render

/* harmony default export */ var affix = __webpack_exports__["default"] = (affixvue_type_script_lang_ts);

/***/ })

}]);