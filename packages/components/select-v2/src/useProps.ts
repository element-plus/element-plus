import { ref, watch } from 'vue'
import { get, isEqual } from 'lodash-unified'

import type { SelectV2Props } from './token'
import type { Option } from './select.types'

export interface Props {
  label?: string
  value?: string
  disabled?: string
  options?: string
}

export const defaultProps: Required<Props> = {
  label: 'label',
  value: 'value',
  disabled: 'disabled',
  options: 'options',
}

export function useProps(props: Pick<SelectV2Props, 'props'>) {
  const aliasProps = ref({ ...defaultProps, ...props.props })
  let cache = { ...props.props }

  watch(
    () => props.props,
    (val) => {
      // The props is an object, and its properties may be modified without changing the reference. In this case, the watch values before and after are equal. Here, we compare using the cached previous value.
      if (!isEqual(val, cache)) {
        aliasProps.value = { ...defaultProps, ...val }
        cache = { ...val }
      }
    },
    { deep: true }
  )

  const getLabel = (option: Option) => get(option, aliasProps.value.label)
  const getValue = (option: Option) => get(option, aliasProps.value.value)
  const getDisabled = (option: Option) => get(option, aliasProps.value.disabled)
  const getOptions = (option: Option) => get(option, aliasProps.value.options)

  return {
    aliasProps,
    getLabel,
    getValue,
    getDisabled,
    getOptions,
  }
}
