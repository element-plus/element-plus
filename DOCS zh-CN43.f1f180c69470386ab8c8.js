(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[328],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/page-header.md?vue&type=template&id=15377e42

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("PageHeader 页头 ");

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("基础用法 ");

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-page-header @back=\"goBack\" content=\"详情页面\">\n</el-page-header>\n\n<script>\n  export default {\n    methods: {\n      goBack() {\n        console.log('go back');\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const goBack = () => {\n        console.log('go back');\n      };\n\n      return {\n        goBack,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("自定义图标 ");

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-page-header icon=\"el-icon-arrow-left\" content=\"详情页面\"></el-page-header>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Attributes ");

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>icon</td><td>图标</td><td>string</td><td>—</td><td>el-icon-back</td></tr><tr><td>title</td><td>标题</td><td>string</td><td>—</td><td>返回</td></tr><tr><td>content</td><td>内容</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Events ");

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "事件名称"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "说明"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "回调参数")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "back"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "点击左侧区域触发"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")])])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Slots ");

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>事件名称</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td>自定义图标</td></tr><tr><td>title</td><td>标题内容</td></tr><tr><td>content</td><td>内容</td></tr></tbody></table>", 1);

function page_headervue_type_template_id_15377e42_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", _hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "pageheader-ye-tou",
    content: "PageHeader 页头",
    href: "#pageheader-ye-tou",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#pageheader-ye-tou"
      })];
    }),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ji-chu-yong-fa"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "zi-ding-yi-tu-biao",
    content: "自定义图标",
    href: "#zi-ding-yi-tu-biao",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_6, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#zi-ding-yi-tu-biao"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#attributes"
      })];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "events",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#events"
      })];
    }),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "slots",
    content: "Slots",
    href: "#slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#slots"
      })];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/page-header.md?vue&type=template&id=15377e42

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/page-header.md?vue&type=script&lang=ts


/* harmony default export */ var page_headervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_page_header = _resolveComponent("el-page-header");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_page_header, {
          onBack: _ctx.goBack,
          content: "详情页面"
        }, null, 8, ["onBack"])]);
      }

      var democomponentExport = {
        methods: {
          goBack: function goBack() {
            console.log('go back');
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_page_header = _resolveComponent("el-page-header");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_page_header, {
          icon: "el-icon-arrow-left",
          content: "详情页面"
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/page-header.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/page-header.md



page_headervue_type_script_lang_ts.render = page_headervue_type_template_id_15377e42_render

/* harmony default export */ var page_header = __webpack_exports__["default"] = (page_headervue_type_script_lang_ts);

/***/ })

}]);