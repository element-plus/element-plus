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
import { defineComponent, inject, watch } from 'vue'
import { ElOnlyChild } from '@element-plus/components/slot'
import { useForwardRef } from '@element-plus/hooks'
import { usePopperTriggerProps } from './popper'
import { POPPER_INJECTION_KEY } from './tokens'
import { unwrapMeasurableEl } from './utils'

export default defineComponent({
  name: 'ElPopperTrigger',
  components: { ElOnlyChild },
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
    id: String,
    open: Boolean,
  },
  setup(props) {
    const { triggerRef } = inject(POPPER_INJECTION_KEY, undefined)!
    useForwardRef(triggerRef)

    watch(
      () => props.virtualRef,
      (val) => {
        if (val) {
          triggerRef.value = unwrapMeasurableEl(val)
        }
      },
      {
        immediate: true,
      }
    )

    watch(
      () => triggerRef.value,
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
      },
      {
        immediate: true,
      }
    )

    return {
      triggerRef,
    }
  },
})
</script>
