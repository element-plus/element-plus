import {
  inject,
  computed,
  getCurrentInstance,
  watch,
  onBeforeUnmount,
} from 'vue'
import { getValueByPath, escapeRegexpString } from '@element-plus/utils/util'
import {
  selectKey, selectGroupKey,
  selectEvents,
} from './token'

export function useOption(props, states) {
  // inject
  const select = inject(selectKey)
  const selectGroup = inject(selectGroupKey, { disabled: false })

  // computed
  const isObject = computed(() => {
    return Object.prototype.toString.call(props.value).toLowerCase() === '[object object]'
  })

  const itemSelected = computed(() => {
    if (!select.props.multiple) {
      return isEqual(props.value, select.props.modelValue)
    } else {
      return contains(select.props.modelValue as unknown[], props.value)
    }
  })

  const limitReached = computed(() => {
    if (select.props.multiple) {
      const modelValue = (select.props.modelValue || []) as unknown[]
      return !itemSelected.value &&
      modelValue.length >= select.props.multipleLimit &&
        select.props.multipleLimit > 0
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

  const instance = getCurrentInstance()

  const contains = (arr = [], target) => {
    if (!isObject.value) {
      return arr && arr.indexOf(target) > -1
    } else {
      const valueKey = select.props.valueKey
      return arr && arr.some(item => {
        return getValueByPath(item, valueKey) === getValueByPath(target, valueKey)
      })
    }
  }

  const isEqual = (a: unknown, b: unknown) => {
    if (!isObject.value) {
      return a === b
    } else {
      const { valueKey } = select.props
      return getValueByPath(a, valueKey) === getValueByPath(b, valueKey)
    }
  }

  const hoverItem = () => {
    if (!props.disabled && !selectGroup.disabled) {
      select.hoverIndex = select.optionsArray.indexOf(instance)
    }
  }

  const queryChange = (query: string) => {
    // not in filtering, just show original options only
    if (!query) {
      states.visible = !props.created
    } else {
      // in filtering, do filter by RegExp
      const regexp = new RegExp(escapeRegexpString(query), 'i')
      states.visible = regexp.test(currentLabel.value)
      if (!states.visible && !props.created) {
        select.filteredOptionsCount--
      }
    }
  }

  watch(() => currentLabel.value, () => {
    if (!props.created && !select.props.remote) select.setSelected()
  })

  watch(() => props.value, (val, oldVal) => {
    const { remote, valueKey } = select.props
    if (!props.created && !remote) {
      if (valueKey && typeof val === 'object' && typeof oldVal === 'object' && val[valueKey] === oldVal[valueKey]) {
        return
      }
      select.setSelected()
    }
  })

  watch(() => selectGroup.disabled, () => {
    states.groupDisabled = selectGroup.disabled
  }, { immediate: true })

  // Emitter
  select.selectEmitter.on(selectEvents.queryChange, queryChange)

  onBeforeUnmount(() => {
    select.selectEmitter.off(selectEvents.queryChange, queryChange)
  })

  return {
    select,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem,
  }
}
