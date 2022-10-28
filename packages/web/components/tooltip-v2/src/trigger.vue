<template>
  <forward-ref v-if="nowrap" :set-ref="setTriggerRef" only-child>
    <slot />
  </forward-ref>
  <button v-else ref="triggerRef" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { inject, onBeforeUnmount, watch } from 'vue'
import { composeEventHandlers } from '@element-plus/utils'
import { tooltipV2RootKey } from '@element-plus/tokens'
import ForwardRef from './forward-ref'
import { tooltipV2TriggerProps } from './trigger'
import { tooltipV2CommonProps } from './common'

defineOptions({
  name: 'ElTooltipV2Trigger',
})

const props = defineProps({
  ...tooltipV2CommonProps,
  ...tooltipV2TriggerProps,
})

/**
 * onOpen opens the tooltip instantly, onTrigger acts a lil bit differently,
 * it will check if delayDuration is set to greater than 0 and based on that result,
 * if true, it opens the tooltip after delayDuration, otherwise it opens it instantly.
 */
const { onClose, onOpen, onDelayOpen, triggerRef, contentId } =
  inject(tooltipV2RootKey)!

let isMousedown = false

const setTriggerRef = (el: HTMLElement | null) => {
  triggerRef.value = el
}

const onMouseup = () => {
  isMousedown = false
}

const onMouseenter = composeEventHandlers(props.onMouseEnter, onDelayOpen)

const onMouseleave = composeEventHandlers(props.onMouseLeave, onClose)

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

  if (triggerEl) {
    triggerEl.setAttribute('aria-describedby', contentId.value)
  }
})

onBeforeUnmount(() => {
  setEvents(triggerRef.value, events, 'removeEventListener')
  document.removeEventListener('mouseup', onMouseup)
})
</script>
