import { Text, computed, inject, ref, useSlots } from 'vue'
import {
  useFormDisabled,
  useFormItem,
  useFormSize,
} from '@element-plus/components/form'
import { useGlobalConfig } from '@element-plus/components/config-provider'
import { useDeprecated } from '@element-plus/hooks'
import { buttonGroupContextKey } from './constants'

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
  const _size = useFormSize(computed(() => buttonGroupContext?.size))
  const _disabled = useFormDisabled()
  const _ref = ref<HTMLButtonElement>()
  const slots = useSlots()

  const _type = computed(() => props.type || buttonGroupContext?.type || '')
  const autoInsertSpace = computed(
    () => props.autoInsertSpace ?? globalConfig.value?.autoInsertSpace ?? false
  )

  const _props = computed(() => {
    if (props.tag === 'button') {
      return {
        ariaDisabled: _disabled.value || props.loading,
        disabled: _disabled.value || props.loading,
        autofocus: props.autofocus,
        type: props.nativeType,
      }
    }
    return {}
  })

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
    if (_disabled.value || props.loading) {
      evt.stopPropagation()
      return
    }
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
    _props,
    shouldAddSpace,
    handleClick,
  }
}
