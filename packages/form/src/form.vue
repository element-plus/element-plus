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
import {
  defineComponent, provide, watch,
  computed, reactive, toRefs,
} from 'vue'
import mitt from 'mitt'
import {
  elFormKey, ElFormItemContext as FormItemCtx,
  elFormEvents,
} from './token'
import { Form } from '../../../types'

export default defineComponent({
  name: 'ElForm',
  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: String,
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
    size: String,
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
  setup(props, { emit }) {
    const formMitt = mitt()

    const fields: FormItemCtx[] = []
    const potentialLabelWidthArr = []

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

    const autoLabelWidth = computed(() => {
      if (!potentialLabelWidthArr.length) return '0'
      const max = Math.max(...potentialLabelWidthArr)
      return max ? `${max}px` : ''
    })

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

    const clearValidate = (props = []) => {
      const fds = props.length
        ? typeof props === 'string'
          ? fields.filter(field => props === field.prop)
          : fields.filter(field => props.indexOf(field.prop) > -1)
        : fields
      fds.forEach(field => {
        field.clearValidate()
      })
    }

    const validate = callback => {
      if (!props.model) {
        console.warn(
          '[Element Warn][Form]model is required for validate to work!',
        )
        return
      }

      let promise
      // if no callback, return promise
      if (typeof callback !== 'function' && window.Promise) {
        promise = new window.Promise((resolve, reject) => {
          callback = function(valid) {
            valid ? resolve(valid) : reject(valid)
          }
        })
      }

      let valid = true
      let count = 0
      if (fields.length === 0 && callback) {
        callback(true)
      }
      let invalidFields = {}
      fields.forEach(field => {
        field.validate('', (message, field) => {
          if (message) {
            valid = false
          }
          invalidFields = { ...invalidFields, ...field }
          if (
            typeof callback === 'function' &&
            ++count === fields.length
          ) {
            callback(valid, invalidFields)
          }
        })
      })

      if (promise) {
        return promise
      }
    }
    const validateField = (props, cb) => {
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
    const getLabelWidthIndex = width => {
      const index = potentialLabelWidthArr.indexOf(width)
      // it's impossible
      if (index === -1) {
        throw new Error('[ElementForm]unpected width ' + width)
      }
      return index
    }

    const registerLabelWidth = (val, oldVal) => {
      if (val && oldVal) {
        const index = getLabelWidthIndex(oldVal)
        potentialLabelWidthArr.splice(index, 1, val)
      } else if (val) {
        potentialLabelWidthArr.push(val)
      }
    }
    const deregisterLabelWidth = val => {
      const index = getLabelWidthIndex(val)
      potentialLabelWidthArr.splice(index, 1)
    }

    const elForm = reactive({
      name: 'elForm',
      formMitt,
      autoLabelWidth,
      ...toRefs(props),
      deregisterLabelWidth,
      resetFields,
      clearValidate,
      validateField,
      registerLabelWidth,
      emit,
    })

    provide(elFormKey, elForm)

    return {
      validate, // export
      resetFields,
      clearValidate,
      validateField,
      registerLabelWidth,
    }
  },
})
</script>
