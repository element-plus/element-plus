<template>
  <div ref="formItemRef" class="el-form-item" :class="formItemClass">
    <LabelWrap
      :is-auto-width="labelStyle.width === 'auto'"
      :update-all="elForm.labelWidth === 'auto'"
    >
      <label
        v-if="label || $slots.label"
        :for="labelFor"
        class="el-form-item__label"
        :style="labelStyle"
      >
        <slot name="label" :label="label + elForm.labelSuffix">
          {{ label + elForm.labelSuffix }}
        </slot>
      </label>
    </LabelWrap>
    <div class="el-form-item__content" :style="contentStyle">
      <slot></slot>
      <transition name="el-zoom-in-top">
        <slot v-if="shouldShowError" name="error" :error="validateMessage">
          <div
            class="el-form-item__error"
            :class="{
              'el-form-item__error--inline':
                typeof inlineMessage === 'boolean'
                  ? inlineMessage
                  : elForm.inlineMessage || false,
            }"
          >
            {{ validateMessage }}
          </div>
        </slot>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue'
import { NOOP } from '@vue/shared'
import AsyncValidator from 'async-validator'
import {
  addUnit,
  getPropByPath,
  useGlobalConfig,
} from '@element-plus/utils/util'
import { isValidComponentSize } from '@element-plus/utils/validators'
import { elFormItemKey, elFormKey } from '@element-plus/tokens'
import LabelWrap from './label-wrap'

import type { PropType, CSSProperties } from 'vue'
import type { ComponentSize } from '@element-plus/utils/types'
import type { ElFormContext, ValidateFieldCallback } from '@element-plus/tokens'
import type { FormItemRule } from './form.type'

export default defineComponent({
  name: 'ElFormItem',
  componentName: 'ElFormItem',
  components: {
    LabelWrap,
  },
  props: {
    label: String,
    labelWidth: {
      type: [String, Number],
      default: '',
    },
    prop: String,
    required: {
      type: Boolean,
      default: undefined,
    },
    rules: [Object, Array] as PropType<FormItemRule | FormItemRule[]>,
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: '',
    },
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
  },
  setup(props, { slots }) {
    const $ELEMENT = useGlobalConfig()

    const elForm = inject(elFormKey, {} as ElFormContext)
    const validateState = ref('')
    const validateMessage = ref('')
    const isValidationEnabled = ref(false)

    const computedLabelWidth = ref('')

    const formItemRef = ref<HTMLDivElement>()

    const vm = getCurrentInstance()
    const isNested = computed(() => {
      let parent = vm.parent
      while (parent && parent.type.name !== 'ElForm') {
        if (parent.type.name === 'ElFormItem') {
          return true
        }
        parent = parent.parent
      }
      return false
    })

    let initialValue = undefined

    watch(
      () => props.error,
      (val) => {
        validateMessage.value = val
        validateState.value = val ? 'error' : ''
      },
      {
        immediate: true,
      }
    )
    watch(
      () => props.validateStatus,
      (val) => {
        validateState.value = val
      }
    )

    const labelFor = computed(() => props.for || props.prop)
    const labelStyle = computed(() => {
      const ret: CSSProperties = {}
      if (elForm.labelPosition === 'top') return ret
      const labelWidth = addUnit(props.labelWidth) || addUnit(elForm.labelWidth)
      if (labelWidth) {
        ret.width = labelWidth
      }
      return ret
    })
    const contentStyle = computed(() => {
      const ret: CSSProperties = {}
      if (elForm.labelPosition === 'top' || elForm.inline) {
        return ret
      }
      if (!props.label && !props.labelWidth && isNested.value) {
        return ret
      }
      const labelWidth = addUnit(props.labelWidth) || addUnit(elForm.labelWidth)
      if (!props.label && !slots.label) {
        ret.marginLeft = labelWidth
      }
      return ret
    })
    const fieldValue = computed(() => {
      const model = elForm.model
      if (!model || !props.prop) {
        return
      }

      let path = props.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }

      return getPropByPath(model, path, true).v
    })
    const isRequired = computed(() => {
      const rules = getRules()
      let required = false

      if (rules && rules.length) {
        rules.every((rule) => {
          if (rule.required) {
            required = true
            return false
          }
          return true
        })
      }
      return required
    })
    const elFormItemSize = computed(() => props.size || elForm.size)
    const sizeClass = computed<ComponentSize>(() => {
      return elFormItemSize.value || $ELEMENT.size
    })

    const validate = (
      trigger: string,
      callback: ValidateFieldCallback = NOOP
    ) => {
      if (!isValidationEnabled.value) {
        return
      }
      const rules = getFilteredRule(trigger)
      if ((!rules || rules.length === 0) && props.required === undefined) {
        callback()
        return
      }
      validateState.value = 'validating'
      const descriptor = {}
      if (rules && rules.length > 0) {
        rules.forEach((rule) => {
          delete rule.trigger
        })
      }
      descriptor[props.prop] = rules
      const validator = new AsyncValidator(descriptor)
      const model = {}
      model[props.prop] = fieldValue.value
      validator.validate(
        model,
        { firstFields: true },
        (errors, invalidFields) => {
          validateState.value = !errors ? 'success' : 'error'
          validateMessage.value = errors
            ? errors[0].message || `${props.prop} is required`
            : ''
          callback(validateMessage.value, invalidFields)
          elForm.emit?.(
            'validate',
            props.prop,
            !errors,
            validateMessage.value || null
          )
        }
      )
    }

    const clearValidate = () => {
      validateState.value = ''
      validateMessage.value = ''
    }
    const resetField = () => {
      validateState.value = ''
      validateMessage.value = ''
      const model = elForm.model
      const value = fieldValue.value
      let path = props.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }
      const prop = getPropByPath(model, path, true)
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(initialValue)
      } else {
        prop.o[prop.k] = initialValue
      }
    }

    const getRules = () => {
      const formRules = elForm.rules
      const selfRules = props.rules
      const requiredRule =
        props.required !== undefined ? { required: !!props.required } : []

      const prop = getPropByPath(formRules, props.prop || '', false)
      const normalizedRule = formRules ? prop.o[props.prop || ''] || prop.v : []

      return [].concat(selfRules || normalizedRule || []).concat(requiredRule)
    }
    const getFilteredRule = (trigger) => {
      const rules = getRules()

      return rules
        .filter((rule) => {
          if (!rule.trigger || trigger === '') return true
          if (Array.isArray(rule.trigger)) {
            return rule.trigger.indexOf(trigger) > -1
          } else {
            return rule.trigger === trigger
          }
        })
        .map((rule) => ({ ...rule }))
    }

    const evaluateValidationEnabled = () => {
      isValidationEnabled.value = !!getRules()?.length
    }

    const updateComputedLabelWidth = (width: string | number) => {
      computedLabelWidth.value = width ? `${width}px` : ''
    }

    const elFormItem = reactive({
      ...toRefs(props),
      size: sizeClass,
      validateState,
      $el: formItemRef,
      evaluateValidationEnabled,
      resetField,
      clearValidate,
      validate,
      updateComputedLabelWidth,
    })

    onMounted(() => {
      if (props.prop) {
        elForm?.addField(elFormItem)

        const value = fieldValue.value
        initialValue = Array.isArray(value) ? [...value] : value

        evaluateValidationEnabled()
      }
    })
    onBeforeUnmount(() => {
      elForm?.removeField(elFormItem)
    })

    provide(elFormItemKey, elFormItem)

    const formItemClass = computed(() => [
      {
        'el-form-item--feedback': elForm.statusIcon,
        'is-error': validateState.value === 'error',
        'is-validating': validateState.value === 'validating',
        'is-success': validateState.value === 'success',
        'is-required': isRequired.value || props.required,
        'is-no-asterisk': elForm.hideRequiredAsterisk,
      },
      sizeClass.value ? `el-form-item--${sizeClass.value}` : '',
    ])

    const shouldShowError = computed(() => {
      return (
        validateState.value === 'error' &&
        props.showMessage &&
        elForm.showMessage
      )
    })

    return {
      formItemRef,
      formItemClass,
      shouldShowError,
      elForm,
      labelStyle,
      contentStyle,
      validateMessage,
      labelFor,
      resetField,
      clearValidate,
    }
  },
})
</script>
