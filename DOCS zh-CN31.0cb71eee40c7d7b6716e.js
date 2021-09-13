(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[314],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/infiniteScroll.md?vue&type=template&id=115ba390

const infiniteScrollvue_type_template_id_115ba390_hoisted_1 = {
  class: "content element-doc"
};

const infiniteScrollvue_type_template_id_115ba390_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("InfiniteScroll 无限滚动 ");

const infiniteScrollvue_type_template_id_115ba390_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "滚动至底部时，加载更多数据。", -1);

const infiniteScrollvue_type_template_id_115ba390_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const infiniteScrollvue_type_template_id_115ba390_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("在要实现滚动加载的列表上上添加"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-infinite-scroll"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。")], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <ul class=\"infinite-list\" v-infinite-scroll=\"load\" style=\"overflow:auto\">\n    <li v-for=\"i in count\" class=\"infinite-list-item\">{{ i }}</li>\n  </ul>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        count: 0,\n      }\n    },\n    methods: {\n      load() {\n        this.count += 2\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const count = ref(0);\n      const load = () => {\n        count.value += 2;\n      };\n      return {\n        count,\n        load,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("禁用加载 ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"infinite-list-wrapper\" style=\"overflow:auto\">\n    <ul\n      class=\"list\"\n      v-infinite-scroll=\"load\"\n      infinite-scroll-disabled=\"disabled\"\n    >\n      <li v-for=\"i in count\" class=\"list-item\">{{ i }}</li>\n    </ul>\n    <p v-if=\"loading\">加载中...</p>\n    <p v-if=\"noMore\">没有更多了</p>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        count: 10,\n        loading: false,\n      }\n    },\n    computed: {\n      noMore() {\n        return this.count >= 20\n      },\n      disabled() {\n        return this.loading || this.noMore\n      },\n    },\n    methods: {\n      load() {\n        this.loading = true\n        setTimeout(() => {\n          this.count += 2\n          this.loading = false\n        }, 2000)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref, computed } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const count = ref(10);\n      const loading = ref(false);\n      const noMore = computed(() => count.value >= 20);\n      const disabled = computed(() => loading.value || noMore.value);\n      const load = () => {\n        loading.value = true;\n        setTimeout(() => {\n          count.value += 2;\n          loading.value = false;\n        }, 2000);\n      };\n      return {\n        count,\n        loading,\n        noMore,\n        disabled,\n        load,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>infinite-scroll-disabled</td><td>是否禁用</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>infinite-scroll-delay</td><td>节流时延，单位为 ms</td><td>number</td><td>-</td><td>200</td></tr><tr><td>infinite-scroll-distance</td><td>触发加载的距离阈值，单位为 px</td><td>number</td><td>-</td><td>0</td></tr><tr><td>infinite-scroll-immediate</td><td>是否立即执行加载方法，以防初始状态下内容无法撑满容器。</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table>", 1);

function infiniteScrollvue_type_template_id_115ba390_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", infiniteScrollvue_type_template_id_115ba390_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "infinitescroll-wu-xian-gun-dong",
    content: "InfiniteScroll 无限滚动",
    href: "#infinitescroll-wu-xian-gun-dong",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [infiniteScrollvue_type_template_id_115ba390_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#infinitescroll-wu-xian-gun-dong"
    })]),
    _: 1
  }), infiniteScrollvue_type_template_id_115ba390_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [infiniteScrollvue_type_template_id_115ba390_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), infiniteScrollvue_type_template_id_115ba390_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "jin-yong-jia-zai",
    content: "禁用加载",
    href: "#jin-yong-jia-zai",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#jin-yong-jia-zai"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/infiniteScroll.md?vue&type=template&id=115ba390

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/infiniteScroll.md?vue&type=script&lang=ts

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
        }), 256))], 512), [[_directive_infinite_scroll, _ctx.load]]), _ctx.loading ? (_openBlock(), _createElementBlock("p", _hoisted_4, "加载中...")) : _createCommentVNode("", true), _ctx.noMore ? (_openBlock(), _createElementBlock("p", _hoisted_5, "没有更多了")) : _createCommentVNode("", true)])]);
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
// CONCATENATED MODULE: ./website/docs/zh-CN/infiniteScroll.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/infiniteScroll.md



infiniteScrollvue_type_script_lang_ts.render = infiniteScrollvue_type_template_id_115ba390_render

/* harmony default export */ var infiniteScroll = __webpack_exports__["default"] = (infiniteScrollvue_type_script_lang_ts);

/***/ })

}]);