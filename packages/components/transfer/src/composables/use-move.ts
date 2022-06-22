import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type { Ref, SetupContext } from 'vue'
import type {
  TransferCheckedState,
  TransferDataItem,
  TransferDirection,
  TransferEmits,
  TransferKey,
  TransferProps,
} from '../transfer'

export const useMove = (
  props: TransferProps,
  checkedState: TransferCheckedState,
  propsKey: Ref<TransferProps['props']['key']>,
  emit: SetupContext<TransferEmits>['emit']
) => {
  const _emit = (
    value: TransferKey[],
    direction: TransferDirection,
    movedKeys: TransferKey[]
  ) => {
    emit(UPDATE_MODEL_EVENT, value)
    emit(CHANGE_EVENT, value, direction, movedKeys)
  }

  const addToLeft = () => {
    const currentValue = props.modelValue.slice()

    checkedState.rightChecked.forEach((item) => {
      const index = currentValue.indexOf(item)
      if (index > -1) {
        currentValue.splice(index, 1)
      }
    })
    _emit(currentValue, 'left', checkedState.rightChecked)
  }

  const addToRight = () => {
    let currentValue = props.modelValue.slice()

    const itemsToBeMoved = props.data
      .filter((item: TransferDataItem) => {
        const itemKey = item[propsKey.value!]
        return (
          checkedState.leftChecked.includes(itemKey) &&
          !props.modelValue.includes(itemKey)
        )
      })
      .map((item) => item[propsKey.value!])

    currentValue =
      props.targetOrder === 'unshift'
        ? itemsToBeMoved.concat(currentValue)
        : currentValue.concat(itemsToBeMoved)

    if (props.targetOrder === 'original') {
      currentValue = props.data
        .filter((item) => currentValue.includes(item[propsKey.value!]))
        .map((item) => item[propsKey.value!])
    }

    _emit(currentValue, 'right', checkedState.leftChecked)
  }

  return {
    addToLeft,
    addToRight,
  }
}
