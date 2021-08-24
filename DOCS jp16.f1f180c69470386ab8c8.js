(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[226],{

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/config-provider.md?vue&type=template&id=5113d90e

var config_providervue_type_template_id_5113d90e_hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Config Provider ");

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Config Provider is used for providing global configurations, which enables your entire application to access these configurations everywhere", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("i18n related configurations ");

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Configure i18n related properties via Config Provider, to get language switching feature", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Use two attributes to provide i18n related config")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div>\n  <el-config-provider :locale=\"locale1\">\n    <el-color-picker :modelValue=\"''\" style=\"vertical-align: middle;\" />\n  </el-config-provider>\n  <el-button @click=\"toggle\" style=\"margin-left: 8px; vertical-align: middle;\">\n    Switch Lang\n  </el-button>\n</div>\n\n<script>\n  // import { ConfigProvider } from 'element-plus'\n  export default {\n    data() {\n      return {\n        locale1: {\n          name: 'fr',\n          el: {\n            colorpicker: {\n              confirm: 'はい',\n              clear: 'クリア',\n            },\n          },\n        },\n        locale2: {\n          name: 'zh-cn',\n          el: {\n            colorpicker: {\n              confirm: '确定',\n              clear: '清除',\n            },\n          },\n        },\n      }\n    },\n    methods: {\n      toggle() {\n        const temp = this.locale1\n        this.locale1 = this.locale2\n        this.locale2 = temp\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ConfigProvider Attributes ");

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Attribute"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Accepted Values"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Default")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "locale", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Locale Object", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Object<Language>", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("languages");

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "English", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "i18n"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "External translator, when this attribute is provided, it will be used at first, and it will fallback to default translator when this method returns nullish value"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Function<(...args: []) => string>"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-")], -1);

function config_providervue_type_template_id_5113d90e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", config_providervue_type_template_id_5113d90e_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "config-provider",
    content: "Config Provider",
    href: "#config-provider",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#config-provider"
      })];
    }),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ioneeightn-related-configurations",
    content: "i18n related configurations",
    href: "#ioneeightn-related-configurations",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ioneeightn-related-configurations"
      })];
    }),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "configprovider-attributes",
    content: "ConfigProvider Attributes",
    href: "#configprovider-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#configprovider-attributes"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [_hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [_hoisted_10, _hoisted_11, _hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  })]), _hoisted_14]), _hoisted_15])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/config-provider.md?vue&type=template&id=5113d90e

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/config-provider.md?vue&type=script&lang=ts


/* harmony default export */ var config_providervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Switch Lang ");

      function render(_ctx, _cache) {
        var _component_el_color_picker = _resolveComponent("el-color-picker");

        var _component_el_config_provider = _resolveComponent("el-config-provider");

        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode(_component_el_config_provider, {
          locale: _ctx.locale1
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_color_picker, {
              modelValue: '',
              style: {
                "vertical-align": "middle"
              }
            })];
          }),
          _: 1
        }, 8, ["locale"]), _createVNode(_component_el_button, {
          onClick: _ctx.toggle,
          style: {
            "margin-left": "8px",
            "vertical-align": "middle"
          }
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])])]);
      } // const { ConfigProvider } = require('element-plus')


      var democomponentExport = {
        data: function data() {
          return {
            locale1: {
              name: 'fr',
              el: {
                colorpicker: {
                  confirm: 'はい',
                  clear: 'クリア'
                }
              }
            },
            locale2: {
              name: 'zh-cn',
              el: {
                colorpicker: {
                  confirm: '确定',
                  clear: '清除'
                }
              }
            }
          };
        },
        methods: {
          toggle: function toggle() {
            var temp = this.locale1;
            this.locale1 = this.locale2;
            this.locale2 = temp;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/config-provider.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/config-provider.md



config_providervue_type_script_lang_ts.render = config_providervue_type_template_id_5113d90e_render

/* harmony default export */ var config_provider = __webpack_exports__["default"] = (config_providervue_type_script_lang_ts);

/***/ })

}]);