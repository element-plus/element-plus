(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[339],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/select.md?vue&type=template&id=463a51a6

const selectvue_type_template_id_463a51a6_hoisted_1 = {
  class: "content element-doc"
};

const selectvue_type_template_id_463a51a6_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Select 选择器 ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "当选项过多时，使用下拉菜单展示并选择内容。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "适用广泛的基础单选", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("的值为当前被选中的"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("的 value 属性值")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"请选择\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: '选项1',\n            label: '黄金糕',\n          },\n          {\n            value: '选项2',\n            label: '双皮奶',\n          },\n          {\n            value: '选项3',\n            label: '蚵仔煎',\n          },\n          {\n            value: '选项4',\n            label: '龙须面',\n          },\n          {\n            value: '选项5',\n            label: '北京烤鸭',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("有禁用选项 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("在"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("中，设定"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("值为 true，即可禁用该选项")])], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"请选择\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n      :disabled=\"item.disabled\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: '选项1',\n            label: '黄金糕',\n          },\n          {\n            value: '选项2',\n            label: '双皮奶',\n            disabled: true,\n          },\n          {\n            value: '选项3',\n            label: '蚵仔煎',\n          },\n          {\n            value: '选项4',\n            label: '龙须面',\n          },\n          {\n            value: '选项5',\n            label: '北京烤鸭',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("禁用状态 ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "选择器不可用状态", -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性，则整个选择器不可用")])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" disabled placeholder=\"请选择\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: '选项1',\n            label: '黄金糕',\n          },\n          {\n            value: '选项2',\n            label: '双皮奶',\n          },\n          {\n            value: '选项3',\n            label: '蚵仔煎',\n          },\n          {\n            value: '选项4',\n            label: '龙须面',\n          },\n          {\n            value: '选项5',\n            label: '北京烤鸭',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可清空单选 ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "包含清空按钮，可将选择器清空为初始状态", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性，则可将选择器清空。需要注意的是，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性仅适用于单选。")])], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" clearable placeholder=\"请选择\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: '选项1',\n            label: '黄金糕',\n          },\n          {\n            value: '选项2',\n            label: '双皮奶',\n          },\n          {\n            value: '选项3',\n            label: '蚵仔煎',\n          },\n          {\n            value: '选项4',\n            label: '龙须面',\n          },\n          {\n            value: '选项5',\n            label: '北京烤鸭',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础多选 ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "适用性较广的基础多选，用 Tag 展示已选项", -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "multiple"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性即可启用多选，此时"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "collapse-tags"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性将它们合并为一段文字。")])], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value1\" multiple placeholder=\"请选择\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n\n  <el-select\n    v-model=\"value2\"\n    multiple\n    collapse-tags\n    style=\"margin-left: 20px;\"\n    placeholder=\"请选择\"\n  >\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: '选项1',\n            label: '黄金糕',\n          },\n          {\n            value: '选项2',\n            label: '双皮奶',\n          },\n          {\n            value: '选项3',\n            label: '蚵仔煎',\n          },\n          {\n            value: '选项4',\n            label: '龙须面',\n          },\n          {\n            value: '选项5',\n            label: '北京烤鸭',\n          },\n        ],\n        value1: [],\n        value2: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义模板 ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可以自定义备选项", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("将自定义的 HTML 模板插入"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("的 slot 中即可。")])], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"请选择\">\n    <el-option\n      v-for=\"item in cities\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n      <span style=\"float: left\">{{ item.label }}</span>\n      <span\n        style=\"float: right; color: var(--el-text-color-secondary); font-size: 13px\"\n        >{{ item.value }}</span\n      >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        cities: [\n          {\n            value: 'Beijing',\n            label: '北京',\n          },\n          {\n            value: 'Shanghai',\n            label: '上海',\n          },\n          {\n            value: 'Nanjing',\n            label: '南京',\n          },\n          {\n            value: 'Chengdu',\n            label: '成都',\n          },\n          {\n            value: 'Shenzhen',\n            label: '深圳',\n          },\n          {\n            value: 'Guangzhou',\n            label: '广州',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("分组 ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "备选项进行分组展示", -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("使用"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-option-group"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("对备选项进行分组，它的"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性为分组名")])], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"请选择\">\n    <el-option-group\n      v-for=\"group in options\"\n      :key=\"group.label\"\n      :label=\"group.label\"\n    >\n      <el-option\n        v-for=\"item in group.options\"\n        :key=\"item.value\"\n        :label=\"item.label\"\n        :value=\"item.value\"\n      >\n      </el-option>\n    </el-option-group>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            label: '热门城市',\n            options: [\n              {\n                value: 'Shanghai',\n                label: '上海',\n              },\n              {\n                value: 'Beijing',\n                label: '北京',\n              },\n            ],\n          },\n          {\n            label: '城市名',\n            options: [\n              {\n                value: 'Chengdu',\n                label: '成都',\n              },\n              {\n                value: 'Shenzhen',\n                label: '深圳',\n              },\n              {\n                value: 'Guangzhou',\n                label: '广州',\n              },\n              {\n                value: 'Dalian',\n                label: '大连',\n              },\n            ],\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可搜索 ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可以利用搜索功能快速查找选项", -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("添加"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性即可启用搜索功能。默认情况下，Select 会找出所有"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("来实现。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("为一个"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Function"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，它会在输入值发生变化时调用，参数为当前输入值。")])], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" filterable placeholder=\"请选择\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: '选项1',\n            label: '黄金糕',\n          },\n          {\n            value: '选项2',\n            label: '双皮奶',\n          },\n          {\n            value: '选项3',\n            label: '蚵仔煎',\n          },\n          {\n            value: '选项4',\n            label: '龙须面',\n          },\n          {\n            value: '选项5',\n            label: '北京烤鸭',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("远程搜索 ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "从服务器搜索数据，输入关键字进行查找", -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("为了启用远程搜索，需要将"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "remote"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，同时传入一个"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "remote-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "remote-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("为一个"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Function"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("是通过"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-for"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("指令渲染出来的，此时需要为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("添加"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性，且其值需具有唯一性，比如此例中的"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "item.value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。")])], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select\n    v-model=\"value\"\n    multiple\n    filterable\n    remote\n    reserve-keyword\n    placeholder=\"请输入关键词\"\n    :remote-method=\"remoteMethod\"\n    :loading=\"loading\"\n  >\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [],\n        value: [],\n        list: [],\n        loading: false,\n        states: [\n          'Alabama',\n          'Alaska',\n          'Arizona',\n          'Arkansas',\n          'California',\n          'Colorado',\n          'Connecticut',\n          'Delaware',\n          'Florida',\n          'Georgia',\n          'Hawaii',\n          'Idaho',\n          'Illinois',\n          'Indiana',\n          'Iowa',\n          'Kansas',\n          'Kentucky',\n          'Louisiana',\n          'Maine',\n          'Maryland',\n          'Massachusetts',\n          'Michigan',\n          'Minnesota',\n          'Mississippi',\n          'Missouri',\n          'Montana',\n          'Nebraska',\n          'Nevada',\n          'New Hampshire',\n          'New Jersey',\n          'New Mexico',\n          'New York',\n          'North Carolina',\n          'North Dakota',\n          'Ohio',\n          'Oklahoma',\n          'Oregon',\n          'Pennsylvania',\n          'Rhode Island',\n          'South Carolina',\n          'South Dakota',\n          'Tennessee',\n          'Texas',\n          'Utah',\n          'Vermont',\n          'Virginia',\n          'Washington',\n          'West Virginia',\n          'Wisconsin',\n          'Wyoming',\n        ],\n      }\n    },\n    mounted() {\n      this.list = this.states.map((item) => {\n        return { value: `value:${item}`, label: `label:${item}` }\n      })\n    },\n    methods: {\n      remoteMethod(query) {\n        if (query !== '') {\n          this.loading = true\n          setTimeout(() => {\n            this.loading = false\n            this.options = this.list.filter((item) => {\n              return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1\n            })\n          }, 200)\n        } else {\n          this.options = []\n        }\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("创建条目 ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可以创建并选中选项中不存在的条目", -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("使用"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "allow-create"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性即可通过在输入框中输入文字来创建新的条目。注意此时"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("必须为真。本例还使用了"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "default-first-option"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性，在该属性打开的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。")])], -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select\n    v-model=\"value\"\n    multiple\n    filterable\n    allow-create\n    default-first-option\n    placeholder=\"请选择文章标签\"\n  >\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'HTML',\n            label: 'HTML',\n          },\n          {\n            value: 'CSS',\n            label: 'CSS',\n          },\n          {\n            value: 'JavaScript',\n            label: 'JavaScript',\n          },\n        ],\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("如果 Select 的绑定值为对象类型，请务必指定 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value-key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 作为它的唯一性标识。")])], -1);

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Select Attributes ");

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>multiple</td><td>是否多选</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>value-key</td><td>作为 value 唯一标识的键名，绑定值为对象类型时必填</td><td>string</td><td>—</td><td>value</td></tr><tr><td>size</td><td>输入框尺寸</td><td>string</td><td>medium/small/mini</td><td>—</td></tr><tr><td>clearable</td><td>是否可以清空选项</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-tags</td><td>多选时是否将选中值按文字的形式展示</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>multiple-limit</td><td>多选时用户最多可以选择的项目数，为 0 则不限制</td><td>number</td><td>—</td><td>0</td></tr><tr><td>name</td><td>select input 的 name 属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>autocomplete</td><td>select input 的 autocomplete 属性</td><td>string</td><td>—</td><td>off</td></tr><tr><td>placeholder</td><td>占位符</td><td>string</td><td>—</td><td>请选择</td></tr><tr><td>filterable</td><td>是否可搜索</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-create</td><td>是否允许用户创建新条目，需配合 <code>filterable</code> 使用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filter-method</td><td>自定义搜索方法</td><td>function</td><td>—</td><td>—</td></tr><tr><td>remote</td><td>是否为远程搜索</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>remote-method</td><td>远程搜索方法</td><td>function</td><td>—</td><td>—</td></tr><tr><td>loading</td><td>是否正在从远程获取数据</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>loading-text</td><td>远程加载时显示的文字</td><td>string</td><td>—</td><td>加载中</td></tr><tr><td>no-match-text</td><td>搜索条件无匹配时显示的文字，也可以使用<code>#empty</code>设置</td><td>string</td><td>—</td><td>无匹配数据</td></tr><tr><td>no-data-text</td><td>选项为空时显示的文字，也可以使用<code>#empty</code>设置</td><td>string</td><td>—</td><td>无数据</td></tr><tr><td>popper-class</td><td>Select 下拉框的类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>reserve-keyword</td><td>多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-first-option</td><td>在输入框按下回车，选择第一个匹配项。需配合 <code>filterable</code> 或 <code>remote</code> 使用</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>automatic-dropdown</td><td>对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>clear-icon</td><td>自定义清空图标的类名</td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr></tbody></table>", 1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Select Events ");

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>选中值发生变化时触发</td><td>目前的选中值</td></tr><tr><td>visible-change</td><td>下拉框出现/隐藏时触发</td><td>出现则为 true，隐藏则为 false</td></tr><tr><td>remove-tag</td><td>多选模式下移除 tag 时触发</td><td>移除的 tag 值</td></tr><tr><td>clear</td><td>可清空的单选模式下用户点击清空按钮时触发</td><td>—</td></tr><tr><td>blur</td><td>当 input 失去焦点时触发</td><td>(event: Event)</td></tr><tr><td>focus</td><td>当 input 获得焦点时触发</td><td>(event: Event)</td></tr></tbody></table>", 1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Select Slots ");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>Option 组件列表</td></tr><tr><td>prefix</td><td>Select 组件头部内容</td></tr><tr><td>empty</td><td>无选项时的列表</td></tr></tbody></table>", 1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Option Group Attributes ");

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>分组的组名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否将该分组下所有选项置为禁用</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Option Attributes ");

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>label</td><td>选项的标签，若不设置则默认与 <code>value</code> 相同</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用该选项</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Methods ");

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 input 获取焦点</td><td>-</td></tr><tr><td>blur</td><td>使 input 失去焦点，并隐藏下拉框</td><td>-</td></tr></tbody></table>", 1);

function selectvue_type_template_id_463a51a6_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  const _component_element_demo7 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo7");

  const _component_element_demo8 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo8");

  const _component_element_demo9 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo9");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", selectvue_type_template_id_463a51a6_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "select-xuan-ze-qi",
    content: "Select 选择器",
    href: "#select-xuan-ze-qi",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [selectvue_type_template_id_463a51a6_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#select-xuan-ze-qi"
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
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "you-jin-yong-xuan-xiang",
    content: "有禁用选项",
    href: "#you-jin-yong-xuan-xiang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#you-jin-yong-xuan-xiang"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "jin-yong-zhuang-tai",
    content: "禁用状态",
    href: "#jin-yong-zhuang-tai",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#jin-yong-zhuang-tai"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ke-qing-kong-dan-xuan",
    content: "可清空单选",
    href: "#ke-qing-kong-dan-xuan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ke-qing-kong-dan-xuan"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-duo-xuan",
    content: "基础多选",
    href: "#ji-chu-duo-xuan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-duo-xuan"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zi-ding-yi-mo-ban",
    content: "自定义模板",
    href: "#zi-ding-yi-mo-ban",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zi-ding-yi-mo-ban"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "fen-zu",
    content: "分组",
    href: "#fen-zu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fen-zu"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ke-sou-suo",
    content: "可搜索",
    href: "#ke-sou-suo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ke-sou-suo"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo7)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "yuan-cheng-sou-suo",
    content: "远程搜索",
    href: "#yuan-cheng-sou-suo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#yuan-cheng-sou-suo"
    })]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo8)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chuang-jian-tiao-mu",
    content: "创建条目",
    href: "#chuang-jian-tiao-mu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chuang-jian-tiao-mu"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo9)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_42]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41]),
    _: 1
  }), _hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "select-attributes",
    content: "Select Attributes",
    href: "#select-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#select-attributes"
    })]),
    _: 1
  }), _hoisted_45, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "select-events",
    content: "Select Events",
    href: "#select-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_46, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#select-events"
    })]),
    _: 1
  }), _hoisted_47, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "select-slots",
    content: "Select Slots",
    href: "#select-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#select-slots"
    })]),
    _: 1
  }), _hoisted_49, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "option-group-attributes",
    content: "Option Group Attributes",
    href: "#option-group-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_50, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#option-group-attributes"
    })]),
    _: 1
  }), _hoisted_51, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "option-attributes",
    content: "Option Attributes",
    href: "#option-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#option-attributes"
    })]),
    _: 1
  }), _hoisted_53, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "methods",
    content: "Methods",
    href: "#methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_54, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methods"
    })]),
    _: 1
  }), _hoisted_55, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/select.md?vue&type=template&id=463a51a6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/select.md?vue&type=script&lang=ts

/* harmony default export */ var selectvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          placeholder: "请选择"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value: ''
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          placeholder: "请选择"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value,
              disabled: item.disabled
            }, null, 8, ["label", "value", "disabled"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶',
              disabled: true
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value: ''
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
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          disabled: "",
          placeholder: "请选择"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value: ''
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          clearable: "",
          placeholder: "请选择"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value: ''
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value1 = $event),
          multiple: "",
          placeholder: "请选择"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_select, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.value2 = $event),
          multiple: "",
          "collapse-tags": "",
          style: {
            "margin-left": "20px"
          },
          placeholder: "请选择"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value1: [],
            value2: []
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
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createBlock: _createBlock,
        createVNode: _createVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        style: {
          "float": "left"
        }
      };
      const _hoisted_2 = {
        style: {
          "float": "right",
          "color": "var(--el-text-color-secondary)",
          "font-size": "13px"
        }
      };

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          placeholder: "请选择"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.cities, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, {
              default: _withCtx(() => [_createElementVNode("span", _hoisted_1, _toDisplayString(item.label), 1), _createElementVNode("span", _hoisted_2, _toDisplayString(item.value), 1)]),
              _: 2
            }, 1032, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            cities: [{
              value: 'Beijing',
              label: '北京'
            }, {
              value: 'Shanghai',
              label: '上海'
            }, {
              value: 'Nanjing',
              label: '南京'
            }, {
              value: 'Chengdu',
              label: '成都'
            }, {
              value: 'Shenzhen',
              label: '深圳'
            }, {
              value: 'Guangzhou',
              label: '广州'
            }],
            value: ''
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_option_group = _resolveComponent("el-option-group");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          placeholder: "请选择"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, group => {
            return _openBlock(), _createBlock(_component_el_option_group, {
              key: group.label,
              label: group.label
            }, {
              default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(group.options, item => {
                return _openBlock(), _createBlock(_component_el_option, {
                  key: item.value,
                  label: item.label,
                  value: item.value
                }, null, 8, ["label", "value"]);
              }), 128))]),
              _: 2
            }, 1032, ["label"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            options: [{
              label: '热门城市',
              options: [{
                value: 'Shanghai',
                label: '上海'
              }, {
                value: 'Beijing',
                label: '北京'
              }]
            }, {
              label: '城市名',
              options: [{
                value: 'Chengdu',
                label: '成都'
              }, {
                value: 'Shenzhen',
                label: '深圳'
              }, {
                value: 'Guangzhou',
                label: '广州'
              }, {
                value: 'Dalian',
                label: '大连'
              }]
            }],
            value: ''
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo7": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          filterable: "",
          placeholder: "请选择"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value: ''
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo8": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          multiple: "",
          filterable: "",
          remote: "",
          "reserve-keyword": "",
          placeholder: "请输入关键词",
          "remote-method": _ctx.remoteMethod,
          loading: _ctx.loading
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue", "remote-method", "loading"])]);
      }

      const democomponentExport = {
        data() {
          return {
            options: [],
            value: [],
            list: [],
            loading: false,
            states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
          };
        },

        mounted() {
          this.list = this.states.map(item => {
            return {
              value: `value:${item}`,
              label: `label:${item}`
            };
          });
        },

        methods: {
          remoteMethod(query) {
            if (query !== '') {
              this.loading = true;
              setTimeout(() => {
                this.loading = false;
                this.options = this.list.filter(item => {
                  return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
                });
              }, 200);
            } else {
              this.options = [];
            }
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo9": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          multiple: "",
          filterable: "",
          "allow-create": "",
          "default-first-option": "",
          placeholder: "请选择文章标签"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            options: [{
              value: 'HTML',
              label: 'HTML'
            }, {
              value: 'CSS',
              label: 'CSS'
            }, {
              value: 'JavaScript',
              label: 'JavaScript'
            }],
            value: []
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
// CONCATENATED MODULE: ./website/docs/zh-CN/select.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/select.md



selectvue_type_script_lang_ts.render = selectvue_type_template_id_463a51a6_render

/* harmony default export */ var zh_CN_select = __webpack_exports__["default"] = (selectvue_type_script_lang_ts);

/***/ })

}]);