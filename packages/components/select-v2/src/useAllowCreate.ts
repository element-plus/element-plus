import { computed, ref } from 'vue'
import { useProps } from './useProps'
import type { ISelectV2Props } from './token'
import type { Option, SelectStates } from './select.types'

export function useAllowCreate(props: ISelectV2Props, states: SelectStates) {
  const { aliasProps, getLabel, getValue } = useProps(props)

  const createOptionCount = ref(0)
  const cachedSelectedOption = ref<Option>()

  const enableAllowCreateMode = computed(() => {
    return props.allowCreate && props.filterable
  })

  function hasExistingOption(query: string) {
    const hasOption = (option: Option) => getLabel(option) === query
    return (
      (props.options && props.options.some(hasOption)) ||
      states.createdOptions.some(hasOption)
    )
  }

  function selectNewOption(option: Option) {
    if (!enableAllowCreateMode.value) {
      return
    }
    if (props.multiple && option.created) {
      createOptionCount.value++
    } else {
      cachedSelectedOption.value = option
    }
  }

  function createNewOption(query: string) {
    if (enableAllowCreateMode.value) {
      if (query && query.length > 0) {
        if (hasExistingOption(query)) {
          return
        }
        const newOption = {
          [aliasProps.value.value]: query,
          [aliasProps.value.label]: query,
          created: true,
          [aliasProps.value.disabled]: false,
        }
        if (states.createdOptions.length >= createOptionCount.value) {
          states.createdOptions[createOptionCount.value] = newOption
        } else {
          states.createdOptions.push(newOption)
        }
      } else {
        if (props.multiple) {
          states.createdOptions.length = createOptionCount.value
        } else {
          const selectedOption = cachedSelectedOption.value
          states.createdOptions.length = 0
          if (selectedOption && selectedOption.created) {
            states.createdOptions.push(selectedOption)
          }
        }
      }
    }
  }

  function removeNewOption(option: Option) {
    if (
      !enableAllowCreateMode.value ||
      !option ||
      !option.created ||
      (option.created &&
        props.reserveKeyword &&
        states.inputValue === getLabel(option))
    ) {
      return
    }
    const idx = states.createdOptions.findIndex(
      (it) => getValue(it) === getValue(option)
    )
    if (~idx) {
      states.createdOptions.splice(idx, 1)
      createOptionCount.value--
    }
  }

  function clearAllNewOption() {
    if (enableAllowCreateMode.value) {
      states.createdOptions.length = 0
      createOptionCount.value = 0
    }
  }

  return {
    createNewOption,
    removeNewOption,
    selectNewOption,
    clearAllNewOption,
  }
}
