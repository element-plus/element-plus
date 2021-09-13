(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[106],{

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/message-box.md?vue&type=template&id=cc5baf88

const message_boxvue_type_template_id_cc5baf88_hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("MessageBox ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Un conjunto de cajas modales simulando un sistema de message box, principalmente para alertar información, confirmar operaciones y mostrar mensajes de aviso.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Por diseño los message box nos proveen de simulaciones de sistemas como los componentes "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "alert"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "confirm"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "prompt"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，entonces su contenido debería ser simple. para contenido mas complejo, por favor utilice el componente Dialog.")])], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Alert ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Alert interrumpe las operaciones realizadas hasta que el usuario confirme la alerta.", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Desplegar una alerta utilizando el método "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$alert"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Simula el sistema "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "alert"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", y no puede ser cerrado al presionar la tecla ESC o al dar clic fuera de la caja. En este ejemplo, dos parámetros son recibidos "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Vale la pena mencionar que cuando la caja es cerrada, regresa un objeto "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para su procesamiento posteriormente. Si no estas seguro si el navegador soporta "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", deberías importar una librería de terceros de polyfill o utilizar callbacks.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open the Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert('This is a message', 'Title', {\n          confirmButtonText: 'OK',\n          callback: (action) => {\n            this.$message({\n              type: 'info',\n              message: `action: ${action}`,\n            })\n          },\n        })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.alert('This is a message', 'Title', {\n          confirmButtonText: 'OK',\n          callback: (action) => {\n            this.$message({\n              type: 'info',\n              message: `action: ${action}`,\n            });\n          },\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Confirm ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Confirm es utilizado para preguntar al usuario y recibir una confirmación.", -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Llamando al método "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$confirm"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para abrir el componente confirm, y simula el sistema "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "confirm"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". También podemos personalizar a gran medida el componente Message Box al mandar un tercer atributo llamado "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" que es literalmente un objeto. El atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" indica el tipo de mensaje, y su valor puede ser "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "success"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "error"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "warning"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Se debe tener en cuenta que el segundo atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" debe ser de tipo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", y si es de tipo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "object"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", sera manejado como el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Aquí utilizamos "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para manejar posteriormente el proceso.")])], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open the Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm(\n          'This will permanently delete the file. Continue?',\n          'Warning',\n          {\n            confirmButtonText: 'OK',\n            cancelButtonText: 'Cancel',\n            type: 'warning',\n          }\n        )\n          .then(() => {\n            this.$message({\n              type: 'success',\n              message: 'Delete completed',\n            })\n          })\n          .catch(() => {\n            this.$message({\n              type: 'info',\n              message: 'Delete canceled',\n            })\n          })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent } from 'vue';\nimport { ElMessageBox } from 'element-plus';\nimport { ElMessage } from 'element-plus';\n\nexport default defineComponent({\n  setup() {\n    \n\n    const open = () => {\n      ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {\n        confirmButtonText: 'OK',\n        cancelButtonText: 'Cancel',\n        type: 'warning',\n      }).then(() => {\n        ElMessage({\n          type: 'success',\n          message: 'Delete completed',\n        });\n      }).catch(() => {\n        ElMessage({\n          type: 'info',\n          message: 'Delete canceled',\n        });\n      });\n    };\n\n    return {\n      open,\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Prompt ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Prompt es utilizado cuando se requiere entrada de información del usuario.", -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Llamando al método "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$prompt"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" desplegamos el componente prompt, y simula el sistema "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "prompt"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".Puedes utilizar el parámetro "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "inputPattern"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para especificar tu propio patrón RegExp. Utiliza el parámetro "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "inputValidator"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para especificar el método de validación, y debería regresar un valor de tipo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" o "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Al regresar "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" o "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" significa que la validación a fallado, y la cadena regresada se usara como "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "inputErrorMessage"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Ademas, puedes personalizar el atributo placeholder del input box con el parámetro "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "inputPlaceholder"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$prompt('Please input your e-mail', 'Tip', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          inputPattern:\n            /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,\n          inputErrorMessage: 'Invalid Email',\n        })\n          .then(({ value }) => {\n            this.$message({\n              type: 'success',\n              message: 'Your email is:' + value,\n            })\n          })\n          .catch(() => {\n            this.$message({\n              type: 'info',\n              message: 'Input canceled',\n            })\n          })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.prompt('Please input your e-mail', 'Tip', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          inputPattern: /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,\n          inputErrorMessage: 'Invalid Email',\n        })\n          .then(({ value }) => {\n            ElMessage({\n              type: 'success',\n              message: `Your email is:${value}`,\n            });\n          })\n          .catch(() => {\n            ElMessage({\n              type: 'info',\n              message: 'Input canceled',\n            });\n          });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Personalización ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Puede ser personalizado para mostrar diversos contenidos.", -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Los tres métodos mencionados anteriormente son un rempaquetado del método "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". En este ejemplo se realiza una llamada al método "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "$msgbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" directamente utilizando el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "showCancelButton"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", el cual es utilizado para indicar si el botón cancelar es mostrado en pantalla. Además podemos utilizar el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "cancelButtonClass"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para agregar un estilo personalizado y el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "cancelButtonText"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para personalizar el texto del botón (el botón de confirmación también cuenta con estos campos, y podrá encontrar una lista completa de estos atributos al final de esta documentación). Este ejemplo también utiliza el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "beforeClose"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Es un método que es disparado cuando una instancia del componente MessageBox es cerrada, y su ejecución detendrá el cierre de la instancia. Tiene tres parámetros: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "action"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "instance"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Al utilizarla te permite manipular la instancia antes de que sea cerrada, e.g. activando "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "loading"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para el botón de confirmación; puede invocar el método "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para cerrar la instancia del componente MessageBox (si el método "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "done"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" no es llamado dentro del atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "beforeClose"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", la instancia no podrá cerrarse).")])], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  import { h } from 'vue'\n\n  export default {\n    methods: {\n      open() {\n        this.$msgbox({\n          title: 'Message',\n          message: h('p', null, [\n            h('span', null, 'Message can be '),\n            h('i', { style: 'color: teal' }, 'VNode'),\n          ]),\n          showCancelButton: true,\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          beforeClose: (action, instance, done) => {\n            if (action === 'confirm') {\n              instance.confirmButtonLoading = true\n              instance.confirmButtonText = 'Loading...'\n              setTimeout(() => {\n                done()\n                setTimeout(() => {\n                  instance.confirmButtonLoading = false\n                }, 300)\n              }, 3000)\n            } else {\n              done()\n            }\n          },\n        }).then((action) => {\n          this.$message({\n            type: 'info',\n            message: 'action: ' + action,\n          })\n        })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, h } from 'vue';\nimport { ElMessage } from 'element-plus';\n\nexport default defineComponent({\n  setup() {\n    \n\n    const open = () => {\n      ElMessageBox({\n        title: 'Message',\n        message: h('p', null, [\n          h('span', null, 'Message can be '),\n          h('i', { style: 'color: teal' }, 'VNode'),\n        ]),\n        showCancelButton: true,\n        confirmButtonText: 'OK',\n        cancelButtonText: 'Cancel',\n        beforeClose: (action, instance, done) => {\n          if (action === 'confirm') {\n            instance.confirmButtonLoading = true;\n            instance.confirmButtonText = 'Loading...';\n            setTimeout(() => {\n              done();\n              setTimeout(() => {\n                instance.confirmButtonLoading = false;\n              }, 300);\n            }, 3000);\n          } else {\n            done();\n          }\n        },\n      }).then((action) => {\n        ElMessage({\n          type: 'info',\n          message: `action: ${action}`,\n        });\n      });\n    };\n\n    return {\n      open,\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_21 = {
  class: "tip"
};

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("El contenido de MessageBox puede ser ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "VNode", -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", permitiéndonos pasar componentes personalizados. Al abrir el MessageBox, Vue compara el nuevo ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "VNode", -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" con el viejo ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "VNode", -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", y luego averigua cómo actualizar eficientemente la interfaz de usuario, de modo que es posible que los componentes no se vuelvan a procesar completamente (");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("#8931");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("). En este caso, se puede añadir una clave única a ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "VNode", -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" cada vez que se abre MessageBox: ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ejemplo");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Utiliza cadenas HTML ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" soporta cadenas HTML.")], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Establezca el valor de "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a true y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" sera tratado como una cadena HTML.")])], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$alert(\n          '<strong>This is <i>HTML</i> string</strong>',\n          'HTML String',\n          {\n            dangerouslyUseHTMLString: true,\n          }\n        )\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.alert('<strong>proxy is <i>HTML</i> string</strong>', 'HTML String', {\n          dangerouslyUseHTMLString: true,\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_39 = {
  class: "warning"
};

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Aunque la propiedad ");

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message", -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" soporta cadenas HTML, realizar arbitrariamente render dinámico de HTML en nuestro sitio web puede ser muy peligroso ya que puede conducir fácilmente a ");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("XSS attacks");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Entonces cuando ");

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dangerouslyUseHTMLString", -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" esta activada, asegúrese que el contenido de ");

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message", -1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" sea de confianza, y ");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "nunca", -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" asignar ");

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "message", -1);

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a contenido generado por el usuario.");

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Distinguir entre cancelar y cerrar ");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "En algunos casos, hacer clic en el botón Cancelar y en el botón Cerrar puede tener diferentes significados.", -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Por defecto, los parámetros de "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Promise's reject callback"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "callback"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" son "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "cancel"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" cuando el usuario cancela (haciendo clic en el botón de cancelación) y cierra (haciendo clic en el botón de cerrar o en la capa de máscara, pulsando la tecla ESC) el MessageBox. Si "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "distinguishCancelAndClose"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" está ajustado a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", los parámetros de las dos operaciones anteriores son "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "cancel"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "close"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" respectivamente.")])], -1);

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm(\n          'You have unsaved changes, save and proceed?',\n          'Confirm',\n          {\n            distinguishCancelAndClose: true,\n            confirmButtonText: 'Save',\n            cancelButtonText: 'Discard Changes',\n          }\n        )\n          .then(() => {\n            this.$message({\n              type: 'info',\n              message: 'Changes saved. Proceeding to a new route.',\n            })\n          })\n          .catch((action) => {\n            this.$message({\n              type: 'info',\n              message:\n                action === 'cancel'\n                  ? 'Changes discarded. Proceeding to a new route.'\n                  : 'Stay in the current route',\n            })\n          })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.confirm('You have unsaved changes, save and proceed?', 'Confirm', {\n          distinguishCancelAndClose: true,\n          confirmButtonText: 'Save',\n          cancelButtonText: 'Discard Changes',\n        })\n          .then(() => {\n            ElMessage({\n              type: 'info',\n              message: 'Changes saved. Proceeding to a new route.',\n            });\n          })\n          .catch((action) => {\n            ElMessage({\n              type: 'info',\n              message: action === 'cancel'\n                ? 'Changes discarded. Proceeding to a new route.'\n                : 'Stay in the current route',\n            });\n          });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Contenido centrado ");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "El contenido del componente MessageBox puede ser centrado.", -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Establecer "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" centrara el contenido")])], -1);

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"open\">Click to open Message Box</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open() {\n        this.$confirm(\n          'This will permanently delete the file. Continue?',\n          'Warning',\n          {\n            confirmButtonText: 'OK',\n            cancelButtonText: 'Cancel',\n            type: 'warning',\n            center: true,\n          }\n        )\n          .then(() => {\n            this.$message({\n              type: 'success',\n              message: 'Delete completed',\n            })\n          })\n          .catch(() => {\n            this.$message({\n              type: 'info',\n              message: 'Delete canceled',\n            })\n          })\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {\n          confirmButtonText: 'OK',\n          cancelButtonText: 'Cancel',\n          type: 'warning',\n          center: true,\n        }).then(() => {\n          ElMessage({\n            type: 'success',\n            message: 'Delete completed',\n          });\n        }).catch(() => {\n          ElMessage({\n            type: 'info',\n            message: 'Delete canceled',\n          });\n        });\n      };\n\n      return {\n        open,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Métodos Globales ");

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>Si Element Plus fue importado completamente, agregara los siguientes métodos globales para <code>app.config.globalProperties</code>: <code>$msgbox</code>, <code>$alert</code>, <code>$confirm</code> y <code>$prompt</code>. Así que en una instancia de Vue puedes llamar el método <code>MessageBox</code> como lo que hicimos en esta pagina. Los parámetros son:</p><ul><li><code>$msgbox(options)</code></li><li><code>$alert(message, title, options)</code> or <code>$alert(message, options)</code></li><li><code>$confirm(message, title, options)</code> or <code>$confirm(message, options)</code></li><li><code>$prompt(message, title, options)</code> or <code>$prompt(message, options)</code></li></ul>", 2);

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Importación local ");

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>Si prefieres importar <code>MessageBox</code> cuando lo necesites (on demand):</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElMessageBox } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n</code><span class=\"lang-mark\">js</span></pre><p>Los métodos correspondientes: <code>ElMessageBox</code>, <code>ElMessageBox.alert</code>, <code>ElMessageBox.confirm</code> y <code>ElMessageBox.prompt</code>. Los parámetros son los mismos que los anteriores.</p>", 3);

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Opciones ");

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores Permitidos</th><th>Por defecto</th></tr></thead><tbody><tr><td>title</td><td>titulo del componente MessageBox</td><td>string</td><td>—</td><td>—</td></tr><tr><td>message</td><td>contenido del componente MessageBox</td><td>string</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>utilizado para que <code>message</code> sea tratado como una cadena HTML</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>tipo de mensaje , utilizado para mostrar el icono</td><td>string</td><td>success / info / warning / error</td><td>—</td></tr><tr><td>iconClass</td><td>clase personalizada para el icono, sobreescribe <code>type</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>nombre de la clase personalizada para el componente MessageBox</td><td>string</td><td>—</td><td>—</td></tr><tr><td>callback</td><td>MessageBox callback al cerrar si no desea utilizar Promise</td><td>function(action), donde la accion puede ser &#39;confirm&#39;, &#39;cancel&#39; o &#39;close&#39;, e <code>instance</code> es la instancia del componente MessageBox. Puedes acceder a los metodos y atributos de esa instancia</td><td>—</td><td>—</td></tr><tr><td>beforeClose</td><td>callback llamado antes de cerrar el componente MessageBox, y previene que el componente MessageBox se cierre</td><td>function(action, instance, done), donde <code>action</code> pueden ser &#39;confirm&#39;, &#39;cancel&#39; o &#39;close&#39;; <code>instance</code> es la instancia del componente MessageBox, Puedes acceder a los metodos y atributos de esa instancia; <code>done</code> es para cerrar la instancia</td><td>—</td><td>—</td></tr><tr><td>distinguishCancelAndClose</td><td>si se debe distinguir entre cancelar y cerrar</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lockScroll</td><td>utilizado para bloquear el desplazamiento del contenido del MessageBox prompts</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showCancelButton</td><td>utilizado para mostrar un botón cancelar</td><td>boolean</td><td>—</td><td>false (true cuando es llamado con confirm y prompt)</td></tr><tr><td>showConfirmButton</td><td>utilizado para mostrar un botón confirmar</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>cancelButtonText</td><td>contenido de texto del botón cancelar</td><td>string</td><td>—</td><td>Cancel</td></tr><tr><td>confirmButtonText</td><td>contenido de texto del botón confirmar</td><td>string</td><td>—</td><td>OK</td></tr><tr><td>cancelButtonClass</td><td>nombre de la clase personalizada del botón cancelar</td><td>string</td><td>—</td><td>—</td></tr><tr><td>confirmButtonClass</td><td>nombre de la clase personalizada del botón confirmar</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closeOnClickModal</td><td>utilizado para que que el componente MessageBox pueda ser cerrado al dar clic en la mascara</td><td>boolean</td><td>—</td><td>true (false cuando es llamado con alert)</td></tr><tr><td>closeOnPressEscape</td><td>utilizado para que que el componente MessageBox pueda ser cerrado al presionar la tecla ESC</td><td>boolean</td><td>—</td><td>true (false cuando es llamado con alert)</td></tr><tr><td>closeOnHashChange</td><td>utilizado para cerra el componente MessageBox cuando hash cambie</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showInput</td><td>utilizado para mostrar el componente input</td><td>boolean</td><td>—</td><td>false (true cuando es llamado con prompt)</td></tr><tr><td>inputPlaceholder</td><td>placeholder para el componente input</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputType</td><td>tipo del componente input</td><td>string</td><td>—</td><td>text</td></tr><tr><td>inputValue</td><td>valor inicial del componente input</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputPattern</td><td>regexp del componente input</td><td>regexp</td><td>—</td><td>—</td></tr><tr><td>inputValidator</td><td>función de validación del componente input. Debe regresar un valor de tipo boolean o string. Si regresa un valor tipo string, sera asignado a inputErrorMessage</td><td>function</td><td>—</td><td>—</td></tr><tr><td>inputErrorMessage</td><td>mensaje de error cuando la validación falla</td><td>string</td><td>—</td><td>Illegal input</td></tr><tr><td>center</td><td>utilizado para alinear el contenido al centro</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>roundButton</td><td>utilizado para redondear el botón</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>buttonSize</td><td>custom size of confirm and cancel buttons</td><td>string</td><td>mini / small / medium / large</td><td>small</td></tr></tbody></table>", 1);

function message_boxvue_type_template_id_cc5baf88_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", message_boxvue_type_template_id_cc5baf88_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
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
    id: "personalizacion",
    content: "Personalización",
    href: "#personalizacion",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#personalizacion"
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
    id: "utiliza-cadenas-html",
    content: "Utiliza cadenas HTML",
    href: "#utiliza-cadenas-html",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#utiliza-cadenas-html"
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
    id: "distinguir-entre-cancelar-y-cerrar",
    content: "Distinguir entre cancelar y cerrar",
    href: "#distinguir-entre-cancelar-y-cerrar",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#distinguir-entre-cancelar-y-cerrar"
    })]),
    _: 1
  }), _hoisted_54, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_56]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_55]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "contenido-centrado",
    content: "Contenido centrado",
    href: "#contenido-centrado",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_57, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#contenido-centrado"
    })]),
    _: 1
  }), _hoisted_58, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_60]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_59]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "metodos-globales",
    content: "Métodos Globales",
    href: "#metodos-globales",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_61, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#metodos-globales"
    })]),
    _: 1
  }), _hoisted_62, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "importacion-local",
    content: "Importación local",
    href: "#importacion-local",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_64, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#importacion-local"
    })]),
    _: 1
  }), _hoisted_65, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "opciones",
    content: "Opciones",
    href: "#opciones",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_68, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#opciones"
    })]),
    _: 1
  }), _hoisted_69, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/message-box.md?vue&type=template&id=cc5baf88

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/message-box.md?vue&type=script&lang=ts

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open the Message Box");

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
            this.$alert('This is a message', 'Title', {
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open the Message Box");

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
            this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: 'Delete completed'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: 'Delete canceled'
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

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
            this.$prompt('Please input your e-mail', 'Tip', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
              inputErrorMessage: 'Invalid Email'
            }).then(({
              value
            }) => {
              this.$message({
                type: 'success',
                message: 'Your email is:' + value
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: 'Input canceled'
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

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
              message: h('p', null, [h('span', null, 'Message can be '), h('i', {
                style: 'color: teal'
              }, 'VNode')]),
              showCancelButton: true,
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              beforeClose: (action, instance, done) => {
                if (action === 'confirm') {
                  instance.confirmButtonLoading = true;
                  instance.confirmButtonText = 'Loading...';
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
                message: 'action: ' + action
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

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
            this.$alert('<strong>This is <i>HTML</i> string</strong>', 'HTML String', {
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

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
            this.$confirm('You have unsaved changes, save and proceed?', 'Confirm', {
              distinguishCancelAndClose: true,
              confirmButtonText: 'Save',
              cancelButtonText: 'Discard Changes'
            }).then(() => {
              this.$message({
                type: 'info',
                message: 'Changes saved. Proceeding to a new route.'
              });
            }).catch(action => {
              this.$message({
                type: 'info',
                message: action === 'cancel' ? 'Changes discarded. Proceeding to a new route.' : 'Stay in the current route'
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Message Box");

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
            this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              type: 'warning',
              center: true
            }).then(() => {
              this.$message({
                type: 'success',
                message: 'Delete completed'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: 'Delete canceled'
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
// CONCATENATED MODULE: ./website/docs/es/message-box.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/message-box.md



message_boxvue_type_script_lang_ts.render = message_boxvue_type_template_id_cc5baf88_render

/* harmony default export */ var message_box = __webpack_exports__["default"] = (message_boxvue_type_script_lang_ts);

/***/ })

}]);