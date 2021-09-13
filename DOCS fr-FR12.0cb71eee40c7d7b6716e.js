(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[149],{

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/checkbox.md?vue&type=template&id=d7b78dae

const checkboxvue_type_template_id_d7b78dae_hoisted_1 = {
  class: "content element-doc"
};

const checkboxvue_type_template_id_d7b78dae_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox ");

const checkboxvue_type_template_id_d7b78dae_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Un groupe d'options à choix multiples.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Usage ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Checkbox peut être utilisé seul pour switcher entre deux états.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Définissez "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (variable liée) dans "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". La valeur par défaut est un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour une seule "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" et devient "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" quand elle est sélectionnée. Le contenu à l'intérieur de la balise "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" deviendra le label du bouton de la checkbox.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox v-model=\"checked1\" label=\"Option 1\"></el-checkbox>\n    <el-checkbox v-model=\"checked2\" label=\"Option 2\"></el-checkbox>\n  </div>\n  <div>\n    <el-checkbox\n      v-model=\"checked3\"\n      label=\"Option 1\"\n      size=\"medium\"\n    ></el-checkbox>\n    <el-checkbox\n      v-model=\"checked4\"\n      label=\"Option 2\"\n      size=\"medium\"\n    ></el-checkbox>\n  </div>\n  <div>\n    <el-checkbox v-model=\"checked5\" label=\"Option 1\" size=\"small\"></el-checkbox>\n    <el-checkbox v-model=\"checked6\" label=\"Option 2\" size=\"small\"></el-checkbox>\n  </div>\n  <div>\n    <el-checkbox v-model=\"checked7\" label=\"Option 1\" size=\"mini\"></el-checkbox>\n    <el-checkbox v-model=\"checked8\" label=\"Option 2\" size=\"mini\"></el-checkbox>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: false,\n        checked5: false,\n        checked6: false,\n        checked7: false,\n        checked8: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checked1 = ref(true);\n      const checked2 = ref(false);\n      const checked3 = ref(false);\n      const checked4 = ref(false);\n      const checked5 = ref(false);\n      const checked6 = ref(false);\n      const checked7 = ref(false);\n      const checked8 = ref(false);\n      return {\n        checked1,\n        checked2,\n        checked3,\n        checked4,\n        checked5,\n        checked6,\n        checked7,\n        checked8,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Désactivation ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "La checkbox peut être désactivée.", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Ajouter l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox v-model=\"checked1\" disabled>Option</el-checkbox>\n  <el-checkbox v-model=\"checked2\" disabled>Option</el-checkbox>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked1: false,\n        checked2: true,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checked1 = ref(false);\n      const checked2 = ref(true);\n      return {\n        checked1,\n        checked2,\n      };\n    },\n  });\n</setup>\n-->\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox groupées ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Utile pour grouper des checkbox, indiquant si une option est sélectionnée en vérifiant la case en question.", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("L'élément "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "checkbox-group"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" peut gérer plusieurs checkbox d'un groupe en utilisant "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", qui sera un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Array"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Dans l'élément "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" est la valeur de la checkbox. S'il n'y a aucun contenu dans la balise, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" sera également la description de la checkbox. "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" correspond aussi aux valeurs des éléments dans le tableau. Il est sélectionné si la valeur spécifiée existe dans le tableau, et vice-versa.")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox-group v-model=\"checkList\">\n    <el-checkbox label=\"Option A\"></el-checkbox>\n    <el-checkbox label=\"Option B\"></el-checkbox>\n    <el-checkbox label=\"Option C\"></el-checkbox>\n    <el-checkbox label=\"Désactivée\" disabled></el-checkbox>\n    <el-checkbox label=\"Sélectionnée et désactivée\" disabled></el-checkbox>\n  </el-checkbox-group>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        checkList: ['selected and disabled', 'Option A'],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checkList = ref(['selected and disabled','Option A']);\n      return {\n        checkList,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Indéterminée ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("La propriété "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "indeterminate"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" permet de réaliser un effet \"Sélectionner tout\".")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox\n    :indeterminate=\"isIndeterminate\"\n    v-model=\"checkAll\"\n    @change=\"handleCheckAllChange\"\n    >Sélectionner tout</el-checkbox\n  >\n  <el-checkbox-group\n    v-model=\"checkedCities\"\n    @change=\"handleCheckedCitiesChange\"\n  >\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n      >{{city}}</el-checkbox\n    >\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']\n  export default {\n    data() {\n      return {\n        checkAll: false,\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n        isIndeterminate: true,\n      }\n    },\n    methods: {\n      handleCheckAllChange(val) {\n        this.checkedCities = val ? cityOptions : []\n        this.isIndeterminate = false\n      },\n      handleCheckedCitiesChange(value) {\n        let checkedCount = value.length\n        this.checkAll = checkedCount === this.cities.length\n        this.isIndeterminate =\n          checkedCount > 0 && checkedCount < this.cities.length\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checkAll: false,\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n        isIndeterminate: true,\n      });\n      const handleCheckAllChange = (val) => {\n        state.checkedCities = val ? cityOptions : [];\n        state.isIndeterminate = false;\n      };\n      const handleCheckedCitiesChange = (value) => {\n        const checkedCount = value.length;\n        state.checkAll = checkedCount === state.cities.length;\n        state.isIndeterminate = checkedCount > 0 && checkedCount < state.cities.length;\n      };\n      return {\n        ...toRefs(state),\n        handleCheckAllChange,\n        handleCheckedCitiesChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Minimum / Maximum d'éléments sélectionnés ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Les propriétés "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "min"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" permettent de limiter la quantité d'éléments sélectionnés.")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox-group v-model=\"checkedCities\" :min=\"1\" :max=\"2\">\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n      >{{city}}</el-checkbox\n    >\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']\n  export default {\n    data() {\n      return {\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Style bouton ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Des checkbox avec une apparence de bouton.", -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Il vous suffit de changer "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox-button"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Il existe aussi un attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox-group v-model=\"checkboxGroup1\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup2\" size=\"medium\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup3\" size=\"small\">\n      <el-checkbox-button\n        v-for=\"city in cities\"\n        :label=\"city\"\n        :disabled=\"city === 'Beijing'\"\n        :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup4\" size=\"mini\" disabled>\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']\n\n  export default {\n    data() {\n      return {\n        checkboxGroup1: ['Shanghai'],\n        checkboxGroup2: ['Shanghai'],\n        checkboxGroup3: ['Shanghai'],\n        checkboxGroup4: ['Shanghai'],\n        cities: cityOptions,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nconst cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      checkboxGroup1: ['Shanghai'],\n      checkboxGroup2: ['Shanghai'],\n      checkboxGroup3: ['Shanghai'],\n      checkboxGroup4: ['Shanghai'],\n      cities: cityOptions,\n    });\n\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bordures ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("L'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "border"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" ajoute une bordure aux checkbox.")])], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox v-model=\"checked1\" label=\"Option1\" border></el-checkbox>\n    <el-checkbox v-model=\"checked2\" label=\"Option2\" border></el-checkbox>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox\n      v-model=\"checked3\"\n      label=\"Option1\"\n      border\n      size=\"medium\"\n    ></el-checkbox>\n    <el-checkbox\n      v-model=\"checked4\"\n      label=\"Option2\"\n      border\n      size=\"medium\"\n    ></el-checkbox>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup1\" size=\"small\">\n      <el-checkbox label=\"Option1\" border></el-checkbox>\n      <el-checkbox label=\"Option2\" border disabled></el-checkbox>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup2\" size=\"mini\" disabled>\n      <el-checkbox label=\"Option1\" border></el-checkbox>\n      <el-checkbox label=\"Option2\" border></el-checkbox>\n    </el-checkbox-group>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: true,\n        checkboxGroup1: [],\n        checkboxGroup2: [],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: true,\n        checkboxGroup1: [],\n        checkboxGroup2: [],\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributs Checkbox ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Options</th><th>Défaut</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>La valeur liée.</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>label</td><td>Valeur de la checkbox quand utilisée dans un <code>checkbox-group</code>.</td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>Valeur de la checkbox si cochée.</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>Valeur de la checkbox si non cochée.</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>Désactive la checkbox.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>Ajoute une bordure à la checkbox.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>taille de la checkbox</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>name</td><td>Attribut &#39;name&#39; natif.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>Si la checkbox est cochée.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indeterminate</td><td>Identique à <code>indeterminate</code> dans les checkbox natives.</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Évènements Checkbox ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Nom"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Paramètres")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Se déclenche quand la valeur change."), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "La nouvelle valeur")])])], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributs Checkbox-group ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Options</th><th>Défaut</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>La valeur liée.</td><td>array</td><td>—</td><td>—</td></tr><tr><td>size</td><td>size of checkbox</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>disabled</td><td>Si les checkbox imbriquées sont désactivées.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>min</td><td>Nombre minimum de checkbox cochées.</td><td>number</td><td>—</td><td>—</td></tr><tr><td>max</td><td>Nombre maximum de checkbox cochées.</td><td>number</td><td>—</td><td>—</td></tr><tr><td>text-color</td><td>Couleur de police quand le bouton est actif.</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>fill</td><td>Couleur de la bordure et du fond quand le bouton est actif.</td><td>string</td><td>—</td><td>#409EFF</td></tr></tbody></table>", 1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Évènements Checkbox-group ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Nom"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Paramètres")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Se déclenche quand la valeur change."), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "La nouvelle valeur")])])], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributs Checkbox-button ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Options</th><th>Défaut</th></tr></thead><tbody><tr><td>label</td><td>Valeur de la checkbox quand utilisée dans un <code>checkbox-group</code></td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>Valeur de la checkbox si cochée.</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>Valeur de la checkbox si non cochée.</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>Si la checkbox est désactivée.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>Attribut &#39;name&#39; natif.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>Si la checkbox est cochée.</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

function checkboxvue_type_template_id_d7b78dae_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", checkboxvue_type_template_id_d7b78dae_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox",
    content: "Checkbox",
    href: "#checkbox",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [checkboxvue_type_template_id_d7b78dae_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox"
    })]),
    _: 1
  }), checkboxvue_type_template_id_d7b78dae_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "usage",
    content: "Usage",
    href: "#usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#usage"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "desactivation",
    content: "Désactivation",
    href: "#desactivation",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#desactivation"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox-groupees",
    content: "Checkbox groupées",
    href: "#checkbox-groupees",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox-groupees"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "indeterminee",
    content: "Indéterminée",
    href: "#indeterminee",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#indeterminee"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "minimum-maximum-d-elements-selectionnes",
    content: "Minimum / Maximum d'éléments sélectionnés",
    href: "#minimum-maximum-d-elements-selectionnes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#minimum-maximum-d-elements-selectionnes"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "style-bouton",
    content: "Style bouton",
    href: "#style-bouton",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#style-bouton"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bordures",
    content: "Bordures",
    href: "#bordures",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bordures"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributs-checkbox",
    content: "Attributs Checkbox",
    href: "#attributs-checkbox",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributs-checkbox"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "evenements-checkbox",
    content: "Évènements Checkbox",
    href: "#evenements-checkbox",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#evenements-checkbox"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributs-checkbox-group",
    content: "Attributs Checkbox-group",
    href: "#attributs-checkbox-group",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributs-checkbox-group"
    })]),
    _: 1
  }), _hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "evenements-checkbox-group",
    content: "Évènements Checkbox-group",
    href: "#evenements-checkbox-group",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#evenements-checkbox-group"
    })]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributs-checkbox-button",
    content: "Attributs Checkbox-button",
    href: "#attributs-checkbox-button",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributs-checkbox-button"
    })]),
    _: 1
  }), _hoisted_38, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/checkbox.md?vue&type=template&id=d7b78dae

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/checkbox.md?vue&type=script&lang=ts

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
            label: "Désactivée",
            disabled: ""
          }), _createVNode(_component_el_checkbox, {
            label: "Sélectionnée et désactivée",
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Sélectionner tout");

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
// CONCATENATED MODULE: ./website/docs/fr-FR/checkbox.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/checkbox.md



checkboxvue_type_script_lang_ts.render = checkboxvue_type_template_id_d7b78dae_render

/* harmony default export */ var fr_FR_checkbox = __webpack_exports__["default"] = (checkboxvue_type_script_lang_ts);

/***/ })

}]);