import {
  computed,
  nextTick,
  onMounted,
  provide,
  reactive,
  ref,
  watch,
} from 'vue'
import { get, isEqual } from 'lodash-unified'
import {
  ensureArray,
  isArray,
  isClient,
  isFunction,
  isObject,
  isPlainObject,
  isUndefined,
} from '@element-plus/utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import {
  useEmptyValues,
  useId,
  useLocale,
  useNamespace,
} from '@element-plus/hooks'
import { flatSelectKey } from './token'

import type { ScrollbarInstance } from '@element-plus/components/scrollbar'
import type { FlatSelectEmits, SelectProps } from './select'
import type { OptionPublicInstance, OptionValue, SelectStates } from './type'

export const useFlatSelect = (props: SelectProps, emit: FlatSelectEmits) => {
  const { t } = useLocale()
  const contentId = useId()
  const nsSelect = useNamespace('select')

  const states = reactive<SelectStates>({
    options: new Map(),
    cachedOptions: new Map(),
    optionValues: [], // sorted value of options
    selected: [],
    collapseItemWidth: 0,
    hoveringIndex: -1,

    //TODO: maybe move this to useSelect
    selectionWidth: 0,
    selectedLabel: '',
    inputValue: '',
    isBeforeHide: false,
    previousQuery: null,
    inputHovering: false,
    menuVisibleOnFocus: false,
  })

  // template refs
  const menuRef = ref<HTMLElement>()
  const scrollbarRef = ref<ScrollbarInstance>()
  // the controller of the expanded popup

  const { isEmptyValue } = useEmptyValues(props)

  const hasModelValue = computed(() => {
    return isArray(props.modelValue)
      ? props.modelValue.length > 0
      : !isEmptyValue(props.modelValue)
  })

  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t('el.select.loading')
    } else {
      if (
        props.filterable &&
        states.inputValue &&
        states.options.size > 0 &&
        filteredOptionsCount.value === 0
      ) {
        return props.noMatchText || t('el.select.noMatch')
      }
      if (states.options.size === 0) {
        return props.noDataText || t('el.select.noData')
      }
    }
    return null
  })

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

  const cachedOptionsArray = computed(() =>
    Array.from(states.cachedOptions.values())
  )

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

  watch(
    // fix `Array.prototype.push/splice/..` cannot trigger non-deep watcher
    // https://github.com/vuejs/vue-next/issues/2116
    () => states.options.entries(),
    () => {
      if (!isClient) return
      setSelected()
      if (
        props.defaultFirstOption &&
        (props.filterable || props.remote) &&
        filteredOptionsCount.value
      ) {
        checkDefaultFirstOption()
      }
    },
    {
      flush: 'post',
    }
  )

  const handleQueryChange = (val: string) => {
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
      filteredOptionsCount.value
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
    const optionsInDropdown = optionsArray.value.filter(
      (n) => n.visible && !n.disabled && !n.states.groupDisabled
    )
    const userCreatedOption = optionsInDropdown.find((n) => n.created)
    const firstOriginOption = optionsInDropdown[0]
    const valueList = optionsArray.value.map((item) => item.value)
    states.hoveringIndex = getValueIndex(
      valueList,
      userCreatedOption || firstOriginOption
    )
  }

  const setSelected = () => {
    if (!props.multiple) {
      const value = isArray(props.modelValue)
        ? props.modelValue[0]
        : props.modelValue
      const option = getOption(value)
      states.selectedLabel = option.currentLabel
      states.selected = [option]
      return
    } else {
      states.selectedLabel = ''
    }
    const result: SelectStates['selected'] = []
    if (!isUndefined(props.modelValue)) {
      ensureArray(props.modelValue).forEach((value) => {
        result.push(getOption(value))
      })
    }
    states.selected = result
  }

  const getOption = (value: OptionValue) => {
    let option
    const isObjectValue = isPlainObject(value)

    for (let i = states.cachedOptions.size - 1; i >= 0; i--) {
      const cachedOption = cachedOptionsArray.value[i]
      const isEqualValue = isObjectValue
        ? get(cachedOption.value, props.valueKey) === get(value, props.valueKey)
        : cachedOption.value === value
      if (isEqualValue) {
        option = {
          value,
          currentLabel: cachedOption.currentLabel,
          get isDisabled() {
            return cachedOption.isDisabled
          },
        }
        break
      }
    }
    if (option) return option
    const label = isObjectValue ? value.label : value ?? ''
    const newOption = {
      value,
      currentLabel: label,
    }
    return newOption
  }

  const updateHoveringIndex = () => {
    states.hoveringIndex = optionsArray.value.findIndex((item) =>
      states.selected.some(
        (selected) => getValueKey(selected) === getValueKey(item)
      )
    )
  }

  const emitChange = (val: OptionValue | OptionValue[]) => {
    if (!isEqual(props.modelValue, val)) {
      emit(CHANGE_EVENT, val)
    }
  }

  const handleOptionSelect = (option: OptionPublicInstance) => {
    if (props.multiple) {
      const value = ensureArray(props.modelValue ?? []).slice()
      const optionIndex = getValueIndex(value, option)
      if (optionIndex > -1) {
        value.splice(optionIndex, 1)
      } else if (
        props.multipleLimit <= 0 ||
        value.length < props.multipleLimit
      ) {
        value.push(option.value)
      }
      emit(UPDATE_MODEL_EVENT, value)
      emitChange(value)
      if (option.created) {
        handleQueryChange('')
      }
      if (props.filterable && !props.reserveKeyword) {
        states.inputValue = ''
      }
    } else {
      emit(UPDATE_MODEL_EVENT, option.value)
      emitChange(option.value)
    }
  }

  const getValueIndex = (arr: OptionValue[], option: OptionPublicInstance) => {
    if (isUndefined(option)) return -1
    if (!isObject(option.value)) return arr.indexOf(option.value)

    return arr.findIndex((item) => {
      return isEqual(get(item, props.valueKey), getValueKey(option))
    })
  }

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

    if (target) {
      //TODO:
      //  const menu = tooltipRef.value?.popperRef?.contentRef?.querySelector?.(
      //    `.${nsSelect.be('dropdown', 'wrap')}`
      //  )
      //  if (menu) {
      //    scrollIntoView(menu as HTMLElement, target)
      //  }
    }
    //scrollbarRef.value?.handleScroll()
  }

  const onOptionCreate = (vm: OptionPublicInstance) => {
    states.options.set(vm.value, vm)
    states.cachedOptions.set(vm.value, vm)
  }

  const onOptionDestroy = (key: OptionValue, vm: OptionPublicInstance) => {
    if (states.options.get(key) === vm) {
      states.options.delete(key)
    }
  }

  const selectOption = () => {
    const option = optionsArray.value[states.hoveringIndex]
    if (option && !option.isDisabled) {
      handleOptionSelect(option)
    }
  }

  const getValueKey = (
    item: OptionPublicInstance | SelectStates['selected'][0]
  ) => {
    return isObject(item.value) ? get(item.value, props.valueKey) : item.value
  }

  const popupScroll = (data: { scrollTop: number; scrollLeft: number }) => {
    emit('popup-scroll', data)
  }

  onMounted(() => {
    setSelected()
  })

  const FLAT_SELECT_API = {
    t,
    contentId,
    nsSelect,
    states,
    optionsArray,
    filteredOptionsCount,
    handleOptionSelect,
    handleQueryChange, // internal
    scrollToOption,
    hasModelValue,
    updateOptions,
    showNewOption,
    setSelected,
    emptyText,
    onOptionCreate,
    onOptionDestroy,
    selectOption,
    getValueKey,
    popupScroll,

    // DOM ref
    scrollbarRef,
    menuRef,
  }

  provide(
    flatSelectKey,
    reactive({
      props,
      states,
      optionsArray,
      setSelected,
      handleOptionSelect,
      onOptionCreate,
      onOptionDestroy,
    })
  )

  provide('flat-select', FLAT_SELECT_API)

  return FLAT_SELECT_API
}
