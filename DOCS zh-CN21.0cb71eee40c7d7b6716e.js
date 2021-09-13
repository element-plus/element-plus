(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[303],{

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/descriptions.md?vue&type=template&id=555f42f7

const descriptionsvue_type_template_id_555f42f7_hoisted_1 = {
  class: "content element-doc"
};

const descriptionsvue_type_template_id_555f42f7_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Descriptions 描述列表 ");

const descriptionsvue_type_template_id_555f42f7_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "列表形式展示多个字段。", -1);

const descriptionsvue_type_template_id_555f42f7_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const descriptionsvue_type_template_id_555f42f7_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-descriptions title=\"用户信息\">\n  <el-descriptions-item label=\"用户名\">kooriookami</el-descriptions-item>\n  <el-descriptions-item label=\"手机号\">18100000000</el-descriptions-item>\n  <el-descriptions-item label=\"居住地\">苏州市</el-descriptions-item>\n  <el-descriptions-item label=\"备注\">\n    <el-tag size=\"small\">学校</el-tag>\n  </el-descriptions-item>\n  <el-descriptions-item label=\"联系地址\"\n    >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item\n  >\n</el-descriptions>\n")], -1);

const descriptionsvue_type_template_id_555f42f7_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("不同尺寸 ");

const descriptionsvue_type_template_id_555f42f7_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-radio-group v-model=\"size\">\n    <el-radio label=\"\">默认</el-radio>\n    <el-radio label=\"medium\">中等</el-radio>\n    <el-radio label=\"small\">小型</el-radio>\n    <el-radio label=\"mini\">超小</el-radio>\n  </el-radio-group>\n\n  <el-descriptions\n    class=\"margin-top\"\n    title=\"带边框列表\"\n    :column=\"3\"\n    :size=\"size\"\n    border\n  >\n    <template #extra>\n      <el-button type=\"primary\" size=\"small\">操作</el-button>\n    </template>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-user\"></i>\n        用户名\n      </template>\n      kooriookami\n    </el-descriptions-item>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-mobile-phone\"></i>\n        手机号\n      </template>\n      18100000000\n    </el-descriptions-item>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-location-outline\"></i>\n        居住地\n      </template>\n      苏州市\n    </el-descriptions-item>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-tickets\"></i>\n        备注\n      </template>\n      <el-tag size=\"small\">学校</el-tag>\n    </el-descriptions-item>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-office-building\"></i>\n        联系地址\n      </template>\n      江苏省苏州市吴中区吴中大道 1188 号\n    </el-descriptions-item>\n  </el-descriptions>\n\n  <el-descriptions\n    class=\"margin-top\"\n    title=\"无边框列表\"\n    :column=\"3\"\n    :size=\"size\"\n  >\n    <template #extra>\n      <el-button type=\"primary\" size=\"small\">操作</el-button>\n    </template>\n    <el-descriptions-item label=\"用户名\">kooriookami</el-descriptions-item>\n    <el-descriptions-item label=\"手机号\">18100000000</el-descriptions-item>\n    <el-descriptions-item label=\"居住地\">苏州市</el-descriptions-item>\n    <el-descriptions-item label=\"备注\">\n      <el-tag size=\"small\">学校</el-tag>\n    </el-descriptions-item>\n    <el-descriptions-item label=\"联系地址\"\n      >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item\n    >\n  </el-descriptions>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        size: '',\n      }\n    },\n  }\n</script>\n")], -1);

const descriptionsvue_type_template_id_555f42f7_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("垂直列表 ");

const descriptionsvue_type_template_id_555f42f7_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-descriptions title=\"垂直带边框列表\" direction=\"vertical\" :column=\"4\" border>\n  <el-descriptions-item label=\"用户名\">kooriookami</el-descriptions-item>\n  <el-descriptions-item label=\"手机号\">18100000000</el-descriptions-item>\n  <el-descriptions-item label=\"居住地\" :span=\"2\">苏州市</el-descriptions-item>\n  <el-descriptions-item label=\"备注\">\n    <el-tag size=\"small\">学校</el-tag>\n  </el-descriptions-item>\n  <el-descriptions-item label=\"联系地址\"\n    >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item\n  >\n</el-descriptions>\n\n<el-descriptions\n  class=\"margin-top\"\n  title=\"垂直无边框列表\"\n  :column=\"4\"\n  direction=\"vertical\"\n>\n  <el-descriptions-item label=\"用户名\">kooriookami</el-descriptions-item>\n  <el-descriptions-item label=\"手机号\">18100000000</el-descriptions-item>\n  <el-descriptions-item label=\"居住地\" :span=\"2\">苏州市</el-descriptions-item>\n  <el-descriptions-item label=\"备注\">\n    <el-tag size=\"small\">学校</el-tag>\n  </el-descriptions-item>\n  <el-descriptions-item label=\"联系地址\"\n    >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item\n  >\n</el-descriptions>\n")], -1);

const descriptionsvue_type_template_id_555f42f7_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义样式 ");

const descriptionsvue_type_template_id_555f42f7_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-descriptions title=\"自定义样式列表\" :column=\"3\" border>\n  <el-descriptions-item\n    label=\"用户名\"\n    label-align=\"right\"\n    align=\"center\"\n    label-class-name=\"my-label\"\n    class-name=\"my-content\"\n    width=\"150px\"\n    >kooriookami</el-descriptions-item\n  >\n  <el-descriptions-item label=\"手机号\" label-align=\"right\" align=\"center\"\n    >18100000000</el-descriptions-item\n  >\n  <el-descriptions-item label=\"居住地\" label-align=\"right\" align=\"center\"\n    >苏州市</el-descriptions-item\n  >\n  <el-descriptions-item label=\"备注\" label-align=\"right\" align=\"center\">\n    <el-tag size=\"small\">学校</el-tag>\n  </el-descriptions-item>\n  <el-descriptions-item label=\"联系地址\" label-align=\"right\" align=\"center\"\n    >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item\n  >\n</el-descriptions>\n")], -1);

const descriptionsvue_type_template_id_555f42f7_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Descriptions Attributes ");

const descriptionsvue_type_template_id_555f42f7_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>border</td><td>是否带有边框</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>column</td><td>一行 <code>Descriptions Item</code> 的数量</td><td>number</td><td>—</td><td>3</td></tr><tr><td>direction</td><td>排列的方向</td><td>string</td><td>vertical / horizontal</td><td>horizontal</td></tr><tr><td>size</td><td>列表的尺寸</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>title</td><td>标题文本，显示在左上方</td><td>string</td><td>—</td><td>—</td></tr><tr><td>extra</td><td>操作区文本，显示在右上方</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const descriptionsvue_type_template_id_555f42f7_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Descriptions Slots ");

const descriptionsvue_type_template_id_555f42f7_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "自定义标题，显示在左上方")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "extra"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "自定义操作区，显示在右上方")])])], -1);

const descriptionsvue_type_template_id_555f42f7_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Descriptions Item Attributes ");

const descriptionsvue_type_template_id_555f42f7_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>标签文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>span</td><td>列的数量</td><td>number</td><td>—</td><td>1</td></tr><tr><td>width</td><td>列的宽度，不同行相同列的宽度按最大值设定（如无 <code>border</code> ，宽度包含标签与内容）</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>min-width</td><td>列的最小宽度，与 <code>width</code> 的区别是 <code>width</code> 是固定的，<code>min-width</code> 会把剩余宽度按比例分配给设置了 <code>min-width</code> 的列（如无 <code>border</code>，宽度包含标签与内容）</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>align</td><td>列的内容对齐方式（如无 <code>border</code>，对标签和内容均生效）</td><td>string</td><td>left / center / right</td><td>left</td></tr><tr><td>label-align</td><td>列的标签对齐方式，若不设置该项，则使用内容的对齐方式（如无 <code>border</code>，请使用 <code>align</code> 参数）</td><td>string</td><td>left / center / right</td><td>—</td></tr><tr><td>class-name</td><td>列的内容自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label-class-name</td><td>列的标签自定义类名</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const descriptionsvue_type_template_id_555f42f7_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Descriptions Item Slots ");

const descriptionsvue_type_template_id_555f42f7_hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "自定义标签文本")])])], -1);

function descriptionsvue_type_template_id_555f42f7_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", descriptionsvue_type_template_id_555f42f7_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "descriptions-miao-shu-lie-biao",
    content: "Descriptions 描述列表",
    href: "#descriptions-miao-shu-lie-biao",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [descriptionsvue_type_template_id_555f42f7_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#descriptions-miao-shu-lie-biao"
    })]),
    _: 1
  }), descriptionsvue_type_template_id_555f42f7_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [descriptionsvue_type_template_id_555f42f7_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [descriptionsvue_type_template_id_555f42f7_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bu-tong-chi-cun",
    content: "不同尺寸",
    href: "#bu-tong-chi-cun",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [descriptionsvue_type_template_id_555f42f7_hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bu-tong-chi-cun"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [descriptionsvue_type_template_id_555f42f7_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chui-zhi-lie-biao",
    content: "垂直列表",
    href: "#chui-zhi-lie-biao",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [descriptionsvue_type_template_id_555f42f7_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chui-zhi-lie-biao"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [descriptionsvue_type_template_id_555f42f7_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zi-ding-yi-yang-shi",
    content: "自定义样式",
    href: "#zi-ding-yi-yang-shi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [descriptionsvue_type_template_id_555f42f7_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zi-ding-yi-yang-shi"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [descriptionsvue_type_template_id_555f42f7_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "descriptions-attributes",
    content: "Descriptions Attributes",
    href: "#descriptions-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [descriptionsvue_type_template_id_555f42f7_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#descriptions-attributes"
    })]),
    _: 1
  }), descriptionsvue_type_template_id_555f42f7_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "descriptions-slots",
    content: "Descriptions Slots",
    href: "#descriptions-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [descriptionsvue_type_template_id_555f42f7_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#descriptions-slots"
    })]),
    _: 1
  }), descriptionsvue_type_template_id_555f42f7_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "descriptions-item-attributes",
    content: "Descriptions Item Attributes",
    href: "#descriptions-item-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [descriptionsvue_type_template_id_555f42f7_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#descriptions-item-attributes"
    })]),
    _: 1
  }), descriptionsvue_type_template_id_555f42f7_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "descriptions-item-slots",
    content: "Descriptions Item Slots",
    href: "#descriptions-item-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [descriptionsvue_type_template_id_555f42f7_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#descriptions-item-slots"
    })]),
    _: 1
  }), descriptionsvue_type_template_id_555f42f7_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/descriptions.md?vue&type=template&id=555f42f7

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/descriptions.md?vue&type=script&lang=ts

/* harmony default export */ var descriptionsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("kooriookami");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("18100000000");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("苏州市");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("学校");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("江苏省苏州市吴中区吴中大道 1188 号");

      function render(_ctx, _cache) {
        const _component_el_descriptions_item = _resolveComponent("el-descriptions-item");

        const _component_el_tag = _resolveComponent("el-tag");

        const _component_el_descriptions = _resolveComponent("el-descriptions");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_descriptions, {
          title: "用户信息"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_descriptions_item, {
            label: "用户名"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "手机号"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "居住地"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "备注"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_tag, {
              size: "small"
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "联系地址"
          }, {
            default: _withCtx(() => [_hoisted_5]),
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
    "element-demo1": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("默认");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("中等");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("小型");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("超小");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("操作");

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-user"
      }, null, -1);

      const _hoisted_7 = /*#__PURE__*/_createTextVNode(" 用户名 ");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode(" kooriookami ");

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-mobile-phone"
      }, null, -1);

      const _hoisted_10 = /*#__PURE__*/_createTextVNode(" 手机号 ");

      const _hoisted_11 = /*#__PURE__*/_createTextVNode(" 18100000000 ");

      const _hoisted_12 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-location-outline"
      }, null, -1);

      const _hoisted_13 = /*#__PURE__*/_createTextVNode(" 居住地 ");

      const _hoisted_14 = /*#__PURE__*/_createTextVNode(" 苏州市 ");

      const _hoisted_15 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-tickets"
      }, null, -1);

      const _hoisted_16 = /*#__PURE__*/_createTextVNode(" 备注 ");

      const _hoisted_17 = /*#__PURE__*/_createTextVNode("学校");

      const _hoisted_18 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-office-building"
      }, null, -1);

      const _hoisted_19 = /*#__PURE__*/_createTextVNode(" 联系地址 ");

      const _hoisted_20 = /*#__PURE__*/_createTextVNode(" 江苏省苏州市吴中区吴中大道 1188 号 ");

      const _hoisted_21 = /*#__PURE__*/_createTextVNode("操作");

      const _hoisted_22 = /*#__PURE__*/_createTextVNode("kooriookami");

      const _hoisted_23 = /*#__PURE__*/_createTextVNode("18100000000");

      const _hoisted_24 = /*#__PURE__*/_createTextVNode("苏州市");

      const _hoisted_25 = /*#__PURE__*/_createTextVNode("学校");

      const _hoisted_26 = /*#__PURE__*/_createTextVNode("江苏省苏州市吴中区吴中大道 1188 号");

      function render(_ctx, _cache) {
        const _component_el_radio = _resolveComponent("el-radio");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_descriptions_item = _resolveComponent("el-descriptions-item");

        const _component_el_tag = _resolveComponent("el-tag");

        const _component_el_descriptions = _resolveComponent("el-descriptions");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.size,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.size = $event)
        }, {
          default: _withCtx(() => [_createVNode(_component_el_radio, {
            label: ""
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_radio, {
            label: "medium"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_radio, {
            label: "small"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_radio, {
            label: "mini"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_descriptions, {
          class: "margin-top",
          title: "带边框列表",
          column: 3,
          size: _ctx.size,
          border: ""
        }, {
          extra: _withCtx(() => [_createVNode(_component_el_button, {
            type: "primary",
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          })]),
          default: _withCtx(() => [_createVNode(_component_el_descriptions_item, null, {
            label: _withCtx(() => [_hoisted_6, _hoisted_7]),
            default: _withCtx(() => [_hoisted_8]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, null, {
            label: _withCtx(() => [_hoisted_9, _hoisted_10]),
            default: _withCtx(() => [_hoisted_11]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, null, {
            label: _withCtx(() => [_hoisted_12, _hoisted_13]),
            default: _withCtx(() => [_hoisted_14]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, null, {
            label: _withCtx(() => [_hoisted_15, _hoisted_16]),
            default: _withCtx(() => [_createVNode(_component_el_tag, {
              size: "small"
            }, {
              default: _withCtx(() => [_hoisted_17]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, null, {
            label: _withCtx(() => [_hoisted_18, _hoisted_19]),
            default: _withCtx(() => [_hoisted_20]),
            _: 1
          })]),
          _: 1
        }, 8, ["size"]), _createVNode(_component_el_descriptions, {
          class: "margin-top",
          title: "无边框列表",
          column: 3,
          size: _ctx.size
        }, {
          extra: _withCtx(() => [_createVNode(_component_el_button, {
            type: "primary",
            size: "small"
          }, {
            default: _withCtx(() => [_hoisted_21]),
            _: 1
          })]),
          default: _withCtx(() => [_createVNode(_component_el_descriptions_item, {
            label: "用户名"
          }, {
            default: _withCtx(() => [_hoisted_22]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "手机号"
          }, {
            default: _withCtx(() => [_hoisted_23]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "居住地"
          }, {
            default: _withCtx(() => [_hoisted_24]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "备注"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_tag, {
              size: "small"
            }, {
              default: _withCtx(() => [_hoisted_25]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "联系地址"
          }, {
            default: _withCtx(() => [_hoisted_26]),
            _: 1
          })]),
          _: 1
        }, 8, ["size"])]);
      }

      const democomponentExport = {
        data() {
          return {
            size: ''
          };
        }

      };
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("kooriookami");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("18100000000");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("苏州市");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("学校");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("江苏省苏州市吴中区吴中大道 1188 号");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("kooriookami");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("18100000000");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("苏州市");

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("学校");

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("江苏省苏州市吴中区吴中大道 1188 号");

      function render(_ctx, _cache) {
        const _component_el_descriptions_item = _resolveComponent("el-descriptions-item");

        const _component_el_tag = _resolveComponent("el-tag");

        const _component_el_descriptions = _resolveComponent("el-descriptions");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_descriptions, {
          title: "垂直带边框列表",
          direction: "vertical",
          column: 4,
          border: ""
        }, {
          default: _withCtx(() => [_createVNode(_component_el_descriptions_item, {
            label: "用户名"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "手机号"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "居住地",
            span: 2
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "备注"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_tag, {
              size: "small"
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "联系地址"
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_descriptions, {
          class: "margin-top",
          title: "垂直无边框列表",
          column: 4,
          direction: "vertical"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_descriptions_item, {
            label: "用户名"
          }, {
            default: _withCtx(() => [_hoisted_6]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "手机号"
          }, {
            default: _withCtx(() => [_hoisted_7]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "居住地",
            span: 2
          }, {
            default: _withCtx(() => [_hoisted_8]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "备注"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_tag, {
              size: "small"
            }, {
              default: _withCtx(() => [_hoisted_9]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "联系地址"
          }, {
            default: _withCtx(() => [_hoisted_10]),
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("kooriookami");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("18100000000");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("苏州市");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("学校");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("江苏省苏州市吴中区吴中大道 1188 号");

      function render(_ctx, _cache) {
        const _component_el_descriptions_item = _resolveComponent("el-descriptions-item");

        const _component_el_tag = _resolveComponent("el-tag");

        const _component_el_descriptions = _resolveComponent("el-descriptions");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_descriptions, {
          title: "自定义样式列表",
          column: 3,
          border: ""
        }, {
          default: _withCtx(() => [_createVNode(_component_el_descriptions_item, {
            label: "用户名",
            "label-align": "right",
            align: "center",
            "label-class-name": "my-label",
            "class-name": "my-content",
            width: "150px"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "手机号",
            "label-align": "right",
            align: "center"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "居住地",
            "label-align": "right",
            align: "center"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "备注",
            "label-align": "right",
            align: "center"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_tag, {
              size: "small"
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_descriptions_item, {
            label: "联系地址",
            "label-align": "right",
            align: "center"
          }, {
            default: _withCtx(() => [_hoisted_5]),
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
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/descriptions.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/descriptions.md



descriptionsvue_type_script_lang_ts.render = descriptionsvue_type_template_id_555f42f7_render

/* harmony default export */ var descriptions = __webpack_exports__["default"] = (descriptionsvue_type_script_lang_ts);

/***/ })

}]);