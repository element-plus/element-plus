<template>
  <slot />
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue'
import { POPPER_INJECTION_KEY } from '@element-plus/tokens'

import type { Instance as PopperInstance } from '@popperjs/core'
import type { ElPopperInjectionContext } from '@element-plus/tokens'

defineOptions({
  name: 'ElPopperRoot',
  inheritAttrs: false,
})

const triggerRef = ref<HTMLElement>()
const popperInstanceRef = ref<PopperInstance>()
const contentRef = ref<HTMLElement>()
const referenceRef = ref<HTMLElement>()

const popperProvides = {
  /**
   * @description trigger element
   */
  triggerRef,
  /**
   * @description popperjs instance
   */
  popperInstanceRef,
  /**
   * @description popper content element
   */
  contentRef,
  /**
   * @description popper reference element
   */
  referenceRef,
} as ElPopperInjectionContext

defineExpose(popperProvides)

provide(POPPER_INJECTION_KEY, popperProvides)
</script>
