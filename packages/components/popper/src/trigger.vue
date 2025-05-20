<template>
  <el-only-child
    v-if="!virtualTriggering"
    v-bind="$attrs"
    :aria-controls="ariaControls"
    :aria-describedby="ariaDescribedby"
    :aria-expanded="ariaExpanded"
    :aria-haspopup="ariaHaspopup"
  >
    <slot />
  </el-only-child>
</template>

<script lang="ts" setup>
import { computed, inject, onBeforeUnmount, onMounted, watch } from 'vue'
import { isNil } from 'lodash-unified'
import { unrefElement } from '@vueuse/core'
import { ElOnlyChild } from '@element-plus/components/slot'
import { useForwardRef } from '@element-plus/hooks'
import { isElement, isFocusable } from '@element-plus/utils'
import { POPPER_INJECTION_KEY } from './constants'
import { popperTriggerProps } from './trigger'

import type { WatchStopHandle } from 'vue'

defineOptions({
  name: 'ElPopperTrigger',
  inheritAttrs: false,
})

const props = defineProps(popperTriggerProps)

const { role, triggerRef } = inject(POPPER_INJECTION_KEY, undefined)!

useForwardRef(triggerRef)

const ariaControls = computed<string | undefined>(() => {
  return ariaHaspopup.value ? props.id : undefined
})

const ariaDescribedby = computed<string | undefined>(() => {
  if (role && role.value === 'tooltip') {
    return props.open && props.id ? props.id : undefined
  }
  return undefined
})

const ariaHaspopup = computed<string | undefined>(() => {
  if (role && role.value !== 'tooltip') {
    return role.value
  }
  return undefined
})

const ariaExpanded = computed<string | undefined>(() => {
  return ariaHaspopup.value ? `${props.open}` : undefined
})

let virtualTriggerAriaStopWatch: WatchStopHandle | undefined = undefined

const TRIGGER_ELE_EVENTS = [
  'onMouseenter',
  'onMouseleave',
  'onClick',
  'onKeydown',
  'onFocus',
  'onBlur',
  'onContextmenu',
] as const

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
    triggerRef,
    (el, prevEl) => {
      virtualTriggerAriaStopWatch?.()
      virtualTriggerAriaStopWatch = undefined
      if (isElement(el)) {
        TRIGGER_ELE_EVENTS.forEach((eventName) => {
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
        if (isFocusable(el as HTMLElement)) {
          virtualTriggerAriaStopWatch = watch(
            [ariaControls, ariaDescribedby, ariaHaspopup, ariaExpanded],
            (watches) => {
              ;[
                'aria-controls',
                'aria-describedby',
                'aria-haspopup',
                'aria-expanded',
              ].forEach((key, idx) => {
                isNil(watches[idx])
                  ? el.removeAttribute(key)
                  : el.setAttribute(key, watches[idx]!)
              })
            },
            { immediate: true }
          )
        }
      }
      if (isElement(prevEl) && isFocusable(prevEl as HTMLElement)) {
        ;[
          'aria-controls',
          'aria-describedby',
          'aria-haspopup',
          'aria-expanded',
        ].forEach((key) => prevEl.removeAttribute(key))
      }
    },
    {
      immediate: true,
    }
  )
})

onBeforeUnmount(() => {
  virtualTriggerAriaStopWatch?.()
  virtualTriggerAriaStopWatch = undefined
  if (triggerRef.value && isElement(triggerRef.value)) {
    const el = triggerRef.value as HTMLElement
    TRIGGER_ELE_EVENTS.forEach((eventName) => {
      const handler = props[eventName]
      if (handler) {
        el.removeEventListener(eventName.slice(2).toLowerCase(), handler)
      }
    })
    triggerRef.value = undefined
  }
})

defineExpose({
  /**
   * @description trigger element
   */
  triggerRef,
})
</script>
