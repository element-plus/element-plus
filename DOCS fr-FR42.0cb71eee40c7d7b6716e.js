(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[182],{

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/notification.md?vue&type=template&id=3c9d34cd

const notificationvue_type_template_id_3c9d34cd_hoisted_1 = {
  class: "content element-doc"
};

const notificationvue_type_template_id_3c9d34cd_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Notification ");

const notificationvue_type_template_id_3c9d34cd_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Affiche une notification globale dans un coin de la page.", -1);

const notificationvue_type_template_id_3c9d34cd_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Usage ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Element Plus enregistre la méthode "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$notify"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" qui reçoit un objet en paramètre. Dans le cas le plus simple, vous pouvez simplement configurer les champs "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" et"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, " message"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Par défaut, la notification se ferme automatiquement après 4500ms, mais vous pouvez régler une autre durée avec "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "duration"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Si la durée est mise à "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", la notification ne se fermera pas. "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "duration"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" prends donc un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en millisecondes.")])], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button plain @click=\"open1\"> Se ferme automatiquement </el-button>\n  <el-button plain @click=\"open2\"> Ne se ferme pas automatiquement </el-button>\n</template>\n\n<script>\n  import { h } from 'vue'\n\n  export default {\n    methods: {\n      open1() {\n        this.$notify({\n          title: 'Titre',\n          message: h('i', { style: 'color: teal' }, 'Ceci est un rappel'),\n        })\n      },\n\n      open2() {\n        this.$notify({\n          title: 'Prompt',\n          message: 'Ceci est un message qui ne se ferme pas',\n          duration: 0,\n        })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, h } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open1 = () => {\n        ElNotification({\n          title: 'Titre',\n          message: h('i', { style: 'color: teal' }, 'Ceci est un rappel'),\n        });\n      };\n\n      const open2 = () => {\n        ElNotification({\n          title: 'Prompt',\n          message: 'Ceci est un message qui ne se ferme pas',\n          duration: 0,\n        });\n      };\n\n      return {\n        open1,\n        open2,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Types ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Nous fournissons quatre types: succès, avertissement, information et erreur.", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Element Plus fournit quatre types de notifications: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "success"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "warning"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "error"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Il sont choisis grâce au champs "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", et n'importe quelle autre valeur sera ignorée. Il existe des méthodes enregistrées pour chaque type, comme dans "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "open3"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "open4"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", qui ne nécessitent donc pas le champs "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button plain @click=\"open1\"> Success </el-button>\n  <el-button plain @click=\"open2\"> Warning </el-button>\n  <el-button plain @click=\"open3\"> Info </el-button>\n  <el-button plain @click=\"open4\"> Error </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$notify({\n          title: 'Success',\n          message: 'Ceci est un message de succès',\n          type: 'success',\n        })\n      },\n\n      open2() {\n        this.$notify({\n          title: 'Warning',\n          message: 'Ceci est un avertissement',\n          type: 'warning',\n        })\n      },\n\n      open3() {\n        this.$notify.info({\n          title: 'Info',\n          message: 'Ceci est une information',\n        })\n      },\n\n      open4() {\n        this.$notify.error({\n          title: 'Error',\n          message: 'Ceci est une erreur',\n        })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open1 = () => {\n        ElNotification({\n          title: 'Success',\n          message: 'Ceci est un message de succès',\n          type: 'success',\n        });\n      };\n\n      const open2 = () => {\n        ElNotification({\n          title: 'Warning',\n          message: 'Ceci est un avertissement',\n          type: 'warning',\n        });\n      };\n\n      const open3 = () => {\n        ElNotification({\n          title: 'Info',\n          message: 'Ceci est une information',\n        });\n      };\n\n      const open4 = () => {\n        ElNotification({\n          title: 'Error',\n          message: 'Ceci est une erreur',\n        });\n      };\n      return {\n        open1,\n        open2,\n        open3,\n        open4,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Position personnalisée ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "La notification peut apparaître dans le coin de votre choix.", -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("L'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "position"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" définit le coin d'apparition de la notification. Cela peut être "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "top-right"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "top-left"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "bottom-right"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" ou "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "bottom-left"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Le défaut est "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "top-right"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button plain @click=\"open1\"> Top Right </el-button>\n  <el-button plain @click=\"open2\"> Bottom Right </el-button>\n  <el-button plain @click=\"open3\"> Bottom Left </el-button>\n  <el-button plain @click=\"open4\"> Top Left </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$notify({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin supérieur droit',\n        })\n      },\n\n      open2() {\n        this.$notify({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin inférieur droit',\n          position: 'bottom-right',\n        })\n      },\n\n      open3() {\n        this.$notify({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin inférieur gauche',\n          position: 'bottom-left',\n        })\n      },\n\n      open4() {\n        this.$notify({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin supérieur gauche',\n          position: 'top-left',\n        })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open1 = () => {\n        ElNotification({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin supérieur droit',\n        });\n      };\n\n      const open2 = () => {\n        ElNotification({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin inférieur droit',\n          position: 'bottom-right',\n        });\n      };\n\n      const open3 = () => {\n        ElNotification({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin inférieur gauche',\n          position: 'bottom-left',\n        });\n      };\n\n      const open4 = () => {\n        ElNotification({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin supérieur gauche',\n          position: 'top-left',\n        });\n      };\n      return {\n        open1,\n        open2,\n        open3,\n        open4,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Avec décalage ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Vous pouvez décaler l'emplacement de la notification par rapport au bord de la page.", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Réglez "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour choisir le décalage de la notification. Notez que chaque notification apparaissant au même moment devrait avoir le même décalage.")])], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button plain @click=\"open\"> Notification avec décalage </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$notify.success({\n          title: 'Success',\n          message: 'Ceci est un message de succès',\n          offset: 100,\n        })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\nexport default defineComponent({\n  setup() {\n    \n    const open = () => {\n      ElNotification.success({\n        title: 'Success',\n        message: 'Ceci est un message de succès',\n        offset: 100,\n      });\n    };\n\n    return {\n      open,\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Utiliser du HTML ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("L'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" supporte le HTML.")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Mettez "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" à true et "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" sera traité comme du HTML.")])], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button plain @click=\"open\"> Utiliser du HTML </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$notify({\n          title: 'HTML String',\n          dangerouslyUseHTMLString: true,\n          message: '<strong>Ceci est du <i>HTML</i></strong>',\n        })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElNotification({\n          title: 'HTML String',\n          dangerouslyUseHTMLString: true,\n          message: '<strong>Ceci est du <i>HTML</i></strong>',\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_23 = {
  class: "warning"
};

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bien que la propriété ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message", -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" supporte le HTML, générer du contenu HTML dynamiquement peut être très dangereux, car cela permet des ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("attaques XSS");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Donc lorsque ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dangerouslyUseHTMLString", -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" est présent, soyez certain de sécuriser le contenu de ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message", -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", et n'assignez ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "jamais", -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" à ");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message", -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" du contenu fournit par l'utilisateur.");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cacher le bouton de fermeture ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Il est possible de cacher le bouton de fermeture.", -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Mettez "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "showClose"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" à "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" Pour que la notification ne puisse pas être fermée par l'utilisateur.")])], -1);

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button plain @click=\"open\"> Bouton de fermeture caché </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$notify.success({\n          title: 'Info',\n          message: 'Ceci est un message sans bouton de fermeture',\n          showClose: false,\n        })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElNotification.success({\n          title: 'Info',\n          message: 'Ceci est un message sans bouton de fermeture',\n          showClose: false,\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Méthode globale ");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Element Plus ajoute la méthode "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$notify"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" à "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "app.config.globalProperties"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Vous pouvez donc appeler "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Notification"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" dans l'instance de Vue comme nous avons fait dans cette page.")], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Import à la demande ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElNotification } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n</code><span class=\"lang-mark\">js</span></pre><p>Dans ce cas vous devrez appeler <code>ElNotification(options)</code>. Il existe aussi des méthodes pour chaque type, e.g. <code>ElNotification.success(options)</code>. Vous pouvez appeler <code>ElNotification.closeAll()</code> pour fermer manuellement toutes les instances.</p>", 2);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Options ");

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>title</td><td>Titre de la notification.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>message</td><td>Message de la notification.</td><td>string/Vue.VNode</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>Si <code>message</code> doit être traité comme du HTML.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>Type de notification.</td><td>string</td><td>success/warning/info/error</td><td>—</td></tr><tr><td>iconClass</td><td>Classe d&#39;icône. Écrasé par <code>type</code>.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>Nom de classe pour la notification.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>duration</td><td>Durée avant fermeture. Infinie si mise à 0.</td><td>number</td><td>—</td><td>4500</td></tr><tr><td>position</td><td>Position de la notification.</td><td>string</td><td>top-right/top-left/bottom-right/bottom-left</td><td>top-right</td></tr><tr><td>showClose</td><td>Si le bouton de fermeture doit être affiché.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>onClose</td><td>Callback de fermeture.</td><td>function</td><td>—</td><td>—</td></tr><tr><td>onClick</td><td>Callback quand la notification est cliquée.</td><td>function</td><td>—</td><td>—</td></tr><tr><td>offset</td><td>Décalage par rapport au bord de la page. Toutes les notifications arrivant au même moment devraient avoir le même décalage.</td><td>number</td><td>—</td><td>0</td></tr></tbody></table>", 1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Méthodes ");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p><code>Notification</code> et <code>this.$notify</code> retourne l&#39;instance actuelle de Notification. Pour fermer chaque instance manuellement, appelez la méthode <code>close</code>.</p><table><thead><tr><th>Méthode</th><th>Description</th></tr></thead><tbody><tr><td>close</td><td>Ferme la notification.</td></tr></tbody></table>", 2);

function notificationvue_type_template_id_3c9d34cd_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", notificationvue_type_template_id_3c9d34cd_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "notification",
    content: "Notification",
    href: "#notification",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [notificationvue_type_template_id_3c9d34cd_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#notification"
    })]),
    _: 1
  }), notificationvue_type_template_id_3c9d34cd_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "usage",
    content: "Usage",
    href: "#usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [notificationvue_type_template_id_3c9d34cd_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#usage"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "types",
    content: "Types",
    href: "#types",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#types"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "position-personnalisee",
    content: "Position personnalisée",
    href: "#position-personnalisee",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#position-personnalisee"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "avec-decalage",
    content: "Avec décalage",
    href: "#avec-decalage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#avec-decalage"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "utiliser-du-html",
    content: "Utiliser du HTML",
    href: "#utiliser-du-html",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#utiliser-du-html"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_23, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_24, _hoisted_25, _hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://en.wikipedia.org/wiki/Cross-site_scripting"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27]),
    _: 1
  }), _hoisted_28, _hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cacher-le-bouton-de-fermeture",
    content: "Cacher le bouton de fermeture",
    href: "#cacher-le-bouton-de-fermeture",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cacher-le-bouton-de-fermeture"
    })]),
    _: 1
  }), _hoisted_38, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_40]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "methode-globale",
    content: "Méthode globale",
    href: "#methode-globale",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methode-globale"
    })]),
    _: 1
  }), _hoisted_42, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "import-a-la-demande",
    content: "Import à la demande",
    href: "#import-a-la-demande",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#import-a-la-demande"
    })]),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "options",
    content: "Options",
    href: "#options",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_46, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#options"
    })]),
    _: 1
  }), _hoisted_47, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "methodes",
    content: "Méthodes",
    href: "#methodes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methodes"
    })]),
    _: 1
  }), _hoisted_49, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/notification.md?vue&type=template&id=3c9d34cd

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/notification.md?vue&type=script&lang=ts

/* harmony default export */ var notificationvue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" Se ferme automatiquement ");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode(" Ne se ferme pas automatiquement ");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open1
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open2
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const {
        h
      } = vue_esm_browser_prod;
      const democomponentExport = {
        methods: {
          open1() {
            this.$notify({
              title: 'Titre',
              message: h('i', {
                style: 'color: teal'
              }, 'Ceci est un rappel')
            });
          },

          open2() {
            this.$notify({
              title: 'Prompt',
              message: 'Ceci est un message qui ne se ferme pas',
              duration: 0
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" Success ");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode(" Warning ");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode(" Info ");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode(" Error ");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open1
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open2
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open3
        }, {
          default: _withCtx(() => [_hoisted_3]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open4
        }, {
          default: _withCtx(() => [_hoisted_4]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open1() {
            this.$notify({
              title: 'Success',
              message: 'Ceci est un message de succès',
              type: 'success'
            });
          },

          open2() {
            this.$notify({
              title: 'Warning',
              message: 'Ceci est un avertissement',
              type: 'warning'
            });
          },

          open3() {
            this.$notify.info({
              title: 'Info',
              message: 'Ceci est une information'
            });
          },

          open4() {
            this.$notify.error({
              title: 'Error',
              message: 'Ceci est une erreur'
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" Top Right ");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode(" Bottom Right ");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode(" Bottom Left ");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode(" Top Left ");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open1
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open2
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open3
        }, {
          default: _withCtx(() => [_hoisted_3]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open4
        }, {
          default: _withCtx(() => [_hoisted_4]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open1() {
            this.$notify({
              title: 'Custom Position',
              message: 'Je suis dans le coin supérieur droit'
            });
          },

          open2() {
            this.$notify({
              title: 'Custom Position',
              message: 'Je suis dans le coin inférieur droit',
              position: 'bottom-right'
            });
          },

          open3() {
            this.$notify({
              title: 'Custom Position',
              message: 'Je suis dans le coin inférieur gauche',
              position: 'bottom-left'
            });
          },

          open4() {
            this.$notify({
              title: 'Custom Position',
              message: 'Je suis dans le coin supérieur gauche',
              position: 'top-left'
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" Notification avec décalage ");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open() {
            this.$notify.success({
              title: 'Success',
              message: 'Ceci est un message de succès',
              offset: 100
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" Utiliser du HTML ");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open() {
            this.$notify({
              title: 'HTML String',
              dangerouslyUseHTMLString: true,
              message: '<strong>Ceci est du <i>HTML</i></strong>'
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" Bouton de fermeture caché ");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open() {
            this.$notify.success({
              title: 'Info',
              message: 'Ceci est un message sans bouton de fermeture',
              showClose: false
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
// CONCATENATED MODULE: ./website/docs/fr-FR/notification.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/notification.md



notificationvue_type_script_lang_ts.render = notificationvue_type_template_id_3c9d34cd_render

/* harmony default export */ var notification = __webpack_exports__["default"] = (notificationvue_type_script_lang_ts);

/***/ })

}]);