(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[337],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/scrollbar.md?vue&type=template&id=5772c0fc

const scrollbarvue_type_template_id_5772c0fc_hoisted_1 = {
  class: "content element-doc"
};

const scrollbarvue_type_template_id_5772c0fc_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Scrollbar 滚动条 ");

const scrollbarvue_type_template_id_5772c0fc_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "用于替换浏览器原生滚动条。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "height"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性设置滚动条高度，若不设置则根据父容器高度自适应。")])], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-scrollbar height=\"400px\">\n    <p class=\"item\" v-for=\"item in 20\">{{ item }}</p>\n  </el-scrollbar>\n</template>\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("横向滚动 ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "当元素宽度大于滚动条宽度时，会显示横向滚动条。")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-scrollbar>\n    <div class=\"flex-content\">\n      <p class=\"item\" v-for=\"item in 50\">{{ item }}</p>\n    </div>\n  </el-scrollbar>\n</template>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("最大高度 ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "当元素高度超过最大高度，才会显示滚动条。")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button @click=\"add\">添加元素</el-button>\n  <el-button @click=\"delete\">删除元素</el-button>\n  <el-scrollbar max-height=\"400px\">\n    <p class=\"item\" v-for=\"item in count\">{{ item }}</p>\n  </el-scrollbar>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        count: 3,\n      }\n    },\n    methods: {\n      add() {\n        this.count++\n      },\n      delete() {\n        if (this.count > 0) {\n          this.count--\n        }\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("手动滚动 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "setScrollTop"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 与 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "setScrollLeft"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 方法，可以手动控制滚动条滚动。")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-scrollbar ref=\"scrollbar\" height=\"400px\" always @scroll=\"scroll\">\n    <div ref=\"inner\">\n      <p class=\"item\" v-for=\"item in 20\">{{ item }}</p>\n    </div>\n  </el-scrollbar>\n\n  <el-slider\n    v-model=\"value\"\n    @input=\"inputSlider\"\n    :max=\"max\"\n    :format-tooltip=\"formatTooltip\"\n  ></el-slider>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        max: 0,\n        value: 0,\n      }\n    },\n    mounted() {\n      this.max = this.$refs.inner.clientHeight - 380\n    },\n    methods: {\n      inputSlider(value) {\n        this.$refs.scrollbar.setScrollTop(value)\n      },\n      scroll({ scrollTop }) {\n        this.value = scrollTop\n      },\n      formatTooltip(value) {\n        return `${value} px`\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Scrollbar Attributes ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>滚动条高度</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>max-height</td><td>滚动条最大高度</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>native</td><td>是否使用原生滚动条样式</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>wrap-style</td><td>包裹容器的自定义样式</td><td>string</td><td>—</td><td>—</td></tr><tr><td>wrap-class</td><td>包裹容器的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>view-style</td><td>视图的自定义样式</td><td>string</td><td>—</td><td>—</td></tr><tr><td>view-class</td><td>视图的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>noresize</td><td>不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>tag</td><td>视图的元素标签</td><td>string</td><td>—</td><td>div</td></tr><tr><td>always</td><td>滚动条总是显示</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>min-size</td><td>滚动条最小尺寸</td><td>number</td><td>—</td><td>20</td></tr></tbody></table>", 1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Scrollbar Events ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "事件名称"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "回调参数")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "scroll"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "滚动时触发的事件"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "滚动距离 { scrollLeft, scrollTop }")])])], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Scrollbar Methods ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>setScrollTop</td><td>设置滚动条到顶部的距离</td><td>(scrollTop: number)</td></tr><tr><td>setScrollLeft</td><td>设置滚动条到左边的距离</td><td>(scrollLeft: number)</td></tr><tr><td>update</td><td>手动更新滚动条状态</td><td>—</td></tr></tbody></table>", 1);

function scrollbarvue_type_template_id_5772c0fc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", scrollbarvue_type_template_id_5772c0fc_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "scrollbar-gun-dong-tiao",
    content: "Scrollbar 滚动条",
    href: "#scrollbar-gun-dong-tiao",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [scrollbarvue_type_template_id_5772c0fc_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#scrollbar-gun-dong-tiao"
    })]),
    _: 1
  }), scrollbarvue_type_template_id_5772c0fc_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "heng-xiang-gun-dong",
    content: "横向滚动",
    href: "#heng-xiang-gun-dong",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#heng-xiang-gun-dong"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zui-da-gao-du",
    content: "最大高度",
    href: "#zui-da-gao-du",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zui-da-gao-du"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shou-dong-gun-dong",
    content: "手动滚动",
    href: "#shou-dong-gun-dong",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shou-dong-gun-dong"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "scrollbar-attributes",
    content: "Scrollbar Attributes",
    href: "#scrollbar-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#scrollbar-attributes"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "scrollbar-events",
    content: "Scrollbar Events",
    href: "#scrollbar-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#scrollbar-events"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "scrollbar-methods",
    content: "Scrollbar Methods",
    href: "#scrollbar-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#scrollbar-methods"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/scrollbar.md?vue&type=template&id=5772c0fc

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/scrollbar.md?vue&type=script&lang=ts

/* harmony default export */ var scrollbarvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "item"
      };

      function render(_ctx, _cache) {
        const _component_el_scrollbar = _resolveComponent("el-scrollbar");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_scrollbar, {
          height: "400px"
        }, {
          default: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(20, item => {
            return _createElementVNode("p", _hoisted_1, _toDisplayString(item), 1);
          }), 64))]),
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "flex-content"
      };
      const _hoisted_2 = {
        class: "item"
      };

      function render(_ctx, _cache) {
        const _component_el_scrollbar = _resolveComponent("el-scrollbar");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_scrollbar, null, {
          default: _withCtx(() => [_createElementVNode("div", _hoisted_1, [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(50, item => {
            return _createElementVNode("p", _hoisted_2, _toDisplayString(item), 1);
          }), 64))])]),
          _: 1
        })]);
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("添加元素");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("删除元素");

      const _hoisted_3 = {
        class: "item"
      };

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_scrollbar = _resolveComponent("el-scrollbar");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          onClick: _ctx.add
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          onClick: _ctx.delete
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_scrollbar, {
          "max-height": "400px"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.count, item => {
            return _openBlock(), _createElementBlock("p", _hoisted_3, _toDisplayString(item), 1);
          }), 256))]),
          _: 1
        })]);
      }

      const democomponentExport = {
        data() {
          return {
            count: 3
          };
        },

        methods: {
          add() {
            this.count++;
          },

          delete() {
            if (this.count > 0) {
              this.count--;
            }
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        ref: "inner"
      };
      const _hoisted_2 = {
        class: "item"
      };

      function render(_ctx, _cache) {
        const _component_el_scrollbar = _resolveComponent("el-scrollbar");

        const _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_scrollbar, {
          ref: "scrollbar",
          height: "400px",
          always: "",
          onScroll: _ctx.scroll
        }, {
          default: _withCtx(() => [_createElementVNode("div", _hoisted_1, [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(20, item => {
            return _createElementVNode("p", _hoisted_2, _toDisplayString(item), 1);
          }), 64))], 512)]),
          _: 1
        }, 8, ["onScroll"]), _createVNode(_component_el_slider, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          onInput: _ctx.inputSlider,
          max: _ctx.max,
          "format-tooltip": _ctx.formatTooltip
        }, null, 8, ["modelValue", "onInput", "max", "format-tooltip"])]);
      }

      const democomponentExport = {
        data() {
          return {
            max: 0,
            value: 0
          };
        },

        mounted() {
          this.max = this.$refs.inner.clientHeight - 380;
        },

        methods: {
          inputSlider(value) {
            this.$refs.scrollbar.setScrollTop(value);
          },

          scroll({
            scrollTop
          }) {
            this.value = scrollTop;
          },

          formatTooltip(value) {
            return `${value} px`;
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
// CONCATENATED MODULE: ./website/docs/zh-CN/scrollbar.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/scrollbar.md



scrollbarvue_type_script_lang_ts.render = scrollbarvue_type_template_id_5772c0fc_render

/* harmony default export */ var scrollbar = __webpack_exports__["default"] = (scrollbarvue_type_script_lang_ts);

/***/ })

}]);