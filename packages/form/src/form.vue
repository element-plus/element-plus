<template>
  <form
    class="el-form"
    :class="[
      labelPosition ? 'el-form--label-' + labelPosition : '',
      { 'el-form--inline': inline }
    ]"
  >
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive, ref, toRefs, watch } from 'vue'
import mitt from 'mitt'
import { elFormEvents, elFormKey } from './token'
import { FieldErrorList } from 'async-validator'
import type { FormRulesMap } from './form.type'

import type { PropType } from 'vue'
import type { ElFormItemContext as FormItemCtx, ValidateFieldCallback } from './token'

function useFormLabelWidth() {
  const potentialLabelWidthArr = ref([])
  const autoLabelWidth = computed(() => {
    if (!potentialLabelWidthArr.value.length) return '0'
    const max = Math.max(...potentialLabelWidthArr.value)
    return max ? `${max}px` : ''
  })

  function getLabelWidthIndex(width: number) {
    const index = potentialLabelWidthArr.value.indexOf(width)
    if (index === -1) {
      console.warn('[Element Warn][ElementForm]unexpected width ' + width)
    }
    return index
  }

  function registerLabelWidth(val: number, oldVal: number) {
    if (val && oldVal) {
      const index = getLabelWidthIndex(oldVal)
      potentialLabelWidthArr.value.splice(index, 1, val)
    } else if (val) {
      potentialLabelWidthArr.value.push(val)
    }
  }

  function deregisterLabelWidth(val: number) {
    const index = getLabelWidthIndex(val)
    index > -1 && potentialLabelWidthArr.value.splice(index, 1)
  }

  return {
    autoLabelWidth,
    registerLabelWidth,
    deregisterLabelWidth,
  }
}

interface Callback {
  (isValid?: boolean, invalidFields?: FieldErrorList): void
}

export default defineComponent({
  name: 'ElForm',
  props: {
    model: Object,
    rules: Object as PropType<FormRulesMap>,
    labelPosition: String,
    labelWidth: {
      type: [String, Number],
      default: '',
    },
    labelSuffix: {
      type: String,
      default: '',
    },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: String as PropType<ComponentSize>,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true,
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['validate'],
  setup(props, { emit }) {
    const formMitt = mitt()

    const fields: FormItemCtx[] = []

    watch(
      () => props.rules,
      () => {
        fields.forEach(field => {
          field.removeValidateEvents()
          field.addValidateEvents()
        })

        if (props.validateOnRuleChange) {
          validate(() => ({}))
        }
      },
    )

    formMitt.on<FormItemCtx>(elFormEvents.addField, field => {
      if (field) {
        fields.push(field)
      }
    })

    formMitt.on<FormItemCtx>(elFormEvents.removeField, field => {
      if (field.prop) {
        fields.splice(fields.indexOf(field), 1)
      }
    })

    const resetFields = () => {
      if (!props.model) {
        console.warn(
          '[Element Warn][Form]model is required for resetFields to work.',
        )
        return
      }
      fields.forEach(field => {
        field.resetField()
      })
    }

    const clearValidate = (props: string | string[] = []) => {
      const fds = props.length
        ? typeof props === 'string'
          ? fields.filter(field => props === field.prop)
          : fields.filter(field => props.indexOf(field.prop) > -1)
        : fields
      fds.forEach(field => {
        field.clearValidate()
      })
    }

    const validate = (callback?: Callback) => {
      if (!props.model) {
        console.warn(
          '[Element Warn][Form]model is required for validate to work!',
        )
        return
      }

      let promise: Promise<boolean> | undefined
      // if no callback, return promise
      if (typeof callback !== 'function') {
        promise = new Promise((resolve, reject) => {
          callback = function (valid, invalidFields) {
            if (valid) {
              resolve(true)
            } else {
              reject(invalidFields)
            }
          }
        })
      }

      if (fields.length === 0) {
        callback(true)
      }
      let valid = true
      let count = 0
      let invalidFields = {}
      for (const field of fields) {
        field.validate('', (message, field) => {
          if (message) {
            valid = false
          }
          invalidFields = { ...invalidFields, ...field }
          if (++count === fields.length) {
            callback(valid, invalidFields)
          }
        })
      }
      return promise
    }

    const validateField = (props: string | string[], cb: ValidateFieldCallback) => {
      props = [].concat(props)
      const fds = fields.filter(field => props.indexOf(field.prop) !== -1)
      if (!fields.length) {
        console.warn('[Element Warn]please pass correct props!')
        return
      }

      fds.forEach(field => {
        field.validate('', cb)
      })
    }

    const elForm = reactive({
      formMitt,
      ...toRefs(props),
      resetFields,
      clearValidate,
      validateField,
      emit,
      ...useFormLabelWidth(),
    })

    provide(elFormKey, elForm)

    return {
      validate, // export
      resetFields,
      clearValidate,
      validateField,
    }
  },
})
</script>
