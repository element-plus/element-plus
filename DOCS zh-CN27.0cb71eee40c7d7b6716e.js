(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[309],{

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/form.md?vue&type=template&id=7e105f7b

const formvue_type_template_id_7e105f7b_hoisted_1 = {
  class: "content element-doc"
};

const formvue_type_template_id_7e105f7b_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form 表单 ");

const formvue_type_template_id_7e105f7b_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据", -1);

const formvue_type_template_id_7e105f7b_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "组件升级采用了 flex 布局，以替代旧版本的 float 布局。")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("典型表单 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form ref=\"form\" :model=\"form\" label-width=\"80px\">\n  <el-form-item label=\"活动名称\">\n    <el-input v-model=\"form.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"活动区域\">\n    <el-select v-model=\"form.region\" placeholder=\"请选择活动区域\">\n      <el-option label=\"区域一\" value=\"shanghai\"></el-option>\n      <el-option label=\"区域二\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item label=\"活动时间\">\n    <el-col :span=\"11\">\n      <el-date-picker\n        type=\"date\"\n        placeholder=\"选择日期\"\n        v-model=\"form.date1\"\n        style=\"width: 100%;\"\n      ></el-date-picker>\n    </el-col>\n    <el-col class=\"line\" :span=\"2\">-</el-col>\n    <el-col :span=\"11\">\n      <el-time-picker\n        placeholder=\"选择时间\"\n        v-model=\"form.date2\"\n        style=\"width: 100%;\"\n      ></el-time-picker>\n    </el-col>\n  </el-form-item>\n  <el-form-item label=\"即时配送\">\n    <el-switch v-model=\"form.delivery\"></el-switch>\n  </el-form-item>\n  <el-form-item label=\"活动性质\">\n    <el-checkbox-group v-model=\"form.type\">\n      <el-checkbox label=\"美食/餐厅线上活动\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"地推活动\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"线下主题活动\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"单纯品牌曝光\" name=\"type\"></el-checkbox>\n    </el-checkbox-group>\n  </el-form-item>\n  <el-form-item label=\"特殊资源\">\n    <el-radio-group v-model=\"form.resource\">\n      <el-radio label=\"线上品牌商赞助\"></el-radio>\n      <el-radio label=\"线下场地免费\"></el-radio>\n    </el-radio-group>\n  </el-form-item>\n  <el-form-item label=\"活动形式\">\n    <el-input type=\"textarea\" v-model=\"form.desc\"></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"onSubmit\">立即创建</el-button>\n    <el-button>取消</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n      }\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!')\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_9 = {
  class: "tip"
};

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("W3C 标准中有如下");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("规定");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("：");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("blockquote", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("i", null, "When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.")])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "<el-form>"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 标签上添加 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "@submit.prevent"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("行内表单 ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "当垂直方向空间受限且表单较简单时，可以在一行内放置表单。", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "inline"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性可以让表单域变为行内的表单域")])], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form :inline=\"true\" :model=\"formInline\" class=\"demo-form-inline\">\n  <el-form-item label=\"审批人\">\n    <el-input v-model=\"formInline.user\" placeholder=\"审批人\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"活动区域\">\n    <el-select v-model=\"formInline.region\" placeholder=\"活动区域\">\n      <el-option label=\"区域一\" value=\"shanghai\"></el-option>\n      <el-option label=\"区域二\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"onSubmit\">查询</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        formInline: {\n          user: '',\n          region: '',\n        },\n      }\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!')\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("对齐方式 ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "根据具体目标和制约因素，选择最佳的标签对齐方式。", -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label-position"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性可以改变表单域标签的位置，可选值为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，当设为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 时标签会置于表单域的顶部")])], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-radio-group v-model=\"labelPosition\" size=\"small\">\n  <el-radio-button label=\"left\">左对齐</el-radio-button>\n  <el-radio-button label=\"right\">右对齐</el-radio-button>\n  <el-radio-button label=\"top\">顶部对齐</el-radio-button>\n</el-radio-group>\n<div style=\"margin: 20px;\"></div>\n<el-form\n  :label-position=\"labelPosition\"\n  label-width=\"80px\"\n  :model=\"formLabelAlign\"\n>\n  <el-form-item label=\"名称\">\n    <el-input v-model=\"formLabelAlign.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"活动区域\">\n    <el-input v-model=\"formLabelAlign.region\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"活动形式\">\n    <el-input v-model=\"formLabelAlign.type\"></el-input>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        labelPosition: 'right',\n        formLabelAlign: {\n          name: '',\n          region: '',\n          type: '',\n        },\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("表单验证 ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form 组件提供了表单验证的功能，只需要通过 ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "rules", -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性传入约定的验证规则，并将 Form-Item 的 ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "prop", -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性设置为需校验的字段名即可。校验规则参见 ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("async-validator");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form\n  :model=\"ruleForm\"\n  :rules=\"rules\"\n  ref=\"ruleForm\"\n  label-width=\"100px\"\n  class=\"demo-ruleForm\"\n>\n  <el-form-item label=\"活动名称\" prop=\"name\">\n    <el-input v-model=\"ruleForm.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"活动区域\" prop=\"region\">\n    <el-select v-model=\"ruleForm.region\" placeholder=\"请选择活动区域\">\n      <el-option label=\"区域一\" value=\"shanghai\"></el-option>\n      <el-option label=\"区域二\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item label=\"活动时间\" required>\n    <el-col :span=\"11\">\n      <el-form-item prop=\"date1\">\n        <el-date-picker\n          type=\"date\"\n          placeholder=\"选择日期\"\n          v-model=\"ruleForm.date1\"\n          style=\"width: 100%;\"\n        ></el-date-picker>\n      </el-form-item>\n    </el-col>\n    <el-col class=\"line\" :span=\"2\">-</el-col>\n    <el-col :span=\"11\">\n      <el-form-item prop=\"date2\">\n        <el-time-picker\n          placeholder=\"选择时间\"\n          v-model=\"ruleForm.date2\"\n          style=\"width: 100%;\"\n        ></el-time-picker>\n      </el-form-item>\n    </el-col>\n  </el-form-item>\n  <el-form-item label=\"即时配送\" prop=\"delivery\">\n    <el-switch v-model=\"ruleForm.delivery\"></el-switch>\n  </el-form-item>\n  <el-form-item label=\"活动性质\" prop=\"type\">\n    <el-checkbox-group v-model=\"ruleForm.type\">\n      <el-checkbox label=\"美食/餐厅线上活动\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"地推活动\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"线下主题活动\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"单纯品牌曝光\" name=\"type\"></el-checkbox>\n    </el-checkbox-group>\n  </el-form-item>\n  <el-form-item label=\"特殊资源\" prop=\"resource\">\n    <el-radio-group v-model=\"ruleForm.resource\">\n      <el-radio label=\"线上品牌商赞助\"></el-radio>\n      <el-radio label=\"线下场地免费\"></el-radio>\n    </el-radio-group>\n  </el-form-item>\n  <el-form-item label=\"活动形式\" prop=\"desc\">\n    <el-input type=\"textarea\" v-model=\"ruleForm.desc\"></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('ruleForm')\"\n      >立即创建</el-button\n    >\n    <el-button @click=\"resetForm('ruleForm')\">重置</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        ruleForm: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n        rules: {\n          name: [\n            { required: true, message: '请输入活动名称', trigger: 'blur' },\n            {\n              min: 3,\n              max: 5,\n              message: '长度在 3 到 5 个字符',\n              trigger: 'blur',\n            },\n          ],\n          region: [\n            { required: true, message: '请选择活动区域', trigger: 'change' },\n          ],\n          date1: [\n            {\n              type: 'date',\n              required: true,\n              message: '请选择日期',\n              trigger: 'change',\n            },\n          ],\n          date2: [\n            {\n              type: 'date',\n              required: true,\n              message: '请选择时间',\n              trigger: 'change',\n            },\n          ],\n          type: [\n            {\n              type: 'array',\n              required: true,\n              message: '请至少选择一个活动性质',\n              trigger: 'change',\n            },\n          ],\n          resource: [\n            { required: true, message: '请选择活动资源', trigger: 'change' },\n          ],\n          desc: [\n            { required: true, message: '请填写活动形式', trigger: 'blur' },\n          ],\n        },\n      }\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!')\n          } else {\n            console.log('error submit!!')\n            return false\n          }\n        })\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields()\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义校验规则 ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。", -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("本例还使用"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "status-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性为输入框添加了表示校验结果的反馈图标。")])], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form\n  :model=\"ruleForm\"\n  status-icon\n  :rules=\"rules\"\n  ref=\"ruleForm\"\n  label-width=\"100px\"\n  class=\"demo-ruleForm\"\n>\n  <el-form-item label=\"密码\" prop=\"pass\">\n    <el-input\n      type=\"password\"\n      v-model=\"ruleForm.pass\"\n      autocomplete=\"off\"\n    ></el-input>\n  </el-form-item>\n  <el-form-item label=\"确认密码\" prop=\"checkPass\">\n    <el-input\n      type=\"password\"\n      v-model=\"ruleForm.checkPass\"\n      autocomplete=\"off\"\n    ></el-input>\n  </el-form-item>\n  <el-form-item label=\"年龄\" prop=\"age\">\n    <el-input v-model.number=\"ruleForm.age\"></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('ruleForm')\">提交</el-button>\n    <el-button @click=\"resetForm('ruleForm')\">重置</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      var checkAge = (rule, value, callback) => {\n        if (!value) {\n          return callback(new Error('年龄不能为空'))\n        }\n        setTimeout(() => {\n          if (!Number.isInteger(value)) {\n            callback(new Error('请输入数字值'))\n          } else {\n            if (value < 18) {\n              callback(new Error('必须年满18岁'))\n            } else {\n              callback()\n            }\n          }\n        }, 1000)\n      }\n      var validatePass = (rule, value, callback) => {\n        if (value === '') {\n          callback(new Error('请输入密码'))\n        } else {\n          if (this.ruleForm.checkPass !== '') {\n            this.$refs.ruleForm.validateField('checkPass')\n          }\n          callback()\n        }\n      }\n      var validatePass2 = (rule, value, callback) => {\n        if (value === '') {\n          callback(new Error('请再次输入密码'))\n        } else if (value !== this.ruleForm.pass) {\n          callback(new Error('两次输入密码不一致!'))\n        } else {\n          callback()\n        }\n      }\n      return {\n        ruleForm: {\n          pass: '',\n          checkPass: '',\n          age: '',\n        },\n        rules: {\n          pass: [{ validator: validatePass, trigger: 'blur' }],\n          checkPass: [{ validator: validatePass2, trigger: 'blur' }],\n          age: [{ validator: checkAge, trigger: 'blur' }],\n        },\n      }\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!')\n          } else {\n            console.log('error submit!!')\n            return false\n          }\n        })\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields()\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_36 = {
  class: "tip"
};

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义校验 callback 必须被调用。 更多高级用法可参考 ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("async-validator");

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("动态增减表单项 ");

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "除了在 Form 组件上一次性传递所有的验证规则外还可以在单个的表单域上传递属性的验证规则")], -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form\n  :model=\"dynamicValidateForm\"\n  ref=\"dynamicValidateForm\"\n  label-width=\"100px\"\n  class=\"demo-dynamic\"\n>\n  <el-form-item\n    prop=\"email\"\n    label=\"邮箱\"\n    :rules=\"[\n      { required: true, message: '请输入邮箱地址', trigger: 'blur' },\n      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }\n    ]\"\n  >\n    <el-input v-model=\"dynamicValidateForm.email\"></el-input>\n  </el-form-item>\n  <el-form-item\n    v-for=\"(domain, index) in dynamicValidateForm.domains\"\n    :label=\"'域名' + index\"\n    :key=\"domain.key\"\n    :prop=\"'domains.' + index + '.value'\"\n    :rules=\"{\n      required: true, message: '域名不能为空', trigger: 'blur'\n    }\"\n  >\n    <el-input v-model=\"domain.value\"></el-input\n    ><el-button @click.prevent=\"removeDomain(domain)\">删除</el-button>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('dynamicValidateForm')\"\n      >提交</el-button\n    >\n    <el-button @click=\"addDomain\">新增域名</el-button>\n    <el-button @click=\"resetForm('dynamicValidateForm')\">重置</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        dynamicValidateForm: {\n          domains: [\n            {\n              value: '',\n            },\n          ],\n          email: '',\n        },\n      }\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!')\n          } else {\n            console.log('error submit!!')\n            return false\n          }\n        })\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields()\n      },\n      removeDomain(item) {\n        var index = this.dynamicValidateForm.domains.indexOf(item)\n        if (index !== -1) {\n          this.dynamicValidateForm.domains.splice(index, 1)\n        }\n      },\n      addDomain() {\n        this.dynamicValidateForm.domains.push({\n          value: '',\n          key: Date.now(),\n        })\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("数字类型验证 ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("数字类型的验证需要在 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 处加上 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, ".number"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 的修饰符，这是 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Vue"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 自身提供的用于将绑定值转化为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 类型的修饰符。")])], -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form\n  :model=\"numberValidateForm\"\n  ref=\"numberValidateForm\"\n  label-width=\"100px\"\n  class=\"demo-ruleForm\"\n>\n  <el-form-item\n    label=\"年龄\"\n    prop=\"age\"\n    :rules=\"[\n      { required: true, message: '年龄不能为空'},\n      { type: 'number', message: '年龄必须为数字值'}\n    ]\"\n  >\n    <el-input\n      type=\"age\"\n      v-model.number=\"numberValidateForm.age\"\n      autocomplete=\"off\"\n    ></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('numberValidateForm')\"\n      >提交</el-button\n    >\n    <el-button @click=\"resetForm('numberValidateForm')\">重置</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        numberValidateForm: {\n          age: '',\n        },\n      }\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!')\n          } else {\n            console.log('error submit!!')\n            return false\n          }\n        })\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields()\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("嵌套在 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-form-item"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 中的 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-form-item"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 标签宽度默认为零，不会继承 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-form"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 的 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label-width"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。如果需要可以为其单独设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label-width"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性。")])], -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("表单内组件尺寸控制 ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过设置 Form 上的 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性可以使该表单内所有可调节大小的组件继承该尺寸。Form-Item 也具有该属性。")], -1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("如果希望某个表单项或某个表单组件的尺寸不同于 Form 上的"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性，直接为这个表单项或表单组件设置自己的"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("即可。")])], -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form ref=\"form\" :model=\"sizeForm\" label-width=\"80px\" size=\"mini\">\n  <el-form-item label=\"活动名称\">\n    <el-input v-model=\"sizeForm.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"活动区域\">\n    <el-select v-model=\"sizeForm.region\" placeholder=\"请选择活动区域\">\n      <el-option label=\"区域一\" value=\"shanghai\"></el-option>\n      <el-option label=\"区域二\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item label=\"活动时间\">\n    <el-col :span=\"11\">\n      <el-date-picker\n        type=\"date\"\n        placeholder=\"选择日期\"\n        v-model=\"sizeForm.date1\"\n        style=\"width: 100%;\"\n      ></el-date-picker>\n    </el-col>\n    <el-col class=\"line\" :span=\"2\">-</el-col>\n    <el-col :span=\"11\">\n      <el-time-picker\n        placeholder=\"选择时间\"\n        v-model=\"sizeForm.date2\"\n        style=\"width: 100%;\"\n      ></el-time-picker>\n    </el-col>\n  </el-form-item>\n  <el-form-item label=\"活动性质\">\n    <el-checkbox-group v-model=\"sizeForm.type\">\n      <el-checkbox-button\n        label=\"美食/餐厅线上活动\"\n        name=\"type\"\n      ></el-checkbox-button>\n      <el-checkbox-button label=\"地推活动\" name=\"type\"></el-checkbox-button>\n      <el-checkbox-button label=\"线下主题活动\" name=\"type\"></el-checkbox-button>\n    </el-checkbox-group>\n  </el-form-item>\n  <el-form-item label=\"特殊资源\">\n    <el-radio-group v-model=\"sizeForm.resource\" size=\"medium\">\n      <el-radio border label=\"线上品牌商赞助\"></el-radio>\n      <el-radio border label=\"线下场地免费\"></el-radio>\n    </el-radio-group>\n  </el-form-item>\n  <el-form-item size=\"large\">\n    <el-button type=\"primary\" @click=\"onSubmit\">立即创建</el-button>\n    <el-button>取消</el-button>\n  </el-form-item>\n</el-form>\n\n<script>\n  export default {\n    data() {\n      return {\n        sizeForm: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n      }\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!')\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form Attributes ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model</td><td>表单数据对象</td><td>object</td><td>—</td><td>—</td></tr><tr><td>rules</td><td>表单验证规则</td><td>object</td><td>—</td><td>—</td></tr><tr><td>inline</td><td>行内表单模式</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>label-position</td><td>表单域标签的位置，如果值为 left 或者 right 时，则需要设置 <code>label-width</code></td><td>string</td><td>right / left / top</td><td>right</td></tr><tr><td>label-width</td><td>表单域标签的宽度，例如 &#39;50px&#39;。作为 Form 直接子元素的 form-item 会继承该值。支持 <code>auto</code>。</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>label-suffix</td><td>表单域标签的后缀</td><td>string</td><td>—</td><td>—</td></tr><tr><td>hide-required-asterisk</td><td>是否显示必填字段的标签旁边的红色星号</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-message</td><td>是否显示校验错误信息</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>inline-message</td><td>是否以行内形式展示校验信息</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>status-icon</td><td>是否在输入框中显示校验结果反馈图标</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>validate-on-rule-change</td><td>是否在 <code>rules</code> 属性改变后立即触发一次验证</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>用于控制该表单内组件的尺寸</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form Methods ");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>validate</td><td>对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise</td><td>Function(callback: Function(boolean, object))</td></tr><tr><td>validateField</td><td>对部分表单字段进行校验的方法</td><td>Function(props: array | string, callback: Function(errorMessage: string))</td></tr><tr><td>resetFields</td><td>对整个表单进行重置，将所有字段值重置为初始值并移除校验结果</td><td>—</td></tr><tr><td>scrollToField</td><td>滚动到指定表单字段</td><td>Function(prop: string)</td></tr><tr><td>clearValidate</td><td>移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果</td><td>Function(props: array | string)</td></tr></tbody></table>", 1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form Events ");

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "事件名称"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "回调参数")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "validate"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "任一表单项被校验后触发"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "被校验的表单项 prop 值，校验是否通过，错误消息（如果存在）")])])], -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form-Item Attributes ");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "参数"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "类型"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "可选值"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "默认值")])], -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "prop"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("传入 Form 组件的 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 中的字段")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "标签文本"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "label-width"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("表单域标签的的宽度，例如 '50px'。支持 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "auto"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string / number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "required"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "是否必填，如不设置，则会根据校验规则自动生成"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "rules", -1);

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("表单验证规则, 具体配置见下表, 更多内容参考");

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("async-validator");

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "object / array", -1);

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "error"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("表单域验证错误信息, 设置该值会使表单验证状态变为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "error"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，并显示该错误信息")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "show-message"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "是否显示校验错误信息"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true")], -1);

const _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "inline-message"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "以行内形式展示校验信息"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "用于控制该表单域下组件的尺寸"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "medium / small / mini"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Rules ");

const _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>trigger</td><td>验证触发方式</td><td>string</td><td>blur / change</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form-Item Slot ");

const _hoisted_76 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>Form Item 的内容</td></tr><tr><td>label</td><td>自定义标签，参数为 { label }</td></tr><tr><td>error</td><td>自定义表单校验信息的显示方式，参数为 { error }</td></tr></tbody></table>", 1);

const _hoisted_77 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form-Item Methods ");

const _hoisted_78 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>resetField</td><td>对该表单项进行重置，将其值重置为初始值并移除校验结果</td><td>—</td></tr><tr><td>clearValidate</td><td>移除该表单项的校验结果</td><td>—</td></tr></tbody></table>", 1);

function formvue_type_template_id_7e105f7b_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", formvue_type_template_id_7e105f7b_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-biao-dan",
    content: "Form 表单",
    href: "#form-biao-dan",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [formvue_type_template_id_7e105f7b_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-biao-dan"
    })]),
    _: 1
  }), formvue_type_template_id_7e105f7b_hoisted_3, formvue_type_template_id_7e105f7b_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dian-xing-biao-dan",
    content: "典型表单",
    href: "#dian-xing-biao-dan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dian-xing-biao-dan"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_9, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), _hoisted_12]), _hoisted_13, _hoisted_14]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "xing-nei-biao-dan",
    content: "行内表单",
    href: "#xing-nei-biao-dan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xing-nei-biao-dan"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dui-qi-fang-shi",
    content: "对齐方式",
    href: "#dui-qi-fang-shi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dui-qi-fang-shi"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "biao-dan-yan-zheng",
    content: "表单验证",
    href: "#biao-dan-yan-zheng",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#biao-dan-yan-zheng"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createElementVNode"])("div", null, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_25, _hoisted_26, _hoisted_27, _hoisted_28, _hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      href: "https://github.com/yiminghe/async-validator"
    }, {
      default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30]),
      _: 1
    })])])]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zi-ding-yi-xiao-yan-gui-ze",
    content: "自定义校验规则",
    href: "#zi-ding-yi-xiao-yan-gui-ze",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zi-ding-yi-xiao-yan-gui-ze"
    })]),
    _: 1
  }), _hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_36, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/yiminghe/async-validator"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38]),
    _: 1
  }), _hoisted_39])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dong-tai-zeng-jian-biao-dan-xiang",
    content: "动态增减表单项",
    href: "#dong-tai-zeng-jian-biao-dan-xiang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dong-tai-zeng-jian-biao-dan-xiang"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_42]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shu-zi-lei-xing-yan-zheng",
    content: "数字类型验证",
    href: "#shu-zi-lei-xing-yan-zheng",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-zi-lei-xing-yan-zheng"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_45]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_44]),
    _: 1
  }), _hoisted_46, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "biao-dan-nei-zu-jian-chi-cun-kong-zhi",
    content: "表单内组件尺寸控制",
    href: "#biao-dan-nei-zu-jian-chi-cun-kong-zhi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#biao-dan-nei-zu-jian-chi-cun-kong-zhi"
    })]),
    _: 1
  }), _hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo7)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_50]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_49]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-attributes",
    content: "Form Attributes",
    href: "#form-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_51, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-attributes"
    })]),
    _: 1
  }), _hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-methods",
    content: "Form Methods",
    href: "#form-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-methods"
    })]),
    _: 1
  }), _hoisted_54, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-events",
    content: "Form Events",
    href: "#form-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_55, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-events"
    })]),
    _: 1
  }), _hoisted_56, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-item-attributes",
    content: "Form-Item Attributes",
    href: "#form-item-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_57, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-item-attributes"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("table", null, [_hoisted_58, Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [_hoisted_59, _hoisted_60, _hoisted_61, _hoisted_62, Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_63, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_64, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/yiminghe/async-validator"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_65]),
    _: 1
  })]), _hoisted_66, _hoisted_67, _hoisted_68]), _hoisted_69, _hoisted_70, _hoisted_71, _hoisted_72])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "rules",
    content: "Rules",
    href: "#rules",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_73, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#rules"
    })]),
    _: 1
  }), _hoisted_74, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-item-slot",
    content: "Form-Item Slot",
    href: "#form-item-slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_75, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-item-slot"
    })]),
    _: 1
  }), _hoisted_76, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-item-methods",
    content: "Form-Item Methods",
    href: "#form-item-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_77, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-item-methods"
    })]),
    _: 1
  }), _hoisted_78, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/form.md?vue&type=template&id=7e105f7b

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/form.md?vue&type=script&lang=ts

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

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("立即创建");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("取消");

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
          "label-width": "80px"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "活动名称"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.form.name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.form.name = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "活动区域"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_select, {
              modelValue: _ctx.form.region,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.form.region = $event),
              placeholder: "请选择活动区域"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_option, {
                label: "区域一",
                value: "shanghai"
              }), _createVNode(_component_el_option, {
                label: "区域二",
                value: "beijing"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "活动时间"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_col, {
              span: 11
            }, {
              default: _withCtx(() => [_createVNode(_component_el_date_picker, {
                type: "date",
                placeholder: "选择日期",
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
                placeholder: "选择时间",
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
            label: "即时配送"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_switch, {
              modelValue: _ctx.form.delivery,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.form.delivery = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "活动性质"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_checkbox_group, {
              modelValue: _ctx.form.type,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.form.type = $event)
            }, {
              default: _withCtx(() => [_createVNode(_component_el_checkbox, {
                label: "美食/餐厅线上活动",
                name: "type"
              }), _createVNode(_component_el_checkbox, {
                label: "地推活动",
                name: "type"
              }), _createVNode(_component_el_checkbox, {
                label: "线下主题活动",
                name: "type"
              }), _createVNode(_component_el_checkbox, {
                label: "单纯品牌曝光",
                name: "type"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "特殊资源"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_radio_group, {
              modelValue: _ctx.form.resource,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.form.resource = $event)
            }, {
              default: _withCtx(() => [_createVNode(_component_el_radio, {
                label: "线上品牌商赞助"
              }), _createVNode(_component_el_radio, {
                label: "线下场地免费"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "活动形式"
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("查询");

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
            label: "审批人"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.formInline.user,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.formInline.user = $event),
              placeholder: "审批人"
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "活动区域"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_select, {
              modelValue: _ctx.formInline.region,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.formInline.region = $event),
              placeholder: "活动区域"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_option, {
                label: "区域一",
                value: "shanghai"
              }), _createVNode(_component_el_option, {
                label: "区域二",
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("左对齐");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("右对齐");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("顶部对齐");

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
          "label-width": "80px",
          model: _ctx.formLabelAlign
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "名称"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.formLabelAlign.name,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.formLabelAlign.name = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "活动区域"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.formLabelAlign.region,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.formLabelAlign.region = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "活动形式"
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

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("立即创建");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("重置");

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
          "label-width": "100px",
          class: "demo-ruleForm"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "活动名称",
            prop: "name"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.ruleForm.name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.ruleForm.name = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "活动区域",
            prop: "region"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_select, {
              modelValue: _ctx.ruleForm.region,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.ruleForm.region = $event),
              placeholder: "请选择活动区域"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_option, {
                label: "区域一",
                value: "shanghai"
              }), _createVNode(_component_el_option, {
                label: "区域二",
                value: "beijing"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "活动时间",
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
                  placeholder: "选择日期",
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
                  placeholder: "选择时间",
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
            label: "即时配送",
            prop: "delivery"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_switch, {
              modelValue: _ctx.ruleForm.delivery,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.ruleForm.delivery = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "活动性质",
            prop: "type"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_checkbox_group, {
              modelValue: _ctx.ruleForm.type,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.ruleForm.type = $event)
            }, {
              default: _withCtx(() => [_createVNode(_component_el_checkbox, {
                label: "美食/餐厅线上活动",
                name: "type"
              }), _createVNode(_component_el_checkbox, {
                label: "地推活动",
                name: "type"
              }), _createVNode(_component_el_checkbox, {
                label: "线下主题活动",
                name: "type"
              }), _createVNode(_component_el_checkbox, {
                label: "单纯品牌曝光",
                name: "type"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "特殊资源",
            prop: "resource"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_radio_group, {
              modelValue: _ctx.ruleForm.resource,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.ruleForm.resource = $event)
            }, {
              default: _withCtx(() => [_createVNode(_component_el_radio, {
                label: "线上品牌商赞助"
              }), _createVNode(_component_el_radio, {
                label: "线下场地免费"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "活动形式",
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
                message: '请输入活动名称',
                trigger: 'blur'
              }, {
                min: 3,
                max: 5,
                message: '长度在 3 到 5 个字符',
                trigger: 'blur'
              }],
              region: [{
                required: true,
                message: '请选择活动区域',
                trigger: 'change'
              }],
              date1: [{
                type: 'date',
                required: true,
                message: '请选择日期',
                trigger: 'change'
              }],
              date2: [{
                type: 'date',
                required: true,
                message: '请选择时间',
                trigger: 'change'
              }],
              type: [{
                type: 'array',
                required: true,
                message: '请至少选择一个活动性质',
                trigger: 'change'
              }],
              resource: [{
                required: true,
                message: '请选择活动资源',
                trigger: 'change'
              }],
              desc: [{
                required: true,
                message: '请填写活动形式',
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("提交");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("重置");

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
          "label-width": "100px",
          class: "demo-ruleForm"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "密码",
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
            label: "确认密码",
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
            label: "年龄",
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
              return callback(new Error('年龄不能为空'));
            }

            setTimeout(() => {
              if (!Number.isInteger(value)) {
                callback(new Error('请输入数字值'));
              } else {
                if (value < 18) {
                  callback(new Error('必须年满18岁'));
                } else {
                  callback();
                }
              }
            }, 1000);
          };

          var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              if (this.ruleForm.checkPass !== '') {
                this.$refs.ruleForm.validateField('checkPass');
              }

              callback();
            }
          };

          var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
              callback(new Error('两次输入密码不一致!'));
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("删除");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("提交");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("新增域名");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("重置");

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_form, {
          model: _ctx.dynamicValidateForm,
          ref: "dynamicValidateForm",
          "label-width": "100px",
          class: "demo-dynamic"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            prop: "email",
            label: "邮箱",
            rules: [{
              required: true,
              message: '请输入邮箱地址',
              trigger: 'blur'
            }, {
              type: 'email',
              message: '请输入正确的邮箱地址',
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
              label: '域名' + index,
              key: domain.key,
              prop: 'domains.' + index + '.value',
              rules: {
                required: true,
                message: '域名不能为空',
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
              value: '',
              key: Date.now()
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("提交");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("重置");

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
            label: "年龄",
            prop: "age",
            rules: [{
              required: true,
              message: '年龄不能为空'
            }, {
              type: 'number',
              message: '年龄必须为数字值'
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

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("立即创建");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("取消");

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
          "label-width": "80px",
          size: "mini"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "活动名称"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.sizeForm.name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.sizeForm.name = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "活动区域"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_select, {
              modelValue: _ctx.sizeForm.region,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.sizeForm.region = $event),
              placeholder: "请选择活动区域"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_option, {
                label: "区域一",
                value: "shanghai"
              }), _createVNode(_component_el_option, {
                label: "区域二",
                value: "beijing"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "活动时间"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_col, {
              span: 11
            }, {
              default: _withCtx(() => [_createVNode(_component_el_date_picker, {
                type: "date",
                placeholder: "选择日期",
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
                placeholder: "选择时间",
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
            label: "活动性质"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_checkbox_group, {
              modelValue: _ctx.sizeForm.type,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.sizeForm.type = $event)
            }, {
              default: _withCtx(() => [_createVNode(_component_el_checkbox_button, {
                label: "美食/餐厅线上活动",
                name: "type"
              }), _createVNode(_component_el_checkbox_button, {
                label: "地推活动",
                name: "type"
              }), _createVNode(_component_el_checkbox_button, {
                label: "线下主题活动",
                name: "type"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "特殊资源"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_radio_group, {
              modelValue: _ctx.sizeForm.resource,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.sizeForm.resource = $event),
              size: "medium"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_radio, {
                border: "",
                label: "线上品牌商赞助"
              }), _createVNode(_component_el_radio, {
                border: "",
                label: "线下场地免费"
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
// CONCATENATED MODULE: ./website/docs/zh-CN/form.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/form.md



formvue_type_script_lang_ts.render = formvue_type_template_id_7e105f7b_render

/* harmony default export */ var zh_CN_form = __webpack_exports__["default"] = (formvue_type_script_lang_ts);

/***/ })

}]);