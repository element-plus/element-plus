(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[154],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/badge.md?vue&type=template&id=873e346e

var badgevue_type_template_id_873e346e_hoisted_1 = {
  class: "content element-doc"
};

var badgevue_type_template_id_873e346e_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "badge"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#badge"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Badge")], -1);

var badgevue_type_template_id_873e346e_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "ボタンやアイコンの数字やステータスマーク", -1);

var badgevue_type_template_id_873e346e_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-ben-dena-shii-fang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-dena-shii-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基本的な使い方")], -1);

var badgevue_type_template_id_873e346e_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "新しいメッセージの量を表示します。", -1);

var badgevue_type_template_id_873e346e_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("量は "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" で定義します。"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" は "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" または "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を受け入れる。")])], -1);

var badgevue_type_template_id_873e346e_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-badge :value=\"12\" class=\"item\">\n  <el-button size=\"small\">comments</el-button>\n</el-badge>\n<el-badge :value=\"3\" class=\"item\">\n  <el-button size=\"small\">replies</el-button>\n</el-badge>\n<el-badge :value=\"1\" class=\"item\" type=\"primary\">\n  <el-button size=\"small\">comments</el-button>\n</el-badge>\n<el-badge :value=\"2\" class=\"item\" type=\"warning\">\n  <el-button size=\"small\">replies</el-button>\n</el-badge>\n\n<el-dropdown trigger=\"click\">\n  <span class=\"el-dropdown-link\">\n    Click Me<i class=\"el-icon-caret-bottom el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item class=\"clearfix\">\n        comments\n        <el-badge class=\"mark\" :value=\"12\" />\n      </el-dropdown-item>\n      <el-dropdown-item class=\"clearfix\">\n        replies\n        <el-badge class=\"mark\" :value=\"3\" />\n      </el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n.item {\n  margin-top: 10px;\n  margin-right: 40px;\n}\n</style>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zui-da-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zui-da-zhi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 最大値")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "最大値をカスタマイズすることができます。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("最大値はプロパティ "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" で定義され "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" である。value"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "が"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Number` である場合にのみ動作することに注意すること。")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-badge :value=\"200\" :max=\"99\" class=\"item\">\n  <el-button size=\"small\">comments</el-button>\n</el-badge>\n<el-badge :value=\"100\" :max=\"10\" class=\"item\">\n  <el-button size=\"small\">replies</el-button>\n</el-badge>\n\n<style>\n.item {\n  margin-top: 10px;\n  margin-right: 40px;\n}\n</style>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "kasutamaizu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kasutamaizu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" カスタマイズ")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "数字以外のテキスト内容を表示します。", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" が "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" の場合、カスタマイズしたテキストを表示することができる。")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-badge value=\"new\" class=\"item\">\n  <el-button size=\"small\">comments</el-button>\n</el-badge>\n<el-badge value=\"hot\" class=\"item\">\n  <el-button size=\"small\">replies</el-button>\n</el-badge>\n\n<style>\n.item {\n  margin-top: 10px;\n  margin-right: 40px;\n}\n</style>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "xiaosana-chii-dian"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#xiaosana-chii-dian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 小さな赤い点")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "注目すべきコンテンツには、赤い点を使ってマークをつけましょう。", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "is-dot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を用いる。"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" である。")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-badge is-dot class=\"item\">query</el-badge>\n<el-badge is-dot class=\"item\">\n  <el-button class=\"share-button\" icon=\"el-icon-share\" type=\"primary\"></el-button>\n</el-badge>\n\n<style>\n.item {\n  margin-top: 10px;\n  margin-right: 40px;\n}\n</style>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>表示値</td><td>string, number</td><td>—</td><td>—</td></tr><tr><td>max</td><td>最大値を超えると &#39;{max}+&#39; を表示します。<code>value</code> が <code>Number</code> の場合にのみ動作します。</td><td>number</td><td>—</td><td>—</td></tr><tr><td>is-dot</td><td>小さな点が表示されている場合</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>hidden</td><td>かくしbadge</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>ボタンタイプ</td><td>string</td><td>primary / success / warning / danger / info</td><td>—</td></tr></tbody></table>", 2);

function badgevue_type_template_id_873e346e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", badgevue_type_template_id_873e346e_hoisted_1, [badgevue_type_template_id_873e346e_hoisted_2, badgevue_type_template_id_873e346e_hoisted_3, badgevue_type_template_id_873e346e_hoisted_4, badgevue_type_template_id_873e346e_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [badgevue_type_template_id_873e346e_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [badgevue_type_template_id_873e346e_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, _hoisted_17, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_20]);
}
// CONCATENATED MODULE: ./website/docs/jp/badge.md?vue&type=template&id=873e346e

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/badge.md?vue&type=script&lang=ts


/* harmony default export */ var badgevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("comments");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("replies");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("comments");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("replies");

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Click Me"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-caret-bottom el-icon--right"
      })], -1);

      var _hoisted_6 = /*#__PURE__*/_createTextVNode(" comments ");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode(" replies ");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_badge = _resolveComponent("el-badge");

        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_badge, {
          value: 12,
          class: "item"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_badge, {
          value: 3,
          class: "item"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_badge, {
          value: 1,
          class: "item",
          type: "primary"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_badge, {
          value: 2,
          class: "item",
          type: "warning"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          trigger: "click"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, {
                  class: "clearfix"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_6, _createVNode(_component_el_badge, {
                      class: "mark",
                      value: 12
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  class: "clearfix"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_7, _createVNode(_component_el_badge, {
                      class: "mark",
                      value: 3
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("comments");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("replies");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_badge = _resolveComponent("el-badge");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_badge, {
          value: 200,
          max: 99,
          class: "item"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_badge, {
          value: 100,
          max: 10,
          class: "item"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("comments");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("replies");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_badge = _resolveComponent("el-badge");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_badge, {
          value: "new",
          class: "item"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_badge, {
          value: "hot",
          class: "item"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("query");

      function render(_ctx, _cache) {
        var _component_el_badge = _resolveComponent("el-badge");

        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_badge, {
          "is-dot": "",
          class: "item"
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_badge, {
          "is-dot": "",
          class: "item"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              class: "share-button",
              icon: "el-icon-share",
              type: "primary"
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/badge.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/badge.md



badgevue_type_script_lang_ts.render = badgevue_type_template_id_873e346e_render

/* harmony default export */ var badge = __webpack_exports__["default"] = (badgevue_type_script_lang_ts);

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/badge.md?vue&type=template&id=7b3f5168

var badgevue_type_template_id_7b3f5168_hoisted_1 = {
  class: "content element-doc"
};

var badgevue_type_template_id_7b3f5168_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "badge"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#badge"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Badge")], -1);

var badgevue_type_template_id_7b3f5168_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Un nombre ou un status affiché par-dessus un bouton ou un icône.", -1);

var badgevue_type_template_id_7b3f5168_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Usage")], -1);

var badgevue_type_template_id_7b3f5168_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Affiche le nombre de nouveaux messages.", -1);

var badgevue_type_template_id_7b3f5168_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("La quantité est définit par "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" qui accepte un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ou un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var badgevue_type_template_id_7b3f5168_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-badge :value=\"12\" class=\"item\">\n  <el-button size=\"small\">Commentaires</el-button>\n</el-badge>\n<el-badge :value=\"3\" class=\"item\">\n  <el-button size=\"small\">Réponses</el-button>\n</el-badge>\n<el-badge :value=\"1\" class=\"item\" type=\"primary\">\n  <el-button size=\"small\">Commentaires</el-button>\n</el-badge>\n<el-badge :value=\"2\" class=\"item\" type=\"warning\">\n  <el-button size=\"small\">Réponses</el-button>\n</el-badge>\n\n<el-dropdown trigger=\"click\">\n  <span class=\"el-dropdown-link\">\n    Cliquez<i class=\"el-icon-caret-bottom el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu >\n      <el-dropdown-item class=\"clearfix\">\n        Commentaires\n        <el-badge class=\"mark\" :value=\"12\" />\n      </el-dropdown-item>\n      <el-dropdown-item class=\"clearfix\">\n        Réponses\n        <el-badge class=\"mark\" :value=\"3\" />\n      </el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n.item {\n  margin-top: 10px;\n  margin-right: 40px;\n}\n</style>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "valeur-maximale"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#valeur-maximale"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Valeur maximale")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Vous pouvez configurer la valeur maximale.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("La valeur maximale est définit par "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" qui accepte un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Ceci ne marche qui si "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" est également un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-badge :value=\"200\" :max=\"99\" class=\"item\">\n  <el-button size=\"small\">Commentaires</el-button>\n</el-badge>\n<el-badge :value=\"100\" :max=\"10\" class=\"item\">\n  <el-button size=\"small\">Réponses</el-button>\n</el-badge>\n\n<style>\n.item {\n  margin-top: 10px;\n  margin-right: 40px;\n}\n</style>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "configuration"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#configuration"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Configuration")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Affiche du texte autre que des nombres.", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Quand "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" est un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", il affiche un texte personnalisé.")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-badge value=\"new\" class=\"item\">\n  <el-button size=\"small\">Commentaires</el-button>\n</el-badge>\n<el-badge value=\"hot\" class=\"item\">\n  <el-button size=\"small\">Réponses</el-button>\n</el-badge>\n\n<style>\n.item {\n  margin-top: 10px;\n  margin-right: 40px;\n}\n</style>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "point-rouge"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#point-rouge"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Point rouge")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Utilisez un point rouge pour signaler du contenu devant être remarqué.", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilisez l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "is-dot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" qui est un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-badge is-dot class=\"item\">Requète</el-badge>\n<el-badge is-dot class=\"item\">\n  <el-button class=\"share-button\" icon=\"el-icon-share\" type=\"primary\"></el-button>\n</el-badge>\n\n<style>\n.item {\n  margin-top: 10px;\n  margin-right: 40px;\n}\n</style>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributs\"><a class=\"header-anchor\" href=\"#attributs\">¶</a> Attributs</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>value</td><td>Valeur affichée.</td><td>string, number</td><td>—</td><td>—</td></tr><tr><td>max</td><td>Valeur maximale, affiche &#39;{max}+&#39; quand elle est dépassée. Ne marche que si <code>value</code> est un <code>Number</code>.</td><td>number</td><td>—</td><td>—</td></tr><tr><td>is-dot</td><td>Affiche un point rouge.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>hidden</td><td>Cache le badge.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>Type du bouton.</td><td>string</td><td>primary / success / warning / danger / info</td><td>—</td></tr></tbody></table>", 2);

function badgevue_type_template_id_7b3f5168_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", badgevue_type_template_id_7b3f5168_hoisted_1, [badgevue_type_template_id_7b3f5168_hoisted_2, badgevue_type_template_id_7b3f5168_hoisted_3, badgevue_type_template_id_7b3f5168_hoisted_4, badgevue_type_template_id_7b3f5168_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [badgevue_type_template_id_7b3f5168_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [badgevue_type_template_id_7b3f5168_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, _hoisted_17, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_20]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/badge.md?vue&type=template&id=7b3f5168

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/badge.md?vue&type=script&lang=ts


/* harmony default export */ var badgevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Commentaires");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Réponses");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Commentaires");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Réponses");

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Cliquez"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-caret-bottom el-icon--right"
      })], -1);

      var _hoisted_6 = /*#__PURE__*/_createTextVNode(" Commentaires ");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode(" Réponses ");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_badge = _resolveComponent("el-badge");

        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_badge, {
          value: 12,
          class: "item"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_badge, {
          value: 3,
          class: "item"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_badge, {
          value: 1,
          class: "item",
          type: "primary"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_badge, {
          value: 2,
          class: "item",
          type: "warning"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          trigger: "click"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, {
                  class: "clearfix"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_6, _createVNode(_component_el_badge, {
                      class: "mark",
                      value: 12
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  class: "clearfix"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_7, _createVNode(_component_el_badge, {
                      class: "mark",
                      value: 3
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Commentaires");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Réponses");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_badge = _resolveComponent("el-badge");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_badge, {
          value: 200,
          max: 99,
          class: "item"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_badge, {
          value: 100,
          max: 10,
          class: "item"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Commentaires");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Réponses");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_badge = _resolveComponent("el-badge");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_badge, {
          value: "new",
          class: "item"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_badge, {
          value: "hot",
          class: "item"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Requète");

      function render(_ctx, _cache) {
        var _component_el_badge = _resolveComponent("el-badge");

        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_badge, {
          "is-dot": "",
          class: "item"
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_badge, {
          "is-dot": "",
          class: "item"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              class: "share-button",
              icon: "el-icon-share",
              type: "primary"
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/badge.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/badge.md



badgevue_type_script_lang_ts.render = badgevue_type_template_id_7b3f5168_render

/* harmony default export */ var badge = __webpack_exports__["default"] = (badgevue_type_script_lang_ts);

/***/ })

}]);