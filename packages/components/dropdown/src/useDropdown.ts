import { computed, inject } from 'vue'
import { DROPDOWN_INSTANCE_INJECTION_KEY } from './tokens'

import type { IGDropdownInstance } from './dropdown'

export const useDropdown = () => {
  const elDropdown = inject<IGDropdownInstance>(
    DROPDOWN_INSTANCE_INJECTION_KEY,
    {}
  )
  const _elDropdownSize = computed(() => elDropdown?.dropdownSize)

  return {
    elDropdown,
    _elDropdownSize,
  }
}
