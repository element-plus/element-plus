(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/config-provider.md?vue&type=template&id=7f4dbc26

const config_providervue_type_template_id_7f4dbc26_hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Config Provider ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Config Provider is used for providing global configurations, which enables your entire application to access these configurations everywhere", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("i18n related configurations ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Configure i18n related properties via Config Provider, to get language switching feature", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Use two attributes to provide i18n related config")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div>\n  <el-config-provider :locale=\"locale2\">\n    <el-color-picker :modelValue=\"''\" style=\"vertical-align: middle;\" />\n  </el-config-provider>\n  <el-button @click=\"toggle\" style=\"margin-left: 8px; vertical-align: middle;\">\n    Switch Lang\n  </el-button>\n</div>\n\n<script>\n  // import { ConfigProvider } from 'element-plus'\n  export default {\n    data() {\n      return {\n        locale1: {\n          name: 'zh-cn',\n          el: {\n            colorpicker: {\n              confirm: '确定',\n              clear: '清空',\n            },\n          },\n        },\n        locale2: {\n          name: 'en',\n          el: {\n            colorpicker: {\n              confirm: 'Confirm',\n              clear: 'Clear',\n            },\n          },\n        },\n      }\n    },\n    methods: {\n      toggle() {\n        const temp = this.locale1\n        this.locale1 = this.locale2\n        this.locale2 = temp\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ConfigProvider Attributes ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Attribute"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Accepted Values"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Default")])], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "locale", -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Locale Object", -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Object<Language>", -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("languages");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "English", -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "i18n"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "External translator, when this attribute is provided, it will be used at first, and it will fallback to default translator when this method returns nullish value"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Function<(...args: []) => string>"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-")], -1);

function config_providervue_type_template_id_7f4dbc26_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", config_providervue_type_template_id_7f4dbc26_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "config-provider",
    content: "Config Provider",
    href: "#config-provider",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#config-provider"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ioneeightn-related-configurations",
    content: "i18n related configurations",
    href: "#ioneeightn-related-configurations",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ioneeightn-related-configurations"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "configprovider-attributes",
    content: "ConfigProvider Attributes",
    href: "#configprovider-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#configprovider-attributes"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("table", null, [_hoisted_9, Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_10, _hoisted_11, _hoisted_12, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    _: 1
  })]), _hoisted_14]), _hoisted_15])]), Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/config-provider.md?vue&type=template&id=7f4dbc26

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/config-provider.md?vue&type=script&lang=ts

/* harmony default export */ var config_providervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" Switch Lang ");

      function render(_ctx, _cache) {
        const _component_el_color_picker = _resolveComponent("el-color-picker");

        const _component_el_config_provider = _resolveComponent("el-config-provider");

        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", null, [_createVNode(_component_el_config_provider, {
          locale: _ctx.locale2
        }, {
          default: _withCtx(() => [_createVNode(_component_el_color_picker, {
            modelValue: '',
            style: {
              "vertical-align": "middle"
            }
          })]),
          _: 1
        }, 8, ["locale"]), _createVNode(_component_el_button, {
          onClick: _ctx.toggle,
          style: {
            "margin-left": "8px",
            "vertical-align": "middle"
          }
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])])]);
      } // const { ConfigProvider } = require('element-plus')


      const democomponentExport = {
        data() {
          return {
            locale1: {
              name: 'zh-cn',
              el: {
                colorpicker: {
                  confirm: '确定',
                  clear: '清空'
                }
              }
            },
            locale2: {
              name: 'en',
              el: {
                colorpicker: {
                  confirm: 'Confirm',
                  clear: 'Clear'
                }
              }
            }
          };
        },

        methods: {
          toggle() {
            const temp = this.locale1;
            this.locale1 = this.locale2;
            this.locale2 = temp;
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/config-provider.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/config-provider.md



config_providervue_type_script_lang_ts.render = config_providervue_type_template_id_7f4dbc26_render

/* harmony default export */ var config_provider = __webpack_exports__["default"] = (config_providervue_type_script_lang_ts);

/***/ })

}]);