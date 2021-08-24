(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[166],{

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/form.md?vue&type=template&id=2cd03609

var formvue_type_template_id_2cd03609_hoisted_1 = {
  class: "content element-doc"
};

var formvue_type_template_id_2cd03609_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Form ");

var formvue_type_template_id_2cd03609_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Un formulaire est constitué des éléments "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "input"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "radio"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "select"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", etc. Il sert principalement à collecter, vérifier et soumettre des données.")], -1);

var formvue_type_template_id_2cd03609_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "The component has been upgraded with a flex layout to replace the old float layout.")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Formulaire de base ");

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Il peut contenir toutes sortes de champs tels que "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "input"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "select"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "radio"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Dans chaque composant "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "form"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", il vous faudra utiliser la balise "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "form-item"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour servir de conteneur à chaque champ.")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-form ref=\"form\" :model=\"form\" label-width=\"120px\">\n  <el-form-item label=\"Activity name\">\n    <el-input v-model=\"form.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\">\n    <el-select v-model=\"form.region\" placeholder=\"please select your zone\">\n      <el-option label=\"Zone one\" value=\"shanghai\"></el-option>\n      <el-option label=\"Zone two\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item label=\"Activity time\">\n    <el-col :span=\"11\">\n      <el-date-picker type=\"date\" placeholder=\"Choisissez une date\" v-model=\"form.date1\" style=\"width: 100%;\"></el-date-picker>\n    </el-col>\n    <el-col class=\"line\" :span=\"2\">-</el-col>\n    <el-col :span=\"11\">\n      <el-time-picker placeholder=\"Pick a time\" v-model=\"form.date2\" style=\"width: 100%;\"></el-time-picker>\n    </el-col>\n  </el-form-item>\n  <el-form-item label=\"Instant delivery\">\n    <el-switch v-model=\"form.delivery\"></el-switch>\n  </el-form-item>\n  <el-form-item label=\"Activity type\">\n    <el-checkbox-group v-model=\"form.type\">\n      <el-checkbox label=\"Online activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Promotion activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Offline activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Simple brand exposure\" name=\"type\"></el-checkbox>\n    </el-checkbox-group>\n  </el-form-item>\n  <el-form-item label=\"Resources\">\n    <el-radio-group v-model=\"form.resource\">\n      <el-radio label=\"Sponsor\"></el-radio>\n      <el-radio label=\"Venue\"></el-radio>\n    </el-radio-group>\n  </el-form-item>\n  <el-form-item label=\"Activity form\">\n    <el-input type=\"textarea\" v-model=\"form.desc\"></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"onSubmit\">Créer</el-button>\n    <el-button>Annuler</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: ''\n        }\n      }\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!');\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = {
  class: "tip"
};

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("W3C");

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" stipule que");

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("blockquote", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("i", null, "Lorsqu'il n'y a qu'un seul champ de type texte dans un formulaire, le navigateur devrait accepter la pression de la touche Entrée sur ce champ comme méthode de soumission du formulaire")])], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Pour éviter ce comportement, vous pouvez ajouter "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "@submit.prevent"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" dans "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "<el-form>"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Formulaire horizontal ");

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Lorsque l'espace vertical est limité et que le formulaire est relativement simple, vous pouvez le placer sur une seule ligne.", -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Mettez l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "inline"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" à "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" et le formulaire sera en une seul ligne.")])], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-form :inline=\"true\" :model=\"formInline\" class=\"demo-form-inline\">\n  <el-form-item label=\"Approved by\">\n    <el-input v-model=\"formInline.user\" placeholder=\"Approved by\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\">\n    <el-select v-model=\"formInline.region\" placeholder=\"Activity zone\">\n      <el-option label=\"Zone one\" value=\"shanghai\"></el-option>\n      <el-option label=\"Zone two\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"onSubmit\">Query</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        formInline: {\n          user: '',\n          region: ''\n        }\n      }\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!');\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Alignement ");

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Suivant votre design, il y a différents moyens d'aligner vos labels.", -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("L'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "label-position"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" permet de régler l'alignement, il peut être à "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" ou "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Quand il est à "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", les labels sont placés au-dessus des champs.")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-radio-group v-model=\"labelPosition\" size=\"small\">\n  <el-radio-button label=\"left\">Left</el-radio-button>\n  <el-radio-button label=\"right\">Right</el-radio-button>\n  <el-radio-button label=\"top\">Top</el-radio-button>\n</el-radio-group>\n<div style=\"margin: 20px;\"></div>\n<el-form :label-position=\"labelPosition\" label-width=\"100px\" :model=\"formLabelAlign\">\n  <el-form-item label=\"Name\">\n    <el-input v-model=\"formLabelAlign.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\">\n    <el-input v-model=\"formLabelAlign.region\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity form\">\n    <el-input v-model=\"formLabelAlign.type\"></el-input>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        labelPosition: 'right',\n        formLabelAlign: {\n          name: '',\n          region: '',\n          type: ''\n        }\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Validation ");

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Le composant Form vous permet d'effectuer des vérifications, afin de détecter et corriger les erreurs facilement.", -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Ajoutez l'attribut ");

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "rules", -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" au composant ");

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Form", -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", passez les règles de validation, et configurez l'attribut ");

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "prop", -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" de ");

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Form-Item", -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour ajouter la clé de la règle correspondante au champ. Plus d'informations ici: ");

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("async-validator");

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".");

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-form :model=\"ruleForm\" :rules=\"rules\" ref=\"ruleForm\" label-width=\"120px\" class=\"demo-ruleForm\">\n  <el-form-item label=\"Activity name\" prop=\"name\">\n    <el-input v-model=\"ruleForm.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\" prop=\"region\">\n    <el-select v-model=\"ruleForm.region\" placeholder=\"Activity zone\">\n      <el-option label=\"Zone one\" value=\"shanghai\"></el-option>\n      <el-option label=\"Zone two\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item label=\"Activity time\" required>\n    <el-col :span=\"11\">\n      <el-form-item prop=\"date1\">\n        <el-date-picker type=\"date\" placeholder=\"Choisissez une date\" v-model=\"ruleForm.date1\" style=\"width: 100%;\"></el-date-picker>\n      </el-form-item>\n    </el-col>\n    <el-col class=\"line\" :span=\"2\">-</el-col>\n    <el-col :span=\"11\">\n      <el-form-item prop=\"date2\">\n        <el-time-picker placeholder=\"Pick a time\" v-model=\"ruleForm.date2\" style=\"width: 100%;\"></el-time-picker>\n      </el-form-item>\n    </el-col>\n  </el-form-item>\n  <el-form-item label=\"Instant delivery\" prop=\"delivery\">\n    <el-switch v-model=\"ruleForm.delivery\"></el-switch>\n  </el-form-item>\n  <el-form-item label=\"Activity type\" prop=\"type\">\n    <el-checkbox-group v-model=\"ruleForm.type\">\n      <el-checkbox label=\"Online activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Promotion activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Offline activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Simple brand exposure\" name=\"type\"></el-checkbox>\n    </el-checkbox-group>\n  </el-form-item>\n  <el-form-item label=\"Resources\" prop=\"resource\">\n    <el-radio-group v-model=\"ruleForm.resource\">\n      <el-radio label=\"Sponsorship\"></el-radio>\n      <el-radio label=\"Venue\"></el-radio>\n    </el-radio-group>\n  </el-form-item>\n  <el-form-item label=\"Activity form\" prop=\"desc\">\n    <el-input type=\"textarea\" v-model=\"ruleForm.desc\"></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('ruleForm')\">Créer</el-button>\n    <el-button @click=\"resetForm('ruleForm')\">Réinitialiser</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        ruleForm: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: ''\n        },\n        rules: {\n          name: [\n            { required: true, message: 'Please input Activity name', trigger: 'blur' },\n            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }\n          ],\n          region: [\n            { required: true, message: 'Please select Activity zone', trigger: 'change' }\n          ],\n          date1: [\n            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }\n          ],\n          date2: [\n            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }\n          ],\n          type: [\n            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }\n          ],\n          resource: [\n            { required: true, message: 'Please select activity resource', trigger: 'change' }\n          ],\n          desc: [\n            { required: true, message: 'Please input activity form', trigger: 'blur' }\n          ]\n        }\n      };\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!');\n          } else {\n            console.log('error submit!!');\n            return false;\n          }\n        });\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields();\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Validations personnalisées ");

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Cet exemple montre comment vous pouvez personnaliser vos règles de validation pour effectuer une identification à deux facteurs.", -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Ici, nous utilisons "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "status-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour afficher le résultat de la validation sous forme d'icône.")])], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-form :model=\"ruleForm\" status-icon :rules=\"rules\" ref=\"ruleForm\" label-width=\"120px\" class=\"demo-ruleForm\">\n  <el-form-item label=\"Password\" prop=\"pass\">\n    <el-input type=\"password\" v-model=\"ruleForm.pass\" autocomplete=\"off\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Confirm\" prop=\"checkPass\">\n    <el-input type=\"password\" v-model=\"ruleForm.checkPass\" autocomplete=\"off\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Age\" prop=\"age\">\n    <el-input v-model.number=\"ruleForm.age\"></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('ruleForm')\">Submit</el-button>\n    <el-button @click=\"resetForm('ruleForm')\">Réinitialiser</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      var checkAge = (rule, value, callback) => {\n        if (!value) {\n          return callback(new Error('Veuillez entrer l\\'âge'));\n        }\n        setTimeout(() => {\n          if (!Number.isInteger(value)) {\n            callback(new Error('Veuillez entrer des chiffres'));\n          } else {\n            if (value < 18) {\n              callback(new Error('L\\'âge doit être supérieur à 18 ans'));\n            } else {\n              callback();\n            }\n          }\n        }, 1000);\n      };\n      var validatePass = (rule, value, callback) => {\n        if (value === '') {\n          callback(new Error('Veuillez entrer le mot de passe'));\n        } else {\n          if (this.ruleForm.checkPass !== '') {\n            this.$refs.ruleForm.validateField('checkPass');\n          }\n          callback();\n        }\n      };\n      var validatePass2 = (rule, value, callback) => {\n        if (value === '') {\n          callback(new Error('Veuillez entrer à nouveau le mot de passe'));\n        } else if (value !== this.ruleForm.pass) {\n          callback(new Error('Les deux entrées ne correspondent pas!'));\n        } else {\n          callback();\n        }\n      };\n      return {\n        ruleForm: {\n          pass: '',\n          checkPass: '',\n          age: ''\n        },\n        rules: {\n          pass: [\n            { validator: validatePass, trigger: 'blur' }\n          ],\n          checkPass: [\n            { validator: validatePass2, trigger: 'blur' }\n          ],\n          age: [\n            { validator: checkAge, trigger: 'blur' }\n          ]\n        }\n      };\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!');\n          } else {\n            console.log('error submit!!');\n            return false;\n          }\n        });\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields();\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_40 = {
  class: "tip"
};

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Les callback de validations personnalisées doivent être appelées. Un usage plus avancé se trouve ici: ");

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("async-validator");

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".");

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Ajouter ou supprimer des champs dynamiquement ");

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "En plus de pouvoir passer toutes les règles de validation en une seule fois au formulaire, vous pouvez aussi ajouter ou supprimer des règles sur un seul champ de manière dynamique.")], -1);

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-form :model=\"dynamicValidateForm\" ref=\"dynamicValidateForm\" label-width=\"120px\" class=\"demo-dynamic\">\n  <el-form-item\n    prop=\"email\"\n    label=\"Email\"\n    :rules=\"[\n      { required: true, message: 'Veuillez entrer l\\'adresse e-mail', trigger: 'blur' },\n      { type: 'email', message: 'Veuillez entrer une adresse e-mail valide', trigger: ['blur', 'change'] }\n    ]\"\n  >\n    <el-input v-model=\"dynamicValidateForm.email\"></el-input>\n  </el-form-item>\n  <el-form-item\n    v-for=\"(domain, index) in dynamicValidateForm.domains\"\n    :label=\"'Domain' + index\"\n    :key=\"domain.key\"\n    :prop=\"'domains.' + index + '.value'\"\n    :rules=\"{\n      required: true, message: 'domain ne peut pas être null', trigger: 'blur'\n    }\"\n  >\n    <el-input v-model=\"domain.value\"></el-input><el-button @click.prevent=\"removeDomain(domain)\">Supprimer</el-button>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('dynamicValidateForm')\">Soumettre</el-button>\n    <el-button @click=\"addDomain\">Nouveau domaine</el-button>\n    <el-button @click=\"resetForm('dynamicValidateForm')\">Réinitialiser</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        dynamicValidateForm: {\n          domains: [{\n            key: 1,\n            value: ''\n          }],\n          email: ''\n        }\n      };\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!');\n          } else {\n            console.log('error submit!!');\n            return false;\n          }\n        });\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields();\n      },\n      removeDomain(item) {\n        var index = this.dynamicValidateForm.domains.indexOf(item);\n        if (index !== -1) {\n          this.dynamicValidateForm.domains.splice(index, 1);\n        }\n      },\n      addDomain() {\n        this.dynamicValidateForm.domains.push({\n          key: Date.now(),\n          value: ''\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Validation des nombres ");

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Pour valider les nombres correctement, il vous faudra ajouter le modificateur "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, ".number"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" à l'attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Il est utilisé par Vuejs pour transformer les valeurs en nombres .")])], -1);

var _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-form :model=\"numberValidateForm\" ref=\"numberValidateForm\" label-width=\"100px\" class=\"demo-ruleForm\">\n  <el-form-item\n    label=\"age\"\n    prop=\"age\"\n    :rules=\"[\n      { required: true, message: 'l\\'âge est requis'},\n      { type: 'number', message: 'l\\'âge doit être un nombre'}\n    ]\"\n  >\n    <el-input type=\"age\" v-model.number=\"numberValidateForm.age\" autocomplete=\"off\"></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('numberValidateForm')\">Soumettre</el-button>\n    <el-button @click=\"resetForm('numberValidateForm')\">Réinitialiser</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        numberValidateForm: {\n          age: ''\n        }\n      };\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!');\n          } else {\n            console.log('error submit!!');\n            return false;\n          }\n        });\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields();\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Lorsqu'un "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-form-item"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" est imbriqué dans un autre "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-form-item"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", la largeur de son label sera "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Utilisez "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "label-width"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" sur ce "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-form-item"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" si besoin.")])], -1);

var _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Taille ");

var _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Tout les composants d'un formulaire héritent leur attribut "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" de ce formulaire. Il est aussi possible de l'utiliser individuellement sur chaque FormItem.")], -1);

var _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Vous pouvez régler le "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" de chaque item si vous ne souhaitez pas qu'il hérite de son parent.")])], -1);

var _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-form ref=\"form\" :model=\"sizeForm\" label-width=\"120px\" size=\"mini\">\n  <el-form-item label=\"Activity name\">\n    <el-input v-model=\"sizeForm.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\">\n    <el-select v-model=\"sizeForm.region\" placeholder=\"veuillez sélectionner votre zone\">\n      <el-option label=\"Zone one\" value=\"shanghai\"></el-option>\n      <el-option label=\"Zone two\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item label=\"Activity time\">\n    <el-col :span=\"11\">\n      <el-date-picker type=\"date\" placeholder=\"Choisissez une date\" v-model=\"sizeForm.date1\" style=\"width: 100%;\"></el-date-picker>\n    </el-col>\n    <el-col class=\"line\" :span=\"2\">-</el-col>\n    <el-col :span=\"11\">\n      <el-time-picker placeholder=\"Choisissez une heure\" v-model=\"sizeForm.date2\" style=\"width: 100%;\"></el-time-picker>\n    </el-col>\n  </el-form-item>\n  <el-form-item label=\"Activity type\">\n    <el-checkbox-group v-model=\"sizeForm.type\">\n      <el-checkbox-button label=\"Online activities\" name=\"type\"></el-checkbox-button>\n      <el-checkbox-button label=\"Promotion activities\" name=\"type\"></el-checkbox-button>\n    </el-checkbox-group>\n  </el-form-item>\n  <el-form-item label=\"Resources\">\n    <el-radio-group v-model=\"sizeForm.resource\" size=\"medium\">\n      <el-radio border label=\"Sponsor\"></el-radio>\n      <el-radio border label=\"Venue\"></el-radio>\n    </el-radio-group>\n  </el-form-item>\n  <el-form-item size=\"large\">\n    <el-button type=\"primary\" @click=\"onSubmit\">Créer</el-button>\n    <el-button>Annuler</el-button>\n  </el-form-item>\n</el-form>\n\n<script>\n  export default {\n    data() {\n      return {\n        sizeForm: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: ''\n        }\n      };\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!');\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Attributs de Form ");

var _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>model</td><td>Données du formulaire.</td><td>object</td><td>—</td><td>—</td></tr><tr><td>rules</td><td>Règles de validation du formulaire.</td><td>object</td><td>—</td><td>—</td></tr><tr><td>inline</td><td>Si le formulaire est horizontal.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>label-position</td><td>Position des labels. Si &#39;left&#39; ou &#39;right&#39;, <code>label-width</code> est aussi requis.</td><td>string</td><td>left / right / top</td><td>right</td></tr><tr><td>label-width</td><td>Largeur des labels, tout les enfants directs hériteront de cette valeur. La largeur <code>auto</code> est supportée.</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>label-suffix</td><td>Suffixe de labels.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>hide-required-asterisk</td><td>Si les champs obligatoires doivent avoir une astérisque rouge (étoile) à coté de leurs labels.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-message</td><td>Si le message d&#39;erreur doit apparaître.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>inline-message</td><td>Si le message d&#39;erreur doit apparaître en ligne avec son champ.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>status-icon</td><td>Si une icône indiquant le résultat de validation doit apparaître.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>validate-on-rule-change</td><td>Si la validation doit se déclencher lorsque <code>rules</code> est modifié.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>Contrôle la taille des champs du formulaire.</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>disabled</td><td>Si tout les champs du formulaire doivent être désactivés. Si <code>true</code>, il ne peut pas être modifié par l&#39;attribut <code>disabled</code> des enfants.</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

var _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Méthodes de Form ");

var _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Méthode</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>validate</td><td>Valide le formulaire. Prends une callback en paramètre. Après la validation, la callback est exécutée avec deux paramètres: un boolean indiquant si la validation est bonne, et un objet contenant tout les champs qui ont échoués. Retourne une promesse si aucune callback n&#39;est passée.</td><td>Function(callback: Function(boolean, object))</td></tr><tr><td>validateField</td><td>Valide un ou plusieurs champs du formulaire.</td><td>Function(props: string | array, callback: Function(errorMessage: string))</td></tr><tr><td>resetFields</td><td>Efface tout les champs et les résultats de validation.</td><td>—</td></tr><tr><td>clearValidate</td><td>Efface les messages de validation de certains champs. Le paramètre est le nom du champ ou une liste des champs concernés. S&#39;il est omis, tout les champs seront concernés.</td><td>Function(props: string | array)</td></tr></tbody></table>", 1);

var _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Évènnements de Form ");

var _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Nom"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Paramètres")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "validate"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Se déclenche après la validation d'un champ."), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Nom du champs qui a été validé, si la validation est bonne et le message d'erreur sinon.")])])], -1);

var _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Attributs de FormItem ");

var _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Attribut"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Valeurs acceptées"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Défaut")])], -1);

var _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "prop"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Une des clés de "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "model"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Utilisés par les méthodes validate et resetFields. Requis.")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Clés du model passé à "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "form"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td")], -1);

var _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Le label."), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "label-width"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Largeur du label, e.g. '50px'. La largeur "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "auto"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" est supportée.")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string / number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "required"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Si le champ est requis ou non. Si omis, sera déterminé par les règles de validation."), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "rules", -1);

var _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Règles de validation du formulaire, voir table suivante, plus d'informations ici: ");

var _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("async-validator");

var _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "object / array", -1);

var _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—", -1);

var _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—", -1);

var _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "error"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Message d'erreur du champ. S'il est modifié, le champ l'affichera immédiatement."), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "show-message"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Si le message d'erreur doit apparaître."), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "true")], -1);

var _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "inline-message"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Si le message d'erreur doit être en ligne avec le champ."), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_76 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Contrôle la taille du FormItem."), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "medium / small / mini"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_77 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Rules ");

var _hoisted_78 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>trigger</td><td>how the validator is triggered</td><td>string</td><td>blur / change</td><td>—</td></tr></tbody></table>", 1);

var _hoisted_79 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Slot de Form-Item ");

var _hoisted_80 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Nom</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>Contenu de Form Item.</td></tr><tr><td>label</td><td>Custom content to display on label. The scope parameter is { label }</td></tr><tr><td>error</td><td>Contenu personnalisé pour les messages de validation. Le paramètre du scope est { error }.</td></tr></tbody></table>", 1);

var _hoisted_81 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Méthodes de Form-Item ");

var _hoisted_82 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Méthode</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>resetField</td><td>Efface le champ et les résultats de validation.</td><td>—</td></tr><tr><td>clearValidate</td><td>Efface le status de validation du champ.</td><td>—</td></tr></tbody></table>", 1);

function formvue_type_template_id_2cd03609_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  var _component_element_demo7 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo7");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", formvue_type_template_id_2cd03609_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "form",
    content: "Form",
    href: "#form",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [formvue_type_template_id_2cd03609_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#form"
      })];
    }),
    _: 1
  }), formvue_type_template_id_2cd03609_hoisted_3, formvue_type_template_id_2cd03609_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "formulaire-de-base",
    content: "Formulaire de base",
    href: "#formulaire-de-base",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#formulaire-de-base"
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
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("div", _hoisted_9, [Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_11]), _hoisted_12, _hoisted_13]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "formulaire-horizontal",
    content: "Formulaire horizontal",
    href: "#formulaire-horizontal",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#formulaire-horizontal"
      })];
    }),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "alignement",
    content: "Alignement",
    href: "#alignement",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#alignement"
      })];
    }),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "validation",
    content: "Validation",
    href: "#validation",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_22, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#validation"
      })];
    }),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_35];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_24, _hoisted_25, _hoisted_26, _hoisted_27, _hoisted_28, _hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        href: "https://github.com/yiminghe/async-validator"
      }, {
        default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
          return [_hoisted_33];
        }),
        _: 1
      }), _hoisted_34])])];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "validations-personnalisees",
    content: "Validations personnalisées",
    href: "#validations-personnalisees",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_36, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#validations-personnalisees"
      })];
    }),
    _: 1
  }), _hoisted_37, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_39];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_38];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("div", _hoisted_40, [Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_41, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/yiminghe/async-validator"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_42];
    }),
    _: 1
  }), _hoisted_43])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ajouter-ou-supprimer-des-champs-dynamiquement",
    content: "Ajouter ou supprimer des champs dynamiquement",
    href: "#ajouter-ou-supprimer-des-champs-dynamiquement",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_44, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ajouter-ou-supprimer-des-champs-dynamiquement"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_46];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_45];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "validation-des-nombres",
    content: "Validation des nombres",
    href: "#validation-des-nombres",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_47, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#validation-des-nombres"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_49];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_48];
    }),
    _: 1
  }), _hoisted_50, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "taille",
    content: "Taille",
    href: "#taille",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_51, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#taille"
      })];
    }),
    _: 1
  }), _hoisted_52, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_54];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_53];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "attributs-de-form",
    content: "Attributs de Form",
    href: "#attributs-de-form",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_55, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#attributs-de-form"
      })];
    }),
    _: 1
  }), _hoisted_56, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "methodes-de-form",
    content: "Méthodes de Form",
    href: "#methodes-de-form",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_57, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#methodes-de-form"
      })];
    }),
    _: 1
  }), _hoisted_58, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "evennements-de-form",
    content: "Évènnements de Form",
    href: "#evennements-de-form",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_59, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#evennements-de-form"
      })];
    }),
    _: 1
  }), _hoisted_60, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "attributs-de-formitem",
    content: "Attributs de FormItem",
    href: "#attributs-de-formitem",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_61, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#attributs-de-formitem"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [_hoisted_62, Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [_hoisted_63, _hoisted_64, _hoisted_65, _hoisted_66, Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [_hoisted_67, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [_hoisted_68, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/yiminghe/async-validator"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_69];
    }),
    _: 1
  })]), _hoisted_70, _hoisted_71, _hoisted_72]), _hoisted_73, _hoisted_74, _hoisted_75, _hoisted_76])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "rules",
    content: "Rules",
    href: "#rules",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_77, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#rules"
      })];
    }),
    _: 1
  }), _hoisted_78, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "slot-de-form-item",
    content: "Slot de Form-Item",
    href: "#slot-de-form-item",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_79, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#slot-de-form-item"
      })];
    }),
    _: 1
  }), _hoisted_80, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "methodes-de-form-item",
    content: "Méthodes de Form-Item",
    href: "#methodes-de-form-item",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_81, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#methodes-de-form-item"
      })];
    }),
    _: 1
  }), _hoisted_82, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/form.md?vue&type=template&id=2cd03609

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/form.md?vue&type=script&lang=ts


/* harmony default export */ var formvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("-");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Créer");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Annuler");

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        var _component_el_form_item = _resolveComponent("el-form-item");

        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        var _component_el_date_picker = _resolveComponent("el-date-picker");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_time_picker = _resolveComponent("el-time-picker");

        var _component_el_switch = _resolveComponent("el-switch");

        var _component_el_checkbox = _resolveComponent("el-checkbox");

        var _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        var _component_el_radio = _resolveComponent("el-radio");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_form, {
          ref: "form",
          model: _ctx.form,
          "label-width": "120px"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_form_item, {
              label: "Activity name"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_input, {
                  modelValue: _ctx.form.name,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.form.name = $event;
                  })
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Activity zone"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_select, {
                  modelValue: _ctx.form.region,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.form.region = $event;
                  }),
                  placeholder: "please select your zone"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_option, {
                      label: "Zone one",
                      value: "shanghai"
                    }), _createVNode(_component_el_option, {
                      label: "Zone two",
                      value: "beijing"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Activity time"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_col, {
                  span: 11
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_date_picker, {
                      type: "date",
                      placeholder: "Choisissez une date",
                      modelValue: _ctx.form.date1,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                        return _ctx.form.date1 = $event;
                      }),
                      style: {
                        "width": "100%"
                      }
                    }, null, 8, ["modelValue"])];
                  }),
                  _: 1
                }), _createVNode(_component_el_col, {
                  class: "line",
                  span: 2
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }), _createVNode(_component_el_col, {
                  span: 11
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_time_picker, {
                      placeholder: "Pick a time",
                      modelValue: _ctx.form.date2,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                        return _ctx.form.date2 = $event;
                      }),
                      style: {
                        "width": "100%"
                      }
                    }, null, 8, ["modelValue"])];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Instant delivery"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_switch, {
                  modelValue: _ctx.form.delivery,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                    return _ctx.form.delivery = $event;
                  })
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Activity type"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_checkbox_group, {
                  modelValue: _ctx.form.type,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                    return _ctx.form.type = $event;
                  })
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_checkbox, {
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
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Resources"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_radio_group, {
                  modelValue: _ctx.form.resource,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                    return _ctx.form.resource = $event;
                  })
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_radio, {
                      label: "Sponsor"
                    }), _createVNode(_component_el_radio, {
                      label: "Venue"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Activity form"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_input, {
                  type: "textarea",
                  modelValue: _ctx.form.desc,
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
                    return _ctx.form.desc = $event;
                  })
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _ctx.onSubmit
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["model"])]);
      }

      var democomponentExport = {
        data: function data() {
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
          onSubmit: function onSubmit() {
            console.log('submit!');
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Query");

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        var _component_el_form_item = _resolveComponent("el-form-item");

        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_form, {
          inline: true,
          model: _ctx.formInline,
          class: "demo-form-inline"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_form_item, {
              label: "Approved by"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_input, {
                  modelValue: _ctx.formInline.user,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.formInline.user = $event;
                  }),
                  placeholder: "Approved by"
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Activity zone"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_select, {
                  modelValue: _ctx.formInline.region,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.formInline.region = $event;
                  }),
                  placeholder: "Activity zone"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_option, {
                      label: "Zone one",
                      value: "shanghai"
                    }), _createVNode(_component_el_option, {
                      label: "Zone two",
                      value: "beijing"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _ctx.onSubmit
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }, 8, ["onClick"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["model"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            formInline: {
              user: '',
              region: ''
            }
          };
        },
        methods: {
          onSubmit: function onSubmit() {
            console.log('submit!');
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Left");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Right");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Top");

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        style: {
          "margin": "20px"
        }
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_radio_button = _resolveComponent("el-radio-button");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        var _component_el_input = _resolveComponent("el-input");

        var _component_el_form_item = _resolveComponent("el-form-item");

        var _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.labelPosition,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.labelPosition = $event;
          }),
          size: "small"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio_button, {
              label: "left"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_radio_button, {
              label: "right"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_radio_button, {
              label: "top"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"]), _hoisted_4, _createVNode(_component_el_form, {
          "label-position": _ctx.labelPosition,
          "label-width": "100px",
          model: _ctx.formLabelAlign
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_form_item, {
              label: "Name"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_input, {
                  modelValue: _ctx.formLabelAlign.name,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.formLabelAlign.name = $event;
                  })
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Activity zone"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_input, {
                  modelValue: _ctx.formLabelAlign.region,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                    return _ctx.formLabelAlign.region = $event;
                  })
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Activity form"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_input, {
                  modelValue: _ctx.formLabelAlign.type,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                    return _ctx.formLabelAlign.type = $event;
                  })
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["label-position", "model"])]);
      }

      var democomponentExport = {
        data: function data() {
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
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("-");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Créer");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Réinitialiser");

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        var _component_el_form_item = _resolveComponent("el-form-item");

        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        var _component_el_date_picker = _resolveComponent("el-date-picker");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_time_picker = _resolveComponent("el-time-picker");

        var _component_el_switch = _resolveComponent("el-switch");

        var _component_el_checkbox = _resolveComponent("el-checkbox");

        var _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        var _component_el_radio = _resolveComponent("el-radio");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_form, {
          model: _ctx.ruleForm,
          rules: _ctx.rules,
          ref: "ruleForm",
          "label-width": "120px",
          class: "demo-ruleForm"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_form_item, {
              label: "Activity name",
              prop: "name"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_input, {
                  modelValue: _ctx.ruleForm.name,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.ruleForm.name = $event;
                  })
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Activity zone",
              prop: "region"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_select, {
                  modelValue: _ctx.ruleForm.region,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.ruleForm.region = $event;
                  }),
                  placeholder: "Activity zone"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_option, {
                      label: "Zone one",
                      value: "shanghai"
                    }), _createVNode(_component_el_option, {
                      label: "Zone two",
                      value: "beijing"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Activity time",
              required: ""
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_col, {
                  span: 11
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_form_item, {
                      prop: "date1"
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_date_picker, {
                          type: "date",
                          placeholder: "Choisissez une date",
                          modelValue: _ctx.ruleForm.date1,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                            return _ctx.ruleForm.date1 = $event;
                          }),
                          style: {
                            "width": "100%"
                          }
                        }, null, 8, ["modelValue"])];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_el_col, {
                  class: "line",
                  span: 2
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }), _createVNode(_component_el_col, {
                  span: 11
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_form_item, {
                      prop: "date2"
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_time_picker, {
                          placeholder: "Pick a time",
                          modelValue: _ctx.ruleForm.date2,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                            return _ctx.ruleForm.date2 = $event;
                          }),
                          style: {
                            "width": "100%"
                          }
                        }, null, 8, ["modelValue"])];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Instant delivery",
              prop: "delivery"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_switch, {
                  modelValue: _ctx.ruleForm.delivery,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                    return _ctx.ruleForm.delivery = $event;
                  })
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Activity type",
              prop: "type"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_checkbox_group, {
                  modelValue: _ctx.ruleForm.type,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                    return _ctx.ruleForm.type = $event;
                  })
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_checkbox, {
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
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Resources",
              prop: "resource"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_radio_group, {
                  modelValue: _ctx.ruleForm.resource,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                    return _ctx.ruleForm.resource = $event;
                  })
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_radio, {
                      label: "Sponsorship"
                    }), _createVNode(_component_el_radio, {
                      label: "Venue"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Activity form",
              prop: "desc"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_input, {
                  type: "textarea",
                  modelValue: _ctx.ruleForm.desc,
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
                    return _ctx.ruleForm.desc = $event;
                  })
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[9] || (_cache[9] = function ($event) {
                    return _ctx.submitForm('ruleForm');
                  })
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_button, {
                  onClick: _cache[10] || (_cache[10] = function ($event) {
                    return _ctx.resetForm('ruleForm');
                  })
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["model", "rules"])]);
      }

      var democomponentExport = {
        data: function data() {
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
          submitForm: function submitForm(formName) {
            this.$refs[formName].validate(function (valid) {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm: function resetForm(formName) {
            this.$refs[formName].resetFields();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Submit");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Réinitialiser");

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        var _component_el_form_item = _resolveComponent("el-form-item");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_form, {
          model: _ctx.ruleForm,
          "status-icon": "",
          rules: _ctx.rules,
          ref: "ruleForm",
          "label-width": "120px",
          class: "demo-ruleForm"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_form_item, {
              label: "Password",
              prop: "pass"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_input, {
                  type: "password",
                  modelValue: _ctx.ruleForm.pass,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.ruleForm.pass = $event;
                  }),
                  autocomplete: "off"
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Confirm",
              prop: "checkPass"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_input, {
                  type: "password",
                  modelValue: _ctx.ruleForm.checkPass,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.ruleForm.checkPass = $event;
                  }),
                  autocomplete: "off"
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Age",
              prop: "age"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_input, {
                  modelValue: _ctx.ruleForm.age,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                    return _ctx.ruleForm.age = $event;
                  }),
                  modelModifiers: {
                    number: true
                  }
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[4] || (_cache[4] = function ($event) {
                    return _ctx.submitForm('ruleForm');
                  })
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }), _createVNode(_component_el_button, {
                  onClick: _cache[5] || (_cache[5] = function ($event) {
                    return _ctx.resetForm('ruleForm');
                  })
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["model", "rules"])]);
      }

      var democomponentExport = {
        data: function data() {
          var _this = this;

          var checkAge = function checkAge(rule, value, callback) {
            if (!value) {
              return callback(new Error('Veuillez entrer l\'âge'));
            }

            setTimeout(function () {
              if (!Number.isInteger(value)) {
                callback(new Error('Veuillez entrer des chiffres'));
              } else {
                if (value < 18) {
                  callback(new Error('L\'âge doit être supérieur à 18 ans'));
                } else {
                  callback();
                }
              }
            }, 1000);
          };

          var validatePass = function validatePass(rule, value, callback) {
            if (value === '') {
              callback(new Error('Veuillez entrer le mot de passe'));
            } else {
              if (_this.ruleForm.checkPass !== '') {
                _this.$refs.ruleForm.validateField('checkPass');
              }

              callback();
            }
          };

          var validatePass2 = function validatePass2(rule, value, callback) {
            if (value === '') {
              callback(new Error('Veuillez entrer à nouveau le mot de passe'));
            } else if (value !== _this.ruleForm.pass) {
              callback(new Error('Les deux entrées ne correspondent pas!'));
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
          submitForm: function submitForm(formName) {
            this.$refs[formName].validate(function (valid) {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm: function resetForm(formName) {
            this.$refs[formName].resetFields();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _withModifiers = vue_esm_browser_prod["ib" /* withModifiers */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Supprimer");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Soumettre");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Nouveau domaine");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Réinitialiser");

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        var _component_el_form_item = _resolveComponent("el-form-item");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_form, {
          model: _ctx.dynamicValidateForm,
          ref: "dynamicValidateForm",
          "label-width": "120px",
          class: "demo-dynamic"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_form_item, {
              prop: "email",
              label: "Email",
              rules: [{
                required: true,
                message: 'Veuillez entrer l\'adresse e-mail',
                trigger: 'blur'
              }, {
                type: 'email',
                message: 'Veuillez entrer une adresse e-mail valide',
                trigger: ['blur', 'change']
              }]
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_input, {
                  modelValue: _ctx.dynamicValidateForm.email,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.dynamicValidateForm.email = $event;
                  })
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.dynamicValidateForm.domains, function (domain, index) {
              return _openBlock(), _createBlock(_component_el_form_item, {
                label: 'Domain' + index,
                key: domain.key,
                prop: 'domains.' + index + '.value',
                rules: {
                  required: true,
                  message: 'domain ne peut pas être null',
                  trigger: 'blur'
                }
              }, {
                default: _withCtx(function () {
                  return [_createVNode(_component_el_input, {
                    modelValue: domain.value,
                    "onUpdate:modelValue": function onUpdateModelValue($event) {
                      return domain.value = $event;
                    }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), _createVNode(_component_el_button, {
                    onClick: _withModifiers(function ($event) {
                      return _ctx.removeDomain(domain);
                    }, ["prevent"])
                  }, {
                    default: _withCtx(function () {
                      return [_hoisted_1];
                    }),
                    _: 2
                  }, 1032, ["onClick"])];
                }),
                _: 2
              }, 1032, ["label", "prop"]);
            }), 128)), _createVNode(_component_el_form_item, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.submitForm('dynamicValidateForm');
                  })
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }), _createVNode(_component_el_button, {
                  onClick: _ctx.addDomain
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  onClick: _cache[3] || (_cache[3] = function ($event) {
                    return _ctx.resetForm('dynamicValidateForm');
                  })
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["model"])]);
      }

      var democomponentExport = {
        data: function data() {
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
          submitForm: function submitForm(formName) {
            this.$refs[formName].validate(function (valid) {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm: function resetForm(formName) {
            this.$refs[formName].resetFields();
          },
          removeDomain: function removeDomain(item) {
            var index = this.dynamicValidateForm.domains.indexOf(item);

            if (index !== -1) {
              this.dynamicValidateForm.domains.splice(index, 1);
            }
          },
          addDomain: function addDomain() {
            this.dynamicValidateForm.domains.push({
              key: Date.now(),
              value: ''
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Soumettre");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Réinitialiser");

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        var _component_el_form_item = _resolveComponent("el-form-item");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_form, {
          model: _ctx.numberValidateForm,
          ref: "numberValidateForm",
          "label-width": "100px",
          class: "demo-ruleForm"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_form_item, {
              label: "age",
              prop: "age",
              rules: [{
                required: true,
                message: 'l\'âge est requis'
              }, {
                type: 'number',
                message: 'l\'âge doit être un nombre'
              }]
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_input, {
                  type: "age",
                  modelValue: _ctx.numberValidateForm.age,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.numberValidateForm.age = $event;
                  }),
                  modelModifiers: {
                    number: true
                  },
                  autocomplete: "off"
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.submitForm('numberValidateForm');
                  })
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }), _createVNode(_component_el_button, {
                  onClick: _cache[3] || (_cache[3] = function ($event) {
                    return _ctx.resetForm('numberValidateForm');
                  })
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["model"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            numberValidateForm: {
              age: ''
            }
          };
        },
        methods: {
          submitForm: function submitForm(formName) {
            this.$refs[formName].validate(function (valid) {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm: function resetForm(formName) {
            this.$refs[formName].resetFields();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo7": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("-");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Créer");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Annuler");

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        var _component_el_form_item = _resolveComponent("el-form-item");

        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        var _component_el_date_picker = _resolveComponent("el-date-picker");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_time_picker = _resolveComponent("el-time-picker");

        var _component_el_checkbox_button = _resolveComponent("el-checkbox-button");

        var _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        var _component_el_radio = _resolveComponent("el-radio");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_form, {
          ref: "form",
          model: _ctx.sizeForm,
          "label-width": "120px",
          size: "mini"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_form_item, {
              label: "Activity name"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_input, {
                  modelValue: _ctx.sizeForm.name,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.sizeForm.name = $event;
                  })
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Activity zone"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_select, {
                  modelValue: _ctx.sizeForm.region,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.sizeForm.region = $event;
                  }),
                  placeholder: "veuillez sélectionner votre zone"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_option, {
                      label: "Zone one",
                      value: "shanghai"
                    }), _createVNode(_component_el_option, {
                      label: "Zone two",
                      value: "beijing"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Activity time"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_col, {
                  span: 11
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_date_picker, {
                      type: "date",
                      placeholder: "Choisissez une date",
                      modelValue: _ctx.sizeForm.date1,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                        return _ctx.sizeForm.date1 = $event;
                      }),
                      style: {
                        "width": "100%"
                      }
                    }, null, 8, ["modelValue"])];
                  }),
                  _: 1
                }), _createVNode(_component_el_col, {
                  class: "line",
                  span: 2
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }), _createVNode(_component_el_col, {
                  span: 11
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_time_picker, {
                      placeholder: "Choisissez une heure",
                      modelValue: _ctx.sizeForm.date2,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                        return _ctx.sizeForm.date2 = $event;
                      }),
                      style: {
                        "width": "100%"
                      }
                    }, null, 8, ["modelValue"])];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Activity type"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_checkbox_group, {
                  modelValue: _ctx.sizeForm.type,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                    return _ctx.sizeForm.type = $event;
                  })
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_checkbox_button, {
                      label: "Online activities",
                      name: "type"
                    }), _createVNode(_component_el_checkbox_button, {
                      label: "Promotion activities",
                      name: "type"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              label: "Resources"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_radio_group, {
                  modelValue: _ctx.sizeForm.resource,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                    return _ctx.sizeForm.resource = $event;
                  }),
                  size: "medium"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_radio, {
                      border: "",
                      label: "Sponsor"
                    }), _createVNode(_component_el_radio, {
                      border: "",
                      label: "Venue"
                    })];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
              }),
              _: 1
            }), _createVNode(_component_el_form_item, {
              size: "large"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _ctx.onSubmit
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, null, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["model"])]);
      }

      var democomponentExport = {
        data: function data() {
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
          onSubmit: function onSubmit() {
            console.log('submit!');
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/form.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/form.md



formvue_type_script_lang_ts.render = formvue_type_template_id_2cd03609_render

/* harmony default export */ var fr_FR_form = __webpack_exports__["default"] = (formvue_type_script_lang_ts);

/***/ })

}]);