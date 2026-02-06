<template>
  <form ref="formRef" :class="formClasses">
    <slot />
  </form>
</template>

<script lang="ts" setup>
import { computed, provide, reactive, ref, toRefs, watch } from 'vue'
import {
  debugWarn,
  ensureArray,
  getProp,
  isArray,
  isFunction,
} from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { useFormSize } from './hooks'
import { formContextKey } from './constants'
import { formEmits } from './form'
import { filterFields, useFormLabelWidth } from './utils'

import type { ValidateFieldsError } from 'async-validator'
import type { Arrayable } from '@element-plus/utils'
import type { FormProps } from './form'
import type {
  FormContext,
  FormItemContext,
  FormValidateCallback,
  FormValidationResult,
} from './types'
import type { FormItemProp } from './form-item'

const COMPONENT_NAME = 'ElForm'
defineOptions({
  name: COMPONENT_NAME,
})
const props = withDefaults(defineProps<FormProps>(), {
  labelPosition: 'right',
  requireAsteriskPosition: 'left',
  labelWidth: '',
  labelSuffix: '',
  showMessage: true,
  validateOnRuleChange: true,
  scrollIntoViewOptions: true,
})
const emit = defineEmits(formEmits)

const formRef = ref<HTMLElement>()
const fields = reactive<FormItemContext[]>([])
const removedFields = new Map<string, FormItemContext>()

const formSize = useFormSize()
const ns = useNamespace('form')
const formClasses = computed(() => {
  const { labelPosition, inline } = props
  return [
    ns.b(),
    ns.m(formSize.value || 'default'),
    {
      [ns.m(`label-${labelPosition}`)]: labelPosition,
      [ns.m('inline')]: inline,
    },
  ]
})

const getField: FormContext['getField'] = (prop) => {
  return filterFields(fields, [prop])[0]
}

const addField: FormContext['addField'] = (field) => {
  fields.push(field)
}

const removeField: FormContext['removeField'] = (field) => {
  if (field.prop) {
    fields.splice(fields.indexOf(field), 1)
    // When field unmounts, propString remains unchanged, so it can be used as the key
    removedFields.set(field.propString, field)
  }
}

const setInitialValues: FormContext['setInitialValues'] = (initModel) => {
  if (!props.model) {
    debugWarn(COMPONENT_NAME, 'model is required for setInitialValues to work.')
    return
  }
  if (!initModel) {
    debugWarn(
      COMPONENT_NAME,
      'initModel is required for setInitialValues to work.'
    )
    return
  }

  const eachCallback = (field: FormItemContext) => {
    if (field.prop) {
      field.setInitialValue(getProp(initModel, field.prop).value)
    }
  }
  removedFields.forEach(eachCallback)
  fields.forEach(eachCallback)
}

const resetFields: FormContext['resetFields'] = (properties = []) => {
  if (!props.model) {
    debugWarn(COMPONENT_NAME, 'model is required for resetFields to work.')
    return
  }

  const isSpecificProps = properties.length > 0
  const propStrings = ensureArray(properties).map((prop) =>
    isArray(prop) ? prop.join('.') : prop
  )

  // First reset the existing or specified fields
  filterFields(fields, propStrings, true).forEach((field) => {
    field.resetField()

    // The key in removedFields is fixed at unmount time, so if the same propString exists in fields,
    // it means the field is duplicated and we need to remove the cache from removedFields
    removedFields.delete(field.propString)

    // If propStrings are provided, remove the already reset field from propStrings
    if (isSpecificProps) {
      const index = propStrings.indexOf(field.propString)
      if (index > -1) {
        propStrings.splice(index, 1)
      }
    }
  })

  // If propStrings are provided, search for fields not yet reset in removedFields,
  // otherwise reset all removedFields
  if (isSpecificProps) {
    // propStrings.length > 0 means there are fields not yet reset, otherwise all fields have been reset
    if (propStrings.length > 0) {
      filterFields([...removedFields.values()], propStrings, true).forEach(
        (field) => field.resetField()
      )
    }
  } else {
    removedFields.forEach((field) => field.resetField())
  }
}

const clearValidate: FormContext['clearValidate'] = (props = []) => {
  filterFields(fields, props).forEach((field) => field.clearValidate())
}

const isValidatable = computed(() => {
  const hasModel = !!props.model
  if (!hasModel) {
    debugWarn(COMPONENT_NAME, 'model is required for validate to work.')
  }
  return hasModel
})

const obtainValidateFields = (props: Arrayable<FormItemProp>) => {
  if (fields.length === 0) return []

  const filteredFields = filterFields(fields, props)
  if (!filteredFields.length) {
    debugWarn(COMPONENT_NAME, 'please pass correct props!')
    return []
  }
  return filteredFields
}

const validate = async (
  callback?: FormValidateCallback
): FormValidationResult => validateField(undefined, callback)

const doValidateField = async (
  props: Arrayable<FormItemProp> = []
): Promise<boolean> => {
  if (!isValidatable.value) return false

  const fields = obtainValidateFields(props)
  if (fields.length === 0) return true

  let validationErrors: ValidateFieldsError = {}
  for (const field of fields) {
    try {
      await field.validate('')
      if (field.validateState === 'error' && !field.error) field.resetField()
    } catch (fields) {
      validationErrors = {
        ...validationErrors,
        ...(fields as ValidateFieldsError),
      }
    }
  }

  if (Object.keys(validationErrors).length === 0) return true
  return Promise.reject(validationErrors)
}

const validateField: FormContext['validateField'] = async (
  modelProps = [],
  callback
) => {
  let result = false
  const shouldThrow = !isFunction(callback)
  try {
    result = await doValidateField(modelProps)
    // When result is false meaning that the fields are not validatable
    if (result === true) {
      await callback?.(result)
    }
    return result
  } catch (e) {
    if (e instanceof Error) throw e

    const invalidFields = e as ValidateFieldsError

    if (props.scrollToError) {
      // form-item may be dynamically rendered based on the judgment conditions, and the order in invalidFields is uncertain.
      // Therefore, the first form field with an error is determined by directly looking for the rendered element.
      if (formRef.value) {
        const formItem = formRef.value.querySelector(`.${ns.b()}-item.is-error`)
        formItem?.scrollIntoView(props.scrollIntoViewOptions)
      }
    }
    !result && (await callback?.(false, invalidFields))
    return shouldThrow && Promise.reject(invalidFields)
  }
}

const scrollToField = (prop: FormItemProp) => {
  const field = getField(prop)
  if (field) {
    field.$el?.scrollIntoView(props.scrollIntoViewOptions)
  }
}

watch(
  () => props.rules,
  () => {
    if (props.validateOnRuleChange) {
      validate().catch((err) => debugWarn(err))
    }
  },
  { deep: true, flush: 'post' }
)

provide(
  formContextKey,
  reactive({
    ...toRefs(props),
    emit,

    resetFields,
    clearValidate,
    validateField,
    getField,
    addField,
    removeField,
    setInitialValues,

    ...useFormLabelWidth(),
  })
)

defineExpose({
  /**
   * @description Validate the whole form. Receives a callback or returns `Promise`.
   */
  validate,
  /**
   * @description Validate specified fields.
   */
  validateField,
  /**
   * @description Reset specified fields and remove validation result.
   */
  resetFields,
  /**
   * @description Clear validation message for specified fields.
   */
  clearValidate,
  /**
   * @description Scroll to the specified fields.
   */
  scrollToField,
  /**
   * @description Get a field context.
   */
  getField,
  /**
   * @description All fields context.
   */
  fields,
  /**
   * @description Set initial values for form fields. When `resetFields` is called, fields will reset to these values. Only fields present in `initModel` will be updated.
   */
  setInitialValues,
})
</script>
