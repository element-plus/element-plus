(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[348],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/tag.md?vue&type=template&id=60b65678

const tagvue_type_template_id_60b65678_hoisted_1 = {
  class: "content element-doc"
};

const tagvue_type_template_id_60b65678_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tag 标签 ");

const tagvue_type_template_id_60b65678_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "用于标记和选择。", -1);

const tagvue_type_template_id_60b65678_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const tagvue_type_template_id_60b65678_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("由"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性来选择 tag 的类型，也可以通过"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "color"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性来自定义背景色。")])], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-tag>标签一</el-tag>\n  <el-tag type=\"success\">标签二</el-tag>\n  <el-tag type=\"info\">标签三</el-tag>\n  <el-tag type=\"warning\">标签四</el-tag>\n  <el-tag type=\"danger\">标签五</el-tag>\n</template>\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可移除标签 ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "closable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disable-transitions"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性，它接受一个"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，true 为关闭。")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-tag v-for=\"tag in tags\" :key=\"tag.name\" closable :type=\"tag.type\">\n    {{tag.name}}\n  </el-tag>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tags: [\n          { name: '标签一', type: '' },\n          { name: '标签二', type: 'success' },\n          { name: '标签三', type: 'info' },\n          { name: '标签四', type: 'warning' },\n          { name: '标签五', type: 'danger' },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("动态编辑标签 ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("动态编辑标签可以通过点击标签关闭按钮后触发的 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "close"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 事件来实现")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-tag\n    :key=\"tag\"\n    v-for=\"tag in dynamicTags\"\n    closable\n    :disable-transitions=\"false\"\n    @close=\"handleClose(tag)\"\n  >\n    {{tag}}\n  </el-tag>\n  <el-input\n    class=\"input-new-tag\"\n    v-if=\"inputVisible\"\n    v-model=\"inputValue\"\n    ref=\"saveTagInput\"\n    size=\"small\"\n    @keyup.enter=\"handleInputConfirm\"\n    @blur=\"handleInputConfirm\"\n  >\n  </el-input>\n  <el-button v-else class=\"button-new-tag\" size=\"small\" @click=\"showInput\"\n    >+ New Tag</el-button\n  >\n</template>\n\n<style>\n  .el-tag + .el-tag {\n    margin-left: 10px;\n  }\n  .button-new-tag {\n    margin-left: 10px;\n    height: 32px;\n    line-height: 30px;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n  .input-new-tag {\n    width: 90px;\n    margin-left: 10px;\n    vertical-align: bottom;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        dynamicTags: ['标签一', '标签二', '标签三'],\n        inputVisible: false,\n        inputValue: '',\n      }\n    },\n    methods: {\n      handleClose(tag) {\n        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)\n      },\n\n      showInput() {\n        this.inputVisible = true\n        this.$nextTick((_) => {\n          this.$refs.saveTagInput.$refs.input.focus()\n        })\n      },\n\n      handleInputConfirm() {\n        let inputValue = this.inputValue\n        if (inputValue) {\n          this.dynamicTags.push(inputValue)\n        }\n        this.inputVisible = false\n        this.inputValue = ''\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("不同尺寸 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。", -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("额外的尺寸："), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "medium"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "mini"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，通过设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性来配置它们。")])], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-tag closable>默认标签</el-tag>\n  <el-tag size=\"medium\" closable>中等标签</el-tag>\n  <el-tag size=\"small\" closable>小型标签</el-tag>\n  <el-tag size=\"mini\" closable>超小标签</el-tag>\n</template>\n")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("不同主题 ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tag 组件提供了三个不同的主题："), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "light"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "plain")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "effect"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性来改变主题，默认为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "light")])], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"tag-group\">\n    <span class=\"tag-group__title\">Dark</span>\n    <el-tag\n      v-for=\"item in items\"\n      :key=\"item.label\"\n      :type=\"item.type\"\n      effect=\"dark\"\n    >\n      {{ item.label }}\n    </el-tag>\n  </div>\n  <div class=\"tag-group\">\n    <span class=\"tag-group__title\">Plain</span>\n    <el-tag\n      v-for=\"item in items\"\n      :key=\"item.label\"\n      :type=\"item.type\"\n      effect=\"plain\"\n    >\n      {{ item.label }}\n    </el-tag>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        items: [\n          { type: '', label: '标签一' },\n          { type: 'success', label: '标签二' },\n          { type: 'info', label: '标签三' },\n          { type: 'danger', label: '标签四' },\n          { type: 'warning', label: '标签五' },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("类似复选框的标签 ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("有时候因为业务需求，我们可能会需要用到类似复选框的标签，但是按钮式的复选框的样式又不满足需求，此时我们就可以用到 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "check-tag")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "check-tag 的基础使用方法，check-tag 提供的 API 非常简单")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-space>\n    <el-check-tag checked>选中</el-check-tag>\n    <el-check-tag @change=\"onChange\" :checked=\"checked\">点我切换</el-check-tag>\n    <el-check-tag v-model:checked=\"checked\">通过 v-model</el-check-tag>\n  </el-space>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        checked: false,\n      }\n    },\n    methods: {\n      onChange(checked) {\n        this.checked = checked\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td>string</td><td>success/info/warning/danger</td><td>—</td></tr><tr><td>closable</td><td>是否可关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disable-transitions</td><td>是否禁用渐变动画</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>hit</td><td>是否有边框描边</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>color</td><td>背景色</td><td>string</td><td>—</td><td>—</td></tr><tr><td>size</td><td>尺寸</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>effect</td><td>主题</td><td>string</td><td>dark / light / plain</td><td>light</td></tr></tbody></table>", 1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Events ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击 Tag 时触发的事件</td><td>—</td></tr><tr><td>close</td><td>关闭 Tag 时触发的事件</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("CheckTag Attributes ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:checked / checked</td><td>是否选中</td><td>boolean</td><td>true/false</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("CheckTag Events ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>点击 Check Tag 时触发的事件</td><td>checked</td></tr><tr><td>update:checked</td><td>点击 Check Tag 时触发的事件</td><td>checked</td></tr></tbody></table>", 1);

function tagvue_type_template_id_60b65678_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_element_demo5 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo5");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", tagvue_type_template_id_60b65678_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tag-biao-qian",
    content: "Tag 标签",
    href: "#tag-biao-qian",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tagvue_type_template_id_60b65678_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tag-biao-qian"
    })]),
    _: 1
  }), tagvue_type_template_id_60b65678_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tagvue_type_template_id_60b65678_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tagvue_type_template_id_60b65678_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ke-yi-chu-biao-qian",
    content: "可移除标签",
    href: "#ke-yi-chu-biao-qian",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ke-yi-chu-biao-qian"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dong-tai-bian-ji-biao-qian",
    content: "动态编辑标签",
    href: "#dong-tai-bian-ji-biao-qian",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dong-tai-bian-ji-biao-qian"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bu-tong-chi-cun",
    content: "不同尺寸",
    href: "#bu-tong-chi-cun",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bu-tong-chi-cun"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bu-tong-zhu-ti",
    content: "不同主题",
    href: "#bu-tong-zhu-ti",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bu-tong-zhu-ti"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "lei-si-fu-xuan-kuang-de-biao-qian",
    content: "类似复选框的标签",
    href: "#lei-si-fu-xuan-kuang-de-biao-qian",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#lei-si-fu-xuan-kuang-de-biao-qian"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
    })]),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "events",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checktag-attributes",
    content: "CheckTag Attributes",
    href: "#checktag-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checktag-attributes"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checktag-events",
    content: "CheckTag Events",
    href: "#checktag-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checktag-events"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/tag.md?vue&type=template&id=60b65678

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/tag.md?vue&type=script&lang=ts

/* harmony default export */ var tagvue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("标签一");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("标签二");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("标签三");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("标签四");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("标签五");

      function render(_ctx, _cache) {
        const _component_el_tag = _resolveComponent("el-tag");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tag, null, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_tag, {
          type: "success"
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }), _createVNode(_component_el_tag, {
          type: "info"
        }, {
          default: _withCtx(() => [_hoisted_3]),
          _: 1
        }), _createVNode(_component_el_tag, {
          type: "warning"
        }, {
          default: _withCtx(() => [_hoisted_4]),
          _: 1
        }), _createVNode(_component_el_tag, {
          type: "danger"
        }, {
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createBlock: _createBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_tag = _resolveComponent("el-tag");

        return _openBlock(), _createElementBlock("div", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.tags, tag => {
          return _openBlock(), _createBlock(_component_el_tag, {
            key: tag.name,
            closable: "",
            type: tag.type
          }, {
            default: _withCtx(() => [_createTextVNode(_toDisplayString(tag.name), 1)]),
            _: 2
          }, 1032, ["type"]);
        }), 128))]);
      }

      const democomponentExport = {
        data() {
          return {
            tags: [{
              name: '标签一',
              type: ''
            }, {
              name: '标签二',
              type: 'success'
            }, {
              name: '标签三',
              type: 'info'
            }, {
              name: '标签四',
              type: 'warning'
            }, {
              name: '标签五',
              type: 'danger'
            }]
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createBlock: _createBlock,
        withKeys: _withKeys,
        createCommentVNode: _createCommentVNode
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("+ New Tag");

      function render(_ctx, _cache) {
        const _component_el_tag = _resolveComponent("el-tag");

        const _component_el_input = _resolveComponent("el-input");

        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.dynamicTags, tag => {
          return _openBlock(), _createBlock(_component_el_tag, {
            key: tag,
            closable: "",
            "disable-transitions": false,
            onClose: $event => _ctx.handleClose(tag)
          }, {
            default: _withCtx(() => [_createTextVNode(_toDisplayString(tag), 1)]),
            _: 2
          }, 1032, ["onClose"]);
        }), 128)), _ctx.inputVisible ? (_openBlock(), _createBlock(_component_el_input, {
          key: 0,
          class: "input-new-tag",
          modelValue: _ctx.inputValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.inputValue = $event),
          ref: "saveTagInput",
          size: "small",
          onKeyup: _withKeys(_ctx.handleInputConfirm, ["enter"]),
          onBlur: _ctx.handleInputConfirm
        }, null, 8, ["modelValue", "onKeyup", "onBlur"])) : (_openBlock(), _createBlock(_component_el_button, {
          key: 1,
          class: "button-new-tag",
          size: "small",
          onClick: _ctx.showInput
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"]))]);
      }

      const democomponentExport = {
        data() {
          return {
            dynamicTags: ['标签一', '标签二', '标签三'],
            inputVisible: false,
            inputValue: ''
          };
        },

        methods: {
          handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
          },

          showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
              this.$refs.saveTagInput.$refs.input.focus();
            });
          },

          handleInputConfirm() {
            let inputValue = this.inputValue;

            if (inputValue) {
              this.dynamicTags.push(inputValue);
            }

            this.inputVisible = false;
            this.inputValue = '';
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
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("默认标签");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("中等标签");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("小型标签");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("超小标签");

      function render(_ctx, _cache) {
        const _component_el_tag = _resolveComponent("el-tag");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tag, {
          closable: ""
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_tag, {
          size: "medium",
          closable: ""
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }), _createVNode(_component_el_tag, {
          size: "small",
          closable: ""
        }, {
          default: _withCtx(() => [_hoisted_3]),
          _: 1
        }), _createVNode(_component_el_tag, {
          size: "mini",
          closable: ""
        }, {
          default: _withCtx(() => [_hoisted_4]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        createElementVNode: _createElementVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createBlock: _createBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "tag-group"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", {
        class: "tag-group__title"
      }, "Dark", -1);

      const _hoisted_3 = {
        class: "tag-group"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "tag-group__title"
      }, "Plain", -1);

      function render(_ctx, _cache) {
        const _component_el_tag = _resolveComponent("el-tag");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.items, item => {
          return _openBlock(), _createBlock(_component_el_tag, {
            key: item.label,
            type: item.type,
            effect: "dark"
          }, {
            default: _withCtx(() => [_createTextVNode(_toDisplayString(item.label), 1)]),
            _: 2
          }, 1032, ["type"]);
        }), 128))]), _createElementVNode("div", _hoisted_3, [_hoisted_4, (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.items, item => {
          return _openBlock(), _createBlock(_component_el_tag, {
            key: item.label,
            type: item.type,
            effect: "plain"
          }, {
            default: _withCtx(() => [_createTextVNode(_toDisplayString(item.label), 1)]),
            _: 2
          }, 1032, ["type"]);
        }), 128))])]);
      }

      const democomponentExport = {
        data() {
          return {
            items: [{
              type: '',
              label: '标签一'
            }, {
              type: 'success',
              label: '标签二'
            }, {
              type: 'info',
              label: '标签三'
            }, {
              type: 'danger',
              label: '标签四'
            }, {
              type: 'warning',
              label: '标签五'
            }]
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo5": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("选中");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("点我切换");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("通过 v-model");

      function render(_ctx, _cache) {
        const _component_el_check_tag = _resolveComponent("el-check-tag");

        const _component_el_space = _resolveComponent("el-space");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_space, null, {
          default: _withCtx(() => [_createVNode(_component_el_check_tag, {
            checked: ""
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_check_tag, {
            onChange: _ctx.onChange,
            checked: _ctx.checked
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }, 8, ["onChange", "checked"]), _createVNode(_component_el_check_tag, {
            checked: _ctx.checked,
            "onUpdate:checked": _cache[0] || (_cache[0] = $event => _ctx.checked = $event)
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }, 8, ["checked"])]),
          _: 1
        })]);
      }

      const democomponentExport = {
        data() {
          return {
            checked: false
          };
        },

        methods: {
          onChange(checked) {
            this.checked = checked;
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
// CONCATENATED MODULE: ./website/docs/zh-CN/tag.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/tag.md



tagvue_type_script_lang_ts.render = tagvue_type_template_id_60b65678_render

/* harmony default export */ var tag = __webpack_exports__["default"] = (tagvue_type_script_lang_ts);

/***/ })

}]);