<template>
  <el-form
    ref="formRef"
    :model="form"
    :rules="rules"
    label-width="auto"
    style="max-width: 600px"
  >
    <el-tabs v-model="activeTab">
      <el-tab-pane name="personal">
        <template #label>
          <span :class="{ 'tab-error': isTabError(personalValidations) }">
            Personal Information
          </span>
        </template>
        <el-form-section
          ref="personalSectionRef"
          @validate="onPersonalValidate"
        >
          <el-form-item label="Name" prop="name">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="Age" prop="age">
            <el-input v-model.number="form.age" type="number" />
          </el-form-item>
        </el-form-section>
      </el-tab-pane>

      <el-tab-pane name="contact">
        <template #label>
          <span :class="{ 'tab-error': isTabError(contactValidations) }">
            Contact Information
          </span>
        </template>
        <el-form-section ref="contactSectionRef" @validate="onContactValidate">
          <el-form-item label="Email" prop="email">
            <el-input v-model="form.email" />
          </el-form-item>
          <el-form-item label="Phone" prop="phone">
            <el-input v-model="form.phone" />
          </el-form-item>
        </el-form-section>
      </el-tab-pane>
    </el-tabs>

    <el-form-item>
      <el-space>
        <el-button type="primary" @click="validateAll">
          Validate All
        </el-button>
        <el-button @click="validatePersonal">Validate Personal</el-button>
        <el-button @click="validateContact">Validate Contact</el-button>
        <el-button @click="resetAll">Reset All</el-button>
        <el-button @click="resetPersonal">Reset Personal</el-button>
        <el-button @click="resetContact">Reset Contact</el-button>
      </el-space>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type {
  FormInstance,
  FormItemProp,
  FormRules,
  FormSectionInstance,
} from 'element-plus'

interface FormData {
  name: string
  age: number | undefined
  email: string
  phone: string
}

const formRef = ref<FormInstance>()
const personalSectionRef = ref<FormSectionInstance>()
const contactSectionRef = ref<FormSectionInstance>()

const activeTab = ref('personal')
const personalValidations = reactive(new Map<string, boolean>())
const contactValidations = reactive(new Map<string, boolean>())
const isTabError = (validations: Map<string, boolean>) => {
  return Array.from(validations.values()).includes(false)
}

const form = reactive<FormData>({
  name: '',
  age: undefined,
  email: '',
  phone: '',
})

const rules = reactive<FormRules<FormData>>({
  name: [{ required: true, message: 'Please input name', trigger: 'blur' }],
  age: [{ required: true, message: 'Please input age', trigger: 'blur' }],
  email: [
    { required: true, message: 'Please input email', trigger: 'blur' },
    { type: 'email', message: 'Please input valid email', trigger: 'blur' },
  ],
  phone: [{ required: true, message: 'Please input phone', trigger: 'blur' }],
})

const onPersonalValidate = (_prop: FormItemProp, isValid: boolean) => {
  personalValidations.set(_prop.toString(), isValid)
}

const onContactValidate = (_prop: FormItemProp, isValid: boolean) => {
  contactValidations.set(_prop.toString(), isValid)
}

const validateAll = async () => {
  try {
    await formRef.value?.validate()
    console.log('All fields valid!')
  } catch (e) {
    console.log('Validation failed', e)
  }
}

const validatePersonal = async () => {
  try {
    await personalSectionRef.value?.validate()
    console.log('Personal section valid!')
  } catch (e) {
    console.log('Personal section validation failed', e)
  }
}

const validateContact = async () => {
  try {
    await contactSectionRef.value?.validate()
    console.log('Contact section valid!')
  } catch (e) {
    console.log('Contact section validation failed', e)
  }
}

const resetAll = () => {
  formRef.value?.resetFields()
  personalValidations.clear()
  contactValidations.clear()
}

const resetPersonal = () => {
  personalSectionRef.value?.resetFields()
  personalValidations.clear()
}

const resetContact = () => {
  contactSectionRef.value?.resetFields()
  contactValidations.clear()
}
</script>

<style scoped>
.tab-error {
  color: var(--el-color-danger);
}
</style>
