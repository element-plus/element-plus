<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import { POPPER_INJECTION_KEY } from './tokens'

export default defineComponent({
  name: 'ElPopperProvider',
  setup() {
    const triggerRef = ref<HTMLElement | null>(null)

    provide(POPPER_INJECTION_KEY, {
      triggerRef,
    })
  },
})
</script>
