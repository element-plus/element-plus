import { computed, ref } from 'vue'
import type { ISelectProps } from './token'
import type { Option } from './select.types'

export function useAllowCreate(props: ISelectProps, states) {

  const createOptionCount = ref(0)
  const cachedSelectedOption = ref<Option>(null)

  const enableAllowCreateMode = computed(() => {
    return props.allowCreate && props.filterable
  })

  function hasExistingOption(query: string) {
    if (!props.options) {
      return false
    }
    return props.options.concat(states.createdOptions).some(option => {
      return option.value === query
    })
  }

  function selectNewOption(option: Option) {
    if (!enableAllowCreateMode.value) {
      return
    }
    if (props.multiple && option.created) {
      states.createdOptions.pop()
      states.createdOptions.push({
        ...option,
        disabled: false,
      })
      createOptionCount.value++
    } else {
      cachedSelectedOption.value = option
    }
  }

  function createNewOption(query: string) {
    if (enableAllowCreateMode.value) {
      if (query && query.length > 0 && !hasExistingOption(query)) {
        const newOption = {
          value: query,
          label: query,
          created: true,
          disabled: false,
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
    if (!enableAllowCreateMode.value || !option || !option.created) {
      return
    }
    const idx = states.createdOptions.findIndex(it => it.value === option.value)
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
