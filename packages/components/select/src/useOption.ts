import { computed, getCurrentInstance, inject, toRaw, watch } from 'vue'
import { get } from 'lodash-unified'
import {
  ensureArray,
  escapeStringRegexp,
  isObject,
  throwError,
} from '@element-plus/utils'
import { selectGroupKey, selectKey } from './token'
import { COMPONENT_NAME } from './option'

import type { OptionInternalInstance, OptionProps, OptionStates } from './type'

export function useOption(props: OptionProps, states: OptionStates) {
  // inject
  const select = inject(selectKey)
  if (!select) {
    throwError(COMPONENT_NAME, 'usage: <el-select><el-option /></el-select/>')
  }
  const selectGroup = inject(selectGroupKey, { disabled: false })

  // computed
  const itemSelected = computed(() => {
    return contains(ensureArray(select.props.modelValue), props.value)
  })

  const limitReached = computed(() => {
    if (select.props.multiple) {
      const modelValue = ensureArray(select.props.modelValue ?? [])
      return (
        !itemSelected.value &&
        modelValue.length >= select.props.multipleLimit &&
        select.props.multipleLimit > 0
      )
    } else {
      return false
    }
  })

  const currentLabel = computed(() => {
    return props.label || (isObject(props.value) ? '' : props.value)
  })

  const currentValue = computed(() => {
    return props.value || props.label || ''
  })

  const isDisabled = computed(() => {
    return props.disabled || states.groupDisabled || limitReached.value
  })

  const instance = getCurrentInstance()! as OptionInternalInstance
  const contains = <T>(arr: T[] = [], target: T) => {
    if (!isObject(props.value)) {
      return arr && arr.includes(target)
    } else {
      const valueKey = select.props.valueKey
      return (
        arr &&
        arr.some((item) => {
          return toRaw(get(item, valueKey)) === get(target, valueKey)
        })
      )
    }
  }

  const hoverItem = () => {
    if (!props.disabled && !selectGroup.disabled) {
      select.states.hoveringIndex = select.optionsArray.indexOf(instance.proxy)
    }
  }

  const updateOption = (query: string) => {
    const regexp = new RegExp(escapeStringRegexp(query), 'i')
    states.visible = regexp.test(currentLabel.value as string) || props.created
  }

  watch(
    () => currentLabel.value,
    () => {
      if (!props.created && !select.props.remote) select.setSelected()
    }
  )

  watch(
    () => props.value,
    (val, oldVal) => {
      const { remote, valueKey } = select.props

      if (val !== oldVal) {
        select.onOptionDestroy(oldVal, instance.proxy)
        select.onOptionCreate(instance.proxy)
      }

      if (!props.created && !remote) {
        if (
          valueKey &&
          isObject(val) &&
          isObject(oldVal) &&
          val[valueKey] === oldVal[valueKey]
        ) {
          return
        }
        select.setSelected()
      }
    }
  )

  watch(
    () => selectGroup.disabled,
    () => {
      states.groupDisabled = selectGroup.disabled
    },
    { immediate: true }
  )

  return {
    select,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem,
    updateOption,
  }
}
