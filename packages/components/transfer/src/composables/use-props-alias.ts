import { computed } from 'vue'

import type { TransferProps, TransferPropsAlias } from '../transfer'

export const usePropsAlias = (props: TransferProps) => {
  const initProps: Required<TransferPropsAlias> = {
    label: 'label',
    key: 'key',
    disabled: 'disabled',
  }

  return computed(() => ({
    ...initProps,
    ...props.props,
  }))
}
