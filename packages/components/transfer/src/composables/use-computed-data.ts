import { computed } from 'vue'
import { usePropsAlias } from './use-props-alias'

import type { TransferDataItem, TransferKey, TransferProps } from '../transfer'

export const useComputedData = <T extends TransferDataItem = TransferDataItem>(
  props: Required<
    Omit<
      TransferProps<T>,
      'filterPlaceholder' | 'filterMethod' | 'renderContent'
    >
  >
) => {
  const propsAlias = usePropsAlias(props)

  const dataObj = computed(() =>
    props.data.reduce<Record<string, T>>(
      (o, cur) => ((o[cur[propsAlias.value.key]] = cur), o),
      {}
    )
  )

  const sourceData = computed(() =>
    props.data.filter(
      (item) => !props.modelValue.includes(item[propsAlias.value.key])
    )
  )

  const targetData = computed(() => {
    if (props.targetOrder === 'original') {
      return props.data.filter((item) =>
        props.modelValue.includes(item[propsAlias.value.key])
      )
    } else {
      return props.modelValue.reduce((arr: T[], cur: TransferKey) => {
        const val = dataObj.value[cur]
        if (val) {
          arr.push(val)
        }
        return arr
      }, [])
    }
  })

  return {
    sourceData,
    targetData,
  }
}
