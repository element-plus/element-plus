(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/form.md?vue&type=template&id=02c95465

var formvue_type_template_id_02c95465_hoisted_1 = {
  class: "content element-doc"
};

var formvue_type_template_id_02c95465_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"form\"><a class=\"header-anchor\" href=\"#form\">¶</a> Form</h2><p>Form consists of <code>input</code>, <code>radio</code>, <code>select</code>, <code>checkbox</code> and so on. With form, you can collect, verify and submit data.</p><h3 id=\"basic-form\"><a class=\"header-anchor\" href=\"#basic-form\">¶</a> Basic form</h3><p>It includes all kinds of input items, such as <code>input</code>, <code>select</code>, <code>radio</code> and <code>checkbox</code>.</p>", 4);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("In each "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "form"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" component, you need a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "form-item"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" field to be the container of your input item.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-form ref=\"form\" :model=\"form\" label-width=\"120px\">\n  <el-form-item label=\"Activity name\">\n    <el-input v-model=\"form.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\">\n    <el-select v-model=\"form.region\" placeholder=\"please select your zone\">\n      <el-option label=\"Zone one\" value=\"shanghai\"></el-option>\n      <el-option label=\"Zone two\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item label=\"Activity time\">\n    <el-col :span=\"11\">\n      <el-date-picker type=\"date\" placeholder=\"Pick a date\" v-model=\"form.date1\" style=\"width: 100%;\"></el-date-picker>\n    </el-col>\n    <el-col class=\"line\" :span=\"2\">-</el-col>\n    <el-col :span=\"11\">\n      <el-time-picker placeholder=\"Pick a time\" v-model=\"form.date2\" style=\"width: 100%;\"></el-time-picker>\n    </el-col>\n  </el-form-item>\n  <el-form-item label=\"Instant delivery\">\n    <el-switch v-model=\"form.delivery\"></el-switch>\n  </el-form-item>\n  <el-form-item label=\"Activity type\">\n    <el-checkbox-group v-model=\"form.type\">\n      <el-checkbox label=\"Online activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Promotion activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Offline activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Simple brand exposure\" name=\"type\"></el-checkbox>\n    </el-checkbox-group>\n  </el-form-item>\n  <el-form-item label=\"Resources\">\n    <el-radio-group v-model=\"form.resource\">\n      <el-radio label=\"Sponsor\"></el-radio>\n      <el-radio label=\"Venue\"></el-radio>\n    </el-radio-group>\n  </el-form-item>\n  <el-form-item label=\"Activity form\">\n    <el-input type=\"textarea\" v-model=\"form.desc\"></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"onSubmit\">Create</el-button>\n    <el-button>Cancel</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: ''\n        }\n      }\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!');\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"tip\"><p><a href=\"https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2\">W3C</a> regulates that</p><blockquote><p><i>When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.</i></p></blockquote><p>To prevent this behavior, you can add <code>@submit.prevent</code> on <code>&lt;el-form&gt;</code>.</p></div><h3 id=\"inline-form\"><a class=\"header-anchor\" href=\"#inline-form\">¶</a> Inline form</h3><p>When the vertical space is limited and the form is relatively simple, you can put it in one line.</p>", 3);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inline"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and the form will be inline.")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-form :inline=\"true\" :model=\"formInline\" class=\"demo-form-inline\">\n  <el-form-item label=\"Approved by\">\n    <el-input v-model=\"formInline.user\" placeholder=\"Approved by\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\">\n    <el-select v-model=\"formInline.region\" placeholder=\"Activity zone\">\n      <el-option label=\"Zone one\" value=\"shanghai\"></el-option>\n      <el-option label=\"Zone two\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"onSubmit\">Query</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        formInline: {\n          user: '',\n          region: ''\n        }\n      }\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!');\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "alignment"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#alignment"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Alignment")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Depending on your design, there are several different ways to align your label element.", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("The "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label-position"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute decides how labels align, it can be "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" or "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". When set to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", labels will be placed at the top of the form field.")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-radio-group v-model=\"labelPosition\" size=\"small\">\n  <el-radio-button label=\"left\">Left</el-radio-button>\n  <el-radio-button label=\"right\">Right</el-radio-button>\n  <el-radio-button label=\"top\">Top</el-radio-button>\n</el-radio-group>\n<div style=\"margin: 20px;\"></div>\n<el-form :label-position=\"labelPosition\" label-width=\"100px\" :model=\"formLabelAlign\">\n  <el-form-item label=\"Name\">\n    <el-input v-model=\"formLabelAlign.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\">\n    <el-input v-model=\"formLabelAlign.region\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity form\">\n    <el-input v-model=\"formLabelAlign.type\"></el-input>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        labelPosition: 'right',\n        formLabelAlign: {\n          name: '',\n          region: '',\n          type: ''\n        }\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "validation"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#validation"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Validation")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Form component allows you to verify your data, helping you find and correct errors.", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Just add the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "rules"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute for "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Form"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" component, pass validation rules, and set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "prop"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute for "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Form-Item"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" as a specific key that needs to be validated. See more information at "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  href: "https://github.com/yiminghe/async-validator"
}, "async-validator"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-form :model=\"ruleForm\" :rules=\"rules\" ref=\"ruleForm\" label-width=\"120px\" class=\"demo-ruleForm\">\n  <el-form-item label=\"Activity name\" prop=\"name\">\n    <el-input v-model=\"ruleForm.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\" prop=\"region\">\n    <el-select v-model=\"ruleForm.region\" placeholder=\"Activity zone\">\n      <el-option label=\"Zone one\" value=\"shanghai\"></el-option>\n      <el-option label=\"Zone two\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item label=\"Activity time\" required>\n    <el-col :span=\"11\">\n      <el-form-item prop=\"date1\">\n        <el-date-picker type=\"date\" placeholder=\"Pick a date\" v-model=\"ruleForm.date1\" style=\"width: 100%;\"></el-date-picker>\n      </el-form-item>\n    </el-col>\n    <el-col class=\"line\" :span=\"2\">-</el-col>\n    <el-col :span=\"11\">\n      <el-form-item prop=\"date2\">\n        <el-time-picker placeholder=\"Pick a time\" v-model=\"ruleForm.date2\" style=\"width: 100%;\"></el-time-picker>\n      </el-form-item>\n    </el-col>\n  </el-form-item>\n  <el-form-item label=\"Instant delivery\" prop=\"delivery\">\n    <el-switch v-model=\"ruleForm.delivery\"></el-switch>\n  </el-form-item>\n  <el-form-item label=\"Activity type\" prop=\"type\">\n    <el-checkbox-group v-model=\"ruleForm.type\">\n      <el-checkbox label=\"Online activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Promotion activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Offline activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Simple brand exposure\" name=\"type\"></el-checkbox>\n    </el-checkbox-group>\n  </el-form-item>\n  <el-form-item label=\"Resources\" prop=\"resource\">\n    <el-radio-group v-model=\"ruleForm.resource\">\n      <el-radio label=\"Sponsorship\"></el-radio>\n      <el-radio label=\"Venue\"></el-radio>\n    </el-radio-group>\n  </el-form-item>\n  <el-form-item label=\"Activity form\" prop=\"desc\">\n    <el-input type=\"textarea\" v-model=\"ruleForm.desc\"></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('ruleForm')\">Create</el-button>\n    <el-button @click=\"resetForm('ruleForm')\">Reset</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        ruleForm: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: ''\n        },\n        rules: {\n          name: [\n            { required: true, message: 'Please input Activity name', trigger: 'blur' },\n            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }\n          ],\n          region: [\n            { required: true, message: 'Please select Activity zone', trigger: 'change' }\n          ],\n          date1: [\n            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }\n          ],\n          date2: [\n            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }\n          ],\n          type: [\n            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }\n          ],\n          resource: [\n            { required: true, message: 'Please select activity resource', trigger: 'change' }\n          ],\n          desc: [\n            { required: true, message: 'Please input activity form', trigger: 'blur' }\n          ]\n        }\n      };\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!');\n          } else {\n            console.log('error submit!!');\n            return false;\n          }\n        });\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields();\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "custom-validation-rules"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#custom-validation-rules"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Custom validation rules")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "This example shows how to customize your own validation rules to finish a two-factor password verification.", -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Here we use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "status-icon"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to reflect validation result as an icon.")])], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-form :model=\"ruleForm\" status-icon :rules=\"rules\" ref=\"ruleForm\" label-width=\"120px\" class=\"demo-ruleForm\">\n  <el-form-item label=\"Password\" prop=\"pass\">\n    <el-input type=\"password\" v-model=\"ruleForm.pass\" autocomplete=\"off\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Confirm\" prop=\"checkPass\">\n    <el-input type=\"password\" v-model=\"ruleForm.checkPass\" autocomplete=\"off\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Age\" prop=\"age\">\n    <el-input v-model.number=\"ruleForm.age\"></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('ruleForm')\">Submit</el-button>\n    <el-button @click=\"resetForm('ruleForm')\">Reset</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      var checkAge = (rule, value, callback) => {\n        if (!value) {\n          return callback(new Error('Please input the age'));\n        }\n        setTimeout(() => {\n          if (!Number.isInteger(value)) {\n            callback(new Error('Please input digits'));\n          } else {\n            if (value < 18) {\n              callback(new Error('Age must be greater than 18'));\n            } else {\n              callback();\n            }\n          }\n        }, 1000);\n      };\n      var validatePass = (rule, value, callback) => {\n        if (value === '') {\n          callback(new Error('Please input the password'));\n        } else {\n          if (this.ruleForm.checkPass !== '') {\n            this.$refs.ruleForm.validateField('checkPass');\n          }\n          callback();\n        }\n      };\n      var validatePass2 = (rule, value, callback) => {\n        if (value === '') {\n          callback(new Error('Please input the password again'));\n        } else if (value !== this.ruleForm.pass) {\n          callback(new Error('Two inputs don\\'t match!'));\n        } else {\n          callback();\n        }\n      };\n      return {\n        ruleForm: {\n          pass: '',\n          checkPass: '',\n          age: ''\n        },\n        rules: {\n          pass: [\n            { validator: validatePass, trigger: 'blur' }\n          ],\n          checkPass: [\n            { validator: validatePass2, trigger: 'blur' }\n          ],\n          age: [\n            { validator: checkAge, trigger: 'blur' }\n          ]\n        }\n      };\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!');\n          } else {\n            console.log('error submit!!');\n            return false;\n          }\n        });\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields();\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Custom validate callback function must be called. See more advanced usage at "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  href: "https://github.com/yiminghe/async-validator"
}, "async-validator"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "delete-or-add-form-items-dynamically"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#delete-or-add-form-items-dynamically"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Delete or add form items dynamically")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "In addition to passing all validation rules at once on the form component, you can also pass the validation rules or delete rules on a single form field dynamically.")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-form :model=\"dynamicValidateForm\" ref=\"dynamicValidateForm\" label-width=\"120px\" class=\"demo-dynamic\">\n  <el-form-item\n    prop=\"email\"\n    label=\"Email\"\n    :rules=\"[\n      { required: true, message: 'Please input email address', trigger: 'blur' },\n      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }\n    ]\"\n  >\n    <el-input v-model=\"dynamicValidateForm.email\"></el-input>\n  </el-form-item>\n  <el-form-item\n    v-for=\"(domain, index) in dynamicValidateForm.domains\"\n    :label=\"'Domain' + index\"\n    :key=\"domain.key\"\n    :prop=\"'domains.' + index + '.value'\"\n    :rules=\"{\n      required: true, message: 'domain can not be null', trigger: 'blur'\n    }\"\n  >\n    <el-input v-model=\"domain.value\"></el-input><el-button @click.prevent=\"removeDomain(domain)\">Delete</el-button>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('dynamicValidateForm')\">Submit</el-button>\n    <el-button @click=\"addDomain\">New domain</el-button>\n    <el-button @click=\"resetForm('dynamicValidateForm')\">Reset</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        dynamicValidateForm: {\n          domains: [{\n            key: 1,\n            value: ''\n          }],\n          email: ''\n        }\n      };\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!');\n          } else {\n            console.log('error submit!!');\n            return false;\n          }\n        });\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields();\n      },\n      removeDomain(item) {\n        var index = this.dynamicValidateForm.domains.indexOf(item);\n        if (index !== -1) {\n          this.dynamicValidateForm.domains.splice(index, 1);\n        }\n      },\n      addDomain() {\n        this.dynamicValidateForm.domains.push({\n          key: Date.now(),\n          value: ''\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "number-validate"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#number-validate"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Number Validate")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Number Validate need a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, ".number"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" modifier added on the input "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" binding，it's used to transform the string value to the number which is provided by Vuejs.")])], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-form :model=\"numberValidateForm\" ref=\"numberValidateForm\" label-width=\"100px\" class=\"demo-ruleForm\">\n  <el-form-item\n    label=\"age\"\n    prop=\"age\"\n    :rules=\"[\n      { required: true, message: 'age is required'},\n      { type: 'number', message: 'age must be a number'}\n    ]\"\n  >\n    <el-input type=\"age\" v-model.number=\"numberValidateForm.age\" autocomplete=\"off\"></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('numberValidateForm')\">Submit</el-button>\n    <el-button @click=\"resetForm('numberValidateForm')\">Reset</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        numberValidateForm: {\n          age: ''\n        }\n      };\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!');\n          } else {\n            console.log('error submit!!');\n            return false;\n          }\n        });\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields();\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"tip\"><p>When an <code>el-form-item</code> is nested in another <code>el-form-item</code>, its label width will be <code>0</code>. You can set <code>label-width</code> on that <code>el-form-item</code> if needed.</p></div><h3 id=\"size-control\"><a class=\"header-anchor\" href=\"#size-control\">¶</a> Size control</h3><p>All components in a Form inherit their <code>size</code> attribute from that Form. Similarly, FormItem also has a <code>size</code> attribute.</p>", 3);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Still you can fine tune each component's "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" if you don't want that component to inherit its size from From or FormIten.")])], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-form ref=\"form\" :model=\"sizeForm\" label-width=\"120px\" size=\"mini\">\n  <el-form-item label=\"Activity name\">\n    <el-input v-model=\"sizeForm.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\">\n    <el-select v-model=\"sizeForm.region\" placeholder=\"please select your zone\">\n      <el-option label=\"Zone one\" value=\"shanghai\"></el-option>\n      <el-option label=\"Zone two\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item label=\"Activity time\">\n    <el-col :span=\"11\">\n      <el-date-picker type=\"date\" placeholder=\"Pick a date\" v-model=\"sizeForm.date1\" style=\"width: 100%;\"></el-date-picker>\n    </el-col>\n    <el-col class=\"line\" :span=\"2\">-</el-col>\n    <el-col :span=\"11\">\n      <el-time-picker placeholder=\"Pick a time\" v-model=\"sizeForm.date2\" style=\"width: 100%;\"></el-time-picker>\n    </el-col>\n  </el-form-item>\n  <el-form-item label=\"Activity type\">\n    <el-checkbox-group v-model=\"sizeForm.type\">\n      <el-checkbox-button label=\"Online activities\" name=\"type\"></el-checkbox-button>\n      <el-checkbox-button label=\"Promotion activities\" name=\"type\"></el-checkbox-button>\n    </el-checkbox-group>\n  </el-form-item>\n  <el-form-item label=\"Resources\">\n    <el-radio-group v-model=\"sizeForm.resource\" size=\"medium\">\n      <el-radio border label=\"Sponsor\"></el-radio>\n      <el-radio border label=\"Venue\"></el-radio>\n    </el-radio-group>\n  </el-form-item>\n  <el-form-item size=\"large\">\n    <el-button type=\"primary\" @click=\"onSubmit\">Create</el-button>\n    <el-button>Cancel</el-button>\n  </el-form-item>\n</el-form>\n\n<script>\n  export default {\n    data() {\n      return {\n        sizeForm: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: ''\n        }\n      };\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!');\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"form-attributes\"><a class=\"header-anchor\" href=\"#form-attributes\">¶</a> Form Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model</td><td>data of form component</td><td>object</td><td>—</td><td>—</td></tr><tr><td>rules</td><td>validation rules of form</td><td>object</td><td>—</td><td>—</td></tr><tr><td>inline</td><td>whether the form is inline</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>label-position</td><td>position of label. If set to &#39;left&#39; or &#39;right&#39;, <code>label-width</code> prop is also required</td><td>string</td><td>left / right / top</td><td>right</td></tr><tr><td>label-width</td><td>width of label, e.g. &#39;50px&#39;. All its direct child form items will inherit this value. Width <code>auto</code> is supported.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label-suffix</td><td>suffix of the label</td><td>string</td><td>—</td><td>—</td></tr><tr><td>hide-required-asterisk</td><td>whether required fields should have a red asterisk (star) beside their labels</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-message</td><td>whether to show the error message</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>inline-message</td><td>whether to display the error message inline with the form item</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>status-icon</td><td>whether to display an icon indicating the validation result</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>validate-on-rule-change</td><td>whether to trigger validation when the <code>rules</code> prop is changed</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>control the size of components in this form</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>disabled</td><td>whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components&#39; <code>disabled</code> prop</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"form-methods\"><a class=\"header-anchor\" href=\"#form-methods\">¶</a> Form Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>validate</td><td>validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted</td><td>Function(callback: Function(boolean, object))</td></tr><tr><td>validateField</td><td>validate one or several form items</td><td>Function(props: string | array, callback: Function(errorMessage: string))</td></tr><tr><td>resetFields</td><td>reset all the fields and remove validation result</td><td>—</td></tr><tr><td>clearValidate</td><td>clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields&#39; validation messages will be cleared</td><td>Function(props: string | array)</td></tr></tbody></table><h3 id=\"form-events\"><a class=\"header-anchor\" href=\"#form-events\">¶</a> Form Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>validate</td><td>triggers after a form item is validated</td><td>prop name of the form item being validated, whether validation is passed and the error message if not</td></tr></tbody></table><h3 id=\"form-item-attributes\"><a class=\"header-anchor\" href=\"#form-item-attributes\">¶</a> Form-Item Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>prop</td><td>a key of <code>model</code>. In the use of validate and resetFields method, the attribute is required</td><td>string</td><td>keys of model that passed to <code>form</code></td><td></td></tr><tr><td>label</td><td>label</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label-width</td><td>width of label, e.g. &#39;50px&#39;. Width <code>auto</code> is supported.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>required</td><td>whether the field is required or not, will be determined by validation rules if omitted</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>rules</td><td>validation rules of form</td><td>object</td><td>—</td><td>—</td></tr><tr><td>error</td><td>field error message, set its value and the field will validate error and show this message immediately</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-message</td><td>whether to show the error message</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>inline-message</td><td>inline style validate message</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>control the size of components in this form-item</td><td>string</td><td>medium / small / mini</td><td>-</td></tr></tbody></table><h3 id=\"form-item-slots\"><a class=\"header-anchor\" href=\"#form-item-slots\">¶</a> Form-Item Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>content of Form Item</td></tr><tr><td>label</td><td>content of label</td></tr></tbody></table><h3 id=\"form-item-scoped-slot\"><a class=\"header-anchor\" href=\"#form-item-scoped-slot\">¶</a> Form-Item Scoped Slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>error</td><td>Custom content to display validation message. The scope parameter is { error }</td></tr></tbody></table><h3 id=\"form-item-methods\"><a class=\"header-anchor\" href=\"#form-item-methods\">¶</a> Form-Item Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>resetField</td><td>reset current field and remove validation result</td><td>—</td></tr><tr><td>clearValidate</td><td>remove validation status of the field</td><td>-</td></tr></tbody></table>", 14);

function formvue_type_template_id_02c95465_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  var _component_element_demo7 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo7");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", formvue_type_template_id_02c95465_hoisted_1, [formvue_type_template_id_02c95465_hoisted_2, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_21, _hoisted_22, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_25, _hoisted_26, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_31];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_36];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_35];
    }),
    _: 1
  }), _hoisted_37, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/form.md?vue&type=template&id=02c95465

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/form.md?vue&type=script&lang=ts


/* harmony default export */ var formvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("-");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Create");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Cancel");

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
                      placeholder: "Pick a date",
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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("-");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Create");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Reset");

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
                          placeholder: "Pick a date",
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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Submit");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Reset");

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
              return callback(new Error('Please input the age'));
            }

            setTimeout(function () {
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

          var validatePass = function validatePass(rule, value, callback) {
            if (value === '') {
              callback(new Error('Please input the password'));
            } else {
              if (_this.ruleForm.checkPass !== '') {
                _this.$refs.ruleForm.validateField('checkPass');
              }

              callback();
            }
          };

          var validatePass2 = function validatePass2(rule, value, callback) {
            if (value === '') {
              callback(new Error('Please input the password again'));
            } else if (value !== _this.ruleForm.pass) {
              callback(new Error('Two inputs don\'t match!'));
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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _withModifiers = vue_esm_browser["hb" /* withModifiers */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Delete");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Submit");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("New domain");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Reset");

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
                message: 'Please input email address',
                trigger: 'blur'
              }, {
                type: 'email',
                message: 'Please input correct email address',
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
                  message: 'domain can not be null',
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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Submit");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Reset");

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
                message: 'age is required'
              }, {
                type: 'number',
                message: 'age must be a number'
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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("-");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Create");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Cancel");

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
                      placeholder: "Pick a date",
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
                      placeholder: "Pick a time",
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
// CONCATENATED MODULE: ./website/docs/en-US/form.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/form.md



formvue_type_script_lang_ts.render = formvue_type_template_id_02c95465_render

/* harmony default export */ var en_US_form = __webpack_exports__["default"] = (formvue_type_script_lang_ts);

/***/ })

}]);