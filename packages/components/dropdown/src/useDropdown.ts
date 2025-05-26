import { computed, inject } from 'vue'
import type { IElDropdownInstance } from './dropdown'

export const useDropdown = () => {
  const elDropdown = inject<IElDropdownInstance>('elDropdown', {})
  const _elDropdownSize = computed(() => elDropdown?.dropdownSize)

  return {
    elDropdown,
    _elDropdownSize,
  }
}
