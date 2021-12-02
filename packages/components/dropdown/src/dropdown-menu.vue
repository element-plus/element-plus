<template>
  <ul
    ref="dropdownListWrapperRef"
    role="menu"
    :class="['el-dropdown-menu', size && `el-dropdown-menu--${size}`]"
    @keydown="onKeydown"
  >
    <slot></slot>
  </ul>
</template>
<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  inject,
  ref,
} from 'vue'
import { ClickOutside } from '@element-plus/directives'

import { FOCUS_TRAP_INJECTION_KEY } from '@element-plus/components/focus-trap'
import { DROPDOWN_INJECTION_KEY } from './tokens'
import { useDropdown, initDropdownDomEvent } from './useDropdown'

export default defineComponent({
  name: 'ElDropdownMenu',
  directives: {
    ClickOutside,
  },
  inheritAttrs: false,
  setup() {
    const { _elDropdownSize, elDropdown } = useDropdown()
    const size = _elDropdownSize.value
    const dropdownListWrapperRef = ref<HTMLElement>()

    const { focusTrapRef, onKeydown } = inject(
      FOCUS_TRAP_INJECTION_KEY,
      undefined
    )!

    const { contentRef } = inject(DROPDOWN_INJECTION_KEY, undefined)!
    const dropdownMenuVm = getCurrentInstance()!

    return {
      size,
      dropdownListWrapperRef,
      onKeydown,
    }
  },
})
</script>
