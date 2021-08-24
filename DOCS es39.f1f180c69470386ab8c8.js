(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107],{

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/message-box.md?vue&type=template&id=d0ee6c16

var message_boxvue_type_template_id_d0ee6c16_hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("MessageBox ");

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Un conjunto de cajas modales simulando un sistema de message box, principalmente para alertar información, confirmar operaciones y mostrar mensajes de aviso.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Por diseño los message box nos proveen de simulaciones de sistemas como los componentes "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "alert"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "confirm"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "prompt"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("，entonces su contenido debería ser simple. para contenido mas complejo, por favor utilice el componente Dialog.")])], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Alert ");

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Alert interrumpe las operaciones realizadas hasta que el usuario confirme la alerta.", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Desplegar una alerta utilizando el método "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$alert"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Simula el sistema "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "alert"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", y no puede ser cerrado al presionar la tecla ESC o al dar clic fuera de la caja. En este ejemplo, dos parámetros son recibidos "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Vale la pena mencionar que cuando la caja es cerrada, regresa un objeto "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para su procesamiento posteriormente. Si no estas seguro si el navegador soporta "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", deberías importar una librería de terceros de polyfill o utilizar callbacks.")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open the Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert('This is a message', 'Title', {\n          confirmButtonText: 'OK',\n          callback: action => {\n            this.$message({\n              type: 'info',\n              message: `action: ${ action }`\n            });\n          }\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.alert('This is a message', 'Title', {\n          confirmButtonText: 'OK',\n          callback: (action) => {\n            this.$message({\n              type: 'info',\n              message: `action: ${action}`,\n            });\n          },\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Confirm ");

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Confirm es utilizado para preguntar al usuario y recibir una confirmación.", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Llamando al método "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$confirm"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para abrir el componente confirm, y simula el sistema "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "confirm"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". También podemos personalizar a gran medida el componente Message Box al mandar un tercer atributo llamado "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" que es literalmente un objeto. El atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" indica el tipo de mensaje, y su valor puede ser "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "success"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "error"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "warning"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Se debe tener en cuenta que el segundo atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" debe ser de tipo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", y si es de tipo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "object"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", sera manejado como el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Aquí utilizamos "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para manejar posteriormente el proceso.")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open the Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          type: 'warning'\n        }).then(() => {\n          this.$message({\n            type: 'success',\n            message: 'Delete completed'\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: 'Delete canceled'\n          });\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent } from 'vue';\nimport { ElMessageBox } from 'element-plus';\nimport { ElMessage } from 'element-plus';\n\nexport default defineComponent({\n  setup() {\n    \n\n    const open = () => {\n      ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {\n        confirmButtonText: 'OK',\n        cancelButtonText: 'Cancel',\n        type: 'warning',\n      }).then(() => {\n        ElMessage({\n          type: 'success',\n          message: 'Delete completed',\n        });\n      }).catch(() => {\n        ElMessage({\n          type: 'info',\n          message: 'Delete canceled',\n        });\n      });\n    };\n\n    return {\n      open,\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Prompt ");

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Prompt es utilizado cuando se requiere entrada de información del usuario.", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Llamando al método "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$prompt"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" desplegamos el componente prompt, y simula el sistema "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "prompt"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".Puedes utilizar el parámetro "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "inputPattern"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para especificar tu propio patrón RegExp. Utiliza el parámetro "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "inputValidator"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para especificar el método de validación, y debería regresar un valor de tipo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" o "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Al regresar "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" o "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" significa que la validación a fallado, y la cadena regresada se usara como "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "inputErrorMessage"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Ademas, puedes personalizar el atributo placeholder del input box con el parámetro "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "inputPlaceholder"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$prompt('Please input your e-mail', 'Tip', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          inputPattern: /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,\n          inputErrorMessage: 'Invalid Email'\n        }).then(({ value }) => {\n          this.$message({\n            type: 'success',\n            message: 'Your email is:' + value\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: 'Input canceled'\n          });\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.prompt('Please input your e-mail', 'Tip', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          inputPattern: /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,\n          inputErrorMessage: 'Invalid Email',\n        })\n          .then(({ value }) => {\n            ElMessage({\n              type: 'success',\n              message: `Your email is:${value}`,\n            });\n          })\n          .catch(() => {\n            ElMessage({\n              type: 'info',\n              message: 'Input canceled',\n            });\n          });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Personalización ");

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Puede ser personalizado para mostrar diversos contenidos.", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Los tres métodos mencionados anteriormente son un rempaquetado del método "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". En este ejemplo se realiza una llamada al método "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" directamente utilizando el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "showCancelButton"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", el cual es utilizado para indicar si el botón cancelar es mostrado en pantalla. Además podemos utilizar el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "cancelButtonClass"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para agregar un estilo personalizado y el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "cancelButtonText"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para personalizar el texto del botón (el botón de confirmación también cuenta con estos campos, y podrá encontrar una lista completa de estos atributos al final de esta documentación). Este ejemplo también utiliza el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "beforeClose"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Es un método que es disparado cuando una instancia del componente MessageBox es cerrada, y su ejecución detendrá el cierre de la instancia. Tiene tres parámetros: "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "action"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "instance"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Al utilizarla te permite manipular la instancia antes de que sea cerrada, e.g. activando "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "loading"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para el botón de confirmación; puede invocar el método "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para cerrar la instancia del componente MessageBox (si el método "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" no es llamado dentro del atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "beforeClose"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", la instancia no podrá cerrarse).")])], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  import { h } from 'vue';\n\n  export default {\n    methods: {\n      open() {\n        this.$msgbox({\n          title: 'Message',\n          message: h('p', null, [\n            h('span', null, 'Message can be '),\n            h('i', { style: 'color: teal' }, 'VNode')\n          ]),\n          showCancelButton: true,\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          beforeClose: (action, instance, done) => {\n            if (action === 'confirm') {\n              instance.confirmButtonLoading = true;\n              instance.confirmButtonText = 'Loading...';\n              setTimeout(() => {\n                done();\n                setTimeout(() => {\n                  instance.confirmButtonLoading = false;\n                }, 300);\n              }, 3000);\n            } else {\n              done();\n            }\n          }\n        }).then(action => {\n          this.$message({\n            type: 'info',\n            message: 'action: ' + action\n          });\n        });\n      },\n    }\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, h } from 'vue';\nimport { ElMessage } from 'element-plus';\n\nexport default defineComponent({\n  setup() {\n    \n\n    const open = () => {\n      ElMessageBox({\n        title: 'Message',\n        message: h('p', null, [\n          h('span', null, 'Message can be '),\n          h('i', { style: 'color: teal' }, 'VNode'),\n        ]),\n        showCancelButton: true,\n        confirmButtonText: 'OK',\n        cancelButtonText: 'Cancel',\n        beforeClose: (action, instance, done) => {\n          if (action === 'confirm') {\n            instance.confirmButtonLoading = true;\n            instance.confirmButtonText = 'Loading...';\n            setTimeout(() => {\n              done();\n              setTimeout(() => {\n                instance.confirmButtonLoading = false;\n              }, 300);\n            }, 3000);\n          } else {\n            done();\n          }\n        },\n      }).then((action) => {\n        ElMessage({\n          type: 'info',\n          message: `action: ${action}`,\n        });\n      });\n    };\n\n    return {\n      open,\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_21 = {
  class: "tip"
};

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("El contenido de MessageBox puede ser ");

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "VNode", -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", permitiéndonos pasar componentes personalizados. Al abrir el MessageBox, Vue compara el nuevo ");

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "VNode", -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" con el viejo ");

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "VNode", -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", y luego averigua cómo actualizar eficientemente la interfaz de usuario, de modo que es posible que los componentes no se vuelvan a procesar completamente (");

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("#8931");

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("). En este caso, se puede añadir una clave única a ");

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "VNode", -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" cada vez que se abre MessageBox: ");

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ejemplo");

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".");

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Utiliza cadenas HTML ");

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" soporta cadenas HTML.")], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Establezca el valor de "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" a true y "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" sera tratado como una cadena HTML.")])], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert('<strong>This is <i>HTML</i> string</strong>', 'HTML String', {\n          dangerouslyUseHTMLString: true\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.alert('<strong>proxy is <i>HTML</i> string</strong>', 'HTML String', {\n          dangerouslyUseHTMLString: true,\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_39 = {
  class: "warning"
};

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Aunque la propiedad ");

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message", -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" soporta cadenas HTML, realizar arbitrariamente render dinámico de HTML en nuestro sitio web puede ser muy peligroso ya que puede conducir fácilmente a ");

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("XSS attacks");

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Entonces cuando ");

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dangerouslyUseHTMLString", -1);

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" esta activada, asegúrese que el contenido de ");

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message", -1);

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" sea de confianza, y ");

var _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "nunca", -1);

var _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" asignar ");

var _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message", -1);

var _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" a contenido generado por el usuario.");

var _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Distinguir entre cancelar y cerrar ");

var _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "En algunos casos, hacer clic en el botón Cancelar y en el botón Cerrar puede tener diferentes significados.", -1);

var _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Por defecto, los parámetros de "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Promise's reject callback"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "callback"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" son "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "cancel"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" cuando el usuario cancela (haciendo clic en el botón de cancelación) y cierra (haciendo clic en el botón de cerrar o en la capa de máscara, pulsando la tecla ESC) el MessageBox. Si "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "distinguishCancelAndClose"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" está ajustado a "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", los parámetros de las dos operaciones anteriores son "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "cancel"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "close"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" respectivamente.")])], -1);

var _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('You have unsaved changes, save and proceed?', 'Confirm', {\n          distinguishCancelAndClose: true,\n          confirmButtonText: 'Save',\n          cancelButtonText: 'Discard Changes'\n        })\n          .then(() => {\n            this.$message({\n              type: 'info',\n              message: 'Changes saved. Proceeding to a new route.'\n            });\n          })\n          .catch(action => {\n            this.$message({\n              type: 'info',\n              message: action === 'cancel'\n                ? 'Changes discarded. Proceeding to a new route.'\n                : 'Stay in the current route'\n            })\n          });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.confirm('You have unsaved changes, save and proceed?', 'Confirm', {\n          distinguishCancelAndClose: true,\n          confirmButtonText: 'Save',\n          cancelButtonText: 'Discard Changes',\n        })\n          .then(() => {\n            ElMessage({\n              type: 'info',\n              message: 'Changes saved. Proceeding to a new route.',\n            });\n          })\n          .catch((action) => {\n            ElMessage({\n              type: 'info',\n              message: action === 'cancel'\n                ? 'Changes discarded. Proceeding to a new route.'\n                : 'Stay in the current route',\n            });\n          });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Contenido centrado ");

var _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "El contenido del componente MessageBox puede ser centrado.", -1);

var _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Establecer "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" a "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" centrara el contenido")])], -1);

var _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          type: 'warning',\n          center: true\n        }).then(() => {\n          this.$message({\n            type: 'success',\n            message: 'Delete completed'\n          });\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: 'Delete canceled'\n          });\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          type: 'warning',\n          center: true,\n        }).then(() => {\n          ElMessage({\n            type: 'success',\n            message: 'Delete completed',\n          });\n        }).catch(() => {\n          ElMessage({\n            type: 'info',\n            message: 'Delete canceled',\n          });\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Métodos Globales ");

var _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>Si Element Plus fue importado completamente, agregara los siguientes métodos globales para <code>app.config.globalProperties</code>: <code>$msgbox</code>, <code>$alert</code>, <code>$confirm</code> y <code>$prompt</code>. Así que en una instancia de Vue puedes llamar el método <code>MessageBox</code> como lo que hicimos en esta pagina. Los parámetros son:</p><ul><li><code>$msgbox(options)</code></li><li><code>$alert(message, title, options)</code> or <code>$alert(message, options)</code></li><li><code>$confirm(message, title, options)</code> or <code>$confirm(message, options)</code></li><li><code>$prompt(message, title, options)</code> or <code>$prompt(message, options)</code></li></ul>", 2);

var _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Importación local ");

var _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>Si prefieres importar <code>MessageBox</code> cuando lo necesites (on demand):</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElMessageBox } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code><span class=\"lang-mark\">js</span></pre><p>Los métodos correspondientes: <code>ElMessageBox</code>, <code>ElMessageBox.alert</code>, <code>ElMessageBox.confirm</code> y <code>ElMessageBox.prompt</code>. Los parámetros son los mismos que los anteriores.</p>", 3);

var _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Opciones ");

var _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores Permitidos</th><th>Por defecto</th></tr></thead><tbody><tr><td>title</td><td>titulo del componente MessageBox</td><td>string</td><td>—</td><td>—</td></tr><tr><td>message</td><td>contenido del componente MessageBox</td><td>string</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>utilizado para que <code>message</code> sea tratado como una cadena HTML</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>tipo de mensaje , utilizado para mostrar el icono</td><td>string</td><td>success / info / warning / error</td><td>—</td></tr><tr><td>iconClass</td><td>clase personalizada para el icono, sobreescribe <code>type</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>nombre de la clase personalizada para el componente MessageBox</td><td>string</td><td>—</td><td>—</td></tr><tr><td>callback</td><td>MessageBox callback al cerrar si no desea utilizar Promise</td><td>function(action), donde la accion puede ser &#39;confirm&#39;, &#39;cancel&#39; o &#39;close&#39;, e <code>instance</code> es la instancia del componente MessageBox. Puedes acceder a los metodos y atributos de esa instancia</td><td>—</td><td>—</td></tr><tr><td>beforeClose</td><td>callback llamado antes de cerrar el componente MessageBox, y previene que el componente MessageBox se cierre</td><td>function(action, instance, done), donde <code>action</code> pueden ser &#39;confirm&#39;, &#39;cancel&#39; o &#39;close&#39;; <code>instance</code> es la instancia del componente MessageBox, Puedes acceder a los metodos y atributos de esa instancia; <code>done</code> es para cerrar la instancia</td><td>—</td><td>—</td></tr><tr><td>distinguishCancelAndClose</td><td>si se debe distinguir entre cancelar y cerrar</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lockScroll</td><td>utilizado para bloquear el desplazamiento del contenido del MessageBox prompts</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showCancelButton</td><td>utilizado para mostrar un botón cancelar</td><td>boolean</td><td>—</td><td>false (true cuando es llamado con confirm y prompt)</td></tr><tr><td>showConfirmButton</td><td>utilizado para mostrar un botón confirmar</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>cancelButtonText</td><td>contenido de texto del botón cancelar</td><td>string</td><td>—</td><td>Cancel</td></tr><tr><td>confirmButtonText</td><td>contenido de texto del botón confirmar</td><td>string</td><td>—</td><td>OK</td></tr><tr><td>cancelButtonClass</td><td>nombre de la clase personalizada del botón cancelar</td><td>string</td><td>—</td><td>—</td></tr><tr><td>confirmButtonClass</td><td>nombre de la clase personalizada del botón confirmar</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closeOnClickModal</td><td>utilizado para que que el componente MessageBox pueda ser cerrado al dar clic en la mascara</td><td>boolean</td><td>—</td><td>true (false cuando es llamado con alert)</td></tr><tr><td>closeOnPressEscape</td><td>utilizado para que que el componente MessageBox pueda ser cerrado al presionar la tecla ESC</td><td>boolean</td><td>—</td><td>true (false cuando es llamado con alert)</td></tr><tr><td>closeOnHashChange</td><td>utilizado para cerra el componente MessageBox cuando hash cambie</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showInput</td><td>utilizado para mostrar el componente input</td><td>boolean</td><td>—</td><td>false (true cuando es llamado con prompt)</td></tr><tr><td>inputPlaceholder</td><td>placeholder para el componente input</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputType</td><td>tipo del componente input</td><td>string</td><td>—</td><td>text</td></tr><tr><td>inputValue</td><td>valor inicial del componente input</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputPattern</td><td>regexp del componente input</td><td>regexp</td><td>—</td><td>—</td></tr><tr><td>inputValidator</td><td>función de validación del componente input. Debe regresar un valor de tipo boolean o string. Si regresa un valor tipo string, sera asignado a inputErrorMessage</td><td>function</td><td>—</td><td>—</td></tr><tr><td>inputErrorMessage</td><td>mensaje de error cuando la validación falla</td><td>string</td><td>—</td><td>Illegal input</td></tr><tr><td>center</td><td>utilizado para alinear el contenido al centro</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>roundButton</td><td>utilizado para redondear el botón</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>buttonSize</td><td>custom size of confirm and cancel buttons</td><td>string</td><td>mini / small / medium / large</td><td>small</td></tr></tbody></table>", 1);

function message_boxvue_type_template_id_d0ee6c16_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo6");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", message_boxvue_type_template_id_d0ee6c16_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "messagebox",
    content: "MessageBox",
    href: "#messagebox",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#messagebox"
      })];
    }),
    _: 1
  }), _hoisted_3, _hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "alert",
    content: "Alert",
    href: "#alert",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#alert"
      })];
    }),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
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
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "confirm",
    content: "Confirm",
    href: "#confirm",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#confirm"
      })];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
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
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "prompt",
    content: "Prompt",
    href: "#prompt",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#prompt"
      })];
    }),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
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
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "personalizacion",
    content: "Personalización",
    href: "#personalizacion",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#personalizacion"
      })];
    }),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
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
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("div", _hoisted_21, [Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_22, _hoisted_23, _hoisted_24, _hoisted_25, _hoisted_26, _hoisted_27, _hoisted_28, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/ElemeFE/element/issues/8931"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    _: 1
  }), _hoisted_30, _hoisted_31, _hoisted_32, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://jsfiddle.net/zhiyang/ezmhq2ef"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_33];
    }),
    _: 1
  }), _hoisted_34])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "utiliza-cadenas-html",
    content: "Utiliza cadenas HTML",
    href: "#utiliza-cadenas-html",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_35, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#utiliza-cadenas-html"
      })];
    }),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_38];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_37];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("div", _hoisted_39, [Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_40, _hoisted_41, _hoisted_42, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://en.wikipedia.org/wiki/Cross-site_scripting"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_43];
    }),
    _: 1
  }), _hoisted_44, _hoisted_45, _hoisted_46, _hoisted_47, _hoisted_48, _hoisted_49, _hoisted_50, _hoisted_51, _hoisted_52])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "distinguir-entre-cancelar-y-cerrar",
    content: "Distinguir entre cancelar y cerrar",
    href: "#distinguir-entre-cancelar-y-cerrar",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_53, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#distinguir-entre-cancelar-y-cerrar"
      })];
    }),
    _: 1
  }), _hoisted_54, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_56];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_55];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "contenido-centrado",
    content: "Contenido centrado",
    href: "#contenido-centrado",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_57, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#contenido-centrado"
      })];
    }),
    _: 1
  }), _hoisted_58, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_60];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_59];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "metodos-globales",
    content: "Métodos Globales",
    href: "#metodos-globales",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_61, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#metodos-globales"
      })];
    }),
    _: 1
  }), _hoisted_62, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "importacion-local",
    content: "Importación local",
    href: "#importacion-local",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_64, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#importacion-local"
      })];
    }),
    _: 1
  }), _hoisted_65, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "opciones",
    content: "Opciones",
    href: "#opciones",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_68, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#opciones"
      })];
    }),
    _: 1
  }), _hoisted_69, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/message-box.md?vue&type=template&id=d0ee6c16

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/message-box.md?vue&type=script&lang=ts


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
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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

      var h = vue_esm_browser_prod["t" /* h */];
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
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

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



message_boxvue_type_script_lang_ts.render = message_boxvue_type_template_id_d0ee6c16_render

/* harmony default export */ var message_box = __webpack_exports__["default"] = (message_boxvue_type_script_lang_ts);

/***/ })

}]);