(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/checkbox.md?vue&type=template&id=437cb0fa

var checkboxvue_type_template_id_437cb0fa_hoisted_1 = {
  class: "content element-doc"
};

var checkboxvue_type_template_id_437cb0fa_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Checkbox ");

var checkboxvue_type_template_id_437cb0fa_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "A group of options for multiple choices.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Basic usage ");

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Checkbox can be used alone to switch between two states.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Define "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("(bind variable) in "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". The default value is a "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" for single "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", and it becomes "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" when selected. Content inside the "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" tag will become the description following the button of the checkbox.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <!-- `checked` should be true or false -->\n  <el-checkbox v-model=\"checked\">Option</el-checkbox>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked: true\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checked = ref(true);\n      return {\n        checked,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Disabled State ");

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Disabled state for checkbox.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Set the "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" attribute.")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-checkbox v-model=\"checked1\" disabled>Option</el-checkbox>\n  <el-checkbox v-model=\"checked2\" disabled>Option</el-checkbox>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked1: false,\n        checked2: true\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checked1 = ref(false);\n      const checked2 = ref(true);\n      return {\n        checked1,\n        checked2,\n      };\n    },\n  });\n</setup>\n-->\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Checkbox group ");

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked.", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "checkbox-group"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" element can manage multiple checkboxes in one group by using "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" which is bound as an "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Array"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Inside the "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" element, "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" is the value of the checkbox. If no content is nested in that tag, "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" will be rendered as the description following the button of the checkbox. "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" also corresponds with the element values in the array. It is selected if the specified value exists in the array, and vice versa.")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-checkbox-group v-model=\"checkList\">\n    <el-checkbox label=\"Option A\"></el-checkbox>\n    <el-checkbox label=\"Option B\"></el-checkbox>\n    <el-checkbox label=\"Option C\"></el-checkbox>\n    <el-checkbox label=\"disabled\" disabled></el-checkbox>\n    <el-checkbox label=\"selected and disabled\" disabled></el-checkbox>\n  </el-checkbox-group>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        checkList: ['selected and disabled','Option A']\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checkList = ref(['selected and disabled','Option A']);\n      return {\n        checkList,\n      };\n    },\n  });\n\n</setup>\n-->\n\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Indeterminate ");

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("The "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "indeterminate"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" property can help you to achieve a 'check all' effect.")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-checkbox :indeterminate=\"isIndeterminate\" v-model=\"checkAll\" @change=\"handleCheckAllChange\">Check all</el-checkbox>\n  <div style=\"margin: 15px 0;\"></div>\n  <el-checkbox-group v-model=\"checkedCities\" @change=\"handleCheckedCitiesChange\">\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox>\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n  export default {\n    data() {\n      return {\n        checkAll: false,\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n        isIndeterminate: true\n      };\n    },\n    methods: {\n      handleCheckAllChange(val) {\n        this.checkedCities = val ? cityOptions : [];\n        this.isIndeterminate = false;\n      },\n      handleCheckedCitiesChange(value) {\n        let checkedCount = value.length;\n        this.checkAll = checkedCount === this.cities.length;\n        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;\n      }\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checkAll: false,\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n        isIndeterminate: true,\n      });\n      const handleCheckAllChange = (val) => {\n        state.checkedCities = val ? cityOptions : [];\n        state.isIndeterminate = false;\n      };\n      const handleCheckedCitiesChange = (value) => {\n        const checkedCount = value.length;\n        state.checkAll = checkedCount === state.cities.length;\n        state.isIndeterminate = checkedCount > 0 && checkedCount < state.cities.length;\n      };\n      return {\n        ...toRefs(state),\n        handleCheckAllChange,\n        handleCheckedCitiesChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Minimum / Maximum items checked ");

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("The "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "min"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" properties can help you to limit the number of checked items.")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-checkbox-group\n    v-model=\"checkedCities\"\n    :min=\"1\"\n    :max=\"2\">\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox>\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n  export default {\n    data() {\n      return {\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Button style ");

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Checkbox with button styles.", -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("You just need to change "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" element into "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-checkbox-button"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" element. We also provide "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" attribute.")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox-group v-model=\"checkboxGroup1\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup2\" size=\"medium\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup3\" size=\"small\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :disabled=\"city === 'Beijing'\" :key=\"city\">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup4\" size=\"mini\" disabled>\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\n  export default {\n    data () {\n      return {\n        checkboxGroup1: ['Shanghai'],\n        checkboxGroup2: ['Shanghai'],\n        checkboxGroup3: ['Shanghai'],\n        checkboxGroup4: ['Shanghai'],\n        cities: cityOptions\n      };\n    }\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nconst cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      checkboxGroup1: ['Shanghai'],\n      checkboxGroup2: ['Shanghai'],\n      checkboxGroup3: ['Shanghai'],\n      checkboxGroup4: ['Shanghai'],\n      cities: cityOptions,\n    });\n\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("With borders ");

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("The "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "border"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" attribute adds a border to Checkboxes.")])], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox v-model=\"checked1\" label=\"Option1\" border></el-checkbox>\n    <el-checkbox v-model=\"checked2\" label=\"Option2\" border></el-checkbox>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox v-model=\"checked3\" label=\"Option1\" border size=\"medium\"></el-checkbox>\n    <el-checkbox v-model=\"checked4\" label=\"Option2\" border size=\"medium\"></el-checkbox>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup1\" size=\"small\">\n      <el-checkbox label=\"Option1\" border></el-checkbox>\n      <el-checkbox label=\"Option2\" border disabled></el-checkbox>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup2\" size=\"mini\" disabled>\n      <el-checkbox label=\"Option1\" border></el-checkbox>\n      <el-checkbox label=\"Option2\" border></el-checkbox>\n    </el-checkbox-group>\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: true,\n        checkboxGroup1: [],\n        checkboxGroup2: []\n      };\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: true,\n        checkboxGroup1: [],\n        checkboxGroup2: [],\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Checkbox Attributes ");

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>binding value</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>label</td><td>value of the Checkbox when used inside a <code>checkbox-group</code></td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>value of the Checkbox if it&#39;s checked</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>value of the Checkbox if it&#39;s not checked</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether the Checkbox is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>whether to add a border around Checkbox</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>size of the Checkbox, only works when <code>border</code> is true</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>name</td><td>native &#39;name&#39; attribute</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>if the Checkbox is checked</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indeterminate</td><td>same as <code>indeterminate</code> in native checkbox</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Checkbox Events ");

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Event Name"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "triggers when the binding value changes"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "the updated value")])])], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Checkbox-group Attributes ");

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>binding value</td><td>array</td><td>—</td><td>—</td></tr><tr><td>size</td><td>size of checkbox buttons or bordered checkboxes</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>disabled</td><td>whether the nesting checkboxes are disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>min</td><td>minimum number of checkbox checked</td><td>number</td><td>—</td><td>—</td></tr><tr><td>max</td><td>maximum number of checkbox checked</td><td>number</td><td>—</td><td>—</td></tr><tr><td>text-color</td><td>font color when button is active</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>fill</td><td>border and background color when button is active</td><td>string</td><td>—</td><td>#409EFF</td></tr></tbody></table>", 1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Checkbox-group Events ");

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Event Name"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "triggers when the binding value changes"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "the updated value")])])], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Checkbox-button Attributes ");

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>value of the checkbox when used inside a <code>checkbox-group</code></td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>value of the checkbox if it&#39;s checked</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>value of the checkbox if it&#39;s not checked</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether the checkbox is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>native &#39;name&#39; attribute</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>if the checkbox is checked</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

function checkboxvue_type_template_id_437cb0fa_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo6");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", checkboxvue_type_template_id_437cb0fa_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "checkbox",
    content: "Checkbox",
    href: "#checkbox",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [checkboxvue_type_template_id_437cb0fa_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#checkbox"
      })];
    }),
    _: 1
  }), checkboxvue_type_template_id_437cb0fa_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#basic-usage"
      })];
    }),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
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
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "disabled-state",
    content: "Disabled State",
    href: "#disabled-state",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#disabled-state"
      })];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
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
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "checkbox-group",
    content: "Checkbox group",
    href: "#checkbox-group",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#checkbox-group"
      })];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
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
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "indeterminate",
    content: "Indeterminate",
    href: "#indeterminate",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#indeterminate"
      })];
    }),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "minimum-maximum-items-checked",
    content: "Minimum / Maximum items checked",
    href: "#minimum-maximum-items-checked",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#minimum-maximum-items-checked"
      })];
    }),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "button-style",
    content: "Button style",
    href: "#button-style",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_22, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#button-style"
      })];
    }),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
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
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "with-borders",
    content: "With borders",
    href: "#with-borders",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_26, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#with-borders"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
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
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "checkbox-attributes",
    content: "Checkbox Attributes",
    href: "#checkbox-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_29, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#checkbox-attributes"
      })];
    }),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "checkbox-events",
    content: "Checkbox Events",
    href: "#checkbox-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_31, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#checkbox-events"
      })];
    }),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "checkbox-group-attributes",
    content: "Checkbox-group Attributes",
    href: "#checkbox-group-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_33, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#checkbox-group-attributes"
      })];
    }),
    _: 1
  }), _hoisted_34, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "checkbox-group-events",
    content: "Checkbox-group Events",
    href: "#checkbox-group-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_35, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#checkbox-group-events"
      })];
    }),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "checkbox-button-attributes",
    content: "Checkbox-button Attributes",
    href: "#checkbox-button-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_37, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#checkbox-button-attributes"
      })];
    }),
    _: 1
  }), _hoisted_38, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/checkbox.md?vue&type=template&id=437cb0fa

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/checkbox.md?vue&type=script&lang=ts


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
// CONCATENATED MODULE: ./website/docs/en-US/checkbox.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/checkbox.md



checkboxvue_type_script_lang_ts.render = checkboxvue_type_template_id_437cb0fa_render

/* harmony default export */ var en_US_checkbox = __webpack_exports__["default"] = (checkboxvue_type_script_lang_ts);

/***/ })

}]);