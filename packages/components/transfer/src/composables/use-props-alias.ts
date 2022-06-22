import { reactive, toRefs } from 'vue'
import type { TransferProps } from '../transfer'

export const usePropsAlias = (props: TransferProps) => {
  const initProps = reactive<Required<TransferProps['props']>>({
    label: 'label',
    key: 'key',
    disabled: 'disabled',
    ...props.props,
  })

  return toRefs(initProps)
}
