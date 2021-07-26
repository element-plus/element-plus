(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[334],{

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/border.md?vue&type=template&id=08e0fa0c

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h2 id=\"border-bian-kuang\"><a class=\"header-anchor\" href=\"#border-bian-kuang\">¶</a> Border 边框</h2><p>我们对边框进行统一规范，可用于按钮、卡片、弹窗等组件里。</p><h3 id=\"bian-kuang\"><a class=\"header-anchor\" href=\"#bian-kuang\">¶</a> 边框</h3><p>我们提供了以下几种边框样式，以供选择。</p><table class=\"demo-border\"><tbody><tr><td class=\"text\">名称</td><td class=\"text\">粗细</td><td class=\"line\">举例</td></tr><tr><td class=\"text\">\b实线</td><td class=\"text\">1px</td><td class=\"line\"><div></div></td></tr><tr><td class=\"text\">\b虚线</td><td class=\"text\">2px</td><td class=\"line\"><div class=\"dashed\"></div></td></tr></tbody></table><h3 id=\"yuan-jiao\"><a class=\"header-anchor\" href=\"#yuan-jiao\">¶</a> 圆角</h3><p>我们提供了以下几种圆角样式，以供选择。</p>", 7);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "tou-ying"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tou-ying"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 投影")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "我们提供了以下几种投影样式，以供选择。", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_radius_box = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("radius-box");

  var _component_shadow_box = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("shadow-box");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_radius_box, {
    "radius-group": $data.radiusGroup
  }, null, 8, ["radius-group"]), _hoisted_9, _hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_shadow_box, {
    "shadow-group": $data.shadowGroup
  }, null, 8, ["shadow-group"]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/border.md?vue&type=template&id=08e0fa0c

// EXTERNAL MODULE: ./website/components/demo/border/radius-box.vue + 4 modules
var radius_box = __webpack_require__(819);

// EXTERNAL MODULE: ./website/components/demo/border/shadow-box.vue + 4 modules
var shadow_box = __webpack_require__(820);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/border.md?vue&type=script&lang=js


var radiusGroup = [{
  name: '无圆角',
  type: ''
}, {
  name: '小圆角',
  type: 'small'
}, {
  name: '大圆角',
  type: 'base'
}, {
  name: '圆形圆角',
  type: 'round'
}];
var shadowGroup = [{
  name: '基础投影',
  type: 'base'
}, {
  name: '浅色投影',
  type: 'light'
}];
/* harmony default export */ var bordervue_type_script_lang_js = ({
  components: {
    RadiusBox: radius_box["a" /* default */],
    ShadowBox: shadow_box["a" /* default */]
  },
  data: function data() {
    return {
      radiusGroup: radiusGroup,
      shadowGroup: shadowGroup
    };
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/border.md?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./website/docs/zh-CN/border.md



bordervue_type_script_lang_js.render = render

/* harmony default export */ var border = __webpack_exports__["default"] = (bordervue_type_script_lang_js);

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./website/components/demo/border/radius-box.vue?vue&type=template&id=e81661e0

var _hoisted_1 = {
  class: "title"
};
var _hoisted_2 = {
  class: "value"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_col = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("el-col");

  var _component_el_row = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("el-row");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])(_component_el_row, {
    gutter: 12,
    class: "demo-radius"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [(Object(vue_esm_browser_prod["H" /* openBlock */])(true), Object(vue_esm_browser_prod["k" /* createBlock */])(vue_esm_browser_prod["b" /* Fragment */], null, Object(vue_esm_browser_prod["O" /* renderList */])($props.radiusGroup, function (radius, i) {
        return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])(_component_el_col, {
          key: i,
          span: 6,
          xs: {
            span: 12
          }
        }, {
          default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
            return [Object(vue_esm_browser_prod["p" /* createVNode */])("div", _hoisted_1, Object(vue_esm_browser_prod["U" /* toDisplayString */])(radius.name), 1), Object(vue_esm_browser_prod["p" /* createVNode */])("div", _hoisted_2, [Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "border-radius: " + Object(vue_esm_browser_prod["U" /* toDisplayString */])($options.getValue(radius.type) || '0px'), 1)]), Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
              class: "radius",
              style: {
                borderRadius: radius.type ? "var(--el-border-radius-" + radius.type + ")" : ''
              }
            }, null, 4)];
          }),
          _: 2
        }, 1024);
      }), 128))];
    }),
    _: 1
  });
}
// CONCATENATED MODULE: ./website/components/demo/border/radius-box.vue?vue&type=template&id=e81661e0

// EXTERNAL MODULE: ./website/util.js
var util = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./website/components/demo/border/radius-box.vue?vue&type=script&lang=js

/* harmony default export */ var radius_boxvue_type_script_lang_js = ({
  props: {
    radiusGroup: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    getValue: function getValue(type) {
      return Object(util["b" /* getCssVarValue */])('border-radius', type);
    }
  }
});
// CONCATENATED MODULE: ./website/components/demo/border/radius-box.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./website/components/demo/border/radius-box.vue



radius_boxvue_type_script_lang_js.render = render

/* harmony default export */ var radius_box = __webpack_exports__["a"] = (radius_boxvue_type_script_lang_js);

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./website/components/demo/border/shadow-box.vue?vue&type=template&id=20d741bc

var _hoisted_1 = {
  class: "demo-shadow-text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("div", null, [(Object(vue_esm_browser_prod["H" /* openBlock */])(true), Object(vue_esm_browser_prod["k" /* createBlock */])(vue_esm_browser_prod["b" /* Fragment */], null, Object(vue_esm_browser_prod["O" /* renderList */])($props.shadowGroup, function (shadow, i) {
    return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])(vue_esm_browser_prod["b" /* Fragment */], {
      key: i
    }, [Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
      class: "demo-shadow",
      style: {
        boxShadow: "var(--el-box-shadow-" + shadow.type + ")"
      }
    }, null, 4), Object(vue_esm_browser_prod["p" /* createVNode */])("span", _hoisted_1, [Object(vue_esm_browser_prod["o" /* createTextVNode */])(Object(vue_esm_browser_prod["U" /* toDisplayString */])(shadow.name) + " ", 1), Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "box-shadow: " + Object(vue_esm_browser_prod["U" /* toDisplayString */])($options.getValue(shadow.type)), 1)])], 64);
  }), 128))]);
}
// CONCATENATED MODULE: ./website/components/demo/border/shadow-box.vue?vue&type=template&id=20d741bc

// EXTERNAL MODULE: ./website/util.js
var util = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./website/components/demo/border/shadow-box.vue?vue&type=script&lang=js

/* harmony default export */ var shadow_boxvue_type_script_lang_js = ({
  props: {
    shadowGroup: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    getValue: function getValue(type) {
      return Object(util["b" /* getCssVarValue */])('box-shadow', type);
    }
  }
});
// CONCATENATED MODULE: ./website/components/demo/border/shadow-box.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./website/components/demo/border/shadow-box.vue



shadow_boxvue_type_script_lang_js.render = render

/* harmony default export */ var shadow_box = __webpack_exports__["a"] = (shadow_boxvue_type_script_lang_js);

/***/ })

}]);