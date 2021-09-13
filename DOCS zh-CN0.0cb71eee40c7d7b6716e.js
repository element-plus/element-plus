(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[289],{

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/affix.md?vue&type=template&id=3d90c197

const affixvue_type_template_id_3d90c197_hoisted_1 = {
  class: "content element-doc"
};

const affixvue_type_template_id_3d90c197_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Affix 固钉 ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "将页面元素固定在特定可视区域。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基本用法 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "固钉默认固定在页面顶部。", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性来改变吸顶距离，默认值为 0。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-affix :offset=\"120\">\n  <el-button type=\"primary\">距离顶部 120px</el-button>\n</el-affix>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("指定容器 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "target"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性，让固钉始终保持在容器内，超过范围则隐藏。")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "请注意容器避免出现滚动条。")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"affix-container\">\n  <el-affix target=\".affix-container\" :offset=\"80\">\n    <el-button type=\"primary\">指定容器</el-button>\n  </el-affix>\n</div>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("固定位置 ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Affix 组件提供了两个固定位置："), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "bottom"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "position"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性来改变固定位置，默认值为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 。")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-affix position=\"bottom\" :offset=\"20\">\n  <el-button type=\"primary\">距离底部 20px</el-button>\n</el-affix>\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>offset</td><td>偏移距离</td><td>number</td><td>—</td><td>0</td></tr><tr><td>position</td><td>固钉位置</td><td>string</td><td>top / bottom</td><td>top</td></tr><tr><td>target</td><td>指定容器（CSS 选择器）</td><td>string</td><td>—</td><td>—</td></tr><tr><td>z-index</td><td>固钉层级</td><td>number</td><td>—</td><td>100</td></tr></tbody></table>", 1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Events ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>固钉状态改变时触发的事件</td><td>(value: boolean)</td></tr><tr><td>scroll</td><td>滚动时触发的事件</td><td>滚动距离和固钉状态</td></tr></tbody></table>", 1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Methods ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "方法名"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "参数")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "update"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "手动更新固钉状态"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")])])], -1);

function affixvue_type_template_id_3d90c197_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", affixvue_type_template_id_3d90c197_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "affix-gu-ding",
    content: "Affix 固钉",
    href: "#affix-gu-ding",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [affixvue_type_template_id_3d90c197_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#affix-gu-ding"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-ben-yong-fa",
    content: "基本用法",
    href: "#ji-ben-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-ben-yong-fa"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zhi-ding-rong-qi",
    content: "指定容器",
    href: "#zhi-ding-rong-qi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zhi-ding-rong-qi"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "gu-ding-wei-zhi",
    content: "固定位置",
    href: "#gu-ding-wei-zhi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#gu-ding-wei-zhi"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "events",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "methods",
    content: "Methods",
    href: "#methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methods"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/affix.md?vue&type=template&id=3d90c197

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/affix.md?vue&type=script&lang=ts

/* harmony default export */ var affixvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("距离顶部 120px");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_affix = _resolveComponent("el-affix");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_affix, {
          offset: 120
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            type: "primary"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "affix-container"
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("指定容器");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_affix = _resolveComponent("el-affix");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_affix, {
          target: ".affix-container",
          offset: 80
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            type: "primary"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          })]),
          _: 1
        })])]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("距离底部 20px");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_affix = _resolveComponent("el-affix");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_affix, {
          position: "bottom",
          offset: 20
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            type: "primary"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/affix.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/affix.md



affixvue_type_script_lang_ts.render = affixvue_type_template_id_3d90c197_render

/* harmony default export */ var affix = __webpack_exports__["default"] = (affixvue_type_script_lang_ts);

/***/ })

}]);