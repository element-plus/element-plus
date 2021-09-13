(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[184],{

/***/ 930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/pagination.md?vue&type=template&id=0d7ed8d8

const paginationvue_type_template_id_0d7ed8d8_hoisted_1 = {
  class: "content element-doc"
};

const paginationvue_type_template_id_0d7ed8d8_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Pagination ");

const paginationvue_type_template_id_0d7ed8d8_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Si vous avez beaucoup de données à afficher sur une seule page, il est préférable d'utiliser une pagination.", -1);

const paginationvue_type_template_id_0d7ed8d8_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Usage ");

const paginationvue_type_template_id_0d7ed8d8_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Configurez "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "layout"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" avec les différent éléments de pagination que vous souhaitez, séparés par des virgules. Les éléments possibles sont: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "prev"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (pour aller vers la page précédente), "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "next"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (pour aller vers la page suivante), "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "pager"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (liste des pages), "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "jumper"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (un champ pour aller directement à une page précise), "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "total"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (Le nombre total d'entrées), "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (un sélecteur qui détermine la taille de la page) et "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "->"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("(chaque élément après celui-ci sera poussé vers la droite).")])], -1);

const paginationvue_type_template_id_0d7ed8d8_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Quand vous avez quelques pages</span>\n    <el-pagination layout=\"prev, pager, next\" :total=\"50\"> </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Quand vous avez plus que 7 pages</span>\n    <el-pagination layout=\"prev, pager, next\" :total=\"1000\"> </el-pagination>\n  </div>\n</template>\n")], -1);

const paginationvue_type_template_id_0d7ed8d8_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Nombre de pages ");

const paginationvue_type_template_id_0d7ed8d8_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Par défaut, Pagination réduit les boutons lorsqu'il y a plus de 7 pages. Ce nombre est configurable avec l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "pager-count"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-pagination\n    :page-size=\"20\"\n    :pager-count=\"11\"\n    layout=\"prev, pager, next\"\n    :total=\"1000\"\n  >\n  </el-pagination>\n</template>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Boutons avec couleur de fond ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Réglez l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "background"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour change la couleur de fond des boutons.")])], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-pagination background layout=\"prev, pager, next\" :total=\"1000\">\n  </el-pagination>\n</template>\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Petite pagination ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Utilisez une pagination de taille réduite si vous manquez d'espace.", -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Ajoutez simplement l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" et la pagination sera de taille réduite.")])], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-pagination small layout=\"prev, pager, next\" :total=\"50\"> </el-pagination>\n</template>\n")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Plus d'éléments ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Vous pouvez ajouter plus de modules suivant vos besoins.", -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cet exemple contient un use-case complet. Il utilise les évènements "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size-change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "current-change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour gérer la taille de la page et son changement. "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "page-sizes"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" accepte un tableau d'entiers, chacun représentant une taille dans les options de "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sizes"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", e.g. "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "[100, 200, 300, 400]"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" indique que le sélecteur aura quatre options: 100, 200, 300 ou 400 entrées par page.")])], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Total d'entrées</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage1\"\n      :page-size=\"100\"\n      layout=\"total, prev, pager, next\"\n      :total=\"1000\"\n    >\n    </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Changement de taille de la page</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage2\"\n      :page-sizes=\"[100, 200, 300, 400]\"\n      :page-size=\"100\"\n      layout=\"sizes, prev, pager, next\"\n      :total=\"1000\"\n    >\n    </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Aller à</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage3\"\n      :page-size=\"100\"\n      layout=\"prev, pager, next, jumper\"\n      :total=\"1000\"\n    >\n    </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Tous en même temps</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage4\"\n      :page-sizes=\"[100, 200, 300, 400]\"\n      :page-size=\"100\"\n      layout=\"total, sizes, prev, pager, next, jumper\"\n      :total=\"400\"\n    >\n    </el-pagination>\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      handleSizeChange(val) {\n        console.log(`${val} items per page`)\n      },\n      handleCurrentChange(val) {\n        console.log(`current page: ${val}`)\n      },\n    },\n    data() {\n      return {\n        currentPage1: 5,\n        currentPage2: 5,\n        currentPage3: 5,\n        currentPage4: 4,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const handleSizeChange = (val) => {\n        console.log(`${val} items per page`);\n      };\n      const handleCurrentChange = (val) => {\n        console.log(`current page: ${val}`);\n      };\n\n      return {\n        currentPage1: ref(5),\n        currentPage2: ref(5),\n        currentPage3: ref(5),\n        currentPage4: ref(4),\n        handleSizeChange,\n        handleCurrentChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cacher la pagination s'il n'y a qu'une seule page ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Lorsqu'il n'y a qu'une seule page, il est possible de cacher la pagination avec l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hide-on-single-page"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-switch v-model=\"value\"> </el-switch>\n    <el-pagination\n      :hide-on-single-page=\"value\"\n      :total=\"5\"\n      layout=\"prev, pager, next\"\n    >\n    </el-pagination>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        value: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributs ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>small</td><td>Si la pagination doit être petite.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background</td><td>Si les boutons doivent avoir une couleur de fond.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>page-size</td><td>Nombre d&#39;entrées sur chaque page, supporte v-model two-way binding.</td><td>number</td><td>—</td><td>10</td></tr><tr><td>total</td><td>Nombre total d&#39;entrées.</td><td>number</td><td>—</td><td>—</td></tr><tr><td>page-count</td><td>Nombre de pages. Réglez <code>total</code> ou <code>page-count</code> et le nombre de pages sera affiché; si vous avez besoin de <code>page-sizes</code>, <code>total</code> est requis.</td><td>number</td><td>—</td><td>—</td></tr><tr><td>pager-count</td><td>Nombre de sélecteurs de pages. Pagination se réduit lorsque le nombre de pages dépasse cette valeur.</td><td>number</td><td>Nombre impair entre 5 et 21.</td><td>7</td></tr><tr><td>current-page</td><td>Le numéro de page courant, supporte v-model two-way binding.</td><td>number</td><td>—</td><td>1</td></tr><tr><td>layout</td><td>L&#39;ensemble des éléments de la pagination, séparés par des virgules.</td><td>string</td><td><code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>, <code>-&gt;</code>, <code>total</code>, <code>slot</code></td><td>&#39;prev, pager, next, jumper, -&gt;, total&#39;</td></tr><tr><td>page-sizes</td><td>Options pour la taille des pages.</td><td>number[]</td><td>—</td><td>[10, 20, 30, 40, 50, 100]</td></tr><tr><td>popper-class</td><td>Classe du menu de sélection de la taille des pages.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prev-text</td><td>Texte du bouton prev.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>next-text</td><td>Texte du bouton next.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>Si la pagination est désactivée.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>hide-on-single-page</td><td>Si la pagination doit être cachée quand il n&#39;y a qu&#39;une seule page.</td><td>boolean</td><td>—</td><td>-</td></tr></tbody></table>", 1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Évènements ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>size-change</td><td>Se déclenche quand <code>page-size</code> change.</td><td>La nouvelle taille.</td></tr><tr><td>current-change</td><td>Se déclenche quand <code>current-page</code> change.</td><td>La nouvelle page courante</td></tr><tr><td>prev-click</td><td>Se déclenche quand le bouton prev est cliqué et que la page courante change.</td><td>La nouvelle page courante.</td></tr><tr><td>next-click</td><td>Se déclenche quand le bouton next est cliqué et que la page courante change.</td><td>La nouvelle page courante.</td></tr></tbody></table>", 1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slot ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Contenu personnalisé. Pour l'utiliser vous devez déclarer "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" dans "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "layout"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])])])], -1);

function paginationvue_type_template_id_0d7ed8d8_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_element_demo5 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo5");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", paginationvue_type_template_id_0d7ed8d8_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "pagination",
    content: "Pagination",
    href: "#pagination",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_0d7ed8d8_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#pagination"
    })]),
    _: 1
  }), paginationvue_type_template_id_0d7ed8d8_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "usage",
    content: "Usage",
    href: "#usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_0d7ed8d8_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#usage"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_0d7ed8d8_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_0d7ed8d8_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "nombre-de-pages",
    content: "Nombre de pages",
    href: "#nombre-de-pages",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_0d7ed8d8_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#nombre-de-pages"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_0d7ed8d8_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "boutons-avec-couleur-de-fond",
    content: "Boutons avec couleur de fond",
    href: "#boutons-avec-couleur-de-fond",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#boutons-avec-couleur-de-fond"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "petite-pagination",
    content: "Petite pagination",
    href: "#petite-pagination",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#petite-pagination"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "plus-d-elements",
    content: "Plus d'éléments",
    href: "#plus-d-elements",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#plus-d-elements"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cacher-la-pagination-s-il-n-y-a-qu-une-seule-page",
    content: "Cacher la pagination s'il n'y a qu'une seule page",
    href: "#cacher-la-pagination-s-il-n-y-a-qu-une-seule-page",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cacher-la-pagination-s-il-n-y-a-qu-une-seule-page"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributs",
    content: "Attributs",
    href: "#attributs",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributs"
    })]),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "evenements",
    content: "Évènements",
    href: "#evenements",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#evenements"
    })]),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slot",
    content: "Slot",
    href: "#slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slot"
    })]),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/pagination.md?vue&type=template&id=0d7ed8d8

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/pagination.md?vue&type=script&lang=ts

/* harmony default export */ var paginationvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Quand vous avez quelques pages", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Quand vous avez plus que 7 pages", -1);

      function render(_ctx, _cache) {
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_pagination, {
          layout: "prev, pager, next",
          total: 50
        })]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_pagination, {
          layout: "prev, pager, next",
          total: 1000
        })])]);
      }

      const democomponentExport = {};
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
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_pagination, {
          "page-size": 20,
          "pager-count": 11,
          layout: "prev, pager, next",
          total: 1000
        })]);
      }

      const democomponentExport = {};
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
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_pagination, {
          background: "",
          layout: "prev, pager, next",
          total: 1000
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_pagination, {
          small: "",
          layout: "prev, pager, next",
          total: 50
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Total d'entrées", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Changement de taille de la page", -1);

      const _hoisted_5 = {
        class: "block"
      };

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Aller à", -1);

      const _hoisted_7 = {
        class: "block"
      };

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Tous en même temps", -1);

      function render(_ctx, _cache) {
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage1,
          "onUpdate:currentPage": _cache[0] || (_cache[0] = $event => _ctx.currentPage1 = $event),
          "page-size": 100,
          layout: "total, prev, pager, next",
          total: 1000
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage2,
          "onUpdate:currentPage": _cache[1] || (_cache[1] = $event => _ctx.currentPage2 = $event),
          "page-sizes": [100, 200, 300, 400],
          "page-size": 100,
          layout: "sizes, prev, pager, next",
          total: 1000
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])]), _createElementVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage3,
          "onUpdate:currentPage": _cache[2] || (_cache[2] = $event => _ctx.currentPage3 = $event),
          "page-size": 100,
          layout: "prev, pager, next, jumper",
          total: 1000
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])]), _createElementVNode("div", _hoisted_7, [_hoisted_8, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage4,
          "onUpdate:currentPage": _cache[3] || (_cache[3] = $event => _ctx.currentPage4 = $event),
          "page-sizes": [100, 200, 300, 400],
          "page-size": 100,
          layout: "total, sizes, prev, pager, next, jumper",
          total: 400
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])])]);
      }

      const democomponentExport = {
        methods: {
          handleSizeChange(val) {
            console.log(`${val} items per page`);
          },

          handleCurrentChange(val) {
            console.log(`current page: ${val}`);
          }

        },

        data() {
          return {
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4
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
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", null, [_createVNode(_component_el_switch, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event)
        }, null, 8, ["modelValue"]), _createVNode(_component_el_pagination, {
          "hide-on-single-page": _ctx.value,
          total: 5,
          layout: "prev, pager, next"
        }, null, 8, ["hide-on-single-page"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            value: false
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
// CONCATENATED MODULE: ./website/docs/fr-FR/pagination.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/pagination.md



paginationvue_type_script_lang_ts.render = paginationvue_type_template_id_0d7ed8d8_render

/* harmony default export */ var pagination = __webpack_exports__["default"] = (paginationvue_type_script_lang_ts);

/***/ })

}]);