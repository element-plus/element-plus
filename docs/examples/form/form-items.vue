<template>
  <el-form
    ref="dynamicValidateForm"
    :model="dynamicValidateForm"
    label-width="120px"
    class="demo-dynamic"
  >
    <el-form-item
      prop="email"
      label="Email"
      :rules="[
        {
          required: true,
          message: 'Please input email address',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change'],
        },
      ]"
    >
      <el-input v-model="dynamicValidateForm.email"></el-input>
    </el-form-item>
    <el-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :key="domain.key"
      :label="'Domain' + index"
      :prop="'domains.' + index + '.value'"
      :rules="{
        required: true,
        message: 'domain can not be null',
        trigger: 'blur',
      }"
    >
      <el-input v-model="domain.value"></el-input
      ><el-button @click.prevent="removeDomain(domain)">Delete</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('dynamicValidateForm')"
        >Submit</el-button
      >
      <el-button @click="addDomain">New domain</el-button>
      <el-button @click="resetForm('dynamicValidateForm')">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            key: 1,
            value: '',
          },
        ],
        email: '',
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    removeDomain(item) {
      const index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        key: Date.now(),
        value: '',
      })
    },
  },
}
</script>
