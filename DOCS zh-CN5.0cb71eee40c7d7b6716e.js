(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[334],{

/***/ 1181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--13-0!./website/components/demo/border/radius-box.vue?vue&type=template&id=278ed4e6

const _hoisted_1 = {
  class: "title"
};
const _hoisted_2 = {
  class: "value"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_col = Object(vue_esm_browser_prod["resolveComponent"])("el-col");

  const _component_el_row = Object(vue_esm_browser_prod["resolveComponent"])("el-row");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createBlock"])(_component_el_row, {
    gutter: 12,
    class: "demo-radius"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [(Object(vue_esm_browser_prod["openBlock"])(true), Object(vue_esm_browser_prod["createElementBlock"])(vue_esm_browser_prod["Fragment"], null, Object(vue_esm_browser_prod["renderList"])($props.radiusGroup, (radius, i) => {
      return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createBlock"])(_component_el_col, {
        key: i,
        span: 6,
        xs: {
          span: 12
        }
      }, {
        default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_1, Object(vue_esm_browser_prod["toDisplayString"])(radius.name), 1), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_2, [Object(vue_esm_browser_prod["createElementVNode"])("code", null, "border-radius: " + Object(vue_esm_browser_prod["toDisplayString"])($options.getValue(radius.type) || '0px'), 1)]), Object(vue_esm_browser_prod["createElementVNode"])("div", {
          class: "radius",
          style: Object(vue_esm_browser_prod["normalizeStyle"])({
            borderRadius: radius.type ? `var(--el-border-radius-${radius.type})` : ''
          })
        }, null, 4)]),
        _: 2
      }, 1024);
    }), 128))]),
    _: 1
  });
}
// CONCATENATED MODULE: ./website/components/demo/border/radius-box.vue?vue&type=template&id=278ed4e6

// EXTERNAL MODULE: ./website/util.js
var util = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--13-0!./website/components/demo/border/radius-box.vue?vue&type=script&lang=js

/* harmony default export */ var radius_boxvue_type_script_lang_js = ({
  props: {
    radiusGroup: {
      type: Array,

      default() {
        return [];
      }

    }
  },
  methods: {
    getValue(type) {
      return Object(util["c" /* getCssVarValue */])('border-radius', type);
    }

  }
});
// CONCATENATED MODULE: ./website/components/demo/border/radius-box.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./website/components/demo/border/radius-box.vue



radius_boxvue_type_script_lang_js.render = render

/* harmony default export */ var radius_box = __webpack_exports__["a"] = (radius_boxvue_type_script_lang_js);

/***/ }),

/***/ 1182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--13-0!./website/components/demo/border/shadow-box.vue?vue&type=template&id=568ea0ec

const _hoisted_1 = {
  class: "demo-shadow-text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("div", null, [(Object(vue_esm_browser_prod["openBlock"])(true), Object(vue_esm_browser_prod["createElementBlock"])(vue_esm_browser_prod["Fragment"], null, Object(vue_esm_browser_prod["renderList"])($props.shadowGroup, (shadow, i) => {
    return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])(vue_esm_browser_prod["Fragment"], {
      key: i
    }, [Object(vue_esm_browser_prod["createElementVNode"])("div", {
      class: "demo-shadow",
      style: Object(vue_esm_browser_prod["normalizeStyle"])({
        boxShadow: `var(--el-box-shadow-${shadow.type})`
      })
    }, null, 4), Object(vue_esm_browser_prod["createElementVNode"])("span", _hoisted_1, [Object(vue_esm_browser_prod["createTextVNode"])(Object(vue_esm_browser_prod["toDisplayString"])(shadow.name) + " ", 1), Object(vue_esm_browser_prod["createElementVNode"])("code", null, "box-shadow: " + Object(vue_esm_browser_prod["toDisplayString"])($options.getValue(shadow.type)), 1)])], 64);
  }), 128))]);
}
// CONCATENATED MODULE: ./website/components/demo/border/shadow-box.vue?vue&type=template&id=568ea0ec

// EXTERNAL MODULE: ./website/util.js
var util = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--13-0!./website/components/demo/border/shadow-box.vue?vue&type=script&lang=js

/* harmony default export */ var shadow_boxvue_type_script_lang_js = ({
  props: {
    shadowGroup: {
      type: Array,

      default() {
        return [];
      }

    }
  },
  methods: {
    getValue(type) {
      return Object(util["c" /* getCssVarValue */])('box-shadow', type);
    }

  }
});
// CONCATENATED MODULE: ./website/components/demo/border/shadow-box.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./website/components/demo/border/shadow-box.vue



shadow_boxvue_type_script_lang_js.render = render

/* harmony default export */ var shadow_box = __webpack_exports__["a"] = (shadow_boxvue_type_script_lang_js);

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/border.md?vue&type=template&id=33cfe73a

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Border 边框 ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "我们对边框进行统一规范，可用于按钮、卡片、弹窗等组件里。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("边框 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>我们提供了以下几种边框样式，以供选择。</p><table class=\"demo-border\"><tbody><tr><td class=\"text\">名称</td><td class=\"text\">粗细</td><td class=\"line\">举例</td></tr><tr><td class=\"text\">实线</td><td class=\"text\">1px</td><td class=\"line\"><div></div></td></tr><tr><td class=\"text\">虚线</td><td class=\"text\">2px</td><td class=\"line\"><div class=\"dashed\"></div></td></tr></tbody></table>", 2);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("圆角 ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "我们提供了以下几种圆角样式，以供选择。", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("投影 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "我们提供了以下几种投影样式，以供选择。", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_radius_box = Object(vue_esm_browser_prod["resolveComponent"])("radius-box");

  const _component_shadow_box = Object(vue_esm_browser_prod["resolveComponent"])("shadow-box");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "border-bian-kuang",
    content: "Border 边框",
    href: "#border-bian-kuang",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#border-bian-kuang"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bian-kuang",
    content: "边框",
    href: "#bian-kuang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bian-kuang"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "yuan-jiao",
    content: "圆角",
    href: "#yuan-jiao",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#yuan-jiao"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_radius_box, {
    "radius-group": $data.radiusGroup
  }, null, 8, ["radius-group"]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tou-ying",
    content: "投影",
    href: "#tou-ying",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tou-ying"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_shadow_box, {
    "shadow-group": $data.shadowGroup
  }, null, 8, ["shadow-group"]), Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/border.md?vue&type=template&id=33cfe73a

// EXTERNAL MODULE: ./website/components/demo/border/radius-box.vue + 4 modules
var radius_box = __webpack_require__(1181);

// EXTERNAL MODULE: ./website/components/demo/border/shadow-box.vue + 4 modules
var shadow_box = __webpack_require__(1182);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/border.md?vue&type=script&lang=js


const radiusGroup = [{
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
const shadowGroup = [{
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

  data() {
    return {
      radiusGroup,
      shadowGroup
    };
  }

});
// CONCATENATED MODULE: ./website/docs/zh-CN/border.md?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./website/docs/zh-CN/border.md



bordervue_type_script_lang_js.render = render

/* harmony default export */ var border = __webpack_exports__["default"] = (bordervue_type_script_lang_js);

/***/ })

}]);