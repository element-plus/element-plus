<template>
  <slot />
</template>

<script lang="ts" setup>
import { inject, onUnmounted, provide } from 'vue'
import { debugWarn } from '@element-plus/utils'
import { formContextKey } from './constants'
import { formSectionEmits } from './form-section'

import type {
  FormContext,
  FormItemContext,
  FormValidateCallback,
  FormValidationResult,
} from './types'

const COMPONENT_NAME = 'ElFormSection'
defineOptions({
  name: COMPONENT_NAME,
})

const emit = defineEmits(formSectionEmits)

const formContext = inject(formContextKey, undefined)

// Collected form fields within this section, reset on unmount
let sectionFields: FormItemContext[] = []
onUnmounted(() => {
  sectionFields = []
})

/**
 * Provide a proxied form context to child components.
 *
 * This intercepts the `addField` method to collect fields registered within
 * this section, while still delegating to the parent form for actual registration.
 * The `emit` method is also intercepted to bubble up validation events.
 */
if (formContext) {
  provide<FormContext>(formContextKey, {
    ...formContext,
    emit(...args) {
      // Emit on both section and parent form
      emit(...args)
      return formContext.emit(...args)
    },
    addField(field) {
      // Collect field reference for section-scoped operations
      sectionFields.push(field)
      // Delegate to parent form for actual registration
      return formContext.addField(field)
    },
  })
} else {
  debugWarn(COMPONENT_NAME, `${COMPONENT_NAME} must be used inside a Form.`)
}

/**
 * Get the parent form context, throwing an error if not available.
 */
const getFormContext = (): FormContext => {
  if (!formContext) {
    throw new Error(`${COMPONENT_NAME} must be used inside a Form.`)
  }
  return formContext
}

/**
 * Get unique prop strings for all collected fields.
 * Used to identify which fields to validate/reset/clear.
 */
const getSectionFieldProps = () => {
  const propStrings = sectionFields.map((field) => field.propString)
  return [...new Set(propStrings)]
}

const validate = async (
  callback?: FormValidateCallback
): FormValidationResult => {
  return getFormContext().validateField(getSectionFieldProps(), callback)
}

const resetFields = () => {
  return getFormContext().resetFields(getSectionFieldProps())
}

const clearValidate = () => {
  return getFormContext().clearValidate(getSectionFieldProps())
}

defineExpose({
  /**
   * @description Validate all fields within this section. Receives a callback or returns `Promise`.
   */
  validate,
  /**
   * @description Reset all fields within this section and remove validation result.
   */
  resetFields,
  /**
   * @description Clear validation message for all fields within this section.
   */
  clearValidate,
})
</script>
