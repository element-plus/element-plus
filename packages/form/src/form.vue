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
import { defineComponent, provide, watch, ref, computed } from 'vue'
import objectAssign from '@element-plus/utils/merge'
import mitt from 'mitt'

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
  setup(props) {
    const formMitt: mitt.Emitter = mitt()

    const fields = ref([])
    const potentialLabelWidthArr = ref([])

    watch(
      () => props.rules,
      () => {
        fields.value.forEach(field => {
          field.removeValidateEvents()
          field.addValidateEvents()
        })

        if (props.validateOnRuleChange) {
          validate(() => ({}))
        }
      },
    )

    const autoLabelWidth = computed(() => {
      if (!potentialLabelWidthArr.value.length) return 0
      const max = Math.max(...potentialLabelWidthArr.value)
      return max ? `${max}px` : ''
    })

    formMitt.on('el.form.addField', field => {
      if (field) {
        fields.value.push(field)
      }
    })

    formMitt.on('el.form.removeField', field => {
      if (field.prop) {
        fields.value.splice(fields.value.indexOf(field), 1)
      }
    })

    const resetFields = () => {
      if (!props.model) {
        console.warn(
          '[Element Warn][Form]model is required for resetFields to work.',
        )
        return
      }
      fields.value.forEach(field => {
        field.resetField()
      })
    }
    const clearValidate = (props = []) => {
      const fds = props.length
        ? typeof props === 'string'
          ? fields.value.filter(field => props === field.prop)
          : fields.value.filter(field => props.indexOf(field.prop) > -1)
        : fields.value
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
      // 如果需要验证的fields为空，调用验证时立刻返回callback
      if (fields.value.length === 0 && callback) {
        callback(true)
      }
      let invalidFields = {}
      fields.value.forEach(field => {
        field.validate('', (message, field) => {
          if (message) {
            valid = false
          }
          invalidFields = objectAssign({}, invalidFields, field)
          if (
            typeof callback === 'function' &&
            ++count === fields.value.length
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
      const fds = fields.value.filter(field => props.indexOf(field.prop) !== -1)
      if (!fields.value.length) {
        console.warn('[Element Warn]please pass correct props!')
        return
      }

      fds.forEach(field => {
        field.validate('', cb)
      })
    }
    const getLabelWidthIndex = width => {
      const index = potentialLabelWidthArr.value.indexOf(width)
      // it's impossible
      if (index === -1) {
        throw new Error('[ElementForm]unpected width ' + width)
      }
      return index
    }
    const registerLabelWidth = (val, oldVal) => {
      if (val && oldVal) {
        const index = getLabelWidthIndex(oldVal)
        potentialLabelWidthArr.value.splice(index, 1, val)
      } else if (val) {
        potentialLabelWidthArr.value.push(val)
      }
    }
    const deregisterLabelWidth = val => {
      const index = getLabelWidthIndex(val)
      potentialLabelWidthArr.value.splice(index, 1)
    }

    provide('elForm', {
      name: 'elForm',
      formMitt,
      autoLabelWidth,
      ...props,
      deregisterLabelWidth,
      resetFields,
      clearValidate,
      validateField,
      registerLabelWidth,
    })

    return {
      resetFields,
      clearValidate,
      validateField,
      registerLabelWidth,
    }
  },
})
</script>
