<template>
  <div ref="formItemRef" :class="formItemClasses">
    <form-label-wrap
      :is-auto-width="labelStyle.width === 'auto'"
      :update-all="formContext.labelWidth === 'auto'"
    >
      <label
        v-if="label || $slots.label"
        :for="labelFor"
        :class="ns.e('label')"
        :style="labelStyle"
      >
        <slot name="label" :label="currentLabel">
          {{ currentLabel }}
        </slot>
      </label>
    </form-label-wrap>

    <div :class="ns.e('content')" :style="contentStyle">
      <slot></slot>
      <transition :name="`${ns.namespace.value}-zoom-in-top`">
        <slot v-if="shouldShowError" name="error" :error="validateMessage">
          <div :class="validateClasses">
            {{ validateMessage }}
          </div>
        </slot>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
  watch,
  nextTick,
  useSlots,
} from 'vue'
import AsyncValidator from 'async-validator'
import { clone } from 'lodash-unified'
import {
  addUnit,
  ensureArray,
  getProp,
  isString,
  isBoolean,
  throwError,
} from '@element-plus/utils'
import { formItemContextKey, formContextKey } from '@element-plus/tokens'
import { useSize, useNamespace } from '@element-plus/hooks'
import { formItemProps } from './form-item'
import FormLabelWrap from './form-label-wrap'

import type { CSSProperties } from 'vue'
import type {
  RuleItem,
  ValidateError,
  ValidateFieldsError,
} from 'async-validator'
import type { FormItemContext } from '@element-plus/tokens'
import type { Arrayable } from '@element-plus/utils'
import type { FormItemValidateState } from './form-item'
import type { FormItemRule } from './types'

const COMPONENT_NAME = 'ElFormItem'
defineOptions({
  name: 'ElFormItem',
})
const props = defineProps(formItemProps)
const slots = useSlots()

const formContext = inject(formContextKey)
if (!formContext)
  throwError(COMPONENT_NAME, 'usage: <el-form><el-form-item /></el-form>')
const parentFormItemContext = inject(formItemContextKey, undefined)

const _size = useSize(undefined, { formItem: false })
const ns = useNamespace('form-item')

const validateState = ref<FormItemValidateState>('')
const validateMessage = ref('')
const formItemRef = ref<HTMLDivElement>()
let initialValue: any = undefined

const labelStyle = computed<CSSProperties>(() => {
  if (formContext.labelPosition === 'top') {
    return {}
  }

  const labelWidth = addUnit(props.labelWidth || formContext.labelWidth || '')
  if (labelWidth) return { width: labelWidth }
  return {}
})

const contentStyle = computed<CSSProperties>(() => {
  if (formContext.labelPosition === 'top' || formContext.inline) {
    return {}
  }
  if (!props.label && !props.labelWidth && isNested) {
    return {}
  }
  const labelWidth = addUnit(props.labelWidth || formContext.labelWidth || '')
  if (!props.label && !slots.label) {
    return { marginLeft: labelWidth }
  }
  return {}
})

const formItemClasses = computed(() => [
  ns.b(),
  ns.m(_size.value),
  ns.is('error', validateState.value === 'error'),
  ns.is('validating', validateState.value === 'validating'),
  ns.is('success', validateState.value === 'success'),
  ns.is('required', isRequired.value || props.required),
  ns.is('no-asterisk', formContext.hideRequiredAsterisk),
  { [ns.m('feedback')]: formContext.statusIcon },
])

const _inlineMessage = computed(() =>
  isBoolean(props.inlineMessage)
    ? props.inlineMessage
    : formContext.inlineMessage || false
)

const validateClasses = computed(() => [
  ns.e('error'),
  { [ns.em('error', 'inline')]: _inlineMessage.value },
])

const propString = computed(() => {
  if (!props.prop) return ''
  return isString(props.prop) ? props.prop : props.prop.join('.')
})

const labelFor = computed(() => props.for || propString.value)

const isNested = !!parentFormItemContext

const fieldValue = computed(() => {
  const model = formContext.model
  if (!model || !props.prop) {
    return
  }
  return getProp(model, props.prop).value
})

const _rules = computed(() => {
  const rules: FormItemRule[] = props.rules ? ensureArray(props.rules) : []

  const formRules = formContext.rules
  if (formRules && props.prop) {
    const _rules = getProp<Arrayable<FormItemRule> | undefined>(
      formRules,
      props.prop
    ).value
    if (_rules) {
      rules.push(...ensureArray(_rules))
    }
  }

  if (props.required !== undefined) {
    rules.push({ required: !!props.required })
  }

  return rules
})

const validateEnabled = computed(() => _rules.value.length > 0)

const getFilteredRule = (trigger: string) => {
  const rules = _rules.value
  return (
    rules
      .filter((rule) => {
        if (!rule.trigger || !trigger) return true
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.includes(trigger)
        } else {
          return rule.trigger === trigger
        }
      })
      // exclude trigger
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .map(({ trigger, ...rule }): RuleItem => rule)
  )
}

const isRequired = computed(() =>
  _rules.value.some((rule) => rule.required === true)
)

const shouldShowError = computed(
  () =>
    validateState.value === 'error' &&
    props.showMessage &&
    formContext.showMessage
)

const currentLabel = computed(
  () => `${props.label || ''}${formContext.labelSuffix || ''}`
)

const validate: FormItemContext['validate'] = async (trigger, callback) => {
  if (callback) {
    try {
      validate(trigger)
      callback(true)
    } catch (err) {
      callback(false, err as ValidateFieldsError)
    }

    validate(trigger)
      .then(() => callback(true))
      .catch((fields: ValidateFieldsError) => callback(false, fields))
    return
  }

  if (!validateEnabled.value) {
    return
  }
  const rules = getFilteredRule(trigger)
  if (rules.length === 0) {
    return
  }

  validateState.value = 'validating'

  const descriptor = {
    [propString.value]: rules,
  }
  const validator = new AsyncValidator(descriptor)
  const model = {
    [propString.value]: fieldValue.value,
  }

  interface ValidateFailure {
    errors: ValidateError[] | null
    fields: ValidateFieldsError
  }

  return validator
    .validate(model, { firstFields: true })
    .then(() => undefined)
    .catch((err: ValidateFailure) => {
      const { errors, fields } = err
      if (!errors || !fields) console.error(err)

      validateState.value = 'error'
      validateMessage.value = errors
        ? errors[0].message || `${props.prop} is required`
        : ''
      formContext.emit('validate', props.prop, !errors, validateMessage.value)
      return Promise.reject(fields)
    })
}

const clearValidate: FormItemContext['clearValidate'] = () => {
  validateState.value = ''
  validateMessage.value = ''
}

const resetField: FormItemContext['resetField'] = () => {
  const model = formContext.model
  if (!model || !props.prop) return

  getProp(model, props.prop).value = initialValue
  nextTick(() => clearValidate())
}

watch(
  () => props.error,
  (val) => {
    validateMessage.value = val || ''
    validateState.value = val ? 'error' : ''
  },
  { immediate: true }
)
watch(
  () => props.validateStatus,
  (val) => (validateState.value = val || '')
)

const context: FormItemContext = reactive({
  ...toRefs(props),
  $el: formItemRef,
  size: _size,
  validateState,
  resetField,
  clearValidate,
  validate,
})
provide(formItemContextKey, context)

onMounted(() => {
  if (props.prop) {
    formContext.addField(context)
    initialValue = clone(fieldValue.value)
  }
})
onBeforeUnmount(() => {
  formContext.removeField(context)
})

defineExpose({
  /** @description form item size */
  size: _size,
  /** @description validation message */
  validateMessage,
  /** @description validate form item */
  validate,
  /** @description clear validation status */
  clearValidate,
  /** @description reset field value */
  resetField,
})
</script>
