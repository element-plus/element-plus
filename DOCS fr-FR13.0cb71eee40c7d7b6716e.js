(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[150],{

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/collapse.md?vue&type=template&id=38c968ee

const collapsevue_type_template_id_38c968ee_hoisted_1 = {
  class: "content element-doc"
};

const collapsevue_type_template_id_38c968ee_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Collapse ");

const collapsevue_type_template_id_38c968ee_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Utilisez Collapse pour stocker du contenu.", -1);

const collapsevue_type_template_id_38c968ee_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Usage ");

const collapsevue_type_template_id_38c968ee_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Vous pouvez agrandir plusieurs panneaux.", -1);

const collapsevue_type_template_id_38c968ee_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-collapse v-model=\"activeNames\" @change=\"handleChange\">\n  <el-collapse-item title=\"Cohérence\" name=\"1\">\n    <div>\n      Cohérence avec la vraie vie: en accord avec les processus habituels de la\n      vie réelle, conforme aux langages et habitudes des utilisateurs;\n    </div>\n    <div>\n      Cohérence au sein de l'interface: tout les éléments doivent être cohérents\n      entre eux et suivre les mêmes règles, par exemple: le style global, les\n      icônes, la position des éléments, etc.\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Feedback\" name=\"2\">\n    <div>\n      Retour d'expérience: permets aux utilisateurs de percevoir clairement\n      leurs opérations par le biais d'animations et d'effets interactifs.\n    </div>\n    <div>\n      Retour visuel: reflète l'état actuel de la page via le réarrangement ou la\n      mise à jour des éléments.\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Efficacité\" name=\"3\">\n    <div>\n      Simplifier le processus: garde chaque opération simple et intuitive.;\n    </div>\n    <div>\n      Clair et défini: énonce clairement ses intentions afin que l'utilisateur\n      puisse comprendre et prendre une décision rapidement;\n    </div>\n    <div>\n      Facile à identifier: l'interface devrait être simple et facile d'accès,\n      afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire.\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Controllabilité\" name=\"4\">\n    <div>\n      Prise de décision: possibilité de donner des conseils sur les opérations,\n      mais ne jamais prendre de décisions à la place des utilisateurs;\n    </div>\n    <div>\n      Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler\n      l'exécution de leurs opérations, y compris l'annulation et la suppression\n      des opérations courantes.\n    </div>\n  </el-collapse-item>\n</el-collapse>\n<script>\n  export default {\n    data() {\n      return {\n        activeNames: ['1'],\n      }\n    },\n    methods: {\n      handleChange(val) {\n        console.log(val)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const activeNames = ref(['1']);\n      const handleChange = (val) => {\n        console.log(val);\n      };\n      return {\n        activeNames,\n        handleChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const collapsevue_type_template_id_38c968ee_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Accordéon ");

const collapsevue_type_template_id_38c968ee_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "En mode accordéon, un seul panneau peut être ouvert à la fois.", -1);

const collapsevue_type_template_id_38c968ee_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Utilisez l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "accordion"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour activer le mode accordéon.")])], -1);

const collapsevue_type_template_id_38c968ee_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-collapse v-model=\"activeName\" accordion>\n  <el-collapse-item title=\"Cohérence\" name=\"1\">\n    <div>\n      Cohérence avec la vraie vie: en accord avec les processus habituels de la\n      vie réelle, conforme aux langages et habitudes des utilisateurs;\n    </div>\n    <div>\n      Cohérence au sein de l'interface: tout les éléments doivent être cohérents\n      entre eux et suivre les mêmes règles, par exemple: le style global, les\n      icônes, la position des éléments, etc.\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Feedback\" name=\"2\">\n    <div>\n      Retour d'expèrience: permets aux utilisateurs de percevoir clairement leur\n      opérations par le biais d'animations et d'effets interactifs.\n    </div>\n    <div>\n      Retour visuel: reflète l'état actuel de la page via le réarrangement ou la\n      mise à jour des éléments.\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Efficacité\" name=\"3\">\n    <div>\n      Simplifier le processus: garde chaque opération simple et intuitive.;\n    </div>\n    <div>\n      Clair et défini: énonce clairement ses intentions afin que l'utilisateur\n      puisse comprendre et prendre une décision rapidement;\n    </div>\n    <div>\n      Facile à identifier: l'interface devrait être simple et facile d'accès,\n      afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire.\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Controllabilité\" name=\"4\">\n    <div>\n      Prise de décision: possibilité de donner des conseils sur les opérations,\n      mais ne jamais prendre de décisions à la place des utilisateurs;\n    </div>\n    <div>\n      Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler\n      l'exécution de leurs opérations, y compris l'annulation et la suppression\n      des opérations courantes.\n    </div>\n  </el-collapse-item>\n</el-collapse>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: '1',\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const activeName = ref('1');\n\n      return {\n        activeName,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const collapsevue_type_template_id_38c968ee_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Titre personnalisé ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("En plus de l'utilisation de l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", vous pouvez configurer les titres de panneau, ce qui rend possible l'ajout de contenu personnalisé, comme des icônes par exemple.")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-collapse accordion>\n  <el-collapse-item name=\"1\">\n    <template #title>\n      Cohérence<i class=\"header-icon el-icon-info\"></i>\n    </template>\n    <div>\n      Cohérence avec la vraie vie: en accord avec les processus habituels de la\n      vie réelle, conforme aux langages et habitudes des utilisateurs;\n    </div>\n    <div>\n      Cohérence au sein de l'interface: tout les éléments doivent être cohérents\n      entre eux et suivre les mêmes règles, par exemple: le style global, les\n      icônes, la position des éléments, etc.\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Feedback\" name=\"2\">\n    <div>\n      Retour d'expèrience: permets aux utilisateurs de percevoir clairement leur\n      opérations par le biais d'animations et d'effets interactifs.\n    </div>\n    <div>\n      Retour visuel: reflète l'état actuel de la page via le réarrangement ou la\n      mise à jour des éléments.\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Efficacité\" name=\"3\">\n    <div>\n      Simplifier le processus: garde chaque opération simple et intuitive.;\n    </div>\n    <div>\n      Clair et défini: énonce clairement ses intentions afin que l'utilisateur\n      puisse comprendre et prendre une décision rapidement;\n    </div>\n    <div>\n      Facile à identifier: l'interface devrait être simple et facile d'accès,\n      afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire.\n    </div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Controllabilité\" name=\"4\">\n    <div>\n      Prise de décision: possibilité de donner des conseils sur les opérations,\n      mais ne jamais prendre de décisions à la place des utilisateurs;\n    </div>\n    <div>\n      Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler\n      l'exécution de leurs opérations, y compris l'annulation et la suppression\n      des opérations courantes.\n    </div>\n  </el-collapse-item>\n</el-collapse>\n")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributs de Collapse ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>Le panneau actuellement activé.</td><td>string (en mode accordéon) / array (en mode normal)</td><td>—</td><td>—</td></tr><tr><td>accordion</td><td>Active le mode accordéon.</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Évènements de Collapse ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Nom"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Paramètres")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Se déclenche quand un panneau est activé / désactivé."), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "(activeNames: array (en mode normal) / string (en mode accordéon))")])])], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributs de Collapse-Item ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>name</td><td>Identifiant unique du panneau.</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>title</td><td>Titre du panneau.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>Désactive le panneau.</td><td>boolean</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Collapse Item Slot ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Nom"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Contenu du Collapse Item")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Contenu du Collapse Item")])])], -1);

function collapsevue_type_template_id_38c968ee_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", collapsevue_type_template_id_38c968ee_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "collapse",
    content: "Collapse",
    href: "#collapse",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_38c968ee_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#collapse"
    })]),
    _: 1
  }), collapsevue_type_template_id_38c968ee_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "usage",
    content: "Usage",
    href: "#usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_38c968ee_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#usage"
    })]),
    _: 1
  }), collapsevue_type_template_id_38c968ee_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_38c968ee_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "accordeon",
    content: "Accordéon",
    href: "#accordeon",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_38c968ee_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#accordeon"
    })]),
    _: 1
  }), collapsevue_type_template_id_38c968ee_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_38c968ee_hoisted_10]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_38c968ee_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "titre-personnalise",
    content: "Titre personnalisé",
    href: "#titre-personnalise",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [collapsevue_type_template_id_38c968ee_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#titre-personnalise"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributs-de-collapse",
    content: "Attributs de Collapse",
    href: "#attributs-de-collapse",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributs-de-collapse"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "evenements-de-collapse",
    content: "Évènements de Collapse",
    href: "#evenements-de-collapse",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#evenements-de-collapse"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributs-de-collapse-item",
    content: "Attributs de Collapse-Item",
    href: "#attributs-de-collapse-item",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributs-de-collapse-item"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "collapse-item-slot",
    content: "Collapse Item Slot",
    href: "#collapse-item-slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#collapse-item-slot"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/collapse.md?vue&type=template&id=38c968ee

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/collapse.md?vue&type=script&lang=ts

/* harmony default export */ var collapsevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", null, " Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs; ", -1);

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", null, " Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc. ", -1);

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", null, " Retour d'expérience: permets aux utilisateurs de percevoir clairement leurs opérations par le biais d'animations et d'effets interactifs. ", -1);

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("div", null, " Retour visuel: reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments. ", -1);

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("div", null, " Simplifier le processus: garde chaque opération simple et intuitive.; ", -1);

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("div", null, " Clair et défini: énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement; ", -1);

      const _hoisted_7 = /*#__PURE__*/_createElementVNode("div", null, " Facile à identifier: l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire. ", -1);

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("div", null, " Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs; ", -1);

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("div", null, " Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes. ", -1);

      function render(_ctx, _cache) {
        const _component_el_collapse_item = _resolveComponent("el-collapse-item");

        const _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_collapse, {
          modelValue: _ctx.activeNames,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.activeNames = $event),
          onChange: _ctx.handleChange
        }, {
          default: _withCtx(() => [_createVNode(_component_el_collapse_item, {
            title: "Cohérence",
            name: "1"
          }, {
            default: _withCtx(() => [_hoisted_1, _hoisted_2]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "Feedback",
            name: "2"
          }, {
            default: _withCtx(() => [_hoisted_3, _hoisted_4]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "Efficacité",
            name: "3"
          }, {
            default: _withCtx(() => [_hoisted_5, _hoisted_6, _hoisted_7]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "Controllabilité",
            name: "4"
          }, {
            default: _withCtx(() => [_hoisted_8, _hoisted_9]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue", "onChange"])]);
      }

      const democomponentExport = {
        data() {
          return {
            activeNames: ['1']
          };
        },

        methods: {
          handleChange(val) {
            console.log(val);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", null, " Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs; ", -1);

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", null, " Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc. ", -1);

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", null, " Retour d'expèrience: permets aux utilisateurs de percevoir clairement leur opérations par le biais d'animations et d'effets interactifs. ", -1);

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("div", null, " Retour visuel: reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments. ", -1);

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("div", null, " Simplifier le processus: garde chaque opération simple et intuitive.; ", -1);

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("div", null, " Clair et défini: énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement; ", -1);

      const _hoisted_7 = /*#__PURE__*/_createElementVNode("div", null, " Facile à identifier: l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire. ", -1);

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("div", null, " Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs; ", -1);

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("div", null, " Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes. ", -1);

      function render(_ctx, _cache) {
        const _component_el_collapse_item = _resolveComponent("el-collapse-item");

        const _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_collapse, {
          modelValue: _ctx.activeName,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.activeName = $event),
          accordion: ""
        }, {
          default: _withCtx(() => [_createVNode(_component_el_collapse_item, {
            title: "Cohérence",
            name: "1"
          }, {
            default: _withCtx(() => [_hoisted_1, _hoisted_2]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "Feedback",
            name: "2"
          }, {
            default: _withCtx(() => [_hoisted_3, _hoisted_4]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "Efficacité",
            name: "3"
          }, {
            default: _withCtx(() => [_hoisted_5, _hoisted_6, _hoisted_7]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "Controllabilité",
            name: "4"
          }, {
            default: _withCtx(() => [_hoisted_8, _hoisted_9]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            activeName: '1'
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
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" Cohérence");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("i", {
        class: "header-icon el-icon-info"
      }, null, -1);

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", null, " Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs; ", -1);

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("div", null, " Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc. ", -1);

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("div", null, " Retour d'expèrience: permets aux utilisateurs de percevoir clairement leur opérations par le biais d'animations et d'effets interactifs. ", -1);

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("div", null, " Retour visuel: reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments. ", -1);

      const _hoisted_7 = /*#__PURE__*/_createElementVNode("div", null, " Simplifier le processus: garde chaque opération simple et intuitive.; ", -1);

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("div", null, " Clair et défini: énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement; ", -1);

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("div", null, " Facile à identifier: l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire. ", -1);

      const _hoisted_10 = /*#__PURE__*/_createElementVNode("div", null, " Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs; ", -1);

      const _hoisted_11 = /*#__PURE__*/_createElementVNode("div", null, " Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes. ", -1);

      function render(_ctx, _cache) {
        const _component_el_collapse_item = _resolveComponent("el-collapse-item");

        const _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_collapse, {
          accordion: ""
        }, {
          default: _withCtx(() => [_createVNode(_component_el_collapse_item, {
            name: "1"
          }, {
            title: _withCtx(() => [_hoisted_1, _hoisted_2]),
            default: _withCtx(() => [_hoisted_3, _hoisted_4]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "Feedback",
            name: "2"
          }, {
            default: _withCtx(() => [_hoisted_5, _hoisted_6]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "Efficacité",
            name: "3"
          }, {
            default: _withCtx(() => [_hoisted_7, _hoisted_8, _hoisted_9]),
            _: 1
          }), _createVNode(_component_el_collapse_item, {
            title: "Controllabilité",
            name: "4"
          }, {
            default: _withCtx(() => [_hoisted_10, _hoisted_11]),
            _: 1
          })]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/collapse.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/collapse.md



collapsevue_type_script_lang_ts.render = collapsevue_type_template_id_38c968ee_render

/* harmony default export */ var collapse = __webpack_exports__["default"] = (collapsevue_type_script_lang_ts);

/***/ })

}]);