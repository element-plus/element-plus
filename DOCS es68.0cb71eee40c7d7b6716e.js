(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[138],{

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/transition.md?vue&type=template&id=9b0d94fc

const transitionvue_type_template_id_9b0d94fc_hoisted_1 = {
  class: "content element-doc"
};

const transitionvue_type_template_id_9b0d94fc_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Transiciones incorporadas ");

const transitionvue_type_template_id_9b0d94fc_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Puede usar directamente las transiciones incorporadas en Element. Antes de hacerlo, por favor lea la ");

const transitionvue_type_template_id_9b0d94fc_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("documentación");

const transitionvue_type_template_id_9b0d94fc_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Fade ");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tenemos dos efectos de fading: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-fade-in-linear"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-fade-in"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-button @click=\"show = !show\">Click Me</el-button>\n\n    <div style=\"display: flex; margin-top: 20px; height: 100px;\">\n      <transition name=\"el-fade-in-linear\">\n        <div v-show=\"show\" class=\"transition-box\">.el-fade-in-linear</div>\n      </transition>\n      <transition name=\"el-fade-in\">\n        <div v-show=\"show\" class=\"transition-box\">.el-fade-in</div>\n      </transition>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    data: () => ({\n      show: true,\n    }),\n  }\n</script>\n\n<style>\n  .transition-box {\n    margin-bottom: 10px;\n    width: 200px;\n    height: 100px;\n    border-radius: 4px;\n    background-color: #409eff;\n    text-align: center;\n    color: #fff;\n    padding: 40px 20px;\n    box-sizing: border-box;\n    margin-right: 20px;\n  }\n</style>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Zoom ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("También tenemos zoom: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-zoom-in-center"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-zoom-in-top"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-zoom-in-bottom"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-button @click=\"show2 = !show2\">Click Me</el-button>\n\n    <div style=\"display: flex; margin-top: 20px; height: 100px;\">\n      <transition name=\"el-zoom-in-center\">\n        <div v-show=\"show2\" class=\"transition-box\">.el-zoom-in-center</div>\n      </transition>\n\n      <transition name=\"el-zoom-in-top\">\n        <div v-show=\"show2\" class=\"transition-box\">.el-zoom-in-top</div>\n      </transition>\n\n      <transition name=\"el-zoom-in-bottom\">\n        <div v-show=\"show2\" class=\"transition-box\">.el-zoom-in-bottom</div>\n      </transition>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    data: () => ({\n      show2: true,\n    }),\n  }\n</script>\n\n<style>\n  .transition-box {\n    margin-bottom: 10px;\n    width: 200px;\n    height: 100px;\n    border-radius: 4px;\n    background-color: #409eff;\n    text-align: center;\n    color: #fff;\n    padding: 40px 20px;\n    box-sizing: border-box;\n    margin-right: 20px;\n  }\n</style>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Colapsado ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Para efectos de colapsado usar el componente "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-collapse-transition"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-button @click=\"show3 = !show3\">Click Me</el-button>\n\n    <div style=\"margin-top: 20px; height: 200px;\">\n      <el-collapse-transition>\n        <div v-show=\"show3\">\n          <div class=\"transition-box\">el-collapse-transition</div>\n          <div class=\"transition-box\">el-collapse-transition</div>\n        </div>\n      </el-collapse-transition>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    data: () => ({\n      show3: true,\n    }),\n  }\n</script>\n\n<style>\n  .transition-box {\n    margin-bottom: 10px;\n    width: 200px;\n    height: 100px;\n    border-radius: 4px;\n    background-color: #409eff;\n    text-align: center;\n    color: #fff;\n    padding: 40px 20px;\n    box-sizing: border-box;\n    margin-right: 20px;\n  }\n</style>\n")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bajo demanda ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// fade/zoom</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/lib/theme-chalk/base.css&#39;</span>\n<span class=\"hljs-comment\">// colapsar</span>\n<span class=\"hljs-keyword\">import</span> { ElCollapseTransition } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n\nVue.component(ElCollapseTransition.name, ElCollapseTransition)\n</code><span class=\"lang-mark\">js</span></pre>", 1);

function transitionvue_type_template_id_9b0d94fc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", transitionvue_type_template_id_9b0d94fc_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "transiciones-incorporadas",
    content: "Transiciones incorporadas",
    href: "#transiciones-incorporadas",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [transitionvue_type_template_id_9b0d94fc_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#transiciones-incorporadas"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [transitionvue_type_template_id_9b0d94fc_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://vuejs.org/v2/api/#transition"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [transitionvue_type_template_id_9b0d94fc_hoisted_4]),
    _: 1
  }), transitionvue_type_template_id_9b0d94fc_hoisted_5]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "fade",
    content: "Fade",
    href: "#fade",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fade"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zoom",
    content: "Zoom",
    href: "#zoom",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zoom"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "colapsado",
    content: "Colapsado",
    href: "#colapsado",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#colapsado"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bajo-demanda",
    content: "Bajo demanda",
    href: "#bajo-demanda",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bajo-demanda"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/transition.md?vue&type=template&id=9b0d94fc

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/transition.md?vue&type=script&lang=ts

/* harmony default export */ var transitionvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        vShow: _vShow,
        createElementVNode: _createElementVNode,
        withDirectives: _withDirectives,
        Transition: _Transition,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      const _hoisted_2 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      const _hoisted_3 = {
        class: "transition-box"
      };
      const _hoisted_4 = {
        class: "transition-box"
      };

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", null, [_createVNode(_component_el_button, {
          onClick: _cache[0] || (_cache[0] = $event => _ctx.show = !_ctx.show)
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createElementVNode("div", _hoisted_2, [_createVNode(_Transition, {
          name: "el-fade-in-linear"
        }, {
          default: _withCtx(() => [_withDirectives(_createElementVNode("div", _hoisted_3, ".el-fade-in-linear", 512), [[_vShow, _ctx.show]])]),
          _: 1
        }), _createVNode(_Transition, {
          name: "el-fade-in"
        }, {
          default: _withCtx(() => [_withDirectives(_createElementVNode("div", _hoisted_4, ".el-fade-in", 512), [[_vShow, _ctx.show]])]),
          _: 1
        })])])]);
      }

      const democomponentExport = {
        data: () => ({
          show: true
        })
      };
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
        vShow: _vShow,
        createElementVNode: _createElementVNode,
        withDirectives: _withDirectives,
        Transition: _Transition,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      const _hoisted_2 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      const _hoisted_3 = {
        class: "transition-box"
      };
      const _hoisted_4 = {
        class: "transition-box"
      };
      const _hoisted_5 = {
        class: "transition-box"
      };

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", null, [_createVNode(_component_el_button, {
          onClick: _cache[0] || (_cache[0] = $event => _ctx.show2 = !_ctx.show2)
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createElementVNode("div", _hoisted_2, [_createVNode(_Transition, {
          name: "el-zoom-in-center"
        }, {
          default: _withCtx(() => [_withDirectives(_createElementVNode("div", _hoisted_3, ".el-zoom-in-center", 512), [[_vShow, _ctx.show2]])]),
          _: 1
        }), _createVNode(_Transition, {
          name: "el-zoom-in-top"
        }, {
          default: _withCtx(() => [_withDirectives(_createElementVNode("div", _hoisted_4, ".el-zoom-in-top", 512), [[_vShow, _ctx.show2]])]),
          _: 1
        }), _createVNode(_Transition, {
          name: "el-zoom-in-bottom"
        }, {
          default: _withCtx(() => [_withDirectives(_createElementVNode("div", _hoisted_5, ".el-zoom-in-bottom", 512), [[_vShow, _ctx.show2]])]),
          _: 1
        })])])]);
      }

      const democomponentExport = {
        data: () => ({
          show2: true
        })
      };
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
        createElementVNode: _createElementVNode,
        vShow: _vShow,
        withDirectives: _withDirectives,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click Me");

      const _hoisted_2 = {
        style: {
          "margin-top": "20px",
          "height": "200px"
        }
      };

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", {
        class: "transition-box"
      }, "el-collapse-transition", -1);

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("div", {
        class: "transition-box"
      }, "el-collapse-transition", -1);

      const _hoisted_5 = [_hoisted_3, _hoisted_4];

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_collapse_transition = _resolveComponent("el-collapse-transition");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", null, [_createVNode(_component_el_button, {
          onClick: _cache[0] || (_cache[0] = $event => _ctx.show3 = !_ctx.show3)
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createElementVNode("div", _hoisted_2, [_createVNode(_component_el_collapse_transition, null, {
          default: _withCtx(() => [_withDirectives(_createElementVNode("div", null, _hoisted_5, 512), [[_vShow, _ctx.show3]])]),
          _: 1
        })])])]);
      }

      const democomponentExport = {
        data: () => ({
          show3: true
        })
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/transition.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/transition.md



transitionvue_type_script_lang_ts.render = transitionvue_type_template_id_9b0d94fc_render

/* harmony default export */ var transition = __webpack_exports__["default"] = (transitionvue_type_script_lang_ts);

/***/ })

}]);