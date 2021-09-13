(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[160],{

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/dialog.md?vue&type=template&id=203c90ff

const dialogvue_type_template_id_203c90ff_hoisted_1 = {
  class: "content element-doc"
};

const dialogvue_type_template_id_203c90ff_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Dialog ");

const dialogvue_type_template_id_203c90ff_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Informe les utilisateurs tout en préservant l'état de la page.", -1);

const dialogvue_type_template_id_203c90ff_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Usage ");

const dialogvue_type_template_id_203c90ff_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Le Dialog ouvre un modal personnalisable.", -1);

const dialogvue_type_template_id_203c90ff_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Configurez "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "model-value / v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" avec un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", un modal apparaîtra quand la valeur sera à "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Le Dialog possède deux parties: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", ce-dernier nécessitant un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" appelé "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". L'attribut optionnel "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (vide par défaut) définit le titre. Cet exemple montre également comment "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" peut être utilisé.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"dialogVisible = true\"\n  >Cliquez pour ouvrir le modal</el-button\n>\n\n<el-dialog\n  title=\"Tips\"\n  v-model=\"dialogVisible\"\n  width=\"30%\"\n  :before-close=\"handleClose\"\n>\n  <span>Ceci est un message</span>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"dialogVisible = false\">Annuler</el-button>\n      <el-button type=\"primary\" @click=\"dialogVisible = false\"\n        >Confirmer</el-button\n      >\n    </span>\n  </template>\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        dialogVisible: false,\n      }\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm('Voulez-vous vraiment quitter ?')\n          .then((_) => {\n            done()\n          })\n          .catch((_) => {})\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      const dialogVisible = ref(false);\n      \n      const handleClose = (done) => {\n        ElMessageBox\n          .confirm('Voulez-vous vraiment quitter ?')\n          .then((_) => {\n            done();\n          })\n          .catch((_) => {});\n      };\n      return {\n        dialogVisible,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" ne fonctionne que quand l'utilisateur clique sur l'icône de fermeture en dehors du modal. S'il y a des boutons dans le "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", vous pouvez configurer "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" grâce à leur évènement click.")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Personalisation ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Le contenu du modal peut être n'importe quoi, tableau ou formulaire compris.", -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<!-- Table -->\n<el-button type=\"text\" @click=\"dialogTableVisible = true\"\n  >Ouvrir un modal avec tableau</el-button\n>\n\n<el-dialog title=\"Adresse d'expédition\" v-model=\"dialogTableVisible\">\n  <el-table :data=\"gridData\">\n    <el-table-column property=\"date\" label=\"Date\" width=\"150\"></el-table-column>\n    <el-table-column property=\"name\" label=\"Nom\" width=\"200\"></el-table-column>\n    <el-table-column property=\"address\" label=\"Adresse\"></el-table-column>\n  </el-table>\n</el-dialog>\n\n<!-- Form -->\n<el-button type=\"text\" @click=\"dialogFormVisible = true\"\n  >Ouvrir un modal avec formulaire</el-button\n>\n\n<el-dialog title=\"Adresse d'expédition\" v-model=\"dialogFormVisible\">\n  <el-form :model=\"form\">\n    <el-form-item label=\"Nom de promotion\" :label-width=\"formLabelWidth\">\n      <el-input v-model=\"form.name\" autocomplete=\"off\"></el-input>\n    </el-form-item>\n    <el-form-item label=\"Zones\" :label-width=\"formLabelWidth\">\n      <el-select v-model=\"form.region\" placeholder=\"Sélectionnez une zone\">\n        <el-option label=\"Zone No.1\" value=\"shanghai\"></el-option>\n        <el-option label=\"Zone No.2\" value=\"beijing\"></el-option>\n      </el-select>\n    </el-form-item>\n  </el-form>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"dialogFormVisible = false\">Annuler</el-button>\n      <el-button type=\"primary\" @click=\"dialogFormVisible = false\"\n        >Confirmer</el-button\n      >\n    </span>\n  </template>\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-04',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-01',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-03',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n        ],\n        dialogTableVisible: false,\n        dialogFormVisible: false,\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n        formLabelWidth: '120px',\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-04',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-01',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-03',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n        ],\n        dialogTableVisible: false,\n        dialogFormVisible: false,\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n        formLabelWidth: '120px',\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Dialog imbriqué ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Si un Dialog est imbriqué dans un autre Dialog, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" est requis.")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Normalement l'utilisation de Dialog imbriqué est déconseillée. Si vous avez besoin de plusieurs Dialogs sur la page, vous pouvez les aplatir afin qu'ils soit au même niveau. Si vous devez absolument utiliser un Dialog imbriqué, configurez l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" du Dialog imbriqué à "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" et il sera ajouté au body au lieu de son noeud parent, afin d'avoir un affichage correct.")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"outerVisible = true\"\n    >Ouvrir le modal extérieur</el-button\n  >\n\n  <el-dialog title=\"Modal extérieur\" v-model=\"outerVisible\">\n    <el-dialog\n      width=\"30%\"\n      title=\"Modal intérieur\"\n      v-model=\"innerVisible\"\n      append-to-body\n    >\n    </el-dialog>\n    <template #footer>\n      <div class=\"dialog-footer\">\n        <el-button @click=\"outerVisible = false\">Annuler</el-button>\n        <el-button type=\"primary\" @click=\"innerVisible = true\"\n          >Ouvrir le modal intérieur</el-button\n        >\n      </div>\n    </template>\n  </el-dialog>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        outerVisible: false,\n        innerVisible: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        outerVisible: ref(false),\n        innerVisible: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Centrer le contenu ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Le contenu du modal peut être centré.", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Régler "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" à "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" centrera horizontalement le header et le footer. "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" n'affecte que le header et le footer. Le contenu du body pouvant être n'importe quoi, si vous désirez le centrer vous devrez ajouter des règles CSS.")])], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"centerDialogVisible = true\"\n  >Cliquez pour ouvrir le modal</el-button\n>\n\n<el-dialog title=\"Attention\" v-model=\"centerDialogVisible\" width=\"30%\" center>\n  <span>Le contenu du modal n'est pas centré par défaut.</span>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"centerDialogVisible = false\">Annuler</el-button>\n      <el-button type=\"primary\" @click=\"centerDialogVisible = false\"\n        >Confirmer</el-button\n      >\n    </span>\n  </template>\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        centerDialogVisible: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        centerDialogVisible: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Le contenu de Dialog bénéficie du lazy loading, ce qui signifie que le slot par défaut n'est pas généré par le DOM avant la première ouverture. Si vous avez besoin de manipuler le DOM ou d'accéder à un composant via "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ref"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", vous pouvez le faire avec la callback de l'évènement "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "open"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Destroy on Close (Translation needed) ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("When this is feature is enabled, the content under default slot will be destroyed with a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-if"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" directive. Enable this when you have perf concerns.")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Note that by enabling this feature, the content will not be rendered before "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "transition.beforeEnter"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" dispatched, there will only be "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "overlay"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "header(if any)"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "footer(if any)"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"centerDialogVisible = true\"\n  >Click to open Dialog</el-button\n>\n\n<el-dialog\n  title=\"Notice\"\n  v-model=\"centerDialogVisible\"\n  width=\"30%\"\n  destroy-on-close\n  center\n>\n  <span\n    >Notice: before dialog gets opened for the first time this node and the one\n    bellow will not be rendered</span\n  >\n  <div>\n    <strong>Extra content (Not rendered)</strong>\n  </div>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"centerDialogVisible = false\">Cancel</el-button>\n      <el-button type=\"primary\" @click=\"centerDialogVisible = false\"\n        >Confirm</el-button\n      >\n    </span>\n  </template>\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        centerDialogVisible: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        centerDialogVisible: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("When using "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "modal"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" = false, please make sure that "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" was set to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", because "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" was positioned by "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "position: relative"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", when "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "modal"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" gets removed, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" will position itself based on the current position in the DOM, instead of "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Document.Body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", thus the style will be messed up.")])], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributs ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>Visibilité du Dialog</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>title</td><td>Titre du Dialog. Peut aussi être passé via un slot (voir la table suivante).</td><td>string</td><td>—</td><td>—</td></tr><tr><td>width</td><td>Largeur du Dialog.</td><td>string / number</td><td>—</td><td>50%</td></tr><tr><td>fullscreen</td><td>Si le Dialog doit être en plein écran.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>top</td><td>Valeur du <code>margin-top</code> du CSS du Dialog.</td><td>string</td><td>—</td><td>15vh</td></tr><tr><td>modal</td><td>Si un masque est affiché.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>append-to-body</td><td>S&#39;il faut ajouter le Dialog au body. Un Dialog imbriqué doit avoir cet attribut à <code>true</code>.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lock-scroll</td><td>Si le défilement du body est désactivé.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>custom-class</td><td>Nom de classe pour le Dialog</td><td>string</td><td>—</td><td>—</td></tr><tr><td>open-delay</td><td>Temps (millisecondes) avant la ouvert</td><td>number</td><td>—</td><td>0</td></tr><tr><td>close-delay</td><td>Temps (millisecondes) avant la proche</td><td>number</td><td>—</td><td>0</td></tr><tr><td>close-on-click-modal</td><td>Si le Dialog peut être fermé en cliquant sur le masque.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>close-on-press-escape</td><td>Si le Dialog peut être fermé en appuyant sur Echap.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-close</td><td>Si le bouton de fermeture doit apparaître.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>before-close</td><td>Callback avant la fermeture du Dialog.</td><td>function(done)，done est utilisé pour fermer le Dialog.</td><td>—</td><td>—</td></tr><tr><td>center</td><td>Si le header et le footer doivent être centrés.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>destroy-on-close</td><td>Destroy elements in Dialog when closed</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slot ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nom</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>Contenu du Dialog.</td></tr><tr><td>title</td><td>Contenu du titre.</td></tr><tr><td>footer</td><td>Contenu du footer.</td></tr></tbody></table>", 1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Évènements ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>open</td><td>Se déclenche quand le Dialog s&#39;ouvre.</td><td>—</td></tr><tr><td>opened</td><td>Se déclenche quand l&#39;animation d&#39;ouverture est terminée.</td><td>—</td></tr><tr><td>close</td><td>Se déclenche quand le Dialog se ferme.</td><td>—</td></tr><tr><td>closed</td><td>Se déclenche quand l&#39;animation de fermeture du Dialog est terminée.</td><td>—</td></tr></tbody></table>", 1);

function dialogvue_type_template_id_203c90ff_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", dialogvue_type_template_id_203c90ff_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dialog",
    content: "Dialog",
    href: "#dialog",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dialogvue_type_template_id_203c90ff_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dialog"
    })]),
    _: 1
  }), dialogvue_type_template_id_203c90ff_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "usage",
    content: "Usage",
    href: "#usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dialogvue_type_template_id_203c90ff_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#usage"
    })]),
    _: 1
  }), dialogvue_type_template_id_203c90ff_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dialogvue_type_template_id_203c90ff_hoisted_6]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "personalisation",
    content: "Personalisation",
    href: "#personalisation",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#personalisation"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dialog-imbrique",
    content: "Dialog imbriqué",
    href: "#dialog-imbrique",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dialog-imbrique"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "centrer-le-contenu",
    content: "Centrer le contenu",
    href: "#centrer-le-contenu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#centrer-le-contenu"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "destroy-on-close-translation-needed",
    content: "Destroy on Close (Translation needed)",
    href: "#destroy-on-close-translation-needed",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#destroy-on-close-translation-needed"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, _hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributs",
    content: "Attributs",
    href: "#attributs",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributs"
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
  }), _hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "evenements",
    content: "Évènements",
    href: "#evenements",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#evenements"
    })]),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/dialog.md?vue&type=template&id=203c90ff

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/dialog.md?vue&type=script&lang=ts

/* harmony default export */ var dialogvue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquez pour ouvrir le modal");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", null, "Ceci est un message", -1);

      const _hoisted_3 = {
        class: "dialog-footer"
      };

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Annuler");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Confirmer");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.dialogVisible = true)
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Tips",
          modelValue: _ctx.dialogVisible,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.dialogVisible = $event),
          width: "30%",
          "before-close": _ctx.handleClose
        }, {
          footer: _withCtx(() => [_createElementVNode("span", _hoisted_3, [_createVNode(_component_el_button, {
            onClick: _cache[1] || (_cache[1] = $event => _ctx.dialogVisible = false)
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          }), _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[2] || (_cache[2] = $event => _ctx.dialogVisible = false)
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          })])]),
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["modelValue", "before-close"])]);
      }

      const democomponentExport = {
        data() {
          return {
            dialogVisible: false
          };
        },

        methods: {
          handleClose(done) {
            this.$confirm('Voulez-vous vraiment quitter ?').then(_ => {
              done();
            }).catch(_ => {});
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
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Ouvrir un modal avec tableau");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Ouvrir un modal avec formulaire");

      const _hoisted_3 = {
        class: "dialog-footer"
      };

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Annuler");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Confirmer");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        const _component_el_dialog = _resolveComponent("el-dialog");

        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.dialogTableVisible = true)
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Adresse d'expédition",
          modelValue: _ctx.dialogTableVisible,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.dialogTableVisible = $event)
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table, {
            data: _ctx.gridData
          }, {
            default: _withCtx(() => [_createVNode(_component_el_table_column, {
              property: "date",
              label: "Date",
              width: "150"
            }), _createVNode(_component_el_table_column, {
              property: "name",
              label: "Nom",
              width: "200"
            }), _createVNode(_component_el_table_column, {
              property: "address",
              label: "Adresse"
            })]),
            _: 1
          }, 8, ["data"])]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[2] || (_cache[2] = $event => _ctx.dialogFormVisible = true)
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Adresse d'expédition",
          modelValue: _ctx.dialogFormVisible,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.dialogFormVisible = $event)
        }, {
          footer: _withCtx(() => [_createElementVNode("span", _hoisted_3, [_createVNode(_component_el_button, {
            onClick: _cache[5] || (_cache[5] = $event => _ctx.dialogFormVisible = false)
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          }), _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[6] || (_cache[6] = $event => _ctx.dialogFormVisible = false)
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          })])]),
          default: _withCtx(() => [_createVNode(_component_el_form, {
            model: _ctx.form
          }, {
            default: _withCtx(() => [_createVNode(_component_el_form_item, {
              label: "Nom de promotion",
              "label-width": _ctx.formLabelWidth
            }, {
              default: _withCtx(() => [_createVNode(_component_el_input, {
                modelValue: _ctx.form.name,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.form.name = $event),
                autocomplete: "off"
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label-width"]), _createVNode(_component_el_form_item, {
              label: "Zones",
              "label-width": _ctx.formLabelWidth
            }, {
              default: _withCtx(() => [_createVNode(_component_el_select, {
                modelValue: _ctx.form.region,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.form.region = $event),
                placeholder: "Sélectionnez une zone"
              }, {
                default: _withCtx(() => [_createVNode(_component_el_option, {
                  label: "Zone No.1",
                  value: "shanghai"
                }), _createVNode(_component_el_option, {
                  label: "Zone No.2",
                  value: "beijing"
                })]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label-width"])]),
            _: 1
          }, 8, ["model"])]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            gridData: [{
              date: '2016-05-02',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-04',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-01',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-03',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }],
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            formLabelWidth: '120px'
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
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Ouvrir le modal extérieur");

      const _hoisted_2 = {
        class: "dialog-footer"
      };

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Annuler");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Ouvrir le modal intérieur");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.outerVisible = true)
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Modal extérieur",
          modelValue: _ctx.outerVisible,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.outerVisible = $event)
        }, {
          footer: _withCtx(() => [_createElementVNode("div", _hoisted_2, [_createVNode(_component_el_button, {
            onClick: _cache[2] || (_cache[2] = $event => _ctx.outerVisible = false)
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[3] || (_cache[3] = $event => _ctx.innerVisible = true)
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })])]),
          default: _withCtx(() => [_createVNode(_component_el_dialog, {
            width: "30%",
            title: "Modal intérieur",
            modelValue: _ctx.innerVisible,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.innerVisible = $event),
            "append-to-body": ""
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            outerVisible: false,
            innerVisible: false
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
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquez pour ouvrir le modal");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", null, "Le contenu du modal n'est pas centré par défaut.", -1);

      const _hoisted_3 = {
        class: "dialog-footer"
      };

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Annuler");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Confirmer");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.centerDialogVisible = true)
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Attention",
          modelValue: _ctx.centerDialogVisible,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.centerDialogVisible = $event),
          width: "30%",
          center: ""
        }, {
          footer: _withCtx(() => [_createElementVNode("span", _hoisted_3, [_createVNode(_component_el_button, {
            onClick: _cache[1] || (_cache[1] = $event => _ctx.centerDialogVisible = false)
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          }), _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[2] || (_cache[2] = $event => _ctx.centerDialogVisible = false)
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          })])]),
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            centerDialogVisible: false
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
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Dialog");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", null, "Notice: before dialog gets opened for the first time this node and the one bellow will not be rendered", -1);

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", null, [/*#__PURE__*/_createElementVNode("strong", null, "Extra content (Not rendered)")], -1);

      const _hoisted_4 = {
        class: "dialog-footer"
      };

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Cancel");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("Confirm");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.centerDialogVisible = true)
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Notice",
          modelValue: _ctx.centerDialogVisible,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.centerDialogVisible = $event),
          width: "30%",
          "destroy-on-close": "",
          center: ""
        }, {
          footer: _withCtx(() => [_createElementVNode("span", _hoisted_4, [_createVNode(_component_el_button, {
            onClick: _cache[1] || (_cache[1] = $event => _ctx.centerDialogVisible = false)
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          }), _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[2] || (_cache[2] = $event => _ctx.centerDialogVisible = false)
          }, {
            default: _withCtx(() => [_hoisted_6]),
            _: 1
          })])]),
          default: _withCtx(() => [_hoisted_2, _hoisted_3]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            centerDialogVisible: false
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
// CONCATENATED MODULE: ./website/docs/fr-FR/dialog.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/dialog.md



dialogvue_type_script_lang_ts.render = dialogvue_type_template_id_203c90ff_render

/* harmony default export */ var dialog = __webpack_exports__["default"] = (dialogvue_type_script_lang_ts);

/***/ })

}]);