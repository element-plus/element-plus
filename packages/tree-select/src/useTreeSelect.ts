import { computed, inject, nextTick, reactive, ref } from 'vue'
import { isEdge, isIE, useGlobalConfig } from '@element-plus/utils/util'
import { ElFormContext, ElFormItemContext, elFormItemKey, elFormKey } from '@element-plus/form'
import { t } from '@element-plus/locale'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import isEqual from 'lodash/isEqual'
import lodashDebounce from 'lodash/debounce'



export const useTreeSelectStates = props => {
  return reactive({
    data: props.treeData,
    selected: props.multiple ? [] : {} as any,
    inputLength: 20,
    inputWidth: 0,
    initialInputHeight: 0,
    filteredOptionsCount: 0,
    dropdownTreeVisible: false,
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
  })
}

export const useTreeSelect = (props, states, ctx) => {
  const ELEMENT = useGlobalConfig()

  // template refs
  const reference = ref(null)
  const input = ref(null)
  const popper = ref(null)
  const tags = ref(null)
  const treeSelectWrapper = ref<HTMLElement | null>(null)
  const scrollbar = ref(null)
  const hoverOption = ref(-1)

  // inject
  const elForm = inject(elFormKey, {} as ElFormContext)
  const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)

  const treeSelectSize = computed(() => props.size || elFormItem.size || ELEMENT.size)

  const readonly = computed(() => !props.filterable || props.multiple || (!isIE() && !isEdge() && !states.dropdownTreeVisible))

  const treeSelectDisabled = computed(() => props.disabled || elForm.disabled)

  const showClose = computed(() => {
    const hasValue = props.multiple
      ? Array.isArray(props.modelValue) && props.modelValue.length > 0
      : props.modelValue !== undefined && props.modelValue !== null && props.modelValue !== ''

    return props.clearable &&
      !treeSelectDisabled.value &&
      states.inputHovering &&
      hasValue
  })
  const dropdownTreeVisible = computed(() => states.dropdownTreeVisible && emptyText.value !== false)

  const iconClass = computed(() => props.remote && props.filterable ? '' : (states.dropdownTreeVisible ? 'arrow-up is-reverse' : 'arrow-up'))

  const debounce = computed(() => props.remote ? 300 : 0)

  const toggleDropdownTree = () => {
    if (props.automaticDropdown) return
    if (!treeSelectDisabled.value) {
      if (states.menuVisibleOnFocus) {
        states.menuVisibleOnFocus = false
      } else {
        states.dropdownTreeVisible = !states.dropdownTreeVisible
      }
      if (states.dropdownTreeVisible) {
        (input.value || reference.value).focus()
      }
    }
  }
  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t('el.select.loading')
    } else {
      if (props.remote && states.query === '' && states.data.length === 0) return false
      if (props.filterable && states.query && states.data.length > 0 && states.filteredOptionsCount === 0) {
        return props.noMatchText || t('el.select.noMatch')
      }
      if (states.data.length === 0) {
        return props.noDataText || t('el.select.noData')
      }
    }

    return null
  })

  const handleClose = () => {
    states.dropdownTreeVisible = false
  }

  const handleResize = () => {
    resetInputWidth()
    popper.value?.update()
    if (props.multiple) resetInputHeight()
  }

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
      if (states.dropdownTreeVisible && emptyText.value !== false) {
        popper.value?.update?.()
      }
    })
  }

  const resetInputWidth = () => {
    states.inputWidth = reference.value?.$el.getBoundingClientRect().width
  }

  const setSelected = () => {
    // TODO:
  }

  const handleFocus = event => {
    if (!states.softFocus) {
      if (props.automaticDropdown || props.filterable) {
        states.dropdownTreeVisible = true
        if (props.filterable) {
          states.menuVisibleOnFocus = true
        }
      }
      ctx.emit('focus', event)
    } else {
      states.softFocus = false
    }
  }

  const handleBlur = event => {
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

  const handleClearClick = event => {
    deleteSelected(event)
  }

  const deleteSelected = event => {
    event.stopPropagation()
    const value = props.multiple ? [] : ''
    ctx.emit(UPDATE_MODEL_EVENT, value)
    emitChange(value)
    states.dropdownTreeVisible = false
    ctx.emit('clear')
  }

  const emitChange = val => {
    if (!isEqual(props.modelValue, val)) {
      ctx.emit(CHANGE_EVENT, val)
    }
  }

  const handleQueryChange = query => {
    // TODO:
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

  const navigateNode = direction => {
    // TODO:
  }

  const selectNode = () => {
    // TODO:
  }

  return {
    reference,
    input,
    popper,
    tags,
    dropdownTreeVisible,
    treeSelectWrapper,
    scrollbar,
    hoverOption,
    readonly,
    treeSelectDisabled,
    treeSelectSize,
    showClose,
    iconClass,
    toggleDropdownTree,
    emptyText,
    handleClose,
    handleResize,
    setSelected,
    handleClearClick,
    handleFocus,
    handleBlur,
    debouncedOnInputChange,
    navigateNode,
    selectNode,
    resetInputHeight,
  }
}
