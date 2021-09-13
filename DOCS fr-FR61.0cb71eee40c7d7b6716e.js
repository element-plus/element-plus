(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[203],{

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/tabs.md?vue&type=template&id=5d05d12e

const tabsvue_type_template_id_5d05d12e_hoisted_1 = {
  class: "content element-doc"
};

const tabsvue_type_template_id_5d05d12e_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tabs ");

const tabsvue_type_template_id_5d05d12e_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Divise des collections de données de types différents, mais reliées entre elles par un contexte ou un type global.", -1);

const tabsvue_type_template_id_5d05d12e_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Usage ");

const tabsvue_type_template_id_5d05d12e_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Onglets basiques.", -1);

const tabsvue_type_template_id_5d05d12e_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tabs fournit un outil de sélection des onglets. Par défaut, le premier onglet est sélectionné et actif mais vous pouvez activer n'importe lequel en réglant l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const tabsvue_type_template_id_5d05d12e_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-tabs v-model=\"activeName\" @tab-click=\"handleClick\">\n    <el-tab-pane label=\"User\" name=\"first\">Utilisateur</el-tab-pane>\n    <el-tab-pane label=\"Config\" name=\"second\">Config</el-tab-pane>\n    <el-tab-pane label=\"Role\" name=\"third\">Rôle</el-tab-pane>\n    <el-tab-pane label=\"Task\" name=\"fourth\">Tâche</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: 'first',\n      }\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event)\n      },\n    },\n  }\n</script>\n")], -1);

const tabsvue_type_template_id_5d05d12e_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Style carte ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Les onglets peuvent être stylisés comme des cartes.", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Mettez "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" à "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "card"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour avoir des onglets avec un style de carte.")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-tabs type=\"card\" @tab-click=\"handleClick\">\n    <el-tab-pane label=\"User\">Utilisateur</el-tab-pane>\n    <el-tab-pane label=\"Config\">Config</el-tab-pane>\n    <el-tab-pane label=\"Role\">Rôle</el-tab-pane>\n    <el-tab-pane label=\"Task\">Tâche</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: 'first',\n      }\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Style carte avec bordure ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Onglets avec style de carte et bordure.", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Mettez "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" à "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "border-card"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tabs type=\"border-card\">\n  <el-tab-pane label=\"User\">Utilisateur</el-tab-pane>\n  <el-tab-pane label=\"Config\">Config</el-tab-pane>\n  <el-tab-pane label=\"Role\">Rôle</el-tab-pane>\n  <el-tab-pane label=\"Task\">Tâche</el-tab-pane>\n</el-tabs>\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Position des onglets ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Vous pouvez utiliser "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "tab-position"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour régler la position des onglets.")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Il y a quatre positions différentes: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "tabPosition=\"left|right|top|bottom\"")])], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-radio-group v-model=\"tabPosition\" style=\"margin-bottom: 30px;\">\n    <el-radio-button label=\"top\">En haut</el-radio-button>\n    <el-radio-button label=\"right\">À droite</el-radio-button>\n    <el-radio-button label=\"bottom\">En bas</el-radio-button>\n    <el-radio-button label=\"left\">À gauche</el-radio-button>\n  </el-radio-group>\n\n  <el-tabs :tab-position=\"tabPosition\" style=\"height: 200px;\">\n    <el-tab-pane label=\"User\">Utilisateur</el-tab-pane>\n    <el-tab-pane label=\"Config\">Config</el-tab-pane>\n    <el-tab-pane label=\"Role\">Rôle</el-tab-pane>\n    <el-tab-pane label=\"Task\">Tâche</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tabPosition: 'left',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Onglet personnalisé ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Vous pouvez utiliser un slot pour customiser le label d'un onglet.", -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tabs type=\"border-card\">\n  <el-tab-pane>\n    <template #label>\n      <span><i class=\"el-icon-date\"></i> Route</span>\n    </template>\n    Route\n  </el-tab-pane>\n  <el-tab-pane label=\"Config\">Config</el-tab-pane>\n  <el-tab-pane label=\"Role\">Rôle</el-tab-pane>\n  <el-tab-pane label=\"Task\">Tâche</el-tab-pane>\n</el-tabs>\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Ajouter et supprimer des onglets ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Seuls les onglets de type carte supportent l'ajout et la suppression.", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tabs\n  v-model=\"editableTabsValue\"\n  type=\"card\"\n  editable\n  @edit=\"handleTabsEdit\"\n>\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [\n          {\n            title: 'Onglet 1',\n            name: '1',\n            content: \"Contenu de l'onglet 1\",\n          },\n          {\n            title: 'Onglet 2',\n            name: '2',\n            content: \"Contenu de l'onglet 2\",\n          },\n        ],\n        tabIndex: 2,\n      }\n    },\n    methods: {\n      handleTabsEdit(targetName, action) {\n        if (action === 'add') {\n          let newTabName = ++this.tabIndex + ''\n          this.editableTabs.push({\n            title: 'Nouvel onglet',\n            name: newTabName,\n            content: 'Contenu du nouvel onglet',\n          })\n          this.editableTabsValue = newTabName\n        }\n        if (action === 'remove') {\n          let tabs = this.editableTabs\n          let activeName = this.editableTabsValue\n          if (activeName === targetName) {\n            tabs.forEach((tab, index) => {\n              if (tab.name === targetName) {\n                let nextTab = tabs[index + 1] || tabs[index - 1]\n                if (nextTab) {\n                  activeName = nextTab.name\n                }\n              }\n            })\n          }\n\n          this.editableTabsValue = activeName\n          this.editableTabs = tabs.filter((tab) => tab.name !== targetName)\n        }\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Personnaliser le bouton d'ajout d'onglet ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div style=\"margin-bottom: 20px;\">\n  <el-button size=\"small\" @click=\"addTab(editableTabsValue)\">\n    Ajouter un onglet\n  </el-button>\n</div>\n<el-tabs\n  v-model=\"editableTabsValue\"\n  type=\"card\"\n  closable\n  @tab-remove=\"removeTab\"\n>\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [\n          {\n            title: 'Onglet 1',\n            name: '1',\n            content: \"Contenu de l'onglet 1\",\n          },\n          {\n            title: 'Onglet 2',\n            name: '2',\n            content: \"Contenu de l'onglet 2\",\n          },\n        ],\n        tabIndex: 2,\n      }\n    },\n    methods: {\n      addTab(targetName) {\n        let newTabName = ++this.tabIndex + ''\n        this.editableTabs.push({\n          title: 'Nouvel onglet',\n          name: newTabName,\n          content: 'Contenu du nouvel onglet',\n        })\n        this.editableTabsValue = newTabName\n      },\n      removeTab(targetName) {\n        let tabs = this.editableTabs\n        let activeName = this.editableTabsValue\n        if (activeName === targetName) {\n          tabs.forEach((tab, index) => {\n            if (tab.name === targetName) {\n              let nextTab = tabs[index + 1] || tabs[index - 1]\n              if (nextTab) {\n                activeName = nextTab.name\n              }\n            }\n          })\n        }\n\n        this.editableTabsValue = activeName\n        this.editableTabs = tabs.filter((tab) => tab.name !== targetName)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributs de Tabs ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>La valeur liée, nom de l&#39;onglet sélectionné.</td><td>string</td><td>—</td><td>Nom du premier onglet.</td></tr><tr><td>type</td><td>Type de l&#39;onglet.</td><td>string</td><td>card/border-card</td><td>—</td></tr><tr><td>closable</td><td>Si des onglets peuvent être supprimés.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>addable</td><td>Si des onglets peuvent être ajoutés.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>Si des onglets peuvent être ajoutés et supprimés.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>tab-position</td><td>Position des onglets.</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>Si la largeur des onglets s&#39;adapte au conteneur.</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>Fonction de hook avant de changer d&#39;onglet. Si <code>false</code> est retourné ou qu&#39;une <code>Promise</code> retournée et rejetée, le changement sera annulé.</td><td>Function(activeName, oldActiveName)</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Évènements de Tabs ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>tab-click</td><td>Se déclenche quand on clique sur un onglet.</td><td>clicked tab</td></tr><tr><td>tab-remove</td><td>Se déclenche quand on clique sur le bouton de suppression des onglets.</td><td>name of the removed tab</td></tr><tr><td>tab-add</td><td>Se déclenche quand on clique sur le bouton d&#39;ajout des onglets.</td><td>—</td></tr><tr><td>edit</td><td>Se déclenche quand on clique sur les boutons d&#39;ajout ou de suppression des onglets.</td><td>(targetName, action)</td></tr></tbody></table>", 1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributs de Tab-pane ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>label</td><td>Titre de l&#39;onglet.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>Si l&#39;onglet est désactivé.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>Identifiant correspondant au nom des onglets, utilisé par Tabs pour savoir quel est l&#39;onglet actif.</td><td>string</td><td>—</td><td>Numéro de l&#39;onglet dans l&#39;ordre d&#39;apparition, e.g. le premier est &#39;1&#39;.</td></tr><tr><td>closable</td><td>Si l&#39;onglet est supprimable.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lazy</td><td>Si le contenu de l&#39;onglet bénéficie du lazy-loading.</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tab-pane Slots ");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Tab-pane's content")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Tab-pane's label")])])], -1);

function tabsvue_type_template_id_5d05d12e_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", tabsvue_type_template_id_5d05d12e_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tabs",
    content: "Tabs",
    href: "#tabs",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tabsvue_type_template_id_5d05d12e_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tabs"
    })]),
    _: 1
  }), tabsvue_type_template_id_5d05d12e_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "usage",
    content: "Usage",
    href: "#usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tabsvue_type_template_id_5d05d12e_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#usage"
    })]),
    _: 1
  }), tabsvue_type_template_id_5d05d12e_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [tabsvue_type_template_id_5d05d12e_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tabsvue_type_template_id_5d05d12e_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "style-carte",
    content: "Style carte",
    href: "#style-carte",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tabsvue_type_template_id_5d05d12e_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#style-carte"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "style-carte-avec-bordure",
    content: "Style carte avec bordure",
    href: "#style-carte-avec-bordure",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#style-carte-avec-bordure"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "position-des-onglets",
    content: "Position des onglets",
    href: "#position-des-onglets",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#position-des-onglets"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "onglet-personnalise",
    content: "Onglet personnalisé",
    href: "#onglet-personnalise",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#onglet-personnalise"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ajouter-et-supprimer-des-onglets",
    content: "Ajouter et supprimer des onglets",
    href: "#ajouter-et-supprimer-des-onglets",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ajouter-et-supprimer-des-onglets"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "personnaliser-le-bouton-d-ajout-d-onglet",
    content: "Personnaliser le bouton d'ajout d'onglet",
    href: "#personnaliser-le-bouton-d-ajout-d-onglet",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#personnaliser-le-bouton-d-ajout-d-onglet"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributs-de-tabs",
    content: "Attributs de Tabs",
    href: "#attributs-de-tabs",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributs-de-tabs"
    })]),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "evenements-de-tabs",
    content: "Évènements de Tabs",
    href: "#evenements-de-tabs",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#evenements-de-tabs"
    })]),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributs-de-tab-pane",
    content: "Attributs de Tab-pane",
    href: "#attributs-de-tab-pane",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributs-de-tab-pane"
    })]),
    _: 1
  }), _hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tab-pane-slots",
    content: "Tab-pane Slots",
    href: "#tab-pane-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tab-pane-slots"
    })]),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/tabs.md?vue&type=template&id=5d05d12e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/tabs.md?vue&type=script&lang=ts

/* harmony default export */ var tabsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Utilisateur");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Rôle");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Tâche");

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          modelValue: _ctx.activeName,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.activeName = $event),
          onTabClick: _ctx.handleClick
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, {
            label: "User",
            name: "first"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Config",
            name: "second"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Role",
            name: "third"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Task",
            name: "fourth"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue", "onTabClick"])]);
      }

      const democomponentExport = {
        data() {
          return {
            activeName: 'first'
          };
        },

        methods: {
          handleClick(tab, event) {
            console.log(tab, event);
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
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Utilisateur");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Rôle");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Tâche");

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "card",
          onTabClick: _ctx.handleClick
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, {
            label: "User"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Config"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Role"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Task"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["onTabClick"])]);
      }

      const democomponentExport = {
        data() {
          return {
            activeName: 'first'
          };
        },

        methods: {
          handleClick(tab, event) {
            console.log(tab, event);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Utilisateur");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Rôle");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Tâche");

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "border-card"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, {
            label: "User"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Config"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Role"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Task"
          }, {
            default: _withCtx(() => [_hoisted_4]),
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
    }(),
    "element-demo3": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("En haut");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("À droite");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("En bas");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("À gauche");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Utilisateur");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("Config");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("Rôle");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("Tâche");

      function render(_ctx, _cache) {
        const _component_el_radio_button = _resolveComponent("el-radio-button");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.tabPosition,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.tabPosition = $event),
          style: {
            "margin-bottom": "30px"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_radio_button, {
            label: "top"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_radio_button, {
            label: "right"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_radio_button, {
            label: "bottom"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_radio_button, {
            label: "left"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_tabs, {
          "tab-position": _ctx.tabPosition,
          style: {
            "height": "200px"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, {
            label: "User"
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Config"
          }, {
            default: _withCtx(() => [_hoisted_6]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Role"
          }, {
            default: _withCtx(() => [_hoisted_7]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Task"
          }, {
            default: _withCtx(() => [_hoisted_8]),
            _: 1
          })]),
          _: 1
        }, 8, ["tab-position"])]);
      }

      const democomponentExport = {
        data() {
          return {
            tabPosition: 'left'
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
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("span", null, [/*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-date"
      }), /*#__PURE__*/_createTextVNode(" Route")], -1);

      const _hoisted_2 = /*#__PURE__*/_createTextVNode(" Route ");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Config");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Rôle");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Tâche");

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "border-card"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, null, {
            label: _withCtx(() => [_hoisted_1]),
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Config"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Role"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Task"
          }, {
            default: _withCtx(() => [_hoisted_5]),
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
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          modelValue: _ctx.editableTabsValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.editableTabsValue = $event),
          type: "card",
          editable: "",
          onEdit: _ctx.handleTabsEdit
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.editableTabs, (item, index) => {
            return _openBlock(), _createBlock(_component_el_tab_pane, {
              key: item.name,
              label: item.title,
              name: item.name
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(item.content), 1)]),
              _: 2
            }, 1032, ["label", "name"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue", "onEdit"])]);
      }

      const democomponentExport = {
        data() {
          return {
            editableTabsValue: '2',
            editableTabs: [{
              title: 'Onglet 1',
              name: '1',
              content: "Contenu de l'onglet 1"
            }, {
              title: 'Onglet 2',
              name: '2',
              content: "Contenu de l'onglet 2"
            }],
            tabIndex: 2
          };
        },

        methods: {
          handleTabsEdit(targetName, action) {
            if (action === 'add') {
              let newTabName = ++this.tabIndex + '';
              this.editableTabs.push({
                title: 'Nouvel onglet',
                name: newTabName,
                content: 'Contenu du nouvel onglet'
              });
              this.editableTabsValue = newTabName;
            }

            if (action === 'remove') {
              let tabs = this.editableTabs;
              let activeName = this.editableTabsValue;

              if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                  if (tab.name === targetName) {
                    let nextTab = tabs[index + 1] || tabs[index - 1];

                    if (nextTab) {
                      activeName = nextTab.name;
                    }
                  }
                });
              }

              this.editableTabsValue = activeName;
              this.editableTabs = tabs.filter(tab => tab.name !== targetName);
            }
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo6": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createBlock: _createBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        style: {
          "margin-bottom": "20px"
        }
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode(" Ajouter un onglet ");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_button, {
          size: "small",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.addTab(_ctx.editableTabsValue))
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        })]), _createVNode(_component_el_tabs, {
          modelValue: _ctx.editableTabsValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.editableTabsValue = $event),
          type: "card",
          closable: "",
          onTabRemove: _ctx.removeTab
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.editableTabs, (item, index) => {
            return _openBlock(), _createBlock(_component_el_tab_pane, {
              key: item.name,
              label: item.title,
              name: item.name
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(item.content), 1)]),
              _: 2
            }, 1032, ["label", "name"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue", "onTabRemove"])]);
      }

      const democomponentExport = {
        data() {
          return {
            editableTabsValue: '2',
            editableTabs: [{
              title: 'Onglet 1',
              name: '1',
              content: "Contenu de l'onglet 1"
            }, {
              title: 'Onglet 2',
              name: '2',
              content: "Contenu de l'onglet 2"
            }],
            tabIndex: 2
          };
        },

        methods: {
          addTab(targetName) {
            let newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
              title: 'Nouvel onglet',
              name: newTabName,
              content: 'Contenu du nouvel onglet'
            });
            this.editableTabsValue = newTabName;
          },

          removeTab(targetName) {
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;

            if (activeName === targetName) {
              tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                  let nextTab = tabs[index + 1] || tabs[index - 1];

                  if (nextTab) {
                    activeName = nextTab.name;
                  }
                }
              });
            }

            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== targetName);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/tabs.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/tabs.md



tabsvue_type_script_lang_ts.render = tabsvue_type_template_id_5d05d12e_render

/* harmony default export */ var tabs = __webpack_exports__["default"] = (tabsvue_type_script_lang_ts);

/***/ })

}]);