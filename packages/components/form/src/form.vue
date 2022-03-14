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
import type {
  FormItemContext,
  FormContext,
  ValidationResult,
} from '@element-plus/tokens'
import type { FormValidateCallback } from './types'
import type { FormItemProp } from './form-item'

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

const isValidatable = () => {
  const flag = !!props.model
  if (!flag) {
    debugWarn(COMPONENT_NAME, 'model is required for validate to work.')
  }
  return flag
}

const obtainValidateFields = (props: FormItemProp) => {
  if (!fields.length) return []
  const filteredFields = filterFields(fields, props)
  if (!filteredFields.length) {
    debugWarn(COMPONENT_NAME, 'please pass correct props!')
    return []
  }

  return filteredFields
}

const doValidate = async (
  props: FormItemProp = []
): Promise<Array<ValidateFieldsError> | boolean> => {
  if (!isValidatable()) return false

  const fields = obtainValidateFields(props)
  if (!fields.length) return true
  let validationErrors: ValidateFieldsError = {}
  for (const field of fields) {
    try {
      await field.validate('')
    } catch (fields) {
      validationErrors = {
        ...validationErrors,
        ...(fields as ValidateFieldsError),
      }
    }
  }

  if (!Object.keys(validationErrors).length) return true
  return Promise.reject(validationErrors)
}

const validate = async (callback?: FormValidateCallback): ValidationResult =>
  validateField(undefined, callback)

const validateField: FormContext['validateField'] = async (
  modelProps = [],
  callback
) => {
  try {
    const result = await doValidate(modelProps)
    // When result is false meaning that the fields are not validatable
    if (result === true) {
      callback?.(result)
      return result
    }
  } catch (e) {
    const invalidFields = e as ValidateFieldsError

    if (props.scrollToError) {
      scrollToField(Object.keys(invalidFields)[0])
    }
    callback?.(false, invalidFields)
    return Promise.reject(invalidFields)
  }
}

const scrollToField = (prop: FormItemProp) => {
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
