// @ts-nocheck
import { computed, nextTick, onMounted, reactive, ref, watch } from 'vue'
import { isArray, isFunction, isObject } from '@vue/shared'
import {
  findLastIndex,
  get,
  isEqual,
  debounce as lodashDebounce,
} from 'lodash-unified'
import { useResizeObserver } from '@vueuse/core'
import {
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
  ValidateComponentsMap,
  debugWarn,
  escapeStringRegexp,
} from '@element-plus/utils'
import {
  useFormItem,
  useFormItemInputId,
  useFormSize,
} from '@element-plus/components/form'

import { ArrowDown } from '@element-plus/icons-vue'
import { useAllowCreate } from './useAllowCreate'
import { useInput } from './useInput'
import { useProps } from './useProps'

import type ElTooltip from '@element-plus/components/tooltip'
import type { Option, OptionType } from './select.types'
import type { ISelectV2Props } from './token'

const MINIMUM_INPUT_WIDTH = 11

const useSelect = (props: ISelectV2Props, emit) => {
  // inject
  const { t } = useLocale()
  const nsSelect = useNamespace('select')
  const nsInput = useNamespace('input')
  const { form: elForm, formItem: elFormItem } = useFormItem()
  const { inputId } = useFormItemInputId(props, {
    formItemContext: elFormItem,
  })
  const { getLabel, getValue, getDisabled, getOptions } = useProps(props)

  const states = reactive({
    inputValue: '',
    cachedOptions: [] as Option[],
    createdOptions: [] as Option[],
    hoveringIndex: -1,
    inputHovering: false,
    selectionWidth: 0,
    calculatorWidth: 0,
    previousQuery: null,
    previousValue: undefined,
    selectedLabel: '',
    menuVisibleOnFocus: false,
  })

  // data refs
  const selectedIndex = ref(-1)
  const popperSize = ref(-1)

  // DOM & Component refs
  const selectRef = ref<HTMLElement>(null)
  const selectionRef = ref<HTMLElement>(null)
  const tooltipRef = ref<InstanceType<typeof ElTooltip> | null>(null)
  const tagTooltipRef = ref<InstanceType<typeof ElTooltip> | null>(null)
  const inputRef = ref<HTMLElement>(null)
  const calculatorRef = ref<HTMLElement>(null)
  const prefixRef = ref<HTMLElement>(null)
  const suffixRef = ref<HTMLElement>(null)
  const menuRef = ref<HTMLElement>(null)
  const tagMenuRef = ref<HTMLElement>(null)

  const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(
    inputRef,
    {
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
    }
  )

  // the controller of the expanded popup
  const expanded = ref(false)

  const selectDisabled = computed(() => props.disabled || elForm?.disabled)

  const popupHeight = computed(() => {
    const totalHeight = filteredOptions.value.length * props.itemHeight
    return totalHeight > props.height ? props.height : totalHeight
  })

  const hasModelValue = computed(() => {
    return props.multiple
      ? Array.isArray(props.modelValue) && props.modelValue.length > 0
      : props.modelValue !== undefined &&
          props.modelValue !== null &&
          props.modelValue !== ''
  })

  const showClearBtn = computed(() => {
    const criteria =
      props.clearable &&
      !selectDisabled.value &&
      states.inputHovering &&
      hasModelValue.value
    return criteria
  })

  const iconComponent = computed(() =>
    props.remote && props.filterable ? '' : ArrowDown
  )

  const iconReverse = computed(
    () => iconComponent.value && nsSelect.is('reverse', expanded.value)
  )

  const validateState = computed(() => elFormItem?.validateState || '')
  const validateIcon = computed(
    () => ValidateComponentsMap[validateState.value]
  )

  const debounce = computed(() => (props.remote ? 300 : 0))

  // filteredOptions includes flatten the data into one dimensional array.
  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t('el.select.loading')
    } else {
      if (props.remote && !states.inputValue && allOptions.value.length === 0)
        return false
      if (
        props.filterable &&
        states.inputValue &&
        allOptions.value.length > 0 &&
        filteredOptions.value.length === 0
      ) {
        return props.noMatchText || t('el.select.noMatch')
      }
      if (allOptions.value.length === 0) {
        return props.noDataText || t('el.select.noData')
      }
    }
    return null
  })

  const filterOptions = (query) => {
    const isValidOption = (o: Option): boolean => {
      // when query was given, we should test on the label see whether the label contains the given query
      const regexp = new RegExp(escapeStringRegexp(query), 'i')
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
              isTitle: true,
              type: 'Group',
            },
            ...filtered,
            { type: 'Group' }
          )
        }
      } else if (props.remote || isValidOption(item)) {
        all.push(item)
      }

      return all
    }, []) as OptionType[]
  }

  const allOptions = computed(() => {
    return filterOptions('') as OptionType[]
  })

  const filteredOptions = computed(() => {
    return filterOptions(states.inputValue) as OptionType[]
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
    popperSize.value = selectRef.value?.offsetWidth || 200
  }

  const tagStyle = computed(() => {
    return { maxWidth: `${states.selectionWidth}px` }
  })

  const inputStyle = computed(() => ({
    width: `${Math.max(states.calculatorWidth, MINIMUM_INPUT_WIDTH)}px`,
  }))

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
        props.modelValue &&
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
  const {
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
  } = useInput((e) => onInput(e))

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
    createNewOption(states.inputValue)
    handleQueryChange(states.inputValue)
  }

  const debouncedOnInputChange = lodashDebounce(onInputChange, debounce.value)

  const handleQueryChange = (val: string) => {
    if (states.previousQuery === val) {
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
      nextTick(() => {
        checkDefaultFirstOption()
      })
    } else {
      nextTick(() => {
        updateHoveringIndex()
      })
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
    states.previousValue = String(val)
  }

  const getValueIndex = (arr = [], value: unknown) => {
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
    states.selectionWidth = selectionRef.value.getBoundingClientRect().width
  }

  const resetCalculatorWidth = () => {
    states.calculatorWidth = calculatorRef.value.getBoundingClientRect().width
  }

  const updateTooltip = () => {
    tooltipRef.value?.updatePopper?.()
  }

  const updateTagTooltip = () => {
    tagTooltipRef.value?.updatePopper?.()
  }

  const onSelect = (option: Option, idx: number) => {
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
      selectedIndex.value = idx
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

  const getLastNotDisabledIndex = (value) =>
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
      selected.splice(lastNotDisabledIndex, 1)
      const option = states.cachedOptions[lastNotDisabledIndex]
      states.cachedOptions.splice(lastNotDisabledIndex, 1)
      removeNewOption(option)
      update(selected)
    }
  }

  const handleClear = () => {
    let emptyValue: string | any[]
    if (isArray(props.modelValue)) {
      emptyValue = []
    } else {
      emptyValue = undefined
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
    hoveringIndex: number = undefined
  ) => {
    const options = filteredOptions.value
    if (
      !['forward', 'backward'].includes(direction) ||
      selectDisabled.value ||
      options.length <= 0 ||
      optionsAllDisabled.value
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
      onSelect(
        filteredOptions.value[states.hoveringIndex],
        states.hoveringIndex
      )
    }
  }

  const onHoverOption = (idx: number) => {
    states.hoveringIndex = idx
  }

  const updateHoveringIndex = () => {
    if (!props.multiple) {
      states.hoveringIndex = filteredOptions.value.findIndex((item) => {
        return getValueKey(item) === getValueKey(props.modelValue)
      })
    } else {
      if (props.modelValue.length > 0) {
        states.hoveringIndex = Math.min.apply(
          null,
          props.modelValue.map((selected) => {
            return filteredOptions.value.findIndex((item) => {
              return getValue(item) === selected
            })
          })
        )
      } else {
        states.hoveringIndex = -1
      }
    }
  }

  const onInput = (event) => {
    states.inputValue = event.target.value
    if (states.inputValue.length > 0 && !expanded.value) {
      expanded.value = true
    }
    if (props.remote) {
      debouncedOnInputChange()
    } else {
      return onInputChange()
    }
  }

  const handleClickOutside = () => {
    expanded.value = false
  }

  const handleMenuEnter = () => {
    return nextTick(() => {
      if (~indexRef.value) {
        scrollToItem(states.hoveringIndex)
      }
    })
  }

  const scrollToItem = (index: number) => {
    menuRef.value.scrollToItem(index)
  }

  const initStates = () => {
    if (props.multiple) {
      if ((props.modelValue as Array<any>).length > 0) {
        states.cachedOptions.length = 0
        states.previousValue = props.modelValue.toString()

        for (const value of props.modelValue) {
          const selectValue = getValueKey(value)

          if (filteredOptionsValueMap.value.has(selectValue)) {
            const { option } = filteredOptionsValueMap.value.get(selectValue)

            states.cachedOptions.push(option)
          }
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
          states.selectedLabel = getValueKey(props.modelValue)
        }
      } else {
        states.selectedLabel = ''
        states.previousValue = undefined
      }
    }
    clearAllNewOption()
    calculatePopperSize()
  }

  // in order to track these individually, we need to turn them into refs instead of watching the entire
  // reactive object which could cause perf penalty when unnecessary field gets changed the watch method will
  // be invoked.

  watch(expanded, (val) => {
    if (val) {
      handleQueryChange('')
    } else {
      states.inputValue = ''
      states.previousQuery = null
      createNewOption('')
    }
    emit('visible-change', val)
  })

  watch(
    () => props.modelValue,
    (val, oldVal) => {
      if (!val || val.toString() !== states.previousValue) {
        initStates()
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
    }
  )

  // fix the problem that scrollTop is not reset in filterable mode
  watch(
    () => filteredOptions.value,
    () => {
      return menuRef.value && nextTick(menuRef.value.resetScrollTop)
    }
  )

  onMounted(() => {
    initStates()
  })
  useResizeObserver(selectRef, handleResize)
  useResizeObserver(selectionRef, resetSelectionWidth)
  useResizeObserver(calculatorRef, resetCalculatorWidth)
  useResizeObserver(menuRef, updateTooltip)
  useResizeObserver(tagMenuRef, updateTagTooltip)

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
    inputStyle,
    popperSize,
    dropdownMenuVisible,
    hasModelValue,
    shouldShowPlaceholder,
    selectDisabled,
    selectSize,
    showClearBtn,
    states,
    isFocused,
    nsSelect,
    nsInput,

    // refs items exports
    calculatorRef,
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
    handleBlur,
    handleClear,
    handleClickOutside,
    handleDel,
    handleEsc,
    handleFocus,
    focus,
    blur,
    handleMenuEnter,
    handleResize,
    resetSelectionWidth,
    resetCalculatorWidth,
    updateTooltip,
    updateTagTooltip,
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
