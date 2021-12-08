<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, inject, ref, watch } from 'vue'
import { useForwardRef } from '@element-plus/hooks'
import { usePopperTriggerProps } from './popper'
import { POPPER_INJECTION_KEY } from './tokens'

import type { ComponentPublicInstance } from 'vue'
import type { Measurable } from './popper'

export default defineComponent({
  name: 'ElPopperTrigger',
  inheritAttrs: false,
  props: {
    ...usePopperTriggerProps,
    onMouseenter: Function,
    onMouseleave: Function,
    onMousedown: Function,
    onKeydown: Function,
    onFocus: Function,
    onBlur: Function,
    onContextmenu: Function,
  },
  setup(props) {
    const triggerRef = ref<HTMLElement | null>(null)
    const popperInjection = inject(POPPER_INJECTION_KEY, undefined)!
    useForwardRef(popperInjection.triggerRef)

    const unwrapTrigger = (maybeRef: Measurable | null) => {
      let el: HTMLElement | null = null
      if (!maybeRef) return null

      if (
        'getBoundingClientRect' in maybeRef ||
        (maybeRef as any) instanceof HTMLElement
      ) {
        el = maybeRef as HTMLElement
      } else {
        // refs can be Vue component
        el = (maybeRef as any as ComponentPublicInstance).$el
      }
      return el
    }

    watch(
      () => props.virtualRef,
      (val) => {
        if (val) {
          console.log(unwrapTrigger(val))
          popperInjection.triggerRef.value = unwrapTrigger(val)
        }
      },
      {
        immediate: true,
      }
    )

    watch(
      () => popperInjection.triggerRef.value,
      (val) => {
        if (val && val instanceof HTMLElement) {
          ;[
            'onMouseenter',
            'onMouseleave',
            'onMousedown',
            'onKeydown',
            'onFocus',
            'onBlur',
            'onContextmenu',
          ].forEach((eventName) => {
            const handler = props[eventName]
            if (handler) {
              ;(val as HTMLElement).addEventListener(
                eventName.slice(2).toLowerCase(),
                handler
              )
            }
          })
        }
      }
    )

    return {
      triggerRef,
    }
  },
})
</script>
