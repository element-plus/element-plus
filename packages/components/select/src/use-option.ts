import { inject, computed, getCurrentInstance, watch, toRaw, unref } from 'vue'
import { getValueByPath, escapeRegexpString } from '@element-plus/utils/util'

import { optionGroupContextKey, selectContextKey } from '@element-plus/tokens'
import { throwError } from '@element-plus/utils/error'
import type { QueryChangeCtx } from './select'
import type { OptionProps } from './option'
import type { Ref } from 'vue'

export function useOption(props: OptionProps, states) {
  const instance = getCurrentInstance()!
  // inject
  const selectContext = inject(selectContextKey)
  if (!selectContext) throwError('ElOption', 'must be nested inside ElSelect')
  const optionGroupContext = inject(optionGroupContextKey, { disabled: false })

  // computed
  const isObject = computed(() => {
    return (
      Object.prototype.toString.call(props.value).toLowerCase() ===
      '[object object]'
    )
  })

  const itemSelected = computed(() => {
    if (!selectContext.props.multiple) {
      return isEqual(props.value, selectContext.props.modelValue)
    } else {
      return contains(selectContext.props.modelValue as unknown[], props.value)
    }
  })

  const limitReached = computed(() => {
    if (selectContext.props.multiple) {
      const modelValue = (selectContext.props.modelValue || []) as unknown[]
      return (
        !itemSelected.value &&
        modelValue.length >= selectContext.props.multipleLimit &&
        selectContext.props.multipleLimit > 0
      )
    } else {
      return false
    }
  })

  const currentLabel = computed(() => {
    return props.label || (isObject.value ? '' : props.value)
  })

  const currentValue = computed(() => {
    return props.value || props.label || ''
  })

  const isDisabled = computed(() => {
    return props.disabled || states.groupDisabled || limitReached.value
  })

  const contains = (arr: unknown[] = [], target) => {
    if (!isObject.value) {
      return arr && arr.indexOf(target) > -1
    } else {
      const valueKey = selectContext.props.valueKey
      return (
        arr &&
        arr.some((item) => {
          return (
            getValueByPath(item, valueKey) === getValueByPath(target, valueKey)
          )
        })
      )
    }
  }

  const isEqual = (a: unknown, b: unknown) => {
    if (!isObject.value) {
      return a === b
    } else {
      const { valueKey } = selectContext.props
      return getValueByPath(a, valueKey) === getValueByPath(b, valueKey)
    }
  }

  const hoverItem = () => {
    if (!props.disabled && !optionGroupContext.disabled) {
      selectContext.hoverIndex = selectContext.optionsArray.indexOf(instance)
    }
  }

  watch(
    () => currentLabel.value,
    () => {
      if (!props.created && !selectContext.props.remote)
        selectContext.setSelected()
    }
  )

  watch(
    () => props.value,
    (val, oldVal) => {
      const { remote, valueKey } = selectContext.props
      if (!props.created && !remote) {
        if (
          valueKey &&
          typeof val === 'object' &&
          typeof oldVal === 'object' &&
          val[valueKey] === oldVal[valueKey]
        ) {
          return
        }
        selectContext.setSelected()
      }
    }
  )

  watch(
    () => optionGroupContext.disabled,
    () => {
      states.groupDisabled = optionGroupContext.disabled
    },
    { immediate: true }
  )

  const { queryChange } = toRaw(selectContext)
  watch(queryChange, (changes: Ref<QueryChangeCtx>) => {
    const { query } = unref(changes)

    const regexp = new RegExp(escapeRegexpString(query), 'i')
    states.visible = regexp.test(String(currentLabel.value)) || props.created
    if (!states.visible) {
      selectContext.filteredOptionsCount--
    }
  })

  return {
    selectContext,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem,
  }
}
