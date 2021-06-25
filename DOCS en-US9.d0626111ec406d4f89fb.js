(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/card.md?vue&type=template&id=b3dfe3da

var cardvue_type_template_id_b3dfe3da_hoisted_1 = {
  class: "content element-doc"
};

var cardvue_type_template_id_b3dfe3da_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "card"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#card"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Card")], -1);

var cardvue_type_template_id_b3dfe3da_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Integrate information in a card container.", -1);

var cardvue_type_template_id_b3dfe3da_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Basic usage")], -1);

var cardvue_type_template_id_b3dfe3da_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Card includes title, content and operations.", -1);

var cardvue_type_template_id_b3dfe3da_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Card is made up of "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "header"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "header"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" is optional, and its content distribution depends on a named slot.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-card class=\"box-card\">\n  <template #header>\n    <div class=\"card-header\">\n      <span>Card name</span>\n      <el-button class=\"button\" type=\"text\">Operation button</el-button>\n    </div>\n  </template>\n  <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n    {{'List item ' + o }}\n  </div>\n</el-card>\n\n<style>\n  .card-header {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n  }\n    \n  .text {\n    font-size: 14px;\n  }\n\n  .item {\n    margin-bottom: 18px;\n  }\n\n  .box-card {\n    width: 480px;\n  }\n</style>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "simple-card"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#simple-card"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Simple card")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "The header part can be omitted.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-card class=\"box-card\">\n  <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n    {{'List item ' + o }}\n  </div>\n</el-card>\n\n<style>\n  .text {\n    font-size: 14px;\n  }\n\n  .item {\n    padding: 18px 0;\n  }\n\n  .box-card {\n    width: 480px;\n  }\n</style>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "with-images"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#with-images"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" With images")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Display richer content by adding some configs.", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("The "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "body-style"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute defines CSS style of custom "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". This example also uses "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-col"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" for layout.")])], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-row>\n  <el-col :span=\"8\" v-for=\"(o, index) in 2\" :key=\"o\" :offset=\"index > 0 ? 2 : 0\">\n    <el-card :body-style=\"{ padding: '0px' }\">\n      <img src=\"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png\" class=\"image\">\n      <div style=\"padding: 14px;\">\n        <span>Yummy hamburger</span>\n        <div class=\"bottom\">\n          <time class=\"time\">{{ currentDate }}</time>\n          <el-button type=\"text\" class=\"button\">Operating</el-button>\n        </div>\n      </div>\n    </el-card>\n  </el-col>\n</el-row>\n\n<style>\n  .time {\n    font-size: 13px;\n    color: #999;\n  }\n  \n  .bottom {\n    margin-top: 13px;\n    line-height: 12px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .button {\n    padding: 0;\n    min-height: auto;\n  }\n\n  .image {\n    width: 100%;\n    display: block;\n  }\n</style>\n\n<script>\nexport default {\n  data() {\n    return {\n      currentDate: new Date()\n    };\n  }\n}\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const currentDate = ref(new Date());\n\n      return {\n        currentDate,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "shadow"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shadow"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Shadow")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "You can define when to show the card shadows", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("The "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "shadow"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute determines when the card shadows are displayed. It can be "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "always"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" or "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "never"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-row :gutter=\"12\">\n  <el-col :span=\"8\">\n    <el-card shadow=\"always\">\n      Always\n    </el-card>\n  </el-col>\n  <el-col :span=\"8\">\n    <el-card shadow=\"hover\">\n      Hover\n    </el-card>\n  </el-col>\n  <el-col :span=\"8\">\n    <el-card shadow=\"never\">\n      Never\n    </el-card>\n  </el-col>\n</el-row>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>header</td><td>title of the card. Also accepts a DOM passed by <code>slot#header</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>body-style</td><td>CSS style of body</td><td>object</td><td>—</td><td>{ padding: &#39;20px&#39; }</td></tr><tr><td>shadow</td><td>when to show card shadows</td><td>string</td><td>always / hover / never</td><td>always</td></tr></tbody></table>", 2);

function cardvue_type_template_id_b3dfe3da_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", cardvue_type_template_id_b3dfe3da_hoisted_1, [cardvue_type_template_id_b3dfe3da_hoisted_2, cardvue_type_template_id_b3dfe3da_hoisted_3, cardvue_type_template_id_b3dfe3da_hoisted_4, cardvue_type_template_id_b3dfe3da_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [cardvue_type_template_id_b3dfe3da_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/card.md?vue&type=template&id=b3dfe3da

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/card.md?vue&type=script&lang=ts


/* harmony default export */ var cardvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */];
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
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */];

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
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */];

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
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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
// CONCATENATED MODULE: ./website/docs/en-US/card.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/card.md



cardvue_type_script_lang_ts.render = cardvue_type_template_id_b3dfe3da_render

/* harmony default export */ var card = __webpack_exports__["default"] = (cardvue_type_script_lang_ts);

/***/ })

}]);