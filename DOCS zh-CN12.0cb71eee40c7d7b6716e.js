(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[293],{

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/checkbox.md?vue&type=template&id=6a9a266c

const checkboxvue_type_template_id_6a9a266c_hoisted_1 = {
  class: "content element-doc"
};

const checkboxvue_type_template_id_6a9a266c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox 多选框 ");

const checkboxvue_type_template_id_6a9a266c_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "一组备选项中进行多选", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("在"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("元素中定义"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("绑定变量，单一的"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("中，默认绑定变量的值会是"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，选中为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox v-model=\"checked1\" label=\"备选项1\"></el-checkbox>\n    <el-checkbox v-model=\"checked2\" label=\"备选项2\"></el-checkbox>\n  </div>\n  <div>\n    <el-checkbox v-model=\"checked3\" label=\"备选项1\" size=\"medium\"></el-checkbox>\n    <el-checkbox v-model=\"checked4\" label=\"备选项2\" size=\"medium\"></el-checkbox>\n  </div>\n  <div>\n    <el-checkbox v-model=\"checked5\" label=\"备选项1\" size=\"small\"></el-checkbox>\n    <el-checkbox v-model=\"checked6\" label=\"备选项2\" size=\"small\"></el-checkbox>\n  </div>\n  <div>\n    <el-checkbox v-model=\"checked7\" label=\"备选项1\" size=\"mini\"></el-checkbox>\n    <el-checkbox v-model=\"checked8\" label=\"备选项2\" size=\"mini\"></el-checkbox>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: false,\n        checked5: false,\n        checked6: false,\n        checked7: false,\n        checked8: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checked1 = ref(true);\n      const checked2 = ref(false);\n      const checked3 = ref(false);\n      const checked4 = ref(false);\n      const checked5 = ref(false);\n      const checked6 = ref(false);\n      const checked7 = ref(false);\n      const checked8 = ref(false);\n      return {\n        checked1,\n        checked2,\n        checked3,\n        checked4,\n        checked5,\n        checked6,\n        checked7,\n        checked8,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("禁用状态 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "多选框不可用状态。", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性即可。")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox v-model=\"checked1\" disabled>备选项1</el-checkbox>\n  <el-checkbox v-model=\"checked2\" disabled>备选项</el-checkbox>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked1: false,\n        checked2: true,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checked1 = ref(false);\n      const checked2 = ref(true);\n      return {\n        checked1,\n        checked2,\n      };\n    },\n  });\n</setup>\n-->\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("多选框组 ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "checkbox-group"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("元素能把多个 checkbox 管理为一组，只需要在 Group 中使用"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("绑定"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Array"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("类型的变量即可。 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 的 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox-group v-model=\"checkList\">\n    <el-checkbox label=\"复选框 A\"></el-checkbox>\n    <el-checkbox label=\"复选框 B\"></el-checkbox>\n    <el-checkbox label=\"复选框 C\"></el-checkbox>\n    <el-checkbox label=\"禁用\" disabled></el-checkbox>\n    <el-checkbox label=\"选中且禁用\" disabled></el-checkbox>\n  </el-checkbox-group>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        checkList: ['选中且禁用', '复选框 A'],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checkList = ref(['选中且禁用', '复选框 A']);\n      return {\n        checkList,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("indeterminate 状态 ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "indeterminate"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox\n    :indeterminate=\"isIndeterminate\"\n    v-model=\"checkAll\"\n    @change=\"handleCheckAllChange\"\n    >全选</el-checkbox\n  >\n  <el-checkbox-group\n    v-model=\"checkedCities\"\n    @change=\"handleCheckedCitiesChange\"\n  >\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n      >{{city}}</el-checkbox\n    >\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['上海', '北京', '广州', '深圳']\n  export default {\n    data() {\n      return {\n        checkAll: false,\n        checkedCities: ['上海', '北京'],\n        cities: cityOptions,\n        isIndeterminate: true,\n      }\n    },\n    methods: {\n      handleCheckAllChange(val) {\n        this.checkedCities = val ? cityOptions : []\n        this.isIndeterminate = false\n      },\n      handleCheckedCitiesChange(value) {\n        let checkedCount = value.length\n        this.checkAll = checkedCount === this.cities.length\n        this.isIndeterminate =\n          checkedCount > 0 && checkedCount < this.cities.length\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  const cityOptions = ['上海', '北京', '广州', '深圳'];\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checkAll: false,\n        checkedCities: ['上海', '北京'],\n        cities: cityOptions,\n        isIndeterminate: true,\n      });\n      const handleCheckAllChange = (val) => {\n        state.checkedCities = val ? cityOptions : [];\n        state.isIndeterminate = false;\n      };\n      const handleCheckedCitiesChange = (value) => {\n        const checkedCount = value.length;\n        state.checkAll = checkedCount === state.cities.length;\n        state.isIndeterminate = checkedCount > 0 && checkedCount < state.cities.length;\n      };\n      return {\n        ...toRefs(state),\n        handleCheckAllChange,\n        handleCheckedCitiesChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可选项目数量的限制 ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "min"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性能够限制可以被勾选的项目的数量。")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox-group v-model=\"checkedCities\" :min=\"1\" :max=\"2\">\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n      >{{city}}</el-checkbox\n    >\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['上海', '北京', '广州', '深圳']\n  export default {\n    data() {\n      return {\n        checkedCities: ['上海', '北京'],\n        cities: cityOptions,\n      }\n    },\n  }\n</script>\n\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  const cityOptions = ['上海', '北京', '广州', '深圳'];\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checkedCities: ['上海', '北京'],\n        cities: cityOptions,\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("按钮样式 ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "按钮样式的多选组合。", -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("只需要把"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("元素替换为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox-button"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("元素即可。此外，Element Plus 还提供了"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性。")])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox-group v-model=\"checkboxGroup1\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup2\" size=\"medium\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup3\" size=\"small\">\n      <el-checkbox-button\n        v-for=\"city in cities\"\n        :label=\"city\"\n        :disabled=\"city === '北京'\"\n        :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup4\" size=\"mini\" disabled>\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n</template>\n<script>\n  const cityOptions = ['上海', '北京', '广州', '深圳']\n  export default {\n    data() {\n      return {\n        checkboxGroup1: ['上海'],\n        checkboxGroup2: ['上海'],\n        checkboxGroup3: ['上海'],\n        checkboxGroup4: ['上海'],\n        cities: cityOptions,\n      }\n    },\n  }\n</script>\n\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  const cityOptions = ['上海', '北京', '广州', '深圳'];\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checkboxGroup1: ['上海'],\n        checkboxGroup2: ['上海'],\n        checkboxGroup3: ['上海'],\n        checkboxGroup4: ['上海'],\n        cities: cityOptions,\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("带有边框 ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "border"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性可以渲染为带有边框的多选框。")])], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox v-model=\"checked1\" label=\"备选项1\" border></el-checkbox>\n    <el-checkbox v-model=\"checked2\" label=\"备选项2\" border></el-checkbox>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox\n      v-model=\"checked3\"\n      label=\"备选项1\"\n      border\n      size=\"medium\"\n    ></el-checkbox>\n    <el-checkbox\n      v-model=\"checked4\"\n      label=\"备选项2\"\n      border\n      size=\"medium\"\n    ></el-checkbox>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup1\" size=\"small\">\n      <el-checkbox label=\"备选项1\" border></el-checkbox>\n      <el-checkbox label=\"备选项2\" border disabled></el-checkbox>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup2\" size=\"mini\" disabled>\n      <el-checkbox label=\"备选项1\" border></el-checkbox>\n      <el-checkbox label=\"备选项2\" border></el-checkbox>\n    </el-checkbox-group>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: true,\n        checkboxGroup1: [],\n        checkboxGroup2: [],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: true,\n        checkboxGroup1: [],\n        checkboxGroup2: [],\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox Attributes ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>label</td><td>选中状态的值（只有在<code>checkbox-group</code>或者绑定对象类型为<code>array</code>时有效）</td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>选中时的值</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>没有选中时的值</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>是否显示边框</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>Checkbox 的尺寸</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>name</td><td>原生 name 属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>当前是否勾选</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indeterminate</td><td>设置 indeterminate 状态，只负责样式控制</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox Events ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "事件名称"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "回调参数")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "当绑定值变化时触发的事件"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "更新后的值")])])], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox-group Attributes ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td>array</td><td>—</td><td>—</td></tr><tr><td>size</td><td>多选框组尺寸</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>min</td><td>可被勾选的 checkbox 的最小数量</td><td>number</td><td>—</td><td>—</td></tr><tr><td>max</td><td>可被勾选的 checkbox 的最大数量</td><td>number</td><td>—</td><td>—</td></tr><tr><td>text-color</td><td>按钮形式的 Checkbox 激活时的文本颜色</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>fill</td><td>按钮形式的 Checkbox 激活时的填充色和边框色</td><td>string</td><td>—</td><td>#409EFF</td></tr></tbody></table>", 1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox-group Events ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "事件名称"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "回调参数")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "当绑定值变化时触发的事件"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "更新后的值")])])], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox-button Attributes ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>选中状态的值（只有在<code>checkbox-group</code>或者绑定对象类型为<code>array</code>时有效）</td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>选中时的值</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>没有选中时的值</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>原生 name 属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>当前是否勾选</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

function checkboxvue_type_template_id_6a9a266c_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", checkboxvue_type_template_id_6a9a266c_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox-duo-xuan-kuang",
    content: "Checkbox 多选框",
    href: "#checkbox-duo-xuan-kuang",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [checkboxvue_type_template_id_6a9a266c_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox-duo-xuan-kuang"
    })]),
    _: 1
  }), checkboxvue_type_template_id_6a9a266c_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
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
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "jin-yong-zhuang-tai",
    content: "禁用状态",
    href: "#jin-yong-zhuang-tai",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#jin-yong-zhuang-tai"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "duo-xuan-kuang-zu",
    content: "多选框组",
    href: "#duo-xuan-kuang-zu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#duo-xuan-kuang-zu"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "indeterminate-zhuang-tai",
    content: "indeterminate 状态",
    href: "#indeterminate-zhuang-tai",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#indeterminate-zhuang-tai"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ke-xuan-xiang-mu-shu-liang-de-xian-zhi",
    content: "可选项目数量的限制",
    href: "#ke-xuan-xiang-mu-shu-liang-de-xian-zhi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ke-xuan-xiang-mu-shu-liang-de-xian-zhi"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "an-niu-yang-shi",
    content: "按钮样式",
    href: "#an-niu-yang-shi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#an-niu-yang-shi"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dai-you-bian-kuang",
    content: "带有边框",
    href: "#dai-you-bian-kuang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dai-you-bian-kuang"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox-attributes",
    content: "Checkbox Attributes",
    href: "#checkbox-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox-attributes"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox-events",
    content: "Checkbox Events",
    href: "#checkbox-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox-events"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox-group-attributes",
    content: "Checkbox-group Attributes",
    href: "#checkbox-group-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox-group-attributes"
    })]),
    _: 1
  }), _hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox-group-events",
    content: "Checkbox-group Events",
    href: "#checkbox-group-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox-group-events"
    })]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox-button-attributes",
    content: "Checkbox-button Attributes",
    href: "#checkbox-button-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox-button-attributes"
    })]),
    _: 1
  }), _hoisted_38, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/checkbox.md?vue&type=template&id=6a9a266c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/checkbox.md?vue&type=script&lang=ts

/* harmony default export */ var checkboxvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_checkbox = _resolveComponent("el-checkbox");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.checked1 = $event),
          label: "备选项1"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.checked2 = $event),
          label: "备选项2"
        }, null, 8, ["modelValue"])]), _createElementVNode("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked3,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.checked3 = $event),
          label: "备选项1",
          size: "medium"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked4,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.checked4 = $event),
          label: "备选项2",
          size: "medium"
        }, null, 8, ["modelValue"])]), _createElementVNode("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked5,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.checked5 = $event),
          label: "备选项1",
          size: "small"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked6,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.checked6 = $event),
          label: "备选项2",
          size: "small"
        }, null, 8, ["modelValue"])]), _createElementVNode("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked7,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.checked7 = $event),
          label: "备选项1",
          size: "mini"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked8,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.checked8 = $event),
          label: "备选项2",
          size: "mini"
        }, null, 8, ["modelValue"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            checked1: true,
            checked2: false,
            checked3: false,
            checked4: false,
            checked5: false,
            checked6: false,
            checked7: false,
            checked8: false
          };
        }

      };
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("备选项1");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("备选项");

      function render(_ctx, _cache) {
        const _component_el_checkbox = _resolveComponent("el-checkbox");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.checked1 = $event),
          disabled: ""
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.checked2 = $event),
          disabled: ""
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            checked1: false,
            checked2: true
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
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_checkbox = _resolveComponent("el-checkbox");

        const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkList,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.checkList = $event)
        }, {
          default: _withCtx(() => [_createVNode(_component_el_checkbox, {
            label: "复选框 A"
          }), _createVNode(_component_el_checkbox, {
            label: "复选框 B"
          }), _createVNode(_component_el_checkbox, {
            label: "复选框 C"
          }), _createVNode(_component_el_checkbox, {
            label: "禁用",
            disabled: ""
          }), _createVNode(_component_el_checkbox, {
            label: "选中且禁用",
            disabled: ""
          })]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            checkList: ['选中且禁用', '复选框 A']
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
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createBlock: _createBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("全选");

      function render(_ctx, _cache) {
        const _component_el_checkbox = _resolveComponent("el-checkbox");

        const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_checkbox, {
          indeterminate: _ctx.isIndeterminate,
          modelValue: _ctx.checkAll,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.checkAll = $event),
          onChange: _ctx.handleCheckAllChange
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["indeterminate", "modelValue", "onChange"]), _createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkedCities,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.checkedCities = $event),
          onChange: _ctx.handleCheckedCitiesChange
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.cities, city => {
            return _openBlock(), _createBlock(_component_el_checkbox, {
              label: city,
              key: city
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(city), 1)]),
              _: 2
            }, 1032, ["label"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue", "onChange"])]);
      }

      const cityOptions = ['上海', '北京', '广州', '深圳'];
      const democomponentExport = {
        data() {
          return {
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true
          };
        },

        methods: {
          handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
          },

          handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
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
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_checkbox = _resolveComponent("el-checkbox");

        const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkedCities,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.checkedCities = $event),
          min: 1,
          max: 2
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.cities, city => {
            return _openBlock(), _createBlock(_component_el_checkbox, {
              label: city,
              key: city
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(city), 1)]),
              _: 2
            }, 1032, ["label"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const cityOptions = ['上海', '北京', '广州', '深圳'];
      const democomponentExport = {
        data() {
          return {
            checkedCities: ['上海', '北京'],
            cities: cityOptions
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createBlock: _createBlock,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        style: {
          "margin-top": "20px"
        }
      };
      const _hoisted_2 = {
        style: {
          "margin-top": "20px"
        }
      };
      const _hoisted_3 = {
        style: {
          "margin-top": "20px"
        }
      };

      function render(_ctx, _cache) {
        const _component_el_checkbox_button = _resolveComponent("el-checkbox-button");

        const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", null, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.checkboxGroup1 = $event)
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.cities, city => {
            return _openBlock(), _createBlock(_component_el_checkbox_button, {
              label: city,
              key: city
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(city), 1)]),
              _: 2
            }, 1032, ["label"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.checkboxGroup2 = $event),
          size: "medium"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.cities, city => {
            return _openBlock(), _createBlock(_component_el_checkbox_button, {
              label: city,
              key: city
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(city), 1)]),
              _: 2
            }, 1032, ["label"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_2, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup3,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.checkboxGroup3 = $event),
          size: "small"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.cities, city => {
            return _openBlock(), _createBlock(_component_el_checkbox_button, {
              label: city,
              disabled: city === '北京',
              key: city
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(city), 1)]),
              _: 2
            }, 1032, ["label", "disabled"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_3, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup4,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.checkboxGroup4 = $event),
          size: "mini",
          disabled: ""
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.cities, city => {
            return _openBlock(), _createBlock(_component_el_checkbox_button, {
              label: city,
              key: city
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(city), 1)]),
              _: 2
            }, 1032, ["label"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      const cityOptions = ['上海', '北京', '广州', '深圳'];
      const democomponentExport = {
        data() {
          return {
            checkboxGroup1: ['上海'],
            checkboxGroup2: ['上海'],
            checkboxGroup3: ['上海'],
            checkboxGroup4: ['上海'],
            cities: cityOptions
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
        createElementVNode: _createElementVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        style: {
          "margin-top": "20px"
        }
      };
      const _hoisted_2 = {
        style: {
          "margin-top": "20px"
        }
      };
      const _hoisted_3 = {
        style: {
          "margin-top": "20px"
        }
      };

      function render(_ctx, _cache) {
        const _component_el_checkbox = _resolveComponent("el-checkbox");

        const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.checked1 = $event),
          label: "备选项1",
          border: ""
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.checked2 = $event),
          label: "备选项2",
          border: ""
        }, null, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked3,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.checked3 = $event),
          label: "备选项1",
          border: "",
          size: "medium"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked4,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.checked4 = $event),
          label: "备选项2",
          border: "",
          size: "medium"
        }, null, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_2, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup1,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.checkboxGroup1 = $event),
          size: "small"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_checkbox, {
            label: "备选项1",
            border: ""
          }), _createVNode(_component_el_checkbox, {
            label: "备选项2",
            border: "",
            disabled: ""
          })]),
          _: 1
        }, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_3, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup2,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.checkboxGroup2 = $event),
          size: "mini",
          disabled: ""
        }, {
          default: _withCtx(() => [_createVNode(_component_el_checkbox, {
            label: "备选项1",
            border: ""
          }), _createVNode(_component_el_checkbox, {
            label: "备选项2",
            border: ""
          })]),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            checked1: true,
            checked2: false,
            checked3: false,
            checked4: true,
            checkboxGroup1: [],
            checkboxGroup2: []
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
// CONCATENATED MODULE: ./website/docs/zh-CN/checkbox.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/checkbox.md



checkboxvue_type_script_lang_ts.render = checkboxvue_type_template_id_6a9a266c_render

/* harmony default export */ var zh_CN_checkbox = __webpack_exports__["default"] = (checkboxvue_type_script_lang_ts);

/***/ })

}]);