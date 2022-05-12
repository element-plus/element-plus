<template>
  <div
    :id="groupId"
    ref="radioGroupRef"
    :class="ns.b('group')"
    role="radiogroup"
    :aria-label="!isLabeledByFormItem ? label || 'radio-group' : undefined"
    :aria-labelledby="isLabeledByFormItem ? formItem.labelId : undefined"
    @keydown="handleKeydown"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue'
import { EVENT_CODE, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { radioGroupKey } from '@element-plus/tokens'
import {
  useFormItem,
  useFormItemInputId,
  useNamespace,
} from '@element-plus/hooks'
import { debugWarn } from '@element-plus/utils'
import { radioGroupEmits, radioGroupProps } from './radio-group'
import type { RadioGroupProps } from '..'

export default defineComponent({
  name: 'ElRadioGroup',
  props: radioGroupProps,
  emits: radioGroupEmits,

  setup(props, ctx) {
    const ns = useNamespace('radio')
    const radioGroupRef = ref<HTMLDivElement>()
    const { formItem } = useFormItem()
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(
      props,
      {
        formItemContext: formItem,
      }
    )

    const changeEvent = (value: RadioGroupProps['modelValue']) => {
      ctx.emit(UPDATE_MODEL_EVENT, value)
      nextTick(() => ctx.emit('change', value))
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (!radioGroupRef.value) return

      // 左右上下按键 可以在 radio 组内切换不同选项
      const target = e.target as HTMLInputElement
      const className =
        target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]'
      const radios =
        radioGroupRef.value.querySelectorAll<HTMLInputElement>(className)
      const length = radios.length
      const index = Array.from(radios).indexOf(target)
      const roleRadios =
        radioGroupRef.value.querySelectorAll<HTMLInputElement>('[role=radio]')

      let nextIndex: number | null = null
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
      const radios =
        radioGroupRef.value!.querySelectorAll<HTMLInputElement>('[type=radio]')
      const firstLabel = radios[0]
      if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
        firstLabel.tabIndex = 0
      }
    })

    provide(
      radioGroupKey,
      reactive({
        ...toRefs(props),
        changeEvent,
      })
    )

    watch(
      () => props.modelValue,
      () => {
        if (typeof formItem?.validate === 'function') {
          formItem?.validate('change').catch((err) => debugWarn(err))
        }
      }
    )

    return {
      ns,
      radioGroupRef,
      formItem,
      groupId,
      isLabeledByFormItem,
      handleKeydown,
    }
  },
})
</script>
