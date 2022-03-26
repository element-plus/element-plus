<template>
  <el-only-child
    v-if="!virtualTriggering"
    v-bind="$attrs"
    :aria-describedby="open ? id : undefined"
  >
    <slot />
  </el-only-child>
</template>

<script lang="ts" setup>
import { inject, onMounted, watch } from 'vue'
import { unrefElement } from '@vueuse/core'
import { ElOnlyChild } from '@element-plus/components/slot'
import { useForwardRef } from '@element-plus/hooks'
import { POPPER_INJECTION_KEY } from '@element-plus/tokens'
import { isElement } from '@element-plus/utils'
import { usePopperTriggerProps } from './trigger'

defineOptions({
  name: 'ElPopperTrigger',
  inheritAttrs: false,
})

const props = defineProps(usePopperTriggerProps)

const { triggerRef } = inject(POPPER_INJECTION_KEY, undefined)!

useForwardRef(triggerRef)

onMounted(() => {
  watch(
    () => props.virtualRef,
    (virtualEl) => {
      if (virtualEl) {
        triggerRef.value = unrefElement(virtualEl as HTMLElement)
      }
    },
    {
      immediate: true,
    }
  )

  watch(
    () => triggerRef.value,
    (el, prevEl) => {
      if (isElement(el)) {
        ;[
          'onMouseenter',
          'onMouseleave',
          'onClick',
          'onKeydown',
          'onFocus',
          'onBlur',
          'onContextmenu',
        ].forEach((eventName) => {
          const handler = props[eventName]
          if (handler) {
            ;(el as HTMLElement).addEventListener(
              eventName.slice(2).toLowerCase(),
              handler
            )
            ;(prevEl as HTMLElement)?.removeEventListener?.(
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
})

defineExpose({
  /**
   * @description trigger element
   */
  triggerRef,
})
</script>
