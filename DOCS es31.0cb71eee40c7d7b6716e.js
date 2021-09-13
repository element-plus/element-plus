(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/infiniteScroll.md?vue&type=template&id=1e393da7

const infiniteScrollvue_type_template_id_1e393da7_hoisted_1 = {
  class: "content element-doc"
};

const infiniteScrollvue_type_template_id_1e393da7_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("InfiniteScroll ");

const infiniteScrollvue_type_template_id_1e393da7_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Cargar más datos mientras se llega al final de la página", -1);

const infiniteScrollvue_type_template_id_1e393da7_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Uso básico ");

const infiniteScrollvue_type_template_id_1e393da7_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Añada "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-infinite-scroll"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a la lista para ejecutar automáticamente el método de carga cuando se desplace hacia abajo.")], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <ul class=\"infinite-list\" v-infinite-scroll=\"load\" style=\"overflow:auto\">\n    <li v-for=\"i in count\" class=\"infinite-list-item\">{{ i }}</li>\n  </ul>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        count: 0,\n      }\n    },\n    methods: {\n      load() {\n        this.count += 2\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const count = ref(0);\n      const load = () => {\n        count.value += 2;\n      };\n      return {\n        count,\n        load,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Deshabilite Loading ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"infinite-list-wrapper\" style=\"overflow:auto\">\n    <ul\n      class=\"list\"\n      v-infinite-scroll=\"load\"\n      infinite-scroll-disabled=\"disabled\"\n    >\n      <li v-for=\"i in count\" class=\"list-item\">{{ i }}</li>\n    </ul>\n    <p v-if=\"loading\">Loading...</p>\n    <p v-if=\"noMore\">No more</p>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        count: 10,\n        loading: false,\n      }\n    },\n    computed: {\n      noMore() {\n        return this.count >= 20\n      },\n      disabled() {\n        return this.loading || this.noMore\n      },\n    },\n    methods: {\n      load() {\n        this.loading = true\n        setTimeout(() => {\n          this.count += 2\n          this.loading = false\n        }, 2000)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref, computed } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const count = ref(10);\n      const loading = ref(false);\n      const noMore = computed(() => count.value >= 20);\n      const disabled = computed(() => loading.value || noMore.value);\n      const load = () => {\n        loading.value = true;\n        setTimeout(() => {\n          count.value += 2;\n          loading.value = false;\n        }, 2000);\n      };\n      return {\n        count,\n        loading,\n        noMore,\n        disabled,\n        load,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributos</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>infinite-scroll-disabled</td><td>si esta disabled</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>infinite-scroll-delay</td><td>retraso en milisegundos</td><td>number</td><td>-</td><td>200</td></tr><tr><td>infinite-scroll-distance</td><td>distancia de activación (px)</td><td>number</td><td>-</td><td>0</td></tr><tr><td>infinite-scroll-immediate</td><td>Si se debe ejecutar el método de carga inmediatamente, en caso de que el contenido no se pueda rellenar en el estado inicial.</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table>", 1);

function infiniteScrollvue_type_template_id_1e393da7_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", infiniteScrollvue_type_template_id_1e393da7_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "infinitescroll",
    content: "InfiniteScroll",
    href: "#infinitescroll",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [infiniteScrollvue_type_template_id_1e393da7_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#infinitescroll"
    })]),
    _: 1
  }), infiniteScrollvue_type_template_id_1e393da7_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [infiniteScrollvue_type_template_id_1e393da7_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#uso-basico"
    })]),
    _: 1
  }), infiniteScrollvue_type_template_id_1e393da7_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "deshabilite-loading",
    content: "Deshabilite Loading",
    href: "#deshabilite-loading",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#deshabilite-loading"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos",
    content: "Atributos",
    href: "#atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/infiniteScroll.md?vue&type=template&id=1e393da7

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/infiniteScroll.md?vue&type=script&lang=ts

/* harmony default export */ var infiniteScrollvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        resolveDirective: _resolveDirective,
        createElementVNode: _createElementVNode,
        withDirectives: _withDirectives
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "infinite-list",
        style: {
          "overflow": "auto"
        }
      };
      const _hoisted_2 = {
        class: "infinite-list-item"
      };

      function render(_ctx, _cache) {
        const _directive_infinite_scroll = _resolveDirective("infinite-scroll");

        return _openBlock(), _createElementBlock("div", null, [_withDirectives(_createElementVNode("ul", _hoisted_1, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.count, i => {
          return _openBlock(), _createElementBlock("li", _hoisted_2, _toDisplayString(i), 1);
        }), 256))], 512), [[_directive_infinite_scroll, _ctx.load]])]);
      }

      const democomponentExport = {
        data() {
          return {
            count: 0
          };
        },

        methods: {
          load() {
            this.count += 2;
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        resolveDirective: _resolveDirective,
        createElementVNode: _createElementVNode,
        withDirectives: _withDirectives,
        createCommentVNode: _createCommentVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "infinite-list-wrapper",
        style: {
          "overflow": "auto"
        }
      };
      const _hoisted_2 = {
        class: "list",
        "infinite-scroll-disabled": "disabled"
      };
      const _hoisted_3 = {
        class: "list-item"
      };
      const _hoisted_4 = {
        key: 0
      };
      const _hoisted_5 = {
        key: 1
      };

      function render(_ctx, _cache) {
        const _directive_infinite_scroll = _resolveDirective("infinite-scroll");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_withDirectives(_createElementVNode("ul", _hoisted_2, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.count, i => {
          return _openBlock(), _createElementBlock("li", _hoisted_3, _toDisplayString(i), 1);
        }), 256))], 512), [[_directive_infinite_scroll, _ctx.load]]), _ctx.loading ? (_openBlock(), _createElementBlock("p", _hoisted_4, "Loading...")) : _createCommentVNode("", true), _ctx.noMore ? (_openBlock(), _createElementBlock("p", _hoisted_5, "No more")) : _createCommentVNode("", true)])]);
      }

      const democomponentExport = {
        data() {
          return {
            count: 10,
            loading: false
          };
        },

        computed: {
          noMore() {
            return this.count >= 20;
          },

          disabled() {
            return this.loading || this.noMore;
          }

        },
        methods: {
          load() {
            this.loading = true;
            setTimeout(() => {
              this.count += 2;
              this.loading = false;
            }, 2000);
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
// CONCATENATED MODULE: ./website/docs/es/infiniteScroll.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/infiniteScroll.md



infiniteScrollvue_type_script_lang_ts.render = infiniteScrollvue_type_template_id_1e393da7_render

/* harmony default export */ var infiniteScroll = __webpack_exports__["default"] = (infiniteScrollvue_type_script_lang_ts);

/***/ })

}]);