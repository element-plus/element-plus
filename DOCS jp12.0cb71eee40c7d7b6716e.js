(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[221],{

/***/ 969:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/checkbox.md?vue&type=template&id=10227562

const checkboxvue_type_template_id_10227562_hoisted_1 = {
  class: "content element-doc"
};

const checkboxvue_type_template_id_10227562_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox ");

const checkboxvue_type_template_id_10227562_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "複数の選択肢がある場合の選択肢グループ", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基本的な使い方 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "checkbox 単独で使用して 2 つの状態を切り替えることができます。", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" バインド変数)を定義する。デフォルト値は単一の "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の場合、 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" で、チェックを選択した場合は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" になります。el-checkbox`タグ内の内容は、checkbox のボタンに続く説明文になります。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox v-model=\"checked1\" label=\"Option 1\"></el-checkbox>\n    <el-checkbox v-model=\"checked2\" label=\"Option 2\"></el-checkbox>\n  </div>\n  <div>\n    <el-checkbox\n      v-model=\"checked3\"\n      label=\"Option 1\"\n      size=\"medium\"\n    ></el-checkbox>\n    <el-checkbox\n      v-model=\"checked4\"\n      label=\"Option 2\"\n      size=\"medium\"\n    ></el-checkbox>\n  </div>\n  <div>\n    <el-checkbox v-model=\"checked5\" label=\"Option 1\" size=\"small\"></el-checkbox>\n    <el-checkbox v-model=\"checked6\" label=\"Option 2\" size=\"small\"></el-checkbox>\n  </div>\n  <div>\n    <el-checkbox v-model=\"checked7\" label=\"Option 1\" size=\"mini\"></el-checkbox>\n    <el-checkbox v-model=\"checked8\" label=\"Option 2\" size=\"mini\"></el-checkbox>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: false,\n        checked5: false,\n        checked6: false,\n        checked7: false,\n        checked8: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checked1 = ref(true);\n      const checked2 = ref(false);\n      const checked3 = ref(false);\n      const checked4 = ref(false);\n      const checked5 = ref(false);\n      const checked6 = ref(false);\n      const checked7 = ref(false);\n      const checked8 = ref(false);\n      return {\n        checked1,\n        checked2,\n        checked3,\n        checked4,\n        checked5,\n        checked6,\n        checked7,\n        checked8,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("無効状態 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "checkbox を無効にした状態。", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を設定する。")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox v-model=\"checked1\" disabled>Option</el-checkbox>\n  <el-checkbox v-model=\"checked2\" disabled>Option</el-checkbox>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked1: false,\n        checked2: true,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checked1 = ref(false);\n      const checked2 = ref(true);\n      return {\n        checked1,\n        checked2,\n      };\n    },\n  });\n</setup>\n-->\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox グループ ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "1 つのグループに固定された複数の checkbox に使用され、選択肢が選択されているかどうかをチェックして表示します。", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "checkbox-group"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 要素は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Array"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" としてバインドされた "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を用いて複数の checkbox を一つのグループにまとめて管理することができる。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 要素の内部では、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" が checkbox の値である。このタグにコンテンツが入れ子になっていない場合、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" は checkbox のボタンに続く説明文としてレンダリングされます。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" は配列の要素の値にも対応する。 指定された値が配列に存在する場合は選択され、その逆(指定されていない値は選択されない)も同様である。")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox-group v-model=\"checkList\">\n    <el-checkbox label=\"Option A\"></el-checkbox>\n    <el-checkbox label=\"Option B\"></el-checkbox>\n    <el-checkbox label=\"Option C\"></el-checkbox>\n    <el-checkbox label=\"disabled\" disabled></el-checkbox>\n    <el-checkbox label=\"selected and disabled\" disabled></el-checkbox>\n  </el-checkbox-group>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        checkList: ['selected and disabled', 'Option A'],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checkList = ref(['selected and disabled','Option A']);\n      return {\n        checkList,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("不確定 ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "indeterminate"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("プロパティは「すべてをチェックする」効果を加えるのに役立ちます。")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox\n    :indeterminate=\"isIndeterminate\"\n    v-model=\"checkAll\"\n    @change=\"handleCheckAllChange\"\n    >Check all</el-checkbox\n  >\n  <el-checkbox-group\n    v-model=\"checkedCities\"\n    @change=\"handleCheckedCitiesChange\"\n  >\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n      >{{city}}</el-checkbox\n    >\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']\n  export default {\n    data() {\n      return {\n        checkAll: false,\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n        isIndeterminate: true,\n      }\n    },\n    methods: {\n      handleCheckAllChange(val) {\n        this.checkedCities = val ? cityOptions : []\n        this.isIndeterminate = false\n      },\n      handleCheckedCitiesChange(value) {\n        let checkedCount = value.length\n        this.checkAll = checkedCount === this.cities.length\n        this.isIndeterminate =\n          checkedCount > 0 && checkedCount < this.cities.length\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checkAll: false,\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n        isIndeterminate: true,\n      });\n      const handleCheckAllChange = (val) => {\n        state.checkedCities = val ? cityOptions : [];\n        state.isIndeterminate = false;\n      };\n      const handleCheckedCitiesChange = (value) => {\n        const checkedCount = value.length;\n        state.checkAll = checkedCount === state.cities.length;\n        state.isIndeterminate = checkedCount > 0 && checkedCount < state.cities.length;\n      };\n      return {\n        ...toRefs(state),\n        handleCheckAllChange,\n        handleCheckedCitiesChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("最小/最大チェック項目 ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "min"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" プロパティは、チェックする項目の数を制限するのに役立つ。")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox-group v-model=\"checkedCities\" :min=\"1\" :max=\"2\">\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n      >{{city}}</el-checkbox\n    >\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']\n  export default {\n    data() {\n      return {\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ボタンスタイル ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "ボタンスタイルの checkbox。", -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "EL-CHECKBOX"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 要素を "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "EL-CHECKBOX-BUTTON"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 要素に変更すればよい。また、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性も提供されています。")])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox-group v-model=\"checkboxGroup1\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup2\" size=\"medium\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup3\" size=\"small\">\n      <el-checkbox-button\n        v-for=\"city in cities\"\n        :label=\"city\"\n        :disabled=\"city === 'Beijing'\"\n        :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup4\" size=\"mini\" disabled>\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']\n\n  export default {\n    data() {\n      return {\n        checkboxGroup1: ['Shanghai'],\n        checkboxGroup2: ['Shanghai'],\n        checkboxGroup3: ['Shanghai'],\n        checkboxGroup4: ['Shanghai'],\n        cities: cityOptions,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nconst cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      checkboxGroup1: ['Shanghai'],\n      checkboxGroup2: ['Shanghai'],\n      checkboxGroup3: ['Shanghai'],\n      checkboxGroup4: ['Shanghai'],\n      cities: cityOptions,\n    });\n\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("境界線をつける ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "border"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性は checkbox に境界線を追加することができます。")])], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox v-model=\"checked1\" label=\"Option1\" border></el-checkbox>\n    <el-checkbox v-model=\"checked2\" label=\"Option2\" border></el-checkbox>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox\n      v-model=\"checked3\"\n      label=\"Option1\"\n      border\n      size=\"medium\"\n    ></el-checkbox>\n    <el-checkbox\n      v-model=\"checked4\"\n      label=\"Option2\"\n      border\n      size=\"medium\"\n    ></el-checkbox>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup1\" size=\"small\">\n      <el-checkbox label=\"Option1\" border></el-checkbox>\n      <el-checkbox label=\"Option2\" border disabled></el-checkbox>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup2\" size=\"mini\" disabled>\n      <el-checkbox label=\"Option1\" border></el-checkbox>\n      <el-checkbox label=\"Option2\" border></el-checkbox>\n    </el-checkbox-group>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: true,\n        checkboxGroup1: [],\n        checkboxGroup2: [],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: true,\n        checkboxGroup1: [],\n        checkboxGroup2: [],\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox 属性 ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>バインディング値</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>label</td><td><code>checkbox-group</code> の中で使われる場合の checkbox の値</td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>checkbox がチェックされている場合は、checkbox の値</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>checkbox がチェックされていない場合の checkbox の値</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>checkbox を無効にするかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>checkbox の周りにボーダーを追加するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>checkbox のサイズ</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>name</td><td>ネイティブ &#39;name&#39; 属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>checkbox がチェックされているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indeterminate</td><td>ネイティブ checkbox の <code>indeterminate</code> と同じ</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox のイベント ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Event Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "バインディング値が変更された場合にトリガされます。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "the updated value")])])], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox グループの属性 ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>バインディング値</td><td>array</td><td>—</td><td>—</td></tr><tr><td>size</td><td>checkbox の大きさ</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>disabled</td><td>ネスティング checkbox を無効にするかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>min</td><td>checkbox の最小チェック数</td><td>number</td><td>—</td><td>—</td></tr><tr><td>max</td><td>checkbox の最大チェック数</td><td>number</td><td>—</td><td>—</td></tr><tr><td>text-color</td><td>ボタンがアクティブなときのフォント色</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>fill</td><td>ボタンがアクティブなときの境界線と背景色</td><td>string</td><td>—</td><td>#409EFF</td></tr></tbody></table>", 1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox グループのイベント ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Event Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "バインディング値が変更された場合にトリガされます。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "the updated value")])])], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox ボタンの属性 ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td><code>checkbox-group</code> の中で使われる場合の checkbox の値</td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>チェックされている場合の、checkbox の値</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>チェックされていない場合の、checkbox の値</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>checkbox を無効にするかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>ネイティブ &#39;name&#39; 属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>checkbox がチェックされているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

function checkboxvue_type_template_id_10227562_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", checkboxvue_type_template_id_10227562_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox",
    content: "Checkbox",
    href: "#checkbox",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [checkboxvue_type_template_id_10227562_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox"
    })]),
    _: 1
  }), checkboxvue_type_template_id_10227562_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-ben-de-nashi-ifang",
    content: "基本的な使い方",
    href: "#ji-ben-de-nashi-ifang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-ben-de-nashi-ifang"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "wu-xiao-zhuang-tai",
    content: "無効状態",
    href: "#wu-xiao-zhuang-tai",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#wu-xiao-zhuang-tai"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox-gurupu",
    content: "Checkbox グループ",
    href: "#checkbox-gurupu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox-gurupu"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bu-que-ding",
    content: "不確定",
    href: "#bu-que-ding",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bu-que-ding"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zui-xiao-zui-da-tietukuxiang-mu",
    content: "最小/最大チェック項目",
    href: "#zui-xiao-zui-da-tietukuxiang-mu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zui-xiao-zui-da-tietukuxiang-mu"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "botansutairu",
    content: "ボタンスタイル",
    href: "#botansutairu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#botansutairu"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "jing-jie-xian-wotukeru",
    content: "境界線をつける",
    href: "#jing-jie-xian-wotukeru",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#jing-jie-xian-wotukeru"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox-shu-xing",
    content: "Checkbox 属性",
    href: "#checkbox-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox-shu-xing"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox-noibento",
    content: "Checkbox のイベント",
    href: "#checkbox-noibento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox-noibento"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox-gurupunoshu-xing",
    content: "Checkbox グループの属性",
    href: "#checkbox-gurupunoshu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox-gurupunoshu-xing"
    })]),
    _: 1
  }), _hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox-gurupunoibento",
    content: "Checkbox グループのイベント",
    href: "#checkbox-gurupunoibento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox-gurupunoibento"
    })]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox-botannoshu-xing",
    content: "Checkbox ボタンの属性",
    href: "#checkbox-botannoshu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox-botannoshu-xing"
    })]),
    _: 1
  }), _hoisted_38, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/checkbox.md?vue&type=template&id=10227562

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/checkbox.md?vue&type=script&lang=ts

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
          label: "Option 1"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.checked2 = $event),
          label: "Option 2"
        }, null, 8, ["modelValue"])]), _createElementVNode("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked3,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.checked3 = $event),
          label: "Option 1",
          size: "medium"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked4,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.checked4 = $event),
          label: "Option 2",
          size: "medium"
        }, null, 8, ["modelValue"])]), _createElementVNode("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked5,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.checked5 = $event),
          label: "Option 1",
          size: "small"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked6,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.checked6 = $event),
          label: "Option 2",
          size: "small"
        }, null, 8, ["modelValue"])]), _createElementVNode("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked7,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.checked7 = $event),
          label: "Option 1",
          size: "mini"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked8,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.checked8 = $event),
          label: "Option 2",
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Option");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Option");

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
            label: "Option A"
          }), _createVNode(_component_el_checkbox, {
            label: "Option B"
          }), _createVNode(_component_el_checkbox, {
            label: "Option C"
          }), _createVNode(_component_el_checkbox, {
            label: "disabled",
            disabled: ""
          }), _createVNode(_component_el_checkbox, {
            label: "selected and disabled",
            disabled: ""
          })]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            checkList: ['selected and disabled', 'Option A']
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Check all");

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

      const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
      const democomponentExport = {
        data() {
          return {
            checkAll: false,
            checkedCities: ['Shanghai', 'Beijing'],
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

      const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
      const democomponentExport = {
        data() {
          return {
            checkedCities: ['Shanghai', 'Beijing'],
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
              disabled: city === 'Beijing',
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

      const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
      const democomponentExport = {
        data() {
          return {
            checkboxGroup1: ['Shanghai'],
            checkboxGroup2: ['Shanghai'],
            checkboxGroup3: ['Shanghai'],
            checkboxGroup4: ['Shanghai'],
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
          label: "Option1",
          border: ""
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.checked2 = $event),
          label: "Option2",
          border: ""
        }, null, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked3,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.checked3 = $event),
          label: "Option1",
          border: "",
          size: "medium"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked4,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.checked4 = $event),
          label: "Option2",
          border: "",
          size: "medium"
        }, null, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_2, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup1,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.checkboxGroup1 = $event),
          size: "small"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_checkbox, {
            label: "Option1",
            border: ""
          }), _createVNode(_component_el_checkbox, {
            label: "Option2",
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
            label: "Option1",
            border: ""
          }), _createVNode(_component_el_checkbox, {
            label: "Option2",
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
// CONCATENATED MODULE: ./website/docs/jp/checkbox.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/checkbox.md



checkboxvue_type_script_lang_ts.render = checkboxvue_type_template_id_10227562_render

/* harmony default export */ var jp_checkbox = __webpack_exports__["default"] = (checkboxvue_type_script_lang_ts);

/***/ })

}]);