<template>
  <el-only-child
    v-if="!virtualTriggering"
    v-bind="$attrs"
    :aria-describedby="open ? id : undefined"
  >
    <slot />
  </el-only-child>
</template>

<script lang="ts">
import { defineComponent, inject, ref, watch } from 'vue'
import { ElOnlyChild } from '@element-plus/components/slot'
import { useForwardRef } from '@element-plus/hooks'
import { usePopperTriggerProps } from './popper'
import { POPPER_INJECTION_KEY } from './tokens'
import { unwrapMeasurableEl } from './utils'

export default defineComponent({
  name: 'ElPopperTrigger',
  inheritAttrs: false,
  components: { ElOnlyChild },
  props: {
    ...usePopperTriggerProps,
    onMouseenter: Function,
    onMouseleave: Function,
    onMousedown: Function,
    onKeydown: Function,
    onFocus: Function,
    onBlur: Function,
    onContextmenu: Function,
    id: String,
    open: Boolean,
  },
  setup(props) {
    const triggerRef = ref<HTMLElement | null>(null)
    const popperInjection = inject(POPPER_INJECTION_KEY, undefined)!
    useForwardRef(popperInjection.triggerRef)

    watch(
      () => props.virtualRef,
      (val) => {
        if (val) {
          popperInjection.triggerRef.value = unwrapMeasurableEl(val)
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
