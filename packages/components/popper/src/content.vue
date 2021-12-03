<template>
  <div ref="popperContentRef" :style="contentStyle" :class="contentClass">
    <el-slot tag="div" style="">
      <slot />
    </el-slot>
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
} from 'vue'
import { createPopper } from '@popperjs/core'
import { ElSlot } from '@element-plus/components/slot'
import PopupManager from '@element-plus/utils/popup-manager'
import { debugWarn } from '@element-plus/utils/error'
import { POPPER_INJECTION_KEY, POPPER_CONTENT_INJECTION_KEY } from './tokens'
import { usePopperContentProps } from './popper'
import { buildPopperOptions } from './utils'

export default defineComponent({
  name: 'ElPopperContent',
  components: {
    ElSlot,
  },
  inheritAttrs: false,
  props: usePopperContentProps,
  setup(props) {
    const { triggerRef } = inject(POPPER_INJECTION_KEY, undefined)!
    const popperContentRef = ref<HTMLDivElement | null>(null)
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
      return [{ zIndex: unref(contentZIndex) }, props.style] as any
    })

    const contentClass = computed(() => {
      return [
        {
          'el-popper': true,
          'is-pure': props.pure,
          [`is-${props.effect}`]: !!props.effect,
        },
        props.className,
      ]
    })

    onMounted(() => {
      const popperContentEl = unref(popperContentRef)!
      const triggerEl = unref(triggerRef)
      const arrowEl = unref(arrowRef)

      if (!triggerEl) {
        debugWarn(
          'ElPopper',
          'Popper content needs a HTMLElement or virtual trigger to work'
        )
      }

      const options = buildPopperOptions(props, {
        arrowEl,
        arrowOffset: unref(arrowOffset),
      })

      const instance = createPopper(triggerEl, popperContentEl, options)
      instance.update()
    })

    return {
      popperContentRef,
      contentStyle,
      contentClass,
    }
  },
})
</script>
