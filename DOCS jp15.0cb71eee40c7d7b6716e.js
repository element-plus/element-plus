(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[224],{

/***/ 1173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tintColor; });
const tintColor = (c, tint) => {
  const color = c.replace('#', '');
  let red = parseInt(color.slice(0, 2), 16);
  let green = parseInt(color.slice(2, 4), 16);
  let blue = parseInt(color.slice(4, 6), 16);

  if (tint === 0) {
    // when primary color is in its rgb space
    return [red, green, blue].join(',');
  } else {
    red += Math.round(tint * (255 - red));
    green += Math.round(tint * (255 - green));
    blue += Math.round(tint * (255 - blue));
    red = red.toString(16);
    green = green.toString(16);
    blue = blue.toString(16);
    return `#${red}${green}${blue}`;
  }
};

/***/ }),

/***/ 1183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--13-0!./website/components/demo/color/border-box.vue?vue&type=template&id=5db6fd07

const _hoisted_1 = {
  class: "demo-color-box-group"
};
const _hoisted_2 = {
  class: "value"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("div", _hoisted_1, [(Object(vue_esm_browser_prod["openBlock"])(true), Object(vue_esm_browser_prod["createElementBlock"])(vue_esm_browser_prod["Fragment"], null, Object(vue_esm_browser_prod["renderList"])($props.borderColors, (border, i) => {
    return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("div", {
      key: i,
      class: "demo-color-box demo-color-box-other demo-color-box-lite",
      style: Object(vue_esm_browser_prod["normalizeStyle"])({
        background: `var(--el-border-color-${border.type})`
      })
    }, [Object(vue_esm_browser_prod["createTextVNode"])(Object(vue_esm_browser_prod["toDisplayString"])(border.name || $options.formatType(border.type) + ' Border') + " ", 1), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_2, Object(vue_esm_browser_prod["toDisplayString"])($options.getColorValue(border.type).toUpperCase()), 1)], 4);
  }), 128))]);
}
// CONCATENATED MODULE: ./website/components/demo/color/border-box.vue?vue&type=template&id=5db6fd07

// EXTERNAL MODULE: ./website/util.js
var util = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--13-0!./website/components/demo/color/border-box.vue?vue&type=script&lang=js

/* harmony default export */ var border_boxvue_type_script_lang_js = ({
  props: {
    borderColors: {
      type: Array,

      default() {
        return [];
      }

    }
  },
  methods: {
    formatType: util["a" /* formatType */],

    getColorValue(type) {
      return getComputedStyle(document.documentElement).getPropertyValue(`--el-border-color-${type}`);
    }

  }
});
// CONCATENATED MODULE: ./website/components/demo/color/border-box.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./website/components/demo/color/border-box.vue



border_boxvue_type_script_lang_js.render = render

/* harmony default export */ var border_box = __webpack_exports__["a"] = (border_boxvue_type_script_lang_js);

/***/ }),

/***/ 1184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--13-0!./website/components/demo/color/color-box.vue?vue&type=template&id=6e5191fb

const _hoisted_1 = {
  class: "value"
};
const _hoisted_2 = {
  class: "bg-color-sub"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_col = Object(vue_esm_browser_prod["resolveComponent"])("el-col");

  const _component_el_row = Object(vue_esm_browser_prod["resolveComponent"])("el-row");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createBlock"])(_component_el_row, {
    gutter: 12
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [(Object(vue_esm_browser_prod["openBlock"])(true), Object(vue_esm_browser_prod["createElementBlock"])(vue_esm_browser_prod["Fragment"], null, Object(vue_esm_browser_prod["renderList"])(_ctx.colorsType, (type, i) => {
      return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createBlock"])(_component_el_col, {
        key: i,
        span: 6,
        xs: {
          span: 12
        }
      }, {
        default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createElementVNode"])("div", {
          class: "demo-color-box",
          style: Object(vue_esm_browser_prod["normalizeStyle"])({
            background: $options.getColorValue(type)
          })
        }, [Object(vue_esm_browser_prod["createTextVNode"])(Object(vue_esm_browser_prod["toDisplayString"])(type.charAt(0).toUpperCase() + type.slice(1)) + " ", 1), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_1, Object(vue_esm_browser_prod["toDisplayString"])($options.getColorValue(type).toUpperCase()), 1), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_2, [(Object(vue_esm_browser_prod["openBlock"])(true), Object(vue_esm_browser_prod["createElementBlock"])(vue_esm_browser_prod["Fragment"], null, Object(vue_esm_browser_prod["renderList"])(Array(2), (item, key) => {
          return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("div", {
            key: key,
            class: "bg-success-sub-item",
            style: Object(vue_esm_browser_prod["normalizeStyle"])({
              background: $options.tintColor($options.getColorValue(type), (key + 8) / 10)
            })
          }, null, 4);
        }), 128))])], 4)]),
        _: 2
      }, 1024);
    }), 128))]),
    _: 1
  });
}
// CONCATENATED MODULE: ./website/components/demo/color/color-box.vue?vue&type=template&id=6e5191fb

// EXTERNAL MODULE: ./website/color.js
var color = __webpack_require__(1173);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--13-0!./website/components/demo/color/color-box.vue?vue&type=script&lang=js
const colorsType = ['success', 'warning', 'danger', 'info'];

/* harmony default export */ var color_boxvue_type_script_lang_js = ({
  data: function () {
    return {
      colorsType
    };
  },
  methods: {
    getColorValue(type) {
      return getComputedStyle(document.documentElement).getPropertyValue(`--el-color-${type}`);
    },

    tintColor: color["a" /* tintColor */]
  }
});
// CONCATENATED MODULE: ./website/components/demo/color/color-box.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./website/components/demo/color/color-box.vue



color_boxvue_type_script_lang_js.render = render

/* harmony default export */ var color_box = __webpack_exports__["a"] = (color_boxvue_type_script_lang_js);

/***/ }),

/***/ 1185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--13-0!./website/components/demo/color/text-box.vue?vue&type=template&id=f512fe50

const _hoisted_1 = {
  class: "demo-color-box-group"
};
const _hoisted_2 = {
  class: "value"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("div", _hoisted_1, [(Object(vue_esm_browser_prod["openBlock"])(true), Object(vue_esm_browser_prod["createElementBlock"])(vue_esm_browser_prod["Fragment"], null, Object(vue_esm_browser_prod["renderList"])($props.textColors, (text, i) => {
    return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("div", {
      key: i,
      class: "demo-color-box demo-color-box-other",
      style: Object(vue_esm_browser_prod["normalizeStyle"])({
        background: $options.getCssVarName('text-color', text.type)
      })
    }, [Object(vue_esm_browser_prod["createTextVNode"])(Object(vue_esm_browser_prod["toDisplayString"])(text.name || $options.formatType(text.type) + ' Text') + " ", 1), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_2, Object(vue_esm_browser_prod["toDisplayString"])($options.getCssVarValue('text-color', text.type).toUpperCase()), 1)], 4);
  }), 128))]);
}
// CONCATENATED MODULE: ./website/components/demo/color/text-box.vue?vue&type=template&id=f512fe50

// EXTERNAL MODULE: ./website/util.js
var util = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--13-0!./website/components/demo/color/text-box.vue?vue&type=script&lang=js

/* harmony default export */ var text_boxvue_type_script_lang_js = ({
  props: {
    textColors: {
      type: Array,

      default() {
        return [];
      }

    }
  },
  methods: {
    formatType: util["a" /* formatType */],
    getCssVarValue: util["c" /* getCssVarValue */],
    getCssVarName: util["b" /* getCssVarName */]
  }
});
// CONCATENATED MODULE: ./website/components/demo/color/text-box.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./website/components/demo/color/text-box.vue



text_boxvue_type_script_lang_js.render = render

/* harmony default export */ var text_box = __webpack_exports__["a"] = (text_boxvue_type_script_lang_js);

/***/ }),

/***/ 972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/color.md?vue&type=template&id=7d6c6574

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("カラー ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Element Plus は、特定のパレットセットを用いて色を指定し、プロダクトに一貫した外観と使用感を提供します。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("メインカラー ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Element Plus のメインカラーは明るく親しみやすいブルーです。", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" Brand Color");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "value"
}, "#409EFF", -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("セカンダリカラー ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "メインカラーの他にも、シーンカラーを別のシナリオで使用する必要があります（例えば、危険な色は危険な操作を示します）。", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ニュートラルカラー ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "ニュートラルカラーとは、文字色、背景色、枠線の色のことです。ニュートラルカラーを使い分けることで、階層構造を表現することができます。", -1);

const _hoisted_12 = {
  class: "demo-color-box-group"
};

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic Black");

const _hoisted_14 = {
  class: "value"
};

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic White");

const _hoisted_16 = {
  class: "value"
};

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "demo-color-box demo-color-box-other bg-transparent"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Transparent"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "value"
}, "Transparent")], -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_el_col = Object(vue_esm_browser_prod["resolveComponent"])("el-col");

  const _component_el_row = Object(vue_esm_browser_prod["resolveComponent"])("el-row");

  const _component_color_box = Object(vue_esm_browser_prod["resolveComponent"])("color-box");

  const _component_text_box = Object(vue_esm_browser_prod["resolveComponent"])("text-box");

  const _component_border_box = Object(vue_esm_browser_prod["resolveComponent"])("border-box");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kara",
    content: "カラー",
    href: "#kara",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kara"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "meinkara",
    content: "メインカラー",
    href: "#meinkara",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#meinkara"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_el_row, {
    gutter: 12
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_el_col, {
      span: 10,
      xs: {
        span: 12
      }
    }, {
      default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createElementVNode"])("div", {
        class: "demo-color-box",
        style: Object(vue_esm_browser_prod["normalizeStyle"])({
          background: $data.primary
        })
      }, [_hoisted_6, _hoisted_7, Object(vue_esm_browser_prod["createElementVNode"])("div", {
        class: "bg-color-sub",
        style: Object(vue_esm_browser_prod["normalizeStyle"])({
          background: $options.tintColor($data.primary, 0.9)
        })
      }, [(Object(vue_esm_browser_prod["openBlock"])(true), Object(vue_esm_browser_prod["createElementBlock"])(vue_esm_browser_prod["Fragment"], null, Object(vue_esm_browser_prod["renderList"])(Array(8), (item, key) => {
        return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("div", {
          class: "bg-blue-sub-item",
          key: key,
          style: Object(vue_esm_browser_prod["normalizeStyle"])({
            background: $options.tintColor($data.primary, (key + 1) / 10)
          })
        }, null, 4);
      }), 128))], 4)], 4)]),
      _: 1
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "sekandarikara",
    content: "セカンダリカラー",
    href: "#sekandarikara",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sekandarikara"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_color_box), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "niyutorarukara",
    content: "ニュートラルカラー",
    href: "#niyutorarukara",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#niyutorarukara"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_el_row, {
    gutter: 12
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_el_col, {
      span: 6,
      xs: {
        span: 12
      }
    }, {
      default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_text_box, {
        "text-colors": $data.textColors
      }, null, 8, ["text-colors"])]),
      _: 1
    }), Object(vue_esm_browser_prod["createVNode"])(_component_el_col, {
      span: 6,
      xs: {
        span: 12
      }
    }, {
      default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_border_box, {
        "border-colors": $data.borderColors
      }, null, 8, ["border-colors"])]),
      _: 1
    }), Object(vue_esm_browser_prod["createVNode"])(_component_el_col, {
      span: 6,
      xs: {
        span: 12
      }
    }, {
      default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_12, [Object(vue_esm_browser_prod["createElementVNode"])("div", {
        class: "demo-color-box demo-color-box-other",
        style: Object(vue_esm_browser_prod["normalizeStyle"])({
          background: $data.black
        })
      }, [_hoisted_13, Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_14, Object(vue_esm_browser_prod["toDisplayString"])($data.black), 1)], 4), Object(vue_esm_browser_prod["createElementVNode"])("div", {
        class: "demo-color-box demo-color-box-other",
        style: Object(vue_esm_browser_prod["normalizeStyle"])({
          background: $data.white,
          color: '#303133',
          border: '1px solid #eee'
        })
      }, [_hoisted_15, Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_16, Object(vue_esm_browser_prod["toDisplayString"])($data.white), 1)], 4), _hoisted_17])]),
      _: 1
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/color.md?vue&type=template&id=7d6c6574

// EXTERNAL MODULE: ./website/bus.js
var bus = __webpack_require__(88);

// EXTERNAL MODULE: ./website/color.js
var website_color = __webpack_require__(1173);

// EXTERNAL MODULE: ./website/components/demo/color/border-box.vue + 4 modules
var border_box = __webpack_require__(1183);

// EXTERNAL MODULE: ./website/components/demo/color/color-box.vue + 4 modules
var color_box = __webpack_require__(1184);

// EXTERNAL MODULE: ./website/components/demo/color/text-box.vue + 4 modules
var text_box = __webpack_require__(1185);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/color.md?vue&type=script&lang=js





const borderColors = [{
  type: 'base',
  color: '#DCDFE6'
}, {
  type: 'light',
  color: '#E4E7ED'
}, {
  type: 'lighter',
  color: '#EBEEF5'
}, {
  type: 'extra-light',
  color: '#F2F6FC'
}];
const textColors = [{
  name: 'Primary Text',
  type: 'primary'
}, {
  name: 'Regular Text',
  type: 'regular'
}, {
  name: 'Secondary Text',
  type: 'secondary'
}, {
  name: 'Placeholder Text',
  type: 'placeholder'
}];
const varMap = {
  'primary': '$--color-primary',
  'success': '$--color-success',
  'warning': '$--color-warning',
  'danger': '$--color-danger',
  'info': '$--color-info',
  'white': '$--color-white',
  'black': '$--color-black'
};
const original = {
  primary: '#409EFF',
  success: '#67C23A',
  warning: '#E6A23C',
  danger: '#F56C6C',
  info: '#909399',
  white: '#FFFFFF',
  black: '#000000'
};
/* harmony default export */ var colorvue_type_script_lang_js = ({
  components: {
    BorderBox: border_box["a" /* default */],
    ColorBox: color_box["a" /* default */],
    TextBox: text_box["a" /* default */]
  },

  mounted() {
    this.setGlobal();
  },

  methods: {
    tintColor(color, tint) {
      return Object(website_color["a" /* tintColor */])(color, tint);
    },

    setGlobal() {
      if (window.userThemeConfig) {
        this.global = window.userThemeConfig.global;
      }
    }

  },

  data() {
    return {
      global: {},
      primary: '',
      success: '',
      warning: '',
      danger: '',
      info: '',
      white: '',
      black: '',
      borderColors,
      textColors
    };
  },

  watch: {
    global: {
      immediate: true,

      handler(value) {
        Object.keys(original).forEach(o => {
          if (value[varMap[o]]) {
            this[o] = value[varMap[o]];
          } else {
            this[o] = original[o];
          }
        });
      }

    }
  }
});
// CONCATENATED MODULE: ./website/docs/jp/color.md?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./website/docs/jp/color.md



colorvue_type_script_lang_js.render = render

/* harmony default export */ var jp_color = __webpack_exports__["default"] = (colorvue_type_script_lang_js);

/***/ })

}]);