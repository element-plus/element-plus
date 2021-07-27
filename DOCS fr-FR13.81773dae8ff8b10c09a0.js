(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[150],{

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/collapse.md?vue&type=template&id=2caa11f0

var collapsevue_type_template_id_2caa11f0_hoisted_1 = {
  class: "content element-doc"
};

var collapsevue_type_template_id_2caa11f0_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h2", {
  id: "collapse"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#collapse"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Collapse")], -1);

var collapsevue_type_template_id_2caa11f0_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Utilisez Collapse pour stocker du contenu.", -1);

var collapsevue_type_template_id_2caa11f0_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "usage"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Usage")], -1);

var collapsevue_type_template_id_2caa11f0_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Vous pouvez agrandir plusieurs panneaux.", -1);

var collapsevue_type_template_id_2caa11f0_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-collapse v-model=\"activeNames\" @change=\"handleChange\">\n  <el-collapse-item title=\"Cohérence\" name=\"1\">\n    <div>Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs;</div>\n    <div>Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Feedback\" name=\"2\">\n    <div>Retour d'expérience: permets aux utilisateurs de percevoir clairement leurs opérations par le biais d'animations et d'effets interactifs.</div>\n    <div>Retour visuel: reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Efficacité\" name=\"3\">\n    <div>Simplifier le processus: garde chaque opération simple et intuitive.;</div>\n    <div>Clair et défini: énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement;</div>\n    <div>Facile à identifier: l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Controllabilité\" name=\"4\">\n    <div>Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs;</div>\n    <div>Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes.</div>\n  </el-collapse-item>\n</el-collapse>\n<script>\n  export default {\n    data() {\n      return {\n        activeNames: ['1']\n      };\n    },\n    methods: {\n      handleChange(val) {\n        console.log(val);\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const activeNames = ref(['1']);\n      const handleChange = (val) => {\n        console.log(val);\n      };\n      return {\n        activeNames,\n        handleChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var collapsevue_type_template_id_2caa11f0_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "accordeon"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#accordeon"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Accordéon")], -1);

var collapsevue_type_template_id_2caa11f0_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "En mode accordéon, un seul panneau peut être ouvert à la fois.", -1);

var collapsevue_type_template_id_2caa11f0_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Utilisez l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "accordion"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour activer le mode accordéon.")])], -1);

var collapsevue_type_template_id_2caa11f0_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-collapse v-model=\"activeName\" accordion>\n    <el-collapse-item title=\"Cohérence\" name=\"1\">\n      <div>Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs;</div>\n      <div>Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc.</div>\n    </el-collapse-item>\n    <el-collapse-item title=\"Feedback\" name=\"2\">\n      <div>Retour d'expèrience: permets aux utilisateurs de percevoir clairement leur opérations par le biais d'animations et d'effets interactifs.</div>\n      <div>Retour visuel: reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments.</div>\n    </el-collapse-item>\n    <el-collapse-item title=\"Efficacité\" name=\"3\">\n      <div>Simplifier le processus: garde chaque opération simple et intuitive.;</div>\n      <div>Clair et défini: énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement;</div>\n      <div>Facile à identifier: l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire.</div>\n    </el-collapse-item>\n    <el-collapse-item title=\"Controllabilité\" name=\"4\">\n      <div>Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs;</div>\n      <div>Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes.</div>\n    </el-collapse-item>\n</el-collapse>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: '1'\n      };\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const activeName = ref('1');\n\n      return {\n        activeName,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var collapsevue_type_template_id_2caa11f0_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "titre-personnalise"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#titre-personnalise"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Titre personnalisé")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("En plus de l'utilisation de l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", vous pouvez configurer les titres de panneau, ce qui rend possible l'ajout de contenu personnalisé, comme des icônes par exemple.")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-collapse accordion>\n  <el-collapse-item name=\"1\">\n    <template #title>\n      Cohérence<i class=\"header-icon el-icon-info\"></i>\n    </template>\n    <div>Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs;</div>\n    <div>Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Feedback\" name=\"2\">\n      <div>Retour d'expèrience: permets aux utilisateurs de percevoir clairement leur opérations par le biais d'animations et d'effets interactifs.</div>\n      <div>Retour visuel: reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Efficacité\" name=\"3\">\n      <div>Simplifier le processus: garde chaque opération simple et intuitive.;</div>\n      <div>Clair et défini: énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement;</div>\n      <div>Facile à identifier: l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Controllabilité\" name=\"4\">\n      <div>Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs;</div>\n      <div>Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes.</div>\n  </el-collapse-item>\n</el-collapse>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"attributs-de-collapse\"><a class=\"header-anchor\" href=\"#attributs-de-collapse\">¶</a> Attributs de Collapse</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>Le panneau actuellement activé.</td><td>string (en mode accordéon) / array (en mode normal)</td><td>—</td><td>—</td></tr><tr><td>accordion</td><td>Active le mode accordéon.</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"evenements-de-collapse\"><a class=\"header-anchor\" href=\"#evenements-de-collapse\">¶</a> Évènements de Collapse</h3><table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>change</td><td>Se déclenche quand un panneau est activé / désactivé.</td><td>(activeNames: array (en mode normal) / string (en mode accordéon))</td></tr></tbody></table><h3 id=\"attributs-de-collapse-item\"><a class=\"header-anchor\" href=\"#attributs-de-collapse-item\">¶</a> Attributs de Collapse-Item</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>name</td><td>Identifiant unique du panneau.</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>title</td><td>Titre du panneau.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>Désactive le panneau.</td><td>boolean</td><td>—</td><td>—</td></tr></tbody></table>", 6);

function collapsevue_type_template_id_2caa11f0_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", collapsevue_type_template_id_2caa11f0_hoisted_1, [collapsevue_type_template_id_2caa11f0_hoisted_2, collapsevue_type_template_id_2caa11f0_hoisted_3, collapsevue_type_template_id_2caa11f0_hoisted_4, collapsevue_type_template_id_2caa11f0_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [collapsevue_type_template_id_2caa11f0_hoisted_6];
    }),
    _: 1
  }), collapsevue_type_template_id_2caa11f0_hoisted_7, collapsevue_type_template_id_2caa11f0_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [collapsevue_type_template_id_2caa11f0_hoisted_10];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [collapsevue_type_template_id_2caa11f0_hoisted_9];
    }),
    _: 1
  }), collapsevue_type_template_id_2caa11f0_hoisted_11, _hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/collapse.md?vue&type=template&id=2caa11f0

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/collapse.md?vue&type=script&lang=ts


/* harmony default export */ var collapsevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", null, "Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs;", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", null, "Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc.", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", null, "Retour d'expérience: permets aux utilisateurs de percevoir clairement leurs opérations par le biais d'animations et d'effets interactifs.", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", null, "Retour visuel: reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments.", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", null, "Simplifier le processus: garde chaque opération simple et intuitive.;", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", null, "Clair et défini: énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement;", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", null, "Facile à identifier: l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire.", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", null, "Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs;", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", null, "Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes.", -1);

      function render(_ctx, _cache) {
        var _component_el_collapse_item = _resolveComponent("el-collapse-item");

        var _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_collapse, {
          modelValue: _ctx.activeNames,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.activeNames = $event;
          }),
          onChange: _ctx.handleChange
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_collapse_item, {
              title: "Cohérence",
              name: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Feedback",
              name: "2"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3, _hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Efficacité",
              name: "3"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5, _hoisted_6, _hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Controllabilité",
              name: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8, _hoisted_9];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue", "onChange"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeNames: ['1']
          };
        },
        methods: {
          handleChange: function handleChange(val) {
            console.log(val);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", null, "Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs;", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", null, "Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc.", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", null, "Retour d'expèrience: permets aux utilisateurs de percevoir clairement leur opérations par le biais d'animations et d'effets interactifs.", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", null, "Retour visuel: reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments.", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", null, "Simplifier le processus: garde chaque opération simple et intuitive.;", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", null, "Clair et défini: énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement;", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", null, "Facile à identifier: l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire.", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", null, "Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs;", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", null, "Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes.", -1);

      function render(_ctx, _cache) {
        var _component_el_collapse_item = _resolveComponent("el-collapse-item");

        var _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_collapse, {
          modelValue: _ctx.activeName,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.activeName = $event;
          }),
          accordion: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_collapse_item, {
              title: "Cohérence",
              name: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Feedback",
              name: "2"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3, _hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Efficacité",
              name: "3"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5, _hoisted_6, _hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Controllabilité",
              name: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8, _hoisted_9];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeName: '1'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Cohérence");

      var _hoisted_2 = /*#__PURE__*/_createVNode("i", {
        class: "header-icon el-icon-info"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", null, "Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs;", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", null, "Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc.", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", null, "Retour d'expèrience: permets aux utilisateurs de percevoir clairement leur opérations par le biais d'animations et d'effets interactifs.", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", null, "Retour visuel: reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments.", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", null, "Simplifier le processus: garde chaque opération simple et intuitive.;", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", null, "Clair et défini: énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement;", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", null, "Facile à identifier: l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire.", -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("div", null, "Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs;", -1);

      var _hoisted_11 = /*#__PURE__*/_createVNode("div", null, "Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes.", -1);

      function render(_ctx, _cache) {
        var _component_el_collapse_item = _resolveComponent("el-collapse-item");

        var _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_collapse, {
          accordion: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_collapse_item, {
              name: "1"
            }, {
              title: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              default: _withCtx(function () {
                return [_hoisted_3, _hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Feedback",
              name: "2"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5, _hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Efficacité",
              name: "3"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7, _hoisted_8, _hoisted_9];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Controllabilité",
              name: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_10, _hoisted_11];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/collapse.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/collapse.md



collapsevue_type_script_lang_ts.render = collapsevue_type_template_id_2caa11f0_render

/* harmony default export */ var collapse = __webpack_exports__["default"] = (collapsevue_type_script_lang_ts);

/***/ })

}]);