import { computed } from 'vue'
import { get } from 'lodash-unified'

import type { SelectV2Props } from './token'
import type { OptionV2 } from './select.types'

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
  const aliasProps = computed(() => ({ ...defaultProps, ...props.props }))

  const getLabel = (option: OptionV2) => get(option, aliasProps.value.label)
  const getValue = (option: OptionV2) => get(option, aliasProps.value.value)
  const getDisabled = (option: OptionV2) =>
    get(option, aliasProps.value.disabled)
  const getOptions = (option: OptionV2) => get(option, aliasProps.value.options)

  return {
    aliasProps,
    getLabel,
    getValue,
    getDisabled,
    getOptions,
  }
}
