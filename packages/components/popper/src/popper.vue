<template>
  <slot />
</template>

<script lang="ts" setup>
import { computed, provide, ref } from 'vue'
import { POPPER_INJECTION_KEY } from './constants'

import type { Instance as PopperInstance } from '@popperjs/core'
import type { GPopperInjectionContext } from './constants'
import type { PopperProps } from './popper'

defineOptions({
  name: 'GPopper',
  inheritAttrs: false,
})
const props = withDefaults(defineProps<PopperProps>(), {
  role: 'tooltip',
})

const triggerRef = ref<HTMLElement>()
const popperInstanceRef = ref<PopperInstance>()
const contentRef = ref<HTMLElement>()
const referenceRef = ref<HTMLElement>()
const role = computed(() => props.role)

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
  /**
   * @description role determines how aria attributes are distributed
   */
  role,
} as GPopperInjectionContext

defineExpose(popperProvides)

provide(POPPER_INJECTION_KEY, popperProvides)
</script>
