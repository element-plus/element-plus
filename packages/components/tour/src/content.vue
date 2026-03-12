<template>
  <div
    ref="contentRef"
    :style="contentStyle"
    :class="ns.e('content')"
    :data-side="side"
    tabindex="-1"
  >
    <g-focus-trap
      loop
      trapped
      focus-start-el="container"
      :focus-trap-el="contentRef || undefined"
      @release-requested="onCloseRequested"
      @focusout-prevented="onFocusoutPrevented"
    >
      <slot />
    </g-focus-trap>
    <span
      v-if="showArrow"
      ref="arrowRef"
      :style="arrowStyle"
      :class="ns.e('arrow')"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, ref, toRef, watch } from 'vue'
import GFocusTrap from '@element-plus/components/focus-trap'
import { tourContentEmits } from './content'
import { tourKey, useFloating } from './helper'

import type { TourContentProps } from './content'

defineOptions({
  name: 'GTourContent',
})

const props = withDefaults(defineProps<TourContentProps>(), {
  placement: 'bottom',
  reference: null,
  strategy: 'absolute',
  offset: 10,
  zIndex: 2001,
})
const emit = defineEmits(tourContentEmits)

const placement = ref(props.placement)
const strategy = ref(props.strategy)
const contentRef = ref<HTMLElement | null>(null)
const arrowRef = ref<HTMLElement | null>(null)

watch(
  () => props.placement,
  () => {
    placement.value = props.placement
  }
)

const { contentStyle, arrowStyle } = useFloating(
  toRef(props, 'reference'),
  contentRef,
  arrowRef,
  placement,
  strategy,
  toRef(props, 'offset'),
  toRef(props, 'zIndex'),
  toRef(props, 'showArrow')
)

const side = computed(() => {
  return placement.value.split('-')[0]
})

const { ns } = inject(tourKey)!

const onCloseRequested = () => {
  emit('close')
}

const onFocusoutPrevented = (event: CustomEvent) => {
  if (event.detail.focusReason === 'pointer') {
    event.preventDefault()
  }
}
</script>
