import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'

import type { ComputedRef } from 'vue'
import type {
  TransferProps,
  TransferCheckedState,
  DataItem,
  Key,
} from './transfer'

export const useMove = (
  props: TransferProps,
  checkedState: TransferCheckedState,
  propsKey: ComputedRef<string>,
  emit
) => {
  const _emit = (value, type: 'left' | 'right', checked: Key[]) => {
    emit(UPDATE_MODEL_EVENT, value)
    emit(CHANGE_EVENT, value, type, checked)
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
      .filter((item: DataItem) => {
        const itemKey = item[propsKey.value]
        return (
          checkedState.leftChecked.includes(itemKey) &&
          !props.modelValue.includes(itemKey)
        )
      })
      .map((item) => item[propsKey.value])

    currentValue =
      props.targetOrder === 'unshift'
        ? itemsToBeMoved.concat(currentValue)
        : currentValue.concat(itemsToBeMoved)

    _emit(currentValue, 'right', checkedState.leftChecked)
  }

  return {
    addToLeft,
    addToRight,
  }
}
