(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/descriptions.md?vue&type=template&id=5c1ebeba

var descriptionsvue_type_template_id_5c1ebeba_hoisted_1 = {
  class: "content element-doc"
};

var descriptionsvue_type_template_id_5c1ebeba_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "descriptions"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#descriptions"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Descriptions")], -1);

var descriptionsvue_type_template_id_5c1ebeba_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Display multiple fields in list form.", -1);

var descriptionsvue_type_template_id_5c1ebeba_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Basic usage")], -1);

var descriptionsvue_type_template_id_5c1ebeba_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-descriptions title=\"User Info\">\n    <el-descriptions-item label=\"Username\">kooriookami</el-descriptions-item>\n    <el-descriptions-item label=\"Telephone\">18100000000</el-descriptions-item>\n    <el-descriptions-item label=\"Place\">Suzhou</el-descriptions-item>\n    <el-descriptions-item label=\"Remarks\">\n      <el-tag size=\"small\">School</el-tag>\n    </el-descriptions-item>\n    <el-descriptions-item label=\"Address\">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>\n</el-descriptions>\n")], -1);

var descriptionsvue_type_template_id_5c1ebeba_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "sizes"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#sizes"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Sizes")], -1);

var descriptionsvue_type_template_id_5c1ebeba_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-radio-group v-model=\"size\">\n    <el-radio label=\"\">Default</el-radio>\n    <el-radio label=\"medium\">Medium</el-radio>\n    <el-radio label=\"small\">Small</el-radio>\n    <el-radio label=\"mini\">Mini</el-radio>\n  </el-radio-group>\n\n  <el-descriptions class=\"margin-top\" title=\"With border\" :column=\"3\" :size=\"size\" border>\n    <template #extra>\n      <el-button type=\"primary\" size=\"small\">Operation</el-button>\n    </template>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-user\"></i>\n        Username\n      </template>\n      kooriookami\n    </el-descriptions-item>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-mobile-phone\"></i>\n        Telephone\n      </template>\n      18100000000\n    </el-descriptions-item>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-location-outline\"></i>\n        Place\n      </template>\n      Suzhou\n    </el-descriptions-item>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-tickets\"></i>\n        Remarks\n      </template>\n      <el-tag size=\"small\">School</el-tag>\n    </el-descriptions-item>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-office-building\"></i>\n        Address\n      </template>\n      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province\n    </el-descriptions-item>\n  </el-descriptions>\n\n  <el-descriptions class=\"margin-top\" title=\"Without border\" :column=\"3\" :size=\"size\">\n    <template #extra>\n      <el-button type=\"primary\" size=\"small\">Operation</el-button>\n    </template>\n    <el-descriptions-item label=\"Username\">kooriookami</el-descriptions-item>\n    <el-descriptions-item label=\"Telephone\">18100000000</el-descriptions-item>\n    <el-descriptions-item label=\"Place\">Suzhou</el-descriptions-item>\n    <el-descriptions-item label=\"Remarks\">\n      <el-tag size=\"small\">School</el-tag>\n    </el-descriptions-item>\n    <el-descriptions-item label=\"Address\">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>\n  </el-descriptions>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        size: ''\n      };\n    }\n  }\n</script>\n")], -1);

var descriptionsvue_type_template_id_5c1ebeba_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "vertical-list"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vertical-list"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Vertical List")], -1);

var descriptionsvue_type_template_id_5c1ebeba_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-descriptions title=\"Vertical list with border\" direction=\"vertical\" :column=\"4\" border>\n  <el-descriptions-item label=\"Username\">kooriookami</el-descriptions-item>\n  <el-descriptions-item label=\"Telephone\">18100000000</el-descriptions-item>\n  <el-descriptions-item label=\"Place\" :span=\"2\">Suzhou</el-descriptions-item>\n  <el-descriptions-item label=\"Remarks\">\n    <el-tag size=\"small\">School</el-tag>\n  </el-descriptions-item>\n  <el-descriptions-item label=\"Address\">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>\n</el-descriptions>\n\n<el-descriptions class=\"margin-top\" title=\"Vertical list without border\" :column=\"4\" direction=\"vertical\">\n  <el-descriptions-item label=\"Username\">kooriookami</el-descriptions-item>\n  <el-descriptions-item label=\"Telephone\">18100000000</el-descriptions-item>\n  <el-descriptions-item label=\"Place\" :span=\"2\">Suzhou</el-descriptions-item>\n  <el-descriptions-item label=\"Remarks\">\n    <el-tag size=\"small\">School</el-tag>\n  </el-descriptions-item>\n  <el-descriptions-item label=\"Address\">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>\n</el-descriptions>\n")], -1);

var descriptionsvue_type_template_id_5c1ebeba_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"descriptions-attributes\"><a class=\"header-anchor\" href=\"#descriptions-attributes\">¶</a> Descriptions Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>border</td><td>with or without border</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>column</td><td>numbers of <code>Descriptions Item</code> in one line</td><td>number</td><td>—</td><td>3</td></tr><tr><td>direction</td><td>direction of list</td><td>string</td><td>vertical / horizontal</td><td>horizontal</td></tr><tr><td>size</td><td>size of list</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>title</td><td>title text, display on the top left</td><td>string</td><td>—</td><td>—</td></tr><tr><td>extra</td><td>extra text, display on the top right</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"descriptions-slots\"><a class=\"header-anchor\" href=\"#descriptions-slots\">¶</a> Descriptions Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>custom title, display on the top left</td></tr><tr><td>extra</td><td>custom extra area, display on the top right</td></tr></tbody></table><h3 id=\"descriptions-item-attributes\"><a class=\"header-anchor\" href=\"#descriptions-item-attributes\">¶</a> Descriptions Item Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>label text</td><td>string</td><td>—</td><td>—</td></tr><tr><td>span</td><td>colspan of column</td><td>number</td><td>—</td><td>1</td></tr></tbody></table><h3 id=\"descriptions-item-slots\"><a class=\"header-anchor\" href=\"#descriptions-item-slots\">¶</a> Descriptions Item Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>label</td><td>custom label</td></tr></tbody></table>", 8);

function descriptionsvue_type_template_id_5c1ebeba_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", descriptionsvue_type_template_id_5c1ebeba_hoisted_1, [descriptionsvue_type_template_id_5c1ebeba_hoisted_2, descriptionsvue_type_template_id_5c1ebeba_hoisted_3, descriptionsvue_type_template_id_5c1ebeba_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_5c1ebeba_hoisted_5];
    }),
    _: 1
  }), descriptionsvue_type_template_id_5c1ebeba_hoisted_6, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_5c1ebeba_hoisted_7];
    }),
    _: 1
  }), descriptionsvue_type_template_id_5c1ebeba_hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_5c1ebeba_hoisted_9];
    }),
    _: 1
  }), descriptionsvue_type_template_id_5c1ebeba_hoisted_10, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/descriptions.md?vue&type=template&id=5c1ebeba

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/descriptions.md?vue&type=script&lang=ts


/* harmony default export */ var descriptionsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("kooriookami");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("18100000000");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Suzhou");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("School");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province");

      function render(_ctx, _cache) {
        var _component_el_descriptions_item = _resolveComponent("el-descriptions-item");

        var _component_el_tag = _resolveComponent("el-tag");

        var _component_el_descriptions = _resolveComponent("el-descriptions");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_descriptions, {
          title: "User Info"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_descriptions_item, {
              label: "Username"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Telephone"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Place"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Remarks"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_tag, {
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Address"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
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
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Default");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Medium");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Small");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Mini");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Operation");

      var _hoisted_6 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-user"
      }, null, -1);

      var _hoisted_7 = /*#__PURE__*/_createTextVNode(" Username ");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode(" kooriookami ");

      var _hoisted_9 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-mobile-phone"
      }, null, -1);

      var _hoisted_10 = /*#__PURE__*/_createTextVNode(" Telephone ");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode(" 18100000000 ");

      var _hoisted_12 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-location-outline"
      }, null, -1);

      var _hoisted_13 = /*#__PURE__*/_createTextVNode(" Place ");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode(" Suzhou ");

      var _hoisted_15 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-tickets"
      }, null, -1);

      var _hoisted_16 = /*#__PURE__*/_createTextVNode(" Remarks ");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("School");

      var _hoisted_18 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-office-building"
      }, null, -1);

      var _hoisted_19 = /*#__PURE__*/_createTextVNode(" Address ");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("Operation");

      var _hoisted_22 = /*#__PURE__*/_createTextVNode("kooriookami");

      var _hoisted_23 = /*#__PURE__*/_createTextVNode("18100000000");

      var _hoisted_24 = /*#__PURE__*/_createTextVNode("Suzhou");

      var _hoisted_25 = /*#__PURE__*/_createTextVNode("School");

      var _hoisted_26 = /*#__PURE__*/_createTextVNode("No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province");

      function render(_ctx, _cache) {
        var _component_el_radio = _resolveComponent("el-radio");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_descriptions_item = _resolveComponent("el-descriptions-item");

        var _component_el_tag = _resolveComponent("el-tag");

        var _component_el_descriptions = _resolveComponent("el-descriptions");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.size,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.size = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio, {
              label: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_radio, {
              label: "medium"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_radio, {
              label: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_radio, {
              label: "mini"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_descriptions, {
          class: "margin-top",
          title: "With border",
          column: 3,
          size: _ctx.size,
          border: ""
        }, {
          extra: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              type: "primary",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_descriptions_item, null, {
              label: _withCtx(function () {
                return [_hoisted_6, _hoisted_7];
              }),
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, null, {
              label: _withCtx(function () {
                return [_hoisted_9, _hoisted_10];
              }),
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, null, {
              label: _withCtx(function () {
                return [_hoisted_12, _hoisted_13];
              }),
              default: _withCtx(function () {
                return [_hoisted_14];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, null, {
              label: _withCtx(function () {
                return [_hoisted_15, _hoisted_16];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_el_tag, {
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_17];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, null, {
              label: _withCtx(function () {
                return [_hoisted_18, _hoisted_19];
              }),
              default: _withCtx(function () {
                return [_hoisted_20];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["size"]), _createVNode(_component_el_descriptions, {
          class: "margin-top",
          title: "Without border",
          column: 3,
          size: _ctx.size
        }, {
          extra: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              type: "primary",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_21];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_descriptions_item, {
              label: "Username"
            }, {
              default: _withCtx(function () {
                return [_hoisted_22];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Telephone"
            }, {
              default: _withCtx(function () {
                return [_hoisted_23];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Place"
            }, {
              default: _withCtx(function () {
                return [_hoisted_24];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Remarks"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_tag, {
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_25];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Address"
            }, {
              default: _withCtx(function () {
                return [_hoisted_26];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["size"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            size: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("kooriookami");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("18100000000");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Suzhou");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("School");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("kooriookami");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("18100000000");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Suzhou");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("School");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province");

      function render(_ctx, _cache) {
        var _component_el_descriptions_item = _resolveComponent("el-descriptions-item");

        var _component_el_tag = _resolveComponent("el-tag");

        var _component_el_descriptions = _resolveComponent("el-descriptions");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_descriptions, {
          title: "Vertical list with border",
          direction: "vertical",
          column: 4,
          border: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_descriptions_item, {
              label: "Username"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Telephone"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Place",
              span: 2
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Remarks"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_tag, {
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Address"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_descriptions, {
          class: "margin-top",
          title: "Vertical list without border",
          column: 4,
          direction: "vertical"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_descriptions_item, {
              label: "Username"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Telephone"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Place",
              span: 2
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Remarks"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_tag, {
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Address"
            }, {
              default: _withCtx(function () {
                return [_hoisted_10];
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
// CONCATENATED MODULE: ./website/docs/en-US/descriptions.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/descriptions.md



descriptionsvue_type_script_lang_ts.render = descriptionsvue_type_template_id_5c1ebeba_render

/* harmony default export */ var descriptions = __webpack_exports__["default"] = (descriptionsvue_type_script_lang_ts);

/***/ })

}]);