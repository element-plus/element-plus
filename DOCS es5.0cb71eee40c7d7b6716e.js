(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[118],{

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

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/border.md?vue&type=template&id=218dec3a

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Border ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Estandarizamos los bordes que se pueden utilizar en botones, tarjetas, pop-ups y otros componentes.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Border ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>Hay pocos estilos de borde para elegir.</p><table class=\"demo-border\"><tbody><tr><td class=\"text\">Name</td><td class=\"text\">Thickness</td><td class=\"line\">Demo</td></tr><tr><td class=\"text\">Solid</td><td class=\"text\">1px</td><td class=\"line\"><div></div></td></tr><tr><td class=\"text\">Dashed</td><td class=\"text\">2px</td><td class=\"line\"><div class=\"dashed\"></div></td></tr></tbody></table>", 2);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Radius ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Hay pocos estilos de radio para elegir.", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Shadow ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Hay pocos estilos de sombra para elegir.", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_radius_box = Object(vue_esm_browser_prod["resolveComponent"])("radius-box");

  const _component_shadow_box = Object(vue_esm_browser_prod["resolveComponent"])("shadow-box");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "border",
    content: "Border",
    href: "#border",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#border"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "border-2",
    content: "Border",
    href: "#border-2",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#border-2"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "radius",
    content: "Radius",
    href: "#radius",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#radius"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_radius_box, {
    "radius-group": $data.radiusGroup
  }, null, 8, ["radius-group"]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shadow",
    content: "Shadow",
    href: "#shadow",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shadow"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_shadow_box, {
    "shadow-group": $data.shadowGroup
  }, null, 8, ["shadow-group"]), Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/border.md?vue&type=template&id=218dec3a

// EXTERNAL MODULE: ./website/components/demo/border/radius-box.vue + 4 modules
var radius_box = __webpack_require__(1181);

// EXTERNAL MODULE: ./website/components/demo/border/shadow-box.vue + 4 modules
var shadow_box = __webpack_require__(1182);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/border.md?vue&type=script&lang=js


const radiusGroup = [{
  name: 'No Radius',
  type: ''
}, {
  name: 'Small Radius',
  type: 'small'
}, {
  name: 'Large Radius',
  type: 'base'
}, {
  name: 'Round Radius',
  type: 'round'
}];
const shadowGroup = [{
  name: 'Basic Shadow',
  type: 'base'
}, {
  name: 'Light Shadow',
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
// CONCATENATED MODULE: ./website/docs/es/border.md?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./website/docs/es/border.md



bordervue_type_script_lang_js.render = render

/* harmony default export */ var border = __webpack_exports__["default"] = (bordervue_type_script_lang_js);

/***/ })

}]);