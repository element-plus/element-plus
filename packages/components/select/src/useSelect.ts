// @ts-nocheck
import {
  computed,
  nextTick,
  onMounted,
  reactive,
  ref,
  shallowRef,
  toRaw,
  triggerRef,
  watch,
} from 'vue'
import { isArray, isObject, toRawType } from '@vue/shared'
import {
  findLastIndex,
  get,
  isEqual,
  debounce as lodashDebounce,
} from 'lodash-unified'
import { useResizeObserver } from '@vueuse/core'
import {
  CHANGE_EVENT,
  EVENT_CODE,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import {
  ValidateComponentsMap,
  debugWarn,
  isClient,
  isFunction,
  isKorean,
  isNumber,
  isString,
  isUndefined,
  scrollIntoView,
} from '@element-plus/utils'
import {
  useDeprecated,
  useId,
  useLocale,
  useNamespace,
} from '@element-plus/hooks'
import { useFormItem, useFormSize } from '@element-plus/components/form'

import type { ComponentPublicInstance } from 'vue'
import type ElTooltip from '@element-plus/components/tooltip'
import type { QueryChangeCtx, SelectOptionProxy } from './token'

const MINIMUM_INPUT_WIDTH = 11

export const useSelect = (props, ctx) => {
  const { t } = useLocale()
  const contentId = useId()
  const nsSelect = useNamespace('select')
  const nsInput = useNamespace('input')

  const states = reactive({
    options: new Map(),
    cachedOptions: new Map(),
    disabledOptions: new Map(),
    createdLabel: null,
    createdSelected: false,
    selected: props.multiple ? [] : ({} as any),
    selectionWidth: 0,
    calculatorWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: false,
    selectedLabel: '',
    hoverIndex: -1,
    query: '',
    previousQuery: null,
    inputHovering: false,
    cachedPlaceHolder: '',
    menuVisibleOnFocus: false,
    isOnComposition: false,
    prefixWidth: 0,
    suffixWidth: 0,
    mouseEnter: false,
    focused: false,
  })

  useDeprecated(
    {
      from: 'suffixTransition',
      replacement: 'override style scheme',
      version: '2.3.0',
      scope: 'props',
      ref: 'https://element-plus.org/en-US/component/select.html#select-attributes',
    },
    computed(() => props.suffixTransition === false)
  )

  // template refs
  const reference = ref<ComponentPublicInstance<{
    focus: () => void
    blur: () => void
    input: HTMLInputElement
  }> | null>(null)
  const inputRef = ref<HTMLInputElement | null>(null)
  const tooltipRef = ref<InstanceType<typeof ElTooltip> | null>(null)
  const tagTooltipRef = ref<InstanceType<typeof ElTooltip> | null>(null)
  const tags = ref<HTMLElement | null>(null)
  const selectRef = ref<HTMLElement | null>(null)
  const wrapperRef = ref<HTMLElement | null>(null)
  const selectionRef = ref<HTMLElement | null>(null)
  const calculatorRef = ref<HTMLElement>(null)
  const prefixRef = ref<HTMLElement>(null)
  const suffixRef = ref<HTMLElement>(null)
  const scrollbar = ref<{
    handleScroll: () => void
  } | null>(null)
  const hoverOption = ref()
  const queryChange = shallowRef<QueryChangeCtx>({ query: '' })
  const groupQueryChange = shallowRef('')
  const optionList = ref<string[]>([])

  const { form, formItem } = useFormItem()

  const readonly = computed(
    () => !props.filterable || props.multiple || !states.visible
  )

  const selectDisabled = computed(() => props.disabled || form?.disabled)

  const hasModelValue = computed(() => {
    return props.multiple
      ? Array.isArray(props.modelValue) && props.modelValue.length > 0
      : props.modelValue !== undefined &&
          props.modelValue !== null &&
          props.modelValue !== ''
  })

  const showClose = computed(() => {
    const criteria =
      props.clearable &&
      !selectDisabled.value &&
      states.inputHovering &&
      hasModelValue.value
    return criteria
  })
  const iconComponent = computed(() =>
    props.remote && props.filterable && !props.remoteShowSuffix
      ? ''
      : props.suffixIcon
  )
  const iconReverse = computed(() =>
    nsSelect.is(
      'reverse',
      iconComponent.value && states.visible && props.suffixTransition
    )
  )

  const validateState = computed(() => formItem?.validateState || '')
  const validateIcon = computed(
    () => ValidateComponentsMap[validateState.value]
  )

  const debounce = computed(() => (props.remote ? 300 : 0))

  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t('el.select.loading')
    } else {
      if (props.remote && states.query === '' && states.options.size === 0)
        return false
      if (
        props.filterable &&
        states.query &&
        states.options.size > 0 &&
        states.filteredOptionsCount === 0
      ) {
        return props.noMatchText || t('el.select.noMatch')
      }
      if (states.options.size === 0) {
        return props.noDataText || t('el.select.noData')
      }
    }
    return null
  })

  const optionsArray = computed(() => {
    const list = Array.from(states.options.values())
    const newList = []
    optionList.value.forEach((item) => {
      const index = list.findIndex((i) => i.currentLabel === item)
      if (index > -1) {
        newList.push(list[index])
      }
    })
    return newList.length >= list.length ? newList : list
  })

  const cachedOptionsArray = computed(() =>
    Array.from(states.cachedOptions.values())
  )

  const showNewOption = computed(() => {
    const hasExistingOption = optionsArray.value
      .filter((option) => {
        return !option.created
      })
      .some((option) => {
        return option.currentLabel === states.query
      })
    return (
      props.filterable &&
      props.allowCreate &&
      states.query !== '' &&
      !hasExistingOption
    )
  })

  const selectSize = useFormSize()

  const collapseTagSize = computed(() =>
    ['small'].includes(selectSize.value) ? 'small' : 'default'
  )

  const dropMenuVisible = computed({
    get() {
      return states.visible && emptyText.value !== false
    },
    set(val: boolean) {
      states.visible = val
    },
  })

  const shouldShowPlaceholder = computed(() => {
    if (isArray(props.modelValue)) {
      return props.modelValue.length === 0 && !states.query
    }
    return !states.query
  })

  const currentPlaceholder = computed(() => {
    const _placeholder = props.placeholder || t('el.select.placeholder')
    return props.multiple || !hasModelValue.value
      ? _placeholder
      : states.selectedLabel
  })

  watch(
    () => props.modelValue,
    (val, oldVal) => {
      if (props.multiple) {
        if (props.filterable && !props.reserveKeyword) {
          states.query = ''
          handleQueryChange(states.query)
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
    () => states.visible,
    (val) => {
      if (!val) {
        if (props.filterable) {
          if (isFunction(props.filterMethod)) {
            props.filterMethod('')
          }
          if (isFunction(props.remoteMethod)) {
            props.remoteMethod('')
          }
        }
        states.query = ''
        states.previousQuery = null
        states.selectedLabel = ''
        states.menuVisibleOnFocus = false
        resetHoverIndex()

        if (!props.multiple) {
          if (states.selected) {
            if (
              props.filterable &&
              props.allowCreate &&
              states.createdSelected &&
              states.createdLabel
            ) {
              states.selectedLabel = states.createdLabel
            } else {
              states.selectedLabel = states.selected.currentLabel
            }
          }
        }
      } else {
        tooltipRef.value?.updatePopper?.()

        if (props.filterable) {
          states.filteredOptionsCount = states.optionsCount
          states.query = ''
          states.previousQuery = null
          handleQueryChange(states.query)
          if (!props.multiple && !props.remote) {
            queryChange.value.query = ''
            triggerRef(queryChange)
            triggerRef(groupQueryChange)
          }
        }
      }
      ctx.emit('visible-change', val)
    }
  )

  watch(
    // fix `Array.prototype.push/splice/..` cannot trigger non-deep watcher
    // https://github.com/vuejs/vue-next/issues/2116
    () => states.options.entries(),
    () => {
      if (!isClient) return
      tooltipRef.value?.updatePopper?.()
      const inputs = selectRef.value?.querySelectorAll('input') || []
      if (
        (!props.filterable &&
          !props.defaultFirstOption &&
          !isUndefined(props.modelValue)) ||
        !Array.from(inputs).includes(document.activeElement as HTMLInputElement)
      ) {
        setSelected()
      }
      if (
        props.defaultFirstOption &&
        (props.filterable || props.remote) &&
        states.filteredOptionsCount
      ) {
        checkDefaultFirstOption()
      }
    },
    {
      flush: 'post',
    }
  )

  watch(
    () => states.hoverIndex,
    (val) => {
      if (isNumber(val) && val > -1) {
        hoverOption.value = optionsArray.value[val] || {}
      } else {
        hoverOption.value = {}
      }
      optionsArray.value.forEach((option) => {
        option.hover = hoverOption.value === option
      })
    }
  )

  const handleQueryChange = async (val) => {
    if (states.previousQuery === val || states.isOnComposition) return
    if (
      states.previousQuery === null &&
      (isFunction(props.filterMethod) || isFunction(props.remoteMethod))
    ) {
      states.previousQuery = val
      return
    }
    states.previousQuery = val
    nextTick(() => {
      if (states.visible) tooltipRef.value?.updatePopper?.()
    })
    states.hoverIndex = -1
    if (props.remote && isFunction(props.remoteMethod)) {
      states.hoverIndex = -1
      props.remoteMethod(val)
    } else if (isFunction(props.filterMethod)) {
      props.filterMethod(val)
      triggerRef(groupQueryChange)
    } else {
      states.filteredOptionsCount = states.optionsCount
      queryChange.value.query = val

      triggerRef(queryChange)
      triggerRef(groupQueryChange)
    }
    if (
      props.defaultFirstOption &&
      (props.filterable || props.remote) &&
      states.filteredOptionsCount
    ) {
      await nextTick()
      checkDefaultFirstOption()
    }
  }

  /**
   * find and highlight first option as default selected
   * @remark
   * - if the first option in dropdown list is user-created,
   *   it would be at the end of the optionsArray
   *   so find it and set hover.
   *   (NOTE: there must be only one user-created option in dropdown list with query)
   * - if there's no user-created option in list, just find the first one as usual
   *   (NOTE: exclude options that are disabled or in disabled-group)
   */
  const checkDefaultFirstOption = () => {
    const optionsInDropdown = optionsArray.value.filter(
      (n) => n.visible && !n.disabled && !n.states.groupDisabled
    )
    const userCreatedOption = optionsInDropdown.find((n) => n.created)
    const firstOriginOption = optionsInDropdown[0]
    states.hoverIndex = getValueIndex(
      optionsArray.value,
      userCreatedOption || firstOriginOption
    )
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
      return
    } else {
      states.selectedLabel = ''
    }
    const result: any[] = []
    if (Array.isArray(props.modelValue)) {
      props.modelValue.forEach((value) => {
        result.push(getOption(value))
      })
    }
    states.selected = result
  }

  const getOption = (value) => {
    let option
    const isObjectValue = toRawType(value).toLowerCase() === 'object'
    const isNull = toRawType(value).toLowerCase() === 'null'
    const isUndefined = toRawType(value).toLowerCase() === 'undefined'

    for (let i = states.cachedOptions.size - 1; i >= 0; i--) {
      const cachedOption = cachedOptionsArray.value[i]
      const isEqualValue = isObjectValue
        ? get(cachedOption.value, props.valueKey) === get(value, props.valueKey)
        : cachedOption.value === value
      if (isEqualValue) {
        option = {
          value,
          currentLabel: cachedOption.currentLabel,
          isDisabled: cachedOption.isDisabled,
        }
        break
      }
    }
    if (option) return option
    const label = isObjectValue
      ? value.label
      : !isNull && !isUndefined
      ? value
      : ''
    const newOption = {
      value,
      currentLabel: label,
    }
    if (props.multiple) {
      ;(newOption as any).hitState = false
    }
    return newOption
  }

  const resetHoverIndex = () => {
    setTimeout(() => {
      const valueKey = props.valueKey
      if (!props.multiple) {
        states.hoverIndex = optionsArray.value.findIndex((item) => {
          return getValueKey(item) === getValueKey(states.selected)
        })
      } else {
        if (states.selected.length > 0) {
          states.hoverIndex = Math.min.apply(
            null,
            states.selected.map((selected) => {
              return optionsArray.value.findIndex((item) => {
                return get(item, valueKey) === get(selected, valueKey)
              })
            })
          )
        } else {
          states.hoverIndex = -1
        }
      }
    }, 300)
  }

  const handleResize = () => {
    tooltipRef.value?.updatePopper?.()
  }

  const resetSelectionWidth = () => {
    states.selectionWidth = selectionRef.value.getBoundingClientRect().width
  }

  const resetCalculatorWidth = () => {
    states.calculatorWidth = calculatorRef.value.getBoundingClientRect().width
  }

  const resetPrefixWidth = () => {
    states.prefixWidth = prefixRef.value.getBoundingClientRect().width
  }

  const resetSuffixWidth = () => {
    states.suffixWidth = suffixRef.value.getBoundingClientRect().width
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

  const debouncedQueryChange = lodashDebounce((e) => {
    handleQueryChange(e.target.value)
  }, debounce.value)

  const emitChange = (val) => {
    if (!isEqual(props.modelValue, val)) {
      ctx.emit(CHANGE_EVENT, val)
    }
  }

  const getLastNotDisabledIndex = (value) =>
    findLastIndex(value, (it) => !states.disabledOptions.has(it))

  const deletePrevTag = (e) => {
    if (!props.multiple) return
    if (e.code === EVENT_CODE.delete) return
    if (e.target.value.length <= 0 && !toggleLastOptionHitState()) {
      const value = props.modelValue.slice()
      const lastNotDisabledIndex = getLastNotDisabledIndex(value)
      if (lastNotDisabledIndex < 0) return
      value.splice(lastNotDisabledIndex, 1)
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
    focus()
  }

  const deleteSelected = (event) => {
    event.stopPropagation()
    const value: string | any[] = props.multiple ? [] : ''
    if (!isString(value)) {
      for (const item of states.selected) {
        if (item.isDisabled) value.push(item.value)
      }
    }
    ctx.emit(UPDATE_MODEL_EVENT, value)
    emitChange(value)
    states.hoverIndex = -1
    states.visible = false
    ctx.emit('clear')
    focus()
  }

  const handleOptionSelect = (option) => {
    if (props.multiple) {
      const value = (props.modelValue || []).slice()
      const optionIndex = getValueIndex(value, option.value)
      if (optionIndex > -1) {
        value.splice(optionIndex, 1)
      } else if (
        props.multipleLimit <= 0 ||
        value.length < props.multipleLimit
      ) {
        value.push(option.value)
      }
      ctx.emit(UPDATE_MODEL_EVENT, value)
      emitChange(value)
      if (option.created) {
        states.query = ''
        handleQueryChange('')
      }
      if (props.filterable) inputRef.value?.focus()
    } else {
      ctx.emit(UPDATE_MODEL_EVENT, option.value)
      emitChange(option.value)
      states.visible = false
    }

    setSoftFocus()
    if (states.visible) return
    nextTick(() => {
      scrollToOption(option)
    })
  }

  const getValueIndex = (arr: any[] = [], value) => {
    if (!isObject(value)) return arr.indexOf(value)

    const valueKey = props.valueKey
    let index = -1
    arr.some((item, i) => {
      if (toRaw(get(item, valueKey)) === get(value, valueKey)) {
        index = i
        return true
      }
      return false
    })
    return index
  }

  const setSoftFocus = () => {
    const _input = inputRef.value || reference.value
    if (_input) {
      _input?.focus()
    }
  }

  const scrollToOption = (option) => {
    const targetOption = Array.isArray(option) ? option[0] : option
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
    scrollbar.value?.handleScroll()
  }

  const onOptionCreate = (vm: SelectOptionProxy) => {
    states.optionsCount++
    states.filteredOptionsCount++
    states.options.set(vm.value, vm)
    states.cachedOptions.set(vm.value, vm)
    vm.disabled && states.disabledOptions.set(vm.value, vm)
  }

  const onOptionDestroy = (key, vm: SelectOptionProxy) => {
    if (states.options.get(key) === vm) {
      states.optionsCount--
      states.filteredOptionsCount--
      states.options.delete(key)
    }
  }

  const resetInputState = (e: KeyboardEvent) => {
    if (e.code !== EVENT_CODE.backspace) toggleLastOptionHitState(false)
  }

  const toggleLastOptionHitState = (hit?: boolean) => {
    if (!Array.isArray(states.selected)) return
    const lastNotDisabledIndex = getLastNotDisabledIndex(
      states.selected.map((it) => it.value)
    )
    const option = states.selected[lastNotDisabledIndex]
    if (!option) return

    if (hit === true || hit === false) {
      option.hitState = hit
      return hit
    }

    option.hitState = !option.hitState
    return option.hitState
  }

  const handleComposition = (event) => {
    const text = event.target.value
    if (event.type === 'compositionend') {
      states.isOnComposition = false
      nextTick(() => handleQueryChange(text))
    } else {
      const lastCharacter = text[text.length - 1] || ''
      states.isOnComposition = !isKorean(lastCharacter)
    }
  }

  const popperRef = computed(() => {
    return tooltipRef.value?.popperRef?.contentRef
  })

  const onOptionsRendered = (v) => {
    optionList.value = v
  }

  const handleMenuEnter = () => {
    nextTick(() => scrollToOption(states.selected))
  }

  const handleFocus = (event: FocusEvent) => {
    if (!states.focused) {
      if (props.automaticDropdown || props.filterable) {
        if (props.filterable && !states.visible) {
          states.menuVisibleOnFocus = true
        }
        states.visible = true
      }
      states.focused = true
      ctx.emit('focus', event)
    }
  }

  const focus = () => {
    inputRef.value?.focus()
  }

  const blur = () => {
    states.visible = false
    inputRef.value?.blur()
  }

  const handleBlur = (event: FocusEvent) => {
    // validate current focus event is inside el-tooltip-content or el-select
    // if so, ignore the blur event.
    if (
      tooltipRef.value?.isFocusInsideContent(event) ||
      tagTooltipRef.value?.isFocusInsideContent(event) ||
      selectRef.value?.contains(event.relatedTarget)
    ) {
      return
    }

    states.visible && handleClose()
    states.focused = false
    ctx.emit('blur', event)
  }

  const handleClearClick = (event: Event) => {
    deleteSelected(event)
  }

  const handleClose = () => {
    states.visible = false
  }

  const handleKeydownEscape = (event: KeyboardEvent) => {
    if (states.visible) {
      event.preventDefault()
      event.stopPropagation()
      states.visible = false
    }
  }

  const toggleMenu = (e?: PointerEvent) => {
    if (e && !states.mouseEnter) {
      return
    }
    if (!selectDisabled.value) {
      if (states.menuVisibleOnFocus) {
        states.menuVisibleOnFocus = false
      } else {
        if (!tooltipRef.value || !tooltipRef.value.isFocusInsideContent()) {
          states.visible = !states.visible
        }
      }
      focus()
    }
  }

  const selectOption = () => {
    if (!states.visible) {
      toggleMenu()
    } else {
      if (optionsArray.value[states.hoverIndex]) {
        handleOptionSelect(optionsArray.value[states.hoverIndex])
      }
    }
  }

  const getValueKey = (item) => {
    return isObject(item.value) ? get(item.value, props.valueKey) : item.value
  }

  const optionsAllDisabled = computed(() =>
    optionsArray.value
      .filter((option) => option.visible)
      .every((option) => option.disabled)
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

  const navigateOptions = (direction) => {
    if (!states.visible) {
      states.visible = true
      return
    }
    if (states.options.size === 0 || states.filteredOptionsCount === 0) return
    if (states.isOnComposition) return

    if (!optionsAllDisabled.value) {
      if (direction === 'next') {
        states.hoverIndex++
        if (states.hoverIndex === states.options.size) {
          states.hoverIndex = 0
        }
      } else if (direction === 'prev') {
        states.hoverIndex--
        if (states.hoverIndex < 0) {
          states.hoverIndex = states.options.size - 1
        }
      }
      const option = optionsArray.value[states.hoverIndex]
      if (
        option.disabled === true ||
        option.states.groupDisabled === true ||
        !option.visible
      ) {
        navigateOptions(direction)
      }
      nextTick(() => scrollToOption(hoverOption.value))
    }
  }

  const handleMouseEnter = () => {
    states.mouseEnter = true
  }

  const handleMouseLeave = () => {
    states.mouseEnter = false
  }
  const handleDeleteTooltipTag = (event, tag) => {
    deleteTag(event, tag)
    tagTooltipRef.value?.updatePopper?.()
  }

  // computed style
  const tagStyle = computed(() => {
    return { maxWidth: `${states.selectionWidth}px` }
  })

  const placeholderStyle = computed(() => {
    const gap = selectSize.value === 'small' ? 4 : 6
    return {
      maxWidth: `${states.selectionWidth}px`,
      paddingInlineStart: states.prefixWidth
        ? `${states.prefixWidth + gap}px`
        : '',
      paddingInlineEnd: states.suffixWidth
        ? `${states.suffixWidth + gap}px`
        : '',
    }
  })

  const inputStyle = computed(() => ({
    width: `${Math.max(states.calculatorWidth, MINIMUM_INPUT_WIDTH)}px`,
  }))

  if (props.multiple && !Array.isArray(props.modelValue)) {
    ctx.emit(UPDATE_MODEL_EVENT, [])
  }
  if (!props.multiple && Array.isArray(props.modelValue)) {
    ctx.emit(UPDATE_MODEL_EVENT, '')
  }

  useResizeObserver(selectRef, handleResize)
  useResizeObserver(selectionRef, resetSelectionWidth)
  useResizeObserver(calculatorRef, resetCalculatorWidth)
  useResizeObserver(prefixRef, resetPrefixWidth)
  useResizeObserver(suffixRef, resetSuffixWidth)

  onMounted(() => {
    setSelected()
  })

  return {
    contentId,
    nsSelect,
    nsInput,
    states,
    optionList,
    optionsArray,
    hoverOption,
    selectSize,
    handleResize,
    resetCalculatorWidth,
    resetPrefixWidth,
    resetSuffixWidth,
    debouncedOnInputChange,
    debouncedQueryChange,
    deletePrevTag,
    deleteTag,
    deleteSelected,
    handleOptionSelect,
    scrollToOption,
    readonly,
    hasModelValue,
    shouldShowPlaceholder,
    currentPlaceholder,
    showClose,
    iconComponent,
    iconReverse,
    validateState,
    validateIcon,
    showNewOption,
    collapseTagSize,
    setSelected,
    selectDisabled,
    emptyText,
    toggleLastOptionHitState,
    resetInputState,
    handleComposition,
    onOptionsRendered,
    onOptionCreate,
    onOptionDestroy,
    handleMenuEnter,
    handleFocus,
    focus,
    blur,
    handleBlur,
    handleClearClick,
    handleClose,
    handleKeydownEscape,
    toggleMenu,
    selectOption,
    getValueKey,
    navigateOptions,
    handleDeleteTooltipTag,
    dropMenuVisible,
    queryChange,
    groupQueryChange,
    showTagList,
    collapseTagList,

    // computed style
    tagStyle,
    placeholderStyle,
    inputStyle,

    // DOM ref
    popperRef,
    reference,
    inputRef,
    tooltipRef,
    tagTooltipRef,
    calculatorRef,
    prefixRef,
    suffixRef,
    tags,
    selectRef,
    wrapperRef,
    selectionRef,
    scrollbar,

    // Mouser Event
    handleMouseEnter,
    handleMouseLeave,
  }
}
