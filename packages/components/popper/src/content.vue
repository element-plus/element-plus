<template>
  <div
    ref="popperContentRef"
    :style="contentStyle"
    :class="contentClass"
    role="tooltip"
    @mouseenter="(e) => $emit('mouseenter', e)"
    @mouseleave="(e) => $emit('mouseleave', e)"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, inject, provide, unref, onMounted, watch } from 'vue'
import { createPopper } from '@popperjs/core'
import { useZIndex, useNamespace } from '@element-plus/hooks'
import {
  POPPER_INJECTION_KEY,
  POPPER_CONTENT_INJECTION_KEY,
} from '@element-plus/tokens'
import { usePopperContentProps } from './content'
import { buildPopperOptions, unwrapMeasurableEl } from './utils'

import type { WatchStopHandle } from 'vue'

defineOptions({
  name: 'ElPopperContent',
})

defineEmits(['mouseenter', 'mouseleave'])

const props = defineProps(usePopperContentProps)

const { popperInstanceRef, contentRef, triggerRef } = inject(
  POPPER_INJECTION_KEY,
  undefined
)!
const { nextZIndex } = useZIndex()
const ns = useNamespace('popper')
const popperContentRef = ref<HTMLElement>()
const arrowRef = ref<HTMLElement>()
const arrowOffset = ref<number>()
provide(POPPER_CONTENT_INJECTION_KEY, {
  arrowRef,
  arrowOffset,
})
const contentZIndex = ref(props.zIndex || nextZIndex())

const computedReference = computed(
  () => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef)
)

const contentStyle = computed(
  () => [{ zIndex: unref(contentZIndex) }, props.popperStyle] as any
)

const contentClass = computed(() => [
  ns.b(),
  ns.is('pure', props.pure),
  ns.is(props.effect),
  props.popperClass,
])

const createPopperInstance = ({ referenceEl, popperContentEl, arrowEl }) => {
  const options = buildPopperOptions(props, {
    arrowEl,
    arrowOffset: unref(arrowOffset),
  })

  return createPopper(referenceEl, popperContentEl, options)
}

const updatePopper = () => {
  unref(popperInstanceRef)?.update()
  contentZIndex.value = props.zIndex || nextZIndex()
}

const togglePopperAlive = () => {
  const monitorable = { name: 'eventListeners', enabled: props.visible }
  unref(popperInstanceRef)?.setOptions?.((options) => ({
    ...options,
    modifiers: [...(options.modifiers || []), monitorable],
  }))
  updatePopper()
}

onMounted(() => {
  let updateHandle: WatchStopHandle
  watch(
    computedReference,
    (referenceEl) => {
      updateHandle?.()
      const popperInstance = unref(popperInstanceRef)
      popperInstance?.destroy?.()
      if (referenceEl) {
        const popperContentEl = unref(popperContentRef)!
        contentRef.value = popperContentEl

        popperInstanceRef.value = createPopperInstance({
          referenceEl,
          popperContentEl,
          arrowEl: unref(arrowRef),
        })

        updateHandle = watch(
          () => referenceEl.getBoundingClientRect(),
          () => updatePopper(),
          {
            immediate: true,
          }
        )
      } else {
        popperInstanceRef.value = undefined
      }
    },
    {
      immediate: true,
    }
  )

  watch(() => props.visible, togglePopperAlive, { immediate: true })

  watch(
    () =>
      buildPopperOptions(props, {
        arrowEl: unref(arrowRef),
        arrowOffset: unref(arrowOffset),
      }),
    (option) => popperInstanceRef.value?.setOptions(option)
  )
})

defineExpose({
  /**
   * @description popper content element
   */
  popperContentRef,
  /**
   * @description popperjs instance
   */
  popperInstanceRef,
  /**
   * @description method for updating popper
   */
  updatePopper,

  /**
   * @description content style
   */
  contentStyle,
})
</script>
