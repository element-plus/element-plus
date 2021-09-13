(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[297],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/config-provider.md?vue&type=template&id=7be217e7

const config_providervue_type_template_id_7be217e7_hoisted_1 = {
  class: "content element-doc"
};

const config_providervue_type_template_id_7be217e7_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Config Provider");

const config_providervue_type_template_id_7be217e7_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Config Provider 被用来提供全局的配置选项，让你的配置能够在全局都能够被访问到，Config Provider 使用了 ");

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Vue 的 provide/inject 特性");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-config-provider</span> <span class=\"hljs-attr\">:locale</span>=<span class=\"hljs-string\">&quot;locale&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">app</span> /&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-config-provider</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">import</span> { defineComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n  <span class=\"hljs-keyword\">import</span> { ElConfigProvider } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n\n  <span class=\"hljs-keyword\">import</span> zhCn <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineComponent({\n    <span class=\"hljs-attr\">components</span>: {\n      ElConfigProvider,\n    },\n    <span class=\"hljs-function\"><span class=\"hljs-title\">setup</span>(<span class=\"hljs-params\"></span>)</span> {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">locale</span>: zhCn,\n      }\n    },\n  })\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("代码演示 ");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div>\n  <el-config-provider :locale=\"locale1\">\n    <div style=\"margin: 8px;\">\n      <el-empty />\n    </div>\n    <div style=\"margin: 8px;\">\n      <el-transfer />\n    </div>\n  </el-config-provider>\n  <el-button @click=\"toggle\" style=\"margin-left: 8px; vertical-align: middle;\">\n    切换语言\n  </el-button>\n</div>\n<script>\n  import { ref } from 'vue'\n  // import { ConfigProvider } from 'element-plus'\n  export default {\n    setup() {\n      const locale1 = ref({\n        name: 'zh-cn',\n        el: {\n          table: {\n            emptyText: '无数据',\n          },\n          transfer: {\n            titles: ['列表1', '列表2'],\n            noData: '无数据',\n          },\n        },\n      })\n      const locale2 = ref({\n        name: 'en',\n        el: {\n          table: {\n            emptyText: 'no data',\n          },\n          transfer: {\n            titles: ['list 1', 'list 2'],\n            noData: 'no data',\n          },\n        },\n      })\n      const toggle = () => {\n        const temp = locale1.value\n        locale1.value = locale2.value\n        locale2.value = temp\n      }\n      return {\n        locale1,\n        locale2,\n        toggle,\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ConfigProvider 属性 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "参数"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "类型"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "可选值"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "默认值")])], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "locale", -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "翻译文本对象", -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Object<Language>", -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("languages");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "English", -1);

function config_providervue_type_template_id_7be217e7_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", config_providervue_type_template_id_7be217e7_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    content: "Config Provider",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [config_providervue_type_template_id_7be217e7_hoisted_2]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [config_providervue_type_template_id_7be217e7_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://v3.vuejs.org/guide/composition-api-provide-inject.html#reactivity"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4]),
    _: 1
  })]), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dai-ma-yan-shi",
    content: "代码演示",
    href: "#dai-ma-yan-shi",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dai-ma-yan-shi"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "configprovider-shu-xing",
    content: "ConfigProvider 属性",
    href: "#configprovider-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#configprovider-shu-xing"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("table", null, [_hoisted_9, Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_10, _hoisted_11, _hoisted_12, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    _: 1
  })]), _hoisted_14])])]), Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/config-provider.md?vue&type=template&id=7be217e7

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/config-provider.md?vue&type=script&lang=ts

/* harmony default export */ var config_providervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        style: {
          "margin": "8px"
        }
      };
      const _hoisted_2 = {
        style: {
          "margin": "8px"
        }
      };

      const _hoisted_3 = /*#__PURE__*/_createTextVNode(" 切换语言 ");

      function render(_ctx, _cache) {
        const _component_el_empty = _resolveComponent("el-empty");

        const _component_el_transfer = _resolveComponent("el-transfer");

        const _component_el_config_provider = _resolveComponent("el-config-provider");

        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", null, [_createVNode(_component_el_config_provider, {
          locale: _ctx.locale1
        }, {
          default: _withCtx(() => [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_empty)]), _createElementVNode("div", _hoisted_2, [_createVNode(_component_el_transfer)])]),
          _: 1
        }, 8, ["locale"]), _createVNode(_component_el_button, {
          onClick: _ctx.toggle,
          style: {
            "margin-left": "8px",
            "vertical-align": "middle"
          }
        }, {
          default: _withCtx(() => [_hoisted_3]),
          _: 1
        }, 8, ["onClick"])])]);
      }

      const {
        ref
      } = vue_esm_browser_prod; // const { ConfigProvider } = require('element-plus')

      const democomponentExport = {
        setup() {
          const locale1 = ref({
            name: 'zh-cn',
            el: {
              table: {
                emptyText: '无数据'
              },
              transfer: {
                titles: ['列表1', '列表2'],
                noData: '无数据'
              }
            }
          });
          const locale2 = ref({
            name: 'en',
            el: {
              table: {
                emptyText: 'no data'
              },
              transfer: {
                titles: ['list 1', 'list 2'],
                noData: 'no data'
              }
            }
          });

          const toggle = () => {
            const temp = locale1.value;
            locale1.value = locale2.value;
            locale2.value = temp;
          };

          return {
            locale1,
            locale2,
            toggle
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/config-provider.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/config-provider.md



config_providervue_type_script_lang_ts.render = config_providervue_type_template_id_7be217e7_render

/* harmony default export */ var config_provider = __webpack_exports__["default"] = (config_providervue_type_script_lang_ts);

/***/ })

}]);