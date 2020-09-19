<template>
  <div
    class="el-form-item"
    :class="[
      {
        'el-form-item--feedback': elForm && elForm.statusIcon,
        'is-error': validateState === 'error',
        'is-validating': validateState === 'validating',
        'is-success': validateState === 'success',
        'is-required': isRequired || required,
        'is-no-asterisk': elForm && elForm.hideRequiredAsterisk
      },
      sizeClass ? 'el-form-item--' + sizeClass : ''
    ]"
  >
    <label-wrap
      :is-auto-width="labelStyle && labelStyle.width === 'auto'"
      :update-all="form.labelWidth === 'auto'"
    >
      <label
        v-if="label || $slots.label"
        :for="labelFor"
        class="el-form-item__label"
        :style="labelStyle"
      >
        <slot name="label">{{ label + form.labelSuffix }}</slot>
      </label>
    </label-wrap>
    <div class="el-form-item__content" :style="contentStyle">
      <slot></slot>
      <transition name="el-zoom-in-top">
        <slot
          v-if="validateState === 'error' && showMessage && form.showMessage"
          name="error"
          :error="validateMessage"
        >
          <div
            class="el-form-item__error"
            :class="{
              'el-form-item__error--inline':
                typeof inlineMessage === 'boolean'
                  ? inlineMessage
                  : (elForm && elForm.inlineMessage) || false
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
  defineComponent,
  provide,
  inject,
  ref,
  watch,
  computed,
  nextTick,
  onMounted,
  onBeforeUnmount,
} from 'vue'
import AsyncValidator from 'async-validator'
import LabelWrap from './label-wrap.vue'
import { getPropByPath } from '@element-plus/utils/util'
import objectAssign from '@element-plus/utils/merge'
import mitt from 'mitt'

export default defineComponent({
  name: 'ElFormItem',
  componentName: 'ElFormItem',
  components: {
    LabelWrap,
  },
  props: {
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined,
    },
    rules: [Object, Array],
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
    size: String,
  },
  setup(props) {
    const formItemMitt: mitt.Emitter = mitt()

    const elForm = inject('elForm', {} as any)

    const validateState = ref('')
    const validateMessage = ref('')
    const validateDisabled = ref(false)
    // const validator = ref<any>({})
    const isNested = ref(false)
    const computedLabelWidth = ref('')

    //
    const initialValue = ref(null)

    watch(
      () => props.error,
      (val: any) => {
        validateMessage.value = val
        validateState.value = val ? 'error' : ''
      },
    )
    watch(
      () => props.validateStatus,
      (val: any) => {
        validateState.value = val
      },
    )

    const form = computed(() => elForm)
    const labelFor = computed(() => props.for || props.prop)
    const labelStyle = computed(() => {
      const ret: { width?: string; } = {}
      if (form.value.labelPosition === 'top') return ret
      const labelWidth = props.labelWidth || form.value.labelWidth
      if (labelWidth) {
        ret.width = labelWidth
      }
      return ret
    })
    const contentStyle = computed(() => {
      const ret: any = {}
      const label = props.label
      if (form.value.labelPosition === 'top' || form.value.inline) return ret
      if (!label && !props.labelWidth && isNested.value) return ret
      const labelWidth = props.labelWidth || form.value.labelWidth
      if (labelWidth === 'auto') {
        if (props.labelWidth === 'auto') {
          ret.marginLeft = computedLabelWidth.value
        } else if (form.value.labelWidth === 'auto') {
          ret.marginLeft = elForm.autoLabelWidth.value
        }
      } else {
        ret.marginLeft = labelWidth
      }
      return ret
    })
    const fieldValue = computed(() => {
      const model = form.value.model
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
      let rules = getRules()
      let isRequired = false

      if (rules && rules.length) {
        rules.every(rule => {
          if (rule.required) {
            isRequired = true
            return false
          }
          return true
        })
      }
      return isRequired
    })
    const _formSize = computed(() => elForm.size)
    const elFormItemSize = computed(() => props.size || _formSize.value)
    const sizeClass = computed(() => elFormItemSize.value)

    const validate = (trigger, callback?: any) => {
      validateDisabled.value = false
      const rules = getFilteredRule(trigger)
      if ((!rules || rules.length === 0) && props.required === undefined) {
        callback()
        return true
      }

      validateState.value = 'validating'

      const descriptor = {}
      if (rules && rules.length > 0) {
        rules.forEach(rule => {
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
          validateMessage.value = errors ? errors[0].message : ''

          callback(validateMessage.value, invalidFields)
          elForm &&
            elForm.emit(
              'validate',
              props.prop,
              !errors,
              validateMessage.value || null,
            )
        },
      )
    }
    const clearValidate = () => {
      validateState.value = ''
      validateMessage.value = ''
      validateDisabled.value = false
    }
    const resetField = () => {
      validateState.value = ''
      validateMessage.value = ''

      let model = form.value.model
      let value = fieldValue.value
      let path = props.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }

      let prop = getPropByPath(model, path, true)

      validateDisabled.value = true
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(initialValue.value)
      } else {
        prop.o[prop.k] = initialValue.value
      }

      // reset validateDisabled after onFieldChange triggered
      nextTick(() => {
        validateDisabled.value = false
      })

      // this.broadcast('ElTimeSelect', 'fieldReset', this.initialValue)
    }
    const getRules = () => {
      let formRules = form.value.rules
      const selfRules = props.rules
      const requiredRule =
        props.required !== undefined ? { required: !!props.required } : []

      const prop = getPropByPath(formRules, props.prop || '', true)
      formRules = formRules ? prop.o[props.prop || ''] || prop.v : []

      return [].concat(selfRules || formRules || []).concat(requiredRule)
    }
    const getFilteredRule = trigger => {
      const rules = getRules()

      return rules
        .filter(rule => {
          if (!rule.trigger || trigger === '') return true
          if (Array.isArray(rule.trigger)) {
            return rule.trigger.indexOf(trigger) > -1
          } else {
            return rule.trigger === trigger
          }
        })
        .map(rule => objectAssign({}, rule))
    }
    const onFieldBlur = () => {
      validate('blur')
    }
    const onFieldChange = () => {
      if (validateDisabled.value) {
        validateDisabled.value = false
        return
      }

      validate('change')
    }
    const updateComputedLabelWidth = width => {
      computedLabelWidth.value = width ? `${width}px` : ''
    }
    const addValidateEvents = () => {
      const rules = getRules()

      if (rules.length || props.required !== undefined) {
        formItemMitt.on('el.form.blur', onFieldBlur)
        formItemMitt.on('el.form.change', onFieldChange)
      }
    }
    const removeValidateEvents = () => {
      formItemMitt.off()
    }

    onMounted(() => {
      if (props.prop) {
        elForm.formMitt?.emit('el.form.addField', [
          inject('elFormItem', {} as any),
        ])

        let initValue = fieldValue.value
        if (Array.isArray(initValue)) {
          initValue = [].concat(initValue)
        }
        // Object.defineProperty(this, 'initialValue', {
        //   value: initialValue
        // })
        initialValue.value = initValue

        addValidateEvents()
      }
    })
    onBeforeUnmount(() => {
      // this.dispatch('ElForm', 'el.form.removeField', [this])
    })

    provide('elFormItem', {
      name: 'elFormItem',
      ...props,
      removeValidateEvents,
      addValidateEvents,
      resetField,
      clearValidate,
      validate,
      formItemMitt,
      updateComputedLabelWidth,
    })

    return {
      form,
      elForm,
      validateState,
      isRequired,
      sizeClass,
      labelStyle,
      contentStyle,
      validateMessage,
      labelFor,
    }
  },
})
</script>
