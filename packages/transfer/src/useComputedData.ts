import { computed } from 'vue'
import { TransferProps } from './transfer'

export const useComputedData = (props: TransferProps) => {
  const propsKey = computed(() => props.props.key)

  const dataObj = computed(() => {
    return props.data.reduce((o, cur) => (o[cur[propsKey.value]] = cur) && o, {})
  })

  const sourceData = computed(() => {
    return props.data.filter(item => !props.modelValue.includes(item[propsKey.value]))
  })

  const targetData = computed(() => {
    if (props.targetOrder === 'original') {
      return props.data.filter(item => props.modelValue.includes(item[propsKey.value]))
    } else {
      return props.modelValue.reduce((arr, cur) => {
        const val = dataObj.value[cur]
        if (val) {
          arr.push(val)
        }
        return arr
      }, [])
    }
  })

  return {
    propsKey,
    sourceData,
    targetData,
  }
}
