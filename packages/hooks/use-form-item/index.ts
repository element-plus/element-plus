import { inject, computed, getCurrentInstance } from 'vue'
import { elFormKey, elFormItemKey } from '@element-plus/tokens'
import { buildProp } from '@element-plus/utils/props'
import { useGlobalConfig } from '@element-plus/utils/util'

import type { ExtractPropTypes, Ref } from 'vue'

const sizes = ['', 'large', 'medium', 'small', 'mini'] as const

export const useFormItemProps = {
  size: buildProp({
    type: String,
    values: sizes,
    default: '',
  } as const),
  disabled: Boolean,
} as const

export type UseFormItemProps = ExtractPropTypes<typeof useFormItemProps>

export type LocalFallbacks = {
  size?: Ref<IUseFormItemProps['size']>
  disabled?: Ref<IUseFormItemProps['disabled']>
}

export const useFormItem = ({ size, disabled }: LocalFallbacks) => {
  const vm = getCurrentInstance()
  const $ELEMENT = useGlobalConfig()

  // vm.props is not reactive so we use the reactive one here.
  const props = vm.proxy.$props as IUseFormItemProps
  const form = inject(elFormKey, undefined)
  const formItem = inject(elFormItemKey, undefined)

  return {
    size: computed(() => {
      // TODO, fallback to default size like 'medium/large' instead of empty string
      return (
        props.size ||
        size?.value ||
        formItem?.size ||
        form?.size ||
        $ELEMENT.size ||
        ''
      )
    }),
    disabled: computed(() => {
      return (
        props.disabled === true || disabled?.value || form?.disabled || false
      )
    }),
  }
}
