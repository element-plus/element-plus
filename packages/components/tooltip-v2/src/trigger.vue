<template>
  <only-child v-if="asChild" :set-ref="setTriggerRef">
    <slot />
  </only-child>
  <button v-else ref="triggerRef">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { inject, onBeforeUnmount, ref, watch } from 'vue'
import { composeEventHandlers } from '@element-plus/utils'
import { tooltipV2RootKey } from '@element-plus/tokens'
import OnlyChild from './only-child'
import { tooltipTriggerV2Props } from './trigger'

const props = defineProps(tooltipTriggerV2Props)

/**
 * onOpen opens the tooltip instantly, onTrigger acts a lil bit differently,
 * it will check if delayDuration is set to greater than 0 and based on that result,
 * if true, it opens the tooltip after delayDuration, otherwise it opens it instantly.
 */
const { onClose, onOpen, onDelayOpen } = inject(tooltipV2RootKey)!

let isMousedown = false

const triggerRef = ref<HTMLElement | null>(null)
const setTriggerRef = (el: HTMLElement | null) => {
  triggerRef.value = el
}

const onMouseenter = composeEventHandlers(props.onMouseEnter, onDelayOpen)

const onMouseleave = composeEventHandlers(props.onMouseLeave, onClose)

const onMouseup = () => {
  isMousedown = false
}

const onMousedown = composeEventHandlers(props.onMouseDown, () => {
  onClose()
  isMousedown = true
  document.addEventListener('mouseup', onMouseup, { once: true })
})

const onFocus = composeEventHandlers(props.onFocus, () => {
  if (!isMousedown) onOpen()
})

const onBlur = composeEventHandlers(props.onBlur, onClose)

const onClick = composeEventHandlers(props.onClick, (e) => {
  if ((e as MouseEvent).detail === 0) onClose()
})

const events = {
  blur: onBlur,
  click: onClick,
  focus: onFocus,
  mousedown: onMousedown,
  mouseenter: onMouseenter,
  mouseleave: onMouseleave,
}

const setEvents = <T extends (e: Event) => void>(
  el: HTMLElement | null | undefined,
  events: Record<string, T>,
  type: 'addEventListener' | 'removeEventListener'
) => {
  if (el) {
    Object.entries(events).forEach(([name, handler]) => {
      el[type](name, handler)
    })
  }
}

watch(triggerRef, (triggerEl, previousTriggerEl) => {
  setEvents(triggerEl, events, 'addEventListener')
  setEvents(previousTriggerEl, events, 'removeEventListener')
})

onBeforeUnmount(() => {
  setEvents(triggerRef.value, events, 'removeEventListener')
  document.removeEventListener('mouseup', onMouseup)
})
</script>
