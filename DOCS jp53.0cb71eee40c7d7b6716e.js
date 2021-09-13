(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[266],{

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/select-v2.md?vue&type=template&id=111b3d2c

const select_v2vue_type_template_id_111b3d2c_hoisted_1 = {
  class: "content element-doc"
};

const select_v2vue_type_template_id_111b3d2c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Select V2 virtualized selector ");

const _hoisted_3 = {
  class: "tip"
};

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("This component is still under testing, if you found any bug or issue please report it at ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Github");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" for us to fix.");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Background ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Now days, with tons of data came from the backend server through the internet, one single selector could have ended up loading tens of thousands of data from the backend, but rendering that much data into the DOM could be a burden to the browser which could crash the browser. For better user experience and developer experience, we decided to add this component.", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic usage ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "The simplest selector", -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 240px;\"\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option ${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Multi select ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "The basic multi-select selector with tags", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 240px;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option ${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Hide extra tags when the selected items are too many. ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 240px;\"\n    multiple\n    collapse-tags\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option ${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Filterable multi-select ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("When the options are overwhelmingly too many, you can use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" option to enable filter feature for finding out the desired option")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 240px;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Disabled selector and select options ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "You can choose to disable selector itself or the option.", -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 240px; margin-right: 16px; vertical-align: middle;\"\n    multiple\n  />\n  <el-select-v2\n    disabled\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 240px; vertical-align: middle;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n          disabled: idx % 10 === 0,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Option Grouping ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "We can group option as we wanted, as long as the data satisfies the pattern.", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 240px;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 10 }).map((_, idx) => {\n          const label = idx + 1\n          return {\n            value: `Group ${label}`,\n            label: `Group ${label}`,\n            options: Array.from({ length: 10 }).map((_, idx) => ({\n              value: `Option ${idx + 1 + 10 * label}`,\n              label: `${initials[idx % 10]}${idx + 1 + 10 * label}`,\n            })),\n          }\n        }),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Customized option renderer ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "We can define our own template for rendering the option in the popup.", -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 240px;\"\n    multiple\n  >\n    <template #default=\"{item}\">\n      <span style=\"margin-right: 8px;\">{{ item.label }}</span>\n      <span style=\"color: var(--el-text-color-secondary); font-size: 13px\">\n        {{ item.value }}\n      </span>\n    </template>\n  </el-select-v2>\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Clearable selector ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "We can clear all the selected options at once, also applicable for single select.", -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value1\"\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 240px; margin-right: 16px; vertical-align: middle;\"\n    multiple\n    clearable\n  />\n  <el-select-v2\n    v-model=\"value2\"\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 240px; vertical-align: middle;\"\n    clearable\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option ${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value1: [],\n        value2: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("新規アイテムの作成 ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "セレクトオプションに含まれないアイテムを新規に作成してセレクトする", -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "allow-create"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性を使うことで、ユーザは入力ボックスに入力することで新しいアイテムを作成することができます。なお、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "allow-create"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" が動作するためには、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" が "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" でなければならない。")])], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value1\"\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 240px; margin-right: 16px; vertical-align: middle;\"\n    allow-create\n    filterable\n    multiple\n    clearable\n  />\n  <el-select-v2\n    v-model=\"value2\"\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 240px; vertical-align: middle;\"\n    allow-create\n    filterable\n    clearable\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option ${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value1: [],\n        value2: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("リモート検索 ");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "サーバーからキーワードや検索データを入力します。", -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("リモート検索を有効にするには "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "remote"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を設定し、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "remote-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を渡す必要がある。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "remote-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("は入力値が変化したときに呼び出される "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Function"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" であり、そのパラメータは現在の入力値である。")])], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    style=\"width: 240px\"\n    multiple\n    size=\"medium\"\n    filterable\n    remote\n    :remote-method=\"remoteMethod\"\n    clearable\n    :options=\"options\"\n    :loading=\"loading\"\n    placeholder=\"Please enter a keyword\"\n  />\n</template>\n\n<script>\n  export default {\n    created() {\n      this.list = this.states.map((item) => {\n        return { value: `value:${item}`, label: `label:${item}` }\n      })\n    },\n    methods: {\n      remoteMethod(query) {\n        if (query !== '') {\n          this.loading = true\n          setTimeout(() => {\n            this.loading = false\n            this.options = this.list.filter((item) => {\n              return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1\n            })\n          }, 200)\n        } else {\n          this.options = []\n        }\n      },\n    },\n    data() {\n      return {\n        list: [],\n        loading: false,\n        states: [\n          'Alabama',\n          'Alaska',\n          'Arizona',\n          'Arkansas',\n          'California',\n          'Colorado',\n          'Connecticut',\n          'Delaware',\n          'Florida',\n          'Georgia',\n          'Hawaii',\n          'Idaho',\n          'Illinois',\n          'Indiana',\n          'Iowa',\n          'Kansas',\n          'Kentucky',\n          'Louisiana',\n          'Maine',\n          'Maryland',\n          'Massachusetts',\n          'Michigan',\n          'Minnesota',\n          'Mississippi',\n          'Missouri',\n          'Montana',\n          'Nebraska',\n          'Nevada',\n          'New Hampshire',\n          'New Jersey',\n          'New Mexico',\n          'New York',\n          'North Carolina',\n          'North Dakota',\n          'Ohio',\n          'Oklahoma',\n          'Oregon',\n          'Pennsylvania',\n          'Rhode Island',\n          'South Carolina',\n          'South Dakota',\n          'Tennessee',\n          'Texas',\n          'Utah',\n          'Vermont',\n          'Virginia',\n          'Washington',\n          'West Virginia',\n          'Wisconsin',\n          'Wyoming',\n        ],\n        options: [],\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("SelectV2 Attributes ");

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Param"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Accepted Values"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Default")])], -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "model-value / v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "biding value"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string / number / boolean / object"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "multiple"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "is multiple"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "is disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "value-key"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "unique identity key name for value, required when value is an object"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "value")], -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "input box size"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "medium/small/mini"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether select can be cleared"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "collapse-tags"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether to collapse tags to a text when multiple selecting"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "multiple-limit"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "maximum number of options user can select when multiple is true. No limit when set to 0"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0")], -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "the name attribute of select input"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "autocomplete"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "select input 的 autocomplete 属性"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "off")], -1);

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "placeholder"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "the autocomplete attribute of select input"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Please select")], -1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "is filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "カスタムフィルタ方式"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "remote"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "オプションがサーバから読み込まれているかどうか"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "remote-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "カスタムリモート検索法"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "allow-create"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("新しいアイテムの作成を許可するかどうかを指定します。これを使うには、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" が true でなければなりません。")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "no-data-text"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "displayed text when there is no options, you can also use slot empty"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "No Data")], -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "popper-class"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "custom class name for Select's dropdown"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "popper-append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "popper-options", -1);

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Customized popper option see more at ");

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("popper.js");

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "object", -1);

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-", -1);

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-", -1);

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "automatic-dropdown"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "for non-filterable Select, this prop decides if the option menu pops up when the input is focused"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "clear-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Customized clear icon class"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "el-icon-circle-close")], -1);

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "height"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "The height of the dropdown panel, 34px for each item"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "170")], -1);

const _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("span", {
  style: {
    "display": "none"
  }
}, null, -1);

const _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("SelectV2 Events ");

const _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Params</th></tr></thead><tbody><tr><td>change</td><td>triggers when the selected value changes</td><td>current selected value</td></tr><tr><td>visible-change</td><td>triggers when the dropdown appears/disappears</td><td>true when it appears, and false otherwise</td></tr><tr><td>remove-tag</td><td>triggers when a tag is removed in multiple mode</td><td>removed tag value</td></tr><tr><td>clear</td><td>triggers when the clear icon is clicked in a clearable Select</td><td>—</td></tr><tr><td>blur</td><td>triggers when Input blurs</td><td>(event: Event)</td></tr><tr><td>focus</td><td>triggers when Input focuses</td><td>(event: Event)</td></tr></tbody></table>", 1);

const _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("SelectV2 Slots ");

const _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Option renderer")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "empty"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "无 Option 时的列表")])])], -1);

function select_v2vue_type_template_id_111b3d2c_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", select_v2vue_type_template_id_111b3d2c_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "select-vtwo-virtualized-selector",
    content: "Select V2 virtualized selector",
    href: "#select-vtwo-virtualized-selector",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [select_v2vue_type_template_id_111b3d2c_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#select-vtwo-virtualized-selector"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_3, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus/issues"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5]),
    _: 1
  }), _hoisted_6])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "background",
    content: "Background",
    href: "#background",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#background"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "multi-select",
    content: "Multi select",
    href: "#multi-select",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#multi-select"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "hide-extra-tags-when-the-selected-items-are-too-many",
    content: "Hide extra tags when the selected items are too many.",
    href: "#hide-extra-tags-when-the-selected-items-are-too-many",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#hide-extra-tags-when-the-selected-items-are-too-many"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "filterable-multi-select",
    content: "Filterable multi-select",
    href: "#filterable-multi-select",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#filterable-multi-select"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "disabled-selector-and-select-options",
    content: "Disabled selector and select options",
    href: "#disabled-selector-and-select-options",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#disabled-selector-and-select-options"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "option-grouping",
    content: "Option Grouping",
    href: "#option-grouping",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#option-grouping"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "customized-option-renderer",
    content: "Customized option renderer",
    href: "#customized-option-renderer",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#customized-option-renderer"
    })]),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "clearable-selector",
    content: "Clearable selector",
    href: "#clearable-selector",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#clearable-selector"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo7)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "xin-gui-aitemunozuo-cheng",
    content: "新規アイテムの作成",
    href: "#xin-gui-aitemunozuo-cheng",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-gui-aitemunozuo-cheng"
    })]),
    _: 1
  }), _hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo8)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "rimotojian-suo",
    content: "リモート検索",
    href: "#rimotojian-suo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#rimotojian-suo"
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
// CONCATENATED MODULE: ./website/docs/jp/select-v2.md?vue&type=template&id=111b3d2c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/select-v2.md?vue&type=script&lang=ts

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
          placeholder: "Please select",
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
              value: `Option ${idx + 1}`,
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
          placeholder: "Please select",
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
              value: `Option ${idx + 1}`,
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
          placeholder: "Please select",
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
              value: `Option ${idx + 1}`,
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
          placeholder: "Please select",
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
              value: `Option${idx + 1}`,
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
          placeholder: "Please select",
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
          placeholder: "Please select",
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
              value: `Option${idx + 1}`,
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
          placeholder: "Please select",
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
                value: `Group ${label}`,
                label: `Group ${label}`,
                options: Array.from({
                  length: 10
                }).map((_, idx) => ({
                  value: `Option ${idx + 1 + 10 * label}`,
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
          placeholder: "Please select",
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
              value: `Option${idx + 1}`,
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
          placeholder: "Please select",
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
          placeholder: "Please select",
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
              value: `Option ${idx + 1}`,
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
          placeholder: "Please select",
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
          placeholder: "Please select",
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
              value: `Option ${idx + 1}`,
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
          placeholder: "Please enter a keyword"
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
// CONCATENATED MODULE: ./website/docs/jp/select-v2.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/select-v2.md



select_v2vue_type_script_lang_ts.render = select_v2vue_type_template_id_111b3d2c_render

/* harmony default export */ var select_v2 = __webpack_exports__["default"] = (select_v2vue_type_script_lang_ts);

/***/ })

}]);