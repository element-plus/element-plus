<template>
  <div
    ref="radioGroup"
    class="el-radio-group"
    role="radiogroup"
    @keydown="handleKeydown"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  computed,
  provide,
  onMounted,
  inject,
  ref,
  reactive,
  toRefs,
  watch,
} from 'vue'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { isValidComponentSize } from '@element-plus/utils/validators'
import { elFormItemKey } from '@element-plus/tokens'
import radioGroupKey from './token'

import type { PropType } from 'vue'
import type { ElFormItemContext } from '@element-plus/tokens'
import type { ComponentSize } from '@element-plus/utils/types'

export default defineComponent({
  name: 'ElRadioGroup',

  componentName: 'ElRadioGroup',

  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: '',
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
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

  emits: [UPDATE_MODEL_EVENT, 'change'],

  setup(props, ctx) {
    const radioGroup = ref(null)

    const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)

    const radioGroupSize = computed<ComponentSize>(() => {
      return props.size || elFormItem.size
    })

    // methods
    const changeEvent = (value) => {
      ctx.emit(UPDATE_MODEL_EVENT, value)
      nextTick(() => {
        ctx.emit('change', value)
      })
    }

    provide(
      radioGroupKey,
      reactive({
        name: 'ElRadioGroup',
        ...toRefs(props),
        radioGroupSize,
        changeEvent,
      } as any)
    )

    watch(
      () => props.modelValue,
      () => {
        elFormItem.validate?.('change')
      }
    )

    const handleKeydown = (e) => {
      // 左右上下按键 可以在radio组内切换不同选项
      const target = e.target
      const className =
        target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]'
      const radios = radioGroup.value.querySelectorAll(className)
      const length = radios.length
      const index = Array.from(radios).indexOf(target)
      const roleRadios = radioGroup.value.querySelectorAll('[role=radio]')
      let nextIndex = null
      switch (e.code) {
        case EVENT_CODE.left:
        case EVENT_CODE.up:
          e.stopPropagation()
          e.preventDefault()
          nextIndex = index === 0 ? length - 1 : index - 1
          break
        case EVENT_CODE.right:
        case EVENT_CODE.down:
          e.stopPropagation()
          e.preventDefault()
          nextIndex = index === length - 1 ? 0 : index + 1
          break
        default:
          break
      }
      if (nextIndex === null) return
      roleRadios[nextIndex].click()
      roleRadios[nextIndex].focus()
    }

    onMounted(() => {
      const radios = radioGroup.value.querySelectorAll('[type=radio]')
      const firstLabel = radios[0]
      if (
        !Array.from(radios).some((radio: HTMLInputElement) => radio.checked) &&
        firstLabel
      ) {
        firstLabel.tabIndex = 0
      }
    })
    return {
      handleKeydown,
      radioGroupSize,
      radioGroup,
    }
  },
})
</script>
