(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[183],{

/***/ 945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/notification.md?vue&type=template&id=57b02cd8

var notificationvue_type_template_id_57b02cd8_hoisted_1 = {
  class: "content element-doc"
};

var notificationvue_type_template_id_57b02cd8_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Notification ");

var notificationvue_type_template_id_57b02cd8_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Affiche une notification globale dans un coin de la page.", -1);

var notificationvue_type_template_id_57b02cd8_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Usage ");

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Element Plus enregistre la méthode "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$notify"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" qui reçoit un objet en paramètre. Dans le cas le plus simple, vous pouvez simplement configurer les champs "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" et"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, " message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Par défaut, la notification se ferme automatiquement après 4500ms, mais vous pouvez régler une autre durée avec "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "duration"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Si la durée est mise à "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", la notification ne se fermera pas. "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "duration"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" prends donc un "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" en millisecondes.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    plain\n    @click=\"open1\">\n    Se ferme automatiquement\n  </el-button>\n  <el-button\n    plain\n    @click=\"open2\">\n    Ne se ferme pas automatiquement\n    </el-button>\n</template>\n\n<script>\n  import { h } from 'vue';\n\n  export default {\n    methods: {\n      open1() {\n        this.$notify({\n          title: 'Titre',\n          message: h('i', { style: 'color: teal' }, 'Ceci est un rappel')\n        });\n      },\n\n      open2() {\n        this.$notify({\n          title: 'Prompt',\n          message: 'Ceci est un message qui ne se ferme pas',\n          duration: 0\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, h } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open1 = () => {\n        ElNotification({\n          title: 'Titre',\n          message: h('i', { style: 'color: teal' }, 'Ceci est un rappel'),\n        });\n      };\n\n      const open2 = () => {\n        ElNotification({\n          title: 'Prompt',\n          message: 'Ceci est un message qui ne se ferme pas',\n          duration: 0,\n        });\n      };\n\n      return {\n        open1,\n        open2,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Types ");

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Nous fournissons quatre types: succès, avertissement, information et erreur.", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Element Plus fournit quatre types de notifications: "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "success"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "warning"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "error"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Il sont choisis grâce au champs "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", et n'importe quelle autre valeur sera ignorée. Il existe des méthodes enregistrées pour chaque type, comme dans "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "open3"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "open4"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", qui ne nécessitent donc pas le champs "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    plain\n    @click=\"open1\">\n    Success\n  </el-button>\n  <el-button\n    plain\n    @click=\"open2\">\n    Warning\n  </el-button>\n  <el-button\n    plain\n    @click=\"open3\">\n    Info\n  </el-button>\n  <el-button\n    plain\n    @click=\"open4\">\n    Error\n  </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$notify({\n          title: 'Success',\n          message: 'Ceci est un message de succès',\n          type: 'success'\n        });\n      },\n\n      open2() {\n        this.$notify({\n          title: 'Warning',\n          message: 'Ceci est un avertissement',\n          type: 'warning'\n        });\n      },\n\n      open3() {\n        this.$notify.info({\n          title: 'Info',\n          message: 'Ceci est une information'\n        });\n      },\n\n      open4() {\n        this.$notify.error({\n          title: 'Error',\n          message: 'Ceci est une erreur'\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open1 = () => {\n        ElNotification({\n          title: 'Success',\n          message: 'Ceci est un message de succès',\n          type: 'success',\n        });\n      };\n\n      const open2 = () => {\n        ElNotification({\n          title: 'Warning',\n          message: 'Ceci est un avertissement',\n          type: 'warning',\n        });\n      };\n\n      const open3 = () => {\n        ElNotification({\n          title: 'Info',\n          message: 'Ceci est une information',\n        });\n      };\n\n      const open4 = () => {\n        ElNotification({\n          title: 'Error',\n          message: 'Ceci est une erreur',\n        });\n      };\n      return {\n        open1,\n        open2,\n        open3,\n        open4,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Position personnalisée ");

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "La notification peut apparaître dans le coin de votre choix.", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("L'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "position"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" définit le coin d'apparition de la notification. Cela peut être "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "top-right"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "top-left"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "bottom-right"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" ou "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "bottom-left"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Le défaut est "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "top-right"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    plain\n    @click=\"open1\">\n    Top Right\n  </el-button>\n  <el-button\n    plain\n    @click=\"open2\">\n    Bottom Right\n  </el-button>\n  <el-button\n    plain\n    @click=\"open3\">\n    Bottom Left\n  </el-button>\n  <el-button\n    plain\n    @click=\"open4\">\n    Top Left\n  </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$notify({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin supérieur droit'\n        });\n      },\n\n      open2() {\n        this.$notify({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin inférieur droit',\n          position: 'bottom-right'\n        });\n      },\n\n      open3() {\n        this.$notify({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin inférieur gauche',\n          position: 'bottom-left'\n        });\n      },\n\n      open4() {\n        this.$notify({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin supérieur gauche',\n          position: 'top-left'\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open1 = () => {\n        ElNotification({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin supérieur droit',\n        });\n      };\n\n      const open2 = () => {\n        ElNotification({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin inférieur droit',\n          position: 'bottom-right',\n        });\n      };\n\n      const open3 = () => {\n        ElNotification({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin inférieur gauche',\n          position: 'bottom-left',\n        });\n      };\n\n      const open4 = () => {\n        ElNotification({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin supérieur gauche',\n          position: 'top-left',\n        });\n      };\n      return {\n        open1,\n        open2,\n        open3,\n        open4,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Avec décalage ");

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Vous pouvez décaler l'emplacement de la notification par rapport au bord de la page.", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Réglez "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour choisir le décalage de la notification. Notez que chaque notification apparaissant au même moment devrait avoir le même décalage.")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    plain\n    @click=\"open\">\n    Notification avec décalage\n  </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$notify.success({\n          title: 'Success',\n          message: 'Ceci est un message de succès',\n          offset: 100\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\nexport default defineComponent({\n  setup() {\n    \n    const open = () => {\n      ElNotification.success({\n        title: 'Success',\n        message: 'Ceci est un message de succès',\n        offset: 100,\n      });\n    };\n\n    return {\n      open,\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Utiliser du HTML ");

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("L'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" supporte le HTML.")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Mettez "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" à true et "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" sera traité comme du HTML.")])], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    plain\n    @click=\"open\">\n    Utiliser du HTML\n  </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$notify({\n          title: 'HTML String',\n          dangerouslyUseHTMLString: true,\n          message: '<strong>Ceci est du <i>HTML</i></strong>'\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElNotification({\n          title: 'HTML String',\n          dangerouslyUseHTMLString: true,\n          message: '<strong>Ceci est du <i>HTML</i></strong>',\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_23 = {
  class: "warning"
};

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Bien que la propriété ");

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message", -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" supporte le HTML, générer du contenu HTML dynamiquement peut être très dangereux, car cela permet des ");

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("attaques XSS");

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Donc lorsque ");

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dangerouslyUseHTMLString", -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" est présent, soyez certain de sécuriser le contenu de ");

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message", -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", et n'assignez ");

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "jamais", -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" à ");

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message", -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" du contenu fournit par l'utilisateur.");

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Cacher le bouton de fermeture ");

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Il est possible de cacher le bouton de fermeture.", -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Mettez "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "showClose"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" à "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Pour que la notification ne puisse pas être fermée par l'utilisateur.")])], -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    plain\n    @click=\"open\">\n    Bouton de fermeture caché\n    </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$notify.success({\n          title: 'Info',\n          message: 'Ceci est un message sans bouton de fermeture',\n          showClose: false\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElNotification.success({\n          title: 'Info',\n          message: 'Ceci est un message sans bouton de fermeture',\n          showClose: false,\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Méthode globale ");

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Element Plus ajoute la méthode "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$notify"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" à "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "app.config.globalProperties"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Vous pouvez donc appeler "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Notification"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" dans l'instance de Vue comme nous avons fait dans cette page.")], -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Import à la demande ");

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElNotification } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code><span class=\"lang-mark\">js</span></pre><p>Dans ce cas vous devrez appeler <code>ElNotification(options)</code>. Il existe aussi des méthodes pour chaque type, e.g. <code>ElNotification.success(options)</code>. Vous pouvez appeler <code>ElNotification.closeAll()</code> pour fermer manuellement toutes les instances.</p>", 2);

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Options ");

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>title</td><td>Titre de la notification.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>message</td><td>Message de la notification.</td><td>string/Vue.VNode</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>Si <code>message</code> doit être traité comme du HTML.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>Type de notification.</td><td>string</td><td>success/warning/info/error</td><td>—</td></tr><tr><td>iconClass</td><td>Classe d&#39;icône. Écrasé par <code>type</code>.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>Nom de classe pour la notification.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>duration</td><td>Durée avant fermeture. Infinie si mise à 0.</td><td>number</td><td>—</td><td>4500</td></tr><tr><td>position</td><td>Position de la notification.</td><td>string</td><td>top-right/top-left/bottom-right/bottom-left</td><td>top-right</td></tr><tr><td>showClose</td><td>Si le bouton de fermeture doit être affiché.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>onClose</td><td>Callback de fermeture.</td><td>function</td><td>—</td><td>—</td></tr><tr><td>onClick</td><td>Callback quand la notification est cliquée.</td><td>function</td><td>—</td><td>—</td></tr><tr><td>offset</td><td>Décalage par rapport au bord de la page. Toutes les notifications arrivant au même moment devraient avoir le même décalage.</td><td>number</td><td>—</td><td>0</td></tr></tbody></table>", 1);

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Méthodes ");

var _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p><code>Notification</code> et <code>this.$notify</code> retourne l&#39;instance actuelle de Notification. Pour fermer chaque instance manuellement, appelez la méthode <code>close</code>.</p><table><thead><tr><th>Méthode</th><th>Description</th></tr></thead><tbody><tr><td>close</td><td>Ferme la notification.</td></tr></tbody></table>", 2);

function notificationvue_type_template_id_57b02cd8_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo5");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", notificationvue_type_template_id_57b02cd8_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "notification",
    content: "Notification",
    href: "#notification",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [notificationvue_type_template_id_57b02cd8_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#notification"
      })];
    }),
    _: 1
  }), notificationvue_type_template_id_57b02cd8_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "usage",
    content: "Usage",
    href: "#usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [notificationvue_type_template_id_57b02cd8_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#usage"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "types",
    content: "Types",
    href: "#types",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#types"
      })];
    }),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "position-personnalisee",
    content: "Position personnalisée",
    href: "#position-personnalisee",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#position-personnalisee"
      })];
    }),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "avec-decalage",
    content: "Avec décalage",
    href: "#avec-decalage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#avec-decalage"
      })];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "utiliser-du-html",
    content: "Utiliser du HTML",
    href: "#utiliser-du-html",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#utiliser-du-html"
      })];
    }),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("div", _hoisted_23, [Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_24, _hoisted_25, _hoisted_26, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://en.wikipedia.org/wiki/Cross-site_scripting"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    _: 1
  }), _hoisted_28, _hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "cacher-le-bouton-de-fermeture",
    content: "Cacher le bouton de fermeture",
    href: "#cacher-le-bouton-de-fermeture",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_37, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#cacher-le-bouton-de-fermeture"
      })];
    }),
    _: 1
  }), _hoisted_38, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_40];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_39];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "methode-globale",
    content: "Méthode globale",
    href: "#methode-globale",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_41, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#methode-globale"
      })];
    }),
    _: 1
  }), _hoisted_42, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "import-a-la-demande",
    content: "Import à la demande",
    href: "#import-a-la-demande",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_43, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#import-a-la-demande"
      })];
    }),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "options",
    content: "Options",
    href: "#options",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_46, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#options"
      })];
    }),
    _: 1
  }), _hoisted_47, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "methodes",
    content: "Méthodes",
    href: "#methodes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_48, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#methodes"
      })];
    }),
    _: 1
  }), _hoisted_49, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/notification.md?vue&type=template&id=57b02cd8

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/notification.md?vue&type=script&lang=ts


/* harmony default export */ var notificationvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Se ferme automatiquement ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" Ne se ferme pas automatiquement ");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open1
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open2
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var h = vue_esm_browser_prod["t" /* h */];
      var democomponentExport = {
        methods: {
          open1: function open1() {
            this.$notify({
              title: 'Titre',
              message: h('i', {
                style: 'color: teal'
              }, 'Ceci est un rappel')
            });
          },
          open2: function open2() {
            this.$notify({
              title: 'Prompt',
              message: 'Ceci est un message qui ne se ferme pas',
              duration: 0
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Success ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" Warning ");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode(" Info ");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode(" Error ");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open1
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open2
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open3
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open4
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open1: function open1() {
            this.$notify({
              title: 'Success',
              message: 'Ceci est un message de succès',
              type: 'success'
            });
          },
          open2: function open2() {
            this.$notify({
              title: 'Warning',
              message: 'Ceci est un avertissement',
              type: 'warning'
            });
          },
          open3: function open3() {
            this.$notify.info({
              title: 'Info',
              message: 'Ceci est une information'
            });
          },
          open4: function open4() {
            this.$notify.error({
              title: 'Error',
              message: 'Ceci est une erreur'
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Top Right ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" Bottom Right ");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode(" Bottom Left ");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode(" Top Left ");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open1
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open2
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open3
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: "",
          onClick: _ctx.open4
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open1: function open1() {
            this.$notify({
              title: 'Custom Position',
              message: 'Je suis dans le coin supérieur droit'
            });
          },
          open2: function open2() {
            this.$notify({
              title: 'Custom Position',
              message: 'Je suis dans le coin inférieur droit',
              position: 'bottom-right'
            });
          },
          open3: function open3() {
            this.$notify({
              title: 'Custom Position',
              message: 'Je suis dans le coin inférieur gauche',
              position: 'bottom-left'
            });
          },
          open4: function open4() {
            this.$notify({
              title: 'Custom Position',
              message: 'Je suis dans le coin supérieur gauche',
              position: 'top-left'
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Notification avec décalage ");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          plain: "",
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
            this.$notify.success({
              title: 'Success',
              message: 'Ceci est un message de succès',
              offset: 100
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Utiliser du HTML ");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          plain: "",
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
            this.$notify({
              title: 'HTML String',
              dangerouslyUseHTMLString: true,
              message: '<strong>Ceci est du <i>HTML</i></strong>'
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Bouton de fermeture caché ");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          plain: "",
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
            this.$notify.success({
              title: 'Info',
              message: 'Ceci est un message sans bouton de fermeture',
              showClose: false
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
// CONCATENATED MODULE: ./website/docs/fr-FR/notification.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/notification.md



notificationvue_type_script_lang_ts.render = notificationvue_type_template_id_57b02cd8_render

/* harmony default export */ var notification = __webpack_exports__["default"] = (notificationvue_type_script_lang_ts);

/***/ })

}]);