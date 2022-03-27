<template>
  <div v-if="!nowrap" ref="contentRef" :style="contentStyle">
    <slot />
    <el-visually-hidden :id="contentId">
      <template v-if="ariaLabel">
        {{ ariaLabel }}
      </template>
      <slot v-else />
    </el-visually-hidden>
    <slot name="arrow" :style="arrowStyle" />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, ref, unref, watch } from 'vue'
import { tooltipV2RootKey } from '@element-plus/tokens'
import {
  arrowMiddleware,
  getPositionDataWithUnit,
  useFloating,
} from '@element-plus/hooks'
import ElVisuallyHidden from '@element-plus/components/visual-hidden'
import { tooltipV2ContentProps } from './content'
import { tooltipV2CommonProps } from './common'

import type { CSSProperties } from 'vue'
import type { Middleware } from '@floating-ui/dom'

defineOptions({
  name: 'ElTooltipV2Content',
})

const props = defineProps({ ...tooltipV2ContentProps, ...tooltipV2CommonProps })

const { triggerRef, contentId } = inject(tooltipV2RootKey)!

const placement = ref(props.placement)
const strategy = ref(props.strategy)
const arrowRef = ref<HTMLElement>()

const { referenceRef, contentRef, middlewareData, x, y } = useFloating({
  placement,
  strategy,
  middleware: computed(() => {
    const middleware: Middleware[] = []

    if (props.showArrow) {
      middleware.push(
        arrowMiddleware({
          arrowRef,
        })
      )
    }

    return middleware
  }),
})

const contentStyle = computed<CSSProperties>(() => {
  return {
    position: unref(strategy),
    top: unref(y),
    left: unref(x),
  }
})

const arrowStyle = computed<CSSProperties>(() => {
  if (!props.showArrow) return {}

  const _middlewareData = unref(middlewareData)
  return {
    position: 'absolute',
    top: getPositionDataWithUnit(_middlewareData, 'y'),
    left: getPositionDataWithUnit(_middlewareData, 'x'),
  }
})

onMounted(() => {
  watch(
    () => props.reference || triggerRef.value,
    (el) => {
      referenceRef.value = el || undefined
    }
  )
})
</script>
