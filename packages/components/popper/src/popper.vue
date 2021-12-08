<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import { POPPER_INJECTION_KEY } from './tokens'

import type { ElPopperInjectionContext } from './tokens'

export default defineComponent({
  name: 'ElPopperProvider',
  inheritAttrs: false,
  setup() {
    const triggerRef = ref<HTMLElement | null>(null)
    const popperInstanceRef = ref(null)
    const contentRef = ref(null)
    provide(POPPER_INJECTION_KEY, {
      triggerRef,
      popperInstanceRef,
      contentRef,
    })

    return {
      popperInstanceRef,
      triggerRef,
      contentRef,
    } as ElPopperInjectionContext
  },
})
</script>
