<template>
  <form :class="formClasses">
    <slot />
  </form>
</template>

<script lang="ts" setup>
import { computed, provide, reactive, toRefs, watch } from 'vue'
import { debugWarn } from '@element-plus/utils'
import { formContextKey } from '@element-plus/tokens'
import { useNamespace, useSize } from '@element-plus/hooks'
import { formProps, formEmits } from './form'
import { useFormLabelWidth, filterFields } from './utils'
import type { ValidateFieldsError } from 'async-validator'
import type { FormItemContext, FormContext } from '@element-plus/tokens'
import type { FormValidateCallback } from './types'

const COMPONENT_NAME = 'ElForm'
defineOptions({
  name: 'ElForm',
})
const props = defineProps(formProps)
const emit = defineEmits(formEmits)

const fields: FormItemContext[] = []

const formSize = useSize()
const ns = useNamespace('form')
const formClasses = computed(() => {
  const { labelPosition, inline } = props
  return [
    ns.b(),
    ns.m(formSize.value),
    {
      [ns.m(`label-${labelPosition}`)]: labelPosition,
      [ns.m('inline')]: inline,
    },
  ]
})

const addField: FormContext['addField'] = (field) => {
  fields.push(field)
}

const removeField: FormContext['removeField'] = (field) => {
  if (!field.prop) {
    fields.splice(fields.indexOf(field), 1)
  }
}

const resetFields: FormContext['resetFields'] = (properties = []) => {
  if (!props.model) {
    debugWarn(COMPONENT_NAME, 'model is required for resetFields to work.')
    return
  }
  filterFields(fields, properties).forEach((field) => field.resetField())
}

const clearValidate: FormContext['clearValidate'] = (props = []) => {
  filterFields(fields, props).forEach((field) => field.clearValidate())
}

const validate = async (callback?: FormValidateCallback): Promise<void> =>
  validateField(undefined, callback)

const validateField: FormContext['validateField'] = async (
  properties = [],
  callback
) => {
  if (callback) {
    validate()
      .then(() => callback(true))
      .catch((fields: ValidateFieldsError) => callback(false, fields))
    return
  }

  const { model, scrollToError } = props

  if (!model) {
    debugWarn(COMPONENT_NAME, 'model is required for form validation!')
    return
  }
  if (fields.length === 0) {
    return
  }

  const filteredFields = filterFields(fields, properties)
  if (!filteredFields.length) {
    debugWarn(COMPONENT_NAME, 'please pass correct props!')
    return
  }

  let valid = true
  let invalidFields: ValidateFieldsError = {}
  let firstInvalidFields: ValidateFieldsError | undefined

  for (const field of filteredFields) {
    const fieldsError = await field
      .validate('')
      .catch((fields: ValidateFieldsError) => fields)

    if (fieldsError) {
      valid = false
      if (!firstInvalidFields) firstInvalidFields = fieldsError
    }

    invalidFields = { ...invalidFields, ...fieldsError }
  }

  if (!valid) {
    if (scrollToError) scrollToField(Object.keys(firstInvalidFields!)[0])
    return Promise.reject(invalidFields)
  }
}

const scrollToField = (prop: string) => {
  const field = filterFields(fields, prop)[0]
  if (field) {
    field.$el?.scrollIntoView()
  }
}

watch(
  () => props.rules,
  () => {
    if (props.validateOnRuleChange) validate()
  },
  { deep: true }
)

provide(
  formContextKey,
  reactive({
    ...toRefs(props),
    emit,

    resetFields,
    clearValidate,
    validateField,
    addField,
    removeField,

    ...useFormLabelWidth(),
  })
)

defineExpose({
  /** @description validate form */
  validate,
  /** @description validate form field */
  validateField,
  /** @description reset fields */
  resetFields,
  /** @description clear validation status */
  clearValidate,
  /** @description scroll to field */
  scrollToField,
})
</script>
