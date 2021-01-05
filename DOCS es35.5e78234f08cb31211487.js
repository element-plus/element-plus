(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95],{

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/message-box.md?vue&type=template&id=5bea3895

var message_boxvue_type_template_id_5bea3895_hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"messagebox\"><a class=\"header-anchor\" href=\"#messagebox\">¶</a> MessageBox</h2><p>Un conjunto de cajas modales simulando un sistema de message box, principalmente para alertar información, confirmar operaciones y mostrar mensajes de aviso.</p><div class=\"tip\"><p>Por diseño los message box nos proveen de simulaciones de sistemas como los componentes <code>alert</code>, <code>confirm</code> y <code>prompt</code>，entonces su contenido debería ser simple. para contenido mas complejo, por favor utilice el componente Dialog.</p></div><h3 id=\"alert\"><a class=\"header-anchor\" href=\"#alert\">¶</a> Alert</h3><p>Alert interrumpe las operaciones realizadas hasta que el usuario confirme la alerta.</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Desplegar una alerta utilizando el método "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$alert"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Simula el sistema "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "alert"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", y no puede ser cerrado al presionar la tecla ESC o al dar clic fuera de la caja. En este ejemplo, dos parámetros son recibidos "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Vale la pena mencionar que cuando la caja es cerrada, regresa un objeto "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para su procesamiento posteriormente. Si no estas seguro si el navegador soporta "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", deberías importar una librería de terceros de polyfill o utilizar callbacks.")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open the Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert('This is a message', 'Title', {\n          confirmButtonText: 'OK',\n          callback: action => {\n            this.$message({\n              type: 'info',\n              message: `action: ${ action }`\n            });\n          }\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "confirm"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#confirm"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Confirm")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Confirm es utilizado para preguntar al usuario y recibir una confirmación.", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Llamando al método "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$confirm"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para abrir el componente confirm, y simula el sistema "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "confirm"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". También podemos personalizar a gran medida el componente Message Box al mandar un tercer atributo llamado "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" que es literalmente un objeto. El atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" indica el tipo de mensaje, y su valor puede ser "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "success"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "error"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "warning"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Se debe tener en cuenta que el segundo atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" debe ser de tipo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "string"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", y si es de tipo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "object"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", sera manejado como el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Aquí utilizamos "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para manejar posteriormente el proceso.")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open the Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          type: 'warning'\n        }).then(() => {\n          this.$message({\n            type: 'success',\n            message: 'Delete completed'\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: 'Delete canceled'\n          });\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "prompt"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#prompt"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Prompt")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Prompt es utilizado cuando se requiere entrada de información del usuario.", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Llamando al método "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$prompt"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" desplegamos el componente prompt, y simula el sistema "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "prompt"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".Puedes utilizar el parámetro "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inputPattern"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para especificar tu propio patrón RegExp. Utiliza el parámetro "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inputValidator"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para especificar el método de validación, y debería regresar un valor de tipo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" o "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Al regresar "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" o "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" significa que la validación a fallado, y la cadena regresada se usara como "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inputErrorMessage"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Ademas, puedes personalizar el atributo placeholder del input box con el parámetro "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inputPlaceholder"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$prompt('Please input your e-mail', 'Tip', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          inputPattern: /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,\n          inputErrorMessage: 'Invalid Email'\n        }).then(({ value }) => {\n          this.$message({\n            type: 'success',\n            message: 'Your email is:' + value\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: 'Input canceled'\n          });\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "personalizacion"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#personalizacion"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Personalización")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Puede ser personalizado para mostrar diversos contenidos.", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Los tres métodos mencionados anteriormente son un rempaquetado del método "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". En este ejemplo se realiza una llamada al método "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" directamente utilizando el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "showCancelButton"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", el cual es utilizado para indicar si el botón cancelar es mostrado en pantalla. Además podemos utilizar el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "cancelButtonClass"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para agregar un estilo personalizado y el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "cancelButtonText"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para personalizar el texto del botón (el botón de confirmación también cuenta con estos campos, y podrá encontrar una lista completa de estos atributos al final de esta documentación). Este ejemplo también utiliza el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "beforeClose"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Es un método que es disparado cuando una instancia del componente MessageBox es cerrada, y su ejecución detendrá el cierre de la instancia. Tiene tres parámetros: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "action"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "instance"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Al utilizarla te permite manipular la instancia antes de que sea cerrada, e.g. activando "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "loading"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para el botón de confirmación; puede invocar el método "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para cerrar la instancia del componente MessageBox (si el método "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" no es llamado dentro del atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "beforeClose"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", la instancia no podrá cerrarse).")])], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  import { h } from 'vue';\n\n  export default {\n    methods: {\n      open() {\n        this.$msgbox({\n          title: 'Message',\n          message: h('p', null, [\n            h('span', null, 'Message can be '),\n            h('i', { style: 'color: teal' }, 'VNode')\n          ]),\n          showCancelButton: true,\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          beforeClose: (action, instance, done) => {\n            if (action === 'confirm') {\n              instance.confirmButtonLoading = true;\n              instance.confirmButtonText = 'Loading...';\n              setTimeout(() => {\n                done();\n                setTimeout(() => {\n                  instance.confirmButtonLoading = false;\n                }, 300);\n              }, 3000);\n            } else {\n              done();\n            }\n          }\n        }).then(action => {\n          this.$message({\n            type: 'info',\n            message: 'action: ' + action\n          });\n        });\n      },\n    }\n  }\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"tip\"><p>El contenido de MessageBox puede ser <code>VNode</code>, permitiéndonos pasar componentes personalizados. Al abrir el MessageBox, Vue compara el nuevo <code>VNode</code> con el viejo <code>VNode</code>, y luego averigua cómo actualizar eficientemente la interfaz de usuario, de modo que es posible que los componentes no se vuelvan a procesar completamente (<a href=\"https://github.com/ElemeFE/element/issues/8931\">#8931</a>). En este caso, se puede añadir una clave única a <code>VNode</code> cada vez que se abre MessageBox: <a href=\"https://jsfiddle.net/zhiyang/ezmhq2ef\">ejemplo</a>.</p></div><h3 id=\"utiliza-cadenas-html\"><a class=\"header-anchor\" href=\"#utiliza-cadenas-html\">¶</a> Utiliza cadenas HTML</h3><p><code>message</code> soporta cadenas HTML.</p>", 3);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Establezca el valor de "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" a true y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" sera tratado como una cadena HTML.")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert('<strong>This is <i>HTML</i> string</strong>', 'HTML String', {\n          dangerouslyUseHTMLString: true\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"warning\"><p>Aunque la propiedad <code>message</code> soporta cadenas HTML, realizar arbitrariamente render dinámico de HTML en nuestro sitio web puede ser muy peligroso ya que puede conducir fácilmente a <a href=\"https://en.wikipedia.org/wiki/Cross-site_scripting\">XSS attacks</a>. Entonces cuando <code>dangerouslyUseHTMLString</code> esta activada, asegúrese que el contenido de <code>message</code> sea de confianza, y <strong>nunca</strong> asignar <code>message</code> a contenido generado por el usuario.</p></div><h3 id=\"distinguir-entre-cancelar-y-cerrar\"><a class=\"header-anchor\" href=\"#distinguir-entre-cancelar-y-cerrar\">¶</a> Distinguir entre cancelar y cerrar</h3><p>En algunos casos, hacer clic en el botón Cancelar y en el botón Cerrar puede tener diferentes significados.</p>", 3);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Por defecto, los parámetros de "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Promise's reject callback"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "callback"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" son "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "cancel"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" cuando el usuario cancela (haciendo clic en el botón de cancelación) y cierra (haciendo clic en el botón de cerrar o en la capa de máscara, pulsando la tecla ESC) el MessageBox. Si "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "distinguishCancelAndClose"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" está ajustado a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", los parámetros de las dos operaciones anteriores son "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "cancel"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "close"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" respectivamente.")])], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('You have unsaved changes, save and proceed?', 'Confirm', {\n          distinguishCancelAndClose: true,\n          confirmButtonText: 'Save',\n          cancelButtonText: 'Discard Changes'\n        })\n          .then(() => {\n            this.$message({\n              type: 'info',\n              message: 'Changes saved. Proceeding to a new route.'\n            });\n          })\n          .catch(action => {\n            this.$message({\n              type: 'info',\n              message: action === 'cancel'\n                ? 'Changes discarded. Proceeding to a new route.'\n                : 'Stay in the current route'\n            })\n          });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "contenido-centrado"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#contenido-centrado"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Contenido centrado")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "El contenido del componente MessageBox puede ser centrado.", -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Establecer "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" centrara el contenido")])], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          type: 'warning',\n          center: true\n        }).then(() => {\n          this.$message({\n            type: 'success',\n            message: 'Delete completed'\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: 'Delete canceled'\n          });\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"metodos-globales\"><a class=\"header-anchor\" href=\"#metodos-globales\">¶</a> Métodos Globales</h3><p>Si Element Plus fue importado completamente, agregara los siguientes métodos globales para <code>app.config.globalProperties</code>: <code>$msgbox</code>, <code>$alert</code>, <code>$confirm</code> y <code>$prompt</code>. Así que en una instancia de Vue puedes llamar el método <code>MessageBox</code> como lo que hicimos en esta pagina. Los parámetros son:</p><ul><li><code>$msgbox(options)</code></li><li><code>$alert(message, title, options)</code> or <code>$alert(message, options)</code></li><li><code>$confirm(message, title, options)</code> or <code>$confirm(message, options)</code></li><li><code>$prompt(message, title, options)</code> or <code>$prompt(message, options)</code></li></ul><h3 id=\"importacion-local\"><a class=\"header-anchor\" href=\"#importacion-local\">¶</a> Importación local</h3><p>Si prefieres importar <code>MessageBox</code> cuando lo necesites (on demand):</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElMessageBox } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code></pre><p>Los métodos correspondientes: <code>ElMessageBox</code>, <code>ElMessageBox.alert</code>, <code>ElMessageBox.confirm</code> y <code>ElMessageBox.prompt</code>. Los parámetros son los mismos que los anteriores.</p><h3 id=\"opciones\"><a class=\"header-anchor\" href=\"#opciones\">¶</a> Opciones</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores Permitidos</th><th>Por defecto</th></tr></thead><tbody><tr><td>title</td><td>titulo del componente MessageBox</td><td>string</td><td>—</td><td>—</td></tr><tr><td>message</td><td>contenido del componente MessageBox</td><td>string</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>utilizado para que <code>message</code> sea tratado como una cadena HTML</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>tipo de mensaje , utilizado para mostrar el icono</td><td>string</td><td>success / info / warning / error</td><td>—</td></tr><tr><td>iconClass</td><td>clase personalizada para el icono, sobreescribe <code>type</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>nombre de la clase personalizada para el componente MessageBox</td><td>string</td><td>—</td><td>—</td></tr><tr><td>callback</td><td>MessageBox callback al cerrar si no desea utilizar Promise</td><td>function(action), donde la accion puede ser &#39;confirm&#39;, &#39;cancel&#39; o &#39;close&#39;, e <code>instance</code> es la instancia del componente MessageBox. Puedes acceder a los metodos y atributos de esa instancia</td><td>—</td><td>—</td></tr><tr><td>beforeClose</td><td>callback llamado antes de cerrar el componente MessageBox, y previene que el componente MessageBox se cierre</td><td>function(action, instance, done), donde <code>action</code> pueden ser &#39;confirm&#39;, &#39;cancel&#39; o &#39;close&#39;; <code>instance</code> es la instancia del componente MessageBox, Puedes acceder a los metodos y atributos de esa instancia; <code>done</code> es para cerrar la instancia</td><td>—</td><td>—</td></tr><tr><td>distinguishCancelAndClose</td><td>si se debe distinguir entre cancelar y cerrar</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lockScroll</td><td>utilizado para bloquear el desplazamiento del contenido del MessageBox prompts</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showCancelButton</td><td>utilizado para mostrar un botón cancelar</td><td>boolean</td><td>—</td><td>false (true cuando es llamado con confirm y prompt)</td></tr><tr><td>showConfirmButton</td><td>utilizado para mostrar un botón confirmar</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>cancelButtonText</td><td>contenido de texto del botón cancelar</td><td>string</td><td>—</td><td>Cancel</td></tr><tr><td>confirmButtonText</td><td>contenido de texto del botón confirmar</td><td>string</td><td>—</td><td>OK</td></tr><tr><td>cancelButtonClass</td><td>nombre de la clase personalizada del botón cancelar</td><td>string</td><td>—</td><td>—</td></tr><tr><td>confirmButtonClass</td><td>nombre de la clase personalizada del botón confirmar</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closeOnClickModal</td><td>utilizado para que que el componente MessageBox pueda ser cerrado al dar clic en la mascara</td><td>boolean</td><td>—</td><td>true (false cuando es llamado con alert)</td></tr><tr><td>closeOnPressEscape</td><td>utilizado para que que el componente MessageBox pueda ser cerrado al presionar la tecla ESC</td><td>boolean</td><td>—</td><td>true (false cuando es llamado con alert)</td></tr><tr><td>closeOnHashChange</td><td>utilizado para cerra el componente MessageBox cuando hash cambie</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showInput</td><td>utilizado para mostrar el componente input</td><td>boolean</td><td>—</td><td>false (true cuando es llamado con prompt)</td></tr><tr><td>inputPlaceholder</td><td>placeholder para el componente input</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputType</td><td>tipo del componente input</td><td>string</td><td>—</td><td>text</td></tr><tr><td>inputValue</td><td>valor inicial del componente input</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputPattern</td><td>regexp del componente input</td><td>regexp</td><td>—</td><td>—</td></tr><tr><td>inputValidator</td><td>función de validación del componente input. Debe regresar un valor de tipo boolean o string. Si regresa un valor tipo string, sera asignado a inputErrorMessage</td><td>function</td><td>—</td><td>—</td></tr><tr><td>inputErrorMessage</td><td>mensaje de error cuando la validación falla</td><td>string</td><td>—</td><td>Illegal input</td></tr><tr><td>center</td><td>utilizado para alinear el contenido al centro</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>roundButton</td><td>utilizado para redondear el botón</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 9);

function message_boxvue_type_template_id_5bea3895_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", message_boxvue_type_template_id_5bea3895_hoisted_1, [_hoisted_2, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, _hoisted_10, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    _: 1
  }), _hoisted_31, _hoisted_32, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_34];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_33];
    }),
    _: 1
  }), _hoisted_35]);
}
// CONCATENATED MODULE: ./website/docs/es/message-box.md?vue&type=template&id=5bea3895

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/message-box.md?vue&type=script&lang=ts


/* harmony default export */ var message_boxvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open the Message Box");

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

            this.$alert('This is a message', 'Title', {
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
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open the Message Box");

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

            this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              type: 'warning'
            }).then(function () {
              _this2.$message({
                type: 'success',
                message: 'Delete completed'
              });
            }).catch(function () {
              _this2.$message({
                type: 'info',
                message: 'Delete canceled'
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
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

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

            this.$prompt('Please input your e-mail', 'Tip', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
              inputErrorMessage: 'Invalid Email'
            }).then(function (_ref) {
              var value = _ref.value;

              _this3.$message({
                type: 'success',
                message: 'Your email is:' + value
              });
            }).catch(function () {
              _this3.$message({
                type: 'info',
                message: 'Input canceled'
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
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

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

      var h = vue_esm_browser["s" /* h */];
      var democomponentExport = {
        methods: {
          open: function open() {
            var _this4 = this;

            this.$msgbox({
              title: 'Message',
              message: h('p', null, [h('span', null, 'Message can be '), h('i', {
                style: 'color: teal'
              }, 'VNode')]),
              showCancelButton: true,
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              beforeClose: function beforeClose(action, instance, done) {
                if (action === 'confirm') {
                  instance.confirmButtonLoading = true;
                  instance.confirmButtonText = 'Loading...';
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
                message: 'action: ' + action
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
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

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
            this.$alert('<strong>This is <i>HTML</i> string</strong>', 'HTML String', {
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
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

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

            this.$confirm('You have unsaved changes, save and proceed?', 'Confirm', {
              distinguishCancelAndClose: true,
              confirmButtonText: 'Save',
              cancelButtonText: 'Discard Changes'
            }).then(function () {
              _this5.$message({
                type: 'info',
                message: 'Changes saved. Proceeding to a new route.'
              });
            }).catch(function (action) {
              _this5.$message({
                type: 'info',
                message: action === 'cancel' ? 'Changes discarded. Proceeding to a new route.' : 'Stay in the current route'
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
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

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

            this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              type: 'warning',
              center: true
            }).then(function () {
              _this6.$message({
                type: 'success',
                message: 'Delete completed'
              });
            }).catch(function () {
              _this6.$message({
                type: 'info',
                message: 'Delete canceled'
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
// CONCATENATED MODULE: ./website/docs/es/message-box.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/message-box.md



message_boxvue_type_script_lang_ts.render = message_boxvue_type_template_id_5bea3895_render

/* harmony default export */ var message_box = __webpack_exports__["default"] = (message_boxvue_type_script_lang_ts);

/***/ })

}]);