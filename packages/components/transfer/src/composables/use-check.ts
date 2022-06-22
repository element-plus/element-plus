import { computed, watch } from 'vue'
import { isFunction } from '@element-plus/utils'
import { CHECKED_CHANGE_EVENT } from '../transfer-panel'

import type { SetupContext } from 'vue'
import type { CheckboxValueType } from '@element-plus/components/checkbox'
import type { TransferKey } from '../transfer'
import type {
  TransferPanelEmits,
  TransferPanelProps,
  TransferPanelState,
} from '../transfer-panel'

export const useCheck = (
  props: TransferPanelProps,
  panelState: TransferPanelState,
  emit: SetupContext<TransferPanelEmits>['emit']
) => {
  const {
    label: propsLabel,
    key: propsKey,
    disabled: propsDisabled,
  } = props.props

  const filteredData = computed(() => {
    return props.data.filter((item) => {
      if (isFunction(props.filterMethod)) {
        return props.filterMethod(panelState.query, item)
      } else {
        const label = item[propsLabel.value] || item[propsKey.value].toString()
        return label.toLowerCase().includes(panelState.query.toLowerCase())
      }
    })
  })

  const checkableData = computed(() => {
    return filteredData.value.filter((item) => !item[propsDisabled.value])
  })

  const checkedSummary = computed(() => {
    const checkedLength = panelState.checked.length
    const dataLength = props.data.length
    const { noChecked, hasChecked } = props.format

    if (noChecked && hasChecked) {
      return checkedLength > 0
        ? hasChecked
            .replace(/\${checked}/g, checkedLength.toString())
            .replace(/\${total}/g, dataLength.toString())
        : noChecked.replace(/\${total}/g, dataLength.toString())
    } else {
      return `${checkedLength}/${dataLength}`
    }
  })

  const isIndeterminate = computed(() => {
    const checkedLength = panelState.checked.length
    return checkedLength > 0 && checkedLength < checkableData.value.length
  })

  const updateAllChecked = () => {
    const checkableDataKeys = checkableData.value.map(
      (item) => item[propsKey.value]
    )
    panelState.allChecked =
      checkableDataKeys.length > 0 &&
      checkableDataKeys.every((item) => panelState.checked.includes(item))
  }

  const handleAllCheckedChange = (value: CheckboxValueType) => {
    panelState.checked = value
      ? checkableData.value.map((item) => item[propsKey.value])
      : []
  }

  watch(
    () => panelState.checked,
    (val, oldVal) => {
      updateAllChecked()

      if (panelState.checkChangeByUser) {
        const movedKeys = val
          .concat(oldVal)
          .filter((v) => !val.includes(v) || !oldVal.includes(v))
        emit(CHECKED_CHANGE_EVENT, val, movedKeys)
      } else {
        emit(CHECKED_CHANGE_EVENT, val)
        panelState.checkChangeByUser = true
      }
    }
  )

  watch(checkableData, () => {
    updateAllChecked()
  })

  watch(
    () => props.data,
    () => {
      const checked: TransferKey[] = []
      const filteredDataKeys = filteredData.value.map(
        (item) => item[propsKey.value]
      )
      panelState.checked.forEach((item) => {
        if (filteredDataKeys.includes(item)) {
          checked.push(item)
        }
      })
      panelState.checkChangeByUser = false
      panelState.checked = checked
    }
  )

  watch(
    () => props.defaultChecked,
    (val, oldVal) => {
      if (
        oldVal &&
        val.length === oldVal.length &&
        val.every((item) => oldVal.includes(item))
      )
        return

      const checked: TransferKey[] = []
      const checkableDataKeys = checkableData.value.map(
        (item) => item[propsKey.value]
      )

      val.forEach((item) => {
        if (checkableDataKeys.includes(item)) {
          checked.push(item)
        }
      })
      panelState.checkChangeByUser = false
      panelState.checked = checked
    },
    {
      immediate: true,
    }
  )

  return {
    filteredData,
    checkableData,
    checkedSummary,
    isIndeterminate,
    updateAllChecked,
    handleAllCheckedChange,
  }
}
