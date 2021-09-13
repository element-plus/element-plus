(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[145],{

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/affix.md?vue&type=template&id=0e8ed5b2

const affixvue_type_template_id_0e8ed5b2_hoisted_1 = {
  class: "content element-doc"
};

const affixvue_type_template_id_0e8ed5b2_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Affix ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Fix the element to a specific visible area.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic usage ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Affix is fixed at the top of the page by default.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("You can set "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute to change the offset top，the default value is 0。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-affix :offset=\"120\">\n  <el-button type=\"primary\">Offset top 120px</el-button>\n</el-affix>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Target container ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("You can set "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "target"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute to keep the affix in the container at all times. It will be hidden if out of range.")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Please notice that the container avoid having scrollbar.")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"affix-container\">\n  <el-affix target=\".affix-container\" :offset=\"80\">\n    <el-button type=\"primary\">Target container</el-button>\n  </el-affix>\n</div>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Fixed position ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("The affix component provides two fixed positions: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "bottom"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("You can set "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "position"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute to change the fixed position, the default value is "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-affix position=\"bottom\" :offset=\"20\">\n  <el-button type=\"primary\">Offset bottom 20px</el-button>\n</el-affix>\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>offset</td><td>offset distance</td><td>number</td><td>—</td><td>0</td></tr><tr><td>position</td><td>position of affix</td><td>string</td><td>top / bottom</td><td>top</td></tr><tr><td>target</td><td>target container (CSS selector)</td><td>string</td><td>—</td><td>—</td></tr><tr><td>z-index</td><td>z-index of affix</td><td>number</td><td>—</td><td>100</td></tr></tbody></table>", 1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Events ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when fixed state changed</td><td>(value: boolean)</td></tr><tr><td>scroll</td><td>triggers when scrolling</td><td>scroll top and fixed state</td></tr></tbody></table>", 1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Methods ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Method"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "update"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "update affix state manually"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")])])], -1);

function affixvue_type_template_id_0e8ed5b2_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", affixvue_type_template_id_0e8ed5b2_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "affix",
    content: "Affix",
    href: "#affix",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [affixvue_type_template_id_0e8ed5b2_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#affix"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "target-container",
    content: "Target container",
    href: "#target-container",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#target-container"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "fixed-position",
    content: "Fixed position",
    href: "#fixed-position",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fixed-position"
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
// CONCATENATED MODULE: ./website/docs/fr-FR/affix.md?vue&type=template&id=0e8ed5b2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/affix.md?vue&type=script&lang=ts

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Offset top 120px");

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

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Target container");

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Offset bottom 20px");

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
// CONCATENATED MODULE: ./website/docs/fr-FR/affix.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/affix.md



affixvue_type_script_lang_ts.render = affixvue_type_template_id_0e8ed5b2_render

/* harmony default export */ var affix = __webpack_exports__["default"] = (affixvue_type_script_lang_ts);

/***/ })

}]);