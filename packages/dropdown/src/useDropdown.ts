import { inject, computed } from 'vue'

export const useDropdown = () => {
  //todo: ELEMENT
  const ELEMENT = null
  const elDropdown = inject('elDropdown', {}) as any
  const _elDropdownSize = computed(() => (elDropdown || {}).dropdownSize)

  return {
    ELEMENT,
    elDropdown,
    _elDropdownSize,
  }
}
