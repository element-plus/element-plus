(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[230],{

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/border.md?vue&type=template&id=4646978a

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"border-bian-kuang\"><a class=\"header-anchor\" href=\"#border-bian-kuang\">¶</a> Border 边框</h2><p>我们对边框进行统一规范，可用于按钮、卡片、弹窗等组件里。</p><h3 id=\"bian-kuang\"><a class=\"header-anchor\" href=\"#bian-kuang\">¶</a> 边框</h3><p>我们提供了以下几种边框样式，以供选择。</p><table class=\"demo-border\"><tbody><tr><td class=\"text\">名称</td><td class=\"text\">粗细</td><td class=\"line\">举例</td></tr><tr><td class=\"text\">\b实线</td><td class=\"text\">1px</td><td class=\"line\"><div></div></td></tr><tr><td class=\"text\">\b虚线</td><td class=\"text\">2px</td><td class=\"line\"><div class=\"dashed\"></div></td></tr></tbody></table><h3 id=\"yuan-jiao\"><a class=\"header-anchor\" href=\"#yuan-jiao\">¶</a> 圆角</h3><p>我们提供了以下几种圆角样式，以供选择。</p>", 7);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", {
  class: "title"
}, "无圆角", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", {
  class: "value"
}, "border-radius: 0px", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", {
  class: "radius"
}, null, -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", {
  class: "title"
}, "小圆角", -1);

var _hoisted_13 = {
  class: "value"
};

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", {
  class: "title"
}, "大圆角", -1);

var _hoisted_15 = {
  class: "value"
};

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", {
  class: "title"
}, "圆形圆角", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", {
  class: "value"
}, "border-radius: 30px", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", {
  class: "radius radius-30"
}, null, -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tou-ying"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tou-ying"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 投影")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "我们提供了以下几种投影样式，以供选择。", -1);

var _hoisted_21 = {
  class: "demo-shadow-text"
};
var _hoisted_22 = {
  class: "demo-shadow-text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_col = Object(vue_esm_browser["P" /* resolveComponent */])("el-col");

  var _component_el_row = Object(vue_esm_browser["P" /* resolveComponent */])("el-row");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser["o" /* createVNode */])(_component_el_row, {
    gutter: 12,
    class: "demo-radius"
  }, {
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_el_col, {
        span: 6,
        xs: {
          span: 12
        }
      }, {
        default: Object(vue_esm_browser["db" /* withCtx */])(function () {
          return [_hoisted_9, _hoisted_10, _hoisted_11];
        }),
        _: 1
      }), Object(vue_esm_browser["o" /* createVNode */])(_component_el_col, {
        span: 6,
        xs: {
          span: 12
        }
      }, {
        default: Object(vue_esm_browser["db" /* withCtx */])(function () {
          return [_hoisted_12, Object(vue_esm_browser["o" /* createVNode */])("div", _hoisted_13, "border-radius: " + Object(vue_esm_browser["T" /* toDisplayString */])($data.borderRadiusSmall), 1), Object(vue_esm_browser["o" /* createVNode */])("div", {
            class: "radius",
            style: {
              borderRadius: $data.borderRadiusSmall
            }
          }, null, 4)];
        }),
        _: 1
      }), Object(vue_esm_browser["o" /* createVNode */])(_component_el_col, {
        span: 6,
        xs: {
          span: 12
        }
      }, {
        default: Object(vue_esm_browser["db" /* withCtx */])(function () {
          return [_hoisted_14, Object(vue_esm_browser["o" /* createVNode */])("div", _hoisted_15, "border-radius: " + Object(vue_esm_browser["T" /* toDisplayString */])($data.borderRadiusBase), 1), Object(vue_esm_browser["o" /* createVNode */])("div", {
            class: "radius",
            style: {
              borderRadius: $data.borderRadiusBase
            }
          }, null, 4)];
        }),
        _: 1
      }), Object(vue_esm_browser["o" /* createVNode */])(_component_el_col, {
        span: 6,
        xs: {
          span: 12
        }
      }, {
        default: Object(vue_esm_browser["db" /* withCtx */])(function () {
          return [_hoisted_16, _hoisted_17, _hoisted_18];
        }),
        _: 1
      })];
    }),
    _: 1
  }), _hoisted_19, _hoisted_20, Object(vue_esm_browser["o" /* createVNode */])("div", {
    class: "demo-shadow",
    style: {
      boxShadow: $data.boxShadowBase
    }
  }, null, 4), Object(vue_esm_browser["o" /* createVNode */])("span", _hoisted_21, "基础投影 box-shadow: " + Object(vue_esm_browser["T" /* toDisplayString */])($data.boxShadowBase), 1), Object(vue_esm_browser["o" /* createVNode */])("div", {
    class: "demo-shadow",
    style: {
      boxShadow: $data.boxShadowLight
    }
  }, null, 4), Object(vue_esm_browser["o" /* createVNode */])("span", _hoisted_22, "浅色投影 box-shadow: " + Object(vue_esm_browser["T" /* toDisplayString */])($data.boxShadowLight), 1)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/border.md?vue&type=template&id=4646978a

// EXTERNAL MODULE: ./website/bus.js
var bus = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/border.md?vue&type=script&lang=js

var varMap = {
  '$--box-shadow-light': 'boxShadowLight',
  '$--box-shadow-base': 'boxShadowBase',
  '$--border-radius-base': 'borderRadiusBase',
  '$--border-radius-small': 'borderRadiusSmall'
};
var original = {
  boxShadowLight: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
  boxShadowBase: '0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)',
  borderRadiusBase: '4px',
  borderRadiusSmall: '2px'
};
/* harmony default export */ var bordervue_type_script_lang_js = ({
  mounted: function mounted() {
    this.setGlobal();
  },
  methods: {
    setGlobal: function setGlobal() {
      if (window.userThemeConfig) {
        this.global = window.userThemeConfig.global;
      }
    }
  },
  data: function data() {
    return {
      global: {},
      boxShadowLight: '',
      boxShadowBase: '',
      borderRadiusBase: '',
      borderRadiusSmall: ''
    };
  },
  watch: {
    global: {
      immediate: true,
      handler: function handler(value) {
        var _this = this;

        Object.keys(varMap).forEach(function (c) {
          if (value[c]) {
            _this[varMap[c]] = value[c];
          } else {
            _this[varMap[c]] = original[varMap[c]];
          }
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/border.md?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./website/docs/zh-CN/border.md



bordervue_type_script_lang_js.render = render

/* harmony default export */ var border = __webpack_exports__["default"] = (bordervue_type_script_lang_js);

/***/ })

}]);