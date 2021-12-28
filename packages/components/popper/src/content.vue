<template>
  <div
    ref="popperContentRef"
    :style="contentStyle"
    :class="contentClass"
    @mouseenter="(e) => $emit('mouseenter', e)"
    @mouseleave="(e) => $emit('mouseleave', e)"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  inject,
  provide,
  unref,
  onMounted,
  watch,
} from 'vue'
import { createPopper } from '@popperjs/core'
import PopupManager from '@element-plus/utils/popup-manager'
import { POPPER_INJECTION_KEY, POPPER_CONTENT_INJECTION_KEY } from './tokens'
import { usePopperContentProps } from './popper'
import { buildPopperOptions, unwrapMeasurableEl } from './utils'

export default defineComponent({
  name: 'ElPopperContent',
  props: usePopperContentProps,
  emits: ['mouseenter', 'mouseleave'],
  setup(props) {
    const { triggerRef, popperInstanceRef, contentRef } = inject(
      POPPER_INJECTION_KEY,
      undefined
    )!
    const popperContentRef = ref<HTMLElement | null>(null)
    const arrowRef = ref<HTMLElement | null>(null)
    const arrowOffset = ref<number>()
    provide(POPPER_CONTENT_INJECTION_KEY, {
      arrowRef,
      arrowOffset,
    })
    const contentZIndex = computed(
      () => props.zIndex || PopupManager.nextZIndex()
    )

    const contentStyle = computed(
      () => [{ zIndex: unref(contentZIndex) }, props.popperStyle] as any
    )

    const contentClass = computed(() => [
      {
        'el-popper': true,
        'is-pure': props.pure,
        [`is-${props.effect}`]: !!props.effect,
      },
      props.popperClass,
    ])

    const createPopperInstance = ({
      referenceEl,
      popperContentEl,
      arrowEl,
    }) => {
      const options = buildPopperOptions(props, {
        arrowEl,
        arrowOffset: unref(arrowOffset),
      })

      return createPopper(referenceEl, popperContentEl, options)
    }

    const updatePopper = () => {
      unref(popperInstanceRef)?.update()
    }

    onMounted(() => {
      let updateHandle: ReturnType<typeof watch>
      watch(
        () => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef),
        (val) => {
          updateHandle?.()
          if (val) {
            popperInstanceRef.value?.destroy()
            const popperContentEl = unref(popperContentRef)!
            contentRef.value = popperContentEl
            const arrowEl = unref(arrowRef)

            const newInstance = createPopperInstance({
              referenceEl: val,
              popperContentEl: unref(popperContentRef)!,
              arrowEl,
            })
            popperInstanceRef.value = newInstance

            updateHandle = watch(
              () => val!.getBoundingClientRect(),
              () => {
                updatePopper()
              },
              {
                immediate: true,
              }
            )
          } else {
            popperInstanceRef.value = null
          }
        },
        {
          immediate: true,
        }
      )
    })

    return {
      popperContentRef,
      popperInstanceRef,
      contentStyle,
      contentClass,
      updatePopper,
    }
  },
})
</script>
