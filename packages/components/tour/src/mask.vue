<template>
  <div
    v-if="visible"
    :class="ns.e('mask')"
    :style="({
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex,
    pointerEvents: pos && targetAreaClickable ? 'none' : 'auto',
  } as any)"
    v-bind="$attrs"
  >
    <svg
      :style="{
        width: '100%',
        height: '100%',
      }"
    >
      <path :class="ns.e('hollow')" :style="pathStyle" :d="path" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, toRef } from 'vue'
import { useLockscreen } from '@element-plus/hooks'
import { maskProps } from './mask'
import { tourKey } from './helper'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ElTourMask',
  inheritAttrs: false,
})

const props = defineProps(maskProps)

const { ns } = inject(tourKey)!
const radius = computed(() => props.pos?.radius ?? 2)
const roundInfo = computed(() => {
  const v = radius.value
  const baseInfo = `a${v},${v} 0 0 1`
  return {
    topRight: `${baseInfo} ${v},${v}`,
    bottomRight: `${baseInfo} ${-v},${v}`,
    bottomLeft: `${baseInfo} ${-v},${-v}`,
    topLeft: `${baseInfo} ${v},${-v}`,
  }
})

const path = computed(() => {
  const width = window.innerWidth
  const height = window.innerHeight
  const info = roundInfo.value
  const _path = `M${width},0 L0,0 L0,${height} L${width},${height} L${width},0 Z`
  const _radius = radius.value
  return props.pos
    ? `${_path} M${props.pos.left + _radius},${props.pos.top} h${
        props.pos.width - _radius * 2
      } ${info.topRight} v${props.pos.height - _radius * 2} ${
        info.bottomRight
      } h${-props.pos.width + _radius * 2} ${info.bottomLeft} v${
        -props.pos.height + _radius * 2
      } ${info.topLeft} z`
    : _path
})

const pathStyle = computed<CSSProperties>(() => {
  return {
    fill: props.fill,
    pointerEvents: 'auto',
    cursor: 'auto',
  }
})

useLockscreen(toRef(props, 'visible'), {
  ns,
})
</script>
