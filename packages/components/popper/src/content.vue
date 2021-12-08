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
import { debugWarn } from '@element-plus/utils/error'
import { POPPER_INJECTION_KEY, POPPER_CONTENT_INJECTION_KEY } from './tokens'
import { usePopperContentProps } from './popper'
import { buildPopperOptions } from './utils'

export default defineComponent({
  name: 'ElPopperContent',
  props: usePopperContentProps,
  inheritAttrs: false,
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

    const contentStyle = computed(() => {
      return [{ zIndex: unref(contentZIndex) }, props.popperStyle] as any
    })

    const contentClass = computed(() => {
      return [
        {
          'el-popper': true,
          'is-pure': props.pure,
          [`is-${props.effect}`]: !!props.effect,
        },
        props.popperClass,
      ]
    })

    const createPopperInstance = ({ triggerEl, popperContentEl, arrowEl }) => {
      const options = buildPopperOptions(props, {
        arrowEl,
        arrowOffset: unref(arrowOffset),
      })

      return createPopper(triggerEl, popperContentEl, options)
    }

    onMounted(() => {
      const popperContentEl = unref(popperContentRef)!
      const triggerEl = unref(triggerRef)
      const arrowEl = unref(arrowRef)

      if (!triggerEl) {
        debugWarn(
          'ElPopper',
          'Popper content needs a HTMLElement or virtual trigger to work'
        )
        return
      }

      const instance = createPopperInstance({
        triggerEl,
        popperContentEl,
        arrowEl,
      })

      popperInstanceRef.value = instance

      instance.update()

      watch(
        () => triggerEl.getBoundingClientRect(),
        () => {
          instance.update()
        }
      )

      watch(
        () => unref(triggerRef),
        (val) => {
          if (val) {
            instance.destroy()
            const newInstance = createPopperInstance({
              triggerEl: val,
              popperContentEl,
              arrowEl,
            })
            popperInstanceRef.value = newInstance
            newInstance.update()
          }
        }
      )
    })

    watch(
      () => popperContentRef.value,
      (val) => {
        contentRef.value = val
      }
    )

    return {
      popperContentRef,
      contentStyle,
      contentClass,
    }
  },
})
</script>
