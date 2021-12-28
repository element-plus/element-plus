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
    const popperProvides = {
      triggerRef: ref<HTMLElement | null>(null),
      popperInstanceRef: ref(null),
      contentRef: ref(null),
    } as ElPopperInjectionContext

    provide(POPPER_INJECTION_KEY, popperProvides)

    return popperProvides
  },
})
</script>
