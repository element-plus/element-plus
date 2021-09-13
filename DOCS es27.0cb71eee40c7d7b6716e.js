(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/form.md?vue&type=template&id=f7af78f4

const formvue_type_template_id_f7af78f4_hoisted_1 = {
  class: "content element-doc"
};

const formvue_type_template_id_f7af78f4_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form ");

const formvue_type_template_id_f7af78f4_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form consiste en "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "input"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "radio"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", etcétera. Con el formulario, usted puede recopilar, verificar y enviar datos.")], -1);

const formvue_type_template_id_f7af78f4_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "The component has been upgraded with a flex layout to replace the old float layout.")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form básico ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Incluye todo tipo de entradas, tales como "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "input"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "radio"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("En cada componente "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "form"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", necesita un campo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "form-item"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para que sea el contenedor del ítem.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form ref=\"form\" :model=\"form\" label-width=\"120px\">\n  <el-form-item label=\"Activity name\">\n    <el-input v-model=\"form.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\">\n    <el-select v-model=\"form.region\" placeholder=\"please select your zone\">\n      <el-option label=\"Zone one\" value=\"shanghai\"></el-option>\n      <el-option label=\"Zone two\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item label=\"Activity time\">\n    <el-col :span=\"11\">\n      <el-date-picker\n        type=\"date\"\n        placeholder=\"Pick a date\"\n        v-model=\"form.date1\"\n        style=\"width: 100%;\"\n      ></el-date-picker>\n    </el-col>\n    <el-col class=\"line\" :span=\"2\">-</el-col>\n    <el-col :span=\"11\">\n      <el-time-picker\n        placeholder=\"Pick a time\"\n        v-model=\"form.date2\"\n        style=\"width: 100%;\"\n      ></el-time-picker>\n    </el-col>\n  </el-form-item>\n  <el-form-item label=\"Instant delivery\">\n    <el-switch v-model=\"form.delivery\"></el-switch>\n  </el-form-item>\n  <el-form-item label=\"Activity type\">\n    <el-checkbox-group v-model=\"form.type\">\n      <el-checkbox label=\"Online activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Promotion activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Offline activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Simple brand exposure\" name=\"type\"></el-checkbox>\n    </el-checkbox-group>\n  </el-form-item>\n  <el-form-item label=\"Resources\">\n    <el-radio-group v-model=\"form.resource\">\n      <el-radio label=\"Sponsor\"></el-radio>\n      <el-radio label=\"Venue\"></el-radio>\n    </el-radio-group>\n  </el-form-item>\n  <el-form-item label=\"Activity form\">\n    <el-input type=\"textarea\" v-model=\"form.desc\"></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"onSubmit\">Create</el-button>\n    <el-button>Cancel</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n      }\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!')\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_9 = {
  class: "tip"
};

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("W3C");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" reglamenta que");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("blockquote", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("i", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cuando sólo hay un campo de entrada de texto de una sola línea en un formulario, el agente usuario debe aceptar "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("b", null, "Enter"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en ese campo como una solicitud para enviar el formulario.")])])], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Para prevenir este comportamiento, puede agregar "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "@submit.prevent"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" on "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "<el-form>"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Formulario inline ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Cuando el espacio vertical es limitado y la forma es relativamente simple, puede ponerlo en una unica línea.", -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Establezca el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "inline"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" como "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y el formulario sera inline.")])], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form :inline=\"true\" :model=\"formInline\" class=\"demo-form-inline\">\n  <el-form-item label=\"Approved by\">\n    <el-input v-model=\"formInline.user\" placeholder=\"Approved by\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\">\n    <el-select v-model=\"formInline.region\" placeholder=\"Activity zone\">\n      <el-option label=\"Zone one\" value=\"shanghai\"></el-option>\n      <el-option label=\"Zone two\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"onSubmit\">Query</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        formInline: {\n          user: '',\n          region: '',\n        },\n      }\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!')\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Alineamiento ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Dependiendo de su diseño, hay varias maneras diferentes de alinear el elemento de la etiqueta.", -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("El atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label-position"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" decide cómo se alinean las etiquetas, puede estar "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" o "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Cuando se establece en "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", las etiquetas se colocarán en la parte superior del campo de formulario.")])], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-radio-group v-model=\"labelPosition\" size=\"small\">\n  <el-radio-button label=\"left\">Left</el-radio-button>\n  <el-radio-button label=\"right\">Right</el-radio-button>\n  <el-radio-button label=\"top\">Top</el-radio-button>\n</el-radio-group>\n<div style=\"margin: 20px;\"></div>\n<el-form\n  :label-position=\"labelPosition\"\n  label-width=\"100px\"\n  :model=\"formLabelAlign\"\n>\n  <el-form-item label=\"Name\">\n    <el-input v-model=\"formLabelAlign.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\">\n    <el-input v-model=\"formLabelAlign.region\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity form\">\n    <el-input v-model=\"formLabelAlign.type\"></el-input>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        labelPosition: 'right',\n        formLabelAlign: {\n          name: '',\n          region: '',\n          type: '',\n        },\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Validación ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("El componente "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "form"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" le permite verificar sus datos, ayudándole a encontrar y corregir errores.")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Sólo tiene que añadir el atributo ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "rules", -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en el componente ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Form", -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", pasar las reglas de validación y establecer el atributo ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "prop", -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Form-Item", -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" como una clave específica que necesita ser validada. Ver más información en ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("async-validator");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form\n  :model=\"ruleForm\"\n  :rules=\"rules\"\n  ref=\"ruleForm\"\n  label-width=\"120px\"\n  class=\"demo-ruleForm\"\n>\n  <el-form-item label=\"Activity name\" prop=\"name\">\n    <el-input v-model=\"ruleForm.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\" prop=\"region\">\n    <el-select v-model=\"ruleForm.region\" placeholder=\"Activity zone\">\n      <el-option label=\"Zone one\" value=\"shanghai\"></el-option>\n      <el-option label=\"Zone two\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item label=\"Activity time\" required>\n    <el-col :span=\"11\">\n      <el-form-item prop=\"date1\">\n        <el-date-picker\n          type=\"date\"\n          placeholder=\"Pick a date\"\n          v-model=\"ruleForm.date1\"\n          style=\"width: 100%;\"\n        ></el-date-picker>\n      </el-form-item>\n    </el-col>\n    <el-col class=\"line\" :span=\"2\">-</el-col>\n    <el-col :span=\"11\">\n      <el-form-item prop=\"date2\">\n        <el-time-picker\n          placeholder=\"Pick a time\"\n          v-model=\"ruleForm.date2\"\n          style=\"width: 100%;\"\n        ></el-time-picker>\n      </el-form-item>\n    </el-col>\n  </el-form-item>\n  <el-form-item label=\"Instant delivery\" prop=\"delivery\">\n    <el-switch v-model=\"ruleForm.delivery\"></el-switch>\n  </el-form-item>\n  <el-form-item label=\"Activity type\" prop=\"type\">\n    <el-checkbox-group v-model=\"ruleForm.type\">\n      <el-checkbox label=\"Online activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Promotion activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Offline activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Simple brand exposure\" name=\"type\"></el-checkbox>\n    </el-checkbox-group>\n  </el-form-item>\n  <el-form-item label=\"Resources\" prop=\"resource\">\n    <el-radio-group v-model=\"ruleForm.resource\">\n      <el-radio label=\"Sponsorship\"></el-radio>\n      <el-radio label=\"Venue\"></el-radio>\n    </el-radio-group>\n  </el-form-item>\n  <el-form-item label=\"Activity form\" prop=\"desc\">\n    <el-input type=\"textarea\" v-model=\"ruleForm.desc\"></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('ruleForm')\">Create</el-button>\n    <el-button @click=\"resetForm('ruleForm')\">Reset</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        ruleForm: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n        rules: {\n          name: [\n            {\n              required: true,\n              message: 'Please input Activity name',\n              trigger: 'blur',\n            },\n            {\n              min: 3,\n              max: 5,\n              message: 'Length should be 3 to 5',\n              trigger: 'blur',\n            },\n          ],\n          region: [\n            {\n              required: true,\n              message: 'Please select Activity zone',\n              trigger: 'change',\n            },\n          ],\n          date1: [\n            {\n              type: 'date',\n              required: true,\n              message: 'Please pick a date',\n              trigger: 'change',\n            },\n          ],\n          date2: [\n            {\n              type: 'date',\n              required: true,\n              message: 'Please pick a time',\n              trigger: 'change',\n            },\n          ],\n          type: [\n            {\n              type: 'array',\n              required: true,\n              message: 'Please select at least one activity type',\n              trigger: 'change',\n            },\n          ],\n          resource: [\n            {\n              required: true,\n              message: 'Please select activity resource',\n              trigger: 'change',\n            },\n          ],\n          desc: [\n            {\n              required: true,\n              message: 'Please input activity form',\n              trigger: 'blur',\n            },\n          ],\n        },\n      }\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!')\n          } else {\n            console.log('error submit!!')\n            return false\n          }\n        })\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields()\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Reglas personalizadas de validación ");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Este ejemplo muestra cómo personalizar sus propias reglas de validación para finalizar una verificación de contraseña de dos pasos.", -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Aquí utilizamos el "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "status-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para reflejar el resultado de la validación como un icono.")])], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form\n  :model=\"ruleForm\"\n  status-icon\n  :rules=\"rules\"\n  ref=\"ruleForm\"\n  label-width=\"120px\"\n  class=\"demo-ruleForm\"\n>\n  <el-form-item label=\"Password\" prop=\"pass\">\n    <el-input\n      type=\"password\"\n      v-model=\"ruleForm.pass\"\n      autocomplete=\"off\"\n    ></el-input>\n  </el-form-item>\n  <el-form-item label=\"Confirm\" prop=\"checkPass\">\n    <el-input\n      type=\"password\"\n      v-model=\"ruleForm.checkPass\"\n      autocomplete=\"off\"\n    ></el-input>\n  </el-form-item>\n  <el-form-item label=\"Age\" prop=\"age\">\n    <el-input v-model.number=\"ruleForm.age\"></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('ruleForm')\">Submit</el-button>\n    <el-button @click=\"resetForm('ruleForm')\">Reset</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      var checkAge = (rule, value, callback) => {\n        if (!value) {\n          return callback(new Error('Please input the age'))\n        }\n        setTimeout(() => {\n          if (!Number.isInteger(value)) {\n            callback(new Error('Please input digits'))\n          } else {\n            if (value < 18) {\n              callback(new Error('Age must be greater than 18'))\n            } else {\n              callback()\n            }\n          }\n        }, 1000)\n      }\n      var validatePass = (rule, value, callback) => {\n        if (value === '') {\n          callback(new Error('Please input the password'))\n        } else {\n          if (this.ruleForm.checkPass !== '') {\n            this.$refs.ruleForm.validateField('checkPass')\n          }\n          callback()\n        }\n      }\n      var validatePass2 = (rule, value, callback) => {\n        if (value === '') {\n          callback(new Error('Please input the password again'))\n        } else if (value !== this.ruleForm.pass) {\n          callback(new Error(\"Two inputs don't match!\"))\n        } else {\n          callback()\n        }\n      }\n      return {\n        ruleForm: {\n          pass: '',\n          checkPass: '',\n          age: '',\n        },\n        rules: {\n          pass: [{ validator: validatePass, trigger: 'blur' }],\n          checkPass: [{ validator: validatePass2, trigger: 'blur' }],\n          age: [{ validator: checkAge, trigger: 'blur' }],\n        },\n      }\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!')\n          } else {\n            console.log('error submit!!')\n            return false\n          }\n        })\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields()\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_40 = {
  class: "tip"
};

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Se debe llamar a la función de validación de llamada de retorno personalizada. Ver uso más avanzado en ");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("async-validator");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Eliminar o agregar validaciones dinamicamente ");

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Además de pasar todas las reglas de validación al mismo tiempo en el componente "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "form"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", también puede pasar las reglas de validación o borrar reglas en un único campo de formulario de forma dinámica.")])], -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form\n  :model=\"dynamicValidateForm\"\n  ref=\"dynamicValidateForm\"\n  label-width=\"120px\"\n  class=\"demo-dynamic\"\n>\n  <el-form-item\n    prop=\"email\"\n    label=\"Email\"\n    :rules=\"[\n      { required: true, message: 'Please input email address', trigger: 'blur' },\n      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }\n    ]\"\n  >\n    <el-input v-model=\"dynamicValidateForm.email\"></el-input>\n  </el-form-item>\n  <el-form-item\n    v-for=\"(domain, index) in dynamicValidateForm.domains\"\n    :label=\"'Domain' + index\"\n    :key=\"domain.key\"\n    :prop=\"'domains.' + index + '.value'\"\n    :rules=\"{\n      required: true, message: 'domain can not be null', trigger: 'blur'\n    }\"\n  >\n    <el-input v-model=\"domain.value\"></el-input\n    ><el-button @click.prevent=\"removeDomain(domain)\">Delete</el-button>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('dynamicValidateForm')\"\n      >Submit</el-button\n    >\n    <el-button @click=\"addDomain\">New domain</el-button>\n    <el-button @click=\"resetForm('dynamicValidateForm')\">Reset</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        dynamicValidateForm: {\n          domains: [\n            {\n              key: 1,\n              value: '',\n            },\n          ],\n          email: '',\n        },\n      }\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!')\n          } else {\n            console.log('error submit!!')\n            return false\n          }\n        })\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields()\n      },\n      removeDomain(item) {\n        var index = this.dynamicValidateForm.domains.indexOf(item)\n        if (index !== -1) {\n          this.dynamicValidateForm.domains.splice(index, 1)\n        }\n      },\n      addDomain() {\n        this.dynamicValidateForm.domains.push({\n          key: Date.now(),\n          value: '',\n        })\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Validación numerica ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("La validación numérica necesita un modificador "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, ".number"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" añadido en el enlace "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" de entrada, sirve para transformar el valor de la cadena al número proporcionado por Vuejs.")])], -1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form\n  :model=\"numberValidateForm\"\n  ref=\"numberValidateForm\"\n  label-width=\"100px\"\n  class=\"demo-ruleForm\"\n>\n  <el-form-item\n    label=\"age\"\n    prop=\"age\"\n    :rules=\"[\n      { required: true, message: 'age is required'},\n      { type: 'number', message: 'age must be a number'}\n    ]\"\n  >\n    <el-input\n      type=\"age\"\n      v-model.number=\"numberValidateForm.age\"\n      autocomplete=\"off\"\n    ></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('numberValidateForm')\"\n      >Submit</el-button\n    >\n    <el-button @click=\"resetForm('numberValidateForm')\">Reset</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        numberValidateForm: {\n          age: '',\n        },\n      }\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!')\n          } else {\n            console.log('error submit!!')\n            return false\n          }\n        })\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields()\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cuando un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-form-item"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" está anidado en otro "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-form-item"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", su ancho de etiqueta será 0. Si es necesario, puede establecer el ancho de etiqueta en ese "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-form-item"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tamaño del control ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Todos los componentes de un formulario heredan su atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". De manera similar, FormItem también tiene un atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Aún así, puede ajustar el "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" de cada componente si no desea que herede su tamaño de From o FormItem.")])], -1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form ref=\"form\" :model=\"sizeForm\" label-width=\"120px\" size=\"mini\">\n  <el-form-item label=\"Activity name\">\n    <el-input v-model=\"sizeForm.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\">\n    <el-select v-model=\"sizeForm.region\" placeholder=\"please select your zone\">\n      <el-option label=\"Zone one\" value=\"shanghai\"></el-option>\n      <el-option label=\"Zone two\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item label=\"Activity time\">\n    <el-col :span=\"11\">\n      <el-date-picker\n        type=\"date\"\n        placeholder=\"Pick a date\"\n        v-model=\"sizeForm.date1\"\n        style=\"width: 100%;\"\n      ></el-date-picker>\n    </el-col>\n    <el-col class=\"line\" :span=\"2\">-</el-col>\n    <el-col :span=\"11\">\n      <el-time-picker\n        placeholder=\"Pick a time\"\n        v-model=\"sizeForm.date2\"\n        style=\"width: 100%;\"\n      ></el-time-picker>\n    </el-col>\n  </el-form-item>\n  <el-form-item label=\"Activity type\">\n    <el-checkbox-group v-model=\"sizeForm.type\">\n      <el-checkbox-button\n        label=\"Online activities\"\n        name=\"type\"\n      ></el-checkbox-button>\n      <el-checkbox-button\n        label=\"Promotion activities\"\n        name=\"type\"\n      ></el-checkbox-button>\n    </el-checkbox-group>\n  </el-form-item>\n  <el-form-item label=\"Resources\">\n    <el-radio-group v-model=\"sizeForm.resource\" size=\"medium\">\n      <el-radio border label=\"Sponsor\"></el-radio>\n      <el-radio border label=\"Venue\"></el-radio>\n    </el-radio-group>\n  </el-form-item>\n  <el-form-item size=\"large\">\n    <el-button type=\"primary\" @click=\"onSubmit\">Create</el-button>\n    <el-button>Cancel</el-button>\n  </el-form-item>\n</el-form>\n\n<script>\n  export default {\n    data() {\n      return {\n        sizeForm: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n      }\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!')\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form Atributos ");

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>model</td><td>Datos del componente</td><td>object</td><td>—</td><td>—</td></tr><tr><td>rules</td><td>Reglas de validación</td><td>object</td><td>—</td><td>—</td></tr><tr><td>inline</td><td>Si el form es inline</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>label-position</td><td>Posición de la etiqueta</td><td>string</td><td>left / right / top</td><td>right</td></tr><tr><td>label-width</td><td>anchura de la etiqueta, por ejemplo, &quot;50px&quot;. Todos sus elementos de formulario hijo directo heredarán este valor. El valor <code>auto</code> está soportado.</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>label-suffix</td><td>sufijo de la etiqueta</td><td>string</td><td>—</td><td>—</td></tr><tr><td>hide-required-asterisk</td><td>si los campos obligatorios deben tener un asterisco rojo (estrella) al lado de sus etiquetas</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-message</td><td>si mostrar o no el mensaje de error</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>inline-message</td><td>si desea visualizar el mensaje de error inline con la posición del form item</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>status-icon</td><td>si desea visualizar un icono que indique el resultado de la validación</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>validate-on-rule-change</td><td>si se dispara la validación cuando el prop <code>rules</code> cambia</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>el tamaño de los componentes en este form</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>disabled</td><td>si se desactivan todos los componentes del formulario. Si esta en <code>true</code> no puede ser cambiado por el prop <code>disabled</code> individual de los componentes.</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form Metodos ");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Metodo</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>validate</td><td>el método para validar todo el formulario. Recibe una llamada como parámetro. Después de la validación, la llamada de retorno se ejecutará con dos parámetros: un booleano que indica si la validación ha pasado, y un objeto que contiene todos los campos que fallaron en la validación. Devuelve una promesa si se omite el return</td><td>Function(callback: Function(boolean, object))</td></tr><tr><td>validateField</td><td>validar uno o varios elementos de formulario</td><td>Function(props: string | array, callback: Function(errorMessage: string))</td></tr><tr><td>resetFields</td><td>restablece todos los campos y elimina el resultado de validación</td><td>—</td></tr><tr><td>scrollToField</td><td>Scroll to the specified form field</td><td>Function(prop: string)</td></tr><tr><td>clearValidate</td><td>borra el mensaje de validación para determinados campos. El parámetro es un prop name o un array de props names de los items del formulario cuyos mensajes de validación se eliminarán. Si se omiten, se borrarán todos los mensajes de validación de los campos.</td><td>Function(props: string | array)</td></tr></tbody></table>", 1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form Events ");

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nombre</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>validate</td><td>se dispara después de validar un ítem del formulario</td><td>la propiedad (<code>prop name</code>) nombre del ítem del form que se esta validando, si la validación paso o no, y el mensaje de error si existe.</td></tr></tbody></table>", 1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form-Item Atributos ");

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Atributo"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Descripción"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Tipo"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Valores aceptados"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Por defecto")])], -1);

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "prop"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("un clave del modelo. En el uso del método "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "validate"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "resetFields"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", el atributo es obligatorio.")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Clave del modelo que se ha pasado a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "form")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td")], -1);

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "etiqueta"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "label-width"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ancho de la etiqueta, Ejemplo: '50px'. El valor "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "auto"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" esta soportado")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string / number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "required"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "si el campo es obligatorio o no, estará determinado por las reglas de validación si se omite."), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "rules", -1);

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("reglas de validación del form, ver más información en ");

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("async-validator");

const _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "object / array", -1);

const _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "error"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "mensaje de error de campo, establezca su valor y el campo validará el error y mostrará este mensaje inmediatamente."), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "show-message"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "si mostrar o no el mensaje de error"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true")], -1);

const _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "inline-message"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "mensaje de validación estilo inline"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_76 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Tamaño de los componentes en este form item"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "medium / small / mini"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_77 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Rules ");

const _hoisted_78 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>trigger</td><td>how the validator is triggered</td><td>string</td><td>blur / change</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_79 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form-Item Slot ");

const _hoisted_80 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nombre</th><th>Descripción</th></tr></thead><tbody><tr><td>—</td><td>contenido del Form Item</td></tr><tr><td>label</td><td>Custom content to display on label. The scope parameter is { label }</td></tr><tr><td>error</td><td>Contenido personalizado para mostrar el mensaje de validación. El parámetro del scope es { error }</td></tr></tbody></table>", 1);

const _hoisted_81 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form-Item Metodo ");

const _hoisted_82 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Metodo</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>resetField</td><td>restablecer campo actual y eliminar resultado de validación</td><td>—</td></tr><tr><td>clearValidate</td><td>elimina el estado de la validación de un campo</td><td>—</td></tr></tbody></table>", 1);

function formvue_type_template_id_f7af78f4_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  const _component_element_demo7 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo7");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", formvue_type_template_id_f7af78f4_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form",
    content: "Form",
    href: "#form",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [formvue_type_template_id_f7af78f4_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form"
    })]),
    _: 1
  }), formvue_type_template_id_f7af78f4_hoisted_3, formvue_type_template_id_f7af78f4_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-basico",
    content: "Form básico",
    href: "#form-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-basico"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_9, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), _hoisted_11]), _hoisted_12, _hoisted_13]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "formulario-inline",
    content: "Formulario inline",
    href: "#formulario-inline",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#formulario-inline"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "alineamiento",
    content: "Alineamiento",
    href: "#alineamiento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#alineamiento"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "validacion",
    content: "Validación",
    href: "#validacion",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#validacion"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createElementVNode"])("div", null, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_24, _hoisted_25, _hoisted_26, _hoisted_27, _hoisted_28, _hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      href: "https://github.com/yiminghe/async-validator"
    }, {
      default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33]),
      _: 1
    }), _hoisted_34])])]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "reglas-personalizadas-de-validacion",
    content: "Reglas personalizadas de validación",
    href: "#reglas-personalizadas-de-validacion",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reglas-personalizadas-de-validacion"
    })]),
    _: 1
  }), _hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_40, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_41, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/yiminghe/async-validator"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_42]),
    _: 1
  }), _hoisted_43])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "eliminar-o-agregar-validaciones-dinamicamente",
    content: "Eliminar o agregar validaciones dinamicamente",
    href: "#eliminar-o-agregar-validaciones-dinamicamente",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#eliminar-o-agregar-validaciones-dinamicamente"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_46]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_45]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "validacion-numerica",
    content: "Validación numerica",
    href: "#validacion-numerica",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#validacion-numerica"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_49]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_48]),
    _: 1
  }), _hoisted_50, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tamano-del-control",
    content: "Tamaño del control",
    href: "#tamano-del-control",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_51, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tamano-del-control"
    })]),
    _: 1
  }), _hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo7)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_54]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-atributos",
    content: "Form Atributos",
    href: "#form-atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_55, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-atributos"
    })]),
    _: 1
  }), _hoisted_56, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-metodos",
    content: "Form Metodos",
    href: "#form-metodos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_57, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-metodos"
    })]),
    _: 1
  }), _hoisted_58, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-events",
    content: "Form Events",
    href: "#form-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_59, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-events"
    })]),
    _: 1
  }), _hoisted_60, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-item-atributos",
    content: "Form-Item Atributos",
    href: "#form-item-atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_61, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-item-atributos"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("table", null, [_hoisted_62, Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [_hoisted_63, _hoisted_64, _hoisted_65, _hoisted_66, Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_67, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_68, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/yiminghe/async-validator"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_69]),
    _: 1
  })]), _hoisted_70, _hoisted_71, _hoisted_72]), _hoisted_73, _hoisted_74, _hoisted_75, _hoisted_76])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "rules",
    content: "Rules",
    href: "#rules",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_77, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#rules"
    })]),
    _: 1
  }), _hoisted_78, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-item-slot",
    content: "Form-Item Slot",
    href: "#form-item-slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_79, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-item-slot"
    })]),
    _: 1
  }), _hoisted_80, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-item-metodo",
    content: "Form-Item Metodo",
    href: "#form-item-metodo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_81, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-item-metodo"
    })]),
    _: 1
  }), _hoisted_82, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/form.md?vue&type=template&id=f7af78f4

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/form.md?vue&type=script&lang=ts

/* harmony default export */ var formvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("-");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Create");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Cancel");

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        const _component_el_date_picker = _resolveComponent("el-date-picker");

        const _component_el_col = _resolveComponent("el-col");

        const _component_el_time_picker = _resolveComponent("el-time-picker");

        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_checkbox = _resolveComponent("el-checkbox");

        const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        const _component_el_radio = _resolveComponent("el-radio");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_form, {
          ref: "form",
          model: _ctx.form,
          "label-width": "120px"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "Activity name"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.form.name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.form.name = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity zone"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_select, {
              modelValue: _ctx.form.region,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.form.region = $event),
              placeholder: "please select your zone"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_option, {
                label: "Zone one",
                value: "shanghai"
              }), _createVNode(_component_el_option, {
                label: "Zone two",
                value: "beijing"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity time"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_col, {
              span: 11
            }, {
              default: _withCtx(() => [_createVNode(_component_el_date_picker, {
                type: "date",
                placeholder: "Pick a date",
                modelValue: _ctx.form.date1,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.form.date1 = $event),
                style: {
                  "width": "100%"
                }
              }, null, 8, ["modelValue"])]),
              _: 1
            }), _createVNode(_component_el_col, {
              class: "line",
              span: 2
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 11
            }, {
              default: _withCtx(() => [_createVNode(_component_el_time_picker, {
                placeholder: "Pick a time",
                modelValue: _ctx.form.date2,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.form.date2 = $event),
                style: {
                  "width": "100%"
                }
              }, null, 8, ["modelValue"])]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Instant delivery"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_switch, {
              modelValue: _ctx.form.delivery,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.form.delivery = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity type"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_checkbox_group, {
              modelValue: _ctx.form.type,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.form.type = $event)
            }, {
              default: _withCtx(() => [_createVNode(_component_el_checkbox, {
                label: "Online activities",
                name: "type"
              }), _createVNode(_component_el_checkbox, {
                label: "Promotion activities",
                name: "type"
              }), _createVNode(_component_el_checkbox, {
                label: "Offline activities",
                name: "type"
              }), _createVNode(_component_el_checkbox, {
                label: "Simple brand exposure",
                name: "type"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Resources"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_radio_group, {
              modelValue: _ctx.form.resource,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.form.resource = $event)
            }, {
              default: _withCtx(() => [_createVNode(_component_el_radio, {
                label: "Sponsor"
              }), _createVNode(_component_el_radio, {
                label: "Venue"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity form"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              type: "textarea",
              modelValue: _ctx.form.desc,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.form.desc = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "primary",
              onClick: _ctx.onSubmit
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, null, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["model"])]);
      }

      const democomponentExport = {
        data() {
          return {
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            }
          };
        },

        methods: {
          onSubmit() {
            console.log('submit!');
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Query");

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_form, {
          inline: true,
          model: _ctx.formInline,
          class: "demo-form-inline"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "Approved by"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.formInline.user,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.formInline.user = $event),
              placeholder: "Approved by"
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity zone"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_select, {
              modelValue: _ctx.formInline.region,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.formInline.region = $event),
              placeholder: "Activity zone"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_option, {
                label: "Zone one",
                value: "shanghai"
              }), _createVNode(_component_el_option, {
                label: "Zone two",
                value: "beijing"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "primary",
              onClick: _ctx.onSubmit
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["model"])]);
      }

      const democomponentExport = {
        data() {
          return {
            formInline: {
              user: '',
              region: ''
            }
          };
        },

        methods: {
          onSubmit() {
            console.log('submit!');
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
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Left");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Right");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Top");

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("div", {
        style: {
          "margin": "20px"
        }
      }, null, -1);

      function render(_ctx, _cache) {
        const _component_el_radio_button = _resolveComponent("el-radio-button");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.labelPosition,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.labelPosition = $event),
          size: "small"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_radio_button, {
            label: "left"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_radio_button, {
            label: "right"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_radio_button, {
            label: "top"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"]), _hoisted_4, _createVNode(_component_el_form, {
          "label-position": _ctx.labelPosition,
          "label-width": "100px",
          model: _ctx.formLabelAlign
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "Name"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.formLabelAlign.name,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.formLabelAlign.name = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity zone"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.formLabelAlign.region,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.formLabelAlign.region = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity form"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.formLabelAlign.type,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.formLabelAlign.type = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["label-position", "model"])]);
      }

      const democomponentExport = {
        data() {
          return {
            labelPosition: 'right',
            formLabelAlign: {
              name: '',
              region: '',
              type: ''
            }
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("-");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Create");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Reset");

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        const _component_el_date_picker = _resolveComponent("el-date-picker");

        const _component_el_col = _resolveComponent("el-col");

        const _component_el_time_picker = _resolveComponent("el-time-picker");

        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_checkbox = _resolveComponent("el-checkbox");

        const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        const _component_el_radio = _resolveComponent("el-radio");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_form, {
          model: _ctx.ruleForm,
          rules: _ctx.rules,
          ref: "ruleForm",
          "label-width": "120px",
          class: "demo-ruleForm"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "Activity name",
            prop: "name"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.ruleForm.name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.ruleForm.name = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity zone",
            prop: "region"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_select, {
              modelValue: _ctx.ruleForm.region,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.ruleForm.region = $event),
              placeholder: "Activity zone"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_option, {
                label: "Zone one",
                value: "shanghai"
              }), _createVNode(_component_el_option, {
                label: "Zone two",
                value: "beijing"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity time",
            required: ""
          }, {
            default: _withCtx(() => [_createVNode(_component_el_col, {
              span: 11
            }, {
              default: _withCtx(() => [_createVNode(_component_el_form_item, {
                prop: "date1"
              }, {
                default: _withCtx(() => [_createVNode(_component_el_date_picker, {
                  type: "date",
                  placeholder: "Pick a date",
                  modelValue: _ctx.ruleForm.date1,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.ruleForm.date1 = $event),
                  style: {
                    "width": "100%"
                  }
                }, null, 8, ["modelValue"])]),
                _: 1
              })]),
              _: 1
            }), _createVNode(_component_el_col, {
              class: "line",
              span: 2
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 11
            }, {
              default: _withCtx(() => [_createVNode(_component_el_form_item, {
                prop: "date2"
              }, {
                default: _withCtx(() => [_createVNode(_component_el_time_picker, {
                  placeholder: "Pick a time",
                  modelValue: _ctx.ruleForm.date2,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.ruleForm.date2 = $event),
                  style: {
                    "width": "100%"
                  }
                }, null, 8, ["modelValue"])]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Instant delivery",
            prop: "delivery"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_switch, {
              modelValue: _ctx.ruleForm.delivery,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.ruleForm.delivery = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity type",
            prop: "type"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_checkbox_group, {
              modelValue: _ctx.ruleForm.type,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.ruleForm.type = $event)
            }, {
              default: _withCtx(() => [_createVNode(_component_el_checkbox, {
                label: "Online activities",
                name: "type"
              }), _createVNode(_component_el_checkbox, {
                label: "Promotion activities",
                name: "type"
              }), _createVNode(_component_el_checkbox, {
                label: "Offline activities",
                name: "type"
              }), _createVNode(_component_el_checkbox, {
                label: "Simple brand exposure",
                name: "type"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Resources",
            prop: "resource"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_radio_group, {
              modelValue: _ctx.ruleForm.resource,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.ruleForm.resource = $event)
            }, {
              default: _withCtx(() => [_createVNode(_component_el_radio, {
                label: "Sponsorship"
              }), _createVNode(_component_el_radio, {
                label: "Venue"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity form",
            prop: "desc"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              type: "textarea",
              modelValue: _ctx.ruleForm.desc,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.ruleForm.desc = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[8] || (_cache[8] = $event => _ctx.submitForm('ruleForm'))
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }), _createVNode(_component_el_button, {
              onClick: _cache[9] || (_cache[9] = $event => _ctx.resetForm('ruleForm'))
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["model", "rules"])]);
      }

      const democomponentExport = {
        data() {
          return {
            ruleForm: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            rules: {
              name: [{
                required: true,
                message: 'Please input Activity name',
                trigger: 'blur'
              }, {
                min: 3,
                max: 5,
                message: 'Length should be 3 to 5',
                trigger: 'blur'
              }],
              region: [{
                required: true,
                message: 'Please select Activity zone',
                trigger: 'change'
              }],
              date1: [{
                type: 'date',
                required: true,
                message: 'Please pick a date',
                trigger: 'change'
              }],
              date2: [{
                type: 'date',
                required: true,
                message: 'Please pick a time',
                trigger: 'change'
              }],
              type: [{
                type: 'array',
                required: true,
                message: 'Please select at least one activity type',
                trigger: 'change'
              }],
              resource: [{
                required: true,
                message: 'Please select activity resource',
                trigger: 'change'
              }],
              desc: [{
                required: true,
                message: 'Please input activity form',
                trigger: 'blur'
              }]
            }
          };
        },

        methods: {
          submitForm(formName) {
            this.$refs[formName].validate(valid => {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },

          resetForm(formName) {
            this.$refs[formName].resetFields();
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Submit");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Reset");

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_form, {
          model: _ctx.ruleForm,
          "status-icon": "",
          rules: _ctx.rules,
          ref: "ruleForm",
          "label-width": "120px",
          class: "demo-ruleForm"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "Password",
            prop: "pass"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              type: "password",
              modelValue: _ctx.ruleForm.pass,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.ruleForm.pass = $event),
              autocomplete: "off"
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Confirm",
            prop: "checkPass"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              type: "password",
              modelValue: _ctx.ruleForm.checkPass,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.ruleForm.checkPass = $event),
              autocomplete: "off"
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Age",
            prop: "age"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.ruleForm.age,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.ruleForm.age = $event),
              modelModifiers: {
                number: true
              }
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[3] || (_cache[3] = $event => _ctx.submitForm('ruleForm'))
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }), _createVNode(_component_el_button, {
              onClick: _cache[4] || (_cache[4] = $event => _ctx.resetForm('ruleForm'))
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["model", "rules"])]);
      }

      const democomponentExport = {
        data() {
          var checkAge = (rule, value, callback) => {
            if (!value) {
              return callback(new Error('Please input the age'));
            }

            setTimeout(() => {
              if (!Number.isInteger(value)) {
                callback(new Error('Please input digits'));
              } else {
                if (value < 18) {
                  callback(new Error('Age must be greater than 18'));
                } else {
                  callback();
                }
              }
            }, 1000);
          };

          var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('Please input the password'));
            } else {
              if (this.ruleForm.checkPass !== '') {
                this.$refs.ruleForm.validateField('checkPass');
              }

              callback();
            }
          };

          var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('Please input the password again'));
            } else if (value !== this.ruleForm.pass) {
              callback(new Error("Two inputs don't match!"));
            } else {
              callback();
            }
          };

          return {
            ruleForm: {
              pass: '',
              checkPass: '',
              age: ''
            },
            rules: {
              pass: [{
                validator: validatePass,
                trigger: 'blur'
              }],
              checkPass: [{
                validator: validatePass2,
                trigger: 'blur'
              }],
              age: [{
                validator: checkAge,
                trigger: 'blur'
              }]
            }
          };
        },

        methods: {
          submitForm(formName) {
            this.$refs[formName].validate(valid => {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },

          resetForm(formName) {
            this.$refs[formName].resetFields();
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        createTextVNode: _createTextVNode,
        withModifiers: _withModifiers,
        createBlock: _createBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Delete");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Submit");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("New domain");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Reset");

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_form, {
          model: _ctx.dynamicValidateForm,
          ref: "dynamicValidateForm",
          "label-width": "120px",
          class: "demo-dynamic"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            prop: "email",
            label: "Email",
            rules: [{
              required: true,
              message: 'Please input email address',
              trigger: 'blur'
            }, {
              type: 'email',
              message: 'Please input correct email address',
              trigger: ['blur', 'change']
            }]
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.dynamicValidateForm.email,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.dynamicValidateForm.email = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.dynamicValidateForm.domains, (domain, index) => {
            return _openBlock(), _createBlock(_component_el_form_item, {
              label: 'Domain' + index,
              key: domain.key,
              prop: 'domains.' + index + '.value',
              rules: {
                required: true,
                message: 'domain can not be null',
                trigger: 'blur'
              }
            }, {
              default: _withCtx(() => [_createVNode(_component_el_input, {
                modelValue: domain.value,
                "onUpdate:modelValue": $event => domain.value = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"]), _createVNode(_component_el_button, {
                onClick: _withModifiers($event => _ctx.removeDomain(domain), ["prevent"])
              }, {
                default: _withCtx(() => [_hoisted_1]),
                _: 2
              }, 1032, ["onClick"])]),
              _: 2
            }, 1032, ["label", "prop"]);
          }), 128)), _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[1] || (_cache[1] = $event => _ctx.submitForm('dynamicValidateForm'))
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }), _createVNode(_component_el_button, {
              onClick: _ctx.addDomain
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              onClick: _cache[2] || (_cache[2] = $event => _ctx.resetForm('dynamicValidateForm'))
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["model"])]);
      }

      const democomponentExport = {
        data() {
          return {
            dynamicValidateForm: {
              domains: [{
                key: 1,
                value: ''
              }],
              email: ''
            }
          };
        },

        methods: {
          submitForm(formName) {
            this.$refs[formName].validate(valid => {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },

          resetForm(formName) {
            this.$refs[formName].resetFields();
          },

          removeDomain(item) {
            var index = this.dynamicValidateForm.domains.indexOf(item);

            if (index !== -1) {
              this.dynamicValidateForm.domains.splice(index, 1);
            }
          },

          addDomain() {
            this.dynamicValidateForm.domains.push({
              key: Date.now(),
              value: ''
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Submit");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Reset");

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_form, {
          model: _ctx.numberValidateForm,
          ref: "numberValidateForm",
          "label-width": "100px",
          class: "demo-ruleForm"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "age",
            prop: "age",
            rules: [{
              required: true,
              message: 'age is required'
            }, {
              type: 'number',
              message: 'age must be a number'
            }]
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              type: "age",
              modelValue: _ctx.numberValidateForm.age,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.numberValidateForm.age = $event),
              modelModifiers: {
                number: true
              },
              autocomplete: "off"
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[1] || (_cache[1] = $event => _ctx.submitForm('numberValidateForm'))
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }), _createVNode(_component_el_button, {
              onClick: _cache[2] || (_cache[2] = $event => _ctx.resetForm('numberValidateForm'))
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["model"])]);
      }

      const democomponentExport = {
        data() {
          return {
            numberValidateForm: {
              age: ''
            }
          };
        },

        methods: {
          submitForm(formName) {
            this.$refs[formName].validate(valid => {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },

          resetForm(formName) {
            this.$refs[formName].resetFields();
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo7": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("-");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Create");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Cancel");

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        const _component_el_date_picker = _resolveComponent("el-date-picker");

        const _component_el_col = _resolveComponent("el-col");

        const _component_el_time_picker = _resolveComponent("el-time-picker");

        const _component_el_checkbox_button = _resolveComponent("el-checkbox-button");

        const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        const _component_el_radio = _resolveComponent("el-radio");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_form, {
          ref: "form",
          model: _ctx.sizeForm,
          "label-width": "120px",
          size: "mini"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "Activity name"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.sizeForm.name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.sizeForm.name = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity zone"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_select, {
              modelValue: _ctx.sizeForm.region,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.sizeForm.region = $event),
              placeholder: "please select your zone"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_option, {
                label: "Zone one",
                value: "shanghai"
              }), _createVNode(_component_el_option, {
                label: "Zone two",
                value: "beijing"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity time"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_col, {
              span: 11
            }, {
              default: _withCtx(() => [_createVNode(_component_el_date_picker, {
                type: "date",
                placeholder: "Pick a date",
                modelValue: _ctx.sizeForm.date1,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.sizeForm.date1 = $event),
                style: {
                  "width": "100%"
                }
              }, null, 8, ["modelValue"])]),
              _: 1
            }), _createVNode(_component_el_col, {
              class: "line",
              span: 2
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 11
            }, {
              default: _withCtx(() => [_createVNode(_component_el_time_picker, {
                placeholder: "Pick a time",
                modelValue: _ctx.sizeForm.date2,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.sizeForm.date2 = $event),
                style: {
                  "width": "100%"
                }
              }, null, 8, ["modelValue"])]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity type"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_checkbox_group, {
              modelValue: _ctx.sizeForm.type,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.sizeForm.type = $event)
            }, {
              default: _withCtx(() => [_createVNode(_component_el_checkbox_button, {
                label: "Online activities",
                name: "type"
              }), _createVNode(_component_el_checkbox_button, {
                label: "Promotion activities",
                name: "type"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Resources"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_radio_group, {
              modelValue: _ctx.sizeForm.resource,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.sizeForm.resource = $event),
              size: "medium"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_radio, {
                border: "",
                label: "Sponsor"
              }), _createVNode(_component_el_radio, {
                border: "",
                label: "Venue"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            size: "large"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "primary",
              onClick: _ctx.onSubmit
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, null, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["model"])]);
      }

      const democomponentExport = {
        data() {
          return {
            sizeForm: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            }
          };
        },

        methods: {
          onSubmit() {
            console.log('submit!');
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
// CONCATENATED MODULE: ./website/docs/es/form.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/form.md



formvue_type_script_lang_ts.render = formvue_type_template_id_f7af78f4_render

/* harmony default export */ var es_form = __webpack_exports__["default"] = (formvue_type_script_lang_ts);

/***/ })

}]);