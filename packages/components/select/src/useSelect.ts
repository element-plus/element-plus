import {
  Component,
  computed,
  nextTick,
  provide,
  reactive,
  ref,
  watch,
  watchEffect,
} from 'vue'
import {
  findLastIndex,
  get,
  isEqual,
  isNumber,
  debounce as lodashDebounce,
} from 'lodash-unified'
import { useResizeObserver } from '@vueuse/core'
import {
  ValidateComponentsMap,
  debugWarn,
  ensureArray,
  isArray,
  isFunction,
  isIOS,
  isObject,
  isUndefined,
  scrollIntoView,
} from '@element-plus/utils'
import {
  CHANGE_EVENT,
  EVENT_CODE,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import {
  useComposition,
  useEmptyValues,
  useFocusController,
  useNamespace,
} from '@element-plus/hooks'
import {
  useFormItem,
  useFormItemInputId,
  useFormSize,
} from '@element-plus/components/form'
import { selectKey } from './token'
import { useFlatSelect } from './useFlatSelect'

import type { TooltipInstance } from '@element-plus/components/tooltip'
import type { SelectEmits, SelectProps } from './select'
import type {
  OptionBasic,
  OptionPublicInstance,
  OptionValue,
  SelectStates,
} from './type'

export const useSelect = (props: SelectProps, emit: SelectEmits) => {
  const FLAT_SELECT_API = useFlatSelect(props, emit)
  const {
    t,
    contentId,
    nsSelect,
    setSelected,
    states,
    menuRef,
    scrollbarRef,
    handleOptionSelect: _handleOptionSelect,
    handleQueryChange: _handleQueryChange,
  } = FLAT_SELECT_API
  const nsInput = useNamespace('input')

  // template refs
  const selectRef = ref<HTMLElement>()
  const selectionRef = ref<HTMLElement>()
  const tooltipRef = ref<TooltipInstance>()
  const tagTooltipRef = ref<TooltipInstance>()
  const inputRef = ref<HTMLInputElement>()
  const prefixRef = ref<HTMLElement>()
  const suffixRef = ref<HTMLElement>()
  const tagMenuRef = ref<HTMLElement>()
  const collapseItemRef = ref<HTMLElement>()
  // the controller of the expanded popup
  const expanded = ref(false)
  const hoverOption = ref()

  const { form, formItem } = useFormItem()
  const { inputId } = useFormItemInputId(props, {
    formItemContext: formItem,
  })
  const { valueOnClear, isEmptyValue } = useEmptyValues(props)

  const {
    isComposing,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
  } = useComposition({
    afterComposition: (e) => onInput(e),
  })

  const selectDisabled = computed(() => props.disabled || !!form?.disabled)

  const { wrapperRef, isFocused, handleBlur } = useFocusController(inputRef, {
    disabled: selectDisabled,
    afterFocus() {
      if (props.automaticDropdown && !expanded.value) {
        expanded.value = true
        states.menuVisibleOnFocus = true
      }
    },
    beforeBlur(event) {
      return (
        tooltipRef.value?.isFocusInsideContent(event) ||
        tagTooltipRef.value?.isFocusInsideContent(event)
      )
    },
    afterBlur() {
      expanded.value = false
      states.menuVisibleOnFocus = false
      if (props.validateEvent) {
        formItem?.validate?.('blur').catch((err) => debugWarn(err))
      }
    },
  })

  const hasModelValue = computed(() => {
    return isArray(props.modelValue)
      ? props.modelValue.length > 0
      : !isEmptyValue(props.modelValue)
  })

  const needStatusIcon = computed(() => form?.statusIcon ?? false)

  const showClose = computed(() => {
    return (
      props.clearable &&
      !selectDisabled.value &&
      states.inputHovering &&
      hasModelValue.value
    )
  })
  const iconComponent = computed(() =>
    props.remote && props.filterable && !props.remoteShowSuffix
      ? ''
      : props.suffixIcon
  )
  const iconReverse = computed(() =>
    nsSelect.is('reverse', !!(iconComponent.value && expanded.value))
  )

  const validateState = computed(() => formItem?.validateState || '')
  const validateIcon = computed(
    () =>
      validateState.value &&
      (ValidateComponentsMap[validateState.value] as Component)
  )

  const debounce = computed(() => (props.remote ? 300 : 0))

  const isRemoteSearchEmpty = computed(
    () => props.remote && !states.inputValue && states.options.size === 0
  )

  const filteredOptionsCount = computed(
    () => optionsArray.value.filter((option) => option.visible).length
  )

  const optionsArray = computed(() => {
    const list = Array.from(states.options.values())
    const newList: OptionPublicInstance[] = []
    states.optionValues.forEach((item) => {
      const index = list.findIndex((i) => i.value === item)
      if (index > -1) {
        newList.push(list[index])
      }
    })
    return newList.length >= list.length ? newList : list
  })

  const showNewOption = computed(() => {
    const hasExistingOption = optionsArray.value
      .filter((option) => {
        return !option.created
      })
      .some((option) => {
        return option.currentLabel === states.inputValue
      })
    return (
      props.filterable &&
      props.allowCreate &&
      states.inputValue !== '' &&
      !hasExistingOption
    )
  })

  const updateOptions = () => {
    if (props.filterable && isFunction(props.filterMethod)) return
    if (props.filterable && props.remote && isFunction(props.remoteMethod))
      return
    optionsArray.value.forEach((option) => {
      option.updateOption?.(states.inputValue)
    })
  }

  const selectSize = useFormSize()

  const collapseTagSize = computed(() =>
    ['small'].includes(selectSize.value) ? 'small' : 'default'
  )

  const dropdownMenuVisible = computed({
    get() {
      return expanded.value && !isRemoteSearchEmpty.value
    },
    set(val: boolean) {
      expanded.value = val
    },
  })

  const shouldShowPlaceholder = computed(() => {
    if (props.multiple && !isUndefined(props.modelValue)) {
      return ensureArray(props.modelValue).length === 0 && !states.inputValue
    }
    const value = isArray(props.modelValue)
      ? props.modelValue[0]
      : props.modelValue
    return props.filterable || isUndefined(value) ? !states.inputValue : true
  })

  const currentPlaceholder = computed(() => {
    const _placeholder = props.placeholder ?? t('el.select.placeholder')
    return props.multiple || !hasModelValue.value
      ? _placeholder
      : states.selectedLabel
  })

  // iOS Safari does not handle click events when a mouseenter event is registered and a DOM-change happens in a child
  // We use a Vue custom event binding to only register the event on non-iOS devices
  // ref.: https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html
  // Github Issue: https://github.com/vuejs/vue/issues/9859
  const mouseEnterEventName = computed(() => (isIOS ? null : 'mouseenter'))

  watch(
    () => props.modelValue,
    (val, oldVal) => {
      if (props.multiple) {
        if (props.filterable && !props.reserveKeyword) {
          states.inputValue = ''
          handleQueryChange('')
        }
      }
      setSelected()
      if (!isEqual(val, oldVal) && props.validateEvent) {
        formItem?.validate('change').catch((err) => debugWarn(err))
      }
    },
    {
      flush: 'post',
      deep: true,
    }
  )

  watch(
    () => expanded.value,
    (val) => {
      if (val) {
        handleQueryChange(states.inputValue)
      } else {
        states.inputValue = ''
        states.previousQuery = null
        states.isBeforeHide = true
      }
      emit('visible-change', val)
    }
  )

  //watch(
  //  // fix `Array.prototype.push/splice/..` cannot trigger non-deep watcher
  //  // https://github.com/vuejs/vue-next/issues/2116
  //  () => states.options.entries(),
  //  () => {
  //    if (!isClient) return
  //    // tooltipRef.value?.updatePopper?.()
  //    setSelected()
  //    if (
  //      props.defaultFirstOption &&
  //      (props.filterable || props.remote) &&
  //      filteredOptionsCount.value
  //    ) {
  //      checkDefaultFirstOption()
  //    }
  //  },
  //  {
  //    flush: 'post',
  //  }
  //)

  //TODO: maybe delete
  watch([() => states.hoveringIndex, optionsArray], ([val]) => {
    if (isNumber(val) && val > -1) {
      hoverOption.value = optionsArray.value[val] || {}
    } else {
      hoverOption.value = {}
    }
    optionsArray.value.forEach((option) => {
      option.hover = hoverOption.value === option
    })
  })

  watchEffect(() => {
    // Anything could cause options changed, then update options
    // If you want to control it by condition, write here
    if (states.isBeforeHide) return
    updateOptions()
  })

  const resetSelectionWidth = () => {
    states.selectionWidth = Number.parseFloat(
      window.getComputedStyle(selectionRef.value!).width
    )
  }

  const resetCollapseItemWidth = () => {
    states.collapseItemWidth =
      collapseItemRef.value!.getBoundingClientRect().width
  }

  const updateTooltip = () => {
    tooltipRef.value?.updatePopper?.()
  }

  const updateTagTooltip = () => {
    tagTooltipRef.value?.updatePopper?.()
  }

  const onInputChange = () => {
    if (states.inputValue.length > 0 && !expanded.value) {
      expanded.value = true
    }
    handleQueryChange(states.inputValue)
  }

  const onInput = (event: Event) => {
    states.inputValue = (event.target as HTMLInputElement).value
    if (props.remote) {
      debouncedOnInputChange()
    } else {
      return onInputChange()
    }
  }

  const debouncedOnInputChange = lodashDebounce(() => {
    onInputChange()
  }, debounce.value)

  const emitChange = (val: OptionValue | OptionValue[]) => {
    if (!isEqual(props.modelValue, val)) {
      emit(CHANGE_EVENT, val)
    }
  }

  const getLastNotDisabledIndex = (value: OptionValue[]) =>
    findLastIndex(value, (it) => {
      const option = states.cachedOptions.get(it)
      return option && !option.disabled && !option.states.groupDisabled
    })

  const deletePrevTag = (e: KeyboardEvent) => {
    if (!props.multiple) return
    if (e.code === EVENT_CODE.delete) return
    if ((e.target as HTMLInputElement).value.length <= 0) {
      const value = ensureArray(props.modelValue).slice()
      const lastNotDisabledIndex = getLastNotDisabledIndex(value)
      if (lastNotDisabledIndex < 0) return
      const removeTagValue = value[lastNotDisabledIndex]
      value.splice(lastNotDisabledIndex, 1)
      emit(UPDATE_MODEL_EVENT, value)
      emitChange(value)
      emit('remove-tag', removeTagValue)
    }
  }

  const deleteTag = (
    event: MouseEvent,
    tag: OptionPublicInstance | OptionBasic
  ) => {
    const index = states.selected.indexOf(tag)
    if (index > -1 && !selectDisabled.value) {
      const value = ensureArray(props.modelValue).slice()
      value.splice(index, 1)
      emit(UPDATE_MODEL_EVENT, value)
      emitChange(value)
      emit('remove-tag', tag.value)
    }
    event.stopPropagation()
    focus()
  }

  const deleteSelected = (event: Event) => {
    event.stopPropagation()
    const value = props.multiple ? [] : valueOnClear.value
    if (props.multiple) {
      for (const item of states.selected) {
        if (item.isDisabled) value.push(item.value)
      }
    }
    emit(UPDATE_MODEL_EVENT, value)
    emitChange(value)
    states.hoveringIndex = -1
    expanded.value = false
    emit('clear')
    focus()
  }

  //const handleOptionSelect = (option: OptionPublicInstance) => {
  //  if (props.multiple) {
  //    const value = ensureArray(props.modelValue ?? []).slice()
  //    const optionIndex = getValueIndex(value, option)
  //    if (optionIndex > -1) {
  //      value.splice(optionIndex, 1)
  //    } else if (
  //      props.multipleLimit <= 0 ||
  //      value.length < props.multipleLimit
  //    ) {
  //      value.push(option.value)
  //    }
  //    emit(UPDATE_MODEL_EVENT, value)
  //    emitChange(value)
  //    if (option.created) {
  //      handleQueryChange('')
  //    }
  //    if (props.filterable && !props.reserveKeyword) {
  //      states.inputValue = ''
  //    }
  //  } else {
  //    emit(UPDATE_MODEL_EVENT, option.value)
  //    emitChange(option.value)
  //    expanded.value = false
  //  }
  //  focus()
  //  if (expanded.value) return
  //  nextTick(() => {
  //    scrollToOption(option)
  //  })
  //}

  const scrollToOption = (
    option:
      | OptionPublicInstance
      | OptionPublicInstance[]
      | SelectStates['selected']
  ) => {
    const targetOption = isArray(option) ? option[0] : option
    let target = null

    if (targetOption?.value) {
      const options = optionsArray.value.filter(
        (item) => item.value === targetOption.value
      )
      if (options.length > 0) {
        target = options[0].$el
      }
    }

    if (tooltipRef.value && target) {
      const menu = tooltipRef.value?.popperRef?.contentRef?.querySelector?.(
        `.${nsSelect.be('dropdown', 'wrap')}`
      )
      if (menu) {
        scrollIntoView(menu as HTMLElement, target)
      }
    }
    scrollbarRef.value?.handleScroll()
  }

  const popperRef = computed(() => {
    return tooltipRef.value?.popperRef?.contentRef
  })

  const handleMenuEnter = () => {
    states.isBeforeHide = false
    nextTick(() => {
      scrollbarRef.value?.update()
      scrollToOption(states.selected)
    })
  }

  const focus = () => {
    inputRef.value?.focus()
  }

  const blur = () => {
    if (expanded.value) {
      expanded.value = false
      nextTick(() => inputRef.value?.blur())
      return
    }
    inputRef.value?.blur()
  }

  const handleClearClick = (event: Event) => {
    deleteSelected(event)
  }

  const handleClickOutside = (event: Event) => {
    expanded.value = false

    if (isFocused.value) {
      const _event = new FocusEvent('focus', event)
      nextTick(() => handleBlur(_event))
    }
  }

  const handleEsc = () => {
    if (states.inputValue.length > 0) {
      states.inputValue = ''
    } else {
      expanded.value = false
    }
  }

  const toggleMenu = () => {
    if (selectDisabled.value) return

    // We only set the inputHovering state to true on mouseenter event on iOS devices
    // To keep the state updated we set it here to true
    if (isIOS) states.inputHovering = true

    if (states.menuVisibleOnFocus) {
      // controlled by automaticDropdown
      states.menuVisibleOnFocus = false
    } else {
      expanded.value = !expanded.value
    }
  }

  const selectOption = () => {
    if (!expanded.value) {
      toggleMenu()
    } else {
      const option = optionsArray.value[states.hoveringIndex]
      if (option && !option.isDisabled) {
        handleOptionSelect(option)
      }
    }
  }

  const getValueKey = (
    item: OptionPublicInstance | SelectStates['selected'][0]
  ) => {
    return isObject(item.value) ? get(item.value, props.valueKey) : item.value
  }

  const optionsAllDisabled = computed(() =>
    optionsArray.value
      .filter((option) => option.visible)
      .every((option) => option.isDisabled)
  )

  const showTagList = computed(() => {
    if (!props.multiple) {
      return []
    }
    return props.collapseTags
      ? states.selected.slice(0, props.maxCollapseTags)
      : states.selected
  })

  const collapseTagList = computed(() => {
    if (!props.multiple) {
      return []
    }
    return props.collapseTags
      ? states.selected.slice(props.maxCollapseTags)
      : []
  })

  const navigateOptions = (direction: 'prev' | 'next') => {
    if (!expanded.value) {
      expanded.value = true
      return
    }
    if (
      states.options.size === 0 ||
      filteredOptionsCount.value === 0 ||
      isComposing.value
    )
      return

    if (!optionsAllDisabled.value) {
      if (direction === 'next') {
        states.hoveringIndex++
        if (states.hoveringIndex === states.options.size) {
          states.hoveringIndex = 0
        }
      } else if (direction === 'prev') {
        states.hoveringIndex--
        if (states.hoveringIndex < 0) {
          states.hoveringIndex = states.options.size - 1
        }
      }
      const option = optionsArray.value[states.hoveringIndex]
      if (option.isDisabled || !option.visible) {
        navigateOptions(direction)
      }
      nextTick(() => scrollToOption(hoverOption.value))
    }
  }

  const getGapWidth = () => {
    if (!selectionRef.value) return 0
    const style = window.getComputedStyle(selectionRef.value)
    return Number.parseFloat(style.gap || '6px')
  }

  // computed style
  const tagStyle = computed(() => {
    const gapWidth = getGapWidth()
    const maxWidth =
      collapseItemRef.value && props.maxCollapseTags === 1
        ? states.selectionWidth - states.collapseItemWidth - gapWidth
        : states.selectionWidth
    return { maxWidth: `${maxWidth}px` }
  })

  const collapseTagStyle = computed(() => {
    return { maxWidth: `${states.selectionWidth}px` }
  })
  function handleQueryChange(val: string) {
    if (states.previousQuery === val || isComposing.value) {
      return
    }
    _handleQueryChange(val)
  }

  function handleOptionSelect(option: OptionPublicInstance) {
    _handleOptionSelect(option)
    if (!props.multiple) {
      expanded.value = false
    }
    if (expanded.value) return
    nextTick(() => {
      scrollToOption(option)
    })
  }

  useResizeObserver(selectionRef, resetSelectionWidth)
  useResizeObserver(menuRef, updateTooltip)
  useResizeObserver(wrapperRef, updateTooltip)
  useResizeObserver(tagMenuRef, updateTagTooltip)
  useResizeObserver(collapseItemRef, resetCollapseItemWidth)

  provide(
    selectKey,
    reactive({
      props,
      states: FLAT_SELECT_API.states,
      selectRef,
      optionsArray: FLAT_SELECT_API.optionsArray,
      setSelected: FLAT_SELECT_API.setSelected,
      handleOptionSelect: FLAT_SELECT_API.handleOptionSelect,
      onOptionCreate: FLAT_SELECT_API.onOptionCreate,
      onOptionDestroy: FLAT_SELECT_API.onOptionDestroy,
    })
  )

  return {
    inputId,
    contentId,
    nsSelect,
    nsInput,
    states,
    isFocused,
    expanded,
    optionsArray,
    hoverOption,
    selectSize,
    filteredOptionsCount,
    updateTooltip,
    updateTagTooltip,
    debouncedOnInputChange,
    onInput,
    deletePrevTag,
    deleteTag,
    deleteSelected,
    handleOptionSelect,
    scrollToOption,
    hasModelValue,
    shouldShowPlaceholder,
    currentPlaceholder,
    mouseEnterEventName,
    needStatusIcon,
    showClose,
    iconComponent,
    iconReverse,
    validateState,
    validateIcon,
    showNewOption,
    updateOptions,
    collapseTagSize,
    selectDisabled,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
    handleMenuEnter,
    focus,
    blur,
    handleClearClick,
    handleClickOutside,
    handleEsc,
    toggleMenu,
    selectOption,
    getValueKey,
    navigateOptions,
    dropdownMenuVisible,
    showTagList,
    collapseTagList,

    // computed style
    tagStyle,
    collapseTagStyle,

    // DOM ref
    popperRef,
    inputRef,
    tooltipRef,
    tagTooltipRef,
    prefixRef,
    suffixRef,
    selectRef,
    wrapperRef,
    selectionRef,
    scrollbarRef,
    menuRef,
    tagMenuRef,
    collapseItemRef,
  }
}
