(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[341],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/slider.md?vue&type=template&id=08cc7f91

const slidervue_type_template_id_08cc7f91_hoisted_1 = {
  class: "content element-doc"
};

const slidervue_type_template_id_08cc7f91_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slider 滑块 ");

const slidervue_type_template_id_08cc7f91_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "通过拖动滑块在一个固定区间内进行选择", -1);

const slidervue_type_template_id_08cc7f91_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const slidervue_type_template_id_08cc7f91_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "在拖动滑块时，显示当前值", -1);

const slidervue_type_template_id_08cc7f91_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "通过设置绑定值自定义滑块的初始值")], -1);

const slidervue_type_template_id_08cc7f91_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">默认</span>\n    <el-slider v-model=\"value1\"></el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">自定义初始值</span>\n    <el-slider v-model=\"value2\"></el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">隐藏 Tooltip</span>\n    <el-slider v-model=\"value3\" :show-tooltip=\"false\"></el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">格式化 Tooltip</span>\n    <el-slider v-model=\"value4\" :format-tooltip=\"formatTooltip\"></el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">禁用</span>\n    <el-slider v-model=\"value5\" disabled></el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: 0,\n        value2: 50,\n        value3: 36,\n        value4: 48,\n        value5: 42,\n      }\n    },\n    methods: {\n      formatTooltip(val) {\n        return val / 100\n      },\n    },\n  }\n</script>\n")], -1);

const slidervue_type_template_id_08cc7f91_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("离散值 ");

const slidervue_type_template_id_08cc7f91_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "选项可以是离散的", -1);

const slidervue_type_template_id_08cc7f91_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("改变"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "step"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("的值可以改变步长，通过设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-stops"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性可以显示间断点")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">不显示间断点</span>\n    <el-slider v-model=\"value1\" :step=\"10\"> </el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">显示间断点</span>\n    <el-slider v-model=\"value2\" :step=\"10\" show-stops> </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: 0,\n        value2: 0,\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("带有输入框 ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "通过输入框设置精确数值", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-input"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性会在右侧显示一个输入框")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <el-slider v-model=\"value\" show-input> </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 0,\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("范围选择 ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "支持选择某一数值范围", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "range"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值")])], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <el-slider v-model=\"value\" range show-stops :max=\"10\"> </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: [4, 8],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("竖向模式 ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "vertical"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可使 Slider 变成竖向模式，此时必须设置高度"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "height"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性")])], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <el-slider v-model=\"value\" vertical height=\"200px\"> </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 0,\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("展示标记 ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "marks"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性可以展示标记")])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <el-slider v-model=\"value\" range :marks=\"marks\"> </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: [30, 60],\n        marks: {\n          0: '0°C',\n          8: '8°C',\n          37: '37°C',\n          50: {\n            style: {\n              color: '#1989FA',\n            },\n            label: '50%',\n          },\n        },\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td>number</td><td>—</td><td>0</td></tr><tr><td>min</td><td>最小值</td><td>number</td><td>—</td><td>0</td></tr><tr><td>max</td><td>最大值</td><td>number</td><td>—</td><td>100</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>step</td><td>步长</td><td>number</td><td>—</td><td>1</td></tr><tr><td>show-input</td><td>是否显示输入框，仅在非范围选择时有效</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-input-controls</td><td>在显示输入框的情况下，是否显示输入框的控制按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>input-size</td><td>输入框的尺寸</td><td>string</td><td>large / medium / small / mini</td><td>small</td></tr><tr><td>show-stops</td><td>是否显示间断点</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-tooltip</td><td>是否显示 tooltip</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>format-tooltip</td><td>格式化 tooltip message</td><td>function(value)</td><td>—</td><td>—</td></tr><tr><td>range</td><td>是否为范围选择</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>vertical</td><td>是否竖向模式</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>height</td><td>Slider 高度，竖向模式时必填</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>屏幕阅读器标签</td><td>string</td><td>—</td><td>—</td></tr><tr><td>debounce</td><td>输入时的去抖延迟，毫秒，仅在<code>show-input</code>等于 true 时有效</td><td>number</td><td>—</td><td>300</td></tr><tr><td>tooltip-class</td><td>tooltip 的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>marks</td><td>标记， key 的类型必须为 number 且取值在闭区间 <code>[min, max]</code> 内，每个标记可以单独设置样式</td><td>object</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Events ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）</td><td>改变后的值</td></tr><tr><td>input</td><td>数据改变时触发（使用鼠标拖曳时，活动过程实时触发）</td><td>改变后的值</td></tr></tbody></table>", 1);

function slidervue_type_template_id_08cc7f91_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", slidervue_type_template_id_08cc7f91_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slider-hua-kuai",
    content: "Slider 滑块",
    href: "#slider-hua-kuai",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [slidervue_type_template_id_08cc7f91_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slider-hua-kuai"
    })]),
    _: 1
  }), slidervue_type_template_id_08cc7f91_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [slidervue_type_template_id_08cc7f91_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), slidervue_type_template_id_08cc7f91_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [slidervue_type_template_id_08cc7f91_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [slidervue_type_template_id_08cc7f91_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chi-san-zhi",
    content: "离散值",
    href: "#chi-san-zhi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [slidervue_type_template_id_08cc7f91_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chi-san-zhi"
    })]),
    _: 1
  }), slidervue_type_template_id_08cc7f91_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [slidervue_type_template_id_08cc7f91_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dai-you-shu-ru-kuang",
    content: "带有输入框",
    href: "#dai-you-shu-ru-kuang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dai-you-shu-ru-kuang"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "fan-wei-xuan-ze",
    content: "范围选择",
    href: "#fan-wei-xuan-ze",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fan-wei-xuan-ze"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shu-xiang-mo-shi",
    content: "竖向模式",
    href: "#shu-xiang-mo-shi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xiang-mo-shi"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zhan-shi-biao-ji",
    content: "展示标记",
    href: "#zhan-shi-biao-ji",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zhan-shi-biao-ji"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
    })]),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "events",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/slider.md?vue&type=template&id=08cc7f91

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/slider.md?vue&type=script&lang=ts

/* harmony default export */ var slidervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "默认", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "自定义初始值", -1);

      const _hoisted_5 = {
        class: "block"
      };

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "隐藏 Tooltip", -1);

      const _hoisted_7 = {
        class: "block"
      };

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "格式化 Tooltip", -1);

      const _hoisted_9 = {
        class: "block"
      };

      const _hoisted_10 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "禁用", -1);

      function render(_ctx, _cache) {
        const _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_slider, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value1 = $event)
        }, null, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_slider, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.value2 = $event)
        }, null, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_slider, {
          modelValue: _ctx.value3,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.value3 = $event),
          "show-tooltip": false
        }, null, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_7, [_hoisted_8, _createVNode(_component_el_slider, {
          modelValue: _ctx.value4,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.value4 = $event),
          "format-tooltip": _ctx.formatTooltip
        }, null, 8, ["modelValue", "format-tooltip"])]), _createElementVNode("div", _hoisted_9, [_hoisted_10, _createVNode(_component_el_slider, {
          modelValue: _ctx.value5,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.value5 = $event),
          disabled: ""
        }, null, 8, ["modelValue"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            value1: 0,
            value2: 50,
            value3: 36,
            value4: 48,
            value5: 42
          };
        },

        methods: {
          formatTooltip(val) {
            return val / 100;
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "不显示间断点", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "显示间断点", -1);

      function render(_ctx, _cache) {
        const _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_slider, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value1 = $event),
          step: 10
        }, null, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_slider, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.value2 = $event),
          step: 10,
          "show-stops": ""
        }, null, 8, ["modelValue"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            value1: 0,
            value2: 0
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        const _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_slider, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          "show-input": ""
        }, null, 8, ["modelValue"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            value: 0
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        const _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_slider, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          range: "",
          "show-stops": "",
          max: 10
        }, null, 8, ["modelValue"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            value: [4, 8]
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        const _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_slider, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          vertical: "",
          height: "200px"
        }, null, 8, ["modelValue"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            value: 0
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        const _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_slider, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          range: "",
          marks: _ctx.marks
        }, null, 8, ["modelValue", "marks"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            value: [30, 60],
            marks: {
              0: '0°C',
              8: '8°C',
              37: '37°C',
              50: {
                style: {
                  color: '#1989FA'
                },
                label: '50%'
              }
            }
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/slider.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/slider.md



slidervue_type_script_lang_ts.render = slidervue_type_template_id_08cc7f91_render

/* harmony default export */ var slider = __webpack_exports__["default"] = (slidervue_type_script_lang_ts);

/***/ })

}]);