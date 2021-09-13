(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[177],{

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/menu.md?vue&type=template&id=12896508

const menuvue_type_template_id_12896508_hoisted_1 = {
  class: "content element-doc"
};

const menuvue_type_template_id_12896508_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("NavMenu ");

const menuvue_type_template_id_12896508_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Menu qui fournit un système de navigation à votre site.", -1);

const menuvue_type_template_id_12896508_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Barre du haut ");

const menuvue_type_template_id_12896508_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "La barre du haut peut être utilisée pour différents scénarios.", -1);

const menuvue_type_template_id_12896508_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Par défaut le menu est vertical, mais vous pouvez le passer en horizontal en réglant l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "mode"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" sur 'horizontal'. De plus, vous pouvez utiliser le composant sub-menu pour créer un second niveau niveau de menu. Le menu utilises "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "background-color"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "text-color"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "active-text-color"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour personnaliser les couleurs.")])], -1);

const menuvue_type_template_id_12896508_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-menu\n  :default-active=\"activeIndex\"\n  class=\"el-menu-demo\"\n  mode=\"horizontal\"\n  @select=\"handleSelect\"\n>\n  <el-menu-item index=\"1\">Centre de traitement</el-menu-item>\n  <el-sub-menu index=\"2\">\n    <template #title>Lieu de travail</template>\n    <el-menu-item index=\"2-1\">item un</el-menu-item>\n    <el-menu-item index=\"2-2\">item deux</el-menu-item>\n    <el-menu-item index=\"2-3\">item trois</el-menu-item>\n    <el-sub-menu index=\"2-4\">\n      <template #title>item quatre</template>\n      <el-menu-item index=\"2-4-1\">item un</el-menu-item>\n      <el-menu-item index=\"2-4-2\">item deux</el-menu-item>\n      <el-menu-item index=\"2-4-3\">item trois</el-menu-item>\n    </el-sub-menu>\n  </el-sub-menu>\n  <el-menu-item index=\"3\" disabled>Infos</el-menu-item>\n  <el-menu-item index=\"4\">Commandes</el-menu-item>\n</el-menu>\n<div class=\"line\"></div>\n<el-menu\n  :default-active=\"activeIndex2\"\n  class=\"el-menu-demo\"\n  mode=\"horizontal\"\n  @select=\"handleSelect\"\n  background-color=\"#545c64\"\n  text-color=\"#fff\"\n  active-text-color=\"#ffd04b\"\n>\n  <el-menu-item index=\"1\">Centre de traitement</el-menu-item>\n  <el-sub-menu index=\"2\">\n    <template #title>Lieu de travail</template>\n    <el-menu-item index=\"2-1\">item un</el-menu-item>\n    <el-menu-item index=\"2-2\">item deux</el-menu-item>\n    <el-menu-item index=\"2-3\">item trois</el-menu-item>\n    <el-sub-menu index=\"2-4\">\n      <template #title>item quatre</template>\n      <el-menu-item index=\"2-4-1\">item un</el-menu-item>\n      <el-menu-item index=\"2-4-2\">item deux</el-menu-item>\n      <el-menu-item index=\"2-4-3\">item trois</el-menu-item>\n    </el-sub-menu>\n  </el-sub-menu>\n  <el-menu-item index=\"3\" disabled>Info</el-menu-item>\n  <el-menu-item index=\"4\">Commandes</el-menu-item>\n</el-menu>\n\n<script>\n  export default {\n    data() {\n      return {\n        activeIndex: '1',\n        activeIndex2: '1',\n      }\n    },\n    methods: {\n      handleSelect(key, keyPath) {\n        console.log(key, keyPath)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const activeIndex = ref('1');\n      const activeIndex2 = ref('1');\n      const handleSelect = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      return {\n        activeIndex,\n        activeIndex2,\n        handleSelect,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const menuvue_type_template_id_12896508_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Barre latérale ");

const menuvue_type_template_id_12896508_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Menu vertical avec sous-menus.", -1);

const menuvue_type_template_id_12896508_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Vous pouvez utiliser le composant el-menu-item-group pour créer un groupe dans le menu dont le nom sera déterminé par celui de la propriété title ou d'un slot.")], -1);

const menuvue_type_template_id_12896508_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-row class=\"tac\">\n  <el-col :span=\"12\">\n    <h5>Couleurs par défaut</h5>\n    <el-menu\n      default-active=\"2\"\n      class=\"el-menu-vertical-demo\"\n      @open=\"handleOpen\"\n      @close=\"handleClose\"\n    >\n      <el-sub-menu index=\"1\">\n        <template #title>\n          <i class=\"el-icon-location\"></i>\n          <span>Navigateur Un</span>\n        </template>\n        <el-menu-item-group title=\"Group Un\">\n          <el-menu-item index=\"1-1\">item un</el-menu-item>\n          <el-menu-item index=\"1-2\">item un</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group Deux\">\n          <el-menu-item index=\"1-3\">item trois</el-menu-item>\n        </el-menu-item-group>\n        <el-sub-menu index=\"1-4\">\n          <template #title>item quatre</template>\n          <el-menu-item index=\"1-4-1\">item un</el-menu-item>\n        </el-sub-menu>\n      </el-sub-menu>\n      <el-menu-item index=\"2\">\n        <i class=\"el-icon-menu\"></i>\n        <span>Navigateur Deux</span>\n      </el-menu-item>\n      <el-menu-item index=\"3\" disabled>\n        <i class=\"el-icon-document\"></i>\n        <span>Navigateur Trois</span>\n      </el-menu-item>\n      <el-menu-item index=\"4\">\n        <i class=\"el-icon-setting\"></i>\n        <span>Navigateur Quatre</span>\n      </el-menu-item>\n    </el-menu>\n  </el-col>\n  <el-col :span=\"12\">\n    <h5>Couleurs personnalisées</h5>\n    <el-menu\n      default-active=\"2\"\n      class=\"el-menu-vertical-demo\"\n      @open=\"handleOpen\"\n      @close=\"handleClose\"\n      background-color=\"#545c64\"\n      text-color=\"#fff\"\n      active-text-color=\"#ffd04b\"\n    >\n      <el-sub-menu index=\"1\">\n        <template #title>\n          <i class=\"el-icon-location\"></i>\n          <span>Navigateur Un</span>\n        </template>\n        <el-menu-item-group title=\"Group Un\">\n          <el-menu-item index=\"1-1\">item un</el-menu-item>\n          <el-menu-item index=\"1-2\">item un</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group Deux\">\n          <el-menu-item index=\"1-3\">item trois</el-menu-item>\n        </el-menu-item-group>\n        <el-sub-menu index=\"1-4\">\n          <template #title>item quatre</template>\n          <el-menu-item index=\"1-4-1\">item un</el-menu-item>\n        </el-sub-menu>\n      </el-sub-menu>\n      <el-menu-item index=\"2\">\n        <i class=\"el-icon-menu\"></i>\n        <span>Navigateur Deux</span>\n      </el-menu-item>\n      <el-menu-item index=\"3\" disabled>\n        <i class=\"el-icon-document\"></i>\n        <span>Navigateur Trois</span>\n      </el-menu-item>\n      <el-menu-item index=\"4\">\n        <i class=\"el-icon-setting\"></i>\n        <span>Navigateur Quatre</span>\n      </el-menu-item>\n    </el-menu>\n  </el-col>\n</el-row>\n\n<script>\n  export default {\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath)\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const handleOpen = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      const handleClose = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      return {\n        handleOpen,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const menuvue_type_template_id_12896508_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Menu réduit ");

const menuvue_type_template_id_12896508_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Le menu vertical peut être réduit.", -1);

const menuvue_type_template_id_12896508_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-radio-group v-model=\"isCollapse\" style=\"margin-bottom: 20px;\">\n  <el-radio-button :label=\"false\">Agrandir</el-radio-button>\n  <el-radio-button :label=\"true\">Réduire</el-radio-button>\n</el-radio-group>\n<el-menu\n  default-active=\"2\"\n  class=\"el-menu-vertical-demo\"\n  @open=\"handleOpen\"\n  @close=\"handleClose\"\n  :collapse=\"isCollapse\"\n>\n  <el-sub-menu index=\"1\">\n    <template #title>\n      <i class=\"el-icon-location\"></i>\n      <span>Navigateur Un</span>\n    </template>\n    <el-menu-item-group>\n      <template #title><span>Group Un</span></template>\n      <el-menu-item index=\"1-1\">item un</el-menu-item>\n      <el-menu-item index=\"1-2\">item deux</el-menu-item>\n    </el-menu-item-group>\n    <el-menu-item-group title=\"Group Deux\">\n      <el-menu-item index=\"1-3\">item trois</el-menu-item>\n    </el-menu-item-group>\n    <el-sub-menu index=\"1-4\">\n      <template #title><span>item quatre</span></template>\n      <el-menu-item index=\"1-4-1\">item un</el-menu-item>\n    </el-sub-menu>\n  </el-sub-menu>\n  <el-menu-item index=\"2\">\n    <i class=\"el-icon-menu\"></i>\n    <template #title>Navigator Deux</template>\n  </el-menu-item>\n  <el-menu-item index=\"3\" disabled>\n    <i class=\"el-icon-document\"></i>\n    <template #title>Navigator Trois</template>\n  </el-menu-item>\n  <el-menu-item index=\"4\">\n    <i class=\"el-icon-setting\"></i>\n    <template #title>Navigator Quatre</template>\n  </el-menu-item>\n</el-menu>\n\n<style>\n  .el-menu-vertical-demo:not(.el-menu--collapse) {\n    width: 200px;\n    min-height: 400px;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        isCollapse: true,\n      }\n    },\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath)\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const isCollapse = ref(true);\n      const handleOpen = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      const handleClose = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      return {\n        isCollapse,\n        handleOpen,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const menuvue_type_template_id_12896508_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributs du menu ");

const menuvue_type_template_id_12896508_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>mode</td><td>Mode d&#39;affichage du menu.</td><td>string</td><td>horizontal / vertical</td><td>vertical</td></tr><tr><td>collapse</td><td>Si le menu peut être réduit, uniquement disponible en mode vertical.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background-color</td><td>Couleur de fond du menu (format hexadécimal).</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>text-color</td><td>Couleur du texte du menu (format hexadécimal)</td><td>string</td><td>—</td><td>#303133</td></tr><tr><td>active-text-color</td><td>Couleur du texte de l&#39;item actif (format hexadécimal).</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>default-active</td><td>Index du menu actif.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>default-openeds</td><td>Liste contenant les index les sous-menus actifs.</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>unique-opened</td><td>Si un seul sous-menu peut être actif.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>menu-trigger</td><td>Comment les sous-menu sont déclenchés, uniquement en mode horizontal.</td><td>string</td><td>hover / click</td><td>hover</td></tr><tr><td>router</td><td>Si le mode <code>vue-router</code> est activé. Si <code>true</code>, l&#39;index sera utilisé comme &#39;path&#39; pour activer la route.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-transition</td><td>Si la transition de réduction doit être activée.</td><td>boolean</td><td>—</td><td>true</td></tr></tbody></table>", 1);

const menuvue_type_template_id_12896508_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Méthodes du menu ");

const menuvue_type_template_id_12896508_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>open</td><td>Ouvre un sous-menu spécifique.</td><td>index: index du sous-menu à ouvrir</td></tr><tr><td>close</td><td>Ferme un sous-menu spécifique.</td><td>index: index du sous-menu à fermer</td></tr></tbody></table>", 1);

const menuvue_type_template_id_12896508_hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Évènements du menu ");

const menuvue_type_template_id_12896508_hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>select</td><td>Fonction de callback pour quand le menu est activé.</td><td>index: index du menu activé, indexPath: index path du menu activé, item : l&#39;élément de menu sélectionné, routeResult : le résultat retourné par <code>vue-router</code> si <code>router</code> est activé.</td></tr><tr><td>open</td><td>Fonction de callback pour quand le sous-menu s&#39;agrandit.</td><td>index: index of expanded sous-menu, indexPath: index path du sous-menu</td></tr><tr><td>close</td><td>Fonction de callback pour quand le sous-menu se réduit.</td><td>index: index of collapsed sous-menu, indexPath: index path du sous-menu</td></tr></tbody></table>", 1);

const menuvue_type_template_id_12896508_hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Évènements des items du menu ");

const menuvue_type_template_id_12896508_hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Nom"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Paramètres")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "click"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Fonction de callback pour quand le menu-item est cliqué."), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "el: instance du menu-item.")])])], -1);

const menuvue_type_template_id_12896508_hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributs du sous-menu ");

const menuvue_type_template_id_12896508_hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attributs</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>index</td><td>Identificateur unique.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>popper-class</td><td>Classe du menu popup.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-timeout</td><td>Délai avant de montrer un sous-menu.</td><td>number</td><td>—</td><td>300</td></tr><tr><td>hide-timeout</td><td>Délai avant de cacher un sous-menu.</td><td>number</td><td>—</td><td>300</td></tr><tr><td>disabled</td><td>Si le sous-menu est désactivé.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>S&#39;il faut ajouter un menu popup au body. Si le positionnement du body n&#39;est pas bon, vous pouvez essayer de régler cette propriété.</td><td>boolean</td><td>-</td><td>Sous-menus de niveau 1: true / autres sous-menus: false</td></tr></tbody></table>", 1);

const menuvue_type_template_id_12896508_hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributs des items du menu ");

const menuvue_type_template_id_12896508_hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attributs</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>index</td><td>Identificateur unique.</td><td>string/null</td><td>—</td><td>null</td></tr><tr><td>route</td><td>Objet Vue Router.</td><td>object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>Si l&#39;item est désactivé.</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const menuvue_type_template_id_12896508_hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributs des groupes ");

const menuvue_type_template_id_12896508_hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attributs</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>title</td><td>Titre du groupe.</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

function menuvue_type_template_id_12896508_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", menuvue_type_template_id_12896508_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "navmenu",
    content: "NavMenu",
    href: "#navmenu",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_12896508_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#navmenu"
    })]),
    _: 1
  }), menuvue_type_template_id_12896508_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "barre-du-haut",
    content: "Barre du haut",
    href: "#barre-du-haut",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_12896508_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#barre-du-haut"
    })]),
    _: 1
  }), menuvue_type_template_id_12896508_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_12896508_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_12896508_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "barre-laterale",
    content: "Barre latérale",
    href: "#barre-laterale",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_12896508_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#barre-laterale"
    })]),
    _: 1
  }), menuvue_type_template_id_12896508_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_12896508_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_12896508_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "menu-reduit",
    content: "Menu réduit",
    href: "#menu-reduit",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_12896508_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#menu-reduit"
    })]),
    _: 1
  }), menuvue_type_template_id_12896508_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_12896508_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributs-du-menu",
    content: "Attributs du menu",
    href: "#attributs-du-menu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_12896508_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributs-du-menu"
    })]),
    _: 1
  }), menuvue_type_template_id_12896508_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "methodes-du-menu",
    content: "Méthodes du menu",
    href: "#methodes-du-menu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_12896508_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methodes-du-menu"
    })]),
    _: 1
  }), menuvue_type_template_id_12896508_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "evenements-du-menu",
    content: "Évènements du menu",
    href: "#evenements-du-menu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_12896508_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#evenements-du-menu"
    })]),
    _: 1
  }), menuvue_type_template_id_12896508_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "evenements-des-items-du-menu",
    content: "Évènements des items du menu",
    href: "#evenements-des-items-du-menu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_12896508_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#evenements-des-items-du-menu"
    })]),
    _: 1
  }), menuvue_type_template_id_12896508_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributs-du-sous-menu",
    content: "Attributs du sous-menu",
    href: "#attributs-du-sous-menu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_12896508_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributs-du-sous-menu"
    })]),
    _: 1
  }), menuvue_type_template_id_12896508_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributs-des-items-du-menu",
    content: "Attributs des items du menu",
    href: "#attributs-des-items-du-menu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_12896508_hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributs-des-items-du-menu"
    })]),
    _: 1
  }), menuvue_type_template_id_12896508_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributs-des-groupes",
    content: "Attributs des groupes",
    href: "#attributs-des-groupes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_12896508_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributs-des-groupes"
    })]),
    _: 1
  }), menuvue_type_template_id_12896508_hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/menu.md?vue&type=template&id=12896508

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/menu.md?vue&type=script&lang=ts

/* harmony default export */ var menuvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Centre de traitement");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Lieu de travail");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("item un");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("item deux");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("item trois");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("item quatre");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("item un");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("item deux");

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("item trois");

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("Infos");

      const _hoisted_11 = /*#__PURE__*/_createTextVNode("Commandes");

      const _hoisted_12 = /*#__PURE__*/_createElementVNode("div", {
        class: "line"
      }, null, -1);

      const _hoisted_13 = /*#__PURE__*/_createTextVNode("Centre de traitement");

      const _hoisted_14 = /*#__PURE__*/_createTextVNode("Lieu de travail");

      const _hoisted_15 = /*#__PURE__*/_createTextVNode("item un");

      const _hoisted_16 = /*#__PURE__*/_createTextVNode("item deux");

      const _hoisted_17 = /*#__PURE__*/_createTextVNode("item trois");

      const _hoisted_18 = /*#__PURE__*/_createTextVNode("item quatre");

      const _hoisted_19 = /*#__PURE__*/_createTextVNode("item un");

      const _hoisted_20 = /*#__PURE__*/_createTextVNode("item deux");

      const _hoisted_21 = /*#__PURE__*/_createTextVNode("item trois");

      const _hoisted_22 = /*#__PURE__*/_createTextVNode("Info");

      const _hoisted_23 = /*#__PURE__*/_createTextVNode("Commandes");

      function render(_ctx, _cache) {
        const _component_el_menu_item = _resolveComponent("el-menu-item");

        const _component_el_sub_menu = _resolveComponent("el-sub-menu");

        const _component_el_menu = _resolveComponent("el-menu");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_menu, {
          "default-active": _ctx.activeIndex,
          class: "el-menu-demo",
          mode: "horizontal",
          onSelect: _ctx.handleSelect
        }, {
          default: _withCtx(() => [_createVNode(_component_el_menu_item, {
            index: "1"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_sub_menu, {
            index: "2"
          }, {
            title: _withCtx(() => [_hoisted_2]),
            default: _withCtx(() => [_createVNode(_component_el_menu_item, {
              index: "2-1"
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2-2"
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2-3"
            }, {
              default: _withCtx(() => [_hoisted_5]),
              _: 1
            }), _createVNode(_component_el_sub_menu, {
              index: "2-4"
            }, {
              title: _withCtx(() => [_hoisted_6]),
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "2-4-1"
              }, {
                default: _withCtx(() => [_hoisted_7]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2-4-2"
              }, {
                default: _withCtx(() => [_hoisted_8]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2-4-3"
              }, {
                default: _withCtx(() => [_hoisted_9]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "3",
            disabled: ""
          }, {
            default: _withCtx(() => [_hoisted_10]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "4"
          }, {
            default: _withCtx(() => [_hoisted_11]),
            _: 1
          })]),
          _: 1
        }, 8, ["default-active", "onSelect"]), _hoisted_12, _createVNode(_component_el_menu, {
          "default-active": _ctx.activeIndex2,
          class: "el-menu-demo",
          mode: "horizontal",
          onSelect: _ctx.handleSelect,
          "background-color": "#545c64",
          "text-color": "#fff",
          "active-text-color": "#ffd04b"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_menu_item, {
            index: "1"
          }, {
            default: _withCtx(() => [_hoisted_13]),
            _: 1
          }), _createVNode(_component_el_sub_menu, {
            index: "2"
          }, {
            title: _withCtx(() => [_hoisted_14]),
            default: _withCtx(() => [_createVNode(_component_el_menu_item, {
              index: "2-1"
            }, {
              default: _withCtx(() => [_hoisted_15]),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2-2"
            }, {
              default: _withCtx(() => [_hoisted_16]),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2-3"
            }, {
              default: _withCtx(() => [_hoisted_17]),
              _: 1
            }), _createVNode(_component_el_sub_menu, {
              index: "2-4"
            }, {
              title: _withCtx(() => [_hoisted_18]),
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "2-4-1"
              }, {
                default: _withCtx(() => [_hoisted_19]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2-4-2"
              }, {
                default: _withCtx(() => [_hoisted_20]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2-4-3"
              }, {
                default: _withCtx(() => [_hoisted_21]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "3",
            disabled: ""
          }, {
            default: _withCtx(() => [_hoisted_22]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "4"
          }, {
            default: _withCtx(() => [_hoisted_23]),
            _: 1
          })]),
          _: 1
        }, 8, ["default-active", "onSelect"])]);
      }

      const democomponentExport = {
        data() {
          return {
            activeIndex: '1',
            activeIndex2: '1'
          };
        },

        methods: {
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
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
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("h5", null, "Couleurs par défaut", -1);

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("span", null, "Navigateur Un", -1);

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("item un");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("item un");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("item trois");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("item quatre");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("item un");

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      const _hoisted_10 = /*#__PURE__*/_createElementVNode("span", null, "Navigateur Deux", -1);

      const _hoisted_11 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      const _hoisted_12 = /*#__PURE__*/_createElementVNode("span", null, "Navigateur Trois", -1);

      const _hoisted_13 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      const _hoisted_14 = /*#__PURE__*/_createElementVNode("span", null, "Navigateur Quatre", -1);

      const _hoisted_15 = /*#__PURE__*/_createElementVNode("h5", null, "Couleurs personnalisées", -1);

      const _hoisted_16 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      const _hoisted_17 = /*#__PURE__*/_createElementVNode("span", null, "Navigateur Un", -1);

      const _hoisted_18 = /*#__PURE__*/_createTextVNode("item un");

      const _hoisted_19 = /*#__PURE__*/_createTextVNode("item un");

      const _hoisted_20 = /*#__PURE__*/_createTextVNode("item trois");

      const _hoisted_21 = /*#__PURE__*/_createTextVNode("item quatre");

      const _hoisted_22 = /*#__PURE__*/_createTextVNode("item un");

      const _hoisted_23 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      const _hoisted_24 = /*#__PURE__*/_createElementVNode("span", null, "Navigateur Deux", -1);

      const _hoisted_25 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      const _hoisted_26 = /*#__PURE__*/_createElementVNode("span", null, "Navigateur Trois", -1);

      const _hoisted_27 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      const _hoisted_28 = /*#__PURE__*/_createElementVNode("span", null, "Navigateur Quatre", -1);

      function render(_ctx, _cache) {
        const _component_el_menu_item = _resolveComponent("el-menu-item");

        const _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        const _component_el_sub_menu = _resolveComponent("el-sub-menu");

        const _component_el_menu = _resolveComponent("el-menu");

        const _component_el_col = _resolveComponent("el-col");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          class: "tac"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_col, {
            span: 12
          }, {
            default: _withCtx(() => [_hoisted_1, _createVNode(_component_el_menu, {
              "default-active": "2",
              class: "el-menu-vertical-demo",
              onOpen: _ctx.handleOpen,
              onClose: _ctx.handleClose
            }, {
              default: _withCtx(() => [_createVNode(_component_el_sub_menu, {
                index: "1"
              }, {
                title: _withCtx(() => [_hoisted_2, _hoisted_3]),
                default: _withCtx(() => [_createVNode(_component_el_menu_item_group, {
                  title: "Group Un"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-1"
                  }, {
                    default: _withCtx(() => [_hoisted_4]),
                    _: 1
                  }), _createVNode(_component_el_menu_item, {
                    index: "1-2"
                  }, {
                    default: _withCtx(() => [_hoisted_5]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_menu_item_group, {
                  title: "Group Deux"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-3"
                  }, {
                    default: _withCtx(() => [_hoisted_6]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_sub_menu, {
                  index: "1-4"
                }, {
                  title: _withCtx(() => [_hoisted_7]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-4-1"
                  }, {
                    default: _withCtx(() => [_hoisted_8]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2"
              }, {
                default: _withCtx(() => [_hoisted_9, _hoisted_10]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "3",
                disabled: ""
              }, {
                default: _withCtx(() => [_hoisted_11, _hoisted_12]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "4"
              }, {
                default: _withCtx(() => [_hoisted_13, _hoisted_14]),
                _: 1
              })]),
              _: 1
            }, 8, ["onOpen", "onClose"])]),
            _: 1
          }), _createVNode(_component_el_col, {
            span: 12
          }, {
            default: _withCtx(() => [_hoisted_15, _createVNode(_component_el_menu, {
              "default-active": "2",
              class: "el-menu-vertical-demo",
              onOpen: _ctx.handleOpen,
              onClose: _ctx.handleClose,
              "background-color": "#545c64",
              "text-color": "#fff",
              "active-text-color": "#ffd04b"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_sub_menu, {
                index: "1"
              }, {
                title: _withCtx(() => [_hoisted_16, _hoisted_17]),
                default: _withCtx(() => [_createVNode(_component_el_menu_item_group, {
                  title: "Group Un"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-1"
                  }, {
                    default: _withCtx(() => [_hoisted_18]),
                    _: 1
                  }), _createVNode(_component_el_menu_item, {
                    index: "1-2"
                  }, {
                    default: _withCtx(() => [_hoisted_19]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_menu_item_group, {
                  title: "Group Deux"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-3"
                  }, {
                    default: _withCtx(() => [_hoisted_20]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_sub_menu, {
                  index: "1-4"
                }, {
                  title: _withCtx(() => [_hoisted_21]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-4-1"
                  }, {
                    default: _withCtx(() => [_hoisted_22]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2"
              }, {
                default: _withCtx(() => [_hoisted_23, _hoisted_24]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "3",
                disabled: ""
              }, {
                default: _withCtx(() => [_hoisted_25, _hoisted_26]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "4"
              }, {
                default: _withCtx(() => [_hoisted_27, _hoisted_28]),
                _: 1
              })]),
              _: 1
            }, 8, ["onOpen", "onClose"])]),
            _: 1
          })]),
          _: 1
        })]);
      }

      const democomponentExport = {
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },

          handleClose(key, keyPath) {
            console.log(key, keyPath);
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
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Agrandir");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Réduire");

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", null, "Navigateur Un", -1);

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("span", null, "Group Un", -1);

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("item un");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("item deux");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("item trois");

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("span", null, "item quatre", -1);

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("item un");

      const _hoisted_11 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      const _hoisted_12 = /*#__PURE__*/_createTextVNode("Navigator Deux");

      const _hoisted_13 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      const _hoisted_14 = /*#__PURE__*/_createTextVNode("Navigator Trois");

      const _hoisted_15 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      const _hoisted_16 = /*#__PURE__*/_createTextVNode("Navigator Quatre");

      function render(_ctx, _cache) {
        const _component_el_radio_button = _resolveComponent("el-radio-button");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_menu_item = _resolveComponent("el-menu-item");

        const _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        const _component_el_sub_menu = _resolveComponent("el-sub-menu");

        const _component_el_menu = _resolveComponent("el-menu");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.isCollapse,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.isCollapse = $event),
          style: {
            "margin-bottom": "20px"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_radio_button, {
            label: false
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_radio_button, {
            label: true
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_menu, {
          "default-active": "2",
          class: "el-menu-vertical-demo",
          onOpen: _ctx.handleOpen,
          onClose: _ctx.handleClose,
          collapse: _ctx.isCollapse
        }, {
          default: _withCtx(() => [_createVNode(_component_el_sub_menu, {
            index: "1"
          }, {
            title: _withCtx(() => [_hoisted_3, _hoisted_4]),
            default: _withCtx(() => [_createVNode(_component_el_menu_item_group, null, {
              title: _withCtx(() => [_hoisted_5]),
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "1-1"
              }, {
                default: _withCtx(() => [_hoisted_6]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "1-2"
              }, {
                default: _withCtx(() => [_hoisted_7]),
                _: 1
              })]),
              _: 1
            }), _createVNode(_component_el_menu_item_group, {
              title: "Group Deux"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "1-3"
              }, {
                default: _withCtx(() => [_hoisted_8]),
                _: 1
              })]),
              _: 1
            }), _createVNode(_component_el_sub_menu, {
              index: "1-4"
            }, {
              title: _withCtx(() => [_hoisted_9]),
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "1-4-1"
              }, {
                default: _withCtx(() => [_hoisted_10]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "2"
          }, {
            title: _withCtx(() => [_hoisted_12]),
            default: _withCtx(() => [_hoisted_11]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "3",
            disabled: ""
          }, {
            title: _withCtx(() => [_hoisted_14]),
            default: _withCtx(() => [_hoisted_13]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "4"
          }, {
            title: _withCtx(() => [_hoisted_16]),
            default: _withCtx(() => [_hoisted_15]),
            _: 1
          })]),
          _: 1
        }, 8, ["onOpen", "onClose", "collapse"])]);
      }

      const democomponentExport = {
        data() {
          return {
            isCollapse: true
          };
        },

        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },

          handleClose(key, keyPath) {
            console.log(key, keyPath);
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
// CONCATENATED MODULE: ./website/docs/fr-FR/menu.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/menu.md



menuvue_type_script_lang_ts.render = menuvue_type_template_id_12896508_render

/* harmony default export */ var menu = __webpack_exports__["default"] = (menuvue_type_script_lang_ts);

/***/ })

}]);