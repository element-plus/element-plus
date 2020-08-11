<template>
  <component
    :is="_elTag"
    class="el-radio-group"
    role="radiogroup"
    @keydown="handleKeydown"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import {
  nextTick,
  computed,
  provide,
  getCurrentInstance,
  onMounted,
  inject,
} from 'vue'
import { eventKeys } from '@element-plus/utils/aria'

export default {
  name: 'ElRadioGroup',

  componentName: 'ElRadioGroup',

  props: {
    modelValue: {
      type: [Boolean, String, Number],
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    fill: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: '',
    },
    disabled: Boolean,
  },

  emits: ['update:modelValue', 'change'],

  setup(props, ctx) {
    const instance = getCurrentInstance()
    //todo: ELEMENT
    const ELEMENT = {}
    const elFormItem = inject('elFormItem', {})
    const _elFormItemSize = computed(() => {
      return (elFormItem || {} as any).elFormItemSize
    })
    const _elTag = computed(() => {
      return (instance.vnode as any).data?.tag || 'div'
    })
    const radioGroupSize = computed(() => {
      return props.size || _elFormItemSize || (ELEMENT || {} as any).size
    })

    const modelValue = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        changeEvent(val)
      },
    })

    // methods
    const changeEvent = value => {
      ctx.emit('update:modelValue', value)
      nextTick(() => {
        ctx.emit('change', value)
      })
    }

    provide('RadioGroup', {
      name: 'ElRadioGroup',
      changeEvent: changeEvent,
      radioGroupSize: radioGroupSize,
      fill: props.fill,
      textColor: props.textColor,
      disabled: props.disabled,
      modelValue,
    })

    const handleKeydown = (e) => { // 左右上下按键 可以在radio组内切换不同选项
      const target = e.target
      const className = target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]'
      const radios = instance.vnode.el.querySelectorAll(className)
      const length = radios.length
      const index = [].indexOf.call(radios, target)
      const roleRadios = instance.vnode.el.querySelectorAll('[role=radio]')
      let nextIndex = null
      switch (e.keyCode) {
        case eventKeys.left:
        case eventKeys.up:
          e.stopPropagation()
          e.preventDefault()
          nextIndex = index === 0 ? length - 1 : index - 1
          break
        case eventKeys.right:
        case eventKeys.down:
          e.stopPropagation()
          e.preventDefault()
          nextIndex = (index === (length - 1)) ? 0 : index + 1
          break
        default:
          break
      }
      if (nextIndex === null) return
      roleRadios[nextIndex].click()
      roleRadios[nextIndex].focus()
    }

    onMounted(() => {
      const radios = instance.vnode.el.querySelectorAll('[type=radio]')
      const firstLabel = instance.vnode.el.querySelectorAll('[role=radio]')[0]
      if (![].some.call(radios, radio => radio.checked) && firstLabel) {
        firstLabel.tabIndex = 0
      }
    })
    return {
      handleKeydown,
      radioGroupSize,
      _elTag,
    }
  },
}
</script>

