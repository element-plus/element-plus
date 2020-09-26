import {
  inject,
  computed,
  getCurrentInstance,
  watch,
} from 'vue'
import { getValueByPath, escapeRegexpString } from '@element-plus/utils/util'

export const useOption = (props, states, ctx) => {
  // inject
  const select = inject('Select', {}) as any
  const selectGroup = inject('SelectGroup', {}) as any

  // computed
  const isObject = computed(() => {
    return Object.prototype.toString.call(props.value).toLowerCase() === '[object object]'
  })

  const itemSelected = computed(() => {
    if (!select.props.multiple) {
      return isEqual(props.value, select.props.modelValue)
    } else {
      return contains(select.props.modelValue, props.value)
    }
  })

  const limitReached = computed(() => {
    if (select.props.multiple) {
      return !itemSelected.value &&
        (select.props.value || []).length >= select.props.multipleLimit &&
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

  select.optionsCount.value++
  select.filteredOptionsCount.value++

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

  const isEqual = (a, b) => {
    if (!isObject.value) {
      return a === b
    } else {
      const valueKey = select.valueKey
      return getValueByPath(a, valueKey) === getValueByPath(b, valueKey)
    }
  }

  const hoverItem = () => {
    if (!props.disabled && !selectGroup.disabled) {
      select.hoverIndex.value = select.options.value.indexOf(instance)
    }
  }

  const queryChange = query => {
    states.visible = new RegExp(escapeRegexpString(query), 'i').test(currentLabel.value) || props.created
    if (!states.visible) {
      select.filteredOptionsCount.value--
    }
  }

  watch(() => currentLabel.value, () => {
    if (!props.created && !select.remote) select.setSelected()
  })

  watch(() => props.value, (val, oldVal) => {
    const { remote, valueKey } = select
    if (!props.created && !remote) {
      if (valueKey && typeof val === 'object' && typeof oldVal === 'object' && val[valueKey] === oldVal[valueKey]) {
        return
      }
      select.setSelected()
    }
  })

  // Emitter
  select.selectEmitter.on('elOptionQueryChange', queryChange)

  return {
    select,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem,
  }
}
