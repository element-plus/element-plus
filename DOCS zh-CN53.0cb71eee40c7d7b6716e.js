(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[338],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/select-v2.md?vue&type=template&id=b38ee1a0

const select_v2vue_type_template_id_b38ee1a0_hoisted_1 = {
  class: "content element-doc"
};

const select_v2vue_type_template_id_b38ee1a0_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Select V2 虚拟列表选择器 ");

const _hoisted_3 = {
  class: "tip"
};

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("这个组件目前在测试当中，如果在使用中发现任何漏洞和问题，请在 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Github");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 中提交 issue 以便我们进行处理");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("背景 ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "在数据量爆发的今天，很多时候一个选择器可能从服务器加载非常多的数据，然而浏览器在一次性把这些数据渲染到页面上的时候会出现卡顿甚至是崩溃的情况，所以虚拟化技术应运而生，为了更好的用户体验和更好的使用体验，我们决定添加这个组件。", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "适用广泛的基础选择器", -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 240px;\"\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `选项${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("多选 ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "最基础的多选选择器", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 240px;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `选项${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("隐藏多余标签的多选 ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 240px;\"\n    multiple\n    collapse-tags\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `选项${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可筛选的多选 ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "当选项过多时，可通过匹配筛选", -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 240px;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `选项${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("禁用状态 ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "您可以选择禁用 Select 或者 Select 的 Option", -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 240px; margin-right: 16px; vertical-align: middle;\"\n    multiple\n  />\n  <el-select-v2\n    disabled\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 240px; vertical-align: middle;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `选项${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n          disabled: idx % 10 === 0,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("选项分组 ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "我们可以为选项分组，只需要满足例子里的这个 pattern", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 240px;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 10 }).map((_, idx) => {\n          const label = idx + 1\n          return {\n            value: `组 ${label}`,\n            label: `组 ${label}`,\n            options: Array.from({ length: 10 }).map((_, idx) => ({\n              value: `选项${idx + 1 + 10 * label}`,\n              label: `${initials[idx % 10]}${idx + 1 + 10 * label}`,\n            })),\n          }\n        }),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义渲染模板 ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "我们也可以通过自己自定义模板来渲染自己想要的内容。", -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 240px;\"\n    multiple\n  >\n    <template #default=\"{item}\">\n      <span style=\"margin-right: 8px;\">{{ item.label }}</span>\n      <span style=\"color: var(--el-text-color-secondary); font-size: 13px\">\n        {{ item.value }}\n      </span>\n    </template>\n  </el-select-v2>\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `选项${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("一键清除 ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "一键删除所有的选项（也可适用于单选）", -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value1\"\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 240px; margin-right: 16px; vertical-align: middle;\"\n    multiple\n    clearable\n  />\n  <el-select-v2\n    v-model=\"value2\"\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 240px; vertical-align: middle;\"\n    clearable\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `选项${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value1: [],\n        value2: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("创建临时选项 ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可以创建并选中选项中不存在的条目", -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("使用"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "allow-create"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性即可通过在输入框中输入文字来创建新的条目。注意此时"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("必须为真。")])], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value1\"\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 240px; margin-right: 16px; vertical-align: middle;\"\n    allow-create\n    filterable\n    multiple\n    clearable\n  />\n  <el-select-v2\n    v-model=\"value2\"\n    :options=\"options\"\n    placeholder=\"请选择\"\n    style=\"width: 240px; vertical-align: middle;\"\n    allow-create\n    filterable\n    clearable\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `选项${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value1: [],\n        value2: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("远程搜索 ");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "从服务器搜索数据，输入关键字进行查找", -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("为了启用远程搜索，需要将"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "remote"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，同时传入一个"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "remote-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "remote-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("为一个"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Function"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，它会在输入值发生变化时调用，参数为当前输入值。")])], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    style=\"width: 240px\"\n    multiple\n    size=\"medium\"\n    filterable\n    remote\n    :remote-method=\"remoteMethod\"\n    clearable\n    :options=\"options\"\n    :loading=\"loading\"\n    placeholder=\"请输入关键词\"\n  />\n</template>\n\n<script>\n  export default {\n    created() {\n      this.list = this.states.map((item) => {\n        return { value: `value:${item}`, label: `label:${item}` }\n      })\n    },\n    methods: {\n      remoteMethod(query) {\n        if (query !== '') {\n          this.loading = true\n          setTimeout(() => {\n            this.loading = false\n            this.options = this.list.filter((item) => {\n              return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1\n            })\n          }, 200)\n        } else {\n          this.options = []\n        }\n      },\n    },\n    data() {\n      return {\n        list: [],\n        loading: false,\n        states: [\n          'Alabama',\n          'Alaska',\n          'Arizona',\n          'Arkansas',\n          'California',\n          'Colorado',\n          'Connecticut',\n          'Delaware',\n          'Florida',\n          'Georgia',\n          'Hawaii',\n          'Idaho',\n          'Illinois',\n          'Indiana',\n          'Iowa',\n          'Kansas',\n          'Kentucky',\n          'Louisiana',\n          'Maine',\n          'Maryland',\n          'Massachusetts',\n          'Michigan',\n          'Minnesota',\n          'Mississippi',\n          'Missouri',\n          'Montana',\n          'Nebraska',\n          'Nevada',\n          'New Hampshire',\n          'New Jersey',\n          'New Mexico',\n          'New York',\n          'North Carolina',\n          'North Dakota',\n          'Ohio',\n          'Oklahoma',\n          'Oregon',\n          'Pennsylvania',\n          'Rhode Island',\n          'South Carolina',\n          'South Dakota',\n          'Tennessee',\n          'Texas',\n          'Utah',\n          'Vermont',\n          'Virginia',\n          'Washington',\n          'West Virginia',\n          'Wisconsin',\n          'Wyoming',\n        ],\n        options: [],\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("SelectV2 Attributes ");

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "参数"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "类型"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "可选值"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "默认值")])], -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "model-value / v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "绑定值"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string / number / boolean / object"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "multiple"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "是否多选"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "是否禁用"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "value-key"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "作为 value 唯一标识的键名，绑定值为对象类型时必填"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "value")], -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "输入框尺寸"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "medium/small/mini"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "是否可以清空选项"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "collapse-tags"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "多选时是否将选中值按文字的形式展示"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "multiple-limit"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "多选时用户最多可以选择的项目数，为 0 则不限制"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0")], -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "select input 的 name 属性"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "autocomplete"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "select input 的 autocomplete 属性"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "off")], -1);

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "placeholder"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "占位符"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "请选择")], -1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "是否可搜索"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "自定义搜索方法"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "remote"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "是否为远程搜索"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "remote-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "远程搜索方法"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "allow-create"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("是否允许用户创建新条目，需配合 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 使用")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "no-data-text"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("选项为空时显示的文字，也可以使用"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "#empty"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "无数据")], -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "popper-class"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Select 下拉框的类名"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "popper-append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "popper-options", -1);

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("用户定制化 popper 的行为, 更多请查看文档");

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("popper.js");

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "object", -1);

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-", -1);

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-", -1);

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "automatic-dropdown"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "clear-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "自定义清空图标的类名"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "el-icon-circle-close")], -1);

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "height"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "面板的高度，每项的高度为 34px"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "170")], -1);

const _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("span", {
  style: {
    "display": "none"
  }
}, null, -1);

const _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("SelectV2 Events ");

const _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>选中值发生变化时触发</td><td>目前的选中值</td></tr><tr><td>visible-change</td><td>下拉框出现/隐藏时触发</td><td>出现则为 true，隐藏则为 false</td></tr><tr><td>remove-tag</td><td>多选模式下移除 tag 时触发</td><td>移除的 tag 值</td></tr><tr><td>clear</td><td>可清空的单选模式下用户点击清空按钮时触发</td><td>—</td></tr><tr><td>blur</td><td>当 input 失去焦点时触发</td><td>(event: Event)</td></tr><tr><td>focus</td><td>当 input 获得焦点时触发</td><td>(event: Event)</td></tr></tbody></table>", 1);

const _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("SelectV2 Slots ");

const _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Option 模板")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "empty"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "无选项时的列表")])])], -1);

function select_v2vue_type_template_id_b38ee1a0_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", select_v2vue_type_template_id_b38ee1a0_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "select-vtwo-xu-ni-lie-biao-xuan-ze-qi",
    content: "Select V2 虚拟列表选择器",
    href: "#select-vtwo-xu-ni-lie-biao-xuan-ze-qi",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [select_v2vue_type_template_id_b38ee1a0_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#select-vtwo-xu-ni-lie-biao-xuan-ze-qi"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_3, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus/issues"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5]),
    _: 1
  }), _hoisted_6])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bei-jing",
    content: "背景",
    href: "#bei-jing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bei-jing"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "duo-xuan",
    content: "多选",
    href: "#duo-xuan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#duo-xuan"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "yin-cang-duo-yu-biao-qian-de-duo-xuan",
    content: "隐藏多余标签的多选",
    href: "#yin-cang-duo-yu-biao-qian-de-duo-xuan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#yin-cang-duo-yu-biao-qian-de-duo-xuan"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ke-shai-xuan-de-duo-xuan",
    content: "可筛选的多选",
    href: "#ke-shai-xuan-de-duo-xuan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ke-shai-xuan-de-duo-xuan"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "jin-yong-zhuang-tai",
    content: "禁用状态",
    href: "#jin-yong-zhuang-tai",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#jin-yong-zhuang-tai"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "xuan-xiang-fen-zu",
    content: "选项分组",
    href: "#xuan-xiang-fen-zu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xuan-xiang-fen-zu"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zi-ding-yi-xuan-ran-mo-ban",
    content: "自定义渲染模板",
    href: "#zi-ding-yi-xuan-ran-mo-ban",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zi-ding-yi-xuan-ran-mo-ban"
    })]),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "yi-jian-qing-chu",
    content: "一键清除",
    href: "#yi-jian-qing-chu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#yi-jian-qing-chu"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo7)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chuang-jian-lin-shi-xuan-xiang",
    content: "创建临时选项",
    href: "#chuang-jian-lin-shi-xuan-xiang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chuang-jian-lin-shi-xuan-xiang"
    })]),
    _: 1
  }), _hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo8)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "yuan-cheng-sou-suo",
    content: "远程搜索",
    href: "#yuan-cheng-sou-suo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#yuan-cheng-sou-suo"
    })]),
    _: 1
  }), _hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo9)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "selectvtwo-attributes",
    content: "SelectV2 Attributes",
    href: "#selectvtwo-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#selectvtwo-attributes"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("table", null, [_hoisted_41, Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [_hoisted_42, _hoisted_43, _hoisted_44, _hoisted_45, _hoisted_46, _hoisted_47, _hoisted_48, _hoisted_49, _hoisted_50, _hoisted_51, _hoisted_52, _hoisted_53, _hoisted_54, _hoisted_55, _hoisted_56, _hoisted_57, _hoisted_58, _hoisted_59, _hoisted_60, Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_61, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_62, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://popper.js.org/documentation.html"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_63]),
    _: 1
  })]), _hoisted_64, _hoisted_65, _hoisted_66]), _hoisted_67, _hoisted_68, _hoisted_69])]), _hoisted_70, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "selectvtwo-events",
    content: "SelectV2 Events",
    href: "#selectvtwo-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_71, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#selectvtwo-events"
    })]),
    _: 1
  }), _hoisted_72, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "selectvtwo-slots",
    content: "SelectV2 Slots",
    href: "#selectvtwo-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_73, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#selectvtwo-slots"
    })]),
    _: 1
  }), _hoisted_74, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/select-v2.md?vue&type=template&id=b38ee1a0

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/select-v2.md?vue&type=script&lang=ts

/* harmony default export */ var select_v2vue_type_script_lang_ts = ({
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
        const _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "240px"
          }
        }, null, 8, ["modelValue", "options"])]);
      }

      const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      const democomponentExport = {
        data() {
          return {
            options: Array.from({
              length: 1000
            }).map((_, idx) => ({
              value: `选项${idx + 1}`,
              label: `${initials[idx % 10]}${idx}`
            })),
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "240px"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      const democomponentExport = {
        data() {
          return {
            options: Array.from({
              length: 1000
            }).map((_, idx) => ({
              value: `选项${idx + 1}`,
              label: `${initials[idx % 10]}${idx}`
            })),
            value: []
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
        const _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "240px"
          },
          multiple: "",
          "collapse-tags": ""
        }, null, 8, ["modelValue", "options"])]);
      }

      const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      const democomponentExport = {
        data() {
          return {
            options: Array.from({
              length: 1000
            }).map((_, idx) => ({
              value: `选项${idx + 1}`,
              label: `${initials[idx % 10]}${idx}`
            })),
            value: []
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
        const _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          filterable: "",
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "240px"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      const democomponentExport = {
        data() {
          return {
            options: Array.from({
              length: 1000
            }).map((_, idx) => ({
              value: `选项${idx + 1}`,
              label: `${initials[idx % 10]}${idx}`
            })),
            value: []
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
        const _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          filterable: "",
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "240px",
            "margin-right": "16px",
            "vertical-align": "middle"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"]), _createVNode(_component_el_select_v2, {
          disabled: "",
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.value = $event),
          filterable: "",
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "240px",
            "vertical-align": "middle"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      const democomponentExport = {
        data() {
          return {
            options: Array.from({
              length: 1000
            }).map((_, idx) => ({
              value: `选项${idx + 1}`,
              label: `${initials[idx % 10]}${idx}`,
              disabled: idx % 10 === 0
            })),
            value: []
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
        const _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          filterable: "",
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "240px"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      const democomponentExport = {
        data() {
          return {
            options: Array.from({
              length: 10
            }).map((_, idx) => {
              const label = idx + 1;
              return {
                value: `组 ${label}`,
                label: `组 ${label}`,
                options: Array.from({
                  length: 10
                }).map((_, idx) => ({
                  value: `选项${idx + 1 + 10 * label}`,
                  label: `${initials[idx % 10]}${idx + 1 + 10 * label}`
                }))
              };
            }),
            value: []
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
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        style: {
          "margin-right": "8px"
        }
      };
      const _hoisted_2 = {
        style: {
          "color": "var(--el-text-color-secondary)",
          "font-size": "13px"
        }
      };

      function render(_ctx, _cache) {
        const _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          filterable: "",
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "240px"
          },
          multiple: ""
        }, {
          default: _withCtx(({
            item
          }) => [_createElementVNode("span", _hoisted_1, _toDisplayString(item.label), 1), _createElementVNode("span", _hoisted_2, _toDisplayString(item.value), 1)]),
          _: 1
        }, 8, ["modelValue", "options"])]);
      }

      const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      const democomponentExport = {
        data() {
          return {
            options: Array.from({
              length: 1000
            }).map((_, idx) => ({
              value: `选项${idx + 1}`,
              label: `${initials[idx % 10]}${idx}`
            })),
            value: []
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value1 = $event),
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "240px",
            "margin-right": "16px",
            "vertical-align": "middle"
          },
          multiple: "",
          clearable: ""
        }, null, 8, ["modelValue", "options"]), _createVNode(_component_el_select_v2, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.value2 = $event),
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "240px",
            "vertical-align": "middle"
          },
          clearable: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      const democomponentExport = {
        data() {
          return {
            options: Array.from({
              length: 1000
            }).map((_, idx) => ({
              value: `选项${idx + 1}`,
              label: `${initials[idx % 10]}${idx}`
            })),
            value1: [],
            value2: ''
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value1 = $event),
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "240px",
            "margin-right": "16px",
            "vertical-align": "middle"
          },
          "allow-create": "",
          filterable: "",
          multiple: "",
          clearable: ""
        }, null, 8, ["modelValue", "options"]), _createVNode(_component_el_select_v2, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.value2 = $event),
          options: _ctx.options,
          placeholder: "请选择",
          style: {
            "width": "240px",
            "vertical-align": "middle"
          },
          "allow-create": "",
          filterable: "",
          clearable: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      const democomponentExport = {
        data() {
          return {
            options: Array.from({
              length: 1000
            }).map((_, idx) => ({
              value: `选项${idx + 1}`,
              label: `${initials[idx % 10]}${idx}`
            })),
            value1: [],
            value2: ''
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo9": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          style: {
            "width": "240px"
          },
          multiple: "",
          size: "medium",
          filterable: "",
          remote: "",
          "remote-method": _ctx.remoteMethod,
          clearable: "",
          options: _ctx.options,
          loading: _ctx.loading,
          placeholder: "请输入关键词"
        }, null, 8, ["modelValue", "remote-method", "options", "loading"])]);
      }

      const democomponentExport = {
        created() {
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

        },

        data() {
          return {
            list: [],
            loading: false,
            states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
            options: [],
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
// CONCATENATED MODULE: ./website/docs/zh-CN/select-v2.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/select-v2.md



select_v2vue_type_script_lang_ts.render = select_v2vue_type_template_id_b38ee1a0_render

/* harmony default export */ var select_v2 = __webpack_exports__["default"] = (select_v2vue_type_script_lang_ts);

/***/ })

}]);