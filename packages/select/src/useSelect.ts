import {
  inject,
  nextTick,
  computed,
  watch,
  ref,
  reactive,
} from 'vue'
import mitt from 'mitt'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@element-plus/utils/constants'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { t } from '@element-plus/locale'
import isServer from '@element-plus/utils/isServer'
import scrollIntoView from '@element-plus/utils/scroll-into-view'
import lodashDebounce from 'lodash/debounce'
import { isKorean } from '@element-plus/utils/isDef'
import {
  getValueByPath,
  isIE,
  isEdge,
  useGlobalConfig,
} from '@element-plus/utils/util'
import { elFormKey, elFormItemKey } from '@element-plus/form'
import isEqual from 'lodash/isEqual'
import { isObject, toRawType } from '@vue/shared'

import type { ComponentPublicInstance } from 'vue'
import type { ElFormContext, ElFormItemContext } from '@element-plus/form'

export function useSelectStates(props) {
  const selectEmitter = mitt()
  return reactive({
    options: [],
    cachedOptions: [],
    createdLabel: null,
    createdSelected: false,
    selected: props.multiple ? [] : {} as any,
    inputLength: 20,
    inputWidth: 0,
    initialInputHeight: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: false,
    softFocus: false,
    selectedLabel: '',
    hoverIndex: -1,
    query: '',
    previousQuery: null,
    inputHovering: false,
    cachedPlaceHolder: '',
    currentPlaceholder: t('el.select.placeholder'),
    menuVisibleOnFocus: false,
    isOnComposition: false,
    isSilentBlur: false,
    selectEmitter,
  })
}

type States = ReturnType<typeof useSelectStates>

export const useSelect = (props, states: States, ctx) => {
  const ELEMENT = useGlobalConfig()
  // template refs
  const reference = ref(null)
  const input = ref(null)
  const popper = ref(null)
  const tags = ref(null)
  const selectWrapper = ref<HTMLElement | null>(null)
  const scrollbar = ref(null)
  const hoverOption = ref(-1)

  // inject
  const elForm = inject(elFormKey, {} as ElFormContext)
  const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)

  const readonly = computed(() => !props.filterable || props.multiple || (!isIE() && !isEdge() && !states.visible))

  const selectDisabled = computed(() => props.disabled || elForm.disabled)

  const showClose = computed(() => {
    const hasValue = props.multiple
      ? Array.isArray(props.modelValue) && props.modelValue.length > 0
      : props.modelValue !== undefined && props.modelValue !== null && props.modelValue !== ''

    const criteria =
      props.clearable &&
      !selectDisabled.value &&
      states.inputHovering &&
      hasValue
    return criteria
  })
  const iconClass = computed(() => props.remote && props.filterable ? '' : (states.visible ? 'arrow-up is-reverse' : 'arrow-up'))

  const debounce = computed(() => props.remote ? 300 : 0)

  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t('el.select.loading')
    } else {
      if (props.remote && states.query === '' && states.options.length === 0) return false
      if (props.filterable && states.query && states.options.length > 0 && states.filteredOptionsCount === 0) {
        return props.noMatchText || t('el.select.noMatch')
      }
      if (states.options.length === 0) {
        return props.noDataText || t('el.select.noData')
      }
    }
    return null
  })

  const showNewOption = computed(() => {
    const hasExistingOption = states.options.filter(option => {
      return !option.created
    }).some(option => {
      return option.currentLabel === states.query
    })
    return props.filterable && props.allowCreate && states.query !== '' && !hasExistingOption
  })

  const selectSize = computed(() => props.size || elFormItem.size || ELEMENT.size)

  const collapseTagSize = computed(() => ['small', 'mini'].indexOf(selectSize.value) > -1 ? 'mini' : 'small')

  const dropMenuVisible = computed(() => states.visible && emptyText.value !== false)

  // watch
  watch(() => selectDisabled.value, () => {
    nextTick(() => {
      resetInputHeight()
    })
  })

  watch(() => props.placeholder, val => {
    states.cachedPlaceHolder = states.currentPlaceholder = val
  })

  watch(() => props.modelValue, (val, oldVal) => {
    if (props.multiple) {
      resetInputHeight()
      if ((val && val.length > 0) || (input.value && states.query !== '')) {
        states.currentPlaceholder = ''
      } else {
        states.currentPlaceholder = states.cachedPlaceHolder
      }
      if (props.filterable && !props.reserveKeyword) {
        states.query = ''
        handleQueryChange(states.query)
      }
    }
    setSelected()
    if (props.filterable && !props.multiple) {
      states.inputLength = 20
    }
    if (!isEqual(val, oldVal)) {
      elFormItem.formItemMitt?.emit('el.form.change', val)
    }
  }, {
    flush: 'post',
  })

  watch(() => states.visible, val => {
    if (!val) {
      input.value && input.value.blur()
      states.query = ''
      states.previousQuery = null
      states.selectedLabel = ''
      states.inputLength = 20
      states.menuVisibleOnFocus = false
      resetHoverIndex()
      nextTick(() => {
        if (input.value && input.value.value === '' && states.selected.length === 0) {
          states.currentPlaceholder = states.cachedPlaceHolder
        }
      })

      if (!props.multiple) {
        if (states.selected) {
          if (props.filterable && props.allowCreate && states.createdSelected && states.createdLabel) {
            states.selectedLabel = states.createdLabel
          } else {
            states.selectedLabel = states.selected.currentLabel
          }
          if (props.filterable) states.query = states.selectedLabel
        }

        if (props.filterable) {
          states.currentPlaceholder = states.cachedPlaceHolder
        }
      }
    } else {
      popper.value?.update?.()

      if (props.filterable) {
        states.query = props.remote ? '' : states.selectedLabel
        if (props.multiple) {
          input.value.focus()
        } else {
          if (states.selectedLabel) {
            states.currentPlaceholder = states.selectedLabel
            states.selectedLabel = ''
          }
        }
        if (!props.multiple && !props.remote) {
          states.selectEmitter.emit('elOptionQueryChange', '')
          states.selectEmitter.emit('elOptionGroupQueryChange')
        } else {
          handleQueryChange(states.query)
        }
      }
    }
    ctx.emit('visible-change', val)
  })

  watch(
    // fix `Array.prototype.push/splice/..` cannot trigger non-deep watcher
    // https://github.com/vuejs/vue-next/issues/2116
    () => ([...states.options]),
    () => {
      if (isServer) return
      popper.value?.update?.()
      if (props.multiple) {
        resetInputHeight()
      }
      const inputs = selectWrapper.value?.querySelectorAll('input') || []
      if ([].indexOf.call(inputs, document.activeElement) === -1) {
        setSelected()
      }
      if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
        checkDefaultFirstOption()
      }
    },
  )

  watch(() => states.hoverIndex, val => {
    if (typeof val === 'number' && val > -1) {
      hoverOption.value = states.options[val] || {}
    }
    states.options.forEach(option => {
      option.hover = hoverOption.value === option
    })
  })


  // methods
  const resetInputHeight = () => {
    if (props.collapseTags && !props.filterable) return
    nextTick(() => {
      if (!reference.value) return
      const inputChildNodes = reference.value.$el.childNodes
      const input = [].filter.call(inputChildNodes, item => item.tagName === 'INPUT')[0]
      const _tags = tags.value
      const sizeInMap = states.initialInputHeight || 40
      input.style.height = states.selected.length === 0
        ? sizeInMap + 'px'
        : Math.max(
          _tags ? (_tags.clientHeight + (_tags.clientHeight > sizeInMap ? 6 : 0)) : 0,
          sizeInMap) + 'px'
      if (states.visible && emptyText.value !== false) {
        popper.value?.update?.()
      }
    })
  }

  const handleQueryChange = val => {
    if (states.previousQuery === val || states.isOnComposition) return
    if (
      states.previousQuery === null &&
      (typeof props.filterMethod === 'function' || typeof props.remoteMethod === 'function')
    ) {
      states.previousQuery = val
      return
    }
    states.previousQuery = val
    nextTick(() => {
      if (states.visible) popper.value?.update?.()
    })
    states.hoverIndex = -1
    if (props.multiple && props.filterable) {
      nextTick(() => {
        const length = input.value.length * 15 + 20
        states.inputLength = props.collapseTags ? Math.min(50, length) : length
        managePlaceholder()
        resetInputHeight()
      })
    }
    if (props.remote && typeof props.remoteMethod === 'function') {
      states.hoverIndex = -1
      props.remoteMethod(val)
    } else if (typeof props.filterMethod === 'function') {
      props.filterMethod(val)
      states.selectEmitter.emit('elOptionGroupQueryChange')
    } else {
      states.filteredOptionsCount = states.optionsCount
      states.selectEmitter.emit('elOptionQueryChange', val)
      states.selectEmitter.emit('elOptionGroupQueryChange')
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
      checkDefaultFirstOption()
    }
  }

  const managePlaceholder = () => {
    if (states.currentPlaceholder !== '') {
      states.currentPlaceholder = input.value ? '' : states.cachedPlaceHolder
    }
  }

  const checkDefaultFirstOption = () => {
    states.hoverIndex = -1
    // highlight the created option
    let hasCreated = false
    for (let i = states.options.length - 1; i >= 0; i--) {
      if (states.options[i].created) {
        hasCreated = true
        states.hoverIndex = i
        break
      }
    }
    if (hasCreated) return
    for (let i = 0; i !== states.options.length; ++i) {
      const option = states.options[i]
      if (states.query) {
        // highlight first options that passes the filter
        if (!option.disabled && !option.groupDisabled && option.visible) {
          states.hoverIndex = i
          break
        }
      } else {
        // highlight currently selected option
        if (option.itemSelected) {
          states.hoverIndex = i
          break
        }
      }
    }
  }

  const setSelected = () => {
    if (!props.multiple) {
      const option = getOption(props.modelValue)
      if (option.props?.created) {
        states.createdLabel = option.props.value
        states.createdSelected = true
      } else {
        states.createdSelected = false
      }
      states.selectedLabel = option.currentLabel
      states.selected = option
      if (props.filterable) states.query = states.selectedLabel
      return
    }
    const result = []
    if (Array.isArray(props.modelValue)) {
      props.modelValue.forEach(value => {
        result.push(getOption(value))
      })
    }
    states.selected = result
    nextTick(() => {
      resetInputHeight()
    })
  }

  const getOption = value => {
    let option
    const isObjectValue = toRawType(value).toLowerCase() === 'object'
    const isNull = toRawType(value).toLowerCase() === 'null'
    const isUndefined = toRawType(value).toLowerCase() === 'undefined'

    for (let i = states.cachedOptions.length - 1; i >= 0; i--) {
      const cachedOption = states.cachedOptions[i]
      const isEqualValue = isObjectValue
        ? getValueByPath(cachedOption.value, props.valueKey) === getValueByPath(value, props.valueKey)
        : cachedOption.value === value
      if (isEqualValue) {
        option = {
          value,
          currentLabel: cachedOption.currentLabel,
        }
        break
      }
    }
    if (option) return option
    const label = (!isObjectValue && !isNull && !isUndefined) ? value : ''
    const newOption = {
      value,
      currentLabel: label,
    }
    if (props.multiple) {
      (newOption as any).hitState = false
    }
    return newOption
  }

  const resetHoverIndex = () => {
    setTimeout(() => {
      if (!props.multiple) {
        states.hoverIndex = states.options.indexOf(states.selected)
      } else {
        if (states.selected.length > 0) {
          states.hoverIndex = Math.min.apply(null, states.selected.map(item => states.options.indexOf(item)))
        } else {
          states.hoverIndex = -1
        }
      }
    }, 300)
  }

  const handleResize = () => {
    resetInputWidth()
    popper.value?.update?.()
    if (props.multiple) resetInputHeight()
  }

  const resetInputWidth = () => {
    states.inputWidth = reference.value?.$el.getBoundingClientRect().width
  }

  const onInputChange = () => {
    if (props.filterable && states.query !== states.selectedLabel) {
      states.query = states.selectedLabel
      handleQueryChange(states.query)
    }
  }

  const debouncedOnInputChange = lodashDebounce(() => {
    onInputChange()
  }, debounce.value)

  const debouncedQueryChange = lodashDebounce(e => {
    handleQueryChange(e.target.value)
  }, debounce.value)

  const emitChange = val => {
    if (!isEqual(props.modelValue, val)) {
      ctx.emit(CHANGE_EVENT, val)
    }
  }

  const deletePrevTag = e => {
    if (e.target.value.length <= 0 && !toggleLastOptionHitState()) {
      const value = props.modelValue.slice()
      value.pop()
      ctx.emit(UPDATE_MODEL_EVENT, value)
      emitChange(value)
    }
  }

  const deleteTag = (event, tag) => {
    const index = states.selected.indexOf(tag)
    if (index > -1 && !selectDisabled.value) {
      const value = props.modelValue.slice()
      value.splice(index, 1)
      ctx.emit(UPDATE_MODEL_EVENT, value)
      emitChange(value)
      ctx.emit('remove-tag', tag.value)
    }
    event.stopPropagation()
  }

  const deleteSelected = event => {
    event.stopPropagation()
    const value = props.multiple ? [] : ''
    ctx.emit(UPDATE_MODEL_EVENT, value)
    emitChange(value)
    states.visible = false
    ctx.emit('clear')
  }

  const handleOptionSelect = (option, byClick) => {
    if (props.multiple) {
      const value = (props.modelValue || []).slice()
      const optionIndex = getValueIndex(value, option.value)
      if (optionIndex > -1) {
        value.splice(optionIndex, 1)
      } else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) {
        value.push(option.value)
      }
      ctx.emit(UPDATE_MODEL_EVENT, value)
      emitChange(value)
      if (option.created) {
        states.query = ''
        handleQueryChange('')
        states.inputLength = 20
      }
      if (props.filterable) input.value.focus()
    } else {
      ctx.emit(UPDATE_MODEL_EVENT, option.value)
      emitChange(option.value)
      states.visible = false
    }
    states.isSilentBlur = byClick
    setSoftFocus()
    if (states.visible) return
    nextTick(() => {
      scrollToOption(option)
    })
  }

  const getValueIndex = (arr = [], value) => {
    if (!isObject(value)) return arr.indexOf(value)

    const valueKey = props.valueKey
    let index = -1
    arr.some((item, i) => {
      if (getValueByPath(item, valueKey) === getValueByPath(value, valueKey)) {
        index = i
        return true
      }
      return false
    })
    return index
  }

  const setSoftFocus = () => {
    states.softFocus = true
    const _input = input.value || reference.value
    if (_input) {
      _input.focus()
    }
  }

  const scrollToOption = option => {
    const target = Array.isArray(option) ? option[0]?.$el : option.$el
    if (popper.value && target) {
      const menu = popper.value?.$el?.querySelector?.('.el-select-dropdown__wrap')
      if (menu) {
        scrollIntoView(menu, target)
      }
    }
    // TODO: handleScroll
    // scrollbar.value?.handleScroll()
  }

  const onOptionCreate = (vm: ComponentPublicInstance) => {
    states.optionsCount++
    states.filteredOptionsCount++
    states.options.push(vm)
    states.cachedOptions.push(vm)
  }

  const onOptionDestroy = (index: number) => {
    if (index > -1) {
      states.optionsCount--
      states.filteredOptionsCount--
      states.options.splice(index, 1)
    }
  }

  const resetInputState = (e: KeyboardEvent) => {
    if (e.code !== EVENT_CODE.backspace) toggleLastOptionHitState(false)
    states.inputLength = input.value.length * 15 + 20
    resetInputHeight()
  }

  const toggleLastOptionHitState = (hit?: boolean) => {
    if (!Array.isArray(states.selected)) return
    const option = states.selected[states.selected.length - 1]
    if (!option) return

    if (hit === true || hit === false) {
      option.hitState = hit
      return hit
    }

    option.hitState = !option.hitState
    return option.hitState
  }

  const handleComposition = event => {
    const text = event.target.value
    if (event.type === 'compositionend') {
      states.isOnComposition = false
      nextTick(() => handleQueryChange(text))
    } else {
      const lastCharacter = text[text.length - 1] || ''
      states.isOnComposition = !isKorean(lastCharacter)
    }
  }

  const handleMenuEnter = () => {
    nextTick(() => scrollToOption(states.selected))
  }

  const handleFocus = event => {
    if (!states.softFocus) {
      if (props.automaticDropdown || props.filterable) {
        states.visible = true
        if (props.filterable) {
          states.menuVisibleOnFocus = true
        }
      }
      ctx.emit('focus', event)
    } else {
      states.softFocus = false
    }
  }

  const blur = () => {
    states.visible = false
    reference.value.blur()
  }

  const handleBlur = (event: Event) => {
    // https://github.com/ElemeFE/element/pull/10822
    nextTick(() => {
      if (states.isSilentBlur) {
        states.isSilentBlur = false
      } else {
        ctx.emit('blur', event)
      }
    })
    states.softFocus = false
  }

  const handleClearClick = (event: Event) => {
    deleteSelected(event)
  }

  const handleClose = () => {
    states.visible = false
  }

  const toggleMenu = () => {
    if (props.automaticDropdown) return
    if (!selectDisabled.value) {
      if (states.menuVisibleOnFocus) {
        states.menuVisibleOnFocus = false
      } else {
        states.visible = !states.visible
      }
      if (states.visible) {
        (input.value || reference.value).focus()
      }
    }
  }

  const selectOption = () => {
    if (!states.visible) {
      toggleMenu()
    } else {
      if (states.options[states.hoverIndex]) {
        handleOptionSelect(states.options[states.hoverIndex], undefined)
      }
    }
  }

  const getValueKey = item => {
    return isObject(item.value)
      ? getValueByPath(item.value, props.valueKey)
      : item.value
  }

  const optionsAllDisabled = computed(() => states.options.filter(option => option.visible).every(option => option.disabled))

  const navigateOptions = direction => {
    if (!states.visible) {
      states.visible = true
      return
    }
    if (states.options.length === 0 || states.filteredOptionsCount === 0) return

    if (!optionsAllDisabled.value) {
      if (direction === 'next') {
        states.hoverIndex++
        if (states.hoverIndex === states.options.length) {
          states.hoverIndex = 0
        }
      } else if (direction === 'prev') {
        states.hoverIndex--
        if (states.hoverIndex < 0) {
          states.hoverIndex = states.options.length - 1
        }
      }
      const option = states.options[states.hoverIndex]
      if (option.disabled === true ||
        option.groupDisabled === true ||
        !option.visible) {
        navigateOptions(direction)
      }
      nextTick(() => scrollToOption(hoverOption.value))
    }
  }

  return {
    selectSize,
    handleResize,
    debouncedOnInputChange,
    debouncedQueryChange,
    deletePrevTag,
    deleteTag,
    deleteSelected,
    handleOptionSelect,
    scrollToOption,
    readonly,
    resetInputHeight,
    showClose,
    iconClass,
    showNewOption,
    collapseTagSize,
    setSelected,
    managePlaceholder,
    selectDisabled,
    emptyText,
    toggleLastOptionHitState,
    resetInputState,
    handleComposition,
    onOptionCreate,
    onOptionDestroy,
    handleMenuEnter,
    handleFocus,
    blur,
    handleBlur,
    handleClearClick,
    handleClose,
    toggleMenu,
    selectOption,
    getValueKey,
    navigateOptions,
    dropMenuVisible,

    // DOM ref
    reference,
    input,
    popper,
    tags,
    selectWrapper,
    scrollbar,
  }
}

