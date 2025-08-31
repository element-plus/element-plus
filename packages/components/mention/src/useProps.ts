import { computed } from 'vue'
import { get } from 'lodash-unified'

import type { MentionProps } from './mention'
import type { MentionOption } from './types'

export type MentionOptionProps = {
  value?: string
  label?: string
  disabled?: string
}

export const mentionDefaultProps: Required<MentionOptionProps> = {
  value: 'value',
  label: 'label',
  disabled: 'disabled',
}

export function useProps(props: Pick<MentionProps, 'props'>) {
  const aliasProps = computed(() => ({
    ...mentionDefaultProps,
    ...props.props,
  }))

  const getLabel = (option: MentionOption) =>
    get(option, aliasProps.value.label)
  const getValue = (option: MentionOption) =>
    get(option, aliasProps.value.value)
  const getDisabled = (option: MentionOption) =>
    get(option, aliasProps.value.disabled)

  return {
    aliasProps,
    getLabel,
    getValue,
    getDisabled,
  }
}
