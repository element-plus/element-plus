import { reactive, toRefs } from 'vue'
import type { TransferProps, TransferPropsAlias } from '../transfer'

export const usePropsAlias = (props: TransferProps) => {
  const initProps = reactive<Required<TransferPropsAlias>>({
    label: 'label',
    key: 'key',
    disabled: 'disabled',
    ...props.props,
  })

  return toRefs(initProps)
}
