(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[284],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/card.md?vue&type=template&id=608a5f4c

var cardvue_type_template_id_608a5f4c_hoisted_1 = {
  class: "content element-doc"
};

var cardvue_type_template_id_608a5f4c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "card"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#card"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Card")], -1);

var cardvue_type_template_id_608a5f4c_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "cardコンテナに情報を統合する", -1);

var cardvue_type_template_id_608a5f4c_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "ji-ben-dena-shii-fang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-dena-shii-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 基本的な使い方")], -1);

var cardvue_type_template_id_608a5f4c_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "cardはタイトル、内容、操作を含む。", -1);

var cardvue_type_template_id_608a5f4c_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("cardは "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "header"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" からなる。ヘッダはオプションであり、その内容の分布はスロットの名前に依存します。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<el-card class=\"box-card\">\n  <template #header>\n    <div class=\"card-header\">\n      <span>Card name</span>\n      <el-button class=\"button\" type=\"text\">Operation button</el-button>\n    </div>\n  </template>\n  <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n    {{'List item ' + o }}\n  </div>\n</el-card>\n\n<style>\n  .card-header {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n  }\n    \n  .text {\n    font-size: 14px;\n  }\n\n  .item {\n    margin-bottom: 18px;\n  }\n\n  .box-card {\n    width: 480px;\n  }\n</style>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "sinpurunacard"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#sinpurunacard"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" シンプルなcard")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "ヘッダー部分は省略可能です。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<el-card class=\"box-card\">\n  <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n    {{'List item ' + o }}\n  </div>\n</el-card>\n\n<style>\n  .text {\n    font-size: 14px;\n  }\n\n  .item {\n    padding: 18px 0;\n  }\n\n  .box-card {\n    width: 480px;\n  }\n</style>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "hua-xiang-fuki"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#hua-xiang-fuki"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 画像付き")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "設定を追加することで、よりリッチなコンテンツを表示することができます。", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "body-style"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性は、カスタム "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" の CSS スタイルを定義します。この例ではレイアウトにも "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "el-col"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" を用いています。")])], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<el-row>\n  <el-col :span=\"8\" v-for=\"(o, index) in 2\" :key=\"o\" :offset=\"index > 0 ? 2 : 0\">\n    <el-card :body-style=\"{ padding: '0px' }\">\n      <img src=\"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png\" class=\"image\">\n      <div style=\"padding: 14px;\">\n        <span>Yummy hamburger</span>\n        <div class=\"bottom\">\n          <time class=\"time\">{{ currentDate }}</time>\n          <el-button type=\"text\" class=\"button\">Operating</el-button>\n        </div>\n      </div>\n    </el-card>\n  </el-col>\n</el-row>\n\n<style>\n  .time {\n    font-size: 13px;\n    color: #999;\n  }\n  \n  .bottom {\n    margin-top: 13px;\n    line-height: 12px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .button {\n    padding: 0;\n    min-height: auto;\n  }\n\n  .image {\n    width: 100%;\n    display: block;\n  }\n</style>\n\n<script>\nexport default {\n  data() {\n    return {\n      currentDate: new Date()\n    };\n  }\n}\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const currentDate = ref(new Date());\n\n      return {\n        currentDate,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "siyadou"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#siyadou"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" シャドウ")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "cardのシャドウを表示するタイミングを定義することができます。", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "shadow"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" 属性は、cardの影をいつ表示するかを決定します。"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "always"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "never"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" のいずれかです。")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<el-row :gutter=\"12\">\n  <el-col :span=\"8\">\n    <el-card shadow=\"always\">\n      Always\n    </el-card>\n  </el-col>\n  <el-col :span=\"8\">\n    <el-card shadow=\"hover\">\n      Hover\n    </el-card>\n  </el-col>\n  <el-col :span=\"8\">\n    <el-card shadow=\"never\">\n      Never\n    </el-card>\n  </el-col>\n</el-row>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>header</td><td>cardのタイトルを指定します。<code>slot#header</code> で渡された DOM も受け付ける。</td><td>string</td><td>—</td><td>—</td></tr><tr><td>body-style</td><td>ボディのCSSスタイル</td><td>object</td><td>—</td><td>{ padding: &#39;20px&#39; }</td></tr><tr><td>shadow</td><td>cardの影を表示するタイミング</td><td>string</td><td>always / hover / never</td><td>always</td></tr></tbody></table>", 2);

function cardvue_type_template_id_608a5f4c_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo3");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", cardvue_type_template_id_608a5f4c_hoisted_1, [cardvue_type_template_id_608a5f4c_hoisted_2, cardvue_type_template_id_608a5f4c_hoisted_3, cardvue_type_template_id_608a5f4c_hoisted_4, cardvue_type_template_id_608a5f4c_hoisted_5, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [cardvue_type_template_id_608a5f4c_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/card.md?vue&type=template&id=608a5f4c

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/card.md?vue&type=script&lang=ts


/* harmony default export */ var cardvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */];
      var _hoisted_1 = {
        class: "card-header"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "Card name", -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Operation button");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_card = _resolveComponent("el-card");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_card, {
          class: "box-card"
        }, {
          header: _withCtx(function () {
            return [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_button, {
              class: "button",
              type: "text"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (o) {
              return _createVNode("div", {
                key: o,
                class: "text item"
              }, _toDisplayString('List item ' + o), 1);
            }), 64))];
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
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_card = _resolveComponent("el-card");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_card, {
          class: "box-card"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (o) {
              return _createVNode("div", {
                key: o,
                class: "text item"
              }, _toDisplayString('List item ' + o), 1);
            }), 64))];
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
      var _renderList = vue_esm_browser_prod["N" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _toDisplayString = vue_esm_browser_prod["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("img", {
        src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        class: "image"
      }, null, -1);

      var _hoisted_2 = {
        style: {
          "padding": "14px"
        }
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", null, "Yummy hamburger", -1);

      var _hoisted_4 = {
        class: "bottom"
      };
      var _hoisted_5 = {
        class: "time"
      };

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Operating");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_card = _resolveComponent("el-card");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, null, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(2, function (o, index) {
              return _createVNode(_component_el_col, {
                span: 8,
                key: o,
                offset: index > 0 ? 2 : 0
              }, {
                default: _withCtx(function () {
                  return [_createVNode(_component_el_card, {
                    "body-style": {
                      padding: '0px'
                    }
                  }, {
                    default: _withCtx(function () {
                      return [_hoisted_1, _createVNode("div", _hoisted_2, [_hoisted_3, _createVNode("div", _hoisted_4, [_createVNode("time", _hoisted_5, _toDisplayString(_ctx.currentDate), 1), _createVNode(_component_el_button, {
                        type: "text",
                        class: "button"
                      }, {
                        default: _withCtx(function () {
                          return [_hoisted_6];
                        }),
                        _: 1
                      })])])];
                    }),
                    _: 1
                  })];
                }),
                _: 2
              }, 1032, ["offset"]);
            }), 64))];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            currentDate: new Date()
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Always ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" Hover ");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode(" Never ");

      function render(_ctx, _cache) {
        var _component_el_card = _resolveComponent("el-card");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          gutter: 12
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_card, {
                  shadow: "always"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_card, {
                  shadow: "hover"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_card, {
                  shadow: "never"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                })];
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
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/card.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/card.md



cardvue_type_script_lang_ts.render = cardvue_type_template_id_608a5f4c_render

/* harmony default export */ var card = __webpack_exports__["default"] = (cardvue_type_script_lang_ts);

/***/ })

}]);