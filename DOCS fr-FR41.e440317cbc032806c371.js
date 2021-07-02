(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[179],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/notification.md?vue&type=template&id=286ae31f

var notificationvue_type_template_id_286ae31f_hoisted_1 = {
  class: "content element-doc"
};

var notificationvue_type_template_id_286ae31f_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h2", {
  id: "notification"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#notification"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Notification")], -1);

var notificationvue_type_template_id_286ae31f_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "Affiche une notification globale dans un coin de la page.", -1);

var notificationvue_type_template_id_286ae31f_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "usage"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Usage")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Element Plus enregistre la méthode "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "$notify"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" qui reçoit un objet en paramètre. Dans le cas le plus simple, vous pouvez simplement configurer les champs "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" et"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, " message"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(". Par défaut, la notification se ferme automatiquement après 4500ms, mais vous pouvez régler une autre durée avec "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "duration"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(". Si la durée est mise à "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(", la notification ne se fermera pas. "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "duration"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" prends donc un "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" en millisecondes.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    plain\n    @click=\"open1\">\n    Se ferme automatiquement\n  </el-button>\n  <el-button\n    plain\n    @click=\"open2\">\n    Ne se ferme pas automatiquement\n    </el-button>\n</template>\n\n<script>\n  import { h } from 'vue';\n\n  export default {\n    methods: {\n      open1() {\n        this.$notify({\n          title: 'Titre',\n          message: h('i', { style: 'color: teal' }, 'Ceci est un rappel')\n        });\n      },\n\n      open2() {\n        this.$notify({\n          title: 'Prompt',\n          message: 'Ceci est un message qui ne se ferme pas',\n          duration: 0\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, h } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open1 = () => {\n        ElNotification({\n          title: 'Titre',\n          message: h('i', { style: 'color: teal' }, 'Ceci est un rappel'),\n        });\n      };\n\n      const open2 = () => {\n        ElNotification({\n          title: 'Prompt',\n          message: 'Ceci est un message qui ne se ferme pas',\n          duration: 0,\n        });\n      };\n\n      return {\n        open1,\n        open2,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "types"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#types"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Types")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "Nous fournissons quatre types: succès, avertissement, information et erreur.", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Element Plus fournit quatre types de notifications: "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "success"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "warning"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "error"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(". Il sont choisis grâce au champs "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(", et n'importe quelle autre valeur sera ignorée. Il existe des méthodes enregistrées pour chaque type, comme dans "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "open3"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "open4"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(", qui ne nécessitent donc pas le champs "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(".")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    plain\n    @click=\"open1\">\n    Success\n  </el-button>\n  <el-button\n    plain\n    @click=\"open2\">\n    Warning\n  </el-button>\n  <el-button\n    plain\n    @click=\"open3\">\n    Info\n  </el-button>\n  <el-button\n    plain\n    @click=\"open4\">\n    Error\n  </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$notify({\n          title: 'Success',\n          message: 'Ceci est un message de succès',\n          type: 'success'\n        });\n      },\n\n      open2() {\n        this.$notify({\n          title: 'Warning',\n          message: 'Ceci est un avertissement',\n          type: 'warning'\n        });\n      },\n\n      open3() {\n        this.$notify.info({\n          title: 'Info',\n          message: 'Ceci est une information'\n        });\n      },\n\n      open4() {\n        this.$notify.error({\n          title: 'Error',\n          message: 'Ceci est une erreur'\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open1 = () => {\n        ElNotification({\n          title: 'Success',\n          message: 'Ceci est un message de succès',\n          type: 'success',\n        });\n      };\n\n      const open2 = () => {\n        ElNotification({\n          title: 'Warning',\n          message: 'Ceci est un avertissement',\n          type: 'warning',\n        });\n      };\n\n      const open3 = () => {\n        ElNotification({\n          title: 'Info',\n          message: 'Ceci est une information',\n        });\n      };\n\n      const open4 = () => {\n        ElNotification({\n          title: 'Error',\n          message: 'Ceci est une erreur',\n        });\n      };\n      return {\n        open1,\n        open2,\n        open3,\n        open4,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "position-personnalisee"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#position-personnalisee"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Position personnalisée")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "La notification peut apparaître dans le coin de votre choix.", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("L'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "position"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" définit le coin d'apparition de la notification. Cela peut être "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "top-right"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "top-left"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "bottom-right"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" ou "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "bottom-left"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(". Le défaut est "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "top-right"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(".")])], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    plain\n    @click=\"open1\">\n    Top Right\n  </el-button>\n  <el-button\n    plain\n    @click=\"open2\">\n    Bottom Right\n  </el-button>\n  <el-button\n    plain\n    @click=\"open3\">\n    Bottom Left\n  </el-button>\n  <el-button\n    plain\n    @click=\"open4\">\n    Top Left\n  </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$notify({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin supérieur droit'\n        });\n      },\n\n      open2() {\n        this.$notify({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin inférieur droit',\n          position: 'bottom-right'\n        });\n      },\n\n      open3() {\n        this.$notify({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin inférieur gauche',\n          position: 'bottom-left'\n        });\n      },\n\n      open4() {\n        this.$notify({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin supérieur gauche',\n          position: 'top-left'\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open1 = () => {\n        ElNotification({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin supérieur droit',\n        });\n      };\n\n      const open2 = () => {\n        ElNotification({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin inférieur droit',\n          position: 'bottom-right',\n        });\n      };\n\n      const open3 = () => {\n        ElNotification({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin inférieur gauche',\n          position: 'bottom-left',\n        });\n      };\n\n      const open4 = () => {\n        ElNotification({\n          title: 'Custom Position',\n          message: 'Je suis dans le coin supérieur gauche',\n          position: 'top-left',\n        });\n      };\n      return {\n        open1,\n        open2,\n        open3,\n        open4,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "avec-decalage"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#avec-decalage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Avec décalage")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, "Vous pouvez décaler l'emplacement de la notification par rapport au bord de la page.", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Réglez "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" pour choisir le décalage de la notification. Notez que chaque notification apparaissant au même moment devrait avoir le même décalage.")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    plain\n    @click=\"open\">\n    Notification avec décalage\n  </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$notify.success({\n          title: 'Success',\n          message: 'Ceci est un message de succès',\n          offset: 100\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\nexport default defineComponent({\n  setup() {\n    \n    const open = () => {\n      ElNotification.success({\n        title: 'Success',\n        message: 'Ceci est un message de succès',\n        offset: 100,\n      });\n    };\n\n    return {\n      open,\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("h3", {
  id: "utiliser-du-html"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#utiliser-du-html"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Utiliser du HTML")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("L'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" supporte le HTML.")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Mettez "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" à true et "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" sera traité comme du HTML.")])], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    plain\n    @click=\"open\">\n    Utiliser du HTML\n  </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$notify({\n          title: 'HTML String',\n          dangerouslyUseHTMLString: true,\n          message: '<strong>Ceci est du <i>HTML</i></strong>'\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElNotification({\n          title: 'HTML String',\n          dangerouslyUseHTMLString: true,\n          message: '<strong>Ceci est du <i>HTML</i></strong>',\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<div class=\"warning\"><p>Bien que la propriété <code>message</code> supporte le HTML, générer du contenu HTML dynamiquement peut être très dangereux, car cela permet des <a href=\"https://en.wikipedia.org/wiki/Cross-site_scripting\">attaques XSS</a>. Donc lorsque <code>dangerouslyUseHTMLString</code> est présent, soyez certain de sécuriser le contenu de <code>message</code>, et n&#39;assignez <strong>jamais</strong> à <code>message</code> du contenu fournit par l&#39;utilisateur.</p></div><h3 id=\"cacher-le-bouton-de-fermeture\"><a class=\"header-anchor\" href=\"#cacher-le-bouton-de-fermeture\">¶</a> Cacher le bouton de fermeture</h3><p>Il est possible de cacher le bouton de fermeture.</p>", 3);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])("Mettez "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "showClose"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" à "), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createTextVNode */])(" Pour que la notification ne puisse pas être fermée par l'utilisateur.")])], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    plain\n    @click=\"open\">\n    Bouton de fermeture caché\n    </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$notify.success({\n          title: 'Info',\n          message: 'Ceci est un message sans bouton de fermeture',\n          showClose: false\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElNotification.success({\n          title: 'Info',\n          message: 'Ceci est un message sans bouton de fermeture',\n          showClose: false,\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["m" /* createStaticVNode */])("<h3 id=\"methode-globale\"><a class=\"header-anchor\" href=\"#methode-globale\">¶</a> Méthode globale</h3><p>Element Plus ajoute la méthode <code>$notify</code> à <code>app.config.globalProperties</code>. Vous pouvez donc appeler <code>Notification</code> dans l&#39;instance de Vue comme nous avons fait dans cette page.</p><h3 id=\"import-a-la-demande\"><a class=\"header-anchor\" href=\"#import-a-la-demande\">¶</a> Import à la demande</h3><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElNotification } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code></pre><p>Dans ce cas vous devrez appeler <code>ElNotification(options)</code>. Il existe aussi des méthodes pour chaque type, e.g. <code>ElNotification.success(options)</code>. Vous pouvez appeler <code>ElNotification.closeAll()</code> pour fermer manuellement toutes les instances.</p><h3 id=\"options\"><a class=\"header-anchor\" href=\"#options\">¶</a> Options</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>title</td><td>Titre de la notification.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>message</td><td>Message de la notification.</td><td>string/Vue.VNode</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>Si <code>message</code> doit être traité comme du HTML.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>Type de notification.</td><td>string</td><td>success/warning/info/error</td><td>—</td></tr><tr><td>iconClass</td><td>Classe d&#39;icône. Écrasé par <code>type</code>.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>Nom de classe pour la notification.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>duration</td><td>Durée avant fermeture. Infinie si mise à 0.</td><td>number</td><td>—</td><td>4500</td></tr><tr><td>position</td><td>Position de la notification.</td><td>string</td><td>top-right/top-left/bottom-right/bottom-left</td><td>top-right</td></tr><tr><td>showClose</td><td>Si le bouton de fermeture doit être affiché.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>onClose</td><td>Callback de fermeture.</td><td>function</td><td>—</td><td>—</td></tr><tr><td>onClick</td><td>Callback quand la notification est cliquée.</td><td>function</td><td>—</td><td>—</td></tr><tr><td>offset</td><td>Décalage par rapport au bord de la page. Toutes les notifications arrivant au même moment devraient avoir le même décalage.</td><td>number</td><td>—</td><td>0</td></tr></tbody></table><h3 id=\"methodes\"><a class=\"header-anchor\" href=\"#methodes\">¶</a> Méthodes</h3><p><code>Notification</code> et <code>this.$notify</code> retourne l&#39;instance actuelle de Notification. Pour fermer chaque instance manuellement, appelez la méthode <code>close</code>.</p><table><thead><tr><th>Méthode</th><th>Description</th></tr></thead><tbody><tr><td>close</td><td>Ferme la notification.</td></tr></tbody></table>", 10);

function notificationvue_type_template_id_286ae31f_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["P" /* resolveComponent */])("element-demo5");

  var _component_right_nav = Object(vue_esm_browser_prod["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["G" /* openBlock */])(), Object(vue_esm_browser_prod["j" /* createBlock */])("section", notificationvue_type_template_id_286ae31f_hoisted_1, [notificationvue_type_template_id_286ae31f_hoisted_2, notificationvue_type_template_id_286ae31f_hoisted_3, notificationvue_type_template_id_286ae31f_hoisted_4, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19, _hoisted_20, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    default: Object(vue_esm_browser_prod["eb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/notification.md?vue&type=template&id=286ae31f

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/notification.md?vue&type=script&lang=ts


/* harmony default export */ var notificationvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

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

      var h = vue_esm_browser_prod["s" /* h */];
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
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

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
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

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
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

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
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

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
      var _createTextVNode = vue_esm_browser_prod["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["P" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["eb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["o" /* createVNode */],
          _openBlock = vue_esm_browser_prod["G" /* openBlock */],
          _createBlock = vue_esm_browser_prod["j" /* createBlock */];

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



notificationvue_type_script_lang_ts.render = notificationvue_type_template_id_286ae31f_render

/* harmony default export */ var notification = __webpack_exports__["default"] = (notificationvue_type_script_lang_ts);

/***/ })

}]);