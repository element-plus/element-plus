(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[194],{

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/switch.md?vue&type=template&id=0808b827

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "switch"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#switch"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Switch")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Switch est utilisé pour choisir entre deux états opposés.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Usage")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Liez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" à une variable de type "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Les attributs "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "active-color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inactive-color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" déterminent les couleurs des deux états.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-switch v-model=\"value1\"> </el-switch>\n<el-switch v-model=\"value2\" active-color=\"#13ce66\" inactive-color=\"#ff4949\">\n</el-switch>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: true,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "description"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#description"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Description")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilisez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "active-text"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inactive-text"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour afficher une description de chaque étape.")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-switch\n  v-model=\"value1\"\n  active-text=\"Paiement mensuel\"\n  inactive-text=\"Paiement annuel\"\n>\n</el-switch>\n<el-switch\n  style=\"display: block\"\n  v-model=\"value2\"\n  active-color=\"#13ce66\"\n  inactive-color=\"#ff4949\"\n  active-text=\"Paiement mensuel\"\n  inactive-text=\"Paiement annuel\"\n>\n</el-switch>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: true,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "valeurs-des-etats"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#valeurs-des-etats"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Valeurs des états")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Vous pouvez utiliser "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "active-value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inactive-value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour déterminer la valeur de chaque état. Ils prennent un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ou "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tooltip :content=\"'Valeur de l\\'état: ' + value\" placement=\"top\">\n  <el-switch\n    v-model=\"value\"\n    active-color=\"#13ce66\"\n    inactive-color=\"#ff4949\"\n    active-value=\"100\"\n    inactive-value=\"0\"\n  >\n  </el-switch>\n</el-tooltip>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: '100',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "desactive"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#desactive"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Désactivé")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Ajoutez l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour désactiver le switch.")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-switch v-model=\"value1\" disabled> </el-switch>\n<el-switch v-model=\"value2\" disabled> </el-switch>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: false,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "loading"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#loading"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Loading")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Setting the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "loading"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" indicates a loading state on the Switch.")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-switch v-model=\"value1\" loading> </el-switch>\n<el-switch v-model=\"value2\" loading> </el-switch>\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: false,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "empecher-la-commutation"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#empecher-la-commutation"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Empêcher la commutation")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Définissez la propriété "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "beforeChange"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Si elle renvoie false ou renvoie une promesse et est rejetée, le commutateur s'arrêtera.")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-switch v-model=\"value1\" :loading=\"loading1\" :beforeChange=\"beforeChange1\">\n</el-switch>\n<el-switch v-model=\"value2\" :loading=\"loading2\" :beforeChange=\"beforeChange2\">\n</el-switch>\n<script>\n  import { reactive, toRefs } from 'vue'\n  import { ElMessage } from 'element-plus'\n\n  export default {\n    setup() {\n      const status1 = reactive({\n        value1: false,\n        loading1: false,\n      })\n\n      const beforeChange1 = () => {\n        status1.loading1 = true\n        return new Promise(resolve => {\n          setTimeout(() => {\n            status1.loading1 = false\n            ElMessage.success('Basculer avec succès')\n            return resolve(true)\n          }, 1000)\n        })\n      }\n\n      const status2 = reactive({\n        value2: false,\n        loading2: false,\n      })\n\n      const beforeChange2 = () => {\n        status2.loading2 = true\n        return new Promise((resolve, reject) => {\n          setTimeout(() => {\n            status2.loading2 = false\n            ElMessage.error('Le commutateur a échoué')\n            return reject(new Error('error'))\n          }, 1000)\n        })\n      }\n\n      return {\n        ...toRefs(status1),\n        ...toRefs(status2),\n        beforeChange1,\n        beforeChange2,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributs\"><a class=\"header-anchor\" href=\"#attributs\">¶</a> Attributs</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>Valeur liée. Elle doit être équivalente à <code>active-value</code> ou <code>inactive-value</code>, par défaut elle est de type <code>boolean</code>.</td><td>boolean / string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>Si le switch est désactivé.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>loading</td><td>whether Switch is in loading state</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>width</td><td>Largeur du switch.</td><td>number</td><td>—</td><td>40</td></tr><tr><td>active-icon-class</td><td>Classe de l&#39;icône de l&#39;état <code>on</code>, écrase <code>active-text</code>.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inactive-icon-class</td><td>Classe de l&#39;icône de l&#39;état <code>off</code>, écrase <code>inactive-text</code>.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>active-text</td><td>Texte affiché dans l&#39;état <code>on</code>.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inactive-text</td><td>Texte affiché dans l&#39;état <code>off</code>.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>active-value</td><td>Valeur du switch dans l&#39;état <code>on</code>.</td><td>boolean / string / number</td><td>—</td><td>true</td></tr><tr><td>inactive-value</td><td>Valeur du switch dans l&#39;état <code>off</code>.</td><td>boolean / string / number</td><td>—</td><td>false</td></tr><tr><td>active-color</td><td>Couleur de fond de l&#39;état <code>on</code>.</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>inactive-color</td><td>Couleur de fond de l&#39;état <code>off</code>.</td><td>string</td><td>—</td><td>#C0CCDA</td></tr><tr><td>name</td><td>Nom du champ d&#39;input du switch.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>validate-event</td><td>Si la validation doit avoir lieu.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>before-change</td><td>Le hook avant le changement d&#39;état du commutateur. S&#39;il renvoie false ou renvoie une promesse et est rejeté, le commutateur s&#39;arrêtera.</td><td>function</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"evenements\"><a class=\"header-anchor\" href=\"#evenements\">¶</a> Évènements</h3><table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>change</td><td>Se déclenche quand la valeur change.</td><td>La valeur après changement.</td></tr></tbody></table><h3 id=\"methodes\"><a class=\"header-anchor\" href=\"#methodes\">¶</a> Méthodes</h3><table><thead><tr><th>Méthode</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>focus</td><td>Donne le focus au switch.</td><td>—</td></tr></tbody></table>", 6);

function switchvue_type_template_id_0808b827_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/switch.md?vue&type=template&id=0808b827

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/switch.md?vue&type=script&lang=ts


/* harmony default export */ var switchvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_switch = _resolveComponent("el-switch");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          "active-color": "#13ce66",
          "inactive-color": "#ff4949"
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: true,
            value2: true
          };
        }
      };
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
        var _component_el_switch = _resolveComponent("el-switch");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          "active-text": "Paiement mensuel",
          "inactive-text": "Paiement annuel"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
          style: {
            "display": "block"
          },
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          "active-color": "#13ce66",
          "inactive-color": "#ff4949",
          "active-text": "Paiement mensuel",
          "inactive-text": "Paiement annuel"
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: true,
            value2: true
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
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_switch = _resolveComponent("el-switch");

        var _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tooltip, {
          content: 'Valeur de l\'état: ' + _ctx.value,
          placement: "top"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_switch, {
              modelValue: _ctx.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                return _ctx.value = $event;
              }),
              "active-color": "#13ce66",
              "inactive-color": "#ff4949",
              "active-value": "100",
              "inactive-value": "0"
            }, null, 8, ["modelValue"])];
          }),
          _: 1
        }, 8, ["content"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: '100'
          };
        }
      };
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
        var _component_el_switch = _resolveComponent("el-switch");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          disabled: ""
        }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          disabled: ""
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: true,
            value2: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_switch = _resolveComponent("el-switch");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          loading: ""
        }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          loading: ""
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: true,
            value2: false
          };
        }
      };
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
        var _component_el_switch = _resolveComponent("el-switch");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          loading: _ctx.loading1,
          beforeChange: _ctx.beforeChange1
        }, null, 8, ["modelValue", "loading", "beforeChange"]), _createVNode(_component_el_switch, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          loading: _ctx.loading2,
          beforeChange: _ctx.beforeChange2
        }, null, 8, ["modelValue", "loading", "beforeChange"])]);
      }

      var reactive = vue_esm_browser["K" /* reactive */],
          toRefs = vue_esm_browser["W" /* toRefs */];

      var _require = __webpack_require__(18),
          ElMessage = _require.ElMessage;

      var democomponentExport = {
        setup: function setup() {
          var status1 = reactive({
            value1: false,
            loading1: false
          });

          var beforeChange1 = function beforeChange1() {
            status1.loading1 = true;
            return new Promise(function (resolve) {
              setTimeout(function () {
                status1.loading1 = false;
                ElMessage.success('Basculer avec succès');
                return resolve(true);
              }, 1000);
            });
          };

          var status2 = reactive({
            value2: false,
            loading2: false
          });

          var beforeChange2 = function beforeChange2() {
            status2.loading2 = true;
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                status2.loading2 = false;
                ElMessage.error('Le commutateur a échoué');
                return reject(new Error('error'));
              }, 1000);
            });
          };

          return extends_default()({}, toRefs(status1), toRefs(status2), {
            beforeChange1: beforeChange1,
            beforeChange2: beforeChange2
          });
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/switch.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/switch.md



switchvue_type_script_lang_ts.render = switchvue_type_template_id_0808b827_render

/* harmony default export */ var fr_FR_switch = __webpack_exports__["default"] = (switchvue_type_script_lang_ts);

/***/ })

}]);