<template>
  <div
    ref="popperContentRef"
    :style="contentStyle"
    :class="contentClass"
    :role="role"
    :aria-label="ariaLabel"
    :aria-modal="ariaModal"
    tabindex="-1"
    @mouseenter="(e) => $emit('mouseenter', e)"
    @mouseleave="(e) => $emit('mouseleave', e)"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, onMounted, provide, ref, unref, watch } from 'vue'
import { createPopper } from '@popperjs/core'
import { useNamespace, useZIndex } from '@element-plus/hooks'
import {
  POPPER_CONTENT_INJECTION_KEY,
  POPPER_INJECTION_KEY,
  formItemContextKey,
} from '@element-plus/tokens'
import { usePopperContentProps } from './content'
import { buildPopperOptions, unwrapMeasurableEl } from './utils'

import type { WatchStopHandle } from 'vue'

defineOptions({
  name: 'ElPopperContent',
})

defineEmits(['mouseenter', 'mouseleave'])

const props = defineProps(usePopperContentProps)

const { popperInstanceRef, contentRef, triggerRef, role } = inject(
  POPPER_INJECTION_KEY,
  undefined
)!
const formItemContext = inject(formItemContextKey, undefined)
const { nextZIndex } = useZIndex()
const ns = useNamespace('popper')
const popperContentRef = ref<HTMLElement>()
const arrowRef = ref<HTMLElement>()
const arrowOffset = ref<number>()
provide(POPPER_CONTENT_INJECTION_KEY, {
  arrowRef,
  arrowOffset,
})
// disallow auto-id from inside popper content
provide(formItemContextKey, {
  ...formItemContext,
  addInputId: () => undefined,
  removeInputId: () => undefined,
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

const ariaModal = computed<string | undefined>(() => {
  return role.value === 'dialog' ? 'false' : undefined
})

const createPopperInstance = ({ referenceEl, popperContentEl, arrowEl }) => {
  const options = buildPopperOptions(props, {
    arrowEl,
    arrowOffset: unref(arrowOffset),
  })

  return createPopper(referenceEl, popperContentEl, options)
}

const updatePopper = (shouldUpdateZIndex = true) => {
  unref(popperInstanceRef)?.update()
  shouldUpdateZIndex && (contentZIndex.value = props.zIndex || nextZIndex())
}

const togglePopperAlive = () => {
  const monitorable = { name: 'eventListeners', enabled: props.visible }
  unref(popperInstanceRef)?.setOptions?.((options) => ({
    ...options,
    modifiers: [...(options.modifiers || []), monitorable],
  }))
  updatePopper(false)
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
