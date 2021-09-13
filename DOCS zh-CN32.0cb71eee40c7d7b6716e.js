(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[315],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/input-number.md?vue&type=template&id=0a6a7f33

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("InputNumber 计数器 ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "仅允许输入标准的数字值，可定义范围", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("要使用它，只需要在"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-input-number"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("元素中使用"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("绑定变量即可，变量的初始值即为默认值。")])], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-input-number\n    v-model=\"num\"\n    @change=\"handleChange\"\n    :min=\"1\"\n    :max=\"10\"\n    label=\"描述文字\"\n  ></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1,\n      }\n    },\n    methods: {\n      handleChange(value) {\n        console.log(value)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const num = ref(1);\n      const handleChange = (value) => {\n        console.log(value);\n      };\n      return {\n        num,\n        handleChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("禁用状态 ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性接受一个"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "min"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性和"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性，不设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "min"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("时，最小值为 0。")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" :disabled=\"true\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const num = ref(1);\n      return {\n        num,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("步数 ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "允许定义递增递减的步数控制", -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "step"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性可以控制步长，接受一个"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。")])], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" :step=\"2\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 5,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const num = ref(5);\n      return {\n        num,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("严格步数 ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "step-strictly"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性接受一个"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。如果这个属性被设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，则只能输入步数的倍数。")])], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" :step=\"2\" step-strictly></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 2,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const num = ref(2);\n      return {\n        num,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("精度 ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "precision"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性可以控制数值精度，接收一个 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。")])], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-input-number\n    v-model=\"num\"\n    :precision=\"2\"\n    :step=\"0.1\"\n    :max=\"10\"\n  ></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const num = ref(1);\n      return {\n        num,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "precision"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 的值必须是一个非负整数，并且不能小于 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "step"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 的小数位数。")])], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("尺寸 ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("额外提供了 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "medium"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "mini"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 三种尺寸的数字输入框")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num1\"></el-input-number>\n  <el-input-number size=\"medium\" v-model=\"num2\"></el-input-number>\n  <el-input-number size=\"small\" v-model=\"num3\"></el-input-number>\n  <el-input-number size=\"mini\" v-model=\"num4\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num1: 1,\n        num2: 1,\n        num3: 1,\n        num4: 1,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const num1 = ref(1);\n      const num2 = ref(2);\n      const num3 = ref(3);\n      const num4 = ref(4);\n      return {\n        num1,\n        num2,\n        num3,\n        num4,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("按钮位置 ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "controls-position"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性可以控制按钮位置。")])], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-input-number\n    v-model=\"num\"\n    controls-position=\"right\"\n    @change=\"handleChange\"\n    :min=\"1\"\n    :max=\"10\"\n  ></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1,\n      }\n    },\n    methods: {\n      handleChange(value) {\n        console.log(value)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const num = ref(1);\n      const handleChange = (value) => {\n        console.log(value);\n      };\n      return {\n        num,\n        handleChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td>number / undefined</td><td>—</td><td>0</td></tr><tr><td>min</td><td>设置计数器允许的最小值</td><td>number</td><td>—</td><td>-Infinity</td></tr><tr><td>max</td><td>设置计数器允许的最大值</td><td>number</td><td>—</td><td>Infinity</td></tr><tr><td>step</td><td>计数器步长</td><td>number</td><td>—</td><td>1</td></tr><tr><td>step-strictly</td><td>是否只能输入 step 的倍数</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>precision</td><td>数值精度</td><td>number</td><td>—</td><td>—</td></tr><tr><td>size</td><td>计数器尺寸</td><td>string</td><td>large/medium/small/mini</td><td>large</td></tr><tr><td>disabled</td><td>是否禁用计数器</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>controls</td><td>是否使用控制按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>controls-position</td><td>控制按钮位置</td><td>string</td><td>right</td><td>-</td></tr><tr><td>name</td><td>原生属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>输入框关联的 label 文字</td><td>string</td><td>—</td><td>—</td></tr><tr><td>placeholder</td><td>输入框默认 placeholder</td><td>string</td><td>-</td><td>-</td></tr></tbody></table>", 1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Events ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>绑定值被改变时触发</td><td>currentValue, oldValue</td></tr><tr><td>blur</td><td>在组件 Input 失去焦点时触发</td><td>(event: Event)</td></tr><tr><td>focus</td><td>在组件 Input 获得焦点时触发</td><td>(event: Event)</td></tr></tbody></table>", 1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Methods ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使组件 Input 获取焦点</td><td>-</td></tr><tr><td>blur</td><td>使组件 Input 失去焦点</td><td>—</td></tr></tbody></table>", 1);

function input_numbervue_type_template_id_0a6a7f33_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_element_demo5 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo5");

  const _component_element_demo6 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo6");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "inputnumber-ji-shu-qi",
    content: "InputNumber 计数器",
    href: "#inputnumber-ji-shu-qi",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#inputnumber-ji-shu-qi"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "jin-yong-zhuang-tai",
    content: "禁用状态",
    href: "#jin-yong-zhuang-tai",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#jin-yong-zhuang-tai"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bu-shu",
    content: "步数",
    href: "#bu-shu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bu-shu"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "yan-ge-bu-shu",
    content: "严格步数",
    href: "#yan-ge-bu-shu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#yan-ge-bu-shu"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "jing-du",
    content: "精度",
    href: "#jing-du",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#jing-du"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chi-cun",
    content: "尺寸",
    href: "#chi-cun",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chi-cun"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "an-niu-wei-zhi",
    content: "按钮位置",
    href: "#an-niu-wei-zhi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#an-niu-wei-zhi"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "events",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "methods",
    content: "Methods",
    href: "#methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methods"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/input-number.md?vue&type=template&id=0a6a7f33

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/input-number.md?vue&type=script&lang=ts

/* harmony default export */ var input_numbervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.num = $event),
          onChange: _ctx.handleChange,
          min: 1,
          max: 10,
          label: "描述文字"
        }, null, 8, ["modelValue", "onChange"])]);
      }

      const democomponentExport = {
        data() {
          return {
            num: 1
          };
        },

        methods: {
          handleChange(value) {
            console.log(value);
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.num = $event),
          disabled: true
        }, null, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            num: 1
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
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.num = $event),
          step: 2
        }, null, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            num: 5
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
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.num = $event),
          step: 2,
          "step-strictly": ""
        }, null, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            num: 2
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
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.num = $event),
          precision: 2,
          step: 0.1,
          max: 10
        }, null, 8, ["modelValue", "step"])]);
      }

      const democomponentExport = {
        data() {
          return {
            num: 1
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
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.num1 = $event)
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input_number, {
          size: "medium",
          modelValue: _ctx.num2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.num2 = $event)
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input_number, {
          size: "small",
          modelValue: _ctx.num3,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.num3 = $event)
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input_number, {
          size: "mini",
          modelValue: _ctx.num4,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.num4 = $event)
        }, null, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            num1: 1,
            num2: 1,
            num3: 1,
            num4: 1
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo6": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.num = $event),
          "controls-position": "right",
          onChange: _ctx.handleChange,
          min: 1,
          max: 10
        }, null, 8, ["modelValue", "onChange"])]);
      }

      const democomponentExport = {
        data() {
          return {
            num: 1
          };
        },

        methods: {
          handleChange(value) {
            console.log(value);
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
// CONCATENATED MODULE: ./website/docs/zh-CN/input-number.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/input-number.md



input_numbervue_type_script_lang_ts.render = input_numbervue_type_template_id_0a6a7f33_render

/* harmony default export */ var input_number = __webpack_exports__["default"] = (input_numbervue_type_script_lang_ts);

/***/ })

}]);