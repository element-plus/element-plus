import {
  computed,
  nextTick,
  onMounted,
  reactive,
  ref,
  watch,
  watchEffect,
} from 'vue'
import {
  findLastIndex,
  get,
  isEqual,
  debounce as lodashDebounce,
} from 'lodash-unified'
import { useResizeObserver } from '@vueuse/core'
import {
  ValidateComponentsMap,
  debugWarn,
  escapeStringRegexp,
  isArray,
  isFunction,
  isNumber,
  isObject,
} from '@element-plus/utils'
import {
  useComposition,
  useEmptyValues,
  useFocusController,
  useLocale,
  useNamespace,
} from '@element-plus/hooks'
import {
  CHANGE_EVENT,
  EVENT_CODE,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import {
  useFormItem,
  useFormItemInputId,
  useFormSize,
} from '@element-plus/components/form'

import { ArrowDown } from '@element-plus/icons-vue'
import { useAllowCreate } from './useAllowCreate'
import { useProps } from './useProps'

import type { Option, OptionType, SelectStates } from './select.types'
import type { ISelectV2Props } from './token'
import type { SelectEmitFn } from './defaults'
import type { TooltipInstance } from '@element-plus/components/tooltip'
import type { SelectDropdownInstance } from './select-dropdown'
import type { Component, ComputedRef, Ref, WritableComputedRef } from 'vue'

type useSelectReturnType = (
  props: ISelectV2Props,
  emit: SelectEmitFn
) => {
  inputId: Ref<string | undefined>
  collapseTagSize: ComputedRef<'default' | 'small'>
  currentPlaceholder: ComputedRef<string>
  expanded: Ref<boolean>
  emptyText: ComputedRef<string | false | null>
  popupHeight: ComputedRef<number>
  debounce: ComputedRef<0 | 300>
  allOptions: ComputedRef<OptionType[]>
  filteredOptions: Ref<OptionType[]>
  iconComponent: ComputedRef<any>
  iconReverse: ComputedRef<any>
  tagStyle: ComputedRef<{ maxWidth: string }>
  collapseTagStyle: ComputedRef<{ maxWidth: string }>
  popperSize: Ref<number>
  dropdownMenuVisible: WritableComputedRef<boolean>
  hasModelValue: ComputedRef<boolean>
  shouldShowPlaceholder: ComputedRef<boolean>
  selectDisabled: ComputedRef<boolean | undefined>
  selectSize: ComputedRef<string>
  needStatusIcon: ComputedRef<boolean>
  showClearBtn: ComputedRef<boolean>
  states: SelectStates
  isFocused: Ref<boolean>
  nsSelect: ReturnType<typeof useNamespace>
  nsInput: ReturnType<typeof useNamespace>
  inputRef: Ref<HTMLElement | undefined>
  menuRef: Ref<SelectDropdownInstance | undefined>
  tagMenuRef: Ref<HTMLElement | undefined>
  tooltipRef: Ref<TooltipInstance | undefined>
  tagTooltipRef: Ref<TooltipInstance | undefined>
  selectRef: Ref<HTMLElement | undefined>
  wrapperRef: Ref<HTMLElement | undefined>
  selectionRef: Ref<HTMLElement | undefined>
  prefixRef: Ref<HTMLElement | undefined>
  suffixRef: Ref<HTMLElement | undefined>
  collapseItemRef: Ref<HTMLElement | undefined>
  popperRef: ComputedRef<HTMLElement | undefined>
  validateState: ComputedRef<string>
  validateIcon: ComputedRef<Component | undefined>
  showTagList: ComputedRef<Option[]>
  collapseTagList: ComputedRef<Option[]>
  debouncedOnInputChange: () => void
  deleteTag: (event: MouseEvent, option: Option) => void
  getLabel: (option: Option) => string
  getValue: (option: Option) => unknown
  getDisabled: (option: Option) => boolean
  getValueKey: (item: unknown) => any
  handleClear: () => void
  handleClickOutside: (event: Event) => void
  handleDel: (e: KeyboardEvent) => void
  handleEsc: () => void
  focus: () => void
  blur: () => void
  handleMenuEnter: () => void
  handleResize: () => void
  resetSelectionWidth: () => void
  updateTooltip: () => void
  updateTagTooltip: () => void
  updateOptions: () => void
  toggleMenu: () => void
  scrollTo: (index: number) => void
  onInput: (event: Event) => void
  onKeyboardNavigate: (
    direction: 'forward' | 'backward',
    hoveringIndex?: number
  ) => void
  onKeyboardSelect: () => void
  onSelect: (option: Option) => void
  onHover: (idx?: number) => void
  handleCompositionStart: (event: CompositionEvent) => void
  handleCompositionEnd: (event: CompositionEvent) => void
  handleCompositionUpdate: (event: CompositionEvent) => void
}

const useSelect: useSelectReturnType = (
  props: ISelectV2Props,
  emit: SelectEmitFn
) => {
  // inject
  const { t } = useLocale()
  const nsSelect = useNamespace('select')
  const nsInput = useNamespace('input')
  const { form: elForm, formItem: elFormItem } = useFormItem()
  const { inputId } = useFormItemInputId(props, {
    formItemContext: elFormItem,
  })
  const { aliasProps, getLabel, getValue, getDisabled, getOptions } =
    useProps(props)
  const { valueOnClear, isEmptyValue } = useEmptyValues(props)

  const states: SelectStates = reactive({
    inputValue: '',
    cachedOptions: [],
    createdOptions: [],
    hoveringIndex: -1,
    inputHovering: false,
    selectionWidth: 0,
    collapseItemWidth: 0,
    previousQuery: null,
    previousValue: undefined,
    selectedLabel: '',
    menuVisibleOnFocus: false,
    isBeforeHide: false,
  })

  // data refs
  const popperSize = ref(-1)

  // DOM & Component refs
  const selectRef = ref<HTMLElement>()
  const selectionRef = ref<HTMLElement>()
  const tooltipRef = ref<TooltipInstance>()
  const tagTooltipRef = ref<TooltipInstance>()
  const inputRef = ref<HTMLElement>()
  const prefixRef = ref<HTMLElement>()
  const suffixRef = ref<HTMLElement>()
  const menuRef = ref<SelectDropdownInstance>()
  const tagMenuRef = ref<HTMLElement>()
  const collapseItemRef = ref<HTMLElement>()

  const {
    isComposing,
    handleCompositionStart,
    handleCompositionEnd,
    handleCompositionUpdate,
  } = useComposition({
    afterComposition: (e) => onInput(e),
  })

  const { wrapperRef, isFocused, handleBlur } = useFocusController(inputRef, {
    beforeFocus() {
      return selectDisabled.value
    },
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
    },
  })

  const allOptions = computed(() => filterOptions(''))

  const hasOptions = computed(() => {
    if (props.loading) return false
    return props.options.length > 0 || states.createdOptions.length > 0
  })

  const filteredOptions = ref<OptionType[]>([])
  // the controller of the expanded popup
  const expanded = ref(false)

  const selectDisabled = computed(() => props.disabled || elForm?.disabled)

  const needStatusIcon = computed(() => elForm?.statusIcon ?? false)

  const popupHeight = computed(() => {
    const totalHeight = filteredOptions.value.length * props.itemHeight
    return totalHeight > props.height ? props.height : totalHeight
  })

  const hasModelValue = computed(() => {
    return props.multiple
      ? isArray(props.modelValue) && props.modelValue.length > 0
      : !isEmptyValue(props.modelValue)
  })

  const showClearBtn = computed(() => {
    return (
      props.clearable &&
      !selectDisabled.value &&
      states.inputHovering &&
      hasModelValue.value
    )
  })

  const iconComponent = computed(() =>
    props.remote && props.filterable ? '' : ArrowDown
  )

  const iconReverse = computed(
    () => iconComponent.value && nsSelect.is('reverse', expanded.value)
  )

  const validateState = computed(() => elFormItem?.validateState || '')
  const validateIcon = computed(() => {
    // When we use indexed access to get the type of an undeclared property,
    // the unsafe type `any` will be inferred, which TypeScript throws an error to emphasize it.
    // To avoid TypeScript complaining about it, we use truthiness narrowing to narrow the type of validateState.
    if (!validateState.value) return
    return ValidateComponentsMap[validateState.value]
  })

  const debounce = computed(() => (props.remote ? 300 : 0))

  // filteredOptions includes flatten the data into one dimensional array.
  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t('el.select.loading')
    } else {
      if (props.remote && !states.inputValue && !hasOptions.value) return false
      if (
        props.filterable &&
        states.inputValue &&
        hasOptions.value &&
        filteredOptions.value.length === 0
      ) {
        return props.noMatchText || t('el.select.noMatch')
      }
      if (!hasOptions.value) {
        return props.noDataText || t('el.select.noData')
      }
    }
    return null
  })

  const filterOptions = (query: string) => {
    const regexp = new RegExp(escapeStringRegexp(query), 'i')
    const isFilterMethodValid =
      props.filterable && isFunction(props.filterMethod)
    const isRemoteMethodValid =
      props.filterable && props.remote && isFunction(props.remoteMethod)
    const isValidOption = (o: Option): boolean => {
      if (isFilterMethodValid || isRemoteMethodValid) return true
      // when query was given, we should test on the label see whether the label contains the given query
      return query ? regexp.test(getLabel(o) || '') : true
    }
    if (props.loading) {
      return []
    }

    return [...states.createdOptions, ...props.options].reduce((all, item) => {
      const options = getOptions(item)

      if (isArray(options)) {
        const filtered = options.filter(isValidOption)

        if (filtered.length > 0) {
          all.push(
            {
              label: getLabel(item),
              type: 'Group',
            },
            ...filtered
          )
        }
      } else if (props.remote || isValidOption(item)) {
        all.push(item)
      }

      return all
    }, []) as OptionType[]
  }

  const updateOptions = () => {
    filteredOptions.value = filterOptions(states.inputValue)
  }

  const allOptionsValueMap = computed(() => {
    const valueMap = new Map()

    allOptions.value.forEach((option, index) => {
      valueMap.set(getValueKey(getValue(option)), { option, index })
    })
    return valueMap
  })

  const filteredOptionsValueMap = computed(() => {
    const valueMap = new Map()

    filteredOptions.value.forEach((option, index) => {
      valueMap.set(getValueKey(getValue(option)), { option, index })
    })
    return valueMap
  })

  const optionsAllDisabled = computed(() =>
    filteredOptions.value.every((option) => getDisabled(option))
  )

  const selectSize = useFormSize()

  const collapseTagSize = computed(() =>
    'small' === selectSize.value ? 'small' : 'default'
  )

  const calculatePopperSize = () => {
    if (isNumber(props.fitInputWidth)) {
      popperSize.value = props.fitInputWidth
      return
    }
    const width = selectRef.value?.offsetWidth || 200
    if (!props.fitInputWidth && hasOptions.value) {
      nextTick(() => {
        popperSize.value = Math.max(width, calculateLabelMaxWidth())
      })
    } else {
      popperSize.value = width
    }
  }

  // TODO Caching implementation
  // 1. There is no need to calculate options that have already been calculated
  // 2. Repeatedly expand and close when persistent is set to false, no need for repeated calculations
  const calculateLabelMaxWidth = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const selector = nsSelect.be('dropdown', 'item')
    const dom = menuRef.value?.listRef?.innerRef || document
    const dropdownItemEl = dom.querySelector(`.${selector}`)
    if (dropdownItemEl === null || ctx === null) return 0
    const style = getComputedStyle(dropdownItemEl)
    const padding =
      Number.parseFloat(style.paddingLeft) +
      Number.parseFloat(style.paddingRight)
    ctx.font = style.font
    const maxWidth = filteredOptions.value.reduce((max, option) => {
      const metrics = ctx.measureText(getLabel(option))
      return Math.max(metrics.width, max)
    }, 0)
    return maxWidth + padding
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

  const shouldShowPlaceholder = computed(() => {
    if (isArray(props.modelValue)) {
      return props.modelValue.length === 0 && !states.inputValue
    }

    // when it's not multiple mode, we only determine this flag based on filterable and expanded
    // when filterable flag is true, which means we have input box on the screen
    return props.filterable ? !states.inputValue : true
  })

  const currentPlaceholder = computed(() => {
    const _placeholder = props.placeholder ?? t('el.select.placeholder')
    return props.multiple || !hasModelValue.value
      ? _placeholder
      : states.selectedLabel
  })

  // this obtains the actual popper DOM element.
  const popperRef = computed(() => tooltipRef.value?.popperRef?.contentRef)

  // the index with current value in options
  const indexRef = computed<number>(() => {
    if (props.multiple) {
      const len = (props.modelValue as []).length
      if (
        (props.modelValue as Array<any>).length > 0 &&
        filteredOptionsValueMap.value.has(props.modelValue[len - 1])
      ) {
        const { index } = filteredOptionsValueMap.value.get(
          props.modelValue[len - 1]
        )
        return index
      }
    } else {
      if (
        !isEmptyValue(props.modelValue) &&
        filteredOptionsValueMap.value.has(props.modelValue)
      ) {
        const { index } = filteredOptionsValueMap.value.get(props.modelValue)
        return index
      }
    }
    return -1
  })

  const dropdownMenuVisible = computed({
    get() {
      return expanded.value && emptyText.value !== false
    },
    set(val: boolean) {
      expanded.value = val
    },
  })

  const showTagList = computed(() => {
    if (!props.multiple) {
      return []
    }
    return props.collapseTags
      ? states.cachedOptions.slice(0, props.maxCollapseTags)
      : states.cachedOptions
  })

  const collapseTagList = computed(() => {
    if (!props.multiple) {
      return []
    }
    return props.collapseTags
      ? states.cachedOptions.slice(props.maxCollapseTags)
      : []
  })

  // hooks
  const {
    createNewOption,
    removeNewOption,
    selectNewOption,
    clearAllNewOption,
  } = useAllowCreate(props, states)

  // methods
  const toggleMenu = () => {
    if (selectDisabled.value) return

    if (states.menuVisibleOnFocus) {
      // controlled by automaticDropdown
      states.menuVisibleOnFocus = false
    } else {
      expanded.value = !expanded.value
    }
  }

  const onInputChange = () => {
    if (states.inputValue.length > 0 && !expanded.value) {
      expanded.value = true
    }
    createNewOption(states.inputValue)
    handleQueryChange(states.inputValue)
  }

  const debouncedOnInputChange = lodashDebounce(onInputChange, debounce.value)

  const handleQueryChange = (val: string) => {
    if (states.previousQuery === val || isComposing.value) {
      return
    }
    states.previousQuery = val
    if (props.filterable && isFunction(props.filterMethod)) {
      props.filterMethod(val)
    } else if (
      props.filterable &&
      props.remote &&
      isFunction(props.remoteMethod)
    ) {
      props.remoteMethod(val)
    }
    if (
      props.defaultFirstOption &&
      (props.filterable || props.remote) &&
      filteredOptions.value.length
    ) {
      nextTick(checkDefaultFirstOption)
    } else {
      nextTick(updateHoveringIndex)
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
    const optionsInDropdown = filteredOptions.value.filter(
      (n) => !n.disabled && n.type !== 'Group'
    )
    const userCreatedOption = optionsInDropdown.find((n) => n.created)
    const firstOriginOption = optionsInDropdown[0]
    states.hoveringIndex = getValueIndex(
      filteredOptions.value,
      userCreatedOption || firstOriginOption
    )
  }

  const emitChange = (val: any | any[]) => {
    if (!isEqual(props.modelValue, val)) {
      emit(CHANGE_EVENT, val)
    }
  }

  const update = (val: any) => {
    emit(UPDATE_MODEL_EVENT, val)
    emitChange(val)
    states.previousValue = props.multiple ? String(val) : val
  }

  const getValueIndex = (arr: unknown[] = [], value: unknown) => {
    if (!isObject(value)) {
      return arr.indexOf(value)
    }
    const valueKey = props.valueKey
    let index = -1
    arr.some((item, i) => {
      if (get(item, valueKey) === get(value, valueKey)) {
        index = i
        return true
      }
      return false
    })
    return index
  }

  const getValueKey = (item: unknown) => {
    return isObject(item) ? get(item, props.valueKey) : item
  }

  const handleResize = () => {
    calculatePopperSize()
  }

  const resetSelectionWidth = () => {
    states.selectionWidth = selectionRef.value!.getBoundingClientRect().width
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

  const onSelect = (option: Option) => {
    if (props.multiple) {
      let selectedOptions = (props.modelValue as any[]).slice()

      const index = getValueIndex(selectedOptions, getValue(option))
      if (index > -1) {
        selectedOptions = [
          ...selectedOptions.slice(0, index),
          ...selectedOptions.slice(index + 1),
        ]
        states.cachedOptions.splice(index, 1)
        removeNewOption(option)
      } else if (
        props.multipleLimit <= 0 ||
        selectedOptions.length < props.multipleLimit
      ) {
        selectedOptions = [...selectedOptions, getValue(option)]
        states.cachedOptions.push(option)
        selectNewOption(option)
      }
      update(selectedOptions)
      if (option.created) {
        handleQueryChange('')
      }
      if (props.filterable && !props.reserveKeyword) {
        states.inputValue = ''
      }
    } else {
      states.selectedLabel = getLabel(option)
      update(getValue(option))
      expanded.value = false
      selectNewOption(option)
      if (!option.created) {
        clearAllNewOption()
      }
    }
    focus()
  }

  const deleteTag = (event: MouseEvent, option: Option) => {
    let selectedOptions = (props.modelValue as any[]).slice()

    const index = getValueIndex(selectedOptions, getValue(option))

    if (index > -1 && !selectDisabled.value) {
      selectedOptions = [
        ...(props.modelValue as Array<unknown>).slice(0, index),
        ...(props.modelValue as Array<unknown>).slice(index + 1),
      ]
      states.cachedOptions.splice(index, 1)
      update(selectedOptions)
      emit('remove-tag', getValue(option))
      removeNewOption(option)
    }
    event.stopPropagation()
    focus()
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

  // keyboard handlers
  const handleEsc = () => {
    if (states.inputValue.length > 0) {
      states.inputValue = ''
    } else {
      expanded.value = false
    }
  }

  const getLastNotDisabledIndex = (value: unknown[]) =>
    findLastIndex(
      value,
      (it) =>
        !states.cachedOptions.some(
          (option) => getValue(option) === it && getDisabled(option)
        )
    )

  const handleDel = (e: KeyboardEvent) => {
    if (!props.multiple) return
    if (e.code === EVENT_CODE.delete) return
    if (states.inputValue.length === 0) {
      e.preventDefault()
      const selected = (props.modelValue as Array<any>).slice()
      const lastNotDisabledIndex = getLastNotDisabledIndex(selected)
      if (lastNotDisabledIndex < 0) return
      const removeTagValue = selected[lastNotDisabledIndex]
      selected.splice(lastNotDisabledIndex, 1)
      const option = states.cachedOptions[lastNotDisabledIndex]
      states.cachedOptions.splice(lastNotDisabledIndex, 1)
      removeNewOption(option)
      update(selected)
      emit('remove-tag', removeTagValue)
    }
  }

  const handleClear = () => {
    let emptyValue: string | any[]
    if (isArray(props.modelValue)) {
      emptyValue = []
    } else {
      emptyValue = valueOnClear.value
    }

    if (props.multiple) {
      states.cachedOptions = []
    } else {
      states.selectedLabel = ''
    }
    expanded.value = false
    update(emptyValue)
    emit('clear')
    clearAllNewOption()
    focus()
  }

  const onKeyboardNavigate = (
    direction: 'forward' | 'backward',
    hoveringIndex: number | undefined = undefined
  ): void => {
    const options = filteredOptions.value
    if (
      !['forward', 'backward'].includes(direction) ||
      selectDisabled.value ||
      options.length <= 0 ||
      optionsAllDisabled.value ||
      isComposing.value
    ) {
      return
    }
    if (!expanded.value) {
      return toggleMenu()
    }
    if (hoveringIndex === undefined) {
      hoveringIndex = states.hoveringIndex
    }
    let newIndex = -1
    if (direction === 'forward') {
      newIndex = hoveringIndex + 1
      if (newIndex >= options.length) {
        // return to the first option
        newIndex = 0
      }
    } else if (direction === 'backward') {
      newIndex = hoveringIndex - 1
      if (newIndex < 0 || newIndex >= options.length) {
        // navigate to the last one
        newIndex = options.length - 1
      }
    }
    const option = options[newIndex]
    if (getDisabled(option) || option.type === 'Group') {
      // prevent dispatching multiple nextTick callbacks.
      return onKeyboardNavigate(direction, newIndex)
    } else {
      states.hoveringIndex = newIndex
      scrollToItem(newIndex)
    }
  }

  const onKeyboardSelect = () => {
    if (!expanded.value) {
      return toggleMenu()
    } else if (
      ~states.hoveringIndex &&
      filteredOptions.value[states.hoveringIndex]
    ) {
      onSelect(filteredOptions.value[states.hoveringIndex])
    }
  }

  const onHoverOption = (idx?: number) => {
    states.hoveringIndex = idx ?? -1
  }

  const updateHoveringIndex = () => {
    if (!props.multiple) {
      states.hoveringIndex = filteredOptions.value.findIndex((item) => {
        return getValueKey(item) === getValueKey(props.modelValue)
      })
    } else {
      states.hoveringIndex = filteredOptions.value.findIndex((item) =>
        props.modelValue.some(
          (modelValue: unknown) => getValueKey(modelValue) === getValueKey(item)
        )
      )
    }
  }

  const onInput = (event: Event) => {
    states.inputValue = (event.target as HTMLInputElement).value
    if (props.remote) {
      debouncedOnInputChange()
    } else {
      return onInputChange()
    }
  }

  const handleClickOutside = (event: Event) => {
    expanded.value = false

    if (isFocused.value) {
      const _event = new FocusEvent('focus', event)
      handleBlur(_event)
    }
  }

  const handleMenuEnter = () => {
    states.isBeforeHide = false
    return nextTick(() => {
      if (~indexRef.value) {
        scrollToItem(states.hoveringIndex)
      }
    })
  }

  const scrollToItem = (index: number) => {
    menuRef.value!.scrollToItem(index)
  }

  const getOption = (value: unknown, cachedOptions?: Option[]) => {
    // match the option with the given value, if not found, create a new option
    const selectValue = getValueKey(value)

    if (allOptionsValueMap.value.has(selectValue)) {
      const { option } = allOptionsValueMap.value.get(selectValue)

      return option
    }
    if (cachedOptions && cachedOptions.length) {
      const option = cachedOptions.find(
        (option) => getValueKey(getValue(option)) === selectValue
      )
      if (option) {
        return option
      }
    }

    return {
      [aliasProps.value.value]: value,
      [aliasProps.value.label]: value,
    }
  }

  const initStates = (needUpdateSelectedLabel = false) => {
    if (props.multiple) {
      if ((props.modelValue as Array<any>).length > 0) {
        const cachedOptions = states.cachedOptions.slice()
        states.cachedOptions.length = 0
        states.previousValue = props.modelValue.toString()

        for (const value of props.modelValue) {
          const option = getOption(value, cachedOptions)
          states.cachedOptions.push(option)
        }
      } else {
        states.cachedOptions = []
        states.previousValue = undefined
      }
    } else {
      if (hasModelValue.value) {
        states.previousValue = props.modelValue
        const options = filteredOptions.value
        const selectedItemIndex = options.findIndex(
          (option) =>
            getValueKey(getValue(option)) === getValueKey(props.modelValue)
        )
        if (~selectedItemIndex) {
          states.selectedLabel = getLabel(options[selectedItemIndex])
        } else {
          if (!states.selectedLabel || needUpdateSelectedLabel) {
            states.selectedLabel = getValueKey(props.modelValue)
          }
        }
      } else {
        states.selectedLabel = ''
        states.previousValue = undefined
      }
    }
    clearAllNewOption()
    calculatePopperSize()
  }

  watch(
    () => props.fitInputWidth,
    () => {
      calculatePopperSize()
    }
  )

  // in order to track these individually, we need to turn them into refs instead of watching the entire
  // reactive object which could cause perf penalty when unnecessary field gets changed the watch method will
  // be invoked.

  watch(expanded, (val) => {
    if (val) {
      if (!props.persistent) {
        calculatePopperSize()
      }
      handleQueryChange('')
    } else {
      states.inputValue = ''
      states.previousQuery = null
      states.isBeforeHide = true
      createNewOption('')
    }
    emit('visible-change', val)
  })

  watch(
    () => props.modelValue,
    (val, oldVal) => {
      const isValEmpty = !val || (isArray(val) && val.length === 0)

      if (
        isValEmpty ||
        (props.multiple && !isEqual(val.toString(), states.previousValue)) ||
        (!props.multiple &&
          getValueKey(val) !== getValueKey(states.previousValue))
      ) {
        initStates(true)
      }
      if (!isEqual(val, oldVal) && props.validateEvent) {
        elFormItem?.validate?.('change').catch((err) => debugWarn(err))
      }
    },
    {
      deep: true,
    }
  )

  watch(
    () => props.options,
    () => {
      const input = inputRef.value
      // filter or remote-search scenarios are not initialized
      if (!input || (input && document.activeElement !== input)) {
        initStates()
      }
    },
    {
      deep: true,
      flush: 'post',
    }
  )

  // fix the problem that scrollTop is not reset in filterable mode
  watch(
    () => filteredOptions.value,
    () => {
      calculatePopperSize()
      return menuRef.value && nextTick(menuRef.value.resetScrollTop)
    }
  )

  watchEffect(() => {
    // Anything could cause options changed, then update options
    // If you want to control it by condition, write here
    if (states.isBeforeHide) return
    updateOptions()
  })

  watchEffect(() => {
    const { valueKey, options } = props
    const duplicateValue = new Map()
    for (const item of options) {
      const optionValue = getValue(item)
      let v = optionValue
      if (isObject(v)) {
        v = get(optionValue, valueKey)
      }
      if (duplicateValue.get(v)) {
        debugWarn(
          'ElSelectV2',
          `The option values you provided seem to be duplicated, which may cause some problems, please check.`
        )
        break
      } else {
        duplicateValue.set(v, true)
      }
    }
  })

  onMounted(() => {
    initStates()
  })
  useResizeObserver(selectRef, handleResize)
  useResizeObserver(selectionRef, resetSelectionWidth)
  useResizeObserver(menuRef, updateTooltip)
  useResizeObserver(wrapperRef, updateTooltip)
  useResizeObserver(tagMenuRef, updateTagTooltip)
  useResizeObserver(collapseItemRef, resetCollapseItemWidth)

  return {
    // data exports
    inputId,
    collapseTagSize,
    currentPlaceholder,
    expanded,
    emptyText,
    popupHeight,
    debounce,
    allOptions,
    filteredOptions,
    iconComponent,
    iconReverse,
    tagStyle,
    collapseTagStyle,
    popperSize,
    dropdownMenuVisible,
    hasModelValue,
    shouldShowPlaceholder,
    selectDisabled,
    selectSize,
    needStatusIcon,
    showClearBtn,
    states,
    isFocused,
    nsSelect,
    nsInput,

    // refs items exports
    inputRef,
    menuRef,
    tagMenuRef,
    tooltipRef,
    tagTooltipRef,
    selectRef,
    wrapperRef,
    selectionRef,
    prefixRef,
    suffixRef,
    collapseItemRef,

    popperRef,

    validateState,
    validateIcon,
    showTagList,
    collapseTagList,

    // methods exports
    debouncedOnInputChange,
    deleteTag,
    getLabel,
    getValue,
    getDisabled,
    getValueKey,
    handleClear,
    handleClickOutside,
    handleDel,
    handleEsc,
    focus,
    blur,
    handleMenuEnter,
    handleResize,
    resetSelectionWidth,
    updateTooltip,
    updateTagTooltip,
    updateOptions,
    toggleMenu,
    scrollTo: scrollToItem,
    onInput,
    onKeyboardNavigate,
    onKeyboardSelect,
    onSelect,
    onHover: onHoverOption,
    handleCompositionStart,
    handleCompositionEnd,
    handleCompositionUpdate,
  }
}

export default useSelect
