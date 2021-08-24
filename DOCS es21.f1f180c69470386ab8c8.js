(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/descriptions.md?vue&type=template&id=a7cf52a0

var descriptionsvue_type_template_id_a7cf52a0_hoisted_1 = {
  class: "content element-doc"
};

var descriptionsvue_type_template_id_a7cf52a0_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Descriptions ");

var descriptionsvue_type_template_id_a7cf52a0_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Display multiple fields in list form.", -1);

var descriptionsvue_type_template_id_a7cf52a0_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Basic usage ");

var descriptionsvue_type_template_id_a7cf52a0_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-descriptions title=\"User Info\">\n  <el-descriptions-item label=\"Username\">kooriookami</el-descriptions-item>\n  <el-descriptions-item label=\"Telephone\">18100000000</el-descriptions-item>\n  <el-descriptions-item label=\"Place\">Suzhou</el-descriptions-item>\n  <el-descriptions-item label=\"Remarks\">\n    <el-tag size=\"small\">School</el-tag>\n  </el-descriptions-item>\n  <el-descriptions-item label=\"Address\">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>\n</el-descriptions>\n")], -1);

var descriptionsvue_type_template_id_a7cf52a0_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Sizes ");

var descriptionsvue_type_template_id_a7cf52a0_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-radio-group v-model=\"size\">\n    <el-radio label=\"\">Default</el-radio>\n    <el-radio label=\"medium\">Medium</el-radio>\n    <el-radio label=\"small\">Small</el-radio>\n    <el-radio label=\"mini\">Mini</el-radio>\n  </el-radio-group>\n\n  <el-descriptions class=\"margin-top\" title=\"With border\" :column=\"3\" :size=\"size\" border>\n    <template #extra>\n      <el-button type=\"primary\" size=\"small\">Operation</el-button>\n    </template>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-user\"></i>\n        Username\n      </template>\n      kooriookami\n    </el-descriptions-item>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-mobile-phone\"></i>\n        Telephone\n      </template>\n      18100000000\n    </el-descriptions-item>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-location-outline\"></i>\n        Place\n      </template>\n      Suzhou\n    </el-descriptions-item>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-tickets\"></i>\n        Remarks\n      </template>\n      <el-tag size=\"small\">School</el-tag>\n    </el-descriptions-item>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-office-building\"></i>\n        Address\n      </template>\n      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province\n    </el-descriptions-item>\n  </el-descriptions>\n\n  <el-descriptions class=\"margin-top\" title=\"Without border\" :column=\"3\" :size=\"size\">\n    <template #extra>\n      <el-button type=\"primary\" size=\"small\">Operation</el-button>\n    </template>\n    <el-descriptions-item label=\"Username\">kooriookami</el-descriptions-item>\n    <el-descriptions-item label=\"Telephone\">18100000000</el-descriptions-item>\n    <el-descriptions-item label=\"Place\">Suzhou</el-descriptions-item>\n    <el-descriptions-item label=\"Remarks\">\n      <el-tag size=\"small\">School</el-tag>\n    </el-descriptions-item>\n    <el-descriptions-item label=\"Address\">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>\n  </el-descriptions>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        size: ''\n      };\n    }\n  }\n</script>\n")], -1);

var descriptionsvue_type_template_id_a7cf52a0_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Vertical List ");

var descriptionsvue_type_template_id_a7cf52a0_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-descriptions title=\"Vertical list with border\" direction=\"vertical\" :column=\"4\" border>\n  <el-descriptions-item label=\"Username\">kooriookami</el-descriptions-item>\n  <el-descriptions-item label=\"Telephone\">18100000000</el-descriptions-item>\n  <el-descriptions-item label=\"Place\" :span=\"2\">Suzhou</el-descriptions-item>\n  <el-descriptions-item label=\"Remarks\">\n    <el-tag size=\"small\">School</el-tag>\n  </el-descriptions-item>\n  <el-descriptions-item label=\"Address\">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>\n</el-descriptions>\n\n<el-descriptions class=\"margin-top\" title=\"Vertical list without border\" :column=\"4\" direction=\"vertical\">\n  <el-descriptions-item label=\"Username\">kooriookami</el-descriptions-item>\n  <el-descriptions-item label=\"Telephone\">18100000000</el-descriptions-item>\n  <el-descriptions-item label=\"Place\" :span=\"2\">Suzhou</el-descriptions-item>\n  <el-descriptions-item label=\"Remarks\">\n    <el-tag size=\"small\">School</el-tag>\n  </el-descriptions-item>\n  <el-descriptions-item label=\"Address\">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>\n</el-descriptions>\n")], -1);

var descriptionsvue_type_template_id_a7cf52a0_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Customized Style ");

var descriptionsvue_type_template_id_a7cf52a0_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-descriptions title=\"Customized style list\" :column=\"3\" border>\n  <el-descriptions-item label=\"Username\" label-align=\"right\" align=\"center\" label-class-name=\"my-label\" class-name=\"my-content\" width=\"150px\">kooriookami</el-descriptions-item>\n  <el-descriptions-item label=\"Telephone\" label-align=\"right\" align=\"center\">18100000000</el-descriptions-item>\n  <el-descriptions-item label=\"Place\" label-align=\"right\" align=\"center\">Suzhou</el-descriptions-item>\n  <el-descriptions-item label=\"Remarks\" label-align=\"right\" align=\"center\">\n    <el-tag size=\"small\">School</el-tag>\n  </el-descriptions-item>\n  <el-descriptions-item label=\"Address\" label-align=\"right\" align=\"center\">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>\n</el-descriptions>\n")], -1);

var descriptionsvue_type_template_id_a7cf52a0_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Descriptions Attributes ");

var descriptionsvue_type_template_id_a7cf52a0_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>border</td><td>with or without border</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>column</td><td>numbers of <code>Descriptions Item</code> in one line</td><td>number</td><td>—</td><td>3</td></tr><tr><td>direction</td><td>direction of list</td><td>string</td><td>vertical / horizontal</td><td>horizontal</td></tr><tr><td>size</td><td>size of list</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>title</td><td>title text, display on the top left</td><td>string</td><td>—</td><td>—</td></tr><tr><td>extra</td><td>extra text, display on the top right</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

var descriptionsvue_type_template_id_a7cf52a0_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Descriptions Slots ");

var descriptionsvue_type_template_id_a7cf52a0_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "custom title, display on the top left")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "extra"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "custom extra area, display on the top right")])])], -1);

var descriptionsvue_type_template_id_a7cf52a0_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Descriptions Item Attributes ");

var descriptionsvue_type_template_id_a7cf52a0_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>label text</td><td>string</td><td>—</td><td>—</td></tr><tr><td>span</td><td>colspan of column</td><td>number</td><td>—</td><td>1</td></tr><tr><td>width</td><td>column width, the width of the same column in different rows is set by the max value (If no <code>border</code>, width contains label and content)</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>min-width</td><td>column minimum width, columns with <code>width</code> has a fixed width, while columns with <code>min-width</code> has a width that is distributed in proportion (If no<code>border</code>, width contains label and content)</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>align</td><td>column content alignment (If no <code>border</code>, effective for both label and content)</td><td>string</td><td>left / center / right</td><td>left</td></tr><tr><td>label-align</td><td>column label alignment, if omitted, the value of the above <code>align</code> attribute will be applied (If no <code>border</code>, please use <code>align</code> attribute)</td><td>string</td><td>left / center / right</td><td>—</td></tr><tr><td>class-name</td><td>column content custom class name</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label-class-name</td><td>column label custom class name</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

var descriptionsvue_type_template_id_a7cf52a0_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Descriptions Item Slots ");

var descriptionsvue_type_template_id_a7cf52a0_hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "custom label")])])], -1);

function descriptionsvue_type_template_id_a7cf52a0_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", descriptionsvue_type_template_id_a7cf52a0_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "descriptions",
    content: "Descriptions",
    href: "#descriptions",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_a7cf52a0_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#descriptions"
      })];
    }),
    _: 1
  }), descriptionsvue_type_template_id_a7cf52a0_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_a7cf52a0_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#basic-usage"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_a7cf52a0_hoisted_5];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "sizes",
    content: "Sizes",
    href: "#sizes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_a7cf52a0_hoisted_6, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#sizes"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_a7cf52a0_hoisted_7];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "vertical-list",
    content: "Vertical List",
    href: "#vertical-list",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_a7cf52a0_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#vertical-list"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_a7cf52a0_hoisted_9];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "customized-style",
    content: "Customized Style",
    href: "#customized-style",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_a7cf52a0_hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#customized-style"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_a7cf52a0_hoisted_11];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "descriptions-attributes",
    content: "Descriptions Attributes",
    href: "#descriptions-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_a7cf52a0_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#descriptions-attributes"
      })];
    }),
    _: 1
  }), descriptionsvue_type_template_id_a7cf52a0_hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "descriptions-slots",
    content: "Descriptions Slots",
    href: "#descriptions-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_a7cf52a0_hoisted_14, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#descriptions-slots"
      })];
    }),
    _: 1
  }), descriptionsvue_type_template_id_a7cf52a0_hoisted_15, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "descriptions-item-attributes",
    content: "Descriptions Item Attributes",
    href: "#descriptions-item-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_a7cf52a0_hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#descriptions-item-attributes"
      })];
    }),
    _: 1
  }), descriptionsvue_type_template_id_a7cf52a0_hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "descriptions-item-slots",
    content: "Descriptions Item Slots",
    href: "#descriptions-item-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_a7cf52a0_hoisted_18, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#descriptions-item-slots"
      })];
    }),
    _: 1
  }), descriptionsvue_type_template_id_a7cf52a0_hoisted_19, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/descriptions.md?vue&type=template&id=a7cf52a0

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/descriptions.md?vue&type=script&lang=ts


/* harmony default export */ var descriptionsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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
    }(),
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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
          title: "Customized style list",
          column: 3,
          border: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_descriptions_item, {
              label: "Username",
              "label-align": "right",
              align: "center",
              "label-class-name": "my-label",
              "class-name": "my-content",
              width: "150px"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Telephone",
              "label-align": "right",
              align: "center"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Place",
              "label-align": "right",
              align: "center"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "Remarks",
              "label-align": "right",
              align: "center"
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
              label: "Address",
              "label-align": "right",
              align: "center"
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
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/descriptions.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/descriptions.md



descriptionsvue_type_script_lang_ts.render = descriptionsvue_type_template_id_a7cf52a0_render

/* harmony default export */ var descriptions = __webpack_exports__["default"] = (descriptionsvue_type_script_lang_ts);

/***/ })

}]);