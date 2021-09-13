(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[251],{

/***/ 961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/badge.md?vue&type=template&id=3ef30bc4

const badgevue_type_template_id_3ef30bc4_hoisted_1 = {
  class: "content element-doc"
};

const badgevue_type_template_id_3ef30bc4_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Badge ");

const badgevue_type_template_id_3ef30bc4_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "ボタンやアイコンの数字やステータスマーク", -1);

const badgevue_type_template_id_3ef30bc4_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基本的な使い方 ");

const badgevue_type_template_id_3ef30bc4_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "新しいメッセージの量を表示します。", -1);

const badgevue_type_template_id_3ef30bc4_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("量は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" で定義します。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" または "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を受け入れる。")])], -1);

const badgevue_type_template_id_3ef30bc4_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-badge :value=\"12\" class=\"item\">\n    <el-button size=\"small\">comments</el-button>\n  </el-badge>\n  <el-badge :value=\"3\" class=\"item\">\n    <el-button size=\"small\">replies</el-button>\n  </el-badge>\n  <el-badge :value=\"1\" class=\"item\" type=\"primary\">\n    <el-button size=\"small\">comments</el-button>\n  </el-badge>\n  <el-badge :value=\"2\" class=\"item\" type=\"warning\">\n    <el-button size=\"small\">replies</el-button>\n  </el-badge>\n\n  <el-dropdown trigger=\"click\">\n    <span class=\"el-dropdown-link\">\n      Click Me<i class=\"el-icon-caret-bottom el-icon--right\"></i>\n    </span>\n    <template #dropdown>\n      <el-dropdown-menu>\n        <el-dropdown-item class=\"clearfix\">\n          comments\n          <el-badge class=\"mark\" :value=\"12\" />\n        </el-dropdown-item>\n        <el-dropdown-item class=\"clearfix\">\n          replies\n          <el-badge class=\"mark\" :value=\"3\" />\n        </el-dropdown-item>\n      </el-dropdown-menu>\n    </template>\n  </el-dropdown>\n</template>\n\n<style>\n  .item {\n    margin-top: 10px;\n    margin-right: 40px;\n  }\n</style>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("最大値 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "最大値をカスタマイズすることができます。", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("最大値はプロパティ "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" で定義され "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" である。value"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "が"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Number` である場合にのみ動作することに注意すること。")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-badge :value=\"200\" :max=\"99\" class=\"item\">\n    <el-button size=\"small\">comments</el-button>\n  </el-badge>\n  <el-badge :value=\"100\" :max=\"10\" class=\"item\">\n    <el-button size=\"small\">replies</el-button>\n  </el-badge>\n</template>\n\n<style>\n  .item {\n    margin-top: 10px;\n    margin-right: 40px;\n  }\n</style>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("カスタマイズ ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "数字以外のテキスト内容を表示します。", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" が "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の場合、カスタマイズしたテキストを表示することができる。")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-badge value=\"new\" class=\"item\">\n    <el-button size=\"small\">comments</el-button>\n  </el-badge>\n  <el-badge value=\"hot\" class=\"item\">\n    <el-button size=\"small\">replies</el-button>\n  </el-badge>\n</template>\n\n<style>\n  .item {\n    margin-top: 10px;\n    margin-right: 40px;\n  }\n</style>\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("小さな赤い点 ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "注目すべきコンテンツには、赤い点を使ってマークをつけましょう。", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "is-dot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を用いる。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" である。")])], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-badge is-dot class=\"item\">query</el-badge>\n  <el-badge is-dot class=\"item\">\n    <el-button\n      class=\"share-button\"\n      icon=\"el-icon-share\"\n      type=\"primary\"\n    ></el-button>\n  </el-badge>\n</template>\n\n<style>\n  .item {\n    margin-top: 10px;\n    margin-right: 40px;\n  }\n</style>\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性 ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>表示値</td><td>string, number</td><td>—</td><td>—</td></tr><tr><td>max</td><td>最大値を超えると &#39;{max}+&#39; を表示します。<code>value</code> が <code>Number</code> の場合にのみ動作します。</td><td>number</td><td>—</td><td>—</td></tr><tr><td>is-dot</td><td>小さな点が表示されている場合</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>hidden</td><td>かくし badge</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>ボタンタイプ</td><td>string</td><td>primary / success / warning / danger / info</td><td>—</td></tr></tbody></table>", 1);

function badgevue_type_template_id_3ef30bc4_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", badgevue_type_template_id_3ef30bc4_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "badge",
    content: "Badge",
    href: "#badge",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [badgevue_type_template_id_3ef30bc4_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#badge"
    })]),
    _: 1
  }), badgevue_type_template_id_3ef30bc4_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-ben-de-nashi-ifang",
    content: "基本的な使い方",
    href: "#ji-ben-de-nashi-ifang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [badgevue_type_template_id_3ef30bc4_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-ben-de-nashi-ifang"
    })]),
    _: 1
  }), badgevue_type_template_id_3ef30bc4_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [badgevue_type_template_id_3ef30bc4_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [badgevue_type_template_id_3ef30bc4_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zui-da-zhi",
    content: "最大値",
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
    id: "kasutamaizu",
    content: "カスタマイズ",
    href: "#kasutamaizu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kasutamaizu"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "xiao-sanachi-idian",
    content: "小さな赤い点",
    href: "#xiao-sanachi-idian",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiao-sanachi-idian"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/badge.md?vue&type=template&id=3ef30bc4

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/badge.md?vue&type=script&lang=ts

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("comments");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("replies");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("comments");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("replies");

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Click Me"), /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-caret-bottom el-icon--right"
      })], -1);

      const _hoisted_6 = /*#__PURE__*/_createTextVNode(" comments ");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode(" replies ");

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("comments");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("replies");

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("comments");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("replies");

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("query");

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
// CONCATENATED MODULE: ./website/docs/jp/badge.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/badge.md



badgevue_type_script_lang_ts.render = badgevue_type_template_id_3ef30bc4_render

/* harmony default export */ var badge = __webpack_exports__["default"] = (badgevue_type_script_lang_ts);

/***/ })

}]);