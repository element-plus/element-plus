import { ComputedRef } from 'vue'
import { UPDATE_MODEL_EVENT } from '../../utils/constants'
import { CHANGE_EVENT } from './index.vue'
import { TransferProps, TransferInitData, DataItem, Key } from './transfer'

export const useMove = (props: TransferProps, initData: TransferInitData, propsKey: ComputedRef<string>, emit) => {
  const _emit = (value, type: 'left' | 'right', checked: Key[]) => {
    emit(UPDATE_MODEL_EVENT, value)
    emit(CHANGE_EVENT, value, type, checked)
  }

  const addToLeft = () => {
    const currentValue = props.modelValue.slice()

    initData.rightChecked.forEach(item => {
      const index = currentValue.indexOf(item)
      if (index > -1) {
        currentValue.splice(index, 1)
      }
    })
    _emit(currentValue, 'left', initData.rightChecked)
  }

  const addToRight = () => {
    let currentValue = props.modelValue.slice()

    const itemsToBeMoved = props.data
      .filter((item: DataItem) => {
        const itemKey = item[propsKey.value]
        return initData.leftChecked.includes(itemKey) && !props.modelValue.includes(itemKey)
      })
      .map(item => item[propsKey.value])

    currentValue = props.targetOrder === 'unshift'
      ? itemsToBeMoved.concat(currentValue)
      : currentValue.concat(itemsToBeMoved)

    _emit(currentValue, 'right', initData.leftChecked)
  }

  return {
    addToLeft,
    addToRight,
  }
}
