(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[218],{

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/input.md?vue&type=template&id=1cce4a19

var inputvue_type_template_id_1cce4a19_hoisted_1 = {
  class: "content element-doc"
};

var inputvue_type_template_id_1cce4a19_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"input-shu-ru-kuang\"><a class=\"header-anchor\" href=\"#input-shu-ru-kuang\">¶</a> Input 输入框</h2><p>通过鼠标或键盘输入字符</p><div class=\"warning\"><p>Input 为受控组件，它<strong>总会显示 Vue 绑定值</strong>。</p><p>通常情况下，应当处理 <code>input</code> 事件，并更新组件的绑定值（或使用<code>v-model</code>）。否则，输入框内显示的值将不会改变。</p><p>不支持 <code>v-model</code> 修饰符。</p></div><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3>", 4);

var inputvue_type_template_id_1cce4a19_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-input v-model=\"input\" placeholder=\"请输入内容\"></el-input>\n\n<script>\nimport { defineComponent, ref } from 'vue'\n\nexport default defineComponent ({\n  setup() {\n    return {\n      input: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "jin-yong-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jin-yong-zhuang-tai"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 禁用状态")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性指定是否禁用 input 组件")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-input\n  placeholder=\"请输入内容\"\n  v-model=\"input\"\n  :disabled=\"true\">\n</el-input>\n\n<script>\nimport { defineComponent, ref } from 'vue'\n\nexport default defineComponent ({\n  setup() {\n    return {\n      input: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ke-qing-kong"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ke-qing-kong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 可清空")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("使用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性即可得到一个可清空的输入框")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-input\n  placeholder=\"请输入内容\"\n  v-model=\"input\"\n  clearable>\n</el-input>\n\n<script>\nimport { defineComponent, ref } from 'vue'\n\nexport default defineComponent ({\n  setup() {\n    return {\n      input: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "mi-ma-kuang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#mi-ma-kuang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 密码框")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("使用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-password"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性即可得到一个可切换显示隐藏的密码框")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-input placeholder=\"请输入密码\" v-model=\"input\" show-password></el-input>\n\n<script>\nimport { defineComponent, ref } from 'vue'\n\nexport default defineComponent ({\n  setup() {\n    return {\n      input: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "dai-icon-de-shu-ru-kuang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dai-icon-de-shu-ru-kuang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 带 icon 的输入框")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "带有图标标记输入类型", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("可以通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "prefix-icon"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "suffix-icon"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-input-suffix\">\n  属性方式：\n  <el-input\n    placeholder=\"请选择日期\"\n    suffix-icon=\"el-icon-date\"\n    v-model=\"input1\">\n  </el-input>\n  <el-input\n    placeholder=\"请输入内容\"\n    prefix-icon=\"el-icon-search\"\n    v-model=\"input2\">\n  </el-input>\n</div>\n<div class=\"demo-input-suffix\">\n  slot 方式：\n  <el-input\n    placeholder=\"请选择日期\"\n    v-model=\"input3\">\n    <template #suffix>\n      <i class=\"el-input__icon el-icon-date\"></i>\n    </template>\n  </el-input>\n  <el-input\n    placeholder=\"请输入内容\"\n    v-model=\"input4\">\n    <template #prefix>\n      <i class=\"el-input__icon el-icon-search\"></i>\n    </template>\n  </el-input>\n</div>\n\n<style>\n  .demo-input-label {\n    display: inline-block;\n    width: 130px;\n  }\n</style>\n\n<script>\nimport { defineComponent, ref } from 'vue'\n\nexport default defineComponent ({\n  setup() {\n    return {\n      input1: ref(''),\n      input2: ref(''),\n      input3: ref(''),\n      input4: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "wen-ben-yu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#wen-ben-yu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 文本域")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("用于输入多行文本信息，通过将 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性的值指定为 textarea。")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("文本域高度可通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "rows"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性控制")])], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-input\n  type=\"textarea\"\n  :rows=\"2\"\n  placeholder=\"请输入内容\"\n  v-model=\"textarea\">\n</el-input>\n\n<script>\nimport { defineComponent, ref } from 'vue'\n\nexport default defineComponent ({\n  setup() {\n    return {\n      textarea: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ke-zi-gua-ying-wen-ben-gao-du-de-wen-ben-yu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ke-zi-gua-ying-wen-ben-gao-du-de-wen-ben-yu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 可自适应文本高度的文本域")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("通过设置 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "autosize"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "autosize"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 还可以设定为一个对象，指定最小行数和最大行数。")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-input\n  type=\"textarea\"\n  autosize\n  placeholder=\"请输入内容\"\n  v-model=\"textarea1\">\n</el-input>\n<div style=\"margin: 20px 0;\"></div>\n<el-input\n  type=\"textarea\"\n  :autosize=\"{ minRows: 2, maxRows: 4}\"\n  placeholder=\"请输入内容\"\n  v-model=\"textarea2\">\n</el-input>\n\n<script>\nimport { defineComponent, ref } from 'vue'\n\nexport default defineComponent ({\n  setup() {\n    return {\n      textarea1: ref(''),\n      textarea2: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "fu-he-xing-shu-ru-kuang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fu-he-xing-shu-ru-kuang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 复合型输入框")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可前置或后置元素，一般为标签或按钮", -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可通过 slot 来指定在 input 中前置或者后置内容。")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div>\n  <el-input placeholder=\"请输入内容\" v-model=\"input1\">\n    <template #prepend>Http://</template>\n  </el-input>\n</div>\n<div style=\"margin-top: 15px\">\n  <el-input placeholder=\"请输入内容\" v-model=\"input2\">\n    <template #append>.com</template>\n  </el-input>\n</div>\n<div style=\"margin-top: 15px\">\n  <el-input\n    placeholder=\"请输入内容\"\n    v-model=\"input3\"\n    class=\"input-with-select\"\n  >\n    <template #prepend>\n      <el-select v-model=\"select\" placeholder=\"请选择\">\n        <el-option label=\"餐厅名\" value=\"1\"></el-option>\n        <el-option label=\"订单号\" value=\"2\"></el-option>\n        <el-option label=\"用户电话\" value=\"3\"></el-option>\n      </el-select>\n    </template>\n    <template #append>\n      <el-button icon=\"el-icon-search\"></el-button>\n    </template>\n  </el-input>\n</div>\n\n<style>\n  .el-select .el-input {\n    width: 130px;\n  }\n  .input-with-select .el-input-group__prepend {\n    background-color: #fff;\n  }\n</style>\n\n<script>\nimport { defineComponent, ref } from 'vue'\n\nexport default defineComponent ({\n  setup() {\n    return {\n      input1: ref(''),\n      input2: ref(''),\n      input3: ref(''),\n      select: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "chi-cun"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#chi-cun"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 尺寸")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("可通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。")])], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-input-size\">\n  <el-input\n    placeholder=\"请输入内容\"\n    suffix-icon=\"el-icon-date\"\n    v-model=\"input1\">\n  </el-input>\n  <el-input\n    size=\"medium\"\n    placeholder=\"请输入内容\"\n    suffix-icon=\"el-icon-date\"\n    v-model=\"input2\">\n  </el-input>\n  <el-input\n    size=\"small\"\n    placeholder=\"请输入内容\"\n    suffix-icon=\"el-icon-date\"\n    v-model=\"input3\">\n  </el-input>\n  <el-input\n    size=\"mini\"\n    placeholder=\"请输入内容\"\n    suffix-icon=\"el-icon-date\"\n    v-model=\"input4\">\n  </el-input>\n</div>\n\n<script>\nimport { defineComponent, ref } from 'vue'\n\nexport default defineComponent ({\n  setup() {\n    return {\n      input1: ref(''),\n      input2: ref(''),\n      input3: ref(''),\n      input4: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "dai-shu-ru-jian-yi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dai-shu-ru-jian-yi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 带输入建议")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "根据输入内容提供对应的输入建议", -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("autocomplete 是一个可带输入建议的输入框组件，"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "fetch-suggestions"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 是一个返回输入建议的方法属性，如 querySearch(queryString, cb)，在该方法中你可以在你的输入建议数据准备好时通过 cb(data) 返回到 autocomplete 组件中。")])], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-row class=\"demo-autocomplete\">\n  <el-col :span=\"12\">\n    <div class=\"sub-title\">激活即列出输入建议</div>\n    <el-autocomplete\n      class=\"inline-input\"\n      v-model=\"state1\"\n      :fetch-suggestions=\"querySearch\"\n      placeholder=\"请输入内容\"\n      @select=\"handleSelect\"\n    ></el-autocomplete>\n  </el-col>\n  <el-col :span=\"12\">\n    <div class=\"sub-title\">输入后匹配输入建议</div>\n    <el-autocomplete\n      class=\"inline-input\"\n      v-model=\"state2\"\n      :fetch-suggestions=\"querySearch\"\n      placeholder=\"请输入内容\"\n      :trigger-on-focus=\"false\"\n      @select=\"handleSelect\"\n    ></el-autocomplete>\n  </el-col>\n</el-row>\n<script>\nimport { defineComponent, ref, onMounted } from 'vue'\n\nexport default defineComponent({\n  setup() {\n    const restaurants = ref([]);\n    const querySearch = (queryString, cb) => {\n      var results = queryString\n        ? restaurants.value.filter(createFilter(queryString))\n        : restaurants.value;\n      // 调用 callback 返回建议列表的数据\n      cb(results);\n    };\n    const createFilter = (queryString) => {\n      return (restaurant) => {\n        return (\n          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===\n          0\n        );\n      };\n    };\n    const loadAll = () => {\n      return [\n        { value: \"三全鲜食（北新泾店）\", address: \"长宁区新渔路144号\" },\n        {\n          value: \"Hot honey 首尔炸鸡（仙霞路）\",\n          address: \"上海市长宁区淞虹路661号\",\n        },\n        {\n          value: \"新旺角茶餐厅\",\n          address: \"上海市普陀区真北路988号创邑金沙谷6号楼113\",\n        },\n        { value: \"泷千家(天山西路店)\", address: \"天山西路438号\" },\n        {\n          value: \"胖仙女纸杯蛋糕（上海凌空店）\",\n          address: \"上海市长宁区金钟路968号1幢18号楼一层商铺18-101\",\n        },\n        { value: \"贡茶\", address: \"上海市长宁区金钟路633号\" },\n        {\n          value: \"豪大大香鸡排超级奶爸\",\n          address: \"上海市嘉定区曹安公路曹安路1685号\",\n        },\n        {\n          value: \"茶芝兰（奶茶，手抓饼）\",\n          address: \"上海市普陀区同普路1435号\",\n        },\n        { value: \"十二泷町\", address: \"上海市北翟路1444弄81号B幢-107\" },\n        { value: \"星移浓缩咖啡\", address: \"上海市嘉定区新郁路817号\" },\n        { value: \"阿姨奶茶/豪大大\", address: \"嘉定区曹安路1611号\" },\n        { value: \"新麦甜四季甜品炸鸡\", address: \"嘉定区曹安公路2383弄55号\" },\n        {\n          value: \"Monica摩托主题咖啡店\",\n          address: \"嘉定区江桥镇曹安公路2409号1F，2383弄62号1F\",\n        },\n        {\n          value: \"浮生若茶（凌空soho店）\",\n          address: \"上海长宁区金钟路968号9号楼地下一层\",\n        },\n        { value: \"NONO JUICE  鲜榨果汁\", address: \"上海市长宁区天山西路119号\" },\n        { value: \"CoCo都可(北新泾店）\", address: \"上海市长宁区仙霞西路\" },\n        {\n          value: \"快乐柠檬（神州智慧店）\",\n          address: \"上海市长宁区天山西路567号1层R117号店铺\",\n        },\n        {\n          value: \"Merci Paul cafe\",\n          address: \"上海市普陀区光复西路丹巴路28弄6号楼819\",\n        },\n        {\n          value: \"猫山王（西郊百联店）\",\n          address: \"上海市长宁区仙霞西路88号第一层G05-F01-1-306\",\n        },\n        { value: \"枪会山\", address: \"上海市普陀区棕榈路\" },\n        { value: \"纵食\", address: \"元丰天山花园(东门) 双流路267号\" },\n        { value: \"钱记\", address: \"上海市长宁区天山西路\" },\n        { value: \"壹杯加\", address: \"上海市长宁区通协路\" },\n        {\n          value: \"唦哇嘀咖\",\n          address: \"上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元\",\n        },\n        { value: \"爱茜茜里(西郊百联)\", address: \"长宁区仙霞西路88号1305室\" },\n        {\n          value: \"爱茜茜里(近铁广场)\",\n          address:\n            \"上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺\",\n        },\n        {\n          value: \"鲜果榨汁（金沙江路和美广店）\",\n          address: \"普陀区金沙江路2239号金沙和美广场B1-10-6\",\n        },\n        {\n          value: \"开心丽果（缤谷店）\",\n          address: \"上海市长宁区威宁路天山路341号\",\n        },\n        { value: \"超级鸡车（丰庄路店）\", address: \"上海市嘉定区丰庄路240号\" },\n        { value: \"妙生活果园（北新泾店）\", address: \"长宁区新渔路144号\" },\n        { value: \"香宜度麻辣香锅\", address: \"长宁区淞虹路148号\" },\n        {\n          value: \"凡仔汉堡（老真北路店）\",\n          address: \"上海市普陀区老真北路160号\",\n        },\n        { value: \"港式小铺\", address: \"上海市长宁区金钟路968号15楼15-105室\" },\n        { value: \"蜀香源麻辣香锅（剑河路店）\", address: \"剑河路443-1\" },\n        { value: \"北京饺子馆\", address: \"长宁区北新泾街道天山西路490-1号\" },\n        {\n          value: \"饭典*新简餐（凌空SOHO店）\",\n          address: \"上海市长宁区金钟路968号9号楼地下一层9-83室\",\n        },\n        {\n          value: \"焦耳·川式快餐（金钟路店）\",\n          address: \"上海市金钟路633号地下一层甲部\",\n        },\n        { value: \"动力鸡车\", address: \"长宁区仙霞西路299弄3号101B\" },\n        { value: \"浏阳蒸菜\", address: \"天山西路430号\" },\n        { value: \"四海游龙（天山西路店）\", address: \"上海市长宁区天山西路\" },\n        {\n          value: \"樱花食堂（凌空店）\",\n          address: \"上海市长宁区金钟路968号15楼15-105室\",\n        },\n        { value: \"壹分米客家传统调制米粉(天山店)\", address: \"天山西路428号\" },\n        {\n          value: \"福荣祥烧腊（平溪路店）\",\n          address: \"上海市长宁区协和路福泉路255弄57-73号\",\n        },\n        {\n          value: \"速记黄焖鸡米饭\",\n          address: \"上海市长宁区北新泾街道金钟路180号1层01号摊位\",\n        },\n        { value: \"红辣椒麻辣烫\", address: \"上海市长宁区天山西路492号\" },\n        {\n          value: \"(小杨生煎)西郊百联餐厅\",\n          address: \"长宁区仙霞西路88号百联2楼\",\n        },\n        { value: \"阳阳麻辣烫\", address: \"天山西路389号\" },\n        {\n          value: \"南拳妈妈龙虾盖浇饭\",\n          address: \"普陀区金沙江路1699号鑫乐惠美食广场A13\",\n        },\n      ];\n    };\n    const handleSelect = (item) => {\n      console.log(item);\n    };\n    onMounted(() => {\n      restaurants.value = loadAll();\n    });\n    return {\n      restaurants,\n      state1: ref(''),\n      state2: ref(''),\n      querySearch,\n      createFilter,\n      loadAll,\n      handleSelect,\n    };\n  },\n});\n</script>\n")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zi-ding-yi-mo-ban"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-mo-ban"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 自定义模板")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可自定义输入建议的显示", -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("使用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "#default"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("自定义输入建议的模板。该 scope 的参数为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "item"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，表示当前输入建议对象。")])], -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-autocomplete\n  popper-class=\"my-autocomplete\"\n  v-model=\"state\"\n  :fetch-suggestions=\"querySearch\"\n  placeholder=\"请输入内容\"\n  @select=\"handleSelect\"\n>\n  <template #suffix>\n    <i class=\"el-icon-edit el-input__icon\" @click=\"handleIconClick\"> </i>\n  </template>\n  <template #default=\"{ item }\">\n    <div class=\"name\">{{ item.value }}</div>\n    <span class=\"addr\">{{ item.address }}</span>\n  </template>\n</el-autocomplete>\n\n<style lang=\"scss\">\n.my-autocomplete {\n  li {\n    line-height: normal;\n    padding: 7px;\n\n    .name {\n      text-overflow: ellipsis;\n      overflow: hidden;\n    }\n    .addr {\n      font-size: 12px;\n      color: #b4b4b4;\n    }\n\n    .highlighted .addr {\n      color: #ddd;\n    }\n  }\n}\n</style>\n\n<script>\nimport { defineComponent, ref, onMounted } from 'vue'\n\nexport default defineComponent({\n  setup() {\n    const restaurants = ref([]);\n\n    const querySearch = (queryString, cb) => {\n      var results = queryString\n        ? restaurants.value.filter(createFilter(queryString))\n        : restaurants.value;\n      // 调用 callback 返回建议列表的数据\n      cb(results);\n    };\n    const createFilter = (queryString) => {\n      return (restaurant) => {\n        return (\n          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===\n          0\n        );\n      };\n    };\n    const loadAll = () => {\n      return [\n        { value: \"三全鲜食（北新泾店）\", address: \"长宁区新渔路144号\" },\n        {\n          value: \"Hot honey 首尔炸鸡（仙霞路）\",\n          address: \"上海市长宁区淞虹路661号\",\n        },\n        {\n          value: \"新旺角茶餐厅\",\n          address: \"上海市普陀区真北路988号创邑金沙谷6号楼113\",\n        },\n        { value: \"泷千家(天山西路店)\", address: \"天山西路438号\" },\n        {\n          value: \"胖仙女纸杯蛋糕（上海凌空店）\",\n          address: \"上海市长宁区金钟路968号1幢18号楼一层商铺18-101\",\n        },\n        { value: \"贡茶\", address: \"上海市长宁区金钟路633号\" },\n        {\n          value: \"豪大大香鸡排超级奶爸\",\n          address: \"上海市嘉定区曹安公路曹安路1685号\",\n        },\n        {\n          value: \"茶芝兰（奶茶，手抓饼）\",\n          address: \"上海市普陀区同普路1435号\",\n        },\n        { value: \"十二泷町\", address: \"上海市北翟路1444弄81号B幢-107\" },\n        { value: \"星移浓缩咖啡\", address: \"上海市嘉定区新郁路817号\" },\n        { value: \"阿姨奶茶/豪大大\", address: \"嘉定区曹安路1611号\" },\n        { value: \"新麦甜四季甜品炸鸡\", address: \"嘉定区曹安公路2383弄55号\" },\n        {\n          value: \"Monica摩托主题咖啡店\",\n          address: \"嘉定区江桥镇曹安公路2409号1F，2383弄62号1F\",\n        },\n        {\n          value: \"浮生若茶（凌空soho店）\",\n          address: \"上海长宁区金钟路968号9号楼地下一层\",\n        },\n        { value: \"NONO JUICE  鲜榨果汁\", address: \"上海市长宁区天山西路119号\" },\n        { value: \"CoCo都可(北新泾店）\", address: \"上海市长宁区仙霞西路\" },\n        {\n          value: \"快乐柠檬（神州智慧店）\",\n          address: \"上海市长宁区天山西路567号1层R117号店铺\",\n        },\n        {\n          value: \"Merci Paul cafe\",\n          address: \"上海市普陀区光复西路丹巴路28弄6号楼819\",\n        },\n        {\n          value: \"猫山王（西郊百联店）\",\n          address: \"上海市长宁区仙霞西路88号第一层G05-F01-1-306\",\n        },\n        { value: \"枪会山\", address: \"上海市普陀区棕榈路\" },\n        { value: \"纵食\", address: \"元丰天山花园(东门) 双流路267号\" },\n        { value: \"钱记\", address: \"上海市长宁区天山西路\" },\n        { value: \"壹杯加\", address: \"上海市长宁区通协路\" },\n        {\n          value: \"唦哇嘀咖\",\n          address: \"上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元\",\n        },\n        { value: \"爱茜茜里(西郊百联)\", address: \"长宁区仙霞西路88号1305室\" },\n        {\n          value: \"爱茜茜里(近铁广场)\",\n          address:\n            \"上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺\",\n        },\n        {\n          value: \"鲜果榨汁（金沙江路和美广店）\",\n          address: \"普陀区金沙江路2239号金沙和美广场B1-10-6\",\n        },\n        {\n          value: \"开心丽果（缤谷店）\",\n          address: \"上海市长宁区威宁路天山路341号\",\n        },\n        { value: \"超级鸡车（丰庄路店）\", address: \"上海市嘉定区丰庄路240号\" },\n        { value: \"妙生活果园（北新泾店）\", address: \"长宁区新渔路144号\" },\n        { value: \"香宜度麻辣香锅\", address: \"长宁区淞虹路148号\" },\n        {\n          value: \"凡仔汉堡（老真北路店）\",\n          address: \"上海市普陀区老真北路160号\",\n        },\n        { value: \"港式小铺\", address: \"上海市长宁区金钟路968号15楼15-105室\" },\n        { value: \"蜀香源麻辣香锅（剑河路店）\", address: \"剑河路443-1\" },\n        { value: \"北京饺子馆\", address: \"长宁区北新泾街道天山西路490-1号\" },\n        {\n          value: \"饭典*新简餐（凌空SOHO店）\",\n          address: \"上海市长宁区金钟路968号9号楼地下一层9-83室\",\n        },\n        {\n          value: \"焦耳·川式快餐（金钟路店）\",\n          address: \"上海市金钟路633号地下一层甲部\",\n        },\n        { value: \"动力鸡车\", address: \"长宁区仙霞西路299弄3号101B\" },\n        { value: \"浏阳蒸菜\", address: \"天山西路430号\" },\n        { value: \"四海游龙（天山西路店）\", address: \"上海市长宁区天山西路\" },\n        {\n          value: \"樱花食堂（凌空店）\",\n          address: \"上海市长宁区金钟路968号15楼15-105室\",\n        },\n        { value: \"壹分米客家传统调制米粉(天山店)\", address: \"天山西路428号\" },\n        {\n          value: \"福荣祥烧腊（平溪路店）\",\n          address: \"上海市长宁区协和路福泉路255弄57-73号\",\n        },\n        {\n          value: \"速记黄焖鸡米饭\",\n          address: \"上海市长宁区北新泾街道金钟路180号1层01号摊位\",\n        },\n        { value: \"红辣椒麻辣烫\", address: \"上海市长宁区天山西路492号\" },\n        {\n          value: \"(小杨生煎)西郊百联餐厅\",\n          address: \"长宁区仙霞西路88号百联2楼\",\n        },\n        { value: \"阳阳麻辣烫\", address: \"天山西路389号\" },\n        {\n          value: \"南拳妈妈龙虾盖浇饭\",\n          address: \"普陀区金沙江路1699号鑫乐惠美食广场A13\",\n        },\n      ];\n    };\n    const handleSelect = (item) => {\n      console.log(item);\n    };\n    \n    const handleIconClick = (ev) => {\n      console.log(ev);\n    };\n\n    onMounted(() => {\n      restaurants.value = loadAll();\n    });\n\n    return {\n      restaurants,\n      state: ref(''),\n      querySearch,\n      createFilter,\n      loadAll,\n      handleSelect,\n      handleIconClick,\n    };\n  },\n});\n</script>\n")], -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "yuan-cheng-sou-suo"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yuan-cheng-sou-suo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 远程搜索")], -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "从服务端搜索数据", -1);

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-autocomplete\n  v-model=\"state\"\n  :fetch-suggestions=\"querySearchAsync\"\n  placeholder=\"请输入内容\"\n  @select=\"handleSelect\"\n></el-autocomplete>\n<script>\nimport { defineComponent, ref, onMounted } from 'vue'\n\nexport default defineComponent({\n  setup() {\n    const restaurants = ref([]);\n    const loadAll = () => {\n      return [\n        { value: \"三全鲜食（北新泾店）\", address: \"长宁区新渔路144号\" },\n        {\n          value: \"Hot honey 首尔炸鸡（仙霞路）\",\n          address: \"上海市长宁区淞虹路661号\",\n        },\n        {\n          value: \"新旺角茶餐厅\",\n          address: \"上海市普陀区真北路988号创邑金沙谷6号楼113\",\n        },\n        { value: \"泷千家(天山西路店)\", address: \"天山西路438号\" },\n        {\n          value: \"胖仙女纸杯蛋糕（上海凌空店）\",\n          address: \"上海市长宁区金钟路968号1幢18号楼一层商铺18-101\",\n        },\n        { value: \"贡茶\", address: \"上海市长宁区金钟路633号\" },\n        {\n          value: \"豪大大香鸡排超级奶爸\",\n          address: \"上海市嘉定区曹安公路曹安路1685号\",\n        },\n        {\n          value: \"茶芝兰（奶茶，手抓饼）\",\n          address: \"上海市普陀区同普路1435号\",\n        },\n        { value: \"十二泷町\", address: \"上海市北翟路1444弄81号B幢-107\" },\n        { value: \"星移浓缩咖啡\", address: \"上海市嘉定区新郁路817号\" },\n        { value: \"阿姨奶茶/豪大大\", address: \"嘉定区曹安路1611号\" },\n        { value: \"新麦甜四季甜品炸鸡\", address: \"嘉定区曹安公路2383弄55号\" },\n        {\n          value: \"Monica摩托主题咖啡店\",\n          address: \"嘉定区江桥镇曹安公路2409号1F，2383弄62号1F\",\n        },\n        {\n          value: \"浮生若茶（凌空soho店）\",\n          address: \"上海长宁区金钟路968号9号楼地下一层\",\n        },\n        { value: \"NONO JUICE  鲜榨果汁\", address: \"上海市长宁区天山西路119号\" },\n        { value: \"CoCo都可(北新泾店）\", address: \"上海市长宁区仙霞西路\" },\n        {\n          value: \"快乐柠檬（神州智慧店）\",\n          address: \"上海市长宁区天山西路567号1层R117号店铺\",\n        },\n        {\n          value: \"Merci Paul cafe\",\n          address: \"上海市普陀区光复西路丹巴路28弄6号楼819\",\n        },\n        {\n          value: \"猫山王（西郊百联店）\",\n          address: \"上海市长宁区仙霞西路88号第一层G05-F01-1-306\",\n        },\n        { value: \"枪会山\", address: \"上海市普陀区棕榈路\" },\n        { value: \"纵食\", address: \"元丰天山花园(东门) 双流路267号\" },\n        { value: \"钱记\", address: \"上海市长宁区天山西路\" },\n        { value: \"壹杯加\", address: \"上海市长宁区通协路\" },\n        {\n          value: \"唦哇嘀咖\",\n          address: \"上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元\",\n        },\n        { value: \"爱茜茜里(西郊百联)\", address: \"长宁区仙霞西路88号1305室\" },\n        {\n          value: \"爱茜茜里(近铁广场)\",\n          address:\n            \"上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺\",\n        },\n        {\n          value: \"鲜果榨汁（金沙江路和美广店）\",\n          address: \"普陀区金沙江路2239号金沙和美广场B1-10-6\",\n        },\n        {\n          value: \"开心丽果（缤谷店）\",\n          address: \"上海市长宁区威宁路天山路341号\",\n        },\n        { value: \"超级鸡车（丰庄路店）\", address: \"上海市嘉定区丰庄路240号\" },\n        { value: \"妙生活果园（北新泾店）\", address: \"长宁区新渔路144号\" },\n        { value: \"香宜度麻辣香锅\", address: \"长宁区淞虹路148号\" },\n        {\n          value: \"凡仔汉堡（老真北路店）\",\n          address: \"上海市普陀区老真北路160号\",\n        },\n        { value: \"港式小铺\", address: \"上海市长宁区金钟路968号15楼15-105室\" },\n        { value: \"蜀香源麻辣香锅（剑河路店）\", address: \"剑河路443-1\" },\n        { value: \"北京饺子馆\", address: \"长宁区北新泾街道天山西路490-1号\" },\n        {\n          value: \"饭典*新简餐（凌空SOHO店）\",\n          address: \"上海市长宁区金钟路968号9号楼地下一层9-83室\",\n        },\n        {\n          value: \"焦耳·川式快餐（金钟路店）\",\n          address: \"上海市金钟路633号地下一层甲部\",\n        },\n        { value: \"动力鸡车\", address: \"长宁区仙霞西路299弄3号101B\" },\n        { value: \"浏阳蒸菜\", address: \"天山西路430号\" },\n        { value: \"四海游龙（天山西路店）\", address: \"上海市长宁区天山西路\" },\n        {\n          value: \"樱花食堂（凌空店）\",\n          address: \"上海市长宁区金钟路968号15楼15-105室\",\n        },\n        { value: \"壹分米客家传统调制米粉(天山店)\", address: \"天山西路428号\" },\n        {\n          value: \"福荣祥烧腊（平溪路店）\",\n          address: \"上海市长宁区协和路福泉路255弄57-73号\",\n        },\n        {\n          value: \"速记黄焖鸡米饭\",\n          address: \"上海市长宁区北新泾街道金钟路180号1层01号摊位\",\n        },\n        { value: \"红辣椒麻辣烫\", address: \"上海市长宁区天山西路492号\" },\n        {\n          value: \"(小杨生煎)西郊百联餐厅\",\n          address: \"长宁区仙霞西路88号百联2楼\",\n        },\n        { value: \"阳阳麻辣烫\", address: \"天山西路389号\" },\n        {\n          value: \"南拳妈妈龙虾盖浇饭\",\n          address: \"普陀区金沙江路1699号鑫乐惠美食广场A13\",\n        },\n      ];\n    };\n\n    let timeout;\n    const querySearchAsync = (queryString, cb) => {\n      var results = queryString\n        ? restaurants.value.filter(createFilter(queryString))\n        : restaurants.value;\n\n      clearTimeout(timeout);\n      timeout = setTimeout(() => {\n        cb(results);\n      }, 3000 * Math.random());\n    };\n    const createFilter = (queryString) => {\n      return (restaurant) => {\n        return (\n          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===\n          0\n        );\n      };\n    };\n    const handleSelect = (item) => {\n      console.log(item);\n    };\n    onMounted(() => {\n      restaurants.value = loadAll();\n    });\n    return {\n      restaurants,\n      state: ref(''),\n      querySearchAsync,\n      createFilter,\n      loadAll,\n      handleSelect,\n    };\n  },\n});\n</script>\n")], -1);

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "shu-ru-chang-du-xian-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shu-ru-chang-du-xian-zhi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 输入长度限制")], -1);

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "maxlength"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "minlength"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "text"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 或 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "textarea"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 的输入框，在使用 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "maxlength"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性限制最大输入长度的同时，可通过设置 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-word-limit"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性来展示字数统计。")])], -1);

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-input\n  type=\"text\"\n  placeholder=\"请输入内容\"\n  v-model=\"text\"\n  maxlength=\"10\"\n  show-word-limit\n>\n</el-input>\n<div style=\"margin: 20px 0;\"></div>\n<el-input\n  type=\"textarea\"\n  placeholder=\"请输入内容\"\n  v-model=\"textarea\"\n  maxlength=\"30\"\n  show-word-limit\n>\n</el-input>\n\n<script>\nimport { defineComponent, ref } from 'vue'\n\nexport default defineComponent ({\n  setup() {\n    return {\n      text: ref(''),\n      textarea: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"input-attributes\"><a class=\"header-anchor\" href=\"#input-attributes\">¶</a> Input Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td>string</td><td>text，textarea 和其他 <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types\">原生 input 的 type 值</a></td><td>text</td></tr><tr><td>value / v-model</td><td>绑定值</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>maxlength</td><td>原生属性，最大输入长度</td><td>number</td><td>—</td><td>—</td></tr><tr><td>minlength</td><td>原生属性，最小输入长度</td><td>number</td><td>—</td><td>—</td></tr><tr><td>show-word-limit</td><td>是否显示输入字数统计，只在 <code>type = &quot;text&quot;</code> 或 <code>type = &quot;textarea&quot;</code> 时有效</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>clearable</td><td>是否可清空</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-password</td><td>是否显示切换密码图标</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>输入框尺寸，只在 <code>type!=&quot;textarea&quot;</code> 时有效</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>prefix-icon</td><td>输入框头部图标</td><td>string</td><td>—</td><td>—</td></tr><tr><td>suffix-icon</td><td>输入框尾部图标</td><td>string</td><td>—</td><td>—</td></tr><tr><td>rows</td><td>输入框行数，只对 <code>type=&quot;textarea&quot;</code> 有效</td><td>number</td><td>—</td><td>2</td></tr><tr><td>autosize</td><td>自适应内容高度，只对 <code>type=&quot;textarea&quot;</code> 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }</td><td>boolean / object</td><td>—</td><td>false</td></tr><tr><td>autocomplete</td><td>原生属性，自动补全</td><td>string</td><td>on, off</td><td>off</td></tr><tr><td>auto-complete</td><td>下个主版本弃用</td><td>string</td><td>on, off</td><td>off</td></tr><tr><td>name</td><td>原生属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>readonly</td><td>原生属性，是否只读</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>max</td><td>原生属性，设置最大值</td><td>—</td><td>—</td><td>—</td></tr><tr><td>min</td><td>原生属性，设置最小值</td><td>—</td><td>—</td><td>—</td></tr><tr><td>step</td><td>原生属性，设置输入字段的合法数字间隔</td><td>—</td><td>—</td><td>—</td></tr><tr><td>resize</td><td>控制是否能被用户缩放</td><td>string</td><td>none, both, horizontal, vertical</td><td>—</td></tr><tr><td>autofocus</td><td>原生属性，自动获取焦点</td><td>boolean</td><td>true, false</td><td>false</td></tr><tr><td>form</td><td>原生属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>输入框关联的label文字</td><td>string</td><td>—</td><td>—</td></tr><tr><td>tabindex</td><td>输入框的tabindex</td><td>string</td><td>-</td><td>-</td></tr><tr><td>validate-event</td><td>输入时是否触发表单的校验</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table><h3 id=\"input-slots\"><a class=\"header-anchor\" href=\"#input-slots\">¶</a> Input Slots</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>prefix</td><td>输入框头部内容，只对 <code>type=&quot;text&quot;</code> 有效</td></tr><tr><td>suffix</td><td>输入框尾部内容，只对 <code>type=&quot;text&quot;</code> 有效</td></tr><tr><td>prepend</td><td>输入框前置内容，只对 <code>type=&quot;text&quot;</code> 有效</td></tr><tr><td>append</td><td>输入框后置内容，只对 <code>type=&quot;text&quot;</code> 有效</td></tr></tbody></table><h3 id=\"input-events\"><a class=\"header-anchor\" href=\"#input-events\">¶</a> Input Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>blur</td><td>在 Input 失去焦点时触发</td><td>(event: Event)</td></tr><tr><td>focus</td><td>在 Input 获得焦点时触发</td><td>(event: Event)</td></tr><tr><td>change</td><td>仅在输入框失去焦点或用户按下回车时触发</td><td>(value: string | number)</td></tr><tr><td>input</td><td>在 Input 值改变时触发</td><td>(value: string | number)</td></tr><tr><td>clear</td><td>在点击由 <code>clearable</code> 属性生成的清空按钮时触发</td><td>—</td></tr></tbody></table><h3 id=\"input-methods\"><a class=\"header-anchor\" href=\"#input-methods\">¶</a> Input Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 input 获取焦点</td><td>—</td></tr><tr><td>blur</td><td>使 input 失去焦点</td><td>—</td></tr><tr><td>select</td><td>选中 input 中的文字</td><td>—</td></tr></tbody></table><h3 id=\"autocomplete-attributes\"><a class=\"header-anchor\" href=\"#autocomplete-attributes\">¶</a> Autocomplete Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>placeholder</td><td>输入框占位文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>value-key</td><td>输入建议对象中用于显示的键名</td><td>string</td><td>—</td><td>value</td></tr><tr><td>value</td><td>必填值，输入绑定值</td><td>string</td><td>—</td><td>—</td></tr><tr><td>debounce</td><td>获取输入建议的去抖延时</td><td>number</td><td>—</td><td>300</td></tr><tr><td>placement</td><td>菜单弹出位置</td><td>string</td><td>top / top-start / top-end / bottom / bottom-start / bottom-end</td><td>bottom-start</td></tr><tr><td>fetch-suggestions</td><td>返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它</td><td>Function(queryString, callback)</td><td>—</td><td>—</td></tr><tr><td>popper-class</td><td>Autocomplete 下拉列表的类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>trigger-on-focus</td><td>是否在输入框 focus 时显示建议列表</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>name</td><td>原生属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>select-when-unmatched</td><td>在输入没有任何匹配建议的情况下，按下回车是否触发 <code>select</code> 事件</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>label</td><td>输入框关联的label文字</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prefix-icon</td><td>输入框头部图标</td><td>string</td><td>—</td><td>—</td></tr><tr><td>suffix-icon</td><td>输入框尾部图标</td><td>string</td><td>—</td><td>—</td></tr><tr><td>hide-loading</td><td>是否隐藏远程加载时的加载图标</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>highlight-first-item</td><td>是否默认突出显示远程搜索建议中的第一项</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"autocomplete-slots\"><a class=\"header-anchor\" href=\"#autocomplete-slots\">¶</a> Autocomplete Slots</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>prefix</td><td>输入框头部内容</td></tr><tr><td>suffix</td><td>输入框尾部内容</td></tr><tr><td>prepend</td><td>输入框前置内容</td></tr><tr><td>append</td><td>输入框后置内容</td></tr></tbody></table><h3 id=\"autocomplete-scoped-slot\"><a class=\"header-anchor\" href=\"#autocomplete-scoped-slot\">¶</a> Autocomplete Scoped Slot</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>自定义输入建议，参数为 { item }</td></tr></tbody></table><h3 id=\"autocomplete-events\"><a class=\"header-anchor\" href=\"#autocomplete-events\">¶</a> Autocomplete Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select</td><td>点击选中建议项时触发</td><td>选中建议项</td></tr><tr><td>change</td><td>在 Input 值改变时触发</td><td>(value: string | number)</td></tr></tbody></table><h3 id=\"autocomplete-methods\"><a class=\"header-anchor\" href=\"#autocomplete-methods\">¶</a> Autocomplete Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 input 获取焦点</td><td>-</td></tr></tbody></table>", 18);

function inputvue_type_template_id_1cce4a19_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  var _component_element_demo7 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo7");

  var _component_element_demo8 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo8");

  var _component_element_demo9 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo9");

  var _component_element_demo10 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo10");

  var _component_element_demo11 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo11");

  var _component_element_demo12 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo12");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", inputvue_type_template_id_1cce4a19_hoisted_1, [inputvue_type_template_id_1cce4a19_hoisted_2, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [inputvue_type_template_id_1cce4a19_hoisted_6];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
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
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_20, _hoisted_21, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), _hoisted_24, _hoisted_25, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    _: 1
  }), _hoisted_27, _hoisted_28, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo8)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_33];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_32];
    }),
    _: 1
  }), _hoisted_34, _hoisted_35, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo9)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_37];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_36];
    }),
    _: 1
  }), _hoisted_38, _hoisted_39, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo10)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_41];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_40];
    }),
    _: 1
  }), _hoisted_42, _hoisted_43, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo11)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_44];
    }),
    _: 1
  }), _hoisted_45, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo12)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_47];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_46];
    }),
    _: 1
  }), _hoisted_48]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/input.md?vue&type=template&id=1cce4a19

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/input.md?vue&type=script&lang=ts


/* harmony default export */ var inputvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input, {
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input = $event;
          }),
          placeholder: "请输入内容"
        }, null, 8, ["modelValue"])]);
      }

      var defineComponent = vue_esm_browser["q" /* defineComponent */],
          ref = vue_esm_browser["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input, {
          placeholder: "请输入内容",
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input = $event;
          }),
          disabled: true
        }, null, 8, ["modelValue"])]);
      }

      var defineComponent = vue_esm_browser["q" /* defineComponent */],
          ref = vue_esm_browser["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input, {
          placeholder: "请输入内容",
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input = $event;
          }),
          clearable: ""
        }, null, 8, ["modelValue"])]);
      }

      var defineComponent = vue_esm_browser["q" /* defineComponent */],
          ref = vue_esm_browser["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input, {
          placeholder: "请输入密码",
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input = $event;
          }),
          "show-password": ""
        }, null, 8, ["modelValue"])]);
      }

      var defineComponent = vue_esm_browser["q" /* defineComponent */],
          ref = vue_esm_browser["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-input-suffix"
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" 属性方式： ");

      var _hoisted_3 = {
        class: "demo-input-suffix"
      };

      var _hoisted_4 = /*#__PURE__*/_createTextVNode(" slot 方式： ");

      var _hoisted_5 = /*#__PURE__*/_createVNode("i", {
        class: "el-input__icon el-icon-date"
      }, null, -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("i", {
        class: "el-input__icon el-icon-search"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_input, {
          placeholder: "请选择日期",
          "suffix-icon": "el-icon-date",
          modelValue: _ctx.input1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input1 = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input, {
          placeholder: "请输入内容",
          "prefix-icon": "el-icon-search",
          modelValue: _ctx.input2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.input2 = $event;
          })
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_input, {
          placeholder: "请选择日期",
          modelValue: _ctx.input3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.input3 = $event;
          })
        }, {
          suffix: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_input, {
          placeholder: "请输入内容",
          modelValue: _ctx.input4,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.input4 = $event;
          })
        }, {
          prefix: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      var defineComponent = vue_esm_browser["q" /* defineComponent */],
          ref = vue_esm_browser["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input1: ref(''),
            input2: ref(''),
            input3: ref(''),
            input4: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input, {
          type: "textarea",
          rows: 2,
          placeholder: "请输入内容",
          modelValue: _ctx.textarea,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.textarea = $event;
          })
        }, null, 8, ["modelValue"])]);
      }

      var defineComponent = vue_esm_browser["q" /* defineComponent */],
          ref = vue_esm_browser["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            textarea: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        style: {
          "margin": "20px 0"
        }
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input, {
          type: "textarea",
          autosize: "",
          placeholder: "请输入内容",
          modelValue: _ctx.textarea1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.textarea1 = $event;
          })
        }, null, 8, ["modelValue"]), _hoisted_1, _createVNode(_component_el_input, {
          type: "textarea",
          autosize: {
            minRows: 2,
            maxRows: 4
          },
          placeholder: "请输入内容",
          modelValue: _ctx.textarea2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.textarea2 = $event;
          })
        }, null, 8, ["modelValue"])]);
      }

      var defineComponent = vue_esm_browser["q" /* defineComponent */],
          ref = vue_esm_browser["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            textarea1: ref(''),
            textarea2: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo7": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Http://");

      var _hoisted_2 = {
        style: {
          "margin-top": "15px"
        }
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode(".com");

      var _hoisted_4 = {
        style: {
          "margin-top": "15px"
        }
      };

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode(_component_el_input, {
          placeholder: "请输入内容",
          modelValue: _ctx.input1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input1 = $event;
          })
        }, {
          prepend: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_2, [_createVNode(_component_el_input, {
          placeholder: "请输入内容",
          modelValue: _ctx.input2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.input2 = $event;
          })
        }, {
          append: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_4, [_createVNode(_component_el_input, {
          placeholder: "请输入内容",
          modelValue: _ctx.input3,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.input3 = $event;
          }),
          class: "input-with-select"
        }, {
          prepend: _withCtx(function () {
            return [_createVNode(_component_el_select, {
              modelValue: _ctx.select,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                return _ctx.select = $event;
              }),
              placeholder: "请选择"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_option, {
                  label: "餐厅名",
                  value: "1"
                }), _createVNode(_component_el_option, {
                  label: "订单号",
                  value: "2"
                }), _createVNode(_component_el_option, {
                  label: "用户电话",
                  value: "3"
                })];
              }),
              _: 1
            }, 8, ["modelValue"])];
          }),
          append: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              icon: "el-icon-search"
            })];
          }),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      var defineComponent = vue_esm_browser["q" /* defineComponent */],
          ref = vue_esm_browser["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input1: ref(''),
            input2: ref(''),
            input3: ref(''),
            select: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo8": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-input-size"
      };

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_input, {
          placeholder: "请输入内容",
          "suffix-icon": "el-icon-date",
          modelValue: _ctx.input1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input1 = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input, {
          size: "medium",
          placeholder: "请输入内容",
          "suffix-icon": "el-icon-date",
          modelValue: _ctx.input2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.input2 = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input, {
          size: "small",
          placeholder: "请输入内容",
          "suffix-icon": "el-icon-date",
          modelValue: _ctx.input3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.input3 = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input, {
          size: "mini",
          placeholder: "请输入内容",
          "suffix-icon": "el-icon-date",
          modelValue: _ctx.input4,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.input4 = $event;
          })
        }, null, 8, ["modelValue"])])]);
      }

      var defineComponent = vue_esm_browser["q" /* defineComponent */],
          ref = vue_esm_browser["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input1: ref(''),
            input2: ref(''),
            input3: ref(''),
            input4: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo9": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "sub-title"
      }, "激活即列出输入建议", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "sub-title"
      }, "输入后匹配输入建议", -1);

      function render(_ctx, _cache) {
        var _component_el_autocomplete = _resolveComponent("el-autocomplete");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          class: "demo-autocomplete"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_el_autocomplete, {
                  class: "inline-input",
                  modelValue: _ctx.state1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.state1 = $event;
                  }),
                  "fetch-suggestions": _ctx.querySearch,
                  placeholder: "请输入内容",
                  onSelect: _ctx.handleSelect
                }, null, 8, ["modelValue", "fetch-suggestions", "onSelect"])];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_2, _createVNode(_component_el_autocomplete, {
                  class: "inline-input",
                  modelValue: _ctx.state2,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.state2 = $event;
                  }),
                  "fetch-suggestions": _ctx.querySearch,
                  placeholder: "请输入内容",
                  "trigger-on-focus": false,
                  onSelect: _ctx.handleSelect
                }, null, 8, ["modelValue", "fetch-suggestions", "onSelect"])];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var defineComponent = vue_esm_browser["q" /* defineComponent */],
          ref = vue_esm_browser["L" /* ref */],
          onMounted = vue_esm_browser["D" /* onMounted */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          var restaurants = ref([]);

          var querySearch = function querySearch(queryString, cb) {
            var results = queryString ? restaurants.value.filter(createFilter(queryString)) : restaurants.value; // 调用 callback 返回建议列表的数据

            cb(results);
          };

          var createFilter = function createFilter(queryString) {
            return function (restaurant) {
              return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
            };
          };

          var loadAll = function loadAll() {
            return [{
              value: "三全鲜食（北新泾店）",
              address: "长宁区新渔路144号"
            }, {
              value: "Hot honey 首尔炸鸡（仙霞路）",
              address: "上海市长宁区淞虹路661号"
            }, {
              value: "新旺角茶餐厅",
              address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
            }, {
              value: "泷千家(天山西路店)",
              address: "天山西路438号"
            }, {
              value: "胖仙女纸杯蛋糕（上海凌空店）",
              address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
            }, {
              value: "贡茶",
              address: "上海市长宁区金钟路633号"
            }, {
              value: "豪大大香鸡排超级奶爸",
              address: "上海市嘉定区曹安公路曹安路1685号"
            }, {
              value: "茶芝兰（奶茶，手抓饼）",
              address: "上海市普陀区同普路1435号"
            }, {
              value: "十二泷町",
              address: "上海市北翟路1444弄81号B幢-107"
            }, {
              value: "星移浓缩咖啡",
              address: "上海市嘉定区新郁路817号"
            }, {
              value: "阿姨奶茶/豪大大",
              address: "嘉定区曹安路1611号"
            }, {
              value: "新麦甜四季甜品炸鸡",
              address: "嘉定区曹安公路2383弄55号"
            }, {
              value: "Monica摩托主题咖啡店",
              address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
            }, {
              value: "浮生若茶（凌空soho店）",
              address: "上海长宁区金钟路968号9号楼地下一层"
            }, {
              value: "NONO JUICE  鲜榨果汁",
              address: "上海市长宁区天山西路119号"
            }, {
              value: "CoCo都可(北新泾店）",
              address: "上海市长宁区仙霞西路"
            }, {
              value: "快乐柠檬（神州智慧店）",
              address: "上海市长宁区天山西路567号1层R117号店铺"
            }, {
              value: "Merci Paul cafe",
              address: "上海市普陀区光复西路丹巴路28弄6号楼819"
            }, {
              value: "猫山王（西郊百联店）",
              address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
            }, {
              value: "枪会山",
              address: "上海市普陀区棕榈路"
            }, {
              value: "纵食",
              address: "元丰天山花园(东门) 双流路267号"
            }, {
              value: "钱记",
              address: "上海市长宁区天山西路"
            }, {
              value: "壹杯加",
              address: "上海市长宁区通协路"
            }, {
              value: "唦哇嘀咖",
              address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
            }, {
              value: "爱茜茜里(西郊百联)",
              address: "长宁区仙霞西路88号1305室"
            }, {
              value: "爱茜茜里(近铁广场)",
              address: "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
            }, {
              value: "鲜果榨汁（金沙江路和美广店）",
              address: "普陀区金沙江路2239号金沙和美广场B1-10-6"
            }, {
              value: "开心丽果（缤谷店）",
              address: "上海市长宁区威宁路天山路341号"
            }, {
              value: "超级鸡车（丰庄路店）",
              address: "上海市嘉定区丰庄路240号"
            }, {
              value: "妙生活果园（北新泾店）",
              address: "长宁区新渔路144号"
            }, {
              value: "香宜度麻辣香锅",
              address: "长宁区淞虹路148号"
            }, {
              value: "凡仔汉堡（老真北路店）",
              address: "上海市普陀区老真北路160号"
            }, {
              value: "港式小铺",
              address: "上海市长宁区金钟路968号15楼15-105室"
            }, {
              value: "蜀香源麻辣香锅（剑河路店）",
              address: "剑河路443-1"
            }, {
              value: "北京饺子馆",
              address: "长宁区北新泾街道天山西路490-1号"
            }, {
              value: "饭典*新简餐（凌空SOHO店）",
              address: "上海市长宁区金钟路968号9号楼地下一层9-83室"
            }, {
              value: "焦耳·川式快餐（金钟路店）",
              address: "上海市金钟路633号地下一层甲部"
            }, {
              value: "动力鸡车",
              address: "长宁区仙霞西路299弄3号101B"
            }, {
              value: "浏阳蒸菜",
              address: "天山西路430号"
            }, {
              value: "四海游龙（天山西路店）",
              address: "上海市长宁区天山西路"
            }, {
              value: "樱花食堂（凌空店）",
              address: "上海市长宁区金钟路968号15楼15-105室"
            }, {
              value: "壹分米客家传统调制米粉(天山店)",
              address: "天山西路428号"
            }, {
              value: "福荣祥烧腊（平溪路店）",
              address: "上海市长宁区协和路福泉路255弄57-73号"
            }, {
              value: "速记黄焖鸡米饭",
              address: "上海市长宁区北新泾街道金钟路180号1层01号摊位"
            }, {
              value: "红辣椒麻辣烫",
              address: "上海市长宁区天山西路492号"
            }, {
              value: "(小杨生煎)西郊百联餐厅",
              address: "长宁区仙霞西路88号百联2楼"
            }, {
              value: "阳阳麻辣烫",
              address: "天山西路389号"
            }, {
              value: "南拳妈妈龙虾盖浇饭",
              address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
            }];
          };

          var handleSelect = function handleSelect(item) {
            console.log(item);
          };

          onMounted(function () {
            restaurants.value = loadAll();
          });
          return {
            restaurants: restaurants,
            state1: ref(''),
            state2: ref(''),
            querySearch: querySearch,
            createFilter: createFilter,
            loadAll: loadAll,
            handleSelect: handleSelect
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo10": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "name"
      };
      var _hoisted_2 = {
        class: "addr"
      };

      function render(_ctx, _cache) {
        var _component_el_autocomplete = _resolveComponent("el-autocomplete");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_autocomplete, {
          "popper-class": "my-autocomplete",
          modelValue: _ctx.state,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.state = $event;
          }),
          "fetch-suggestions": _ctx.querySearch,
          placeholder: "请输入内容",
          onSelect: _ctx.handleSelect
        }, {
          suffix: _withCtx(function () {
            return [_createVNode("i", {
              class: "el-icon-edit el-input__icon",
              onClick: _cache[1] || (_cache[1] = function () {
                return _ctx.handleIconClick && _ctx.handleIconClick.apply(_ctx, arguments);
              })
            })];
          }),
          default: _withCtx(function (_ref) {
            var item = _ref.item;
            return [_createVNode("div", _hoisted_1, _toDisplayString(item.value), 1), _createVNode("span", _hoisted_2, _toDisplayString(item.address), 1)];
          }),
          _: 1
        }, 8, ["modelValue", "fetch-suggestions", "onSelect"])]);
      }

      var defineComponent = vue_esm_browser["q" /* defineComponent */],
          ref = vue_esm_browser["L" /* ref */],
          onMounted = vue_esm_browser["D" /* onMounted */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          var restaurants = ref([]);

          var querySearch = function querySearch(queryString, cb) {
            var results = queryString ? restaurants.value.filter(createFilter(queryString)) : restaurants.value; // 调用 callback 返回建议列表的数据

            cb(results);
          };

          var createFilter = function createFilter(queryString) {
            return function (restaurant) {
              return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
            };
          };

          var loadAll = function loadAll() {
            return [{
              value: "三全鲜食（北新泾店）",
              address: "长宁区新渔路144号"
            }, {
              value: "Hot honey 首尔炸鸡（仙霞路）",
              address: "上海市长宁区淞虹路661号"
            }, {
              value: "新旺角茶餐厅",
              address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
            }, {
              value: "泷千家(天山西路店)",
              address: "天山西路438号"
            }, {
              value: "胖仙女纸杯蛋糕（上海凌空店）",
              address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
            }, {
              value: "贡茶",
              address: "上海市长宁区金钟路633号"
            }, {
              value: "豪大大香鸡排超级奶爸",
              address: "上海市嘉定区曹安公路曹安路1685号"
            }, {
              value: "茶芝兰（奶茶，手抓饼）",
              address: "上海市普陀区同普路1435号"
            }, {
              value: "十二泷町",
              address: "上海市北翟路1444弄81号B幢-107"
            }, {
              value: "星移浓缩咖啡",
              address: "上海市嘉定区新郁路817号"
            }, {
              value: "阿姨奶茶/豪大大",
              address: "嘉定区曹安路1611号"
            }, {
              value: "新麦甜四季甜品炸鸡",
              address: "嘉定区曹安公路2383弄55号"
            }, {
              value: "Monica摩托主题咖啡店",
              address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
            }, {
              value: "浮生若茶（凌空soho店）",
              address: "上海长宁区金钟路968号9号楼地下一层"
            }, {
              value: "NONO JUICE  鲜榨果汁",
              address: "上海市长宁区天山西路119号"
            }, {
              value: "CoCo都可(北新泾店）",
              address: "上海市长宁区仙霞西路"
            }, {
              value: "快乐柠檬（神州智慧店）",
              address: "上海市长宁区天山西路567号1层R117号店铺"
            }, {
              value: "Merci Paul cafe",
              address: "上海市普陀区光复西路丹巴路28弄6号楼819"
            }, {
              value: "猫山王（西郊百联店）",
              address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
            }, {
              value: "枪会山",
              address: "上海市普陀区棕榈路"
            }, {
              value: "纵食",
              address: "元丰天山花园(东门) 双流路267号"
            }, {
              value: "钱记",
              address: "上海市长宁区天山西路"
            }, {
              value: "壹杯加",
              address: "上海市长宁区通协路"
            }, {
              value: "唦哇嘀咖",
              address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
            }, {
              value: "爱茜茜里(西郊百联)",
              address: "长宁区仙霞西路88号1305室"
            }, {
              value: "爱茜茜里(近铁广场)",
              address: "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
            }, {
              value: "鲜果榨汁（金沙江路和美广店）",
              address: "普陀区金沙江路2239号金沙和美广场B1-10-6"
            }, {
              value: "开心丽果（缤谷店）",
              address: "上海市长宁区威宁路天山路341号"
            }, {
              value: "超级鸡车（丰庄路店）",
              address: "上海市嘉定区丰庄路240号"
            }, {
              value: "妙生活果园（北新泾店）",
              address: "长宁区新渔路144号"
            }, {
              value: "香宜度麻辣香锅",
              address: "长宁区淞虹路148号"
            }, {
              value: "凡仔汉堡（老真北路店）",
              address: "上海市普陀区老真北路160号"
            }, {
              value: "港式小铺",
              address: "上海市长宁区金钟路968号15楼15-105室"
            }, {
              value: "蜀香源麻辣香锅（剑河路店）",
              address: "剑河路443-1"
            }, {
              value: "北京饺子馆",
              address: "长宁区北新泾街道天山西路490-1号"
            }, {
              value: "饭典*新简餐（凌空SOHO店）",
              address: "上海市长宁区金钟路968号9号楼地下一层9-83室"
            }, {
              value: "焦耳·川式快餐（金钟路店）",
              address: "上海市金钟路633号地下一层甲部"
            }, {
              value: "动力鸡车",
              address: "长宁区仙霞西路299弄3号101B"
            }, {
              value: "浏阳蒸菜",
              address: "天山西路430号"
            }, {
              value: "四海游龙（天山西路店）",
              address: "上海市长宁区天山西路"
            }, {
              value: "樱花食堂（凌空店）",
              address: "上海市长宁区金钟路968号15楼15-105室"
            }, {
              value: "壹分米客家传统调制米粉(天山店)",
              address: "天山西路428号"
            }, {
              value: "福荣祥烧腊（平溪路店）",
              address: "上海市长宁区协和路福泉路255弄57-73号"
            }, {
              value: "速记黄焖鸡米饭",
              address: "上海市长宁区北新泾街道金钟路180号1层01号摊位"
            }, {
              value: "红辣椒麻辣烫",
              address: "上海市长宁区天山西路492号"
            }, {
              value: "(小杨生煎)西郊百联餐厅",
              address: "长宁区仙霞西路88号百联2楼"
            }, {
              value: "阳阳麻辣烫",
              address: "天山西路389号"
            }, {
              value: "南拳妈妈龙虾盖浇饭",
              address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
            }];
          };

          var handleSelect = function handleSelect(item) {
            console.log(item);
          };

          var handleIconClick = function handleIconClick(ev) {
            console.log(ev);
          };

          onMounted(function () {
            restaurants.value = loadAll();
          });
          return {
            restaurants: restaurants,
            state: ref(''),
            querySearch: querySearch,
            createFilter: createFilter,
            loadAll: loadAll,
            handleSelect: handleSelect,
            handleIconClick: handleIconClick
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo11": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_autocomplete = _resolveComponent("el-autocomplete");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_autocomplete, {
          modelValue: _ctx.state,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.state = $event;
          }),
          "fetch-suggestions": _ctx.querySearchAsync,
          placeholder: "请输入内容",
          onSelect: _ctx.handleSelect
        }, null, 8, ["modelValue", "fetch-suggestions", "onSelect"])]);
      }

      var defineComponent = vue_esm_browser["q" /* defineComponent */],
          ref = vue_esm_browser["L" /* ref */],
          onMounted = vue_esm_browser["D" /* onMounted */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          var restaurants = ref([]);

          var loadAll = function loadAll() {
            return [{
              value: "三全鲜食（北新泾店）",
              address: "长宁区新渔路144号"
            }, {
              value: "Hot honey 首尔炸鸡（仙霞路）",
              address: "上海市长宁区淞虹路661号"
            }, {
              value: "新旺角茶餐厅",
              address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
            }, {
              value: "泷千家(天山西路店)",
              address: "天山西路438号"
            }, {
              value: "胖仙女纸杯蛋糕（上海凌空店）",
              address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
            }, {
              value: "贡茶",
              address: "上海市长宁区金钟路633号"
            }, {
              value: "豪大大香鸡排超级奶爸",
              address: "上海市嘉定区曹安公路曹安路1685号"
            }, {
              value: "茶芝兰（奶茶，手抓饼）",
              address: "上海市普陀区同普路1435号"
            }, {
              value: "十二泷町",
              address: "上海市北翟路1444弄81号B幢-107"
            }, {
              value: "星移浓缩咖啡",
              address: "上海市嘉定区新郁路817号"
            }, {
              value: "阿姨奶茶/豪大大",
              address: "嘉定区曹安路1611号"
            }, {
              value: "新麦甜四季甜品炸鸡",
              address: "嘉定区曹安公路2383弄55号"
            }, {
              value: "Monica摩托主题咖啡店",
              address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
            }, {
              value: "浮生若茶（凌空soho店）",
              address: "上海长宁区金钟路968号9号楼地下一层"
            }, {
              value: "NONO JUICE  鲜榨果汁",
              address: "上海市长宁区天山西路119号"
            }, {
              value: "CoCo都可(北新泾店）",
              address: "上海市长宁区仙霞西路"
            }, {
              value: "快乐柠檬（神州智慧店）",
              address: "上海市长宁区天山西路567号1层R117号店铺"
            }, {
              value: "Merci Paul cafe",
              address: "上海市普陀区光复西路丹巴路28弄6号楼819"
            }, {
              value: "猫山王（西郊百联店）",
              address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
            }, {
              value: "枪会山",
              address: "上海市普陀区棕榈路"
            }, {
              value: "纵食",
              address: "元丰天山花园(东门) 双流路267号"
            }, {
              value: "钱记",
              address: "上海市长宁区天山西路"
            }, {
              value: "壹杯加",
              address: "上海市长宁区通协路"
            }, {
              value: "唦哇嘀咖",
              address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
            }, {
              value: "爱茜茜里(西郊百联)",
              address: "长宁区仙霞西路88号1305室"
            }, {
              value: "爱茜茜里(近铁广场)",
              address: "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
            }, {
              value: "鲜果榨汁（金沙江路和美广店）",
              address: "普陀区金沙江路2239号金沙和美广场B1-10-6"
            }, {
              value: "开心丽果（缤谷店）",
              address: "上海市长宁区威宁路天山路341号"
            }, {
              value: "超级鸡车（丰庄路店）",
              address: "上海市嘉定区丰庄路240号"
            }, {
              value: "妙生活果园（北新泾店）",
              address: "长宁区新渔路144号"
            }, {
              value: "香宜度麻辣香锅",
              address: "长宁区淞虹路148号"
            }, {
              value: "凡仔汉堡（老真北路店）",
              address: "上海市普陀区老真北路160号"
            }, {
              value: "港式小铺",
              address: "上海市长宁区金钟路968号15楼15-105室"
            }, {
              value: "蜀香源麻辣香锅（剑河路店）",
              address: "剑河路443-1"
            }, {
              value: "北京饺子馆",
              address: "长宁区北新泾街道天山西路490-1号"
            }, {
              value: "饭典*新简餐（凌空SOHO店）",
              address: "上海市长宁区金钟路968号9号楼地下一层9-83室"
            }, {
              value: "焦耳·川式快餐（金钟路店）",
              address: "上海市金钟路633号地下一层甲部"
            }, {
              value: "动力鸡车",
              address: "长宁区仙霞西路299弄3号101B"
            }, {
              value: "浏阳蒸菜",
              address: "天山西路430号"
            }, {
              value: "四海游龙（天山西路店）",
              address: "上海市长宁区天山西路"
            }, {
              value: "樱花食堂（凌空店）",
              address: "上海市长宁区金钟路968号15楼15-105室"
            }, {
              value: "壹分米客家传统调制米粉(天山店)",
              address: "天山西路428号"
            }, {
              value: "福荣祥烧腊（平溪路店）",
              address: "上海市长宁区协和路福泉路255弄57-73号"
            }, {
              value: "速记黄焖鸡米饭",
              address: "上海市长宁区北新泾街道金钟路180号1层01号摊位"
            }, {
              value: "红辣椒麻辣烫",
              address: "上海市长宁区天山西路492号"
            }, {
              value: "(小杨生煎)西郊百联餐厅",
              address: "长宁区仙霞西路88号百联2楼"
            }, {
              value: "阳阳麻辣烫",
              address: "天山西路389号"
            }, {
              value: "南拳妈妈龙虾盖浇饭",
              address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
            }];
          };

          var timeout;

          var querySearchAsync = function querySearchAsync(queryString, cb) {
            var results = queryString ? restaurants.value.filter(createFilter(queryString)) : restaurants.value;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
              cb(results);
            }, 3000 * Math.random());
          };

          var createFilter = function createFilter(queryString) {
            return function (restaurant) {
              return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
            };
          };

          var handleSelect = function handleSelect(item) {
            console.log(item);
          };

          onMounted(function () {
            restaurants.value = loadAll();
          });
          return {
            restaurants: restaurants,
            state: ref(''),
            querySearchAsync: querySearchAsync,
            createFilter: createFilter,
            loadAll: loadAll,
            handleSelect: handleSelect
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo12": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        style: {
          "margin": "20px 0"
        }
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input, {
          type: "text",
          placeholder: "请输入内容",
          modelValue: _ctx.text,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.text = $event;
          }),
          maxlength: "10",
          "show-word-limit": ""
        }, null, 8, ["modelValue"]), _hoisted_1, _createVNode(_component_el_input, {
          type: "textarea",
          placeholder: "请输入内容",
          modelValue: _ctx.textarea,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.textarea = $event;
          }),
          maxlength: "30",
          "show-word-limit": ""
        }, null, 8, ["modelValue"])]);
      }

      var defineComponent = vue_esm_browser["q" /* defineComponent */],
          ref = vue_esm_browser["L" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            text: ref(''),
            textarea: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/input.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/input.md



inputvue_type_script_lang_ts.render = inputvue_type_template_id_1cce4a19_render

/* harmony default export */ var input = __webpack_exports__["default"] = (inputvue_type_script_lang_ts);

/***/ })

}]);