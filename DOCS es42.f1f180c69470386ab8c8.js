(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[111],{

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/notification.md?vue&type=template&id=5fdb89a3

var notificationvue_type_template_id_5fdb89a3_hoisted_1 = {
  class: "content element-doc"
};

var notificationvue_type_template_id_5fdb89a3_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Notification ");

var notificationvue_type_template_id_5fdb89a3_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Muestra un mensaje de notificación global en una esquina de la página.", -1);

var notificationvue_type_template_id_5fdb89a3_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Uso básico ");

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Element Plus ha registrado el método"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$notify"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" y recibe un objeto como parámetro. En el caso más sencillo, puede establecer el campo de "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" y el campo de "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, " message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para el título y el cuerpo de la notificación. De forma predeterminada, la notificación se cierra automáticamente después de 4500ms, pero configurando "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "duration"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" se puede controlar su duración. Específicamente, si está configurado en "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", no se cerrará automáticamente. Tenga en cuenta que "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "duration"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" recibe un "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" en milisegundos.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    plain\n    @click=\"open1\">\n    Closes automatically\n  </el-button>\n  <el-button\n    plain\n    @click=\"open2\">\n    Won't close automatically\n    </el-button>\n</template>\n\n<script>\n  import { h } from 'vue';\n\n  export default {\n    methods: {\n      open1() {\n        this.$notify({\n          title: 'Title',\n          message: h('i', { style: 'color: teal' }, 'This is a reminder')\n        });\n      },\n\n      open2() {\n        this.$notify({\n          title: 'Prompt',\n          message: 'This is a message that does not automatically close',\n          duration: 0\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, h } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open1 = () => {\n        ElNotification({\n          title: 'Title',\n          message: h('i', { style: 'color: teal' }, 'This is a reminder')\n        });\n      };\n\n      const open2 = () => {\n        ElNotification({\n          title: 'Prompt',\n          message: 'This is a message that does not automatically close',\n          duration: 0\n        });\n      };\n      return {\n        open1,\n        open2,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Tipos de notificaciones ");

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Proporcionamos cuatro tipos: success, warning, info y error.", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Element Plus proporciona cuatro tipos de notificación: "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "success"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "warning"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "error"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Se definen por el campo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" y se ignorarán otros valores. También se han registrado métodos para estos tipos que se pueden invocar directamente como en el ejemplo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "open3"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "open4"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" sin pasar un campo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    plain\n    @click=\"open1\">\n    Success\n  </el-button>\n  <el-button\n    plain\n    @click=\"open2\">\n    Warning\n  </el-button>\n  <el-button\n    plain\n    @click=\"open3\">\n    Info\n  </el-button>\n  <el-button\n    plain\n    @click=\"open4\">\n    Error\n  </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$notify({\n          title: 'Success',\n          message: 'This is a success message',\n          type: 'success'\n        });\n      },\n\n      open2() {\n        this.$notify({\n          title: 'Warning',\n          message: 'This is a warning message',\n          type: 'warning'\n        });\n      },\n\n      open3() {\n        this.$notify.info({\n          title: 'Info',\n          message: 'This is an info message'\n        });\n      },\n\n      open4() {\n        this.$notify.error({\n          title: 'Error',\n          message: 'This is an error message'\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open1 = () => {\n        ElNotification({\n          title: 'Success',\n          message: 'This is a success message',\n          type: 'success',\n        });\n      };\n\n      const open2 = () => {\n        ElNotification({\n          title: 'Warning',\n          message: 'This is a warning message',\n          type: 'warning',\n        });\n      };\n\n      const open3 = () => {\n        ElNotification({\n          title: 'Info',\n          message: 'This is an info message',\n        });\n      };\n\n      const open4 = () => {\n        ElNotification({\n          title: 'Error',\n          message: 'This is an error message',\n        });\n      };\n      return {\n        open1,\n        open2,\n        open3,\n        open4,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Posición personalizada ");

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "La notificación puede surgir de cualquier rincón que uno desee.", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("El atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "position"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" define desde qué esquina se desliza la notificación. Puede ser "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "top-right"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "top-left"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "bottom-right"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" o "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "bottom-left"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Predeterminado: "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "top-right"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    plain\n    @click=\"open1\">\n    Top Right\n  </el-button>\n  <el-button\n    plain\n    @click=\"open2\">\n    Bottom Right\n  </el-button>\n  <el-button\n    plain\n    @click=\"open3\">\n    Bottom Left\n  </el-button>\n  <el-button\n    plain\n    @click=\"open4\">\n    Top Left\n  </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$notify({\n          title: 'Custom Position',\n          message: 'I\\'m at the top right corner'\n        });\n      },\n\n      open2() {\n        this.$notify({\n          title: 'Custom Position',\n          message: 'I\\'m at the bottom right corner',\n          position: 'bottom-right'\n        });\n      },\n\n      open3() {\n        this.$notify({\n          title: 'Custom Position',\n          message: 'I\\'m at the bottom left corner',\n          position: 'bottom-left'\n        });\n      },\n\n      open4() {\n        this.$notify({\n          title: 'Custom Position',\n          message: 'I\\'m at the top left corner',\n          position: 'top-left'\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open1 = () => {\n        ElNotification({\n          title: 'Custom Position',\n          message: 'I\\'m at the top right corner',\n        });\n      };\n\n      const open2 = () => {\n        ElNotification({\n          title: 'Custom Position',\n          message: 'I\\'m at the bottom right corner',\n          position: 'bottom-right',\n        });\n      };\n\n      const open3 = () => {\n        ElNotification({\n          title: 'Custom Position',\n          message: 'I\\'m at the bottom left corner',\n          position: 'bottom-left',\n        });\n      };\n\n      const open4 = () => {\n        ElNotification({\n          title: 'Custom Position',\n          message: 'I\\'m at the top left corner',\n          position: 'top-left',\n        });\n      };\n      return {\n        open1,\n        open2,\n        open3,\n        open4,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Desplazamiento ");

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Personalizar el desplazamiento de notificación desde el borde de la pantalla.", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Configure el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para personalizar el desplazamiento de la notificación desde el borde de la pantalla. Tenga en cuenta que cada instancia de la notificación del mismo momento debe tener el mismo desplazamiento.")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    plain\n    @click=\"open\">\n    Notification with offset\n  </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$notify.success({\n          title: 'Success',\n          message: 'This is a success message',\n          offset: 100\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElNotification.success({\n          title: 'Success',\n          message: 'This is a success message',\n          offset: 100,\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Usando cadenas HTML ");

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" soporta cadenas HTML.")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Configure "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" a true y "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" se tratará como una cadena HTML.")])], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    plain\n    @click=\"open\">\n    Use HTML String\n  </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$notify({\n          title: 'HTML String',\n          dangerouslyUseHTMLString: true,\n          message: '<strong>This is <i>HTML</i> string</strong>'\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElNotification({\n          title: 'HTML String',\n          dangerouslyUseHTMLString: true,\n          message: '<strong>This is <i>HTML</i> string</strong>',\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_23 = {
  class: "warning"
};

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Aunque la propiedad ");

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message", -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" soporta cadenas HTML, el renderizado dinámico de HTML arbitrario en su sitio web puede ser muy peligroso porque puede conducir fácilmente a ");

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ataques XSS");

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Por lo tanto, cuando ");

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dangerouslyUseHTMLString", -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" está a true, por favor asegúrese de que el contenido del mensaje es confiable, y ");

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "nunca", -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" asigne ");

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message", -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" al contenido proporcionado por el usuario.");

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Ocultar boton de cerrar ");

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Es posible ocultar el botón de cerrar", -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Configure el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "showClose"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" como "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para que el usuario no pueda cerrar la notificación.")])], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    plain\n    @click=\"open\">\n    Hide close button\n    </el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$notify.success({\n          title: 'Info',\n          message: 'This is a message without close button',\n          showClose: false\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElNotification } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElNotification.success({\n          title: 'Info',\n          message: 'This is a message without close button',\n          showClose: false,\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Método global ");

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Element Plus ha añadido un método global "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$notify"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "app.config.globalProperties"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Así que en una instancia de vue se puede llamar "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Notification"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" como lo hacemos en esta página.")], -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Importar localmente ");

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElNotification } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code><span class=\"lang-mark\">js</span></pre><p>En este caso, debe llamar a <code>ElNotification(options)</code>. También se han registrado métodos para diferentes tipos, e.j. <code>ElNotification.success(options)</code>. Puede llamar al método <code>ElNotification.closeAll()</code> para cerrar manualmente todas las instancias.</p>", 2);

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Opciones ");

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>title</td><td>titulo</td><td>string</td><td>—</td><td>—</td></tr><tr><td>message</td><td>mensaje</td><td>string/Vue.VNode</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>si <code>message</code> es tratado como una cadena HTML</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>tipo de notificación</td><td>string</td><td>success/warning/info/error</td><td>—</td></tr><tr><td>iconClass</td><td>clase personalizada de icono. Será anulado por <code>type</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>nombre de clase personalizado para la notificación</td><td>string</td><td>—</td><td>—</td></tr><tr><td>duration</td><td>duración antes de cerrar. Si no se quiere que se cierre automáticamente este valor debe estar a 0</td><td>number</td><td>—</td><td>4500</td></tr><tr><td>position</td><td>posición personalizada</td><td>string</td><td>top-right/top-left/bottom-right/bottom-left</td><td>top-right</td></tr><tr><td>showClose</td><td>si se muestra el botón de cerrar</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>onClose</td><td>función que se ejecuta cuando la notificación se cierra</td><td>function</td><td>—</td><td>—</td></tr><tr><td>onClick</td><td>función que se ejecuta cuando se hace clic en la notificación</td><td>function</td><td>—</td><td>—</td></tr><tr><td>offset</td><td>desplazamiento desde el borde superior de la pantalla. Cada instancia de notificación del mismo momento debe tener siempre el mismo desplazamiento.</td><td>number</td><td>—</td><td>0</td></tr></tbody></table>", 1);

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Métodos ");

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p><code>Notification</code> y <code>this.$notify</code> devuelven la instancia de la notificación actual. Para cerrar manualmente la instancia, se puede llamar <code>close</code> para ello.</p><table><thead><tr><th>Metodo</th><th>Descripción</th></tr></thead><tbody><tr><td>close</td><td>cierra la notificación</td></tr></tbody></table>", 2);

function notificationvue_type_template_id_5fdb89a3_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", notificationvue_type_template_id_5fdb89a3_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "notification",
    content: "Notification",
    href: "#notification",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [notificationvue_type_template_id_5fdb89a3_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#notification"
      })];
    }),
    _: 1
  }), notificationvue_type_template_id_5fdb89a3_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [notificationvue_type_template_id_5fdb89a3_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#uso-basico"
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
    id: "tipos-de-notificaciones",
    content: "Tipos de notificaciones",
    href: "#tipos-de-notificaciones",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#tipos-de-notificaciones"
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
    id: "posicion-personalizada",
    content: "Posición personalizada",
    href: "#posicion-personalizada",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#posicion-personalizada"
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
    id: "desplazamiento",
    content: "Desplazamiento",
    href: "#desplazamiento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#desplazamiento"
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
    id: "usando-cadenas-html",
    content: "Usando cadenas HTML",
    href: "#usando-cadenas-html",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#usando-cadenas-html"
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
  }), _hoisted_28, _hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ocultar-boton-de-cerrar",
    content: "Ocultar boton de cerrar",
    href: "#ocultar-boton-de-cerrar",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_35, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ocultar-boton-de-cerrar"
      })];
    }),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_38];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_37];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "metodo-global",
    content: "Método global",
    href: "#metodo-global",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_39, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#metodo-global"
      })];
    }),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "importar-localmente",
    content: "Importar localmente",
    href: "#importar-localmente",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_41, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#importar-localmente"
      })];
    }),
    _: 1
  }), _hoisted_42, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "opciones",
    content: "Opciones",
    href: "#opciones",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_44, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#opciones"
      })];
    }),
    _: 1
  }), _hoisted_45, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "metodos",
    content: "Métodos",
    href: "#metodos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_46, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#metodos"
      })];
    }),
    _: 1
  }), _hoisted_47, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/notification.md?vue&type=template&id=5fdb89a3

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/notification.md?vue&type=script&lang=ts


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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Closes automatically ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" Won't close automatically ");

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
              title: 'Title',
              message: h('i', {
                style: 'color: teal'
              }, 'This is a reminder')
            });
          },
          open2: function open2() {
            this.$notify({
              title: 'Prompt',
              message: 'This is a message that does not automatically close',
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
              message: 'This is a success message',
              type: 'success'
            });
          },
          open2: function open2() {
            this.$notify({
              title: 'Warning',
              message: 'This is a warning message',
              type: 'warning'
            });
          },
          open3: function open3() {
            this.$notify.info({
              title: 'Info',
              message: 'This is an info message'
            });
          },
          open4: function open4() {
            this.$notify.error({
              title: 'Error',
              message: 'This is an error message'
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
              message: 'I\'m at the top right corner'
            });
          },
          open2: function open2() {
            this.$notify({
              title: 'Custom Position',
              message: 'I\'m at the bottom right corner',
              position: 'bottom-right'
            });
          },
          open3: function open3() {
            this.$notify({
              title: 'Custom Position',
              message: 'I\'m at the bottom left corner',
              position: 'bottom-left'
            });
          },
          open4: function open4() {
            this.$notify({
              title: 'Custom Position',
              message: 'I\'m at the top left corner',
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Notification with offset ");

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
              message: 'This is a success message',
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Use HTML String ");

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
              message: '<strong>This is <i>HTML</i> string</strong>'
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Hide close button ");

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
              message: 'This is a message without close button',
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
// CONCATENATED MODULE: ./website/docs/es/notification.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/notification.md



notificationvue_type_script_lang_ts.render = notificationvue_type_template_id_5fdb89a3_render

/* harmony default export */ var notification = __webpack_exports__["default"] = (notificationvue_type_script_lang_ts);

/***/ })

}]);