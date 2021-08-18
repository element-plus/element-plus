(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[221],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/checkbox.md?vue&type=template&id=3df43f54

var checkboxvue_type_template_id_3df43f54_hoisted_1 = {
  class: "content element-doc"
};

var checkboxvue_type_template_id_3df43f54_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h2", {
  id: "checkbox"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#checkbox"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Checkbox")], -1);

var checkboxvue_type_template_id_3df43f54_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "複数の選択肢がある場合の選択肢グループ", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "ji-ben-dena-shii-fang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-dena-shii-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 基本的な使い方")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "checkbox単独で使用して2つの状態を切り替えることができます。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" の "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" バインド変数)を定義する。デフォルト値は単一の "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" の場合、 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" で、チェックを選択した場合は "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" になります。el-checkbox`タグ内の内容は、checkboxのボタンに続く説明文になります。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <!-- `checked` should be true or false -->\n  <el-checkbox v-model=\"checked\">Option</el-checkbox>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked: true\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checked = ref(true);\n      return {\n        checked,\n      };\n    },\n  });\n\n</setup>\n-->\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checked = ref(true);\n      return {\n        checked,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "wu-xiao-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#wu-xiao-zhuang-tai"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 無効状態")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "checkboxを無効にした状態。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性を設定する。")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-checkbox v-model=\"checked1\" disabled>Option</el-checkbox>\n  <el-checkbox v-model=\"checked2\" disabled>Option</el-checkbox>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked1: false,\n        checked2: true\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checked1 = ref(false);\n      const checked2 = ref(true);\n      return {\n        checked1,\n        checked2,\n      };\n    },\n  });\n</setup>\n-->\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "checkboxgurupu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#checkboxgurupu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Checkboxグループ")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "1つのグループに固定された複数のcheckboxに使用され、選択肢が選択されているかどうかをチェックして表示します。", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "checkbox-group"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 要素は "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Array"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" としてバインドされた "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を用いて複数のcheckboxを一つのグループにまとめて管理することができる。"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 要素の内部では、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" がcheckboxの値である。このタグにコンテンツが入れ子になっていない場合、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" はcheckboxのボタンに続く説明文としてレンダリングされます。"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" は配列の要素の値にも対応する。 指定された値が配列に存在する場合は選択され、その逆(指定されていない値は選択されない)も同様である。")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-checkbox-group v-model=\"checkList\">\n    <el-checkbox label=\"Option A\"></el-checkbox>\n    <el-checkbox label=\"Option B\"></el-checkbox>\n    <el-checkbox label=\"Option C\"></el-checkbox>\n    <el-checkbox label=\"disabled\" disabled></el-checkbox>\n    <el-checkbox label=\"selected and disabled\" disabled></el-checkbox>\n  </el-checkbox-group>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        checkList: ['selected and disabled','Option A']\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checkList = ref(['selected and disabled','Option A']);\n      return {\n        checkList,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "bu-que-ding"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bu-que-ding"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 不確定")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "indeterminate"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("プロパティは「すべてをチェックする」効果を加えるのに役立ちます。")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-checkbox :indeterminate=\"isIndeterminate\" v-model=\"checkAll\" @change=\"handleCheckAllChange\">Check all</el-checkbox>\n  <div style=\"margin: 15px 0;\"></div>\n  <el-checkbox-group v-model=\"checkedCities\" @change=\"handleCheckedCitiesChange\">\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox>\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n  export default {\n    data() {\n      return {\n        checkAll: false,\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n        isIndeterminate: true\n      };\n    },\n    methods: {\n      handleCheckAllChange(val) {\n        this.checkedCities = val ? cityOptions : [];\n        this.isIndeterminate = false;\n      },\n      handleCheckedCitiesChange(value) {\n        let checkedCount = value.length;\n        this.checkAll = checkedCount === this.cities.length;\n        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;\n      }\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checkAll: false,\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n        isIndeterminate: true,\n      });\n      const handleCheckAllChange = (val) => {\n        state.checkedCities = val ? cityOptions : [];\n        state.isIndeterminate = false;\n      };\n      const handleCheckedCitiesChange = (value) => {\n        const checkedCount = value.length;\n        state.checkAll = checkedCount === state.cities.length;\n        state.isIndeterminate = checkedCount > 0 && checkedCount < state.cities.length;\n      };\n      return {\n        ...toRefs(state),\n        handleCheckAllChange,\n        handleCheckedCitiesChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "zui-xiao-zui-datietuku-xiang-mu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zui-xiao-zui-datietuku-xiang-mu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 最小/最大チェック項目")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "min"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" プロパティは、チェックする項目の数を制限するのに役立つ。")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-checkbox-group\n    v-model=\"checkedCities\"\n    :min=\"1\"\n    :max=\"2\">\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox>\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n  export default {\n    data() {\n      return {\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "botansutairu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#botansutairu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" ボタンスタイル")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "ボタンスタイルのcheckbox。", -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "EL-CHECKBOX"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 要素を "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "EL-CHECKBOX-BUTTON"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 要素に変更すればよい。また、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性も提供されています。")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox-group v-model=\"checkboxGroup1\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup2\" size=\"medium\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup3\" size=\"small\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :disabled=\"city === 'Beijing'\" :key=\"city\">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup4\" size=\"mini\" disabled>\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\n  export default {\n    data () {\n      return {\n        checkboxGroup1: ['Shanghai'],\n        checkboxGroup2: ['Shanghai'],\n        checkboxGroup3: ['Shanghai'],\n        checkboxGroup4: ['Shanghai'],\n        cities: cityOptions\n      };\n    }\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nconst cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      checkboxGroup1: ['Shanghai'],\n      checkboxGroup2: ['Shanghai'],\n      checkboxGroup3: ['Shanghai'],\n      checkboxGroup4: ['Shanghai'],\n      cities: cityOptions,\n    });\n\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "jing-jie-xianwotukeru"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jing-jie-xianwotukeru"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 境界線をつける")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "border"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性はcheckboxに境界線を追加することができます。")])], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox v-model=\"checked1\" label=\"Option1\" border></el-checkbox>\n    <el-checkbox v-model=\"checked2\" label=\"Option2\" border></el-checkbox>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox v-model=\"checked3\" label=\"Option1\" border size=\"medium\"></el-checkbox>\n    <el-checkbox v-model=\"checked4\" label=\"Option2\" border size=\"medium\"></el-checkbox>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup1\" size=\"small\">\n      <el-checkbox label=\"Option1\" border></el-checkbox>\n      <el-checkbox label=\"Option2\" border disabled></el-checkbox>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup2\" size=\"mini\" disabled>\n      <el-checkbox label=\"Option1\" border></el-checkbox>\n      <el-checkbox label=\"Option2\" border></el-checkbox>\n    </el-checkbox-group>\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: true,\n        checkboxGroup1: [],\n        checkboxGroup2: []\n      };\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: true,\n        checkboxGroup1: [],\n        checkboxGroup2: [],\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"checkbox-shu-xing\"><a class=\"header-anchor\" href=\"#checkbox-shu-xing\">¶</a> Checkbox属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>バインディング値</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>label</td><td><code>checkbox-group</code> の中で使われる場合のcheckboxの値</td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>checkboxがチェックされている場合は、checkboxの値</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>checkboxがチェックされていない場合のcheckboxの値</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>checkboxを無効にするかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>checkboxの周りにボーダーを追加するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>checkboxのサイズ、<code>border</code> がtrueの場合にのみ動作します。</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>name</td><td>ネイティブ &#39;name&#39; 属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>checkboxがチェックされているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indeterminate</td><td>ネイティブcheckboxの <code>indeterminate</code> と同じ</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"checkboxnoibento\"><a class=\"header-anchor\" href=\"#checkboxnoibento\">¶</a> Checkboxのイベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>バインディング値が変更された場合にトリガされます。</td><td>the updated value</td></tr></tbody></table><h3 id=\"checkboxgurupuno-shu-xing\"><a class=\"header-anchor\" href=\"#checkboxgurupuno-shu-xing\">¶</a> Checkboxグループの属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>バインディング値</td><td>array</td><td>—</td><td>—</td></tr><tr><td>size</td><td>checkboxのボタンや枠線の大きさ</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>disabled</td><td>ネスティングcheckboxを無効にするかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>min</td><td>checkboxの最小チェック数</td><td>number</td><td>—</td><td>—</td></tr><tr><td>max</td><td>checkboxの最大チェック数</td><td>number</td><td>—</td><td>—</td></tr><tr><td>text-color</td><td>ボタンがアクティブなときのフォント色</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>fill</td><td>ボタンがアクティブなときの境界線と背景色</td><td>string</td><td>—</td><td>#409EFF</td></tr></tbody></table><h3 id=\"checkboxgurupunoibento\"><a class=\"header-anchor\" href=\"#checkboxgurupunoibento\">¶</a> Checkboxグループのイベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>バインディング値が変更された場合にトリガされます。</td><td>the updated value</td></tr></tbody></table><h3 id=\"checkboxbotanno-shu-xing\"><a class=\"header-anchor\" href=\"#checkboxbotanno-shu-xing\">¶</a> Checkboxボタンの属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td><code>checkbox-group</code> の中で使われる場合のcheckboxの値</td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>チェックされている場合の、checkboxの値</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>チェックされていない場合の、checkboxの値</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>checkboxを無効にするかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>ネイティブ &#39;name&#39; 属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>checkboxがチェックされているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 10);

function checkboxvue_type_template_id_3df43f54_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo6");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", checkboxvue_type_template_id_3df43f54_hoisted_1, [checkboxvue_type_template_id_3df43f54_hoisted_2, checkboxvue_type_template_id_3df43f54_hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, _hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_19, _hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_22, _hoisted_23, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/checkbox.md?vue&type=template&id=3df43f54

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/checkbox.md?vue&type=script&lang=ts


/* harmony default export */ var checkboxvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Option");

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
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Option");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Option");

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
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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
            })];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            checkList: ['selected and disabled', 'Option A']
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Check all");

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

      var cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
      var democomponentExport = {
        data: function data() {
          return {
            checkAll: false,
            checkedCities: ['Shanghai', 'Beijing'],
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
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */];

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

      var cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
      var democomponentExport = {
        data: function data() {
          return {
            checkedCities: ['Shanghai', 'Beijing'],
            cities: cityOptions
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */];
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
                disabled: city === 'Beijing',
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

      var cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
      var democomponentExport = {
        data: function data() {
          return {
            checkboxGroup1: ['Shanghai'],
            checkboxGroup2: ['Shanghai'],
            checkboxGroup3: ['Shanghai'],
            checkboxGroup4: ['Shanghai'],
            cities: cityOptions
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
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
          label: "Option1",
          border: ""
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.checked2 = $event;
          }),
          label: "Option2",
          border: ""
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_1, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.checked3 = $event;
          }),
          label: "Option1",
          border: "",
          size: "medium"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked4,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.checked4 = $event;
          }),
          label: "Option2",
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
              label: "Option1",
              border: ""
            }), _createVNode(_component_el_checkbox, {
              label: "Option2",
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
              label: "Option1",
              border: ""
            }), _createVNode(_component_el_checkbox, {
              label: "Option2",
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
// CONCATENATED MODULE: ./website/docs/jp/checkbox.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/checkbox.md



checkboxvue_type_script_lang_ts.render = checkboxvue_type_template_id_3df43f54_render

/* harmony default export */ var jp_checkbox = __webpack_exports__["default"] = (checkboxvue_type_script_lang_ts);

/***/ })

}]);