(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[323],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/badge.md?vue&type=template&id=10d070b7

const badgevue_type_template_id_10d070b7_hoisted_1 = {
  class: "content element-doc"
};

const badgevue_type_template_id_10d070b7_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Badge 标记 ");

const badgevue_type_template_id_10d070b7_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "出现在按钮、图标旁的数字或状态标记。", -1);

const badgevue_type_template_id_10d070b7_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const badgevue_type_template_id_10d070b7_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "展示新消息数量。", -1);

const badgevue_type_template_id_10d070b7_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("定义"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性，它接受"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("或者"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。")])], -1);

const badgevue_type_template_id_10d070b7_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-badge :value=\"12\" class=\"item\">\n    <el-button size=\"small\">评论</el-button>\n  </el-badge>\n  <el-badge :value=\"3\" class=\"item\">\n    <el-button size=\"small\">回复</el-button>\n  </el-badge>\n  <el-badge :value=\"1\" class=\"item\" type=\"primary\">\n    <el-button size=\"small\">评论</el-button>\n  </el-badge>\n  <el-badge :value=\"2\" class=\"item\" type=\"warning\">\n    <el-button size=\"small\">回复</el-button>\n  </el-badge>\n\n  <el-dropdown trigger=\"click\">\n    <span class=\"el-dropdown-link\">\n      点我查看<i class=\"el-icon-caret-bottom el-icon--right\"></i>\n    </span>\n    <template #dropdown>\n      <el-dropdown-menu>\n        <el-dropdown-item class=\"clearfix\">\n          评论\n          <el-badge class=\"mark\" :value=\"12\" />\n        </el-dropdown-item>\n        <el-dropdown-item class=\"clearfix\">\n          回复\n          <el-badge class=\"mark\" :value=\"3\" />\n        </el-dropdown-item>\n      </el-dropdown-menu>\n    </template>\n  </el-dropdown>\n</template>\n\n<style>\n  .item {\n    margin-top: 10px;\n    margin-right: 40px;\n  }\n</style>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("最大值 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可自定义最大值。", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("由"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性定义，它接受一个"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，需要注意的是，只有当"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("时，它才会生效。")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-badge :value=\"200\" :max=\"99\" class=\"item\">\n    <el-button size=\"small\">评论</el-button>\n  </el-badge>\n  <el-badge :value=\"100\" :max=\"10\" class=\"item\">\n    <el-button size=\"small\">回复</el-button>\n  </el-badge>\n</template>\n\n<style>\n  .item {\n    margin-top: 10px;\n    margin-right: 40px;\n  }\n</style>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义内容 ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可以显示数字以外的文本内容。", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("定义"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("类型是时可以用于显示自定义文本。")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-badge value=\"new\" class=\"item\">\n    <el-button size=\"small\">评论</el-button>\n  </el-badge>\n  <el-badge value=\"hot\" class=\"item\">\n    <el-button size=\"small\">回复</el-button>\n  </el-badge>\n</template>\n\n<style>\n  .item {\n    margin-top: 10px;\n    margin-right: 40px;\n  }\n</style>\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("小红点 ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "以红点的形式标注需要关注的内容。", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("除了数字外，设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "is-dot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性，它接受一个"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。")])], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-badge is-dot class=\"item\">数据查询</el-badge>\n  <el-badge is-dot class=\"item\">\n    <el-button\n      class=\"share-button\"\n      icon=\"el-icon-share\"\n      type=\"primary\"\n    ></el-button>\n  </el-badge>\n</template>\n\n<style>\n  .item {\n    margin-top: 10px;\n    margin-right: 40px;\n  }\n</style>\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>显示值</td><td>string, number</td><td>—</td><td>—</td></tr><tr><td>max</td><td>最大值，超过最大值会显示 &#39;{max}+&#39;，要求 value 是 Number 类型</td><td>number</td><td>—</td><td>—</td></tr><tr><td>is-dot</td><td>小圆点</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>hidden</td><td>隐藏 badge</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>类型</td><td>string</td><td>primary / success / warning / danger / info</td><td>—</td></tr></tbody></table>", 1);

function badgevue_type_template_id_10d070b7_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", badgevue_type_template_id_10d070b7_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "badge-biao-ji",
    content: "Badge 标记",
    href: "#badge-biao-ji",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [badgevue_type_template_id_10d070b7_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#badge-biao-ji"
    })]),
    _: 1
  }), badgevue_type_template_id_10d070b7_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [badgevue_type_template_id_10d070b7_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), badgevue_type_template_id_10d070b7_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [badgevue_type_template_id_10d070b7_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [badgevue_type_template_id_10d070b7_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zui-da-zhi",
    content: "最大值",
    href: "#zui-da-zhi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zui-da-zhi"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zi-ding-yi-nei-rong",
    content: "自定义内容",
    href: "#zi-ding-yi-nei-rong",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zi-ding-yi-nei-rong"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "xiao-hong-dian",
    content: "小红点",
    href: "#xiao-hong-dian",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiao-hong-dian"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/badge.md?vue&type=template&id=10d070b7

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/badge.md?vue&type=script&lang=ts

/* harmony default export */ var badgevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("评论");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("回复");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("评论");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("回复");

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" 点我查看"), /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-caret-bottom el-icon--right"
      })], -1);

      const _hoisted_6 = /*#__PURE__*/_createTextVNode(" 评论 ");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode(" 回复 ");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_badge = _resolveComponent("el-badge");

        const _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        const _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        const _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_badge, {
          value: 12,
          class: "item"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_badge, {
          value: 3,
          class: "item"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_badge, {
          value: 1,
          class: "item",
          type: "primary"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_badge, {
          value: 2,
          class: "item",
          type: "warning"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          trigger: "click"
        }, {
          dropdown: _withCtx(() => [_createVNode(_component_el_dropdown_menu, null, {
            default: _withCtx(() => [_createVNode(_component_el_dropdown_item, {
              class: "clearfix"
            }, {
              default: _withCtx(() => [_hoisted_6, _createVNode(_component_el_badge, {
                class: "mark",
                value: 12
              })]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, {
              class: "clearfix"
            }, {
              default: _withCtx(() => [_hoisted_7, _createVNode(_component_el_badge, {
                class: "mark",
                value: 3
              })]),
              _: 1
            })]),
            _: 1
          })]),
          default: _withCtx(() => [_hoisted_5]),
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
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("评论");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("回复");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_badge = _resolveComponent("el-badge");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_badge, {
          value: 200,
          max: 99,
          class: "item"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_badge, {
          value: 100,
          max: 10,
          class: "item"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_2]),
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
    "element-demo2": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("评论");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("回复");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_badge = _resolveComponent("el-badge");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_badge, {
          value: "new",
          class: "item"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_badge, {
          value: "hot",
          class: "item"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_2]),
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
    "element-demo3": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("数据查询");

      function render(_ctx, _cache) {
        const _component_el_badge = _resolveComponent("el-badge");

        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_badge, {
          "is-dot": "",
          class: "item"
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_badge, {
          "is-dot": "",
          class: "item"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_button, {
            class: "share-button",
            icon: "el-icon-share",
            type: "primary"
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
// CONCATENATED MODULE: ./website/docs/zh-CN/badge.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/badge.md



badgevue_type_script_lang_ts.render = badgevue_type_template_id_10d070b7_render

/* harmony default export */ var badge = __webpack_exports__["default"] = (badgevue_type_script_lang_ts);

/***/ })

}]);