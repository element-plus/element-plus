import { computed, getCurrentInstance, inject, toRaw, watch } from 'vue'
import { get, isEqual } from 'lodash-unified'
import {
  ensureArray,
  escapeStringRegexp,
  isObject,
  throwError,
} from '@element-plus/utils'
import { flatSelectKey, selectGroupKey } from './token'
import { COMPONENT_NAME } from './option'

import type { OptionInternalInstance, OptionProps, OptionStates } from './type'

export function useOption(props: OptionProps, states: OptionStates) {
  // inject
  const flatSelect = inject(flatSelectKey)
  if (!flatSelect) {
    throwError(
      COMPONENT_NAME,
      'usage: <el-select><el-option /></el-select/> \n or \n <el-flat-select><el-option /></el-flat-select/>'
    )
  }
  const selectGroup = inject(selectGroupKey, { disabled: false })

  // computed
  const itemSelected = computed(() => {
    return contains(ensureArray(flatSelect.props.modelValue), props.value)
  })

  const limitReached = computed(() => {
    if (flatSelect.props.multiple) {
      const modelValue = ensureArray(flatSelect.props.modelValue ?? [])
      return (
        !itemSelected.value &&
        modelValue.length >= flatSelect.props.multipleLimit &&
        flatSelect.props.multipleLimit > 0
      )
    } else {
      return false
    }
  })

  const currentLabel = computed(() => {
    return props.label ?? (isObject(props.value) ? '' : props.value)
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
      const valueKey = flatSelect.props.valueKey
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
      flatSelect.states.hoveringIndex = flatSelect.optionsArray.indexOf(
        instance.proxy
      )
    }
  }

  const updateOption = (query: string) => {
    const regexp = new RegExp(escapeStringRegexp(query), 'i')
    states.visible = regexp.test(String(currentLabel.value)) || props.created
  }

  watch(
    () => currentLabel.value,
    () => {
      if (!props.created && !flatSelect.props.remote) flatSelect.setSelected()
    }
  )

  watch(
    () => props.value,
    (val, oldVal) => {
      const { remote, valueKey } = flatSelect.props
      const shouldUpdate = remote ? val !== oldVal : !isEqual(val, oldVal)
      if (shouldUpdate) {
        flatSelect.onOptionDestroy(oldVal, instance.proxy)
        flatSelect.onOptionCreate(instance.proxy)
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
        flatSelect.setSelected()
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
    select: flatSelect,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem,
    updateOption,
  }
}
