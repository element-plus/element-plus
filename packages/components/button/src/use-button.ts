import { Text, computed, inject, ref, useSlots } from 'vue'
import {
  useDeprecated,
  useDisabled,
  useFormItem,
  useGlobalConfig,
  useSize,
} from '@element-plus/hooks'
import { buttonGroupContextKey } from '@element-plus/tokens'

import type { SetupContext } from 'vue'
import type { ButtonEmits, ButtonProps } from './button'

export const useButton = (
  props: ButtonProps,
  emit: SetupContext<ButtonEmits>['emit']
) => {
  useDeprecated(
    {
      from: 'type.text',
      replacement: 'link',
      version: '3.0.0',
      scope: 'props',
      ref: 'https://element-plus.org/en-US/component/button.html#button-attributes',
    },
    computed(() => props.type === 'text')
  )

  const buttonGroupContext = inject(buttonGroupContextKey, undefined)
  const globalConfig = useGlobalConfig('button')
  const { form } = useFormItem()
  const _size = useSize(computed(() => buttonGroupContext?.size))
  const _disabled = useDisabled()
  const _ref = ref<HTMLButtonElement>()
  const slots = useSlots()

  const _type = computed(() => props.type || buttonGroupContext?.type || '')
  const autoInsertSpace = computed(
    () => props.autoInsertSpace ?? globalConfig.value?.autoInsertSpace ?? false
  )

  // add space between two characters in Chinese
  const shouldAddSpace = computed(() => {
    const defaultSlot = slots.default?.()
    if (autoInsertSpace.value && defaultSlot?.length === 1) {
      const slot = defaultSlot[0]
      if (slot?.type === Text) {
        const text = slot.children as string
        return /^\p{Unified_Ideograph}{2}$/u.test(text.trim())
      }
    }
    return false
  })

  const handleClick = (evt: MouseEvent) => {
    if (props.nativeType === 'reset') {
      form?.resetFields()
    }
    emit('click', evt)
  }

  return {
    _disabled,
    _size,
    _type,
    _ref,
    shouldAddSpace,
    handleClick,
  }
}
