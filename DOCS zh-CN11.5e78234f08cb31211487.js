(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[199],{

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/checkbox.md?vue&type=template&id=23f9969a

var checkboxvue_type_template_id_23f9969a_hoisted_1 = {
  class: "content element-doc"
};

var checkboxvue_type_template_id_23f9969a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "checkbox-duo-xuan-kuang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#checkbox-duo-xuan-kuang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Checkbox 多选框")], -1);

var checkboxvue_type_template_id_23f9969a_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "一组备选项中进行多选", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("在"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("元素中定义"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("绑定变量，单一的"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "checkbox"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("中，默认绑定变量的值会是"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，选中为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <!-- `checked` 为 true 或 false -->\n  <el-checkbox v-model=\"checked\">备选项</el-checkbox>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked: true\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "jin-yong-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jin-yong-zhuang-tai"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 禁用状态")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "多选框不可用状态。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性即可。")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-checkbox v-model=\"checked1\" disabled>备选项1</el-checkbox>\n  <el-checkbox v-model=\"checked2\" disabled>备选项</el-checkbox>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked1: false,\n        checked2: true\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "duo-xuan-kuang-zu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#duo-xuan-kuang-zu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 多选框组")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "checkbox-group"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("元素能把多个 checkbox 管理为一组，只需要在 Group 中使用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("绑定"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Array"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("类型的变量即可。 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 的 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-checkbox-group v-model=\"checkList\">\n    <el-checkbox label=\"复选框 A\"></el-checkbox>\n    <el-checkbox label=\"复选框 B\"></el-checkbox>\n    <el-checkbox label=\"复选框 C\"></el-checkbox>\n    <el-checkbox label=\"禁用\" disabled></el-checkbox>\n    <el-checkbox label=\"选中且禁用\" disabled></el-checkbox>\n  </el-checkbox-group>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        checkList: ['选中且禁用','复选框 A']\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "indeterminate-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#indeterminate-zhuang-tai"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" indeterminate 状态")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "indeterminate"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-checkbox :indeterminate=\"isIndeterminate\" v-model=\"checkAll\" @change=\"handleCheckAllChange\">全选</el-checkbox>\n  <div style=\"margin: 15px 0;\"></div>\n  <el-checkbox-group v-model=\"checkedCities\" @change=\"handleCheckedCitiesChange\">\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox>\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['上海', '北京', '广州', '深圳'];\n  export default {\n    data() {\n      return {\n        checkAll: false,\n        checkedCities: ['上海', '北京'],\n        cities: cityOptions,\n        isIndeterminate: true\n      };\n    },\n    methods: {\n      handleCheckAllChange(val) {\n        this.checkedCities = val ? cityOptions : [];\n        this.isIndeterminate = false;\n      },\n      handleCheckedCitiesChange(value) {\n        let checkedCount = value.length;\n        this.checkAll = checkedCount === this.cities.length;\n        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ke-xuan-xiang-mu-shu-liang-de-xian-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ke-xuan-xiang-mu-shu-liang-de-xian-zhi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 可选项目数量的限制")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "min"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性能够限制可以被勾选的项目的数量。")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-checkbox-group\n    v-model=\"checkedCities\"\n    :min=\"1\"\n    :max=\"2\">\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox>\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['上海', '北京', '广州', '深圳'];\n  export default {\n    data() {\n      return {\n        checkedCities: ['上海', '北京'],\n        cities: cityOptions\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "an-niu-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#an-niu-yang-shi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 按钮样式")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "按钮样式的多选组合。", -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("只需要把"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("元素替换为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-checkbox-button"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("元素即可。此外，Element Plus 还提供了"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性。")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox-group v-model=\"checkboxGroup1\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup2\" size=\"medium\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup3\" size=\"small\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :disabled=\"city === '北京'\" :key=\"city\">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup4\" size=\"mini\" disabled>\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n</template>\n<script>\n  const cityOptions = ['上海', '北京', '广州', '深圳'];\n  export default {\n    data () {\n      return {\n        checkboxGroup1: ['上海'],\n        checkboxGroup2: ['上海'],\n        checkboxGroup3: ['上海'],\n        checkboxGroup4: ['上海'],\n        cities: cityOptions\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "dai-you-bian-kuang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dai-you-bian-kuang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 带有边框")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "border"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性可以渲染为带有边框的多选框。")])], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox v-model=\"checked1\" label=\"备选项1\" border></el-checkbox>\n    <el-checkbox v-model=\"checked2\" label=\"备选项2\" border></el-checkbox>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox v-model=\"checked3\" label=\"备选项1\" border size=\"medium\"></el-checkbox>\n    <el-checkbox v-model=\"checked4\" label=\"备选项2\" border size=\"medium\"></el-checkbox>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup1\" size=\"small\">\n      <el-checkbox label=\"备选项1\" border></el-checkbox>\n      <el-checkbox label=\"备选项2\" border disabled></el-checkbox>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup2\" size=\"mini\" disabled>\n      <el-checkbox label=\"备选项1\" border></el-checkbox>\n      <el-checkbox label=\"备选项2\" border></el-checkbox>\n    </el-checkbox-group>\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: true,\n        checkboxGroup1: [],\n        checkboxGroup2: []\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"checkbox-attributes\"><a class=\"header-anchor\" href=\"#checkbox-attributes\">¶</a> Checkbox Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value / v-model</td><td>绑定值</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>label</td><td>选中状态的值（只有在<code>checkbox-group</code>或者绑定对象类型为<code>array</code>时有效）</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>选中时的值</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>没有选中时的值</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>是否显示边框</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>Checkbox 的尺寸，仅在 border 为真时有效</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>name</td><td>原生 name 属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>当前是否勾选</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indeterminate</td><td>设置 indeterminate 状态，只负责样式控制</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"checkbox-events\"><a class=\"header-anchor\" href=\"#checkbox-events\">¶</a> Checkbox Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当绑定值变化时触发的事件</td><td>更新后的值</td></tr></tbody></table><h3 id=\"checkbox-group-attributes\"><a class=\"header-anchor\" href=\"#checkbox-group-attributes\">¶</a> Checkbox-group Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value / v-model</td><td>绑定值</td><td>array</td><td>—</td><td>—</td></tr><tr><td>size</td><td>多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>min</td><td>可被勾选的 checkbox 的最小数量</td><td>number</td><td>—</td><td>—</td></tr><tr><td>max</td><td>可被勾选的 checkbox 的最大数量</td><td>number</td><td>—</td><td>—</td></tr><tr><td>text-color</td><td>按钮形式的 Checkbox 激活时的文本颜色</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>fill</td><td>按钮形式的 Checkbox 激活时的填充色和边框色</td><td>string</td><td>—</td><td>#409EFF</td></tr></tbody></table><h3 id=\"checkbox-group-events\"><a class=\"header-anchor\" href=\"#checkbox-group-events\">¶</a> Checkbox-group Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当绑定值变化时触发的事件</td><td>更新后的值</td></tr></tbody></table><h3 id=\"checkbox-button-attributes\"><a class=\"header-anchor\" href=\"#checkbox-button-attributes\">¶</a> Checkbox-button Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>选中状态的值（只有在<code>checkbox-group</code>或者绑定对象类型为<code>array</code>时有效）</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>选中时的值</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>没有选中时的值</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>原生 name 属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>当前是否勾选</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 10);

function checkboxvue_type_template_id_23f9969a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", checkboxvue_type_template_id_23f9969a_hoisted_1, [checkboxvue_type_template_id_23f9969a_hoisted_2, checkboxvue_type_template_id_23f9969a_hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
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
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_19, _hoisted_20, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_22, _hoisted_23, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    _: 1
  }), _hoisted_29]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/checkbox.md?vue&type=template&id=23f9969a

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/checkbox.md?vue&type=script&lang=ts


/* harmony default export */ var checkboxvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("备选项");

      function render(_ctx, _cache) {
        var _component_el_checkbox = _resolveComponent("el-checkbox");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checked = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            checked: true
          };
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("备选项1");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("备选项");

      function render(_ctx, _cache) {
        var _component_el_checkbox = _resolveComponent("el-checkbox");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checked1 = $event;
          }),
          disabled: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.checked2 = $event;
          }),
          disabled: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            checked1: false,
            checked2: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_checkbox = _resolveComponent("el-checkbox");

        var _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkList,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checkList = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_checkbox, {
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
            })];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            checkList: ['选中且禁用', '复选框 A']
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
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("全选");

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        style: {
          "margin": "15px 0"
        }
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_checkbox = _resolveComponent("el-checkbox");

        var _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_checkbox, {
          indeterminate: _ctx.isIndeterminate,
          modelValue: _ctx.checkAll,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checkAll = $event;
          }),
          onChange: _ctx.handleCheckAllChange
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["indeterminate", "modelValue", "onChange"]), _hoisted_2, _createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkedCities,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.checkedCities = $event;
          }),
          onChange: _ctx.handleCheckedCitiesChange
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (city) {
              return _openBlock(), _createBlock(_component_el_checkbox, {
                label: city,
                key: city
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(city), 1)];
                }),
                _: 2
              }, 1032, ["label"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue", "onChange"])]);
      }

      var cityOptions = ['上海', '北京', '广州', '深圳'];
      var democomponentExport = {
        data: function data() {
          return {
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true
          };
        },
        methods: {
          handleCheckAllChange: function handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
          },
          handleCheckedCitiesChange: function handleCheckedCitiesChange(value) {
            var checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];

      function render(_ctx, _cache) {
        var _component_el_checkbox = _resolveComponent("el-checkbox");

        var _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkedCities,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checkedCities = $event;
          }),
          min: 1,
          max: 2
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (city) {
              return _openBlock(), _createBlock(_component_el_checkbox, {
                label: city,
                key: city
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(city), 1)];
                }),
                _: 2
              }, 1032, ["label"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var cityOptions = ['上海', '北京', '广州', '深圳'];
      var democomponentExport = {
        data: function data() {
          return {
            checkedCities: ['上海', '北京'],
            cities: cityOptions
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];
      var _hoisted_1 = {
        style: {
          "margin-top": "20px"
        }
      };
      var _hoisted_2 = {
        style: {
          "margin-top": "20px"
        }
      };
      var _hoisted_3 = {
        style: {
          "margin-top": "20px"
        }
      };

      function render(_ctx, _cache) {
        var _component_el_checkbox_button = _resolveComponent("el-checkbox-button");

        var _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checkboxGroup1 = $event;
          })
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (city) {
              return _openBlock(), _createBlock(_component_el_checkbox_button, {
                label: city,
                key: city
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(city), 1)];
                }),
                _: 2
              }, 1032, ["label"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_1, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.checkboxGroup2 = $event;
          }),
          size: "medium"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (city) {
              return _openBlock(), _createBlock(_component_el_checkbox_button, {
                label: city,
                key: city
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(city), 1)];
                }),
                _: 2
              }, 1032, ["label"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_2, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.checkboxGroup3 = $event;
          }),
          size: "small"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (city) {
              return _openBlock(), _createBlock(_component_el_checkbox_button, {
                label: city,
                disabled: city === '北京',
                key: city
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(city), 1)];
                }),
                _: 2
              }, 1032, ["label", "disabled"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup4,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.checkboxGroup4 = $event;
          }),
          size: "mini",
          disabled: ""
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (city) {
              return _openBlock(), _createBlock(_component_el_checkbox_button, {
                label: city,
                key: city
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(city), 1)];
                }),
                _: 2
              }, 1032, ["label"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      var cityOptions = ['上海', '北京', '广州', '深圳'];
      var democomponentExport = {
        data: function data() {
          return {
            checkboxGroup1: ['上海'],
            checkboxGroup2: ['上海'],
            checkboxGroup3: ['上海'],
            checkboxGroup4: ['上海'],
            cities: cityOptions
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "margin-top": "20px"
        }
      };
      var _hoisted_2 = {
        style: {
          "margin-top": "20px"
        }
      };
      var _hoisted_3 = {
        style: {
          "margin-top": "20px"
        }
      };

      function render(_ctx, _cache) {
        var _component_el_checkbox = _resolveComponent("el-checkbox");

        var _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checked1 = $event;
          }),
          label: "备选项1",
          border: ""
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.checked2 = $event;
          }),
          label: "备选项2",
          border: ""
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_1, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.checked3 = $event;
          }),
          label: "备选项1",
          border: "",
          size: "medium"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked4,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.checked4 = $event;
          }),
          label: "备选项2",
          border: "",
          size: "medium"
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_2, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup1,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
            return _ctx.checkboxGroup1 = $event;
          }),
          size: "small"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_checkbox, {
              label: "备选项1",
              border: ""
            }), _createVNode(_component_el_checkbox, {
              label: "备选项2",
              border: "",
              disabled: ""
            })];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup2,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
            return _ctx.checkboxGroup2 = $event;
          }),
          size: "mini",
          disabled: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_checkbox, {
              label: "备选项1",
              border: ""
            }), _createVNode(_component_el_checkbox, {
              label: "备选项2",
              border: ""
            })];
          }),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
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
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/checkbox.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/checkbox.md



checkboxvue_type_script_lang_ts.render = checkboxvue_type_template_id_23f9969a_render

/* harmony default export */ var zh_CN_checkbox = __webpack_exports__["default"] = (checkboxvue_type_script_lang_ts);

/***/ })

}]);