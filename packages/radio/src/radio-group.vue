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
  provide, getCurrentInstance, onMounted, inject,
} from 'vue'

const keyCode = Object.freeze({
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
})


export default {
  name: 'ElRadioGroup',

  componentName: 'ElRadioGroup',

  props: {
    modelValue: {},
    size: String,
    fill: String,
    textColor: String,
    disabled: Boolean,
  },

  emits: ['update:modelValue', 'change'],

  setup(props, ctx) {
    const instance = getCurrentInstance()
    //todo: ELEMENT
    const elFormItem = inject('elFormItem')
    const ELEMENT = {}
    const _elFormItemSize = computed(() => {
      return (elFormItem || {} as any).elFormItemSize
    })
    const _elTag = computed(() => {
      return ((instance.vnode as any).data || {}).tag || 'div'
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
      ...props,
      modelValue,
    })

    const handleKeydown = (e) => { // 左右上下按键 可以在radio组内切换不同选项
      const target = e.target
      const className = target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]'
      const radios = instance.vnode.el.querySelectorAll(className)
      const length = radios.length
      const index = [].indexOf.call(radios, target)
      const roleRadios = instance.vnode.el.querySelectorAll('[role=radio]')
      switch (e.keyCode) {
        case keyCode.LEFT:
        case keyCode.UP:
          e.stopPropagation()
          e.preventDefault()
          if (index === 0) {
            roleRadios[length - 1].click()
            roleRadios[length - 1].focus()
          } else {
            roleRadios[index - 1].click()
            roleRadios[index - 1].focus()
          }
          break
        case keyCode.RIGHT:
        case keyCode.DOWN:
          if (index === (length - 1)) {
            e.stopPropagation()
            e.preventDefault()
            roleRadios[0].click()
            roleRadios[0].focus()
          } else {
            roleRadios[index + 1].click()
            roleRadios[index + 1].focus()
          }
          break
        default:
          break
      }
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

