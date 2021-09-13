(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[178],{

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/message-box.md?vue&type=template&id=244651c5

const message_boxvue_type_template_id_244651c5_hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("MessageBox ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Un ensemble de fenêtres modales pour afficher des messages système, tels que des alertes, des demandes de confirmation ou des informations importantes.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("MessageBox est avant tout conçue pour émuler des "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "alert"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "confirm"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" ou "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "prompt"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", son contenu devrait donc être simple. Pour afficher un contenu plus riche, utilisez plutôt Dialog.")])], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Alert ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Alert interrompt l'action de l'utilisateur jusqu'à ce qu'il confirme.", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Ouvrez un alert en appelant la méthode "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$alert"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Elle simule une "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "alert"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" système et ne peut être fermée en pressant ESC ou en cliquant hors de la boite. Dans cet exemple, deux paramètres "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" sont reçus. Notez que lorsque la boite est fermée, elle retourne un objet "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Si vous n'êtes pas certains que tout vos navigateurs cibles supportent "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", utilisez un polyfill ou utilisez des callbacks comme dans l'exemple qui suit.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\"\n    >Cliquez pour ouvrir la MessageBox</el-button\n  >\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert('Ceci est un message', 'Titre', {\n          confirmButtonText: 'OK',\n          callback: (action) => {\n            this.$message({\n              type: 'info',\n              message: `action: ${action}`,\n            })\n          },\n        })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.alert('Ceci est un message', 'Titre', {\n          confirmButtonText: 'OK',\n          callback: (action) => {\n            this.$message({\n              type: 'info',\n              message: `action: ${action}`,\n            });\n          },\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Confirm ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Confirm est utilisé pour demander une confirmation à l'utilisateur.", -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Appelez la méthode "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$confirm"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour ouvrir une confirm, qui simule le "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "confirm"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" système. Vous pouvez aussi personnaliser MessageBox en passant un objet à l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". L'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" indique le type de message (voir en bas de la page pour la liste des valeurs possibles). Notez que l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" doit être de type "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". S'il se trouve être un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "object"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", il sera considéré comme étant l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Cet exemple utilise une "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour gérer la suite du processus.")])], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\"\n    >Cliquez pour ouvrir la MessageBox</el-button\n  >\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('Ceci effacera le fichier. Continuer?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Annuler',\n          type: 'warning',\n        })\n          .then(() => {\n            this.$message({\n              type: 'success',\n              message: 'Fichier supprimé',\n            })\n          })\n          .catch(() => {\n            this.$message({\n              type: 'info',\n              message: 'Suppression annulée',\n            })\n          })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.confirm('Ceci effacera le fichier. Continuer?', 'Warning', {\n            confirmButtonText: 'OK',\n            cancelButtonText: 'Annuler',\n            type: 'warning',\n          })\n          .then(() => {\n            ElMessage({\n              type: 'success',\n              message: 'Fichier supprimé',\n            });\n          })\n          .catch(() => {\n            ElMessage({\n              type: 'info',\n              message: 'Suppression annulée',\n            });\n          });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Prompt ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Prompt est utilisé lorsqu'un utilisateur.", -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Appellez la méthode "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$prompt"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour ouvrir un prompt simulant le "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "prompt"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" système. Vous pouvez utiliser le paramètre "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "inputPattern"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour spécifier un pattern à l'aide d'une RegExp. Utilisez "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "inputValidator"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour indiquer la méthode de validation, qui devra retourner un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" ou un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Retourner "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" ou un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" veut dire que la validation a échouée, et la string ainsi fournie sera le "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "inputErrorMessage"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". De plus, vous pouvez personnaliser le placeholder du champs avec le paramètre "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "inputPlaceholder"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\"\n    >Cliquez pour ouvrir la MessageBox</el-button\n  >\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$prompt('Entrez votre e-mail', 'Astuce', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Annuler',\n          inputPattern:\n            /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,\n          inputErrorMessage: 'E-mail invalide',\n        })\n          .then(({ value }) => {\n            this.$message({\n              type: 'success',\n              message: 'Votre e-mail est: ' + value,\n            })\n          })\n          .catch(() => {\n            this.$message({\n              type: 'info',\n              message: 'Annulé',\n            })\n          })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.prompt('Entrez votre e-mail', 'Astuce', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Annuler',\n          inputPattern: /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,\n          inputErrorMessage: 'E-mail invalide',\n        }).then(({ value }) => {\n          ElMessage({\n            type: 'success',\n            message: `Votre e-mail est: ${value}`,\n          });\n        }).catch(() => {\n          ElMessage({\n            type: 'info',\n            message: 'Annulé',\n          });\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Personnalisation ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Il est possible d'afficher du contenu un peu plus varié et personnalisé.", -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("les trois précédentes méthodes sont des repackagings de la méthode "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". cet exemple appelle directement "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en utilisant l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "showCancelButton"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour indiquer si un bouton annuler doit être affiché. De plus, vous pouvez utiliser "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "cancelButtonClass"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour ajouter du style et "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "cancelButtonText"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour personnaliser le bouton texte (voir la liste complète en fin de page). La méthode "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "beforeClose"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("est appelée quand la MessageBox va être fermée et prévient sa fermeture. Elle prend trois paramètres: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "action"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "instance"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Elle vous permet ainsi d'effectuer des actions avant la fermeture, e.g. activer "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "loading"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour le bouton de confirmation. Appelez "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour fermer la MessageBox, sinon l'instance ne sera jamais fermée.")])], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\"\n    >Cliquez pour ouvrir la MessageBox</el-button\n  >\n</template>\n\n<script>\n  import { h } from 'vue'\n\n  export default {\n    methods: {\n      open() {\n        this.$msgbox({\n          title: 'Message',\n          message: h('p', null, [\n            h('span', null, 'Le message peut être '),\n            h('i', { style: 'color: teal' }, 'VNode'),\n          ]),\n          showCancelButton: true,\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Annuler',\n          beforeClose: (action, instance, done) => {\n            if (action === 'confirm') {\n              instance.confirmButtonLoading = true\n              instance.confirmButtonText = 'Chargement...'\n              setTimeout(() => {\n                done()\n                setTimeout(() => {\n                  instance.confirmButtonLoading = false\n                }, 300)\n              }, 3000)\n            } else {\n              done()\n            }\n          },\n        }).then((action) => {\n          this.$message({\n            type: 'info',\n            message: 'Action: ' + action,\n          })\n        })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, h } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox({\n          title: 'Message',\n          message: h('p', null, [\n            h('span', null, 'Le message peut être '),\n            h('i', { style: 'color: teal' }, 'VNode'),\n          ]),\n          showCancelButton: true,\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Annuler',\n          beforeClose: (action, instance, done) => {\n            if (action === 'confirm') {\n              instance.confirmButtonLoading = true;\n              instance.confirmButtonText = 'Chargement...';\n              setTimeout(() => {\n                done();\n                setTimeout(() => {\n                  instance.confirmButtonLoading = false;\n                }, 300);\n              }, 3000);\n            } else {\n              done();\n            }\n          },\n        }).then((action) => {\n          ElMessage({\n            type: 'info',\n            message: `Action: ${action}`,\n          });\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_21 = {
  class: "tip"
};

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Le contenu de MessageBox peut être ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "VNode", -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", Vous permettant de passer des composants personnalisés. Lorsque vous ouvrer MessageBox, Vue compare le nouveau ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "VNode", -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" avec l'ancien ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "VNode", -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", puis détermine comment rafraîchir efficacement l'UI, le composant peut donc ne pas être totalement re-rendu (");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("#8931");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("). Dans ce cas, Vous pouvez ajouter une clé unique à ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "VNode", -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" à chaque fois que MessageBox s'ouvre: ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("exemple");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Utiliser du HTML ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" supporte le HTML.")], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Mettez "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" à "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" sera traité comme du HTML.")])], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\"\n    >Cliquez pour ouvrir la MessageBox</el-button\n  >\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert('<strong>Ceci est du <i>HTML</i></strong>', 'HTML', {\n          dangerouslyUseHTMLString: true,\n        })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.alert('<strong>Ceci est du <i>HTML</i></strong>', 'HTML', {\n          dangerouslyUseHTMLString: true,\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_39 = {
  class: "warning"
};

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bien que la propriété ");

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message", -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" supporte le HTML, générer du contenu HTML dynamiquement peut être très dangereux, car cela permet des ");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("attaques XSS");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Donc lorsque ");

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dangerouslyUseHTMLString", -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" est présent, soyez certain de sécuriser le contenu de ");

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message", -1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", et n'assignez ");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "jamais", -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" à ");

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message", -1);

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" du contenu fournit par l'utilisateur.");

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Distinguer 'annuler' de 'fermer' ");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Dans certains cas, les boutons fermer et annuler peuvent avoir des sens différents.", -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Par défaut, le paramètre de la "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "callback"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" et de la promesse rejetée est 'cancel' lorsque l'utilisateur annule (clique sur le bouton annuler) ou lorsqu'il ferme la fenêtre (clique sur le bouton fermer, hors de la fenêtre, ou presse ESC). Si "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "distinguishCancelAndClose"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" est à "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", le dernier cas précédent renvoie 'close' au lieu de 'cancel' afin de pouvoir gérer les deux actions différemment.")])], -1);

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\"\n    >Cliquez pour ouvrir la MessageBox</el-button\n  >\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm(\n          'Vous avez du travail non enregistré, enregistrer et quitter?',\n          'Confirm',\n          {\n            distinguishCancelAndClose: true,\n            confirmButtonText: 'Enregistrer',\n            cancelButtonText: 'Ne pas enregistrer',\n          }\n        )\n          .then(() => {\n            this.$message({\n              type: 'info',\n              message: 'Enregistré. Passage a une nouvelle route.',\n            })\n          })\n          .catch((action) => {\n            this.$message({\n              type: 'info',\n              message:\n                action === 'cancel'\n                  ? 'Changements annulés. Passage sur une nouvelle route.'\n                  : 'Reste sur la même route',\n            })\n          })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n\n      const open = () => {\n        ElMessageBox.confirm('Vous avez du travail non enregistré, enregistrer et quitter?', 'Confirm', {\n          distinguishCancelAndClose: true,\n          confirmButtonText: 'Enregistrer',\n          cancelButtonText: 'Ne pas enregistrer',\n        })\n          .then(() => {\n            ElMessage({\n              type: 'info',\n              message: 'Enregistré. Passage a une nouvelle route.',\n            });\n          })\n          .catch((action) => {\n            ElMessage({\n              type: 'info',\n              message: action === 'cancel'\n                ? 'Changements annulés. Passage sur une nouvelle route.'\n                : 'Reste sur la même route',\n            });\n          });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Contenu centré ");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "le contenu de MessageBox peut être centré.", -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Mettre "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" à "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" centrera le contenu")])], -1);

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\"\n    >Cliquez pour ouvrir la MessageBox</el-button\n  >\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('Ceci effacera le fichier, continuer?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Annuler',\n          type: 'warning',\n          center: true,\n        })\n          .then(() => {\n            this.$message({\n              type: 'success',\n              message: 'Fichier supprimé',\n            })\n          })\n          .catch(() => {\n            this.$message({\n              type: 'info',\n              message: 'Annulé',\n            })\n          })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.confirm('Ceci effacera le fichier, continuer?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Annuler',\n          type: 'warning',\n          center: true,\n        }).then(() => {\n          ElMessage({\n            type: 'success',\n            message: 'Fichier supprimé',\n          });\n        }).catch(() => {\n          ElMessage({\n            type: 'info',\n            message: 'Annulé',\n          });\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Méthode globale ");

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>Si Element Plus est importé entièrement, il ajoutera les méthodes suivantes à <code>app.config.globalProperties</code>: <code>$msgbox</code>, <code>$alert</code>, <code>$confirm</code> et <code>$prompt</code>. Dans ce cas vous pouvez appeler <code>MessageBox</code> comme nous l&#39;avons fait dans cette page. Les paramètres sont:</p><ul><li><code>$msgbox(options)</code></li><li><code>$alert(message, title, options)</code> ou <code>$alert(message, options)</code></li><li><code>$confirm(message, title, options)</code> ou <code>$confirm(message, options)</code></li><li><code>$prompt(message, title, options)</code> ou <code>$prompt(message, options)</code></li></ul>", 2);

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Import à la demande ");

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>Si vous préférer importer <code>MessageBox</code> à la demande:</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElMessageBox } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n</code><span class=\"lang-mark\">js</span></pre><p>Les méthodes correspondantes sont: <code>ElMessageBox</code>, <code>ElMessageBox.alert</code>, <code>ElMessageBox.confirm</code> et <code>ElMessageBox.prompt</code>. Les paramètres sont les mêmes que précédemment.</p>", 3);

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Options ");

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>title</td><td>Titre de la MessageBox.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>message</td><td>Contenu de la MessageBox.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>Si <code>message</code> doit être traité comme du HTML.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>Type du message, utilisé pour le choix d&#39;icône.</td><td>string</td><td>success / info / warning / error</td><td>—</td></tr><tr><td>iconClass</td><td>Classe d&#39;icône personnalisée, écrase <code>type</code>.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>Nom de classe pour MessageBox.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>callback</td><td>La callback de fermeture de MessageBox si vous n&#39;utilisez pas les promesses.</td><td>function(action, instance), ou <code>action</code> peut être &#39;confirm&#39;, &#39;cancel&#39; ou &#39;close&#39;, et <code>instance</code> est l&#39;instance MessageBox.</td><td>—</td><td>—</td></tr><tr><td>showClose</td><td>Si l&#39;icône de fermeture doit être affichée.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>beforeClose</td><td>La callback de pré-fermeture qui empèchera MessageBox de se fermer.</td><td>function(action, instance, done), ou <code>action</code> peut-être &#39;confirm&#39;, &#39;cancel&#39; ou &#39;close&#39;; <code>instance</code> est l&#39;instance de MessageBox; <code>done</code> est la méthode pour fermer l&#39;instance.</td><td>—</td><td>—</td></tr><tr><td>distinguishCancelAndClose</td><td>S&#39;il doit y avoir une différence entre l&#39;annulation et la fermeture de la MessageBox.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lockScroll</td><td>Si le défilement de la page doit être bloqué lorsque la MessageBox est active.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showCancelButton</td><td>Si le bouton annuler doit être affiché.</td><td>boolean</td><td>—</td><td>false (true dans le cas de confirm ou prompt).</td></tr><tr><td>showConfirmButton</td><td>Si le bouton confirmer doit être affiché.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>cancelButtonText</td><td>Le texte du bouton annuler.</td><td>string</td><td>—</td><td>Cancel</td></tr><tr><td>confirmButtonText</td><td>Le texte du bouton confirmer.</td><td>string</td><td>—</td><td>OK</td></tr><tr><td>cancelButtonClass</td><td>Classe du bouton annuler.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>confirmButtonClass</td><td>Classe du bouton confirmer.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closeOnClickModal</td><td>Si MessageBox peut être fermée en cliquant en dehors.</td><td>boolean</td><td>—</td><td>true (false dans le cas de alert).</td></tr><tr><td>closeOnPressEscape</td><td>Si MessageBox peut être fermée en pressant ESC.</td><td>boolean</td><td>—</td><td>true (false dans le cas de alert)</td></tr><tr><td>closeOnHashChange</td><td>Si MessageBox doit être fermée quand le hash change.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showInput</td><td>Si un champs d&#39;input doit être affiché.</td><td>boolean</td><td>—</td><td>false (true dans le cas de prompt).</td></tr><tr><td>inputPlaceholder</td><td>Placeholder du champs d&#39;input.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputType</td><td>Type du champs d&#39;input.</td><td>string</td><td>—</td><td>text</td></tr><tr><td>inputValue</td><td>Valeur initiale du champs d&#39;input.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputPattern</td><td>RegExp du champs d&#39;input.</td><td>regexp</td><td>—</td><td>—</td></tr><tr><td>inputValidator</td><td>Fonction de validation du champs d&#39;input. Doit retourner un boolean ou un string. Si c&#39;est un string, il sera assigné à inputErrorMessage.</td><td>function</td><td>—</td><td>—</td></tr><tr><td>inputErrorMessage</td><td>Message d&#39;erreur lorsque la validation échoue.</td><td>string</td><td>—</td><td>Illegal input</td></tr><tr><td>center</td><td>Si le contenu doit être centré.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>roundButton</td><td>Si le bouton doit être rond.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>buttonSize</td><td>custom size of confirm and cancel buttons</td><td>string</td><td>mini / small / medium / large</td><td>small</td></tr></tbody></table>", 1);

function message_boxvue_type_template_id_244651c5_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", message_boxvue_type_template_id_244651c5_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "messagebox",
    content: "MessageBox",
    href: "#messagebox",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#messagebox"
    })]),
    _: 1
  }), _hoisted_3, _hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "alert",
    content: "Alert",
    href: "#alert",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#alert"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "confirm",
    content: "Confirm",
    href: "#confirm",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#confirm"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "prompt",
    content: "Prompt",
    href: "#prompt",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#prompt"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "personnalisation",
    content: "Personnalisation",
    href: "#personnalisation",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#personnalisation"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_21, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_22, _hoisted_23, _hoisted_24, _hoisted_25, _hoisted_26, _hoisted_27, _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/ElemeFE/element/issues/8931"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29]),
    _: 1
  }), _hoisted_30, _hoisted_31, _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://jsfiddle.net/zhiyang/ezmhq2ef"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33]),
    _: 1
  }), _hoisted_34])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "utiliser-du-html",
    content: "Utiliser du HTML",
    href: "#utiliser-du-html",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#utiliser-du-html"
    })]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_39, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_40, _hoisted_41, _hoisted_42, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://en.wikipedia.org/wiki/Cross-site_scripting"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_43]),
    _: 1
  }), _hoisted_44, _hoisted_45, _hoisted_46, _hoisted_47, _hoisted_48, _hoisted_49, _hoisted_50, _hoisted_51, _hoisted_52])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "distinguer-annuler-de-fermer",
    content: "Distinguer 'annuler' de 'fermer'",
    href: "#distinguer-annuler-de-fermer",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#distinguer-annuler-de-fermer"
    })]),
    _: 1
  }), _hoisted_54, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_56]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_55]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "contenu-centre",
    content: "Contenu centré",
    href: "#contenu-centre",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_57, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#contenu-centre"
    })]),
    _: 1
  }), _hoisted_58, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_60]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_59]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "methode-globale",
    content: "Méthode globale",
    href: "#methode-globale",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_61, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methode-globale"
    })]),
    _: 1
  }), _hoisted_62, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "import-a-la-demande",
    content: "Import à la demande",
    href: "#import-a-la-demande",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_64, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#import-a-la-demande"
    })]),
    _: 1
  }), _hoisted_65, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "options",
    content: "Options",
    href: "#options",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_68, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#options"
    })]),
    _: 1
  }), _hoisted_69, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/message-box.md?vue&type=template&id=244651c5

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/message-box.md?vue&type=script&lang=ts

/* harmony default export */ var message_boxvue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquez pour ouvrir la MessageBox");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open() {
            this.$alert('Ceci est un message', 'Titre', {
              confirmButtonText: 'OK',
              callback: action => {
                this.$message({
                  type: 'info',
                  message: `action: ${action}`
                });
              }
            });
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquez pour ouvrir la MessageBox");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open() {
            this.$confirm('Ceci effacera le fichier. Continuer?', 'Warning', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Annuler',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: 'Fichier supprimé'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: 'Suppression annulée'
              });
            });
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquez pour ouvrir la MessageBox");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open() {
            this.$prompt('Entrez votre e-mail', 'Astuce', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Annuler',
              inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
              inputErrorMessage: 'E-mail invalide'
            }).then(({
              value
            }) => {
              this.$message({
                type: 'success',
                message: 'Votre e-mail est: ' + value
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: 'Annulé'
              });
            });
          }

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
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquez pour ouvrir la MessageBox");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const {
        h
      } = vue_esm_browser_prod;
      const democomponentExport = {
        methods: {
          open() {
            this.$msgbox({
              title: 'Message',
              message: h('p', null, [h('span', null, 'Le message peut être '), h('i', {
                style: 'color: teal'
              }, 'VNode')]),
              showCancelButton: true,
              confirmButtonText: 'OK',
              cancelButtonText: 'Annuler',
              beforeClose: (action, instance, done) => {
                if (action === 'confirm') {
                  instance.confirmButtonLoading = true;
                  instance.confirmButtonText = 'Chargement...';
                  setTimeout(() => {
                    done();
                    setTimeout(() => {
                      instance.confirmButtonLoading = false;
                    }, 300);
                  }, 3000);
                } else {
                  done();
                }
              }
            }).then(action => {
              this.$message({
                type: 'info',
                message: 'Action: ' + action
              });
            });
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
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquez pour ouvrir la MessageBox");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open() {
            this.$alert('<strong>Ceci est du <i>HTML</i></strong>', 'HTML', {
              dangerouslyUseHTMLString: true
            });
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo5": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquez pour ouvrir la MessageBox");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open() {
            this.$confirm('Vous avez du travail non enregistré, enregistrer et quitter?', 'Confirm', {
              distinguishCancelAndClose: true,
              confirmButtonText: 'Enregistrer',
              cancelButtonText: 'Ne pas enregistrer'
            }).then(() => {
              this.$message({
                type: 'info',
                message: 'Enregistré. Passage a une nouvelle route.'
              });
            }).catch(action => {
              this.$message({
                type: 'info',
                message: action === 'cancel' ? 'Changements annulés. Passage sur une nouvelle route.' : 'Reste sur la même route'
              });
            });
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
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Cliquez pour ouvrir la MessageBox");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _ctx.open
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open() {
            this.$confirm('Ceci effacera le fichier, continuer?', 'Warning', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Annuler',
              type: 'warning',
              center: true
            }).then(() => {
              this.$message({
                type: 'success',
                message: 'Fichier supprimé'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: 'Annulé'
              });
            });
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
// CONCATENATED MODULE: ./website/docs/fr-FR/message-box.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/message-box.md



message_boxvue_type_script_lang_ts.render = message_boxvue_type_template_id_244651c5_render

/* harmony default export */ var message_box = __webpack_exports__["default"] = (message_boxvue_type_script_lang_ts);

/***/ })

}]);