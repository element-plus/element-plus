import { computed } from 'vue'

import type { TransferPropsAlias } from '../transfer'

export const usePropsAlias = (props: { props: TransferPropsAlias }) => {
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
