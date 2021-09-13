(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[108],{

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/message.md?vue&type=template&id=884a0334

const messagevue_type_template_id_884a0334_hoisted_1 = {
  class: "content element-doc"
};

const messagevue_type_template_id_884a0334_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Message ");

const messagevue_type_template_id_884a0334_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Utilizado para mostrar retroalimentación después de una actividad. La diferencia con el componente Notification es que este ultimo es utilizado para mostrar una notificación pasiva a nivel de sistema.", -1);

const messagevue_type_template_id_884a0334_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Uso básico ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Se muestra en la parte superior de la pagina y desaparece después de 3 segundos.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("La configuración del componente Message es muy similar al del componente notification, así que parte de las opciones no serán explicadas en detalle aquí. Puedes consultar la tabla de opciones en la parte inferior combinada con la documentación del componente notification para comprenderla. Element Plus a registrado un método "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$message"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para poder invocarlo. Message puede tomar una cadena o un Vnode como parámetro, y lo mostrara como el cuerpo principal.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"open\">Show message</el-button>\n  <el-button :plain=\"true\" @click=\"openVn\">VNode</el-button>\n</template>\n\n<script>\n  import { h } from 'vue'\n\n  export default {\n    methods: {\n      open() {\n        this.$message('This is a message.')\n      },\n\n      openVn() {\n        this.$message({\n          message: h('p', null, [\n            h('span', null, 'Message can be '),\n            h('i', { style: 'color: teal' }, 'VNode'),\n          ]),\n        })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, h } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessage('this is a message.');\n      };\n\n      const openVn = () => {\n        ElMessage({\n          message: h('p', null, [\n            h('span', null, 'Message can be '),\n            h('i', { style: 'color: teal' }, 'VNode'),\n          ]),\n        });\n      };\n\n      return {\n        open,\n        openVn,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tipos ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Utilizados para mostrar retroalimentación de Success, Warning, Message y Error activities.", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cuando necesite mas personalización, el componente Message también puede tomar un objeto como parámetro. Por ejemplo, estableciendo el valor de "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" puede definir diferentes tipos, el predeterminado es "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". En tales casos el cuerpo principal se pasa como el valor de "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". También, hay registrados métodos para los diferentes tipos, así que, puedes llamarlos sin necesidad de pasar un tipo como "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "open4"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"open2\">success</el-button>\n  <el-button :plain=\"true\" @click=\"open3\">warning</el-button>\n  <el-button :plain=\"true\" @click=\"open1\">message</el-button>\n  <el-button :plain=\"true\" @click=\"open4\">error</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$message('This is a message.')\n      },\n      open2() {\n        this.$message({\n          message: 'Congrats, this is a success message.',\n          type: 'success',\n        })\n      },\n\n      open3() {\n        this.$message({\n          message: 'Warning, this is a warning message.',\n          type: 'warning',\n        })\n      },\n\n      open4() {\n        this.$message.error('Oops, this is a error message.')\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open1 = () => {\n        ElMessage('this is a message.');\n      };\n      const open2 = () => {\n        ElMessage({\n          message: 'Congrats, this is a success message.',\n          type: 'success',\n        });\n      };\n      const open3 = () => {\n        ElMessage({\n          message: 'Warning, this is a warning message.',\n          type: 'warning',\n        });\n      };\n      const open4 = () => {\n        ElMessage.error('Oops, this is a error message.');\n      };\n      return {\n        open1,\n        open2,\n        open3,\n        open4,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Closable ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Un botón para cerrar que puede ser agregado.", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Un componente Message predeterminado no se puede cerrar manualmente. Si necesitas un componente message que pueda cerrarse, puedes establecer el campo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "showClose"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Ademas, al igual que las notificaciones, message tiene un atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "duration"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" que puede ser controlado. Por defecto la duración es de 3000 ms, y no desaparecerá al llegar a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"open1\">message</el-button>\n  <el-button :plain=\"true\" @click=\"open2\">success</el-button>\n  <el-button :plain=\"true\" @click=\"open3\">warning</el-button>\n  <el-button :plain=\"true\" @click=\"open4\">error</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$message({\n          showClose: true,\n          message: 'This is a message.',\n        })\n      },\n\n      open2() {\n        this.$message({\n          showClose: true,\n          message: 'Congrats, this is a success message.',\n          type: 'success',\n        })\n      },\n\n      open3() {\n        this.$message({\n          showClose: true,\n          message: 'Warning, this is a warning message.',\n          type: 'warning',\n        })\n      },\n\n      open4() {\n        this.$message({\n          showClose: true,\n          message: 'Oops, this is a error message.',\n          type: 'error',\n        })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open1 = () => {\n        ElMessage({\n          showClose: true,\n          message: 'This is a message.',\n        });\n      };\n      const open2 = () => {\n        ElMessage({\n          showClose: true,\n          message: 'Congrats, this is a success message.',\n          type: 'success',\n        });\n      };\n      const open3 = () => {\n        ElMessage({\n          showClose: true,\n          message: 'Warning, this is a warning message.',\n          type: 'warning',\n        });\n      };\n      const open4 = () => {\n        ElMessage({\n          showClose: true,\n          message: 'Oops, this is a error message.',\n          type: 'error',\n        });\n      };\n      return {\n        open1,\n        open2,\n        open3,\n        open4,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Texto centrado ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Utiliza el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para centrar el texto.")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"openCenter\">Centered text</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      openCenter() {\n        this.$message({\n          message: 'Centered text',\n          center: true,\n        })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const openCenter = () => {\n        ElMessage({\n          showClose: true,\n          message: 'Centered text',\n        });\n      };\n      return {\n        openCenter,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Utiliza cadenas HTML ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" soporta cadenas HTML.")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Establece la propiedad "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en true y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" sera tratado como una cadena HTML.")])], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"openHTML\">Use HTML String</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      openHTML() {\n        this.$message({\n          dangerouslyUseHTMLString: true,\n          message: '<strong>This is <i>HTML</i> string</strong>',\n        })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const openCenter = () => {\n        ElMessage({\n          dangerouslyUseHTMLString: true,\n          message: '<strong>This is <i>HTML</i> string</strong>',\n        });\n      };\n      return {\n        openCenter,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_23 = {
  class: "warning"
};

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Aunque la propiedad ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message", -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" soporta cadenas HTML, realizar arbitrariamente render dinámico de HTML en nuestro sitio web puede ser muy peligroso ya que puede conducir fácilmente a ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("XSS attacks");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Entonces cuando ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dangerouslyUseHTMLString", -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" esta activada, asegurese que el contenido de ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message", -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" sea de confianza, y ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "nunca", -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" asignar ");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message", -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a contenido generado por el usuario.");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Métodos Globales ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Element Plus ha agregado un método global llamado "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$message"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "app.config.globalProperties"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Entonces en una instancia de vue puede llamar a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Message"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" como lo hicimos en esta pagina.")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Importación local ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElMessage } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n</code><span class=\"lang-mark\">js</span></pre><p>En este caso debería llamar al método <code>ElMessage(options)</code>. También se han registrado métodos para los diferentes tipos, e.g. <code>ElMessage.success(options)</code>. Puede llamar al método <code>ElMessage.closeAll()</code> para cerrar manualmente todas las instancias.</p>", 2);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Options ");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripcion</th><th>Tipo</th><th>Valores permitidos</th><th>Por defecto</th></tr></thead><tbody><tr><td>message</td><td>texto del mensaje</td><td>string / VNode</td><td>—</td><td>—</td></tr><tr><td>type</td><td>tipo del mensaje</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>iconClass</td><td>clase personalizada para el icono, sobreescribe <code>type</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>utilizado para que <code>message</code> sea tratado como cadena HTML</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>customClass</td><td>nombre de clase personalizado para el componente Message</td><td>string</td><td>—</td><td>—</td></tr><tr><td>duration</td><td>muestra la duración,en milisegundos. si se establece en 0, este no se apagara automáticamente</td><td>number</td><td>—</td><td>3000</td></tr><tr><td>showClose</td><td>utilizado para mostrar un botón para cerrar</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>center</td><td>utilizado para centrar el texto</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>onClose</td><td>función callback ejecutada cuando se cierra con una instancia de mensaje como parámetro</td><td>function</td><td>—</td><td>—</td></tr><tr><td>offset</td><td>La distancia desde la parte superior del viewport</td><td>number</td><td>—</td><td>20</td></tr></tbody></table>", 1);

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Métodos ");

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p><code>Message</code> y <code>this.$message</code> regresan una instancia del componente Message. Para cerrar manualmente la instancia, puede llamar al método <code>close</code>.</p><table><thead><tr><th>Método</th><th>Descripción</th></tr></thead><tbody><tr><td>close</td><td>cierra el componente Message</td></tr></tbody></table>", 2);

function messagevue_type_template_id_884a0334_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", messagevue_type_template_id_884a0334_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "message",
    content: "Message",
    href: "#message",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [messagevue_type_template_id_884a0334_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#message"
    })]),
    _: 1
  }), messagevue_type_template_id_884a0334_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [messagevue_type_template_id_884a0334_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#uso-basico"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tipos",
    content: "Tipos",
    href: "#tipos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tipos"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "closable",
    content: "Closable",
    href: "#closable",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#closable"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "texto-centrado",
    content: "Texto centrado",
    href: "#texto-centrado",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#texto-centrado"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "utiliza-cadenas-html",
    content: "Utiliza cadenas HTML",
    href: "#utiliza-cadenas-html",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#utiliza-cadenas-html"
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
    id: "metodos-globales",
    content: "Métodos Globales",
    href: "#metodos-globales",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#metodos-globales"
    })]),
    _: 1
  }), _hoisted_38, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "importacion-local",
    content: "Importación local",
    href: "#importacion-local",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#importacion-local"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "options",
    content: "Options",
    href: "#options",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_42, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#options"
    })]),
    _: 1
  }), _hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "metodos",
    content: "Métodos",
    href: "#metodos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#metodos"
    })]),
    _: 1
  }), _hoisted_45, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/message.md?vue&type=template&id=884a0334

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/message.md?vue&type=script&lang=ts

/* harmony default export */ var messagevue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Show message");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("VNode");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.openVn
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
          open() {
            this.$message('This is a message.');
          },

          openVn() {
            this.$message({
              message: h('p', null, [h('span', null, 'Message can be '), h('i', {
                style: 'color: teal'
              }, 'VNode')])
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("success");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("warning");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("message");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("error");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open2
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open3
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open1
        }, {
          default: _withCtx(() => [_hoisted_3]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open4
        }, {
          default: _withCtx(() => [_hoisted_4]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open1() {
            this.$message('This is a message.');
          },

          open2() {
            this.$message({
              message: 'Congrats, this is a success message.',
              type: 'success'
            });
          },

          open3() {
            this.$message({
              message: 'Warning, this is a warning message.',
              type: 'warning'
            });
          },

          open4() {
            this.$message.error('Oops, this is a error message.');
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("message");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("success");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("warning");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("error");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open1
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open2
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open3
        }, {
          default: _withCtx(() => [_hoisted_3]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open4
        }, {
          default: _withCtx(() => [_hoisted_4]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          open1() {
            this.$message({
              showClose: true,
              message: 'This is a message.'
            });
          },

          open2() {
            this.$message({
              showClose: true,
              message: 'Congrats, this is a success message.',
              type: 'success'
            });
          },

          open3() {
            this.$message({
              showClose: true,
              message: 'Warning, this is a warning message.',
              type: 'warning'
            });
          },

          open4() {
            this.$message({
              showClose: true,
              message: 'Oops, this is a error message.',
              type: 'error'
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Centered text");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.openCenter
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          openCenter() {
            this.$message({
              message: 'Centered text',
              center: true
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Use HTML String");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.openHTML
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          openHTML() {
            this.$message({
              dangerouslyUseHTMLString: true,
              message: '<strong>This is <i>HTML</i> string</strong>'
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
// CONCATENATED MODULE: ./website/docs/es/message.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/message.md



messagevue_type_script_lang_ts.render = messagevue_type_template_id_884a0334_render

/* harmony default export */ var message = __webpack_exports__["default"] = (messagevue_type_script_lang_ts);

/***/ })

}]);