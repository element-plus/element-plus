import { computed } from 'vue'
import { usePropsAlias } from './use-props-alias'

import type { TransferDataItem, TransferKey, TransferProps } from '../transfer'

export const useComputedData = (props: TransferProps) => {
  const propsAlias = usePropsAlias(props)

  const dataObj = computed(() =>
    props.data.reduce((o, cur) => (o[cur[propsAlias.value.key]] = cur) && o, {})
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
      return props.modelValue.reduce(
        (arr: TransferDataItem[], cur: TransferKey) => {
          const val = dataObj.value[cur]
          if (val) {
            arr.push(val)
          }
          return arr
        },
        []
      )
    }
  })

  return {
    sourceData,
    targetData,
  }
}
