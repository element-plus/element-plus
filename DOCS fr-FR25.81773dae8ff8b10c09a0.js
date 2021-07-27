(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[163],{

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/dropdown.md?vue&type=template&id=e7043cd4

var dropdownvue_type_template_id_e7043cd4_hoisted_1 = {
  class: "content element-doc"
};

var dropdownvue_type_template_id_e7043cd4_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h2", {
  id: "dropdown"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dropdown"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Dropdown")], -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Menu déroulant pour afficher des listes de liens et d'actions possibles.", -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "usage"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Usage")], -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Passez sur le menu avec la souris pour dérouler son contenu.", -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("L'élément déclencheur est généré par le "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" par défaut, et le menu déroulant est généré par le "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" appelé "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dropdown"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Par défaut le menu apparaît simplement en passant la souris sur l'élément déclencheur, sans avoir à cliquer.")])], -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown>\n  <span class=\"el-dropdown-link\">\n    Menu déroulant<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item disabled>Action 4</el-dropdown-item>\n      <el-dropdown-item divided>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n\n")], -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "element-declencheur"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#element-declencheur"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Élément déclencheur")], -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Utilisez le bouton pour ouvrir le menu déroulant.", -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Utilisez "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "split-button"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour séparer le déclencheur du reste du bouton, ce dernier devenant la partie gauche et le déclencheur la partie droite.")])], -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown>\n  <el-button type=\"primary\">\n    Liste déroulante<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </el-button>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n      <el-dropdown-item>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n<el-dropdown split-button type=\"primary\" @click=\"handleClick\">\n  Liste déroulante\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n      <el-dropdown-item>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown {\n    vertical-align: top;\n  }\n  .el-dropdown + .el-dropdown {\n    margin-left: 15px;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      handleClick() {\n        alert('button click');\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const handleClick = () => {\n        alert('button click');\n      };\n      return {\n        handleClick,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "declencheur"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#declencheur"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Déclencheur")], -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Vous pouvez choisir de déclencher le menu au moment du clic, ou en passant la souris sur l'élément.", -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Utilisez l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Par défaut, il est à "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-row class=\"block-col-2\">\n  <el-col :span=\"8\">\n    <span class=\"demonstration\">En passant la souris</span>\n    <el-dropdown>\n      <span class=\"el-dropdown-link\">\n        Liste déroulante<i class=\"el-icon-arrow-down el-icon--right\"></i>\n      </span>\n      <template #dropdown>\n        <el-dropdown-menu>\n          <el-dropdown-item icon=\"el-icon-plus\">Action 1</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus\">Action 2</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus-outline\">Action 3</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-check\">Action 4</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-check\">Action 5</el-dropdown-item>\n        </el-dropdown-menu>\n      </template>\n    </el-dropdown>\n  </el-col>\n  <el-col :span=\"8\">\n    <span class=\"demonstration\">En cliquant</span>\n    <el-dropdown trigger=\"click\">\n      <span class=\"el-dropdown-link\">\n        Liste déroulante<i class=\"el-icon-arrow-down el-icon--right\"></i>\n      </span>\n      <template #dropdown>\n        <el-dropdown-menu>\n          <el-dropdown-item icon=\"el-icon-plus\">Action 1</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus\">Action 2</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus-outline\">Action 3</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-check\">Action 4</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-check\">Action 5</el-dropdown-item>\n        </el-dropdown-menu>\n      </template>\n    </el-dropdown>\n  </el-col>\n  <el-col :span=\"8\">\n    <span class=\"demonstration\">Par clic droit</span>\n    <el-dropdown trigger=\"contextmenu\">\n      <span class=\"el-dropdown-link\">\n        Liste déroulante<i class=\"el-icon-arrow-down el-icon--right\"></i>\n      </span>\n      <template #dropdown>\n        <el-dropdown-menu>\n          <el-dropdown-item icon=\"el-icon-plus\">Action 1</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus\">Action 2</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus-outline\">Action 3</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-check\">Action 4</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-check\">Action 5</el-dropdown-item>\n        </el-dropdown-menu>\n      </template>\n    </el-dropdown>\n  </el-col>\n</el-row>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n  .demonstration {\n    display: block;\n    color: #8492a6;\n    font-size: 14px;\n    margin-bottom: 20px;\n  }\n</style>\n")], -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "fermer-le-menu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fermer-le-menu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Fermer le menu")], -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Utilisez l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "hide-on-click"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour déterminer si le menu se ferme après avoir cliqué sur un élément de la liste.")], -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Par défaut le menu se ferme après avoir cliqué dans la liste. Vous pouvez changer cette option en mettant "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "hide-on-click"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" à "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown :hide-on-click=\"false\">\n  <span class=\"el-dropdown-link\">\n    Liste déroulante<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item disabled>Action 4</el-dropdown-item>\n      <el-dropdown-item divided>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n")], -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "evenement-command"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#evenement-command"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Évènement command")], -1);

var dropdownvue_type_template_id_e7043cd4_hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Cliquer sur un élément du dropdown déclenche un évènement \"command\". Le paramètre de cet évènement peut être assigné à chaque élément de la liste.", -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown @command=\"handleCommand\">\n  <span class=\"el-dropdown-link\">\n    Liste déroulante<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item command=\"a\">Action 1</el-dropdown-item>\n      <el-dropdown-item command=\"b\">Action 2</el-dropdown-item>\n      <el-dropdown-item command=\"c\">Action 3</el-dropdown-item>\n      <el-dropdown-item command=\"d\" disabled>Action 4</el-dropdown-item>\n      <el-dropdown-item command=\"e\" divided>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409EFF;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      handleCommand(command) {\n        this.$message('click on item ' + command);\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n\n      const handleCommand = (command) => {\n        ElMessage(`click on item ${command}`);\n      };\n      return {\n        handleCommand,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "tailles"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tailles"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Tailles")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "En plus de la taille par défaut, le composant Dropdown propose trois autres tailles différentes.", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Utilisez "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour déterminer une autre taille parmi "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "medium"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" ou "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "mini"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-dropdown split-button type=\"primary\">\n  Défaut\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"medium\" split-button type=\"primary\">\n  Medium\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"small\" split-button type=\"primary\">\n  Small\n  <template #dropdown>\n    <el-dropdown-menu>\n    <el-dropdown-item>Action 1</el-dropdown-item>\n    <el-dropdown-item>Action 2</el-dropdown-item>\n    <el-dropdown-item>Action 3</el-dropdown-item>\n    <el-dropdown-item>Action 4</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"mini\" split-button type=\"primary\">\n  Mini\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"attributs-du-dropdown\"><a class=\"header-anchor\" href=\"#attributs-du-dropdown\">¶</a> Attributs du Dropdown</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>type</td><td>Type du bouton, se référer au composant <code>Button</code>. Ne marche que si <code>split-button</code> est <code>true</code>.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>size</td><td>Taille du menu, marche aussi avec <code>split button</code>.</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>max-height</td><td>the max height of menu</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>split-button</td><td>Si le bouton est séparé en deux.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>Désactiver ou non</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>placement</td><td>Emplacement du menu déroulant</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end</td><td>bottom</td></tr><tr><td>trigger</td><td>Comment déclencher l&#39;ouverture du menu.</td><td>string</td><td>hover/click/contextmenu</td><td>hover</td></tr><tr><td>hide-on-click</td><td>Si le menu doit disparaître après avoir cliqué sur un élément.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-timeout</td><td>Délai avant d&#39;afficher le menu (ne marche que si <code>trigger</code> est <code>hover</code>)</td><td>number</td><td>—</td><td>250</td></tr><tr><td>hide-timeout</td><td>Délai avant de cacher le menu (ne marche que si <code>trigger</code> est <code>hover</code>)</td><td>number</td><td>—</td><td>150</td></tr><tr><td>tabindex</td><td><a href=\"https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/tabindex\">tabindex</a> de Dropdown</td><td>number</td><td>—</td><td>0</td></tr></tbody></table><h3 id=\"dropdown-slots\"><a class=\"header-anchor\" href=\"#dropdown-slots\">¶</a> Dropdown Slots</h3><table><thead><tr><th>Nom</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>Contenu du Dropdown. Note: doit être un élément du DOM valide (ex. <code>&lt;span&gt;, &lt;button&gt; etc.</code>) ou <code>el-component</code>, pour y attacher un évènement.</td></tr><tr><td>dropdown</td><td>Contenu du menu du Dropdown, en général un élément <code>&lt;el-dropdown-menu&gt;</code>.</td></tr></tbody></table><h3 id=\"evenements-du-dropdown\"><a class=\"header-anchor\" href=\"#evenements-du-dropdown\">¶</a> Évènements du Dropdown</h3><table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>click</td><td>Si <code>split-button</code> est <code>true</code>, se déclenche quand le bouton de gauche est cliqué.</td><td>—</td></tr><tr><td>command</td><td>Se déclenche quand un élément de la liste est cliqué.</td><td>L&#39;attribut command de l&#39;élément de la liste.</td></tr><tr><td>visible-change</td><td>Se déclenche quand le menu s&#39;affiche ou disparaît.</td><td><code>true</code> quand il apparaît, <code>false</code> sinon.</td></tr></tbody></table><h3 id=\"attributs-des-elements-du-menu\"><a class=\"header-anchor\" href=\"#attributs-des-elements-du-menu\">¶</a> Attributs des éléments du menu</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>command</td><td>Le contenu à envoyer au callback de l&#39;évènement <code>command</code> du Dropdown.</td><td>string/number/object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>Si l&#39;élément est désactivé.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>divided</td><td>Si un diviseur doit être affiché.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>icon</td><td>Classe de l&#39;icône.</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 8);

function dropdownvue_type_template_id_e7043cd4_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo5");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", dropdownvue_type_template_id_e7043cd4_hoisted_1, [dropdownvue_type_template_id_e7043cd4_hoisted_2, dropdownvue_type_template_id_e7043cd4_hoisted_3, dropdownvue_type_template_id_e7043cd4_hoisted_4, dropdownvue_type_template_id_e7043cd4_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_e7043cd4_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_e7043cd4_hoisted_6];
    }),
    _: 1
  }), dropdownvue_type_template_id_e7043cd4_hoisted_8, dropdownvue_type_template_id_e7043cd4_hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_e7043cd4_hoisted_11];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_e7043cd4_hoisted_10];
    }),
    _: 1
  }), dropdownvue_type_template_id_e7043cd4_hoisted_12, dropdownvue_type_template_id_e7043cd4_hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_e7043cd4_hoisted_15];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_e7043cd4_hoisted_14];
    }),
    _: 1
  }), dropdownvue_type_template_id_e7043cd4_hoisted_16, dropdownvue_type_template_id_e7043cd4_hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_e7043cd4_hoisted_19];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [dropdownvue_type_template_id_e7043cd4_hoisted_18];
    }),
    _: 1
  }), dropdownvue_type_template_id_e7043cd4_hoisted_20, dropdownvue_type_template_id_e7043cd4_hoisted_21, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), _hoisted_23, _hoisted_24, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/dropdown.md?vue&type=template&id=e7043cd4

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/dropdown.md?vue&type=script&lang=ts


/* harmony default export */ var dropdownvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Menu déroulant"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, null, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  divided: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Liste déroulante");

      var _hoisted_2 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Action 5");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode(" Liste déroulante ");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, null, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_7];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              type: "primary"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          "split-button": "",
          type: "primary",
          onClick: _ctx.handleClick
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_10];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_11];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_12];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_13];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_8];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          handleClick: function handleClick() {
            alert('button click');
          }
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

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "En passant la souris", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Liste déroulante"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Action 5");

      var _hoisted_8 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "En cliquant", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Liste déroulante"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Action 5");

      var _hoisted_15 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Par clic droit", -1);

      var _hoisted_16 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Liste déroulante"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          class: "block-col-2"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_el_dropdown, null, {
                  dropdown: _withCtx(function () {
                    return [_createVNode(_component_el_dropdown_menu, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_3];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_4];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus-outline"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_5];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_6];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_7];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_8, _createVNode(_component_el_dropdown, {
                  trigger: "click"
                }, {
                  dropdown: _withCtx(function () {
                    return [_createVNode(_component_el_dropdown_menu, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_10];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_11];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus-outline"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_12];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_13];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_14];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_15, _createVNode(_component_el_dropdown, {
                  trigger: "contextmenu"
                }, {
                  dropdown: _withCtx(function () {
                    return [_createVNode(_component_el_dropdown_menu, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_17];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_18];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-plus-outline"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_19];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_20];
                          }),
                          _: 1
                        }), _createVNode(_component_el_dropdown_item, {
                          icon: "el-icon-circle-check"
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_21];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  default: _withCtx(function () {
                    return [_hoisted_16];
                  }),
                  _: 1
                })];
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
    }(),
    "element-demo3": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Liste déroulante"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, {
          "hide-on-click": false
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  divided: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Liste déroulante"), /*#__PURE__*/_createVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, {
          onCommand: _ctx.handleCommand
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, {
                  command: "a"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "b"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "c"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "d",
                  disabled: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  command: "e",
                  divided: ""
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onCommand"])]);
      }

      var democomponentExport = {
        methods: {
          handleCommand: function handleCommand(command) {
            this.$message('click on item ' + command);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Défaut ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode(" Medium ");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode(" Small ");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("Action 4");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode(" Mini ");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("Action 1");

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("Action 2");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("Action 3");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("Action 4");

      function render(_ctx, _cache) {
        var _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        var _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        var _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_dropdown, {
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "medium",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_7];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_8];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_10];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "small",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_12];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_13];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_14];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_15];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_11];
          }),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "mini",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(function () {
            return [_createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_17];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_18];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_19];
                  }),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(function () {
                    return [_hoisted_20];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_16];
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
// CONCATENATED MODULE: ./website/docs/fr-FR/dropdown.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/dropdown.md



dropdownvue_type_script_lang_ts.render = dropdownvue_type_template_id_e7043cd4_render

/* harmony default export */ var dropdown = __webpack_exports__["default"] = (dropdownvue_type_script_lang_ts);

/***/ })

}]);