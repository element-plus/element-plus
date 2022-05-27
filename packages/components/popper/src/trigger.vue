<template>
  <el-only-child
    v-if="!virtualTriggering"
    v-bind="$attrs"
    :aria-controls="ariaControls"
    :aria-describedby="ariaDescribedby"
    :aria-expanded="ariaExpanded"
    :aria-haspopup="ariaHaspopup"
    :aria-owns="ariaOwns"
  >
    <slot />
  </el-only-child>
</template>

<script lang="ts" setup>
import { computed, inject, onBeforeUnmount, onMounted, watch } from 'vue'
import { unrefElement } from '@vueuse/core'
import { ElOnlyChild } from '@element-plus/components/slot'
import { useForwardRef } from '@element-plus/hooks'
import { POPPER_INJECTION_KEY } from '@element-plus/tokens'
import { isElement } from '@element-plus/utils'
import { usePopperTriggerProps } from './trigger'

import type { WatchStopHandle } from 'vue'

defineOptions({
  name: 'ElPopperTrigger',
  inheritAttrs: false,
})

const props = defineProps(usePopperTriggerProps)

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

const ariaOwns = computed<string | undefined>(() => {
  return ariaHaspopup.value ? props.id : undefined
})

let virtualTriggerAriaStopWatch: WatchStopHandle | undefined = undefined

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
      if (virtualTriggerAriaStopWatch) {
        virtualTriggerAriaStopWatch()
        virtualTriggerAriaStopWatch = undefined
      }
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
        virtualTriggerAriaStopWatch = watch(
          [ariaControls, ariaDescribedby, ariaHaspopup, ariaExpanded, ariaOwns],
          ([
            ariaControls,
            ariaDescribedby,
            ariaHaspopup,
            ariaExpanded,
            ariaOwns,
          ]) => {
            ariaControls != null
              ? el.setAttribute('aria-controls', ariaControls)
              : el.removeAttribute('aria-controls')
            ariaDescribedby != null
              ? el.setAttribute('aria-describedby', ariaDescribedby)
              : el.removeAttribute('aria-describedby')
            ariaHaspopup != null
              ? el.setAttribute('aria-haspopup', ariaHaspopup)
              : el.removeAttribute('aria-haspopup')
            ariaExpanded != null
              ? el.setAttribute('aria-expanded', ariaExpanded)
              : el.removeAttribute('aria-expanded')
            ariaOwns != null
              ? el.setAttribute('aria-owns', ariaOwns)
              : el.removeAttribute('aria-owns')
          },
          { immediate: true }
        )
      }
      if (isElement(prevEl)) {
        prevEl.removeAttribute('aria-controls')
        prevEl.removeAttribute('aria-describedby')
        prevEl.removeAttribute('aria-haspopup')
        prevEl.removeAttribute('aria-expanded')
        prevEl.removeAttribute('aria-owns')
      }
    },
    {
      immediate: true,
    }
  )
})

onBeforeUnmount(() => {
  if (virtualTriggerAriaStopWatch) {
    virtualTriggerAriaStopWatch()
    virtualTriggerAriaStopWatch = undefined
  }
})

defineExpose({
  /**
   * @description trigger element
   */
  triggerRef,
})
</script>
