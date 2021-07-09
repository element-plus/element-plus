(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[175],{

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/message-box.md?vue&type=template&id=cc6347f2

var message_boxvue_type_template_id_cc6347f2_hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h2 id=\"messagebox\"><a class=\"header-anchor\" href=\"#messagebox\">¶</a> MessageBox</h2><p>Un ensemble de fenêtres modales pour afficher des messages système, tels que des alertes, des demandes de confirmation ou des informations importantes.</p><div class=\"tip\"><p>MessageBox est avant tout conçue pour émuler des <code>alert</code>, <code>confirm</code> ou <code>prompt</code>, son contenu devrait donc être simple. Pour afficher un contenu plus riche, utilisez plutôt Dialog.</p></div><h3 id=\"alert\"><a class=\"header-anchor\" href=\"#alert\">¶</a> Alert</h3><p>Alert interrompt l&#39;action de l&#39;utilisateur jusqu&#39;à ce qu&#39;il confirme.</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Ouvrez un alert en appelant la méthode "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$alert"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Elle simule une "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "alert"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" système et ne peut être fermée en pressant ESC ou en cliquant hors de la boite. Dans cet exemple, deux paramètres "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" sont reçus. Notez que lorsque la boite est fermée, elle retourne un objet "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Si vous n'êtes pas certains que tout vos navigateurs cibles supportent "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", utilisez un polyfill ou utilisez des callbacks comme dans l'exemple qui suit.")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Cliquez pour ouvrir la MessageBox</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert('Ceci est un message', 'Titre', {\n          confirmButtonText: 'OK',\n          callback: action => {\n            this.$message({\n              type: 'info',\n              message: `action: ${ action }`\n            });\n          }\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.alert('Ceci est un message', 'Titre', {\n          confirmButtonText: 'OK',\n          callback: (action) => {\n            this.$message({\n              type: 'info',\n              message: `action: ${action}`,\n            });\n          },\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "confirm"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#confirm"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Confirm")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Confirm est utilisé pour demander une confirmation à l'utilisateur.", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Appelez la méthode "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$confirm"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour ouvrir une confirm, qui simule le "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "confirm"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" système. Vous pouvez aussi personnaliser MessageBox en passant un objet à l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". L'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" indique le type de message (voir en bas de la page pour la liste des valeurs possibles). Notez que l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" doit être de type "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". S'il se trouve être un "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "object"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", il sera considéré comme étant l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Cet exemple utilise une "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour gérer la suite du processus.")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Cliquez pour ouvrir la MessageBox</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('Ceci effacera le fichier. Continuer?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Annuler',\n          type: 'warning'\n        }).then(() => {\n          this.$message({\n            type: 'success',\n            message: 'Fichier supprimé'\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: 'Suppression annulée'\n          });\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.confirm('Ceci effacera le fichier. Continuer?', 'Warning', {\n            confirmButtonText: 'OK',\n            cancelButtonText: 'Annuler',\n            type: 'warning',\n          })\n          .then(() => {\n            ElMessage({\n              type: 'success',\n              message: 'Fichier supprimé',\n            });\n          })\n          .catch(() => {\n            ElMessage({\n              type: 'info',\n              message: 'Suppression annulée',\n            });\n          });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "prompt"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#prompt"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Prompt")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Prompt est utilisé lorsqu'un utilisateur.", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Appellez la méthode "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$prompt"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour ouvrir un prompt simulant le "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "prompt"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" système. Vous pouvez utiliser le paramètre "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "inputPattern"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour spécifier un pattern à l'aide d'une RegExp. Utilisez "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "inputValidator"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour indiquer la méthode de validation, qui devra retourner un "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" ou un "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Retourner "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" ou un "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" veut dire que la validation a échouée, et la string ainsi fournie sera le "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "inputErrorMessage"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". De plus, vous pouvez personnaliser le placeholder du champs avec le paramètre "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "inputPlaceholder"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Cliquez pour ouvrir la MessageBox</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$prompt('Entrez votre e-mail', 'Astuce', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Annuler',\n          inputPattern: /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,\n          inputErrorMessage: 'E-mail invalide'\n        }).then(({ value }) => {\n          this.$message({\n            type: 'success',\n            message: 'Votre e-mail est: ' + value\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: 'Annulé'\n          });\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.prompt('Entrez votre e-mail', 'Astuce', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Annuler',\n          inputPattern: /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,\n          inputErrorMessage: 'E-mail invalide',\n        }).then(({ value }) => {\n          ElMessage({\n            type: 'success',\n            message: `Votre e-mail est: ${value}`,\n          });\n        }).catch(() => {\n          ElMessage({\n            type: 'info',\n            message: 'Annulé',\n          });\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "personnalisation"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#personnalisation"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Personnalisation")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Il est possible d'afficher du contenu un peu plus varié et personnalisé.", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("les trois précédentes méthodes sont des repackagings de la méthode "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". cet exemple appelle directement "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" en utilisant l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "showCancelButton"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour indiquer si un bouton annuler doit être affiché. De plus, vous pouvez utiliser "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "cancelButtonClass"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour ajouter du style et "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "cancelButtonText"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour personnaliser le bouton texte (voir la liste complète en fin de page). La méthode "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "beforeClose"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("est appelée quand la MessageBox va être fermée et prévient sa fermeture. Elle prend trois paramètres: "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "action"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "instance"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Elle vous permet ainsi d'effectuer des actions avant la fermeture, e.g. activer "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "loading"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour le bouton de confirmation. Appelez "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour fermer la MessageBox, sinon l'instance ne sera jamais fermée.")])], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Cliquez pour ouvrir la MessageBox</el-button>\n</template>\n\n<script>\n  import { h } from 'vue';\n\n  export default {\n    methods: {\n      open() {\n        this.$msgbox({\n          title: 'Message',\n          message: h('p', null, [\n            h('span', null, 'Le message peut être '),\n            h('i', { style: 'color: teal' }, 'VNode')\n          ]),\n          showCancelButton: true,\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Annuler',\n          beforeClose: (action, instance, done) => {\n            if (action === 'confirm') {\n              instance.confirmButtonLoading = true;\n              instance.confirmButtonText = 'Chargement...';\n              setTimeout(() => {\n                done();\n                setTimeout(() => {\n                  instance.confirmButtonLoading = false;\n                }, 300);\n              }, 3000);\n            } else {\n              done();\n            }\n          }\n        }).then(action => {\n          this.$message({\n            type: 'info',\n            message: 'Action: ' + action\n          });\n        });\n      },\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, h } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox({\n          title: 'Message',\n          message: h('p', null, [\n            h('span', null, 'Le message peut être '),\n            h('i', { style: 'color: teal' }, 'VNode'),\n          ]),\n          showCancelButton: true,\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Annuler',\n          beforeClose: (action, instance, done) => {\n            if (action === 'confirm') {\n              instance.confirmButtonLoading = true;\n              instance.confirmButtonText = 'Chargement...';\n              setTimeout(() => {\n                done();\n                setTimeout(() => {\n                  instance.confirmButtonLoading = false;\n                }, 300);\n              }, 3000);\n            } else {\n              done();\n            }\n          },\n        }).then((action) => {\n          ElMessage({\n            type: 'info',\n            message: `Action: ${action}`,\n          });\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<div class=\"tip\"><p>Le contenu de MessageBox peut être <code>VNode</code>, Vous permettant de passer des composants personnalisés. Lorsque vous ouvrer MessageBox, Vue compare le nouveau <code>VNode</code> avec l&#39;ancien <code>VNode</code>, puis détermine comment rafraîchir efficacement l&#39;UI, le composant peut donc ne pas être totalement re-rendu (<a href=\"https://github.com/ElemeFE/element/issues/8931\">#8931</a>). Dans ce cas, Vous pouvez ajouter une clé unique à <code>VNode</code> à chaque fois que MessageBox s&#39;ouvre: <a href=\"https://jsfiddle.net/zhiyang/ezmhq2ef\">exemple</a>.</p></div><h3 id=\"utiliser-du-html\"><a class=\"header-anchor\" href=\"#utiliser-du-html\">¶</a> Utiliser du HTML</h3><p><code>message</code> supporte le HTML.</p>", 3);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Mettez "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" à "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" sera traité comme du HTML.")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Cliquez pour ouvrir la MessageBox</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert('<strong>Ceci est du <i>HTML</i></strong>', 'HTML', {\n          dangerouslyUseHTMLString: true\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.alert('<strong>Ceci est du <i>HTML</i></strong>', 'HTML', {\n          dangerouslyUseHTMLString: true,\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<div class=\"warning\"><p>Bien que la propriété <code>message</code> supporte le HTML, générer du contenu HTML dynamiquement peut être très dangereux, car cela permet des <a href=\"https://en.wikipedia.org/wiki/Cross-site_scripting\">attaques XSS</a>. Donc lorsque <code>dangerouslyUseHTMLString</code> est présent, soyez certain de sécuriser le contenu de <code>message</code>, et n&#39;assignez <strong>jamais</strong> à <code>message</code> du contenu fournit par l&#39;utilisateur.</p></div><h3 id=\"distinguer-annuler-de-fermer\"><a class=\"header-anchor\" href=\"#distinguer-annuler-de-fermer\">¶</a> Distinguer &#39;annuler&#39; de &#39;fermer&#39;</h3><p>Dans certains cas, les boutons fermer et annuler peuvent avoir des sens différents.</p>", 3);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Par défaut, le paramètre de la "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "callback"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" et de la promesse rejetée est 'cancel' lorsque l'utilisateur annule (clique sur le bouton annuler) ou lorsqu'il ferme la fenêtre (clique sur le bouton fermer, hors de la fenêtre, ou presse ESC). Si "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "distinguishCancelAndClose"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" est à "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", le dernier cas précédent renvoie 'close' au lieu de 'cancel' afin de pouvoir gérer les deux actions différemment.")])], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Cliquez pour ouvrir la MessageBox</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('Vous avez du travail non enregistré, enregistrer et quitter?', 'Confirm', {\n          distinguishCancelAndClose: true,\n          confirmButtonText: 'Enregistrer',\n          cancelButtonText: 'Ne pas enregistrer'\n        })\n          .then(() => {\n            this.$message({\n              type: 'info',\n              message: 'Enregistré. Passage a une nouvelle route.'\n            });\n          })\n          .catch(action => {\n            this.$message({\n              type: 'info',\n              message: action === 'cancel'\n                ? 'Changements annulés. Passage sur une nouvelle route.'\n                : 'Reste sur la même route'\n            })\n          });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n\n      const open = () => {\n        ElMessageBox.confirm('Vous avez du travail non enregistré, enregistrer et quitter?', 'Confirm', {\n          distinguishCancelAndClose: true,\n          confirmButtonText: 'Enregistrer',\n          cancelButtonText: 'Ne pas enregistrer',\n        })\n          .then(() => {\n            ElMessage({\n              type: 'info',\n              message: 'Enregistré. Passage a une nouvelle route.',\n            });\n          })\n          .catch((action) => {\n            ElMessage({\n              type: 'info',\n              message: action === 'cancel'\n                ? 'Changements annulés. Passage sur une nouvelle route.'\n                : 'Reste sur la même route',\n            });\n          });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "contenu-centre"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#contenu-centre"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Contenu centré")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "le contenu de MessageBox peut être centré.", -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Mettre "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" à "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" centrera le contenu")])], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Cliquez pour ouvrir la MessageBox</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('Ceci effacera le fichier, continuer?' , 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Annuler',\n          type: 'warning',\n          center: true\n        }).then(() => {\n          this.$message({\n            type: 'success',\n            message: 'Fichier supprimé'\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: 'Annulé'\n          });\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.confirm('Ceci effacera le fichier, continuer?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Annuler',\n          type: 'warning',\n          center: true,\n        }).then(() => {\n          ElMessage({\n            type: 'success',\n            message: 'Fichier supprimé',\n          });\n        }).catch(() => {\n          ElMessage({\n            type: 'info',\n            message: 'Annulé',\n          });\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"methode-globale\"><a class=\"header-anchor\" href=\"#methode-globale\">¶</a> Méthode globale</h3><p>Si Element Plus est importé entièrement, il ajoutera les méthodes suivantes à <code>app.config.globalProperties</code>: <code>$msgbox</code>, <code>$alert</code>, <code>$confirm</code> et <code>$prompt</code>. Dans ce cas vous pouvez appeler <code>MessageBox</code> comme nous l&#39;avons fait dans cette page. Les paramètres sont:</p><ul><li><code>$msgbox(options)</code></li><li><code>$alert(message, title, options)</code> ou <code>$alert(message, options)</code></li><li><code>$confirm(message, title, options)</code> ou <code>$confirm(message, options)</code></li><li><code>$prompt(message, title, options)</code> ou <code>$prompt(message, options)</code></li></ul><h3 id=\"import-a-la-demande\"><a class=\"header-anchor\" href=\"#import-a-la-demande\">¶</a> Import à la demande</h3><p>Si vous préférer importer <code>MessageBox</code> à la demande:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElMessageBox } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code></pre><p>Les méthodes correspondantes sont: <code>ElMessageBox</code>, <code>ElMessageBox.alert</code>, <code>ElMessageBox.confirm</code> et <code>ElMessageBox.prompt</code>. Les paramètres sont les mêmes que précédemment.</p><h3 id=\"options\"><a class=\"header-anchor\" href=\"#options\">¶</a> Options</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>title</td><td>Titre de la MessageBox.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>message</td><td>Contenu de la MessageBox.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>Si <code>message</code> doit être traité comme du HTML.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>Type du message, utilisé pour le choix d&#39;icône.</td><td>string</td><td>success / info / warning / error</td><td>—</td></tr><tr><td>iconClass</td><td>Classe d&#39;icône personnalisée, écrase <code>type</code>.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>Nom de classe pour MessageBox.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>callback</td><td>La callback de fermeture de MessageBox si vous n&#39;utilisez pas les promesses.</td><td>function(action, instance), ou <code>action</code> peut être &#39;confirm&#39;, &#39;cancel&#39; ou &#39;close&#39;, et <code>instance</code> est l&#39;instance MessageBox.</td><td>—</td><td>—</td></tr><tr><td>showClose</td><td>Si l&#39;icône de fermeture doit être affichée.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>beforeClose</td><td>La callback de pré-fermeture qui empèchera MessageBox de se fermer.</td><td>function(action, instance, done), ou <code>action</code> peut-être &#39;confirm&#39;, &#39;cancel&#39; ou &#39;close&#39;; <code>instance</code> est l&#39;instance de MessageBox; <code>done</code> est la méthode pour fermer l&#39;instance.</td><td>—</td><td>—</td></tr><tr><td>distinguishCancelAndClose</td><td>S&#39;il doit y avoir une différence entre l&#39;annulation et la fermeture de la MessageBox.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lockScroll</td><td>Si le défilement de la page doit être bloqué lorsque la MessageBox est active.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showCancelButton</td><td>Si le bouton annuler doit être affiché.</td><td>boolean</td><td>—</td><td>false (true dans le cas de confirm ou prompt).</td></tr><tr><td>showConfirmButton</td><td>Si le bouton confirmer doit être affiché.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>cancelButtonText</td><td>Le texte du bouton annuler.</td><td>string</td><td>—</td><td>Cancel</td></tr><tr><td>confirmButtonText</td><td>Le texte du bouton confirmer.</td><td>string</td><td>—</td><td>OK</td></tr><tr><td>cancelButtonClass</td><td>Classe du bouton annuler.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>confirmButtonClass</td><td>Classe du bouton confirmer.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closeOnClickModal</td><td>Si MessageBox peut être fermée en cliquant en dehors.</td><td>boolean</td><td>—</td><td>true (false dans le cas de alert).</td></tr><tr><td>closeOnPressEscape</td><td>Si MessageBox peut être fermée en pressant ESC.</td><td>boolean</td><td>—</td><td>true (false dans le cas de alert)</td></tr><tr><td>closeOnHashChange</td><td>Si MessageBox doit être fermée quand le hash change.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showInput</td><td>Si un champs d&#39;input doit être affiché.</td><td>boolean</td><td>—</td><td>false (true dans le cas de prompt).</td></tr><tr><td>inputPlaceholder</td><td>Placeholder du champs d&#39;input.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputType</td><td>Type du champs d&#39;input.</td><td>string</td><td>—</td><td>text</td></tr><tr><td>inputValue</td><td>Valeur initiale du champs d&#39;input.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputPattern</td><td>RegExp du champs d&#39;input.</td><td>regexp</td><td>—</td><td>—</td></tr><tr><td>inputValidator</td><td>Fonction de validation du champs d&#39;input. Doit retourner un boolean ou un string. Si c&#39;est un string, il sera assigné à inputErrorMessage.</td><td>function</td><td>—</td><td>—</td></tr><tr><td>inputErrorMessage</td><td>Message d&#39;erreur lorsque la validation échoue.</td><td>string</td><td>—</td><td>Illegal input</td></tr><tr><td>center</td><td>Si le contenu doit être centré.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>roundButton</td><td>Si le bouton doit être rond.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>buttonSize</td><td>custom size of confirm and cancel buttons</td><td>string</td><td>mini / small / medium / large</td><td>small</td></tr></tbody></table>", 9);

function message_boxvue_type_template_id_cc6347f2_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo6");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", message_boxvue_type_template_id_cc6347f2_hoisted_1, [_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, _hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    _: 1
  }), _hoisted_31, _hoisted_32, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_34];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_33];
    }),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/message-box.md?vue&type=template&id=cc6347f2

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/message-box.md?vue&type=script&lang=ts


/* harmony default export */ var message_boxvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquez pour ouvrir la MessageBox");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this = this;

            this.$alert('Ceci est un message', 'Titre', {
              confirmButtonText: 'OK',
              callback: function callback(action) {
                _this.$message({
                  type: 'info',
                  message: "action: " + action
                });
              }
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquez pour ouvrir la MessageBox");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this2 = this;

            this.$confirm('Ceci effacera le fichier. Continuer?', 'Warning', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Annuler',
              type: 'warning'
            }).then(function () {
              _this2.$message({
                type: 'success',
                message: 'Fichier supprimé'
              });
            }).catch(function () {
              _this2.$message({
                type: 'info',
                message: 'Suppression annulée'
              });
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquez pour ouvrir la MessageBox");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this3 = this;

            this.$prompt('Entrez votre e-mail', 'Astuce', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Annuler',
              inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
              inputErrorMessage: 'E-mail invalide'
            }).then(function (_ref) {
              var value = _ref.value;

              _this3.$message({
                type: 'success',
                message: 'Votre e-mail est: ' + value
              });
            }).catch(function () {
              _this3.$message({
                type: 'info',
                message: 'Annulé'
              });
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquez pour ouvrir la MessageBox");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var h = vue_esm_browser_prod["t" /* h */];
      var democomponentExport = {
        methods: {
          open: function open() {
            var _this4 = this;

            this.$msgbox({
              title: 'Message',
              message: h('p', null, [h('span', null, 'Le message peut être '), h('i', {
                style: 'color: teal'
              }, 'VNode')]),
              showCancelButton: true,
              confirmButtonText: 'OK',
              cancelButtonText: 'Annuler',
              beforeClose: function beforeClose(action, instance, done) {
                if (action === 'confirm') {
                  instance.confirmButtonLoading = true;
                  instance.confirmButtonText = 'Chargement...';
                  setTimeout(function () {
                    done();
                    setTimeout(function () {
                      instance.confirmButtonLoading = false;
                    }, 300);
                  }, 3000);
                } else {
                  done();
                }
              }
            }).then(function (action) {
              _this4.$message({
                type: 'info',
                message: 'Action: ' + action
              });
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquez pour ouvrir la MessageBox");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            this.$alert('<strong>Ceci est du <i>HTML</i></strong>', 'HTML', {
              dangerouslyUseHTMLString: true
            });
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquez pour ouvrir la MessageBox");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this5 = this;

            this.$confirm('Vous avez du travail non enregistré, enregistrer et quitter?', 'Confirm', {
              distinguishCancelAndClose: true,
              confirmButtonText: 'Enregistrer',
              cancelButtonText: 'Ne pas enregistrer'
            }).then(function () {
              _this5.$message({
                type: 'info',
                message: 'Enregistré. Passage a une nouvelle route.'
              });
            }).catch(function (action) {
              _this5.$message({
                type: 'info',
                message: action === 'cancel' ? 'Changements annulés. Passage sur une nouvelle route.' : 'Reste sur la même route'
              });
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquez pour ouvrir la MessageBox");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open: function open() {
            var _this6 = this;

            this.$confirm('Ceci effacera le fichier, continuer?', 'Warning', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Annuler',
              type: 'warning',
              center: true
            }).then(function () {
              _this6.$message({
                type: 'success',
                message: 'Fichier supprimé'
              });
            }).catch(function () {
              _this6.$message({
                type: 'info',
                message: 'Annulé'
              });
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/message-box.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/message-box.md



message_boxvue_type_script_lang_ts.render = message_boxvue_type_template_id_cc6347f2_render

/* harmony default export */ var message_box = __webpack_exports__["default"] = (message_boxvue_type_script_lang_ts);

/***/ })

}]);