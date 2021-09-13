(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/checkbox.md?vue&type=template&id=1cfdb884

const checkboxvue_type_template_id_1cfdb884_hoisted_1 = {
  class: "content element-doc"
};

const checkboxvue_type_template_id_1cfdb884_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox ");

const checkboxvue_type_template_id_1cfdb884_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "A group of options for multiple choices.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic usage ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Checkbox can be used alone to switch between two states.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Define "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("(bind variable) in "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". The default value is a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" for single "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", and it becomes "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" when selected. Content inside the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" tag will become the description following the button of the checkbox.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox v-model=\"checked1\" label=\"Option 1\"></el-checkbox>\n    <el-checkbox v-model=\"checked2\" label=\"Option 2\"></el-checkbox>\n  </div>\n  <div>\n    <el-checkbox\n      v-model=\"checked3\"\n      label=\"Option 1\"\n      size=\"medium\"\n    ></el-checkbox>\n    <el-checkbox\n      v-model=\"checked4\"\n      label=\"Option 2\"\n      size=\"medium\"\n    ></el-checkbox>\n  </div>\n  <div>\n    <el-checkbox v-model=\"checked5\" label=\"Option 1\" size=\"small\"></el-checkbox>\n    <el-checkbox v-model=\"checked6\" label=\"Option 2\" size=\"small\"></el-checkbox>\n  </div>\n  <div>\n    <el-checkbox v-model=\"checked7\" label=\"Option 1\" size=\"mini\"></el-checkbox>\n    <el-checkbox v-model=\"checked8\" label=\"Option 2\" size=\"mini\"></el-checkbox>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: false,\n        checked5: false,\n        checked6: false,\n        checked7: false,\n        checked8: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checked1 = ref(true);\n      const checked2 = ref(false);\n      const checked3 = ref(false);\n      const checked4 = ref(false);\n      const checked5 = ref(false);\n      const checked6 = ref(false);\n      const checked7 = ref(false);\n      const checked8 = ref(false);\n      return {\n        checked1,\n        checked2,\n        checked3,\n        checked4,\n        checked5,\n        checked6,\n        checked7,\n        checked8,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Disabled State ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Disabled state for checkbox.", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Set the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute.")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox v-model=\"checked1\" disabled>Option</el-checkbox>\n  <el-checkbox v-model=\"checked2\" disabled>Option</el-checkbox>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked1: false,\n        checked2: true,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checked1 = ref(false);\n      const checked2 = ref(true);\n      return {\n        checked1,\n        checked2,\n      };\n    },\n  });\n</setup>\n-->\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox group ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked.", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "checkbox-group"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" element can manage multiple checkboxes in one group by using "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" which is bound as an "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Array"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Inside the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" element, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is the value of the checkbox. If no content is nested in that tag, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" will be rendered as the description following the button of the checkbox. "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" also corresponds with the element values in the array. It is selected if the specified value exists in the array, and vice versa.")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox-group v-model=\"checkList\">\n    <el-checkbox label=\"Option A\"></el-checkbox>\n    <el-checkbox label=\"Option B\"></el-checkbox>\n    <el-checkbox label=\"Option C\"></el-checkbox>\n    <el-checkbox label=\"disabled\" disabled></el-checkbox>\n    <el-checkbox label=\"selected and disabled\" disabled></el-checkbox>\n  </el-checkbox-group>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        checkList: ['selected and disabled', 'Option A'],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checkList = ref(['selected and disabled','Option A']);\n      return {\n        checkList,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Indeterminate ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("The "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "indeterminate"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" property can help you to achieve a 'check all' effect.")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox\n    :indeterminate=\"isIndeterminate\"\n    v-model=\"checkAll\"\n    @change=\"handleCheckAllChange\"\n    >Check all</el-checkbox\n  >\n  <el-checkbox-group\n    v-model=\"checkedCities\"\n    @change=\"handleCheckedCitiesChange\"\n  >\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n      >{{city}}</el-checkbox\n    >\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']\n  export default {\n    data() {\n      return {\n        checkAll: false,\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n        isIndeterminate: true,\n      }\n    },\n    methods: {\n      handleCheckAllChange(val) {\n        this.checkedCities = val ? cityOptions : []\n        this.isIndeterminate = false\n      },\n      handleCheckedCitiesChange(value) {\n        let checkedCount = value.length\n        this.checkAll = checkedCount === this.cities.length\n        this.isIndeterminate =\n          checkedCount > 0 && checkedCount < this.cities.length\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checkAll: false,\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n        isIndeterminate: true,\n      });\n      const handleCheckAllChange = (val) => {\n        state.checkedCities = val ? cityOptions : [];\n        state.isIndeterminate = false;\n      };\n      const handleCheckedCitiesChange = (value) => {\n        const checkedCount = value.length;\n        state.checkAll = checkedCount === state.cities.length;\n        state.isIndeterminate = checkedCount > 0 && checkedCount < state.cities.length;\n      };\n      return {\n        ...toRefs(state),\n        handleCheckAllChange,\n        handleCheckedCitiesChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Minimum / Maximum items checked ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("The "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "min"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" properties can help you to limit the number of checked items.")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox-group v-model=\"checkedCities\" :min=\"1\" :max=\"2\">\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n      >{{city}}</el-checkbox\n    >\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']\n  export default {\n    data() {\n      return {\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Button style ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Checkbox with button styles.", -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("You just need to change "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" element into "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox-button"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" element. We also provide "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute.")])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox-group v-model=\"checkboxGroup1\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup2\" size=\"medium\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup3\" size=\"small\">\n      <el-checkbox-button\n        v-for=\"city in cities\"\n        :label=\"city\"\n        :disabled=\"city === 'Beijing'\"\n        :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup4\" size=\"mini\" disabled>\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']\n\n  export default {\n    data() {\n      return {\n        checkboxGroup1: ['Shanghai'],\n        checkboxGroup2: ['Shanghai'],\n        checkboxGroup3: ['Shanghai'],\n        checkboxGroup4: ['Shanghai'],\n        cities: cityOptions,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nconst cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      checkboxGroup1: ['Shanghai'],\n      checkboxGroup2: ['Shanghai'],\n      checkboxGroup3: ['Shanghai'],\n      checkboxGroup4: ['Shanghai'],\n      cities: cityOptions,\n    });\n\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("With borders ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("The "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "border"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute adds a border to Checkboxes.")])], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox v-model=\"checked1\" label=\"Option1\" border></el-checkbox>\n    <el-checkbox v-model=\"checked2\" label=\"Option2\" border></el-checkbox>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox\n      v-model=\"checked3\"\n      label=\"Option1\"\n      border\n      size=\"medium\"\n    ></el-checkbox>\n    <el-checkbox\n      v-model=\"checked4\"\n      label=\"Option2\"\n      border\n      size=\"medium\"\n    ></el-checkbox>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup1\" size=\"small\">\n      <el-checkbox label=\"Option1\" border></el-checkbox>\n      <el-checkbox label=\"Option2\" border disabled></el-checkbox>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup2\" size=\"mini\" disabled>\n      <el-checkbox label=\"Option1\" border></el-checkbox>\n      <el-checkbox label=\"Option2\" border></el-checkbox>\n    </el-checkbox-group>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: true,\n        checkboxGroup1: [],\n        checkboxGroup2: [],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: true,\n        checkboxGroup1: [],\n        checkboxGroup2: [],\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox Attributes ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>binding value</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>label</td><td>value of the Checkbox when used inside a <code>checkbox-group</code></td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>value of the Checkbox if it&#39;s checked</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>value of the Checkbox if it&#39;s not checked</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether the Checkbox is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>whether to add a border around Checkbox</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>size of the Checkbox</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>name</td><td>native &#39;name&#39; attribute</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>if the Checkbox is checked</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indeterminate</td><td>same as <code>indeterminate</code> in native checkbox</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox Events ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Event Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "triggers when the binding value changes"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "the updated value")])])], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox-group Attributes ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>binding value</td><td>array</td><td>—</td><td>—</td></tr><tr><td>size</td><td>size of checkbox</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>disabled</td><td>whether the nesting checkboxes are disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>min</td><td>minimum number of checkbox checked</td><td>number</td><td>—</td><td>—</td></tr><tr><td>max</td><td>maximum number of checkbox checked</td><td>number</td><td>—</td><td>—</td></tr><tr><td>text-color</td><td>font color when button is active</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>fill</td><td>border and background color when button is active</td><td>string</td><td>—</td><td>#409EFF</td></tr></tbody></table>", 1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox-group Events ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Event Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "triggers when the binding value changes"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "the updated value")])])], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox-button Attributes ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>value of the checkbox when used inside a <code>checkbox-group</code></td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>value of the checkbox if it&#39;s checked</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>value of the checkbox if it&#39;s not checked</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether the checkbox is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>native &#39;name&#39; attribute</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>if the checkbox is checked</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

function checkboxvue_type_template_id_1cfdb884_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", checkboxvue_type_template_id_1cfdb884_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox",
    content: "Checkbox",
    href: "#checkbox",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [checkboxvue_type_template_id_1cfdb884_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox"
    })]),
    _: 1
  }), checkboxvue_type_template_id_1cfdb884_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "disabled-state",
    content: "Disabled State",
    href: "#disabled-state",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#disabled-state"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox-group",
    content: "Checkbox group",
    href: "#checkbox-group",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox-group"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "indeterminate",
    content: "Indeterminate",
    href: "#indeterminate",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#indeterminate"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "minimum-maximum-items-checked",
    content: "Minimum / Maximum items checked",
    href: "#minimum-maximum-items-checked",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#minimum-maximum-items-checked"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "button-style",
    content: "Button style",
    href: "#button-style",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#button-style"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "with-borders",
    content: "With borders",
    href: "#with-borders",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#with-borders"
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
// CONCATENATED MODULE: ./website/docs/en-US/checkbox.md?vue&type=template&id=1cfdb884

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/checkbox.md?vue&type=script&lang=ts

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
// CONCATENATED MODULE: ./website/docs/en-US/checkbox.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/checkbox.md



checkboxvue_type_script_lang_ts.render = checkboxvue_type_template_id_1cfdb884_render

/* harmony default export */ var en_US_checkbox = __webpack_exports__["default"] = (checkboxvue_type_script_lang_ts);

/***/ })

}]);